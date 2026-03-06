
import React from 'react';
import { Player, IdentityType, getGenreMeta, GameGenre } from '../../types';
import { MC_PERSONALITIES } from '../../constants/personalities';
import { NewIndicator } from '../NewIndicator';
import { DEFAULT_AVATAR } from '../../constants';

interface McSidebarProps {
  player: Player;
  onAvatarClick: () => void;
  onGalleryClick: () => void;
  isEditing: boolean;
  onUpdatePlayer: (player: Player) => void;
  genre?: GameGenre;
  onToggleLock?: (field: string) => void;
}

const LockIcon = ({ isLocked, onClick, className = "" }: { isLocked: boolean, onClick?: () => void, className?: string }) => (
  <button 
    onClick={(e) => { e.stopPropagation(); onClick?.(); }}
    className={`ml-1 transition-all hover:scale-110 active:scale-90 ${isLocked ? 'text-amber-500' : 'text-neutral-700 hover:text-neutral-500'} ${className}`}
    title={isLocked ? "Đã khóa - AI không thể thay đổi" : "Chưa khóa - AI có thể thay đổi"}
  >
    {isLocked ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
    )}
  </button>
);

export const McSidebar: React.FC<McSidebarProps> = ({ player, onAvatarClick, onGalleryClick, isEditing, onUpdatePlayer, genre, onToggleLock }) => {
  const [imgError, setImgError] = React.useState(false);
  const meta = getGenreMeta(genre);
  const labels = meta.npcLabels;

  // Reset error when avatar changes
  React.useEffect(() => {
    setImgError(false);
  }, [player.avatar]);

  const handleChange = (field: keyof Player, value: any) => {
    onUpdatePlayer({ ...player, [field]: value });
  };

  return (
    <div className="w-full md:w-72 h-full border-r border-white/10 bg-black/40 p-1 flex flex-col shrink-0 overflow-y-auto custom-scrollbar relative z-20 mono">
      <div className="relative group mb-1.5 w-full aspect-[2/3] rounded-sm border-2 border-emerald-500/20 bg-emerald-500/5 overflow-hidden shrink-0 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
        {player.avatar && !imgError ? (
          <img 
            src={player.avatar} 
            alt={player.name} 
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-1000" 
          />
        ) : (
          <img 
            src={DEFAULT_AVATAR} 
            alt={player.name} 
            className="w-full h-full object-cover opacity-60 transition-transform group-hover:scale-105 duration-1000" 
          />
        )}
        
        <div className="absolute top-2 right-2 z-40">
          <LockIcon isLocked={player.lockedFields?.includes('avatar') || false} onClick={() => onToggleLock?.('avatar')} className="bg-black/60 p-1 rounded-sm border border-white/10" />
        </div>

        <div onClick={onAvatarClick} className="absolute inset-0 bg-emerald-500/40 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer z-20 transition-opacity backdrop-blur-sm">
            <span className="text-black font-black text-[9px] uppercase tracking-[0.2em] bg-white px-2 py-1">UPLOAD_IDENTITY_SOURCE</span>
        </div>
        <button onClick={onGalleryClick} className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/80 border border-white/10 rounded-sm text-[9px] font-black uppercase text-white z-30 whitespace-nowrap shadow-xl hover:bg-emerald-500 hover:text-black transition-colors">
          THƯ VIỆN ẢNH
        </button>
      </div>

      <div className="space-y-1 px-1">
        <div className="text-center pb-2 border-b border-white/5">
          <div className="flex items-center justify-center mb-1">
            <LockIcon isLocked={player.lockedFields?.includes('title') || false} onClick={() => onToggleLock?.('title')} />
          </div>
          {isEditing ? (
            <div className="space-y-1">
              <input 
                value={player.title || ''} 
                onChange={(e) => handleChange('title', e.target.value)}
                className="w-full bg-white/5 border border-emerald-500/30 text-emerald-500 text-[10px] font-black uppercase text-center focus:border-emerald-500 outline-none rounded-sm px-1"
                placeholder="Danh hiệu"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-1">
              <p className="text-[8px] text-emerald-500/60 font-black uppercase mt-1 tracking-[0.2em]">{player.title || 'Người Vô Danh'}</p>
              {player.newFields?.includes('title') && <NewIndicator className="mt-1" />}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-1 py-1.5">

          <div className="col-span-2 flex flex-col bg-white/[0.03] p-1.5 rounded-sm border border-white/5">
            <div className="flex items-center gap-1">
              <span className="text-[7px] text-emerald-600 font-black uppercase tracking-widest">Tính cách đặc trưng</span>
              <LockIcon isLocked={player.lockedFields?.includes('personality') || false} onClick={() => onToggleLock?.('personality')} />
              {player.newFields?.includes('personality') && <NewIndicator />}
            </div>
            {isEditing ? (
              <div className="space-y-2 mt-1">
                {/* Current Tags with Delete Option */}
                <div className="flex flex-wrap gap-1 p-1 bg-black/20 rounded-sm min-h-[30px]">
                  {(player.personality || "").split('+').map(s => s.trim()).filter(Boolean).map((p, idx) => (
                    <div key={idx} className="flex items-center gap-1 px-1.5 py-0.5 bg-emerald-500 text-black rounded-sm text-[8px] font-black uppercase">
                      <span>{p}</span>
                      <button 
                        onClick={() => {
                          const current = (player.personality || "").split('+').map(s => s.trim()).filter(Boolean);
                          const next = current.filter((_, i) => i !== idx);
                          onUpdatePlayer({ ...player, personality: next.join(' + ') });
                        }}
                        className="hover:text-white transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                {/* Add Custom Personality */}
                <div className="flex gap-1">
                  <input 
                    type="text"
                    placeholder="Thêm tính cách..."
                    className="flex-grow bg-white/5 border border-white/10 text-[9px] px-2 py-1 outline-none focus:border-emerald-500 text-white"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const val = e.currentTarget.value.trim();
                        if (val) {
                          const current = (player.personality || "").split('+').map(s => s.trim()).filter(Boolean);
                          if (!current.includes(val)) {
                            onUpdatePlayer({ ...player, personality: [...current, val].join(' + ') });
                          }
                          e.currentTarget.value = '';
                        }
                      }
                    }}
                  />
                </div>

                {/* Preset Suggestions */}
                <div className="flex flex-wrap gap-1 max-h-32 overflow-y-auto custom-scrollbar p-1 border-t border-white/5">
                  {MC_PERSONALITIES.map((p) => {
                    const current = (player.personality || "").split('+').map(s => s.trim()).filter(Boolean);
                    const isSelected = current.includes(p);
                    if (isSelected) return null;
                    return (
                      <button
                        key={p}
                        onClick={() => {
                          onUpdatePlayer({ ...player, personality: [...current, p].join(' + ') });
                        }}
                        className="px-1.5 py-0.5 bg-white/5 text-emerald-500/40 border border-white/10 rounded-sm text-[8px] font-black uppercase hover:border-emerald-500/40"
                      >
                        + {p}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-1 mt-1">
                {player.personality ? player.personality.split('+').map((p, i) => (
                  <span key={i} className="px-1.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-sm text-[8px] text-emerald-400 font-black uppercase">
                    {p.trim()}
                  </span>
                )) : <span className="text-[8px] text-neutral-700 italic">Trống</span>}
              </div>
            )}
          </div>
        </div>

        <div className="py-1">
          <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-sm relative overflow-hidden group hover:border-emerald-500 transition-colors shadow-inner">
            <div className="absolute top-0 right-0 p-0.5 opacity-10 text-[6px] font-black uppercase">Origin_Matrix</div>
            <div className="flex items-center mb-1 gap-1">
              <span className="text-[7px] text-emerald-500 font-black uppercase tracking-widest block">Gia Thế / Nguồn Gốc</span>
              <LockIcon isLocked={player.lockedFields?.includes('lineage') || false} onClick={() => onToggleLock?.('lineage')} />
              {player.newFields?.includes('lineage') && <NewIndicator />}
            </div>
            {isEditing ? (
              <textarea 
                value={player.lineage || ''} 
                onChange={(e) => handleChange('lineage', e.target.value)}
                className="w-full bg-transparent text-[11px] text-white font-black leading-snug italic outline-none resize-none"
                rows={2}
              />
            ) : (
              <p className="text-[11px] text-white font-black leading-snug italic">
                {player.lineage || "Thân phận ẩn danh trong Ma Trận Thực Tại"}
              </p>
            )}
          </div>
        </div>

        {(player.spiritRoot || player.physique || isEditing) && (
          <div className="grid grid-cols-1 gap-1 py-1 mt-1">
            {(player.spiritRoot || isEditing) && (
              <div className="flex flex-col bg-cyan-500/5 p-1.5 rounded-sm border border-cyan-500/20">
                <div className="flex items-center gap-1">
                  <span className="text-[7px] text-cyan-500 font-black uppercase tracking-widest">❂ {labels.race.split(' / ')[0]} / Thiên Phú</span>
                  <LockIcon isLocked={player.lockedFields?.includes('spiritRoot') || false} onClick={() => onToggleLock?.('spiritRoot')} />
                  {player.newFields?.includes('spiritRoot') && <NewIndicator />}
                </div>
                {isEditing ? (
                  <input 
                    value={player.spiritRoot || ''} 
                    onChange={(e) => handleChange('spiritRoot', e.target.value)}
                    className="bg-transparent text-[11px] font-black text-white outline-none w-full uppercase"
                  />
                ) : (
                  <span className="text-[11px] font-black text-white uppercase tracking-tight italic truncate">{player.spiritRoot}</span>
                )}
              </div>
            )}
            {(player.physique || isEditing) && (
              <div className="flex flex-col bg-purple-500/5 p-1.5 rounded-sm border border-purple-500/20 mt-1">
                <div className="flex items-center gap-1">
                  <span className="text-[7px] text-purple-500 font-black uppercase tracking-widest">🧬 {genre === GameGenre.CULTIVATION ? 'Thể Chất' : 'Huyết Mạch'} / Đặc Tính</span>
                  <LockIcon isLocked={player.lockedFields?.includes('physique') || false} onClick={() => onToggleLock?.('physique')} />
                  {player.newFields?.includes('physique') && <NewIndicator />}
                </div>
                {isEditing ? (
                  <input 
                    value={player.physique || ''} 
                    onChange={(e) => handleChange('physique', e.target.value)}
                    className="bg-transparent text-[11px] font-black text-white outline-none w-full uppercase"
                  />
                ) : (
                  <span className="text-[11px] font-black text-white uppercase tracking-tight italic truncate">{player.physique}</span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
