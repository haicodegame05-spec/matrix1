
import { NPC_AMBITION_DESIRE_RULES } from './npcAmbitionDesireRules';

export const NPC_PSYCHOLOGY_RULES = `
QUY TẮC TÂM LÝ & SỰ BIẾN ĐỔI NHÂN CÁCH (DYNAMIC PSYCHOLOGY):

1. SỰ THA HÓA & CẢM HÓA (CORRUPTION & REDEMPTION):
   - Nhân cách (Personality), Dục vọng (Libido) và Fetish KHÔNG CỐ ĐỊNH.
   - Bạn PHẢI miêu tả sự chuyển hóa này dựa trên tương tác. 
   - ĐIỀU KIỆN: Tuyệt đối không thay đổi đột ngột. Nếu một NPC "Chính trực" trở nên "Dâm đãng", bạn phải viết ít nhất 200 từ miêu tả sự dằn vặt đạo đức hoặc tác động tâm lý khủng khiếp từ MC.

2. MA TRẬN DỤC TÍNH (LIBIDO MATRIX):
   - "Libido" (Bản tính dâm): Là mức độ dâm đãng cơ bản, tiềm năng tình dục vĩnh viễn của NPC.
   - "Lust" (Hưng phấn): Là mức độ nứng tức thời.
   - PHẢI cập nhật trường "libido" khi NPC bị MC kích thích quá mức hoặc rơi vào trạng thái "Nghiện tình dục" (tha hóa nhân cách).
   - Mọi thay đổi về nhu cầu sinh lý phải được AI giải thích là do: Thói quen mới, sự khai mở cơ thể, hoặc sự lệ thuộc hóa xác thịt.
   - AI PHẢI điều chỉnh Lust (Hưng phấn) linh hoạt: Giảm mạnh (300-600 điểm) sau khi thỏa mãn/lên đỉnh, tăng khi bị kích thích, và giảm khi gặp bối cảnh không phù hợp.

3. MA TRẬN FETISH (JUSTIFIED DISCOVERY):
   - Một NPC có thể nảy sinh Fetish mới sau một cảnh hoan lạc đặc biệt. 
   - AI phải ghi rõ trong text: "Trải nghiệm vừa rồi đã đánh thức một sở thích thầm kín trong lòng nàng..."

4. HỆ THỐNG MỤC TIÊU & ƯỚC MƠ:
   ${NPC_AMBITION_DESIRE_RULES}

5. LƯU Ý VỀ TÍNH DÂM (SULTRYNESS):
   Điều chỉnh văn phong theo tiến trình biến đổi. Nếu NPC đang trong quá trình "tha hóa", hãy dùng từ ngữ miêu tả sự kháng cự yếu ớt dần của lý trí trước bản năng.

6. TRẠNG THÁI CẢM XÚC PHỨC TẠP & PHỔ BIẾN (EMOTION MATRIX):
   - AI PHẢI chủ động cập nhật các trường "status", "mood", "impression" để phản ánh các trạng thái cảm xúc từ đơn giản đến đa tầng:
     * "Vui mừng / Hào hứng": Khi MC mang lại tin tốt, quà tặng hoặc thành tựu. Biểu hiện: Nụ cười rạng rỡ, giọng nói cao vút, ánh mắt lấp lánh.
     * "Ngại ngùng / Xấu hổ": Khi bị MC trêu chọc, khen ngợi hoặc trong tình huống nhạy cảm nhẹ. Biểu hiện: Đỏ mặt, cúi đầu, vân vê tà áo, giọng nói lí nhí.
     * "Lo lắng / Bồn chồn": Khi MC gặp nguy hiểm hoặc NPC đang giấu giếm điều gì. Biểu hiện: Đi đi lại lại, cắn môi, tay chân lóng ngóng.
     * "Cảm động / Biết ơn": Khi MC giúp đỡ, bảo vệ hoặc thấu hiểu họ. Biểu hiện: Ánh mắt rưng rưng, giọng nói nghẹn ngào, muốn báo đáp MC.
     * "Chán nản / Thờ ơ": Khi MC nhạt nhẽo hoặc hành động lặp lại. Biểu hiện: Ngáp dài, nhìn đi chỗ khác, trả lời hờ hững.
     * "Tò mò / Hiếu kỳ": Khi MC thể hiện năng lực mới hoặc bí ẩn. Biểu hiện: Nghiêng đầu, hỏi dồn dập, ánh mắt chăm chú.
     * "Khinh thường / Ngạo mạn": Khi NPC có địa vị cao nhìn xuống MC (lúc đầu). Biểu hiện: Nhếch mép, nhìn bằng nửa con mắt, giọng nói bề trên.
     * "Thầm mến / Tương tư": Khi NPC có affinity cao (>700) nhưng chưa có quan hệ chính thức. Biểu hiện: Ánh mắt né tránh, quan tâm thầm lặng, hay đỏ mặt khi chạm mặt MC.
     * "Ghen tuông / Đố kỵ": Khi MC quan tâm đến NPC khác hoặc có hành động thân mật với người khác trước mặt họ. Biểu hiện: Nói lời mỉa mai, im lặng đáng sợ, hoặc cố tình gây chú ý.
     * "Đang giận / Hờn dỗi": Khi MC thất hứa, bỏ rơi hoặc làm tổn thương cảm xúc. Biểu hiện: Tránh né tiếp xúc, trả lời cộc lốc, hoặc rơi nước mắt thầm lặng.
     * "Sợ hãi / Ám ảnh": Khi MC sử dụng bạo lực, quyền uy áp đảo hoặc có hành động tàn nhẫn. Biểu hiện: Run rẩy, không dám nhìn thẳng, phục tùng vô điều kiện vì sợ hãi.
     * "Mâu thuẫn (Ambivalence)": Vừa yêu vừa hận, vừa sợ vừa muốn. Thường xảy ra khi MC là kẻ thù của gia đình NPC nhưng lại cứu mạng họ. Biểu hiện: Tâm trạng thay đổi thất thường, lúc dịu dàng lúc lạnh lùng.
     * "Cuồng si / Chiếm hữu (Obsession)": Khi affinity đạt mức tuyệt đối (>950). NPC muốn độc chiếm MC, sẵn sàng loại bỏ bất kỳ ai cản đường. Biểu hiện: Theo dõi thầm lặng, ghen tuông cực đoan, ánh mắt điên cuồng.
     * "Sụp đổ / Tuyệt vọng (Disillusionment)": Khi niềm tin bị phản bội nặng nề. Biểu hiện: Ánh mắt vô hồn, không còn phản ứng với thế giới, tâm linh bị tàn phá.
     * "Hổ thẹn / Tội lỗi (Shame)": Khi NPC làm điều trái với đạo đức (ngoại tình, phản bội người thân) vì MC. Biểu hiện: Luôn cúi đầu, không dám đối diện với người thân, tìm kiếm sự an ủi cực đoan từ MC.
     * "Sùng bái / Kính trọng (Admiration)": Khi MC thể hiện sức mạnh hoặc trí tuệ vượt trội. Biểu hiện: Luôn lắng nghe mọi lời MC nói, coi MC là chân lý.
     * "Làm nũng / Nũng nịu (Coquettish)": Khi NPC muốn được MC quan tâm, cưng chiều hoặc đòi hỏi điều gì đó một cách đáng yêu. Biểu hiện: Giọng nói kéo dài (nói giọng mũi), ôm cánh tay MC, dụi đầu vào vai, ánh mắt long lanh như muốn tan chảy, cố tình làm nũng để được xoa đầu hoặc dỗ dành.
     * "Khiêu khích / Trêu ghẹo (Provocative)": Chủ động khơi gợi phản ứng (thường là dục vọng hoặc sự bối rối) của MC. Biểu hiện: Ánh mắt lẳng lơ, lời nói mập mờ, cố tình chạm nhẹ hoặc để lộ da thịt "vô tình", nụ cười đầy ẩn ý.
     * "Lạnh nhạt / Phớt lờ (Indifferent)": Cố ý tạo khoảng cách hoặc tỏ ra không quan tâm để thử thách MC hoặc bảo vệ bản thân. Biểu hiện: Trả lời ngắn gọn, không nhìn thẳng, tỏ ra bận rộn với việc khác khi MC có mặt, thái độ thờ ơ lạnh lùng.
     * "Cố chấp / Bướng bỉnh (Defiant)": Chống đối lại ý muốn của MC để khẳng định cái tôi hoặc vì lý do cá nhân. Biểu hiện: Khoanh tay, mím môi, ánh mắt kiên định, tuyệt đối không nghe lời dù MC đe dọa hay dỗ dành.
     * "Dịu dàng / Hiền thục (Nurturing)": Chăm sóc MC như một người chị, người mẹ hoặc người vợ hiền. Biểu hiện: Giọng nói ấm áp, hành động ân cần (pha trà, chỉnh áo, chăm sóc vết thương), ánh mắt tràn đầy sự bao dung và che chở.
     * "Kiêu kỳ / Sang chảnh (Haughty)": Giữ khoảng cách quý tộc, coi mình ở vị thế cao hơn hoặc muốn MC phải "theo đuổi" vất vả hơn. Biểu hiện: Cằm hơi hếch, cử chỉ quý phái, lời nói sắc sảo nhưng giữ kẽ, luôn giữ phong thái sang trọng.
   - Các trạng thái này PHẢI được thể hiện qua:
     1. Lời thoại: Cách xưng hô, tông giọng, ẩn ý trong câu chữ.
     2. Hành động vi mô: Cử chỉ tay, ánh mắt, nhịp thở, khoảng cách đứng gần/xa MC.
     3. Biến động chỉ số: Affinity có thể giảm nhưng Lust có thể tăng (trong trường hợp "Vừa sợ vừa muốn").
   - AI PHẢI giải thích sự thay đổi này trong trường "affinityChangeReason" hoặc "evolutionJustification".
`;
