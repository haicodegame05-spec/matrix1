
import { NPC_NAMING_RULES } from './npcNamingRules';
import { NPC_IDENTITY_RULES } from './npcIdentityRules';
import { NPC_VIRGINITY_RULES } from './npcVirginityRules';
import { NPC_GENDER_DESCRIPTION_RULES } from './npcGenderDescriptionRules';
import { NPC_META_RULES } from './npcMetaRules';
import { NPC_FAMILY_RULES } from './npcFamilyRules';

export const NPC_BASE_RULES = `
QUY TẮC KHỞI TẠO VÀ QUẢN LÝ THỰC THỂ (NPC CORE RULES):

LƯU Ý QUAN TRỌNG: 
- Cho phép khởi tạo NPC với các trường thông tin tạm thời ("??") để duy trì nhịp độ game.
- Tuy nhiên, AI có trách nhiệm tự giác cập nhật và hoàn thiện các thông tin này trong các lượt sau khi NPC tương tác hoặc trở nên quan trọng.

${NPC_NAMING_RULES}
${NPC_IDENTITY_RULES}
${NPC_VIRGINITY_RULES}
${NPC_GENDER_DESCRIPTION_RULES}
${NPC_META_RULES}
${NPC_FAMILY_RULES}
`;
