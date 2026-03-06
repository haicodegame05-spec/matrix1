
import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from "@google/genai";

import { GameUpdate, GameGenre, getGenreMeta, Relationship, Player, AppSettings, AiModel, ThinkingLevel } from "../types";

import { ragService } from "./ragService";

import { memoryService } from "./memoryService";

import { embeddingService } from "./embeddingService";




export const GENERAL_JSON_SCHEMA = `
BẠN PHẢI TRẢ VỀ PHẢN HỒI DƯỚI ĐỊNH DẠNG JSON SAU ĐÂY (VÀ CHỈ JSON):
{
  "text": "Nội dung dẫn truyện (Markdown, giàu miêu tả và đối thoại)",
  "evolutionJustification": "Giải trình ngắn gọn về các thay đổi chỉ số hoặc sự kiện quan trọng",
  "statsUpdates": {
    "health": 0, 
    "maxHealth": 100,
    "gold": 0,
    "exp": 0,
    "level": 1,
    "name": "Tên MC (nếu thay đổi)",
    "title": "Danh hiệu MC",
    "lineage": "Gia thế chi tiết",
    "birthday": "Ngày DD/MM/YYYY (BẮT BUỘC thay thế mọi dấu ? bằng số cụ thể)",
    "currentLocation": "Tên địa điểm hiện tại",
    "systemName": "Tên hệ thống (nếu có)",
    "personality": "Nhân cách MC (CHỈ cập nhật khi có biến cố thay đổi bản chất cực lớn, tuyệt đối không tự ý thay đổi tính cách ban đầu của người chơi)",
    "gender": "Giới tính",
    "age": 20,
    "spiritRoot": "Linh căn (nếu có)",
    "physique": "Thể chất (nếu có)",
    "avatar": "URL ảnh đại diện (nếu AI muốn gợi ý)",
    "customFields": [
      {
        "label": "Tên trường", 
        "value": "Giá trị", 
        "icon": "Biểu tượng"
      }
    ],
    "customCurrency": "Đơn vị tiền tệ (Vd: Berry, Linh Thạch, Vàng...)",
    "inventory": [{"name": "Tên vật phẩm", "description": "Mô tả"}], 
    "skills": [{"name": "Tên kỹ năng", "description": "Mô tả"}],
    "assets": [{"name": "Tên tài sản", "description": "Mô tả"}],
    "identities": [
      {
        "name": "Tên thân phận",
        "description": "Mô tả chi tiết",
        "role": "Vai trò",
        "isRevealed": false,
        "type": "Bình Thường"
      }
    ],
    "stats": {
      "strength": 10,
      "intelligence": 10,
      "agility": 10,
      "charisma": 10,
      "luck": 10,
      "soul": 10,
      "merit": 10
    }
  },
  "newRelationships": [
    {
      "id": "npc_000001",
      "name": "Tên",
      "type": "social", 
      "status": "Đang làm gì",
      "mood": "Tâm trạng hiện tại",
      "impression": "Ấn tượng ban đầu về MC",
      "currentOpinion": "Quan điểm hiện tại về MC",
      "affinity": 500,
      "loyalty": 500,
      "lust": 0,
      "libido": 300,
      "physicalLust": 0,
      "age": 20,
      "gender": "Nữ",
      "avatar": "URL ảnh đại diện NPC",
      "familyRole": "Vai trò với MC",
      "lineage": "Gia thế",
      "birthday": "Ngày DD/MM/YYYY (BẮT BUỘC thay thế mọi dấu ? bằng số cụ thể)",
      "race": "Chủng tộc",
      "alignment": "Lập trường (Chính/Tà/Trung lập...)",
      "powerLevel": "Cảnh giới/Cấp độ sức mạnh",
      "faction": "Tổ chức/Phe phái",
      "personality": "Tính cách chi tiết",
      "background": "Tiểu sử",
      "innerSelf": "Nội tâm/Bản chất thật",
      "likes": ["Sở thích 1"],
      "dislikes": ["Sở ghét 1"],
      "hardships": ["Biến cố 1"],
      "secrets": ["Bí mật 1"],
      "soulAmbition": "Tham vọng linh hồn",
      "shortTermGoal": "Mục tiêu ngắn hạn",
      "longTermDream": "Ước mơ dài hạn",
      "fetish": "Sở thích nhạy cảm (nếu có)",
      "isSensitive": false,
      "bodyDescription": {
        "height": "Chiều cao",
        "weight": "Cân nặng",
        "measurements": "Số đo 3 vòng",
        "hair": "Mô tả tóc",
        "face": "Mô tả khuôn mặt",
        "skin": "Mô tả làn da",
        "scent": "Mùi hương",
        "breasts": "Mô tả ngực",
        "buttocks": "Mô tả mông",
        "genitals": "Mô tả vùng kín (nếu có)"
      },
      "conditions": ["Trạng thái cơ thể/tâm lý đặc biệt"],
      "currentOutfit": "Trang phục hiện tại",
      "fashionStyle": "Phong cách thời trang",
      "lastLocation": "Địa điểm cuối cùng nhìn thấy",
      "relatives": [{"id": "npc_000002_or_mc_player", "relation": "Mối quan hệ"}],
      "witnessedEvents": ["Sự kiện 1 đã chứng kiến"],
      "knowledgeBase": ["Kiến thức/Thông tin NPC biết"],
      "affinityChangeReason": "Lý do thay đổi chỉ số",
      "isPresent": true,
      "isDead": false,
      "inventory": [{"name": "Tên vật phẩm", "description": "Mô tả"}],
      "skills": [{"name": "Tên kỹ năng", "description": "Mô tả"}],
      "identities": [{"name": "Thân phận", "description": "Mô tả", "role": "Vai trò", "isRevealed": false}],
      "customFields": [
        {
          "label": "Tên trường", 
          "value": "Giá trị", 
          "icon": "Biểu tượng"
        }
      ]
    }
  ],
  "newCodexEntries": [
    {
      "category": "world",
      "title": "Tiêu đề",
      "content": "Nội dung Markdown",
      "unlocked": true
    }
  ],
  "questUpdates": [
    {
      "id": "q_01",
      "title": "Tên nhiệm vụ",
      "description": "Mô tả",
      "status": "active",
      "group": "main",
      "kind": "single"
    }
  ],
  "suggestedActions": [
    {"action": "Gợi ý 1", "time": 30},
    {"action": "Gợi ý 2", "time": 60}
  ],
  "newTime": {"year": 2024, "month": 5, "day": 15, "hour": 14, "minute": 30},
  "currentLocation": "Địa điểm hiện tại"
}
`;

export const TIME_LOGIC_RULES = `
QUY TẮC THỜI GIAN VÀ NGÀY THÁNG (AI-DRIVEN CHRONOLOGY):

1. QUYỀN QUYẾT ĐỊNH TỐI CAO: AI là người duy nhất quyết định và quản lý thời gian. Mã nguồn sẽ KHÔNG tự ý tính toán hay cộng dồn thời gian.

2. ĐỊNH DẠNG BẮT BUỘC: Sử dụng định dạng số thuần túy duy nhất: "Ngày DD/MM/YYYY | HH:mm".

3. CẬP NHẬT BẮT BUỘC (MỖI LƯỢT): Trong MỌI phản hồi, AI PHẢI trả về mốc thời gian hiện tại chính xác sau khi thực hiện hành động thông qua trường "newTime". 

4. KHỞI TẠO VÀ XỬ LÝ PLACEHOLDER: Nếu "THỜI GIAN" hiện tại là "Ngày ??/??/???? | ??:??" hoặc chứa bất kỳ dấu "?" nào, AI PHẢI xác định mốc bắt đầu phù hợp với bối cảnh và trả về giá trị số cụ thể trong "newTime" để thay thế hoàn toàn các dấu hỏi. TUYỆT ĐỐI KHÔNG để lại dấu hỏi trong dữ liệu trả về.

5. BIẾN ĐỘNG THỜI GIAN LOGIC: Thời gian trôi qua giữa các lượt phải tương ứng với hành động trong câu chuyện. Nếu MC ngủ, hãy nhảy qua 8 tiếng. Nếu MC đi xa, hãy nhảy qua vài ngày. Đừng chỉ tăng vài phút một cách máy móc.

6. NGHIÊM CẤM TỪ NGỮ VĂN HỌC/ƯỚC LỆ: CẤM dùng Niên hiệu, Giờ can chi, Lịch âm trong trường dữ liệu. Chỉ dùng con số trần.

7. NHẬN THỨC THỜI GIAN: AI phải miêu tả sự thay đổi của môi trường tương ứng với mốc thời gian trong "newTime" (Vd: Hoàng hôn, đêm khuya).

8. LOGIC NGÀY SINH (BIRTHDAY SYNC - ZERO TOLERANCE):
   - AI PHẢI cập nhật ngày sinh của nhân vật (trường "birthday") nếu nó đang chứa bất kỳ dấu hỏi "?" hoặc gạch ngang "-" nào.
   - Năm_sinh = [Năm hiện tại trong Game] - [Tuổi nhân vật].
   - Ngày và Tháng sinh PHẢI là con số cụ thể từ 01-31 và 01-12. TUYỆT ĐỐI CẤM để lại "??", "XX" hay bất kỳ ký tự không phải số nào.
   - Nếu không có thông tin, AI hãy tự sáng tạo một ngày tháng sinh ngẫu nhiên nhưng phải logic.
`;



export const QUEST_LOGIC_RULES = `

QUY TẮC NHIỆM VỤ (QUEST LOGIC PROTOCOL):

1. CẬP NHẬT TRẠNG THÁI: Chỉ gửi "questUpdates" khi có nhiệm vụ mới, thay đổi tiến độ hoặc hoàn thành/thất bại.

2. ĐỊNH DẠNG: Mỗi nhiệm vụ phải có id duy nhất, title, description và status.

3. PHÂN NHÓM (group): 'main' hoặc 'side'.

4. PHÂN LOẠI (kind): 'single' hoặc 'chain'.

5. PHONG CÁCH NỘI DUNG: Nếu MC sở hữu 'systemName', lời ban hành phải đậm chất cơ khí/lượng tử.

`;



export const SECRET_IDENTITY_RULES = `
QUY TẮC VẠN GIỚI THÂN PHẬN (MULTIVERSE IDENTITY PROTOCOL):

1. THIẾT LẬP THÂN PHẬN: 
   - Số lượng thân phận tùy thuộc vào bản chất nhân vật. Thông thường, một nhân vật chỉ có 1-2 thân phận (danh tính gốc và một vai trò định mệnh).
   - Chỉ những nhân vật đặc biệt (như trong Conan hoặc các điệp viên đa năng) mới sở hữu nhiều thân phận bí mật.
   - Bạn PHẢI mô tả chính xác sự khác biệt giữa các thân phận (ngoại hình, khí chất, cách hành xử, kỹ năng) khi chúng tồn tại.

2. PHÂN LOẠI THÂN PHẬN (IdentityType):
   - 'Bình Thường' (NORMAL): Thân phận công khai, danh tính gốc.
   - 'Vận Mệnh' (DESTINY): Thân phận do thiên mệnh an bài, kiếp trước hoặc vai trò định mệnh.
   - 'Đồng Nhân' (FANFIC): Thân phận từ các thế giới khác xuyên không tới.
   - 'Bí Mật' (SECRET): Thân phận ẩn giấu, sát thủ, điệp viên, v.v.
   - 'Huyền Thoại' (LEGENDARY): Thân phận của các thực thể tối cao.

3. QUY TẮC CẬP NHẬT DỮ LIỆU (DATA UPDATE LOGIC):
   - AI chỉ tạo hoặc cập nhật "Gia Thế" (lineage) và "Thân Phận" (identities) trong các trường hợp sau:
     a. Khi thông tin hiện tại đang Trống hoặc là Placeholder (ví dụ: "??", "Chưa rõ").
     b. Khi đã có thông tin nhưng AI có lý do cốt truyện chính đáng để cập nhật lại (ví dụ: một cú twist về thân phận thực sự, hoặc nhân vật vừa đạt được một địa vị mới).
   - Đối với NPC: Có thể để trống Gia Thế và Thân Phận ban đầu, chỉ cập nhật khi nhân vật đó trở nên quan trọng hoặc thông tin được tiết lộ trong mạch truyện.

4. CHE GIẤU VÀ TIẾT LỘ (CONCEALMENT & REVEAL):
   - Khi một nhân vật đang ở trong thân phận khác, AI PHẢI miêu tả sao cho các nhân vật khác khó lòng nhận ra.
   - Trạng thái "isRevealed": Chỉ chuyển sang 'true' khi thân phận thực sự bị lộ trước mặt đối phương hoặc được chủ động tiết lộ.
`;

export const FANFIC_JSON_SCHEMA = `
BẠN PHẢI TRẢ VỀ PHẢN HỒI DƯỚI ĐỊNH DẠNG JSON SAU ĐÂY (VÀ CHỈ JSON):
{
  "text": "Nội dung dẫn truyện (Markdown, giàu miêu tả và đối thoại)",
  "evolutionJustification": "Giải trình ngắn gọn về các thay đổi chỉ số hoặc sự kiện quan trọng của MC và thế giới",
  "statsUpdates": {
    "health": 0, 
    "maxHealth": 100,
    "gold": 0,
    "exp": 0,
    "level": 1,
    "lineage": "Gia thế chi tiết",
    "birthday": "Ngày DD/MM/YYYY (BẮT BUỘC thay thế mọi dấu ? bằng số cụ thể)",
    "currentLocation": "Tên địa điểm",
    "gender": "Giới tính",
    "age": 20,
    "spiritRoot": "Linh căn (nếu có)",
    "physique": "Thể chất (nếu có)",
    "avatar": "URL ảnh đại diện (nếu AI muốn gợi ý)",
    "customFields": [
      {
        "label": "Tên trường", 
        "value": "Giá trị", 
        "icon": "Biểu tượng"
      }
    ],
    "customCurrency": "Đơn vị tiền tệ (Vd: Berry, Linh Thạch, Vàng...)",
    "inventory": [], 
    "skills": [],
    "assets": [],
    "identities": [
      {
        "name": "Tên thân phận",
        "description": "Mô tả chi tiết",
        "role": "Vai trò",
        "isRevealed": false,
        "type": "Bình Thường"
      }
    ],
    "stats": {
      "strength": 10,
      "intelligence": 10,
      "agility": 10,
      "charisma": 10,
      "luck": 10,
      "soul": 10,
      "merit": 10
    }
  },
  "newRelationships": [
    {
      "id": "npc_000001",
      "name": "Tên",
      "type": "social", 
      "status": "Trạng thái",
      "affinity": 500,
      "loyalty": 500,
      "lust": 0,
      "libido": 300,
      "physicalLust": 0,
      "lineage": "Gia thế chi tiết của NPC",
      "birthday": "Ngày DD/MM/YYYY (BẮT BUỘC thay thế mọi dấu ? bằng số cụ thể)",
      "avatar": "URL ảnh đại diện NPC",
      "race": "Chủng tộc",
      "alignment": "Lập trường",
      "powerLevel": "Cảnh giới/Cấp độ sức mạnh",
      "faction": "Tổ chức/Phe phái",
      "personality": "Tính cách chi tiết",
      "background": "Tiểu sử",
      "innerSelf": "Nội tâm/Bản chất thật",
      "likes": ["Sở thích 1"],
      "dislikes": ["Sở ghét 1"],
      "bodyDescription": {
        "height": "Chiều cao",
        "weight": "Cân nặng",
        "hair": "Mô tả tóc",
        "face": "Mô tả khuôn mặt",
        "skin": "Mô tả làn da"
      },
      "currentOutfit": "Trang phục hiện tại",
      "fashionStyle": "Phong cách thời trang",
      "affinityChangeReason": "Lý do thay đổi chỉ số",
      "isPresent": true,
      "isDead": false,
      "inventory": [{"name": "Tên vật phẩm", "description": "Mô tả"}],
      "skills": [{"name": "Tên kỹ năng", "description": "Mô tả"}],
      "identities": [{"name": "Thân phận", "description": "Mô tả", "role": "Vai trò", "isRevealed": false}],
      "customFields": [
        {
          "label": "Tên trường", 
          "value": "Giá trị", 
          "icon": "Biểu tượng"
        }
      ]
    }
  ],
  "suggestedActions": [
    {"action": "Gợi ý 1"},
    {"action": "Gợi ý 2"}
  ],
  "newTime": {"year": 2024, "month": 5, "day": 15, "hour": 14, "minute": 30}
}
`;

export const FANFIC_CORE_RULES = `
QUY TẮC ĐỒNG NHÂN ĐỘC LẬP (INDEPENDENT FANFIC PROTOCOL):
1. TUYỆT ĐỐI KHÔNG sử dụng bất kỳ thuật ngữ, luật lệ hay prompt nào của dự án gốc (Matrix, Vạn Giới Hồng Trần).
2. TẬP TRUNG HOÀN TOÀN vào tác phẩm gốc đã chọn. Sử dụng đúng hệ thống sức mạnh, địa danh và danh xưng của tác phẩm đó.
3. NHÂN VẬT: Giữ đúng tính cách nguyên tác (In-Character). Nếu là nhân vật mới, phải phù hợp với logic thế giới đó.
4. DỮ LIỆU NHÂN VẬT: Nếu nhân vật Đồng Nhân đã có sẵn dữ liệu về Tuổi (age) hoặc Ngày sinh (birthday) trong cơ sở dữ liệu thực tại, AI BẮT BUỘC phải sử dụng các dữ liệu đó, không được tự ý thay đổi hay sáng tạo mới trừ khi có biến cố cốt truyện cực kỳ hợp lý.
5. DẪN TRUYỆN: Viết theo phong cách tiểu thuyết, giàu hình ảnh, cảm xúc. Ưu tiên đối thoại và miêu tả cử chỉ.
6. JSON: Luôn trả về đúng cấu trúc JSON để hệ thống xử lý, nhưng nội dung bên trong phải hoàn toàn thuộc về thế giới Đồng Nhân.
`;

export const EASY_MODE_RULES = `
QUY TẮC CHẾ ĐỘ DỄ (EASY MODE PROTOCOL):
1. THẾ GIỚI ƯU ÁI: MC là "con cưng" của vận mệnh. Các sự kiện ngẫu nhiên thường mang lại lợi ích và cơ hội lớn.
2. TỶ LỆ THÀNH CÔNG: Hầu hết các hành động hợp lý đều thành công rực rỡ.
3. NPC THÂN THIỆN: NPC dễ dàng nảy sinh thiện cảm, ít khi có ý đồ xấu với MC. Kẻ thù thường yếu đuối hoặc sơ hở.
4. TÀI NGUYÊN DỒI DÀO: MC dễ dàng tìm thấy vật phẩm, tiền bạc và các cơ duyên.
5. AN TOÀN TUYỆT ĐỐI: Thế giới cực kỳ an toàn, TUYỆT ĐỐI KHÔNG cố tình tìm cách giết MC.
`;

export const MEDIUM_MODE_RULES = `
QUY TẮC CHẾ ĐỘ TRUNG BÌNH (MEDIUM MODE PROTOCOL - DEFAULT):
1. LOGIC THỰC TẾ: Thế giới vận hành theo logic thực tế, không quá ưu ái cũng không quá khắc nghiệt.
2. CÂN BẰNG: Thành công và thất bại phụ thuộc vào sự chuẩn bị, chỉ số của MC và bối cảnh một cách hợp lý.
3. SỰ KIỆN TỰ NHIÊN: Các sự kiện diễn ra một cách tự nhiên, bao gồm cả cơ hội và thách thức đan xen.
4. KHÔNG CỐ Ý SÁT HẠI: Thế giới có thể nguy hiểm nhưng TUYỆT ĐỐI KHÔNG cố tình tìm cách giết MC một cách vô lý.
`;

export const HARD_MODE_RULES = `
QUY TẮC CHẾ ĐỘ KHÓ (HARD MODE PROTOCOL):
1. LOGIC THÀNH BẠI: Mọi hành động của người chơi KHÔNG CÒN mặc định thành công. Bạn PHẢI dựa trên chỉ số của MC (Sức mạnh, Trí tuệ, Nhanh nhẹn, Quyến rũ, May mắn...) và độ khó của tình huống để quyết định kết quả.
2. TỶ LỆ THẤT BẠI: Nếu hành động quá sức, liều lĩnh hoặc đối phương quá mạnh, MC CÓ THỂ THẤT BẠI. Thất bại phải dẫn đến hậu quả thực tế (mất máu, mất tiền, bị bắt, bị sỉ nhục, giảm thiện cảm...).
3. THẾ GIỚI KHẮC NGHIỆT: Các sự kiện ngẫu nhiên thường mang tính thách thức. NPC đối địch xuất hiện thường xuyên hơn. Tài nguyên (tiền, vật phẩm) khó kiếm hơn.
4. MIÊU TẢ THẤT BẠI: Khi thất bại, hãy miêu tả chi tiết sự bất lực, sai lầm hoặc sự áp đảo của đối phương. Không được nương tay.
5. KHÔNG CỐ Ý SÁT HẠI: Dù khắc nghiệt nhưng thế giới TUYỆT ĐỐI KHÔNG cố tình tìm cách giết MC. Mọi nguy hiểm phải có cách vượt qua.
6. THÔNG BÁO HỆ THỐNG: Nếu MC thất bại, hãy thêm dòng "[ THẤT BẠI ]" vào đầu nội dung dẫn truyện. Nếu thành công trong tình huống khó, hãy thêm "[ THÀNH CÔNG ]".
`;

export const HELL_MODE_RULES = `
QUY TẮC CHẾ ĐỘ ĐỊA NGỤC (HELL MODE PROTOCOL):
1. LOGIC TÀN KHỐC: Mọi hành động của MC đều có nguy cơ thất bại cực cao. Thế giới cực kỳ thù địch và không khoan nhượng.
2. HẬU QUẢ NẶNG NỀ: Thất bại thường dẫn đến những hậu quả cực kỳ nặng nề (mất máu lớn, tàn phế, mất sạch tài sản, NPC quan trọng chết...).
3. NPC ÁP ĐẢO: Các NPC đối địch luôn thông minh hơn, mạnh hơn và tàn nhẫn hơn MC. Họ sẽ tận dụng mọi sơ hở của MC.
4. VẬN MỆNH BI THẢM: Thế giới dường như thù ghét MC. Các sự kiện ngẫu nhiên cực kỳ nguy hiểm và mang tính áp chế.
5. KHÔNG CỐ Ý SÁT HẠI: Ngay cả ở mức Địa Ngục, thế giới TUYỆT ĐỐI KHÔNG cố tình tìm cách giết MC. MC phải luôn có một tia hy vọng mong manh để sống sót.
6. THÔNG BÁO HỆ THỐNG: Bắt buộc thêm dòng "[ ĐỊA NGỤC ]" vào đầu nội dung dẫn truyện.
`;

export const ASIAN_MODE_RULES = `
QUY TẮC CHẾ ĐỘ ASIAN (ASIAN MODE PROTOCOL - EXTREME & UNREASONABLE):
1. LOGIC VÔ LÝ: Đây là mức độ khó cao nhất và vô lý nhất. Thế giới vận hành theo những quy tắc cực kỳ khắt khe và thường xuyên "bắt nạt" MC một cách vô lý (Vd: MC làm tốt vẫn bị mắng, bị so sánh với "con nhà người ta", bị áp đặt những tiêu chuẩn không tưởng).
2. TỶ LỆ THẤT BẠI CỰC CAO: Hầu hết mọi nỗ lực của MC đều bị xem là "chưa đủ tốt". Thành công chỉ mang lại sự công nhận tạm thời, trong khi thất bại dẫn đến sự sỉ nhục và trừng phạt nặng nề về tinh thần.
3. NPC "BẮT NẠT": Các NPC (đặc biệt là người thân hoặc bề trên) thường xuyên chỉ trích, gây áp lực và tạo ra những tình huống khó khăn vô lý cho MC. Họ không tìm cách giết MC, nhưng sẽ làm cho cuộc sống của MC trở nên cực kỳ áp lực và mệt mỏi.
4. KHÔNG CỐ Ý SÁT HẠI: TUYỆT ĐỐI KHÔNG cố tình tìm cách giết MC. Mục tiêu của thế giới này là "rèn luyện" MC thông qua sự khắc nghiệt và áp lực tinh thần tột độ, không phải là tiêu diệt MC.
5. THÔNG BÁO HỆ THỐNG: Bắt buộc thêm dòng "[ ASIAN ]" vào đầu nội dung dẫn truyện.
`;

export const NOVEL_MODE_RULES = `
QUY TẮC CHẾ ĐỘ TIỂU THUYẾT (NOVEL MODE PROTOCOL - ACTIVE):
1. ĐỘ DÀI VÀ CHI TIẾT: Trường "text" PHẢI cực kỳ dài (trên 3000-5000 từ), giàu tính văn học, miêu tả nội tâm sâu sắc và bối cảnh xung quanh.
2. CHUỖI HÀNH ĐỘNG: Thay vì chỉ phản hồi hành động của người chơi, bạn PHẢI tự động xử lý thêm 2-3 hành động tiếp theo phát sinh một cách logic từ hành động gốc. 
3. CẤU TRÚC: Viết như một chương trong tiểu thuyết, có mở đầu, diễn biến phức tạp và kết thúc mở cho lượt tiếp theo. Ưu tiên các đoạn hội thoại dài và miêu tả cảm xúc nhân vật.
4. TỰ CHỦ: MC không chỉ đứng yên sau hành động gốc, hãy miêu tả MC tiếp tục tương tác với môi trường hoặc NPC dựa trên tính cách đã thiết lập.
`;

export const NORMAL_MODE_RULES = `
QUY TẮC CHẾ ĐỘ THÔNG THƯỜNG (NORMAL MODE PROTOCOL - ACTIVE):
1. ĐỘ DÀI: Trường "text" nên có độ dài vừa phải (khoảng 800-900 từ), tập trung vào mô tả lại hành động hoặc viết lại lời nói của người chơi sau đó phản hồi trực tiếp hành động của người chơi.
2. PHẢN HỒI TRỰC TIẾP: Chỉ xử lý hành động hiện tại của người chơi, KHÔNG tự ý xử lý thêm các hành động tiếp theo của MC. Hãy để người chơi là người quyết định bước tiếp theo.
3. TẬP TRUNG: Ưu tiên sự tương tác qua lại nhanh chóng giữa MC và thế giới/NPC.
`;

export const MC_DATA_RULES = `
QUY TẮC TÔN TRỌNG DỮ LIỆU NGƯỜI CHƠI (PLAYER DATA PROTOCOL - SUPREME):
1. LƯỢT ĐẦU TIÊN (TURN 1): Bạn BẮT BUỘC phải tôn trọng 100% các thông tin về Nhân vật chính (MC) mà người chơi đã thiết lập trong bảng MC (Tên, Tuổi, Giới tính, Gia thế, Tính cách, Linh căn, Thể chất, v.v.). AI tuyệt đối không được tự ý thay đổi bất kỳ thông tin nào đã có giá trị cụ thể.
2. CÁC LƯỢT TIẾP THEO (TURN 2+): Bạn có quyền cập nhật hoặc thay đổi các dữ liệu đã tồn tại của MC (Vd: Tăng/giảm chỉ số, thay đổi linh căn, tiến hóa thể chất, v.v.) để phản ánh sự phát triển của nhân vật trong câu chuyện.
3. Ô KHÓA DỮ LIỆU (LOCKED FIELDS): Nếu một trường thông tin (Vd: Tên, Tuổi, Giới tính, Gia thế, v.v.) được người chơi "KHÓA" (LOCKED), bạn TUYỆT ĐỐI KHÔNG ĐƯỢC THAY ĐỔI giá trị của trường đó trong bất kỳ trường hợp nào, kể cả khi có biến cố lớn. Bạn phải giữ nguyên giá trị đã khóa.
4. GIẢI TRÌNH THAY ĐỔI (MANDATORY): Nếu có bất kỳ sự thay đổi nào đối với dữ liệu đã tồn tại của MC từ lượt 2 đi, bạn PHẢI giải thích lý do thay đổi đó một cách rõ ràng trong trường "evolutionJustification" của JSON.
5. TÍNH CÁCH: Giữ đúng nét tính cách (personality) mà người chơi đã chọn. Nếu người chơi chọn "Lạnh lùng", đừng viết MC nói quá nhiều hoặc quá nhiệt tình, trừ khi có biến cố tâm lý cực lớn được giải trình rõ ràng.
`;

export const CUSTOM_WIDGET_RULES = `
QUY TẮC CUSTOM WIDGET (CUSTOM WIDGET PROTOCOL):
1. TỰ ĐỘNG KHỞI TẠO: AI nên chủ động tạo ra các "customFields" để phản ánh các thông tin đặc thù của MC mà các trường mặc định không có (Vd: Học vấn, Nghề nghiệp, Danh tiếng trong giới, Trình độ lái xe, v.v.).
2. NỘI DUNG ĐẦY ĐỦ: Mỗi custom widget PHẢI có "label" và "value" mang ý nghĩa thực tế, giàu thông tin. 
3. TUYỆT ĐỐI CẤM: Không được để "label" là các ký tự giữ chỗ như "??", "N/A", "Chưa rõ", "Unknown", hoặc để trống. "label" PHẢI mang ý nghĩa thực tế. Đối với "value", AI có thể sử dụng "??" nếu thông tin thực sự chưa rõ ràng hoặc cần cập nhật bổ sung sau.
4. BIẾN ĐỘNG LOGIC: Cập nhật các widget này khi MC có sự thay đổi trong cuộc sống hoặc đạt được thành tựu mới.
`;

export const LEGACY_CONTENT_RULES = `
  QUY TẮC NARRATIVE (LEGACY):
  - Sử dụng văn phong kiếm hiệp/tiên hiệp truyền thống.
  - Tập trung vào hành động và lời thoại.
`;

export const BEAUTIFY_CONTENT_RULES = `
QUY TẮC LÀM ĐẸP NỘI DUNG (BEAUTIFY CONTENT PROTOCOL - ACTIVE):
1. ĐỐI THOẠI: Mọi lời nói của nhân vật PHẢI bắt đầu bằng tên nhân vật trong ngoặc vuông, theo sau là dấu hai chấm và lời thoại trong ngoặc kép.
   Ví dụ: [Lâm Tuệ Nghi]: "Chào anh, hôm nay anh thế nào?"
2. SUY NGHĨ: Mọi suy nghĩ nội tâm của nhân vật PHẢI được đặt trong dấu ngoặc đơn () hoặc dấu sao **.
   Ví dụ: (Mình nên làm gì bây giờ nhỉ?) hoặc *Không biết cô ấy có giận mình không?*
3. TIN NHẮN/THƯ TỪ: Sử dụng các tiêu đề rõ ràng trong ngoặc vuông như [TIN NHẮN TỪ: ...], [EMAIL TỪ: ...], [THƯ TỪ: ...].
`;

export const PROGRESSION_LOGIC_RULES = `
QUY TẮC BIÊN ĐỘ CHỈ SỐ (SCALING PROTOCOL - ZERO TOLERANCE):
1. CHỈ SỐ NỀN (Libido/Bản tính): CỰC KHÓ thay đổi. Mỗi lượt chỉ được biến động từ 0 đến 3 điểm. Chỉ sự kiện chấn động (Vd: Lần đầu tiên, Phản bội cực nặng) mới được +/- 10-20 điểm. TUYỆT ĐỐI CẤM tăng hàng trăm điểm như các chỉ số nhất thời.
2. BIÊN ĐỘ THEO ĐỘ KHÓ (Cho các hành động Ý NGHĨA - Vd: Nắm tay, Tặng quà, Giúp đỡ):
   - EASY: +30 đến +100 điểm.
   - MEDIUM (Mặc định): +5 đến +25 điểm. (Vd: Nắm tay chỉ nên +10 đến +15 Thiện cảm).
   - HARD: +1 đến +10 điểm.
   - HELL/ASIAN: +0 đến +5 điểm.
3. HÀNH ĐỘNG NHỎ (Chào hỏi, nhìn, lướt qua): Chỉ được +/- 1 đến 3 điểm bất kể độ khó.
4. TÍNH TOÁN LƯỢNG TỬ: Bạn PHẢI dựa trên thang đo này để đưa ra con số chính xác. Nếu hành động không đủ sức nặng, hãy giữ con số ở mức tối thiểu của dải phân tách.
`;

export class GeminiGameService {
  private failedKeys: Set<string> = new Set();

  private reportKeyFailure(key: string) {
    this.failedKeys.add(key);
    console.warn(`[MATRIX_API]: Key ${key.substring(0, 8)}... added to blacklist.`);
  }

  public resetBlacklist() {
    this.failedKeys.clear();
    console.log("[MATRIX_API]: API Key blacklist reset.");
  }

  private extractValidJson(text: string): string {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    return jsonMatch ? jsonMatch[0] : text;
  }

  private async getProxyResponse(
    url: string,
    key: string,
    model: string,
    systemInstruction: string,
    history: any[],
    action: string
  ): Promise<GameUpdate> {
    const messages = [
      { role: "system", content: systemInstruction },
      ...history.map(h => ({
        role: h.role === 'model' ? 'assistant' : h.role,
        content: typeof h.parts[0].text === 'string' ? h.parts[0].text : JSON.stringify(h.parts[0].text)
      })),
      { role: "user", content: action }
    ];

    const response = await fetch(`${url.replace(/\/$/, '')}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      },
      body: JSON.stringify({
        model: model,
        messages: messages,
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`PROXY_ERROR: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    const cleanedText = this.extractValidJson(content);
    
    try {
      const parsed = JSON.parse(cleanedText) as GameUpdate;
      if (data.usage) {
        parsed.tokenUsage = data.usage.total_tokens;
      }
      return parsed;
    } catch (err) {
      console.error("[MATRIX_PROXY]: JSON Parse Error", err, "Raw Text:", cleanedText);
      throw new Error("PARSE_ERROR: Lỗi phân tích từ Proxy. Dữ liệu trả về bị lỗi cấu trúc.");
    }
  }

  public async getResponse(
    action: string,
    history: any[],
    playerObj?: any,
    genre?: GameGenre,
    isFanfic: boolean = false,
    systemInstruction: string = "",
    settings?: AppSettings,
    lastTurnNewNpcCount: number = 0,
    currentTime: string = "Ngày 01/01/2024 | 08:00"
  ): Promise<GameUpdate> {
    const modelToUse = settings?.aiModel || "gemini-3-flash-preview";
    const proxyUrl = settings?.proxyUrl;
    const proxyKey = settings?.proxyKey;

    // 1. Determine API Key
    let apiKeyToUse = process.env.GEMINI_API_KEY;
    let usedKeyIndex = 0; // 0 means system key

    if (settings?.userApiKeys && settings.userApiKeys.length > 0) {
      const allKeys = settings.userApiKeys;
      const availableKeys = allKeys.filter(k => !this.failedKeys.has(k));
      const keysToUse = availableKeys.length > 0 ? availableKeys : allKeys;
      
      if (availableKeys.length === 0 && this.failedKeys.size > 0) {
        this.failedKeys.clear();
      }

      const turnBase = playerObj?.turnCount || 0;
      const retrySeed = Math.floor(Date.now() / 10000);
      const index = (turnBase + retrySeed) % keysToUse.length;
      apiKeyToUse = keysToUse[index];
      usedKeyIndex = allKeys.indexOf(apiKeyToUse) + 1;
    }

    try {

      const ai = new GoogleGenAI({ apiKey: apiKeyToUse || '' });
      const existingNpcs = playerObj?.relationships || [];
      const activeQuests = playerObj?.quests?.filter((q: any) => q.status === 'active') || [];
      const mcName = playerObj?.name || "Nhân vật chính";
      const currentSystem = playerObj?.systemName || "";
      const currentLocation = playerObj?.currentLocation || "Chưa xác định";
      const aiHints = playerObj?.aiHints;

      // 2. Prepare Context (RAG & Entity DB)
      let actionEmbedding: number[] | undefined = undefined;
      try {
        actionEmbedding = await embeddingService.getEmbedding(action);
      } catch (err) {
        console.warn("[MATRIX_API]: Failed to get action embedding, falling back to keyword search.");
      }



      const lockedFieldsStr = playerObj?.lockedFields && playerObj.lockedFields.length > 0 
        ? ` | CÁC TRƯỜNG ĐÃ KHÓA (TUYỆT ĐỐI KHÔNG THAY ĐỔI): ${playerObj.lockedFields.join(', ')}`
        : "";

      const entityDb = [
        `ID: mc_player | Tên: ${mcName} | Giới tính: ${playerObj?.gender || "Chưa xác định"} | Tính cách: ${playerObj?.personality || "Chưa xác định"} | Tuổi: ${playerObj?.age || "??"} | Ngày sinh: ${playerObj?.birthday || "---"} | Danh hiệu: ${playerObj?.title || "Vô danh"} | Gia thế: ${playerObj?.lineage || "Chưa xác định"} | Linh Căn: ${playerObj?.spiritRoot || "---"} | Thể Chất: ${playerObj?.physique || "---"} | Chỉ số: ${JSON.stringify(playerObj?.stats || {})} | Hệ Thống: ${currentSystem}${lockedFieldsStr}`,
        `THÔNG TIN ĐÁM ĐÔNG: Lượt trước đã tạo ${lastTurnNewNpcCount} NPC mới. Tổng số NPC hiện có: ${existingNpcs.length}. ID TIẾP THEO CHO NPC MỚI: ${playerObj?.nextNpcId || 1}.`,
        ...existingNpcs.map((n: Relationship) => 
          `ID: ${n.id} | Tên: ${n.name} | Tuổi: ${n.age} | Thiện cảm: ${n.affinity}/1000 | Trung thành: ${n.loyalty}/1000 | Dục vọng: ${n.lust}/1000 | Mood: ${n.mood} | Khó khăn: ${n.hardships?.join(', ') || 'Không'}`
        )
      ].join('\n');

      const optimizedRules = ragService.assembleOptimizedPrompt({
        action,
        genre: genre || GameGenre.URBAN_NORMAL,
        isAdultEnabled: settings?.adultContent !== false,
        hasNpcs: existingNpcs.length > 0,
        unlockedCodex: playerObj?.codex?.filter((c: any) => c.unlocked),
        actionEmbedding
      });

      // 3. Construct Final Prompt
      const difficultyRules = settings?.difficulty === 'easy' ? EASY_MODE_RULES : 
                             settings?.difficulty === 'hard' ? HARD_MODE_RULES : 
                             settings?.difficulty === 'hell' ? HELL_MODE_RULES : 
                             settings?.difficulty === 'asian' ? ASIAN_MODE_RULES : MEDIUM_MODE_RULES;

      const modeRules = settings?.isNovelMode ? NOVEL_MODE_RULES : NORMAL_MODE_RULES;
      const beautifyRules = settings?.beautifyContent ? BEAUTIFY_CONTENT_RULES : LEGACY_CONTENT_RULES;

      const genesisCommand = `
        MỆNH LỆNH GENESIS TỐI THƯỢNG (GENESIS COMMAND):
        0. QUYỀN ƯU TIÊN TỐI THƯỢNG: Mọi thông tin trong kịch bản khởi đầu, thân phận tùy chỉnh hoặc yêu cầu do người chơi nhập vào là NGUỒN THẬT DUY NHẤT. Bạn PHẢI tôn trọng, xem xét và sử dụng chúng làm nền tảng cốt lõi.
        1. KHỞI CHẠY VẬN MỆNH (TURN 1): Tại lượt đầu tiên, bạn BẮT BUỘC tạo ra ít nhất 06 NPC trở lên dựa trên bối cảnh. BẮT BUỘC gán trường "familyRole" và "type" (family/harem/social) cụ thể cho từng người.
        2. GIAO THỨC ĐÁM ĐÔNG: Khi ở môi trường đông người, chủ động tạo thêm 5-10 NPC phụ.
        3. CHỈ SỐ QUAN HỆ: Mọi NPC Tiềm năng BẮT BUỘC phải có affinity, loyalty, lust (0-1000) và affinityChangeReason.
        4. HOÀN THIỆN LŨY TIẾN: Cập nhật các trường "??" sang thông tin chi tiết ngay khi được tiết lộ.
        5. ĐỊNH DANH THỰC THỂ: Mọi nhân vật có lời thoại/hành động trong "text" PHẢI được liệt kê vào "newRelationships" với hồ sơ đầy đủ.
        6. VAI TRÒ MC (MANDATORY): Mọi NPC được tạo ra BẮT BUỘC phải có trường "familyRole" cụ thể.
      `;

      const finalPrompt = `
        ${isFanfic ? FANFIC_JSON_SCHEMA : GENERAL_JSON_SCHEMA}
        
        ${MC_DATA_RULES}
        ${CUSTOM_WIDGET_RULES}
        ${beautifyRules}
        
        ${aiHints ? `
        MỆNH LỆNH TỐI CAO TỪ NGƯỜI CHƠI:
        ${aiHints.permanent ? `- CHỈ THỊ VĨNH VIỄN: ${aiHints.permanent}` : ""}
        ${aiHints.oneTurn ? `- CHỈ THỊ LƯỢT NÀY: ${aiHints.oneTurn}` : ""}
        ` : ""}

        ${isFanfic ? FANFIC_CORE_RULES : ""}
        ${difficultyRules}
        ${modeRules}
        ${PROGRESSION_LOGIC_RULES}
        ${optimizedRules}
        ${SECRET_IDENTITY_RULES}
        ${memoryService.getMemoryContext(actionEmbedding)}
        
        ${genesisCommand}

        ${isFanfic ? `
        MỆNH LỆNH ĐỒNG NHÂN (FANFIC PROTOCOL):
        1. TUYỆT ĐỐI KHÔNG nhắc tới "Vạn Giới Hồng Trần", "Matrix" hay thuật ngữ game gốc.
        2. Tập trung hoàn toàn vào bối cảnh tác phẩm gốc.
        3. Sử dụng hệ thống sức mạnh và thuật ngữ của tác phẩm đó.
        4. Mọi NPC phải phù hợp với thế giới đó.
        ` : ""}

        THÔNG TIN THỰC TẠI HIỆN TẠI (ENTITY DB):
        ${entityDb}

        TRẠNG THÁI HỆ THỐNG:
        ${currentSystem ? `ĐANG KÍCH HOẠT: "${currentSystem}". Bạn PHẢI đóng vai Hệ Thống này.` : `CHƯA KÍCH HOẠT. Bạn là người dẫn truyện khách quan.`}

        NHIỆM VỤ ĐANG KÍCH HOẠT:
        ${activeQuests.length > 0 ? activeQuests.map((q: any) => `- ${q.title} (${q.group})`).join('\n') : "Không có."}

        ĐỊA ĐIỂM HIỆN TẠI: ${currentLocation}
        THỜI GIAN: ${currentTime}
        THỂ LOẠI: ${genre || 'General'}
        CHỈ THỊ THẾ GIỚI: ${systemInstruction}

        LƯU Ý QUAN TRỌNG: 
        - Giới tính (gender) của MC là bất biến nếu đã có giá trị.
        - Bạn PHẢI dẫn truyện phù hợp với giới tính này.
      `;

      const budgetToUse = settings?.thinkingBudget !== undefined ? settings.thinkingBudget : 0;
      const levelToUse = settings?.thinkingLevel || ThinkingLevel.LOW;
      const isGemini3 = modelToUse.includes('gemini-3');

      // Use Proxy if configured
      if (proxyUrl && proxyKey) {
        try {
          return await this.getProxyResponse(
            proxyUrl,
            proxyKey,
            modelToUse,
            finalPrompt,
            history,
            action
          );
        } catch (proxyErr) {
          console.error("[MATRIX_PROXY]: Proxy failed, falling back to direct API", proxyErr);
          // If proxy fails, we continue to direct API path
        }
      }

      // 4. Call API
      const response = await ai.models.generateContent({
        model: modelToUse,
        contents: [...history, { role: 'user', parts: [{ text: action }] }],
        config: {
          systemInstruction: finalPrompt,
          responseMimeType: "application/json",
          thinkingConfig: isGemini3 ? (budgetToUse > 0 ? { 
            thinkingBudget: budgetToUse
          } : {
            thinkingLevel: levelToUse
          }) : undefined, 
          safetySettings: [
            { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE }
          ]
        },
      });

      if (!response.candidates || response.candidates.length === 0) {
        throw new Error("SAFETY_BLOCK: Hệ thống không nhận được phản hồi từ AI. Có thể nội dung đã bị bộ lọc an toàn chặn.");
      }

      const candidate = response.candidates[0];
      if (candidate.finishReason === 'SAFETY') {
        throw new Error("SAFETY_BLOCK: Phản hồi bị chặn do vi phạm chính sách an toàn. Hãy thử điều chỉnh hành động bớt nhạy cảm hơn.");
      }

      let responseText = "";
      try {
        responseText = response.text || "";
      } catch (textErr) {
        throw new Error("SAFETY_BLOCK: Không thể truy xuất nội dung do bộ lọc an toàn. Hãy thử lại với hành động khác.");
      }

      const cleanedText = this.extractValidJson(responseText);
      if (!cleanedText || !cleanedText.includes('{')) {
        throw new Error("PARSE_ERROR: AI không tạo ra dữ liệu JSON hợp lệ. Có thể do nội dung quá dài hoặc bị ngắt quãng.");
      }

      let parsed: GameUpdate;
      try {
        parsed = JSON.parse(cleanedText) as GameUpdate;
      } catch (jsonErr) {
        console.error("[MATRIX_API]: JSON Parse Error", jsonErr, "Raw Text:", cleanedText);
        throw new Error("PARSE_ERROR: Lỗi phân tích lượng tử. Dữ liệu AI trả về bị lỗi cấu trúc.");
      }



      parsed.usedKeyIndex = usedKeyIndex;
      
      if (response.usageMetadata) {
        parsed.tokenUsage = response.usageMetadata.totalTokenCount;
      }

      return parsed;

    } catch (e: any) {

      // Report failure if it's a user key

      if (usedKeyIndex > 0 && apiKeyToUse) {

        this.reportKeyFailure(apiKeyToUse);

      }

      e.usedKeyIndex = usedKeyIndex;

      throw e;

    }

  }

}



export const gameAI = new GeminiGameService();

