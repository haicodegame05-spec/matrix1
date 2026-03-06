
import React, { useState } from 'react';
import { Player, GameGenre, getGenreMeta, AppSettings, IdentityType, GameTime } from '../../types';
import { MC_PERSONALITIES } from '../../constants/personalities';
import { syncAgeAndBirthday } from '../../utils/timeUtils';
import { McStatsGrid } from '../McModal/McStatsGrid';
import { McQuestPanel } from '../McModal/McQuestPanel';
import { McAssetPanel } from '../McModal/McAssetPanel';
import { McSkillPanel } from '../McModal/McSkillPanel';
import { McInventoryPanel } from '../McModal/McInventoryPanel';
import { McInspector, InspectType } from '../McModal/McInspector';
import { IdentityPanel } from '../IdentityPanel';
import { DEFAULT_AVATAR } from '../../constants';

interface MobileMcModalProps {
  player: Player;
  genre?: GameGenre;
  onClose: () => void;
  onUpdatePlayer: (player: Player) => void;
  settings: AppSettings;
  onAvatarClick: () => void;
  onGalleryClick: () => void;
  initialEditing?: boolean;
  gameTime?: GameTime;
  isGameStarted?: boolean;
  onToggleLock?: (field: string) => void;
  onExport?: () => void;
  onImport?: () => void;
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

export const MobileMcModal: React.FC<MobileMcModalProps> = ({ 
  player, genre, onClose, onUpdatePlayer, settings, onAvatarClick, onGalleryClick, initialEditing = false, gameTime, isGameStarted, onToggleLock,
  onExport, onImport
}) => {
  const [activeTab, setActiveTab] = useState<'stats' | 'quests' | 'assets' | 'skills' | 'inventory'>('stats');
  const [isEditing, setIsEditing] = useState(initialEditing);
  const [imgError, setImgError] = useState(false);

  // Reset error when avatar changes
  React.useEffect(() => {
    setImgError(false);
  }, [player.avatar]);

  const [inspectingItem, setInspectingItem] = useState<{ 
    name: string; 
    type: InspectType; 
    description?: string;
    reward?: string;
    status?: string;
    questGroup?: string;
    questKind?: string;
    progress?: string;
  } | null>(null);

  const meta = getGenreMeta(genre);
  const hasSystem = !!player.systemName;

  const tabs = [
    { id: 'stats', label: 'Chỉ Số', icon: '📊' },
    { id: 'quests', label: 'Nhiệm Vụ', icon: '📜' },
    { id: 'assets', label: 'Tài Sản', icon: '💰' },
    { id: 'skills', label: 'Kỹ Năng', icon: '⚔️' },
    { id: 'inventory', label: 'Hành Trang', icon: '🎒' },
  ];

  return (
    <div className="MobileMcModal fixed inset-0 z-[300] bg-black flex flex-col h-full overflow-hidden mono selection:bg-emerald-500 selection:text-black">
      {/* HEADER */}
      <div className="flex items-center justify-between p-2 border-b border-white/10 bg-emerald-500/5 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></div>
          <h2 className="text-sm font-black text-emerald-500 uppercase tracking-widest italic">MC_IDENTITY_CORE</h2>
        </div>
        <div className="flex items-center gap-2">
          {!isGameStarted && (
            <>
              <button 
                onClick={onImport}
                className="p-2 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20 active:scale-90"
                title="Nhập"
              >
                📥
              </button>
              <button 
                onClick={onExport}
                className="p-2 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/20 active:scale-90"
                title="Xuất"
              >
                📤
              </button>
            </>
          )}
          {isGameStarted && (
            isEditing ? (
              <button 
                onClick={() => setIsEditing(false)}
                className="px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase transition-all bg-emerald-500 text-black border-emerald-400"
              >
                LƯU
              </button>
            ) : (
              <button 
                onClick={() => setIsEditing(true)}
                className="px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase transition-all bg-white/5 text-emerald-500 border-white/10"
              >
                SỬA
              </button>
            )
          )}
          <button onClick={onClose} className="p-2 bg-white/5 text-neutral-400 rounded-lg border border-white/10">✕</button>
        </div>
      </div>

      {/* MC QUICK INFO */}
      <div className="p-1 bg-[var(--bg)]/40 border-b border-white/5 flex items-center gap-4 shrink-0">
        <div className="relative group w-20 h-20 rounded-2xl border-2 border-emerald-500/20 bg-emerald-500/5 overflow-hidden shrink-0 shadow-xl">
          {player.avatar && !imgError ? (
            <img 
              src={player.avatar} 
              alt={player.name} 
              onError={() => setImgError(true)}
              className="w-full h-full object-cover" 
            />
          ) : (
            <img 
              src={DEFAULT_AVATAR} 
              alt={player.name} 
              className="w-full h-full object-cover opacity-60" 
            />
          )}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-active:opacity-100 flex flex-col items-center justify-center transition-opacity gap-1">
            <button onClick={(e) => { e.stopPropagation(); onAvatarClick(); }} className="px-2 py-1 bg-emerald-500 text-black text-[7px] font-black uppercase rounded">Tải Lên</button>
            <button onClick={(e) => { e.stopPropagation(); onGalleryClick(); }} className="px-2 py-1 bg-white/10 text-white text-[7px] font-black uppercase rounded border border-white/10">Kho Ảnh</button>
          </div>
        </div>
        <div className="flex flex-col min-w-0 flex-grow">
          {isEditing ? (
            <div className="space-y-1">
              <div className="flex items-center">
                <input 
                  value={player.name} 
                  onChange={(e) => onUpdatePlayer({ ...player, name: e.target.value })}
                  className="w-full bg-transparent text-xl font-black text-white uppercase tracking-tighter outline-none border-b border-emerald-500/30"
                  placeholder="Họ Tên"
                />
                <LockIcon isLocked={player.lockedFields?.includes('name') || false} onClick={() => onToggleLock?.('name')} />
              </div>
              <div className="flex items-center">
                <input 
                  value={player.title || ''} 
                  onChange={(e) => onUpdatePlayer({ ...player, title: e.target.value })}
                  className="w-full bg-transparent text-[10px] text-emerald-500/60 font-black uppercase tracking-widest outline-none border-b border-emerald-500/10"
                  placeholder="Danh hiệu"
                />
                <LockIcon isLocked={player.lockedFields?.includes('title') || false} onClick={() => onToggleLock?.('title')} />
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter truncate">{player.name}</h3>
                <LockIcon isLocked={player.lockedFields?.includes('name') || false} onClick={() => onToggleLock?.('name')} />
              </div>
              <div className="flex items-center">
                <p className="text-[10px] text-emerald-500/60 font-black uppercase tracking-widest truncate">{player.title || 'Người Vô Danh'}</p>
                <LockIcon isLocked={player.lockedFields?.includes('title') || false} onClick={() => onToggleLock?.('title')} />
              </div>
            </>
          )}
          <div className="flex items-center gap-2 mt-2">
            {isEditing ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded px-1">
                  <span className="text-[8px] text-emerald-400 font-black uppercase mr-1">LV.</span>
                  <input 
                    type="number"
                    value={player.level}
                    onChange={(e) => onUpdatePlayer({ ...player, level: parseInt(e.target.value) || 0 })}
                    className="bg-transparent text-[8px] text-emerald-400 font-black uppercase w-8 outline-none"
                  />
                </div>
                <div className="flex items-center bg-white/5 border border-white/10 rounded px-1">
                  <span className="text-[8px] text-neutral-500 font-black uppercase mr-1">{meta.currency}:</span>
                  <input 
                    type="number"
                    value={player.gold}
                    onChange={(e) => onUpdatePlayer({ ...player, gold: parseInt(e.target.value) || 0 })}
                    className="bg-transparent text-[8px] text-neutral-500 font-black uppercase w-16 outline-none"
                  />
                </div>
              </div>
            ) : (
              <>
                <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-[8px] text-emerald-400 font-black uppercase">LV.{player.level}</span>
                <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[8px] text-neutral-500 font-black uppercase">{meta.currency}: {player.gold.toLocaleString()}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* MC ADDITIONAL INFO (EDITABLE) */}
      {isEditing && (
        <div className="p-2 grid grid-cols-2 gap-2 bg-black/20 border-b border-white/5">
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-[7px] text-neutral-600 font-black uppercase tracking-widest">Giới tính</span>
              <LockIcon isLocked={player.lockedFields?.includes('gender') || false} onClick={() => onToggleLock?.('gender')} />
            </div>
            <select 
              value={player.gender} 
              onChange={(e) => onUpdatePlayer({ ...player, gender: e.target.value })}
              className="bg-transparent text-[10px] font-black uppercase italic text-white outline-none"
            >
              <option value="??" className="bg-neutral-900">?? (Chưa chọn)</option>
              <option value="Nam" className="bg-neutral-900">Nam</option>
              <option value="Nữ" className="bg-neutral-900">Nữ</option>
              <option value="Khác" className="bg-neutral-900">Khác</option>
            </select>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-[7px] text-neutral-600 font-black uppercase tracking-widest">Tuổi</span>
              <LockIcon isLocked={player.lockedFields?.includes('age') || false} onClick={() => onToggleLock?.('age')} />
            </div>
            <input 
              type="number"
              value={player.age} 
              onChange={(e) => {
                const val = parseInt(e.target.value) || 0;
                if (gameTime?.year) {
                  const updates = syncAgeAndBirthday('age', val, gameTime.year, player);
                  onUpdatePlayer({ ...player, ...updates });
                } else {
                  onUpdatePlayer({ ...player, age: val });
                }
              }}
              className="bg-transparent text-[10px] font-black text-white outline-none"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-[7px] text-neutral-600 font-black uppercase tracking-widest">Ngày sinh</span>
              <LockIcon isLocked={player.lockedFields?.includes('birthday') || false} onClick={() => onToggleLock?.('birthday')} />
            </div>
            <input 
              value={player.birthday || ''} 
              onChange={(e) => {
                const val = e.target.value;
                if (gameTime?.year) {
                  const updates = syncAgeAndBirthday('birthday', val, gameTime.year, player);
                  onUpdatePlayer({ ...player, ...updates });
                } else {
                  onUpdatePlayer({ ...player, birthday: val });
                }
              }}
              className="bg-transparent text-[10px] font-black text-white outline-none"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-[7px] text-emerald-600 font-black uppercase tracking-widest">Hệ Thống</span>
              <LockIcon isLocked={player.lockedFields?.includes('systemName') || false} onClick={() => onToggleLock?.('systemName')} />
            </div>
            <input 
              value={player.systemName || ''} 
              onChange={(e) => onUpdatePlayer({ ...player, systemName: e.target.value })}
              className="bg-transparent text-[10px] font-black text-emerald-400 uppercase outline-none"
              placeholder="Tên hệ thống"
            />
          </div>
        </div>
      )}

      {/* TAB NAVIGATION */}
      <div className="flex overflow-x-auto custom-scrollbar bg-[var(--bg)]/60 border-b border-white/10 shrink-0">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 min-w-[80px] py-1 flex flex-col items-center gap-1 transition-all relative ${activeTab === tab.id ? 'text-emerald-500' : 'text-neutral-500'}`}
          >
            <span className="text-lg">{tab.icon}</span>
            <span className="text-[8px] font-black uppercase tracking-tighter">{tab.label}</span>
            {activeTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500"></div>}
          </button>
        ))}
      </div>

      {/* CONTENT AREA */}
      <div className="flex-grow min-h-0 overflow-y-auto custom-scrollbar p-1 relative">
        {inspectingItem && (
          <McInspector 
            item={inspectingItem} 
            player={player} 
            onClose={() => setInspectingItem(null)} 
          />
        )}

        <div className="space-y-4">
          {activeTab === 'stats' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <McStatsGrid 
                player={player} 
                genre={genre} 
                isEditing={isEditing}
                onUpdatePlayer={onUpdatePlayer}
                onToggleLock={onToggleLock}
              />
              <div className="mt-4 p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                <div className="flex items-center mb-2">
                  <span className="text-[8px] text-emerald-500/40 font-black uppercase tracking-widest block">Tính cách đặc trưng</span>
                  <LockIcon isLocked={player.lockedFields?.includes('personality') || false} onClick={() => onToggleLock?.('personality')} />
                </div>
                {isEditing ? (
                  <div className="space-y-2">
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
                            className="hover:text-white"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
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
                    <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto custom-scrollbar p-1 border-t border-white/5">
                      {MC_PERSONALITIES.map((p) => {
                        const current = (player.personality || "").split('+').map(s => s.trim()).filter(Boolean);
                        if (current.includes(p)) return null;
                        return (
                          <button
                            key={p}
                            onClick={() => onUpdatePlayer({ ...player, personality: [...current, p].join(' + ') })}
                            className="px-1.5 py-0.5 bg-white/5 text-emerald-500/40 border border-white/10 rounded-sm text-[8px] font-black uppercase"
                          >
                            + {p}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-1">
                    {player.personality ? player.personality.split('+').map((p, i) => (
                      <span key={i} className="px-1.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-sm text-[8px] text-emerald-400 font-black uppercase">
                        {p.trim()}
                      </span>
                    )) : <span className="text-[8px] text-neutral-700 italic">Trống</span>}
                  </div>
                )}
              </div>

              <div className="mt-4">
                <IdentityPanel 
                  identities={player.identities || []}
                  isEditing={isEditing}
                  onUpdate={(identities) => onUpdatePlayer({ ...player, identities })}
                  isLocked={player.lockedFields?.includes('identities')}
                  onToggleLock={() => onToggleLock('identities')}
                />
              </div>

              <div className="mt-4 p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                <div className="flex items-center mb-2">
                  <span className="text-[8px] text-emerald-500/40 font-black uppercase tracking-widest block">Gia Thế / Nguồn Gốc</span>
                  <LockIcon isLocked={player.lockedFields?.includes('lineage') || false} onClick={() => onToggleLock?.('lineage')} />
                </div>
                {isEditing ? (
                  <textarea 
                    value={player.lineage || ''} 
                    onChange={(e) => onUpdatePlayer({ ...player, lineage: e.target.value })}
                    className="w-full bg-transparent text-xs text-neutral-300 italic leading-relaxed outline-none border-b border-emerald-500/20"
                    rows={3}
                  />
                ) : (
                  <p className="text-xs text-neutral-300 italic leading-relaxed">{player.lineage || "Thân phận ẩn danh trong Ma Trận Thực Tại"}</p>
                )}
              </div>

              {(player.spiritRoot || player.physique || isEditing) && (
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {(player.spiritRoot || isEditing) && (
                    <div className="p-3 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl">
                      <div className="flex items-center mb-1">
                        <span className="text-[8px] text-cyan-500/40 font-black uppercase tracking-widest block">❂ {meta.npcLabels.race.split(' / ')[0]}</span>
                        <LockIcon isLocked={player.lockedFields?.includes('spiritRoot') || false} onClick={() => onToggleLock?.('spiritRoot')} />
                      </div>
                      {isEditing ? (
                        <input 
                          value={player.spiritRoot || ''} 
                          onChange={(e) => onUpdatePlayer({ ...player, spiritRoot: e.target.value })}
                          className="w-full bg-transparent text-xs text-white font-black uppercase outline-none border-b border-cyan-500/20"
                        />
                      ) : (
                        <span className="text-xs text-white font-black uppercase italic">{player.spiritRoot || '---'}</span>
                      )}
                    </div>
                  )}
                  {(player.physique || isEditing) && (
                    <div className="p-3 bg-purple-500/5 border border-purple-500/10 rounded-2xl">
                      <div className="flex items-center mb-1">
                        <span className="text-[8px] text-purple-500/40 font-black uppercase tracking-widest block">🧬 {genre === GameGenre.CULTIVATION ? 'Thể Chất' : 'Huyết Mạch'}</span>
                        <LockIcon isLocked={player.lockedFields?.includes('physique') || false} onClick={() => onToggleLock?.('physique')} />
                      </div>
                      {isEditing ? (
                        <input 
                          value={player.physique || ''} 
                          onChange={(e) => onUpdatePlayer({ ...player, physique: e.target.value })}
                          className="w-full bg-transparent text-xs text-white font-black uppercase outline-none border-b border-purple-500/20"
                        />
                      ) : (
                        <span className="text-xs text-white font-black uppercase italic">{player.physique || '---'}</span>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {activeTab === 'quests' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <McQuestPanel 
                quests={player.quests} 
                hasSystem={hasSystem} 
                systemName={player.systemName || "Thế giới"} 
                onInspect={setInspectingItem} 
                playerLevel={player.level}
                isEditing={isEditing}
                onUpdatePlayer={(updates) => onUpdatePlayer({ ...player, ...updates })}
                player={player}
                onToggleLock={onToggleLock}
              />
            </div>
          )}

          {activeTab === 'assets' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <McAssetPanel 
                gold={player.gold} 
                assets={player.assets || []} 
                currency={player.customCurrency || meta.currency} 
                onInspect={setInspectingItem} 
                isEditing={isEditing}
                onUpdatePlayer={(updates) => onUpdatePlayer({ ...player, ...updates })}
                player={player}
                onToggleLock={onToggleLock}
              />
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <McSkillPanel 
                skills={player.skills || []} 
                skillLabel={meta.skillLabel} 
                onInspect={setInspectingItem} 
                isEditing={isEditing}
                onUpdatePlayer={(updates) => onUpdatePlayer({ ...player, ...updates })}
                isLocked={player.lockedFields?.includes('skills')}
                onToggleLock={() => onToggleLock('skills')}
              />
            </div>
          )}

          {activeTab === 'inventory' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <McInventoryPanel 
                inventory={player.inventory || []} 
                onInspect={setInspectingItem} 
                isEditing={isEditing}
                onUpdatePlayer={(updates) => onUpdatePlayer({ ...player, ...updates })}
                isLocked={player.lockedFields?.includes('inventory')}
                onToggleLock={() => onToggleLock('inventory')}
              />
            </div>
          )}
        </div>
        
        <div className="h-20"></div>
      </div>
    </div>
  );
};
