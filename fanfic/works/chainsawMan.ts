import { FanficWork } from '../types';
import { IdentityType } from '../../types';

export const chainsawMan: FanficWork = {
  id: 'chainsaw-man',
  title: 'Chainsaw Man',
  description: 'Thế giới nơi nỗi sợ hãi của con người biến thành Quỷ, và những Thợ săn quỷ chiến đấu để bảo vệ nhân loại.',
  country: 'Nhật',
  plot: 'Denji, một thanh niên nghèo khổ nợ nần chồng chất, bị giết và hồi sinh nhờ hợp nhất với chú chó quỷ Pochita của mình. Trở thành Chainsaw Man, anh gia nhập Ban Trị an để săn quỷ, dưới sự dẫn dắt của người phụ nữ bí ẩn Makima, với hy vọng tìm thấy một cuộc sống bình thường.',
  worldSetting: 'Thế giới hiện đại nơi Quỷ tồn tại dựa trên nỗi sợ. Quỷ càng bị sợ hãi thì càng mạnh. Thợ săn quỷ có thể lập khế ước với Quỷ để sử dụng sức mạnh của chúng, thường phải trả giá bằng bộ phận cơ thể hoặc tuổi thọ.',
  characters: [
    { name: 'Denji', role: 'Nhân vật chính', age: '16', description: 'Người lai Quỷ Cưa, khao khát những điều giản đơn như thức ăn ngon và sự gần gũi.', identities: [{ name: 'Chainsaw Man', role: 'Anh hùng / Quái vật', description: 'Hình dạng quỷ với những lưỡi cưa máy mọc ra từ đầu và tay.', isRevealed: true, type: IdentityType.FANFIC }] },
    { name: 'Makima', role: 'Người dẫn dắt / Phản diện', age: 'Unknown', description: 'Nữ thợ săn quỷ cấp cao xinh đẹp nhưng đầy thao túng.', identities: [{ name: 'Quỷ Chi Phối', role: 'Tứ Mã Phu', description: 'Một trong những con quỷ mạnh nhất, có khả năng điều khiển bất kỳ ai cô coi là thấp kém hơn mình.', isRevealed: false, type: IdentityType.FANFIC }] },
    { name: 'Aki Hayakawa', role: 'Đồng đội / Anh trai', age: '20', description: 'Thợ săn quỷ nghiêm túc, mang mối thù sâu nặng với Quỷ Súng.', identities: [{ name: 'Quỷ Súng (Vật chủ)', role: 'Bi kịch', description: 'Sau này bị Quỷ Súng chiếm hữu cơ thể, trở thành kẻ thù của Denji.', isRevealed: false, type: IdentityType.FANFIC }] },
    { name: 'Power', role: 'Đồng đội / Em gái', age: 'Unknown', description: 'Quỷ máu dưới hình dạng một cô gái trẻ, tính cách thất thường, ích kỷ nhưng đáng yêu.' },
    { name: 'Pochita', role: 'Bạn thân / Trái tim MC', age: 'Unknown', description: 'Quỷ Cưa nguyên bản, đã hy sinh để trở thành trái tim của Denji.' },
    { name: 'Himeno', role: 'Đồng nghiệp / Cấp trên Aki', age: '20s', description: 'Thợ săn quỷ kỳ cựu, sở hữu khế ước với Quỷ Ma, luôn lo lắng cho sự an toàn của Aki.' },
    { name: 'Kobeni Higashiyama', role: 'Đồng nghiệp / Nhút nhát', age: '20', description: 'Thợ săn quỷ cực kỳ nhát gan nhưng có phản xạ và kỹ năng chiến đấu đáng kinh ngạc.' },
    { name: 'Hirokazu Arai', role: 'Đồng nghiệp', age: '20s', description: 'Thợ săn quỷ nhiệt huyết nhưng thiếu kinh nghiệm, hy sinh để bảo vệ Kobeni.' },
    { name: 'Kishibe', role: 'Sư phụ / Thợ săn mạnh nhất', age: '50s', description: 'Thợ săn quỷ mạnh nhất Ban Trị an, nghiện rượu và đã mất đi hầu hết cảm xúc.' },
    { name: 'Angel Devil', role: 'Đồng đội / Quỷ Thiên Thần', age: 'Unknown', description: 'Con quỷ đại diện cho nỗi sợ thiên thần, có khả năng rút ngắn tuổi thọ của bất kỳ ai chạm vào.' },
    { name: 'Beam', role: 'Đồng đội / Quỷ Cá Mập', age: 'Unknown', description: 'Fan hâm mộ cuồng nhiệt của Chainsaw Man, có thể bơi qua mọi bề mặt rắn.' },
    { name: 'Galgali', role: 'Đồng đội / Quỷ Bạo Lực', age: 'Unknown', description: 'Quỷ bạo lực nhưng lại rất lịch sự và yêu chuộng hòa bình, luôn đeo mặt nạ độc hại.' },
    { name: 'Princi', role: 'Đồng đội / Quỷ Nhện', age: 'Unknown', description: 'Quỷ nhện dưới hình dạng một phụ nữ mặc đồ đen, trung thành tuyệt đối với Makima.' },
    { name: 'Reze', role: 'Người tình / Phản diện', age: 'Unknown', description: 'Cô gái Nga ngọt ngào làm việc tại quán cà phê, thực chất là một sát thủ.', identities: [{ name: 'Quỷ Bom', role: 'Vũ khí lai', description: 'Có khả năng tạo ra các vụ nổ kinh hoàng từ cơ thể.', isRevealed: false, type: IdentityType.FANFIC }] },
    { name: 'Quanxi', role: 'Phản diện / Thợ săn Trung Quốc', age: 'Unknown', description: 'Thợ săn quỷ đầu tiên, sở hữu tốc độ và kỹ năng dùng kiếm vô song.', identities: [{ name: 'Quỷ Cung', role: 'Vũ khí lai', description: 'Có thể biến thành một sinh vật với vô số mũi tên.', isRevealed: false, type: IdentityType.FANFIC }] },
    { name: 'Santa Claus', role: 'Phản diện / Sát thủ Đức', age: 'Unknown', description: 'Kẻ điều khiển búp bê, có thể biến con người thành những con rối vô hồn.', identities: [{ name: 'Quỷ Búp Bê', role: 'Thực thể tập hợp', description: 'Danh tính thực sự là một mạng lưới búp bê trải khắp thế giới.', isRevealed: false, type: IdentityType.FANFIC }] },
    { name: 'Katana Man', role: 'Phản diện / Trả thù', age: 'Unknown', description: 'Cháu trai của trùm mafia đã nợ Denji, muốn trả thù cho ông mình.', identities: [{ name: 'Quỷ Kiếm Katana', role: 'Vũ khí lai', description: 'Sở hữu lưỡi kiếm Katana mọc ra từ đầu và tay.', isRevealed: true, type: IdentityType.FANFIC }] },
    { name: 'Akane Sawatari', role: 'Phản diện / Đồng phạm Katana', age: 'Unknown', description: 'Cựu thợ săn quỷ, sở hữu khế ước với Quỷ Rắn.' },
    { name: 'Nayuta', role: 'Em gái nuôi / Tái sinh', age: '8', description: 'Kiếp sau của Quỷ Chi Phối, được Denji nuôi dưỡng để trở thành người tốt.' },
    { name: 'Asa Mitaka', role: 'Nhân vật chính phần 2', age: '17', description: 'Nữ sinh trung học nhút nhát, bị Quỷ Chiến Tranh chiếm hữu một phần não bộ.', identities: [{ name: 'Quỷ Chiến Tranh (Yoru)', role: 'Tứ Mã Phu', description: 'Con quỷ có khả năng biến mọi thứ cô sở hữu thành vũ khí.', isRevealed: false, type: IdentityType.FANFIC }] },
    { name: 'Yoshida Hirofumi', role: 'Đồng minh / Thợ săn tư nhân', age: '18', description: 'Thợ săn quỷ bí ẩn, sở hữu khế ước với Quỷ Bạch Tuộc, được giao nhiệm vụ bảo vệ Denji.' },
    { name: 'Fami', role: 'Phản diện / Chị gái Yoru', age: 'Unknown', description: 'Quỷ Đói Khát, một trong Tứ Mã Phu, luôn xuất hiện với vẻ ngoài mệt mỏi.', identities: [{ name: 'Quỷ Đói Khát', role: 'Tứ Mã Phu', description: 'Có khả năng biến những kẻ khao khát thành thuộc hạ của mình.', isRevealed: false, type: IdentityType.FANFIC }] },
    { name: 'Haruka Iseumi', role: 'Fan cuồng / Chủ tịch CLB', age: '17', description: 'Chủ tịch câu lạc bộ Chainsaw Man, tự nhận mình là Chainsaw Man thật.' },
    { name: 'Barem Bridge', role: 'Phản diện / Giáo phái', age: 'Unknown', description: 'Kẻ cuồng tín Chainsaw Man, sẵn sàng làm mọi thứ để hồi sinh Chainsaw Man nguyên bản.', identities: [{ name: 'Quỷ Lửa', role: 'Vũ khí lai', description: 'Có khả năng điều khiển lửa cực mạnh.', isRevealed: false, type: IdentityType.FANFIC }] },
    { name: 'Meowy', role: 'Thú cưng', age: 'Unknown', description: 'Con mèo của Power, là lý do duy nhất khiến cô quan tâm đến thế giới này.' },
    { name: 'Madoka', role: 'Cựu thợ săn quỷ', age: '30s', description: 'Một trong số ít thợ săn sống sót sau vụ tấn công của Katana Man, đã xin nghỉ việc ngay sau đó.' },
    { name: 'Tendo Michiko', role: 'Thợ săn quỷ Kyoto', age: '20s', description: 'Thợ săn quỷ hỗ trợ từ Kyoto, có vết sẹo lớn trên mặt.' },
    { name: 'Kurose Yuutaro', role: 'Thợ săn quỷ Kyoto', age: '20s', description: 'Đồng nghiệp của Tendo, cũng hỗ trợ từ Kyoto.' },
    { name: 'Cosmo', role: 'Bạn gái Quanxi / Quỷ Vũ Trụ', age: 'Unknown', description: 'Quỷ vũ trụ, chỉ có thể nói từ "Halloween" nhưng sở hữu kiến thức vô hạn của vũ trụ.' },
    { name: 'Pingtsi', role: 'Bạn gái Quanxi', age: 'Unknown', description: 'Một trong những quỷ thuộc hạ của Quanxi, có khả năng phân tích điểm yếu đối phương.' }
  ]
};
