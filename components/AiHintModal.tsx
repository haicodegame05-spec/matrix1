
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Clock, Infinity as InfinityIcon, Save } from 'lucide-react';
import { Player, AppSettings } from '../types';
import { MobileAiHintModal } from './Mobile/MobileAiHintModal';

interface AiHintModalProps {
  isOpen: boolean;
  onClose: () => void;
  player: Player;
  onUpdatePlayer: (player: Player) => void;
  settings: AppSettings;
}

export const AiHintModal: React.FC<AiHintModalProps> = ({ isOpen, onClose, player, onUpdatePlayer, settings }) => {
  if (settings.mobileMode && isOpen) {
    return <MobileAiHintModal onClose={onClose} player={player} onUpdatePlayer={onUpdatePlayer} />;
  }

  const [activeTab, setActiveTab] = useState<'oneTurn' | 'permanent'>('oneTurn');
  const [oneTurnHint, setOneTurnHint] = useState(player.aiHints?.oneTurn || '');
  const [permanentHint, setPermanentHint] = useState(player.aiHints?.permanent || '');

  useEffect(() => {
    if (isOpen) {
      setOneTurnHint(player.aiHints?.oneTurn || '');
      setPermanentHint(player.aiHints?.permanent || '');
    }
  }, [isOpen, player.aiHints]);

  const handleSave = () => {
    onUpdatePlayer({
      ...player,
      aiHints: {
        oneTurn: oneTurnHint,
        permanent: permanentHint
      }
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="AiHintModal relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-[80vh]"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-neutral-900/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h2 className="text-lg font-black uppercase tracking-wider text-white leading-none">Nhắc AI</h2>
                  <p className="text-[10px] mono text-neutral-500 font-bold uppercase tracking-widest mt-1">Gợi ý hướng đi cho thực tại</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-xl transition-colors text-neutral-500 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/5 bg-black/40">
              <button
                onClick={() => setActiveTab('oneTurn')}
                className={`flex-1 py-3 flex items-center justify-center gap-2 transition-all relative ${activeTab === 'oneTurn' ? 'text-indigo-400' : 'text-neutral-500 hover:text-neutral-300'}`}
              >
                <Clock className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-widest">1 Lượt</span>
                {activeTab === 'oneTurn' && <motion.div layoutId="hintTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 shadow-[0_0_10px_#6366f1]" />}
              </button>
              <button
                onClick={() => setActiveTab('permanent')}
                className={`flex-1 py-3 flex items-center justify-center gap-2 transition-all relative ${activeTab === 'permanent' ? 'text-indigo-400' : 'text-neutral-500 hover:text-neutral-300'}`}
              >
                <InfinityIcon className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-widest">Vĩnh Viễn</span>
                {activeTab === 'permanent' && <motion.div layoutId="hintTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 shadow-[0_0_10px_#6366f1]" />}
              </button>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow overflow-y-auto">
              {activeTab === 'oneTurn' ? (
                <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                  <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-xl">
                    <p className="text-xs text-indigo-300/80 leading-relaxed italic">
                      "MỆNH LỆNH TỐI CAO: Chỉ thị này sẽ được AI ưu tiên thực hiện tuyệt đối trong 1 lượt kế tiếp. Sau đó sẽ tự động xóa bỏ."
                    </p>
                  </div>
                  <textarea
                    value={oneTurnHint}
                    onChange={(e) => setOneTurnHint(e.target.value)}
                    placeholder="Ví dụ: Hãy để NPC A tỏ ra ghen tuông, hoặc mô tả chi tiết cảnh chiến đấu này..."
                    className="w-full h-40 bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-white placeholder:text-neutral-700 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all resize-none custom-scrollbar"
                  />
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                    <p className="text-xs text-amber-300/80 leading-relaxed italic">
                      "CHỈ THỊ VĨNH VIỄN: AI sẽ luôn tuân thủ mệnh lệnh này trong mọi lượt chơi cho đến khi bạn thay đổi hoặc xóa nó."
                    </p>
                  </div>
                  <textarea
                    value={permanentHint}
                    onChange={(e) => setPermanentHint(e.target.value)}
                    placeholder="Ví dụ: Luôn mô tả MC với phong thái lạnh lùng, hoặc ưu tiên các tình tiết lãng mạn..."
                    className="w-full h-40 bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-white placeholder:text-neutral-700 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 outline-none transition-all resize-none custom-scrollbar"
                  />
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 bg-black/60 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl border border-white/10 text-neutral-400 text-xs font-black uppercase hover:bg-white/5 transition-all"
              >
                Hủy
              </button>
              <button
                onClick={handleSave}
                className="px-8 py-2.5 bg-indigo-500 text-white rounded-xl text-xs font-black uppercase flex items-center gap-2 hover:bg-indigo-400 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] active:scale-95"
              >
                <Save className="w-4 h-4" />
                Lưu Chỉ Thị
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
