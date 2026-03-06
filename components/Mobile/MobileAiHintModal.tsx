
import React, { useState, useEffect } from 'react';
import { Player } from '../../types';
import { X, Sparkles, Clock, Infinity as InfinityIcon, Save } from 'lucide-react';

interface MobileAiHintModalProps {
  onClose: () => void;
  player: Player;
  onUpdatePlayer: (player: Player) => void;
}

export const MobileAiHintModal: React.FC<MobileAiHintModalProps> = ({ onClose, player, onUpdatePlayer }) => {
  const [activeTab, setActiveTab] = useState<'oneTurn' | 'permanent'>('oneTurn');
  const [oneTurnHint, setOneTurnHint] = useState(player.aiHints?.oneTurn || '');
  const [permanentHint, setPermanentHint] = useState(player.aiHints?.permanent || '');

  useEffect(() => {
    setOneTurnHint(player.aiHints?.oneTurn || '');
    setPermanentHint(player.aiHints?.permanent || '');
  }, [player.aiHints]);

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
    <div className="MobileAiHintModal fixed inset-0 z-[600] bg-black flex flex-col h-full overflow-hidden font-sans">
      {/* HEADER */}
      <div className="flex items-center justify-between p-2 border-b border-white/10 bg-black/40 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center border border-indigo-500/30">
            <Sparkles className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <h2 className="text-sm font-black text-white uppercase tracking-widest italic">AI_ADVISOR</h2>
            <p className="text-[8px] text-neutral-500 font-black uppercase tracking-widest">Quantum Instruction Core</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 bg-white/5 text-neutral-400 rounded-xl border border-white/10 active:scale-90 transition-all">✕</button>
      </div>

      {/* TABS */}
      <div className="flex border-b border-white/5 bg-black/20 shrink-0">
        <button
          onClick={() => setActiveTab('oneTurn')}
          className={`flex-1 py-1 flex flex-col items-center gap-1 transition-all relative ${activeTab === 'oneTurn' ? 'text-indigo-400' : 'text-neutral-600'}`}
        >
          <Clock size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">1 Lượt</span>
          {activeTab === 'oneTurn' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" />}
        </button>
        <button
          onClick={() => setActiveTab('permanent')}
          className={`flex-1 py-1 flex flex-col items-center gap-1 transition-all relative ${activeTab === 'permanent' ? 'text-indigo-400' : 'text-neutral-600'}`}
        >
          <InfinityIcon size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">Vĩnh Viễn</span>
          {activeTab === 'permanent' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" />}
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex-grow overflow-y-auto p-1 space-y-1">
        <div className={`p-1 rounded-2xl border ${activeTab === 'oneTurn' ? 'bg-indigo-500/5 border-indigo-500/20' : 'bg-amber-500/5 border-amber-500/20'}`}>
          <p className={`text-[10px] italic leading-relaxed ${activeTab === 'oneTurn' ? 'text-indigo-300' : 'text-amber-300'}`}>
            {activeTab === 'oneTurn' 
              ? "Lời nhắc này sẽ chỉ có tác dụng trong 1 lượt chơi kế tiếp. Sau khi AI phản hồi, nó sẽ tự động bị xóa bỏ."
              : "Lời nhắc này sẽ được áp dụng cho TẤT CẢ các lượt chơi về sau cho đến khi bạn thay đổi hoặc xóa nó."
            }
          </p>
        </div>

        <textarea
          value={activeTab === 'oneTurn' ? oneTurnHint : permanentHint}
          onChange={(e) => activeTab === 'oneTurn' ? setOneTurnHint(e.target.value) : setPermanentHint(e.target.value)}
          placeholder={activeTab === 'oneTurn' 
            ? "Ví dụ: Hãy để NPC A tỏ ra ghen tuông, hoặc mô tả chi tiết cảnh chiến đấu này..."
            : "Ví dụ: Luôn mô tả MC với phong thái lạnh lùng, hoặc ưu tiên các tình tiết lãng mạn..."
          }
          className="w-full h-64 bg-white/5 border border-white/10 rounded-2xl p-1 text-sm text-white placeholder:text-neutral-700 focus:border-indigo-500/50 outline-none transition-all resize-none"
        />
      </div>

      {/* FOOTER */}
      <div className="p-1 bg-black/60 border-t border-white/10 shrink-0">
        <button
          onClick={handleSave}
          className="w-full py-1 bg-indigo-500 text-black rounded-2xl text-xs font-black uppercase flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          <Save size={16} /> Lưu Chỉ Thị
        </button>
      </div>
    </div>
  );
};
