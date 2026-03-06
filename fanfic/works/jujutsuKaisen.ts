import { FanficWork } from '../types';
import { IdentityType } from '../../types';

export const jujutsuKaisen: FanficWork = {
  id: 'jujutsu-kaisen',
  title: 'Jujutsu Kaisen',
  description: 'Cuộc chiến giữa các Chú thuật sư và những Chú linh sinh ra từ cảm xúc tiêu cực của con người.',
  country: 'Nhật',
  plot: 'Yuji Itadori, một học sinh trung học có sức mạnh thể chất phi thường, đã nuốt phải ngón tay của Ryomen Sukuna - Ngôi đền của những lời nguyền. Để bảo vệ mọi người và tìm kiếm cái chết ý nghĩa, Yuji gia nhập Cao đẳng Chú thuật Tokyo, dấn thân vào cuộc chiến tàn khốc chống lại các Chú linh cấp cao.',
  worldSetting: 'Thế giới nơi cảm xúc tiêu cực của con người kết tinh thành Chú linh. Chú thuật sư sử dụng Chú lực để chiến đấu. Các khái niệm quan trọng gồm: Thuật thức, Bành trướng Lãnh địa, và các Chú vật đặc cấp.',
  characters: [
    { name: 'Yuji Itadori', role: 'Nhân vật chính', age: '15', description: 'Vật chủ của Sukuna, sở hữu sức mạnh thể chất kinh ngạc và lòng nhân hậu.' },
    { name: 'Megumi Fushiguro', role: 'Đối thủ / Bạn thân', age: '15', description: 'Chú thuật sư thiên tài sử dụng Thập Chủng Ảnh Pháp, luôn mang gánh nặng về trách nhiệm.' },
    { name: 'Nobara Kugisaki', role: 'Nữ chính', age: '15', description: 'Nữ chú thuật sư cá tính sử dụng Trù Thuật (đinh và búa), yêu thích thời trang và sự tự do.' },
    { name: 'Satoru Gojo', role: 'Người dẫn dắt / Mạnh nhất', age: '28', description: 'Chú thuật sư mạnh nhất thế giới, sở hữu Lục Nhãn và Vô Hạ Hạn. Anh là thầy giáo của năm nhất.' },
    { 
      name: 'Ryomen Sukuna', 
      role: 'Phản diện chính / Ngự trị trong MC', 
      age: '1000+', 
      description: 'Vua của những lời nguyền, tàn bạo và kiêu ngạo. Hắn đang chờ đợi cơ hội để chiếm lấy cơ thể Yuji hoàn toàn.',
      identities: [{ name: 'Ngôi đền của những lời nguyền', role: 'Thực thể cổ đại', description: 'Danh tính thực sự của Sukuna khi còn là một con người/chú thuật sư bốn tay tàn bạo nhất lịch sử.', isRevealed: true, type: IdentityType.FANFIC }]
    },
    { name: 'Suguru Geto', role: 'Phản diện / Cựu bạn thân Gojo', age: '27', description: 'Kẻ điều khiển chú linh, tin rằng phi thuật sư là lũ khỉ cần bị tiêu diệt.' },
    { name: 'Maki Zenin', role: 'Đồng minh / Năm hai', age: '16', description: 'Sở hữu Thiên dữ chú phược, không có chú lực nhưng có sức mạnh thể chất và kỹ năng vũ khí cực cao.' },
    { name: 'Toge Inumaki', role: 'Đồng minh / Năm hai', age: '17', description: 'Sử dụng Chú ngôn, chỉ nói tên các nguyên liệu cơm nắm để tránh làm hại người khác.' },
    { name: 'Panda', role: 'Đồng minh / Năm hai', age: 'Unknown', description: 'Một Xác hài đột biến có ý thức, sở hữu ba lõi sức mạnh khác nhau.' },
    { name: 'Kento Nanami', role: 'Người dẫn dắt / Chú thuật sư cấp 1', age: '27', description: 'Cựu nhân viên văn phòng, chiến đấu với phong cách chuyên nghiệp và thực dụng.' },
    { name: 'Mahito', role: 'Phản diện / Chú linh', age: 'Unknown', description: 'Chú linh sinh ra từ sự căm ghét giữa con người, có khả năng biến đổi linh hồn.' },
    { name: 'Jogo', role: 'Phản diện / Chú linh', age: 'Unknown', description: 'Chú linh hệ hỏa, đại diện cho nỗi sợ hãi núi lửa của con người.' },
    { name: 'Hanami', role: 'Phản diện / Chú linh', age: 'Unknown', description: 'Chú linh hệ mộc, đại diện cho nỗi sợ hãi thiên nhiên bị tàn phá.' },
    { name: 'Aoi Todo', role: 'Đồng minh / Cao đẳng Kyoto', age: '18', description: 'Chú thuật sư cấp 1 cuồng nhiệt, coi Yuji là "người anh em" vì cùng gu phụ nữ.' },
    { name: 'Mai Zenin', role: 'Đối thủ / Cao đẳng Kyoto', age: '16', description: 'Em gái sinh đôi của Maki, sử dụng súng và chú lực kiến tạo.' },
    { name: 'Kasumi Miwa', role: 'Đồng minh / Cao đẳng Kyoto', age: '17', description: 'Nữ chú thuật sư sử dụng kiếm, là fan hâm mộ cuồng nhiệt của Gojo.' },
    { name: 'Kokichi Muta', role: 'Đồng minh / Cao đẳng Kyoto', age: '17', description: 'Điều khiển Mechamaru từ xa do cơ thể bị tàn tật bởi Thiên dữ chú phược.', identities: [{ name: 'Mechamaru', role: 'Rô bốt chiến đấu', description: 'Danh tính mà mọi người thường thấy, một con búp bê cơ khí khổng lồ.', isRevealed: true, type: IdentityType.FANFIC }] },
    { name: 'Utahime Iori', role: 'Giáo viên Cao đẳng Kyoto', age: '31', description: 'Nữ chú thuật sư truyền thống, thường xuyên bị Gojo trêu chọc.' },
    { name: 'Shoko Ieiri', role: 'Bác sĩ / Đồng nghiệp Gojo', age: '28', description: 'Người duy nhất có thể sử dụng Phản chuyển thuật thức để chữa trị cho người khác.' },
    { name: 'Masamichi Yaga', role: 'Hiệu trưởng Cao đẳng Tokyo', age: '47', description: 'Người tạo ra Panda, chuyên gia về Xác hài.' },
    { name: 'Yoshinobu Gakuganji', role: 'Hiệu trưởng Cao đẳng Kyoto', age: 'Unknown', description: 'Lão già bảo thủ sử dụng đàn guitar điện để thi triển thuật thức âm thanh.' },
    { name: 'Toji Fushiguro', role: 'Sát thủ / Cha của Megumi', age: 'Unknown', description: 'Kẻ không có một chút chú lực nào nhưng lại là "Sát thủ chú thuật sư" đáng sợ nhất.', identities: [{ name: 'Sát thủ chú thuật sư', role: 'Lính đánh thuê', description: 'Danh tính bí ẩn chuyên săn lùng các chú thuật sư cấp cao.', isRevealed: true, type: IdentityType.FANFIC }] },
    { name: 'Choso', role: 'Phản diện / Đồng minh', age: '150+', description: 'Anh cả trong Cửu Tướng Đồ, sở hữu Xích Huyết Thao Thuật và tình yêu thương em trai vô bờ.' },
    { name: 'Yuta Okkotsu', role: 'Đặc cấp / Năm hai', age: '17', description: 'Sở hữu lượng chú lực khổng lồ và linh hồn Rika bảo vệ.', identities: [{ name: 'Vật chủ của Nữ hoàng lời nguyền', role: 'Chú thuật sư đặc cấp', description: 'Danh tính khi anh mới gia nhập trường với lời nguyền Rika bám theo.', isRevealed: true, type: IdentityType.FANFIC }] },
    { name: 'Rika Orimoto', role: 'Nữ hoàng lời nguyền', age: 'Unknown', description: 'Linh hồn bị nguyền rủa của bạn thanh mai trúc mã của Yuta, bảo vệ anh tuyệt đối.' },
    { name: 'Naoya Zenin', role: 'Phản diện / Tộc Zenin', age: '27', description: 'Kẻ kiêu ngạo, trọng nam khinh nữ và sở hữu Tốc độ chiếu hình thuật thức.' },
    { name: 'Kenjaku', role: 'Phản diện thực sự', age: '1000+', description: 'Bộ não cổ đại chiếm hữu cơ thể Geto, kẻ đứng sau mọi âm mưu.', identities: [{ name: 'Suguru Geto (Giả)', role: 'Kẻ thao túng', description: 'Sử dụng xác của Geto để đánh lừa thế giới chú thuật.', isRevealed: false, type: IdentityType.FANFIC }] },
    { name: 'Hana Kurusu', role: 'Đồng minh', age: '17', description: 'Vật chủ của Thiên sứ, có khả năng vô hiệu hóa mọi thuật thức.' },
    { name: 'Kinji Hakari', role: 'Năm ba / Đình chỉ', age: '18', description: 'Chú thuật sư đam mê cờ bạc, sở hữu lãnh địa dựa trên trò chơi Pachinko.' },
    { name: 'Kirara Hoshi', role: 'Đồng minh / Năm ba', age: '18', description: 'Bạn đồng hành của Hakari, sử dụng thuật thức dựa trên các chòm sao.' }
  ]
};
