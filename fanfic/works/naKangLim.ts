import { FanficWork } from '../types';
import { IdentityType } from '../../types';

export const naKangLim: FanficWork = {
  id: 'na-kang-lim',
  title: 'Nhân vật Webtoon Na Kang Lim',
  description: 'Na Kang Lim, một học sinh trung học bình thường, đột nhiên có khả năng quay ngược thời gian để cứu các nhân vật nữ trong webtoon yêu thích của mình.',
  country: 'Hàn',
  plot: 'Na Kang Lim là một fan cuồng của bộ webtoon "Harem của tôi". Một ngày nọ, các nhân vật trong truyện bước ra đời thực và đối mặt với những cái chết bi thảm. Kang Lim phát hiện mình có khả năng "Save & Load" để thay đổi số phận của họ. Anh phải trải qua vô số lần thử và sai để tìm ra con đường dẫn đến "Happy Ending" cho tất cả mọi người.',
  worldSetting: 'Thế giới hiện đại tại Hàn Quốc, nơi ranh giới giữa thực tại và webtoon bị xóa nhòa bởi những thế lực bí ẩn.',
  characters: [
    { 
      name: 'Na Kang Lim', 
      role: 'Nhân vật chính', 
      age: '17', 
      description: 'Một nam sinh trung học bình thường nhưng sở hữu ý chí sắt đá. Anh có khả năng quay ngược thời gian mỗi khi gặp thất bại để cứu những người mình yêu quý.',
      identities: [{
        name: 'Người hồi quy / Vị cứu tinh',
        role: 'Người nắm giữ vận mệnh',
        description: 'Kang Lim là người duy nhất biết trước các sự kiện bi thảm sẽ xảy ra. Anh âm thầm hành động từ trong bóng tối, trải qua hàng ngàn lần "Save & Load" để tìm ra con đường duy nhất dẫn đến kết thúc có hậu cho tất cả các nhân vật nữ.',
        isRevealed: false,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Yoo Da-hee', role: 'Nữ chính / Tsundere', age: '17', description: 'Nhân vật chính trong webtoon gốc. Cô có tính cách mạnh mẽ, bướng bỉnh nhưng bên trong lại rất quan tâm đến Kang Lim.' },
    { name: 'Kwon Ri-na', role: 'Nữ chính / Idol', age: '17', description: 'Một thần tượng nổi tiếng với vẻ ngoài hoàn hảo. Cô mang trong mình áp lực nặng nề từ sự nghiệp và gia đình.' },
    { name: 'Park Hye-bin', role: 'Nữ chính / Lớp trưởng', age: '17', description: 'Lớp trưởng gương mẫu, thông minh và điềm tĩnh. Cô luôn là chỗ dựa tinh thần vững chắc cho Kang Lim.' },
    { name: 'Choi Joo-yoon', role: 'Nữ chính / Game thủ', age: '17', description: 'Một cô gái nghiện game với tính cách khép kín. Cô dần mở lòng hơn sau khi được Kang Lim cứu giúp.' },
    { name: 'Lee Da-som', role: 'Nữ chính / Vận động viên', age: '17', description: 'Thành viên đội bơi lội với thân hình khỏe khoắn và tính cách năng động, thẳng thắn.' },
    { name: 'Cha So-yeon', role: 'Nữ chính / Nghệ sĩ', age: '17', description: 'Một cô gái có tâm hồn nghệ thuật bay bổng nhưng lại mang trong mình nỗi cô đơn sâu sắc.' },
    { name: 'Kim Chul-soo', role: 'Đồng minh', age: '17', description: 'Bạn thân của Kang Lim, người luôn ủng hộ anh dù không biết về khả năng quay ngược thời gian.' },
    { name: 'Tác giả Webtoon', role: 'Bí ẩn', age: 'Unknown', description: 'Thực thể bí ẩn đứng sau việc các nhân vật webtoon xuất hiện ở đời thực.' },
    { name: 'Hệ thống', role: 'Hỗ trợ', age: 'N/A', description: 'Giao diện cung cấp khả năng Save & Load cho Na Kang Lim.' },
    { name: 'Yoo Jin-ho', role: 'Đối thủ', age: '18', description: 'Một học sinh ưu tú nhưng đầy đố kỵ, thường xuyên gây khó dễ cho Kang Lim.' },
    { name: 'Park Man-soo', role: 'Phản diện', age: '40', description: 'Kẻ đứng sau những âm mưu hãm hại các nhân vật nữ trong giai đoạn đầu.' },
    { name: 'Lee Min-ji', role: 'Bạn học', age: '17', description: 'Một nữ sinh cùng lớp, thường xuyên cung cấp thông tin về các sự kiện trong trường.' },
    { name: 'Choi Kang-suk', role: 'Gia đình', age: '45', description: 'Cha của Choi Joo-yoon, một người đàn ông nghiêm khắc nhưng yêu thương con gái.' },
    { name: 'Kwon Sang-ho', role: 'Quản lý', age: '35', description: 'Quản lý của Kwon Ri-na, người luôn đặt lợi ích công ty lên hàng đầu.' },
    { name: 'Yoo Mi-ra', role: 'Gia đình', age: '42', description: 'Mẹ của Yoo Da-hee, một người phụ nữ dịu dàng và tâm lý.' },
    { name: 'Na Sun-young', role: 'Gia đình', age: '15', description: 'Em gái của Na Kang Lim, người thường xuyên trêu chọc anh nhưng rất quan tâm đến anh.' },
    { name: 'Bác sĩ Lee', role: 'Hỗ trợ', age: '50', description: 'Bác sĩ tâm lý giúp Kang Lim giải tỏa những áp lực từ việc quay ngược thời gian quá nhiều lần.' },
    { name: 'Thầy chủ nhiệm', role: 'Hỗ trợ', age: '45', description: 'Một giáo viên tận tâm, luôn lo lắng cho tương lai của học sinh.' },
    { name: 'Bóng đen', role: 'Phản diện chính', age: 'Unknown', description: 'Thực thể tà ác muốn phá hủy Happy Ending của thế giới này.' },
    { name: 'Hye-jin', role: 'Bạn học', age: '17', description: 'Bạn thân của Park Hye-bin, một cô gái vui vẻ và hoạt bát.' },
    { name: 'Ji-hoon', role: 'Đối thủ', age: '17', description: 'Thành viên đội bóng rổ, thường xuyên cạnh tranh với Kang Lim trong các hoạt động thể chất.' },
    { name: 'Soo-min', role: 'Bạn học', age: '17', description: 'Một cô gái nhút nhát nhưng có khả năng quan sát tinh tế.' },
    { name: 'Min-ho', role: 'Bạn học', age: '17', description: 'Một học sinh giỏi toán, thường xuyên giúp Kang Lim trong việc học tập.' },
    { name: 'Seo-yoon', role: 'Nữ phụ', age: '17', description: 'Một cô gái xinh đẹp nhưng kiêu kỳ, ban đầu không ưa Kang Lim.' },
    { name: 'Tae-yang', role: 'Đồng minh', age: '17', description: 'Một nam sinh có sức mạnh thể chất tốt, thường giúp Kang Lim trong các cuộc ẩu đả.' },
    { name: 'Ha-neul', role: 'Nữ phụ', age: '16', description: 'Đàn em khóa dưới, thầm hâm mộ Na Kang Lim.' },
    { name: 'Goo-man', role: 'Phản diện phụ', age: '18', description: 'Một kẻ bắt nạt trong trường, mục tiêu đầu tiên mà Kang Lim phải đối phó.' },
    { name: 'Ye-ji', role: 'Bạn học', age: '17', description: 'Một cô gái có niềm đam mê với bói toán và tâm linh.' },
    { name: 'Kang-dae', role: 'Gia đình', age: '48', description: 'Cha của Na Kang Lim, một người đàn ông làm việc chăm chỉ để nuôi gia đình.' }
  ]
};
