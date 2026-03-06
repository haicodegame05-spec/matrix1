
import React, { useState, useEffect } from 'react';
import { GameLog } from '../../types';
import { dbService, SaveMetadata } from '../../services/dbService';
import { Clock, Database, ChevronRight, History as HistoryIcon } from 'lucide-react';
import { DEFAULT_AVATAR } from '../../constants';

interface MobileHistoryModalProps {
  onClose: () => void;
  logs: GameLog[];
  onLoadSave: (slotId: string) => void;
}

export const MobileHistoryModal: React.FC<MobileHistoryModalProps> = ({ onClose, logs, onLoadSave }) => {
  const [activeTab, setActiveTab] = useState<'logs' | 'saves'>('logs');
  const [slotsInfo, setSlotsInfo] = useState<Record<string, SaveMetadata | null>>({});

  useEffect(() => {
    const fetchSlots = async () => {
      const info = await dbService.getSlotsInfo();
      setSlotsInfo(info);
    };
    fetchSlots();
  }, []);

  return (
    <div className="MobileHistoryModal fixed inset-0 z-[600] bg-black flex flex-col h-full overflow-hidden font-sans">
      {/* HEADER */}
      <div className="flex items-center justify-between p-2 border-b border-white/10 bg-black/40 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]"></div>
          <h2 className="text-sm font-black text-white uppercase tracking-widest italic">CHRONO_LOGS</h2>
        </div>
        <button onClick={onClose} className="p-2 bg-white/5 text-neutral-400 rounded-xl border border-white/10 active:scale-90 transition-all">✕</button>
      </div>

      {/* TABS */}
      <div className="flex border-b border-white/5 bg-black/20 shrink-0">
        <button
          onClick={() => setActiveTab('logs')}
          className={`flex-1 py-1 flex flex-col items-center gap-1 transition-all relative ${activeTab === 'logs' ? 'text-blue-400' : 'text-neutral-600'}`}
        >
          <HistoryIcon size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">Lịch sử</span>
          {activeTab === 'logs' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />}
        </button>
        <button
          onClick={() => setActiveTab('saves')}
          className={`flex-1 py-1 flex flex-col items-center gap-1 transition-all relative ${activeTab === 'saves' ? 'text-emerald-400' : 'text-neutral-600'}`}
        >
          <Database size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">Tự động lưu</span>
          {activeTab === 'saves' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500" />}
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex-grow overflow-y-auto custom-scrollbar p-1 relative">
        {activeTab === 'logs' ? (
          <div className="space-y-3 animate-in fade-in duration-300 pb-20">
            <div className="px-2">
              <h3 className="text-xl font-black text-white uppercase tracking-tighter italic">Dòng <span className="text-blue-500">Thời Gian</span></h3>
              <p className="text-[9px] text-neutral-600 font-bold uppercase tracking-widest">Hồ sơ sự kiện ({logs.length} bản ghi)</p>
            </div>
            
            <div className="space-y-2">
              {logs.slice().reverse().map((log, idx) => (
                <div key={idx} className="p-3 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-[8px] mono font-black uppercase ${log.type === 'player' ? 'text-emerald-500' : 'text-blue-500/60'}`}>
                      {log.type === 'player' ? 'ACTION' : 'NARRATIVE'}_{logs.length - idx}
                    </span>
                    <span className="text-[8px] mono text-neutral-700 font-bold">{log.timestamp}</span>
                  </div>
                  <p className={`text-[11px] leading-relaxed italic ${log.type === 'player' ? 'text-emerald-400 font-bold' : 'text-neutral-300'}`}>
                    {log.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in duration-300 pb-20">
            <div className="px-2">
              <h3 className="text-xl font-black text-white uppercase tracking-tighter italic">Điểm <span className="text-emerald-500">Khôi Phục</span></h3>
              <p className="text-[9px] text-neutral-600 font-bold uppercase tracking-widest">Tự động lưu 10 lượt gần nhất</p>
            </div>

            <div className="space-y-3">
              {Array.from({ length: 10 }, (_, i) => {
                const slotId = `auto_slot_${i}`;
                const meta = slotsInfo[slotId];
                
                return (
                  <div 
                    key={slotId}
                    onClick={() => meta && onLoadSave(slotId)}
                    className={`p-1 rounded-2xl border transition-all flex items-center gap-4 ${
                      meta 
                      ? 'bg-emerald-500/5 border-emerald-500/20 active:scale-95' 
                      : 'bg-black border-dashed border-white/5 opacity-30'
                    }`}
                  >
                    <div className="w-12 aspect-[2/3] bg-black border border-white/10 rounded-xl overflow-hidden shrink-0">
                      {meta?.avatar ? (
                        <img src={meta.avatar} className="w-full h-full object-cover" />
                      ) : (
                        <img src={DEFAULT_AVATAR} className="w-full h-full object-cover opacity-20" />
                      )}
                    </div>

                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[8px] font-black text-emerald-600 uppercase tracking-widest">Slot_{i}</span>
                        {meta && <span className="text-[8px] font-bold text-neutral-700">{new Date(meta.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>}
                      </div>
                      {meta ? (
                        <div className="space-y-0">
                          <h4 className="text-sm font-black text-white uppercase truncate">{meta.playerName}</h4>
                          <div className="text-[8px] font-black text-neutral-500 uppercase">Lượt {meta.turnCount} // {meta.genre}</div>
                        </div>
                      ) : (
                        <span className="text-[10px] font-bold text-neutral-800 uppercase italic">Trống</span>
                      )}
                    </div>
                    {meta && <ChevronRight size={16} className="text-emerald-500 mr-2" />}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
