
import React, { useState, useRef } from 'react';
import { AppSettings, AiModel, ThinkingLevel } from '../types';
import { Trash2, Plus, Upload, ShieldCheck, Cpu, Zap, RefreshCw, Image as ImageIcon, X } from 'lucide-react';
import { gameAI } from '../services/geminiService';
import { MobileSettingsModal } from './Mobile/MobileSettingsModal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  settings: AppSettings;
  onUpdateSettings: (settings: Partial<AppSettings>) => void;
}

type Tab = 'general' | 'api';

const PRESET_COLORS = [
  { name: 'Lục bảo (Default)', hex: '#10b981' },
  { name: 'Thiên thanh', hex: '#0ea5e9' },
  { name: 'Hoa hồng', hex: '#f43f5e' },
  { name: 'Hổ phách', hex: '#f59e0b' },
  { name: 'Tím thạch anh', hex: '#8b5cf6' },
  { name: 'Ngọc bích', hex: '#06b6d4' },
];

const FONT_OPTIONS = [
  { name: 'Inter (Mặc định)', value: '"Inter"' },
  { name: 'Roboto', value: '"Roboto"' },
  { name: 'Open Sans', value: '"Open Sans"' },
  { name: 'Montserrat', value: '"Montserrat"' },
  { name: 'Playfair Display', value: '"Playfair Display"' },
  { name: 'Cormorant Garamond', value: '"Cormorant Garamond"' },
  { name: 'JetBrains Mono', value: '"JetBrains Mono"' },
  { name: 'Space Grotesk', value: '"Space Grotesk"' },
  { name: 'Be Vietnam Pro', value: '"Be Vietnam Pro"' },
  { name: 'Dancing Script', value: '"Dancing Script"' },
];

export const SettingsModal: React.FC<Props> = ({ isOpen, onClose, settings, onUpdateSettings }) => {
  const [activeTab, setActiveTab] = useState<Tab>('general');
  const [newKey, setNewKey] = useState('');
  const [proxyStatus, setProxyStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [proxyError, setProxyError] = useState('');
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const [isLoadingModels, setIsLoadingModels] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const proxyImportRef = useRef<HTMLInputElement>(null);

  if (settings.mobileMode && isOpen) {
    return <MobileSettingsModal onClose={onClose} settings={settings} onUpdateSettings={onUpdateSettings} />;
  }

  if (!isOpen) return null;

  const maxBudget = (settings.aiModel === AiModel.PRO_31 || settings.aiModel === AiModel.PRO_25) ? 32768 : 24576;

  const handleAddKey = () => {
    if (!newKey.trim()) return;
    
    // Split by newlines, commas, or spaces to support bulk pasting
    const extractedKeys = newKey
      .split(/[\n,\r\s]+/)
      .map(k => k.trim())
      .filter(k => k.length > 20); // Basic validation for Gemini keys (usually ~39-40 chars)

    if (extractedKeys.length === 0) {
      setNewKey('');
      return;
    }

    const currentKeys = settings.userApiKeys || [];
    const uniqueNewKeys = extractedKeys.filter(k => !currentKeys.includes(k));
    
    if (uniqueNewKeys.length > 0) {
      onUpdateSettings({ userApiKeys: [...currentKeys, ...uniqueNewKeys] });
      gameAI.resetBlacklist(); // Reset blacklist on manual change
    }
    
    setNewKey('');
  };

  const handleRemoveKey = (keyToRemove: string) => {
    const currentKeys = settings.userApiKeys || [];
    onUpdateSettings({ userApiKeys: currentKeys.filter(k => k !== keyToRemove) });
    gameAI.resetBlacklist(); // Reset blacklist on manual change
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (!content) return;

      // Extract keys (assuming one per line or comma separated)
      const extractedKeys = content
        .split(/[\n,\r]+/)
        .map(k => k.trim())
        .filter(k => k.length > 20); // Basic validation for Gemini keys

      const currentKeys = settings.userApiKeys || [];
      const uniqueNewKeys = extractedKeys.filter(k => !currentKeys.includes(k));
      
      if (uniqueNewKeys.length > 0) {
        onUpdateSettings({ userApiKeys: [...currentKeys, ...uniqueNewKeys] });
        gameAI.resetBlacklist(); // Reset blacklist on manual change
      }
      
      if (fileInputRef.current) fileInputRef.current.value = '';
    };
    reader.readAsText(file);
  };

  const handleResetBlacklist = () => {
    gameAI.resetBlacklist();
    alert("Đã làm mới danh sách lỗi. Tất cả các Key sẽ được thử lại.");
  };

  const handleTestProxy = async () => {
    if (!settings.proxyUrl || !settings.proxyKey) {
      setProxyStatus('error');
      setProxyError('Vui lòng nhập URL và Key');
      return;
    }

    setProxyStatus('testing');
    setProxyError('');

    try {
      // Simple test call to the proxy
      const response = await fetch(`${settings.proxyUrl}/models`, {
        headers: {
          'Authorization': `Bearer ${settings.proxyKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setProxyStatus('success');
        setTimeout(() => setProxyStatus('idle'), 3000);
      } else {
        const errData = await response.json().catch(() => ({}));
        setProxyStatus('error');
        setProxyError(errData.error?.message || `Lỗi HTTP: ${response.status}`);
      }
    } catch (err: any) {
      setProxyStatus('error');
      setProxyError(err.message || 'Không thể kết nối đến Proxy');
    }
  };

  const handleExportProxy = () => {
    const config = {
      name: settings.proxyName || 'Default Proxy',
      url: settings.proxyUrl || '',
      key: settings.proxyKey || ''
    };
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `proxy-config-${config.name.replace(/\s+/g, '-').toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportProxy = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        const config = JSON.parse(content);
        if (config.url && config.key) {
          onUpdateSettings({
            proxyName: config.name || settings.proxyName,
            proxyUrl: config.url,
            proxyKey: config.key
          });
          alert('Đã nhập cấu hình Proxy thành công!');
        } else {
          alert('Tệp cấu hình không hợp lệ (thiếu URL hoặc Key)');
        }
      } catch (err) {
        alert('Lỗi khi đọc tệp cấu hình');
      }
      if (proxyImportRef.current) proxyImportRef.current.value = '';
    };
    reader.readAsText(file);
  };

  const handleLoadModels = async () => {
    if (!settings.proxyUrl || !settings.proxyKey) {
      alert('Vui lòng nhập URL và Key trước khi tải danh sách model');
      return;
    }

    setIsLoadingModels(true);
    try {
      const response = await fetch(`${settings.proxyUrl}/models`, {
        headers: {
          'Authorization': `Bearer ${settings.proxyKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        // OpenAI format is usually { data: [{ id: 'model-id', ... }] }
        if (data && Array.isArray(data.data)) {
          const models = data.data.map((m: any) => m.id).sort();
          setAvailableModels(models);
          if (models.length > 0 && !settings.proxyModel) {
            onUpdateSettings({ proxyModel: models[0] });
          }
          alert(`Đã tải thành công ${models.length} model!`);
        } else {
          alert('Định dạng phản hồi không hợp lệ (không tìm thấy danh sách data)');
        }
      } else {
        const errData = await response.json().catch(() => ({}));
        alert(`Lỗi khi tải model: ${errData.error?.message || response.status}`);
      }
    } catch (err: any) {
      alert(`Lỗi kết nối: ${err.message}`);
    } finally {
      setIsLoadingModels(false);
    }
  };

  return (
    <div className="SettingsModal fixed inset-0 z-[500] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-1 md:p-2 animate-in zoom-in duration-300">
      <div className="w-[99%] h-[99%] bg-[#080808] border border-white/10 rounded-2xl shadow-[0_0_120px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col">
        
        <div className="flex shrink-0 border-b border-white/5 bg-black/40 px-8 items-center justify-between">
          <div className="flex gap-1">
            <button 
              onClick={() => setActiveTab('general')}
              className={`py-5 px-8 mono text-xs font-black uppercase tracking-[0.3em] transition-all relative ${activeTab === 'general' ? 'text-emerald-400' : 'text-neutral-600 hover:text-neutral-300'}`}
            >
              Cấu hình Chung
              {activeTab === 'general' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 shadow-[0_0_10px_currentColor]"></div>}
            </button>
            <button 
              onClick={() => setActiveTab('api')}
              className={`py-5 px-8 mono text-xs font-black uppercase tracking-[0.3em] transition-all relative ${activeTab === 'api' ? 'text-emerald-400' : 'text-neutral-600 hover:text-neutral-300'}`}
            >
              Ma Trận API
              {activeTab === 'api' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 shadow-[0_0_10px_currentColor]"></div>}
            </button>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
             <span className="mono text-[10px] text-neutral-700 font-black uppercase tracking-widest">Reality_Sync_v20.5_MultiCore</span>
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></div>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto custom-scrollbar p-6 md:px-12 md:py-8 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.03),transparent)]">
          <div className="max-w-full mx-auto w-full">
            {activeTab === 'general' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-4">
                  {/* GIỚI TÍNH MC */}
                  <div className="p-5 rounded-2xl border bg-white/[0.02] border-white/5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-xs font-black uppercase tracking-widest text-neutral-400">Giới tính nhân vật chính (MC)</span>
                        <p className="text-[9px] text-neutral-600 font-bold uppercase leading-relaxed max-w-sm">Giới tính mặc định khi khởi tạo Vận Mệnh mới.</p>
                      </div>
                      <div className="flex gap-2">
                        {['??', 'Nam', 'Nữ', 'Linh hoạt'].map((g) => (
                          <button
                            key={g}
                            onClick={() => onUpdateSettings({ mcGender: g })}
                            className={`px-4 py-2 rounded-xl border text-[10px] font-black uppercase transition-all ${settings.mcGender === g ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]' : 'bg-white/5 border-white/10 text-neutral-500 hover:border-white/20'}`}
                          >
                            {g === '??' ? 'Chưa chọn' : g}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* FONT CHỮ */}
                  <div className="p-5 rounded-2xl border bg-white/[0.02] border-white/5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-xs font-black uppercase tracking-widest text-neutral-400">Phông chữ hệ thống</span>
                        <p className="text-[9px] text-neutral-600 font-bold uppercase leading-relaxed max-w-sm">Thay đổi phông chữ hiển thị cho toàn bộ gameplay.</p>
                      </div>
                      <select
                        value={settings.fontFamily || 'Inter'}
                        onChange={(e) => onUpdateSettings({ fontFamily: e.target.value })}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-[10px] font-black uppercase text-emerald-400 outline-none focus:border-emerald-500/50 transition-all"
                      >
                        {FONT_OPTIONS.map(font => (
                          <option key={font.value} value={font.value} className="bg-[#080808] text-white">
                            {font.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="h-px bg-white/5 w-full" />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-xs font-black uppercase tracking-widest text-neutral-400">Cỡ chữ cho nội dung</span>
                        <p className="text-[9px] text-neutral-600 font-bold uppercase leading-relaxed max-w-sm">Điều chỉnh kích thước văn bản trong gameplay (mặc định: 15px).</p>
                      </div>
                      <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-xl px-2 py-1">
                        <button 
                          onClick={() => onUpdateSettings({ fontSize: Math.max(8, (settings.fontSize || 15) - 1) })}
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 transition-all"
                        >
                          -
                        </button>
                        <span className="mono text-emerald-400 text-sm font-black w-8 text-center">{settings.fontSize || 15}</span>
                        <button 
                          onClick={() => onUpdateSettings({ fontSize: Math.min(32, (settings.fontSize || 15) + 1) })}
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 transition-all"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* NỘI DUNG 18+ */}
                  <div 
                    onClick={() => onUpdateSettings({ adultContent: !settings.adultContent })}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer group flex items-center justify-between ${settings.adultContent ? 'bg-rose-500/5 border-rose-500/40 shadow-[0_0_20px_rgba(244,63,94,0.05)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
                  >
                    <div className="space-y-0.5">
                      <span className={`text-xs font-black uppercase tracking-widest transition-colors ${settings.adultContent ? 'text-rose-400' : 'text-neutral-400'}`}>Kích hoạt Nội dung 18+</span>
                      <p className="text-[9px] text-neutral-600 font-bold uppercase leading-relaxed max-w-sm">Cho phép AI tạo ra các tình huống và miêu tả chi tiết, nhạy cảm.</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full relative transition-all duration-500 ${settings.adultContent ? 'bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.3)]' : 'bg-neutral-800'}`}>
                      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-lg transition-all duration-500 ${settings.adultContent ? 'left-7' : 'left-1'}`}></div>
                    </div>
                  </div>

                  {/* ĐỘ KHÓ THỰC TẠI */}
                  <div className="p-5 rounded-2xl border bg-white/[0.02] border-white/5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-xs font-black uppercase tracking-widest text-neutral-400">Độ Khó Thực Tại</span>
                        <p className="text-[9px] text-neutral-600 font-bold uppercase leading-relaxed max-w-sm">Ảnh hưởng đến tỷ lệ thành công và hậu quả của các hành động.</p>
                      </div>
                      <div className="flex gap-2">
                        {[
                          { id: 'easy', label: 'Dễ', color: 'emerald' },
                          { id: 'medium', label: 'Trung Bình (Mặc định)', color: 'blue' },
                          { id: 'hard', label: 'Khó', color: 'orange' },
                          { id: 'hell', label: 'Địa Ngục', color: 'rose' },
                          { id: 'asian', label: 'Asian', color: 'fuchsia' }
                        ].map((d) => (
                          <button
                            key={d.id}
                            onClick={() => onUpdateSettings({ difficulty: d.id as any })}
                            className={`px-4 py-2 rounded-xl border text-[10px] font-black uppercase transition-all ${settings.difficulty === d.id ? `bg-${d.color}-500/20 border-${d.color}-500 text-${d.color}-400 shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]` : 'bg-white/5 border-white/10 text-neutral-500 hover:border-white/20'}`}
                          >
                            {d.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CHẾ ĐỘ TIỂU THUYẾT */}
                  <div 
                    onClick={() => onUpdateSettings({ isNovelMode: !settings.isNovelMode })}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer group flex items-center justify-between ${settings.isNovelMode ? 'bg-indigo-500/5 border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.05)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
                  >
                    <div className="space-y-0.5">
                      <span className={`text-xs font-black uppercase tracking-widest transition-colors ${settings.isNovelMode ? 'text-indigo-400' : 'text-neutral-400'}`}>Chế Độ Tiểu Thuyết</span>
                      <p className="text-[9px] text-neutral-600 font-bold uppercase leading-relaxed max-w-sm">AI sẽ viết lời dẫn dài hơn, xử lý 2-3 hành động liên tiếp từ hành động gốc để tạo cảm giác như đọc tiểu thuyết.</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full relative transition-all duration-500 ${settings.isNovelMode ? 'bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.3)]' : 'bg-neutral-800'}`}>
                      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-lg transition-all duration-500 ${settings.isNovelMode ? 'left-7' : 'left-1'}`}></div>
                    </div>
                  </div>

                  {/* LÀM ĐẸP NỘI DUNG */}
                  <div 
                    onClick={() => onUpdateSettings({ beautifyContent: !settings.beautifyContent })}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer group flex items-center justify-between ${settings.beautifyContent ? 'bg-emerald-500/5 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.05)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
                  >
                    <div className="space-y-0.5">
                      <span className={`text-xs font-black uppercase tracking-widest transition-colors ${settings.beautifyContent ? 'text-emerald-400' : 'text-neutral-400'}`}>Làm đẹp cho nội dung</span>
                      <p className="text-[9px] text-neutral-600 font-bold uppercase leading-relaxed max-w-sm">Hiển thị lời thoại, suy nghĩ và tin nhắn dưới dạng bong bóng chat và phong cách riêng biệt.</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full relative transition-all duration-500 ${settings.beautifyContent ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-neutral-800'}`}>
                      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-lg transition-all duration-500 ${settings.beautifyContent ? 'left-7' : 'left-1'}`}></div>
                    </div>
                  </div>

                  {/* HIỆU ỨNG HÌNH ẢNH */}
                  <div 
                    onClick={() => onUpdateSettings({ effectsEnabled: !settings.effectsEnabled })}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer group flex items-center justify-between ${settings.effectsEnabled ? 'bg-emerald-500/5 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.05)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
                  >
                    <div className="space-y-0.5">
                      <span className={`text-xs font-black uppercase tracking-widest transition-colors ${settings.effectsEnabled ? 'text-emerald-400' : 'text-neutral-400'}`}>Hiệu ứng Hình ảnh</span>
                      <p className="text-[9px] text-neutral-600 font-bold uppercase leading-relaxed max-w-sm">Kích hoạt các hiệu ứng ánh sáng, chuyển động và làm mờ.</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full relative transition-all duration-500 ${settings.effectsEnabled ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-neutral-800'}`}>
                      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-lg transition-all duration-500 ${settings.effectsEnabled ? 'left-7' : 'left-1'}`}></div>
                    </div>
                  </div>

                  {/* CHẾ ĐỘ NỀN SÁNG */}
                  <div 
                    onClick={() => onUpdateSettings({ theme: settings.theme === 'light' ? 'dark' : 'light' })}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer group flex items-center justify-between ${settings.theme === 'light' ? 'bg-amber-500/5 border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.05)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
                  >
                    <div className="space-y-0.5">
                      <span className={`text-xs font-black uppercase tracking-widest transition-colors ${settings.theme === 'light' ? 'text-amber-400' : 'text-neutral-400'}`}>Chế độ Nền sáng</span>
                      <p className="text-[9px] text-neutral-600 font-bold uppercase leading-relaxed max-w-sm">Chuyển đổi giao diện sang tông màu sáng.</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full relative transition-all duration-500 ${settings.theme === 'light' ? 'bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]' : 'bg-neutral-800'}`}>
                      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-lg transition-all duration-500 ${settings.theme === 'light' ? 'left-7' : 'left-1'}`}></div>
                    </div>
                  </div>

                  {/* TOÀN MÀN HÌNH */}
                  <div 
                    onClick={() => onUpdateSettings({ isFullscreen: !settings.isFullscreen })}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer group flex items-center justify-between ${settings.isFullscreen ? 'bg-blue-500/5 border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.05)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
                  >
                    <div className="space-y-0.5">
                      <span className={`text-xs font-black uppercase tracking-widest transition-colors ${settings.isFullscreen ? 'text-blue-400' : 'text-neutral-400'}`}>Chế độ Toàn màn hình</span>
                      <p className="text-[9px] text-neutral-600 font-bold uppercase leading-relaxed max-w-sm">Loại bỏ các yếu tố gây xao nhãng của hệ thống.</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full relative transition-all duration-500 ${settings.isFullscreen ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'bg-neutral-800'}`}>
                      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-lg transition-all duration-500 ${settings.isFullscreen ? 'left-7' : 'left-1'}`}></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* MÀU SẮC CHỦ ĐẠO */}
                  <div className="bg-black/60 p-6 rounded-2xl border border-white/5 space-y-5 shadow-xl">
                    <div className="flex items-center gap-2 mb-2">
                       <span className="text-xs font-black uppercase tracking-widest text-neutral-400">Màu sắc chủ đạo Ma Trận</span>
                    </div>
                    <div className="grid grid-cols-12 gap-2">
                      {PRESET_COLORS.map(color => (
                        <button 
                          key={color.hex}
                          onClick={() => onUpdateSettings({ primaryColor: color.hex })}
                          title={color.name}
                          className={`w-8 h-8 rounded-lg border-2 transition-all hover:scale-110 flex items-center justify-center ${settings.primaryColor === color.hex ? 'border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'border-transparent'}`}
                          style={{ backgroundColor: color.hex }}
                        >
                           {settings.primaryColor === color.hex && <span className="text-white text-[10px] drop-shadow-md font-bold">✓</span>}
                        </button>
                      ))}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="mono text-[9px] font-black text-neutral-600 uppercase tracking-[0.2em]">Tùy chỉnh mã HEX Lượng tử</label>
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-lg border border-white/10 shrink-0 shadow-lg" style={{ backgroundColor: settings.primaryColor }}></div>
                        <input 
                          type="text"
                          value={settings.primaryColor}
                          onChange={(e) => onUpdateSettings({ primaryColor: e.target.value })}
                          className="flex-grow bg-white/5 border border-white/10 rounded-lg px-4 mono text-xs font-black text-white outline-none focus:border-emerald-500/50 shadow-inner"
                          placeholder="#000000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* MÔ HÌNH AI */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 px-2">
                       <span className="text-xs font-black uppercase tracking-widest text-neutral-400">Mô Hình AI Gemini</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <button 
                        onClick={() => onUpdateSettings({ aiModel: AiModel.PRO_31 })}
                        className={`p-5 rounded-2xl border transition-all text-left group relative overflow-hidden ${settings.aiModel === AiModel.PRO_31 ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
                      >
                        <span className={`block mono text-[8px] font-black uppercase mb-1 tracking-widest ${settings.aiModel === AiModel.PRO_31 ? 'text-emerald-400' : 'text-neutral-600'}`}>Gemini_PRO_3.1</span>
                        <span className="text-base font-black text-white uppercase tracking-tighter">Gemini 3.1 Pro</span>
                        <p className="text-[9px] text-neutral-500 font-bold mt-1.5 leading-relaxed">Phiên bản Pro 3.1, cân bằng nhất.</p>
                        {settings.aiModel === AiModel.PRO_31 && <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-500/20 rounded-bl-2xl flex items-center justify-center text-[8px]">✓</div>}
                      </button>

                      <button 
                        onClick={() => onUpdateSettings({ aiModel: AiModel.FLASH_LITE_31 })}
                        className={`p-5 rounded-2xl border transition-all text-left group relative overflow-hidden ${settings.aiModel === AiModel.FLASH_LITE_31 ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
                      >
                        <span className={`block mono text-[8px] font-black uppercase mb-1 tracking-widest ${settings.aiModel === AiModel.FLASH_LITE_31 ? 'text-emerald-400' : 'text-neutral-600'}`}>Gemini_LITE_3.1</span>
                        <span className="text-base font-black text-white uppercase tracking-tighter">Gemini 3.1 Flash-Lite</span>
                        <p className="text-[9px] text-neutral-500 font-bold mt-1.5 leading-relaxed">Phiên bản Flash 3.1 Lite, cực nhanh.</p>
                        {settings.aiModel === AiModel.FLASH_LITE_31 && <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-500/20 rounded-bl-2xl flex items-center justify-center text-[8px]">✓</div>}
                      </button>

                      <button 
                        onClick={() => onUpdateSettings({ aiModel: AiModel.FLASH_3 })}
                        className={`p-5 rounded-2xl border transition-all text-left group relative overflow-hidden ${settings.aiModel === AiModel.FLASH_3 ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
                      >
                        <span className={`block mono text-[8px] font-black uppercase mb-1 tracking-widest ${settings.aiModel === AiModel.FLASH_3 ? 'text-emerald-400' : 'text-neutral-600'}`}>Gemini_FLASH_3</span>
                        <span className="text-base font-black text-white uppercase tracking-tighter">Gemini 3 Flash</span>
                        <p className="text-[9px] text-neutral-500 font-bold mt-1.5 leading-relaxed">Mặc định, phản hồi siêu tốc.</p>
                        {settings.aiModel === AiModel.FLASH_3 && <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-500/20 rounded-bl-2xl flex items-center justify-center text-[8px]">✓</div>}
                      </button>

                      <button 
                        onClick={() => onUpdateSettings({ aiModel: AiModel.PRO_25 })}
                        className={`p-5 rounded-2xl border transition-all text-left group relative overflow-hidden ${settings.aiModel === AiModel.PRO_25 ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
                      >
                        <span className={`block mono text-[8px] font-black uppercase mb-1 tracking-widest ${settings.aiModel === AiModel.PRO_25 ? 'text-emerald-400' : 'text-neutral-600'}`}>Gemini_PRO_2.5</span>
                        <span className="text-base font-black text-white uppercase tracking-tighter">Gemini 2.5 Pro</span>
                        <p className="text-[9px] text-neutral-500 font-bold mt-1.5 leading-relaxed">Logic ổn định, miêu tả sâu.</p>
                        {settings.aiModel === AiModel.PRO_25 && <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-500/20 rounded-bl-2xl flex items-center justify-center text-[8px]">✓</div>}
                      </button>

                      <button 
                        onClick={() => onUpdateSettings({ aiModel: AiModel.FLASH_25 })}
                        className={`p-5 rounded-2xl border transition-all text-left group relative overflow-hidden ${settings.aiModel === AiModel.FLASH_25 ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
                      >
                        <span className={`block mono text-[8px] font-black uppercase mb-1 tracking-widest ${settings.aiModel === AiModel.FLASH_25 ? 'text-emerald-400' : 'text-neutral-600'}`}>Gemini_FLASH_2.5</span>
                        <span className="text-base font-black text-white uppercase tracking-tighter">Phiên bản 2.5 Flash</span>
                        <p className="text-[9px] text-neutral-500 font-bold mt-1.5 leading-relaxed">Phiên bản 2.5 Flash, ổn định.</p>
                        {settings.aiModel === AiModel.FLASH_25 && <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-500/20 rounded-bl-2xl flex items-center justify-center text-[8px]">✓</div>}
                      </button>

                      <button 
                        onClick={() => onUpdateSettings({ aiModel: AiModel.FLASH_LITE_25 })}
                        className={`p-5 rounded-2xl border transition-all text-left group relative overflow-hidden ${settings.aiModel === AiModel.FLASH_LITE_25 ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
                      >
                        <span className={`block mono text-[8px] font-black uppercase mb-1 tracking-widest ${settings.aiModel === AiModel.FLASH_LITE_25 ? 'text-emerald-400' : 'text-neutral-600'}`}>Gemini_LITE_2.5</span>
                        <span className="text-base font-black text-white uppercase tracking-tighter">Phiên bản 2.5 Flash Lite</span>
                        <p className="text-[9px] text-neutral-500 font-bold mt-1.5 leading-relaxed">Phiên bản 2.5 Lite, nhẹ nhàng.</p>
                        {settings.aiModel === AiModel.FLASH_LITE_25 && <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-500/20 rounded-bl-2xl flex items-center justify-center text-[8px]">✓</div>}
                      </button>
                    </div>
                  </div>

                  {/* CỬA SỔ NGỮ CẢNH */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-xs font-black uppercase tracking-widest text-neutral-400">Cửa sổ Ngữ cảnh</span>
                        <p className="text-[9px] text-neutral-600 font-bold uppercase leading-relaxed max-w-sm">Số lượng lượt hội thoại AI sẽ ghi nhớ để duy trì tính nhất quán.</p>
                      </div>
                      <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-xl px-4 py-2">
                        <input 
                          type="number"
                          min="1"
                          max="100"
                          value={settings.contextWindowSize}
                          onChange={(e) => onUpdateSettings({ contextWindowSize: Math.max(1, parseInt(e.target.value) || 1) })}
                          className="bg-transparent mono text-emerald-400 text-lg font-black w-16 outline-none text-center"
                        />
                        <span className="text-[9px] text-neutral-700 font-black uppercase tracking-widest">Lượt</span>
                      </div>
                    </div>
                  </div>

                  {/* NGÂN SÁCH SUY LUẬN */}
                  {settings.aiModel.includes('gemini-3') && (
                    <div className="space-y-6 p-6 rounded-2xl border bg-white/[0.02] border-white/5">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <span className="text-xs font-black uppercase tracking-widest text-neutral-400">Cấp độ Suy luận (Thinking Level)</span>
                          <p className="text-[9px] text-neutral-600 font-bold uppercase leading-relaxed max-w-sm">Chỉ áp dụng cho Gemini 3 series. HIGH để tư duy sâu, LOW để phản hồi nhanh.</p>
                        </div>
                        <div className="flex gap-2">
                          {[
                            { id: ThinkingLevel.LOW, label: 'LOW (Nhanh)', color: 'blue' },
                            { id: ThinkingLevel.HIGH, label: 'HIGH (Sâu)', color: 'emerald' }
                          ].map((l) => (
                            <button
                              key={l.id}
                              disabled={settings.thinkingBudget > 0}
                              onClick={() => onUpdateSettings({ thinkingLevel: l.id })}
                              className={`px-4 py-2 rounded-xl border text-[10px] font-black uppercase transition-all ${settings.thinkingBudget > 0 ? 'opacity-20 cursor-not-allowed grayscale' : ''} ${settings.thinkingLevel === l.id ? `bg-${l.color}-500/20 border-${l.color}-500 text-${l.color}-400 shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]` : 'bg-white/5 border-white/10 text-neutral-500 hover:border-white/20'}`}
                            >
                              {l.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-white/5">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <span className="text-xs font-black uppercase tracking-widest text-neutral-400">Ngân sách Suy luận (Thinking Budget)</span>
                            <p className="text-[9px] text-neutral-600 font-bold uppercase leading-relaxed max-w-sm">Giới hạn số lượng token dành cho quá trình tư duy ngầm.</p>
                          </div>
                          <span className="mono text-emerald-400 text-xl font-black">{settings.thinkingBudget.toLocaleString()} <span className="text-[9px] text-neutral-700">TOKENS</span></span>
                        </div>
                        <div className="bg-black/60 p-6 rounded-2xl border border-white/5 shadow-inner">
                          <input 
                            type="range" min="0" max={maxBudget} step="512"
                            value={settings.thinkingBudget}
                            onChange={(e) => onUpdateSettings({ thinkingBudget: parseInt(e.target.value) })}
                            className="w-full h-1 bg-neutral-800 rounded-full appearance-none cursor-pointer accent-emerald-500"
                          />
                          <div className="mt-4 flex flex-col gap-1">
                            <p className="text-[9px] text-amber-500/80 font-bold uppercase italic tracking-wider">
                              * Mặc định: 4,000 Tokens.
                            </p>
                            <p className="text-[9px] text-neutral-500 font-bold uppercase italic leading-relaxed">
                              * Lưu ý: Nếu Ngân sách &gt; 0, hệ thống sẽ ưu tiên dùng Ngân sách và tự động vô hiệu hóa Cấp độ suy luận. Để dùng Cấp độ suy luận, hãy kéo Ngân sách về 0.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'api' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-in fade-in duration-500 min-h-[40rem]">
                {/* CỘT TRÁI: API KEY CÁ NHÂN */}
                <div className="space-y-8 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl text-emerald-400">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-white uppercase tracking-tighter italic">Khóa Cá Nhân</h4>
                        <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest">User API Key Matrix</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                       <input 
                          type="file" 
                          accept=".txt" 
                          className="hidden" 
                          ref={fileInputRef}
                          onChange={handleFileUpload}
                       />
                       <button 
                          onClick={() => fileInputRef.current?.click()}
                          className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg mono text-[10px] font-black text-neutral-400 hover:text-white transition-all"
                       >
                          <Upload size={14} />
                          TẢI TỆP .TXT
                       </button>
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col gap-4">
                    {/* Input Area */}
                    <div className="flex gap-2 items-start">
                      <textarea 
                        value={newKey}
                        onChange={(e) => setNewKey(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleAddKey();
                          }
                        }}
                        placeholder="Dán một hoặc nhiều API Key (cách nhau bởi dấu phẩy, khoảng trắng hoặc xuống dòng)..."
                        className="flex-grow bg-black/40 border border-white/10 rounded-xl px-4 py-3 mono text-xs font-black text-emerald-400 outline-none focus:border-emerald-500/50 transition-all min-h-[46px] max-h-[120px] resize-none"
                        rows={1}
                      />
                      <button 
                        onClick={handleAddKey}
                        className="p-3 bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl transition-all shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] active:scale-95 shrink-0"
                      >
                        <Plus size={20} />
                      </button>
                    </div>

                    {/* Keys List */}
                    <div className="flex-grow bg-black/20 border border-white/5 rounded-2xl overflow-hidden flex flex-col min-h-[200px]">
                       <div className="p-3 bg-white/5 border-b border-white/5 flex justify-between items-center">
                          <span className="mono text-[9px] font-black text-neutral-500 uppercase tracking-widest">Danh sách Khóa ({settings.userApiKeys?.length || 0})</span>
                          <div className="flex gap-2">
                             {settings.userApiKeys && settings.userApiKeys.length > 0 && (
                               <button 
                                 onClick={handleResetBlacklist}
                                 title="Làm mới danh sách lỗi"
                                 className="p-1.5 text-neutral-500 hover:text-emerald-400 transition-colors"
                               >
                                 <RefreshCw size={12} />
                               </button>
                             )}
                             {settings.userApiKeys && settings.userApiKeys.length > 0 && (
                               <span className="text-[8px] mono font-black text-emerald-500 animate-pulse">LOAD_BALANCING_ACTIVE</span>
                             )}
                          </div>
                       </div>
                       <div className="flex-grow overflow-y-auto custom-scrollbar p-2 space-y-2">
                          {(!settings.userApiKeys || settings.userApiKeys.length === 0) ? (
                            <div className="h-full flex flex-col items-center justify-center text-neutral-700 space-y-2 opacity-50 py-12">
                               <Zap size={32} strokeWidth={1} />
                               <p className="mono text-[9px] font-black uppercase tracking-widest">Chưa có khóa cá nhân</p>
                            </div>
                          ) : (
                            settings.userApiKeys.map((key, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-xl group hover:border-emerald-500/30 transition-all">
                                 <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center text-[10px] font-black text-emerald-500 mono">
                                    {idx + 1}
                                 </div>
                                 <div className="flex-grow mono text-[10px] text-neutral-400 truncate">
                                    {key.substring(0, 8)}••••••••••••••••{key.substring(key.length - 4)}
                                 </div>
                                 <button 
                                    onClick={() => handleRemoveKey(key)}
                                    className="p-2 text-neutral-600 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100"
                                 >
                                    <Trash2 size={14} />
                                 </button>
                              </div>
                            ))
                          )}
                       </div>
                    </div>
                  </div>

                  <p className="text-[9px] text-neutral-600 font-bold italic leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                    * Hệ thống sẽ tự động luân chuyển (Load Balancing) giữa các API Key bạn cung cấp để tối ưu hóa hạn mức và tốc độ phản hồi.
                  </p>
                </div>

                {/* CỘT PHẢI: API KEY HỆ THỐNG */}
                <div className="space-y-8 flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl text-blue-400">
                      <Cpu size={20} />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white uppercase tracking-tighter italic">Lõi Hệ Thống</h4>
                      <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest">System Default Matrix</p>
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col justify-center space-y-10">
                     <div className="flex flex-col items-center space-y-6">
                        <div className="w-24 h-24 bg-blue-500/5 border border-blue-500/10 rounded-full flex items-center justify-center text-4xl shadow-[0_0_70px_rgba(59,130,246,0.1)] relative">
                          <div className="absolute inset-0 bg-blue-500/5 rounded-full animate-ping"></div>
                          ⚙️
                        </div>
                        <div className="text-center space-y-3">
                           <h5 className="text-lg font-black text-white uppercase tracking-widest italic">Trạng thái Mặc định</h5>
                           <p className="text-[10px] text-neutral-500 font-bold leading-relaxed px-12 italic uppercase tracking-widest">
                             Hệ thống vận hành bằng mã khóa nặc danh được bảo mật đa lớp.
                           </p>
                        </div>
                     </div>

                     <div className="w-full p-8 bg-black/40 border border-white/5 rounded-[2.5rem] mono text-[9px] text-neutral-600 space-y-4 shadow-2xl">
                        <div className="flex justify-between border-b border-white/5 pb-3 items-center">
                           <span className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                              &gt; [STATUS] API_LINK_INTEGRITY:
                           </span> 
                           <span className="text-emerald-500 font-black text-xs">VERIFIED_SECURE</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-3 items-center">
                           <span className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                              &gt; [STATUS] ENCRYPTION_LAYER:
                           </span> 
                           <span className="text-amber-500 font-black text-xs">QUANTUM_STABLE</span>
                        </div>
                        <div className="flex justify-between items-center">
                           <span className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                              &gt; [STATUS] AI_CORE_SPEC:
                           </span> 
                           <span className="text-white font-black text-xs italic decoration-blue-500/40 underline">GOOGLE_GEMINI_V3_PREVIEW</span>
                        </div>
                     </div>
                  </div>

                  <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-2xl">
                     <p className="text-[9px] text-blue-400/60 font-black uppercase tracking-widest mb-2">Thông báo bảo mật:</p>
                     <p className="text-[9px] text-neutral-600 font-bold leading-relaxed italic">
                       Dữ liệu được mã hóa bằng thuật toán Quantum AES-256 trước khi truyền tải qua các nút mạng lượng tử.
                     </p>
                  </div>

                  {/* REVERSE PROXY CONFIGURATION */}
                  <div className="p-6 bg-purple-500/5 border border-purple-500/10 rounded-2xl space-y-6 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                         <Zap size={18} className="text-purple-400" />
                         <span className="text-sm font-black uppercase tracking-widest text-purple-400 italic">Reverse Proxy (AI Gateway)</span>
                      </div>
                      <div className="flex gap-2">
                        <input 
                          type="file" 
                          accept=".json" 
                          className="hidden" 
                          ref={proxyImportRef}
                          onChange={handleImportProxy}
                        />
                        <button 
                          onClick={() => proxyImportRef.current?.click()}
                          className="px-3 py-1 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg mono text-[8px] font-black text-purple-400 transition-all"
                        >
                          NHẬP CONFIG
                        </button>
                        <button 
                          onClick={handleExportProxy}
                          className="px-3 py-1 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg mono text-[8px] font-black text-purple-400 transition-all"
                        >
                          XUẤT CONFIG
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {/* Proxy Name */}
                      <div className="space-y-1.5">
                        <label className="mono text-[9px] font-black text-neutral-500 uppercase tracking-widest">1. Tên Proxy Lưu Trữ</label>
                        <input 
                          type="text"
                          value={settings.proxyName || ''}
                          onChange={(e) => onUpdateSettings({ proxyName: e.target.value })}
                          placeholder="Ví dụ: OpenRouter, Groq, MyProxy..."
                          className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 mono text-xs text-purple-300 outline-none focus:border-purple-500/50 transition-all"
                        />
                      </div>

                      {/* Proxy URL */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <label className="mono text-[9px] font-black text-neutral-500 uppercase tracking-widest">2. URL Proxy (OpenAI Compatible)</label>
                          <button 
                            onClick={handleLoadModels}
                            disabled={isLoadingModels}
                            className="flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg mono text-[8px] font-black text-purple-400 transition-all active:scale-95 disabled:opacity-50"
                          >
                            {isLoadingModels ? <RefreshCw size={10} className="animate-spin" /> : <RefreshCw size={10} />}
                            LOAD MODELS
                          </button>
                        </div>
                        <input 
                          type="text"
                          value={settings.proxyUrl || ''}
                          onChange={(e) => onUpdateSettings({ proxyUrl: e.target.value })}
                          placeholder="https://openrouter.ai/api/v1"
                          className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 mono text-xs text-purple-300 outline-none focus:border-purple-500/50 transition-all"
                        />
                      </div>

                      {/* Proxy Model Selection */}
                      {(availableModels.length > 0 || settings.proxyModel) && (
                        <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
                          <label className="mono text-[9px] font-black text-neutral-500 uppercase tracking-widest">2.1. Chọn Model Proxy</label>
                          <div className="relative">
                            <select 
                              value={settings.proxyModel || ''}
                              onChange={(e) => onUpdateSettings({ proxyModel: e.target.value })}
                              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 mono text-xs text-purple-300 outline-none focus:border-purple-500/50 transition-all appearance-none"
                            >
                              {!settings.proxyModel && <option value="">-- Chọn Model --</option>}
                              {availableModels.length > 0 ? (
                                availableModels.map(m => (
                                  <option key={m} value={m} className="bg-[#080808] text-white">{m}</option>
                                ))
                              ) : settings.proxyModel ? (
                                <option value={settings.proxyModel}>{settings.proxyModel}</option>
                              ) : null}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-purple-500/50">
                              ▼
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Proxy Key */}
                      <div className="space-y-1.5">
                        <label className="mono text-[9px] font-black text-neutral-500 uppercase tracking-widest">3. Password / API Key</label>
                        <input 
                          type="password"
                          value={settings.proxyKey || ''}
                          onChange={(e) => onUpdateSettings({ proxyKey: e.target.value })}
                          placeholder="sk-or-v1-..."
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 mono text-xs text-purple-300 outline-none focus:border-purple-500/50 transition-all"
                        />
                      </div>

                      {/* Connect Button */}
                      <div className="pt-2">
                        <button 
                          onClick={handleTestProxy}
                          disabled={proxyStatus === 'testing'}
                          className={`w-full py-3 rounded-xl mono text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
                            proxyStatus === 'testing' ? 'bg-neutral-800 text-neutral-500 cursor-wait' :
                            proxyStatus === 'success' ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)]' :
                            proxyStatus === 'error' ? 'bg-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]' :
                            'bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)]'
                          }`}
                        >
                          {proxyStatus === 'testing' ? (
                            <>
                              <RefreshCw size={14} className="animate-spin" />
                              Đang kết nối...
                            </>
                          ) : proxyStatus === 'success' ? (
                            <>
                              <ShieldCheck size={14} />
                              Kết nối thành công & Đã lưu
                            </>
                          ) : proxyStatus === 'error' ? (
                            <>
                              <X size={14} />
                              Lỗi kết nối: {proxyError}
                            </>
                          ) : (
                            <>
                              <Zap size={14} />
                              4. Kết nối & Lưu cấu hình
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="p-4 bg-black/40 border border-white/5 rounded-xl">
                      <p className="text-[9px] text-neutral-600 font-bold italic leading-relaxed">
                        * Khi được lưu, hệ thống sẽ ưu tiên sử dụng Proxy này để gọi API. Nếu để trống, hệ thống sẽ quay lại sử dụng Key miễn phí của AI Studio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 bg-black/80 border-t border-white/5 flex justify-center shrink-0">
          <button 
            onClick={onClose} 
            className="w-full max-w-lg py-5 bg-white/5 hover:bg-emerald-500/10 text-neutral-500 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/40 rounded-xl mono text-xs font-black uppercase transition-all tracking-[0.4em] shadow-2xl active:scale-[0.99] group"
          >
            <span className="group-hover:translate-x-1 inline-block transition-transform">Lưu & Quay lại thực tại [ESC]</span>
          </button>
        </div>
      </div>
    </div>
  );
};
