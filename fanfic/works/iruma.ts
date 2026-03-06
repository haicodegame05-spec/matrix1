
import { FanficWork } from '../types';
import { IdentityType } from '../../types';

export const iruma: FanficWork = {
  id: 'iruma',
  title: 'Vào Ma Giới Rồi Đấy Iruma',
  description: 'Câu chuyện về một cậu bé loài người bị cha mẹ bán cho ác ma và bắt đầu cuộc sống tại trường học ác ma.',
  country: 'Nhật',
  plot: 'Suzuki Iruma là một cậu bé 14 tuổi hiền lành, bị cha mẹ ích kỷ bán cho ác ma Sullivan. Tuy nhiên, Sullivan lại muốn nhận Iruma làm cháu trai và đưa cậu đến Ma giới. Iruma phải nhập học tại trường ác ma Babyls, nơi cậu phải che giấu thân phận con người của mình trong khi kết bạn và vượt qua những thử thách oái oăm.',
  worldSetting: 'Ma giới là nơi sinh sống của các ác ma, được chia thành nhiều cấp bậc (Rank) từ 1 (Aleph) đến 10 (Yodh). Trường Babyls là nơi đào tạo các ác ma trẻ tuổi. Thế giới này vận hành dựa trên ma thuật và các khả năng đặc định của từng huyết thống ác ma.',
  characters: [
    { name: 'Suzuki Iruma', role: 'Nhân vật chính', age: '14', description: 'Một cậu bé loài người cực kỳ hiền lành, có khả năng né tránh tuyệt đỉnh do quá khứ vất vả. Cậu sở hữu Nhẫn Ác Thực và đang dần trở thành một ác ma thực thụ trong mắt mọi người.',
      identities: [{
        name: 'Irumi',
        role: 'Akudol (Thần tượng ác ma)',
        description: 'Danh tính giả gái của Iruma khi giúp đỡ Keroli trong các buổi biểu diễn Akudol. Với vẻ ngoài dễ thương và tính cách nhút nhát, Irumi đã trở thành một hiện tượng cực kỳ nổi tiếng trong giới Akudol.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }, {
        name: 'Iruma Ác chu kỳ',
        role: 'Ác ma vương giả',
        description: 'Trạng thái khi Iruma bị Arikured tác động để bước vào "Ác chu kỳ" giả. Trong trạng thái này, Iruma trở nên tự tin, quyết đoán và có phong thái của một vị vua, dẫn dắt lớp Cá biệt chiếm lĩnh Công viên Hoàng gia.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Alice Asmodeus', role: 'Bạn thân / Học sinh lớp Cá biệt', age: '14', description: 'Thiên tài sử dụng ma thuật lửa, cực kỳ trung thành và tôn sùng Iruma sau khi thua trận đấu tay đôi đầu tiên. Anh luôn nỗ lực để trở thành cánh tay phải đắc lực của Iruma.' },
    { name: 'Valac Clara', role: 'Bạn thân / Học sinh lớp Cá biệt', age: '14', description: 'Một cô gái ác ma năng động, kỳ quặc và ham chơi. Cô sở hữu khả năng huyết thống "Summon" cho phép lấy ra bất cứ thứ gì cô từng thấy từ túi áo của mình.' },
    { name: 'Azazel Ameri', role: 'Hội trưởng hội học sinh', age: '15', description: 'Hội trưởng nghiêm khắc của Babyls, sở hữu sức mạnh thể chất phi thường. Cô là người đầu tiên nghi ngờ Iruma là con người nhưng lại trở thành bạn thân (và có tình cảm) với cậu qua những cuốn truyện tranh shoujo.' },
    { name: 'Naberius Kalego', role: 'Giáo viên chủ nhiệm', age: '30+', description: 'Giáo viên nghiêm khắc, khó tính và ghét sự hỗn loạn. Do một sai sót trong khế ước triệu hồi, ông trở thành linh thú triệu hồi của Iruma dưới hình dạng một chú chim nhỏ dễ thương.' },
    { name: 'Sullivan', role: 'Hiệu trưởng / Ông nội', age: 'Hàng trăm tuổi', description: 'Một trong ba đại ác ma quyền lực nhất Ma giới và là hiệu trưởng trường Babyls. Ông cực kỳ chiều chuộng Iruma và luôn mong muốn cậu trở thành Ma Vương tiếp theo.' },
    { name: 'Opera', role: 'Quản gia / Trợ lý', age: 'Unknown', description: 'Trợ lý thân cận của Sullivan với tính cách điềm tĩnh, lạnh lùng nhưng cực kỳ quyền năng. Opera là người chăm sóc và huấn luyện Iruma trong cuộc sống hàng ngày tại Ma giới.' },
    { name: 'Sabnock Sabro', role: 'Học sinh lớp Cá biệt', age: '14', description: 'Một ác ma to lớn với khát vọng trở thành Ma Vương. Anh coi Iruma là đối thủ định mệnh của mình và sở hữu khả năng huyết thống tạo ra vũ khí từ kim loại.' },
    { name: 'Shax Lied', role: 'Học sinh lớp Cá biệt', age: '14', description: 'Chuyên gia về trò chơi điện tử và cá cược. Cậu sở hữu khả năng huyết thống "Sense Stealer" cho phép cướp đi các giác quan của đối thủ.' },
    { name: 'Crocell Keroli', role: 'Học sinh lớp Cá biệt / Akudol', age: '14', description: 'Một cô gái nhút nhát sở hữu ma thuật băng. Cô có danh tính bí mật là Akudol nổi tiếng "Kuromu". Cô luôn cố gắng cân bằng giữa việc học và sự nghiệp thần tượng.',
      identities: [{
        name: 'Kuromu',
        role: 'Thần tượng ác ma số 1',
        description: 'Danh tính Akudol của Keroli. Khi là Kuromu, cô trở nên tự tin, tỏa sáng và có khả năng mê hoặc hàng triệu người hâm mộ bằng giọng hát và vẻ đẹp của mình.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Andro M. Jazz', role: 'Học sinh lớp Cá biệt', age: '14', description: 'Bậc thầy móc túi với đôi tay cực kỳ nhanh nhẹn. Cậu sở hữu khả năng huyết thống "Pit" cho phép nhìn thấu đồ vật trên người đối thủ.' },
    { name: 'Purson Soi', role: 'Học sinh lớp Cá biệt', age: '14', description: 'Thành viên bí ẩn nhất lớp Cá biệt với khả năng xóa nhòa sự hiện diện của bản thân. Cậu là một thiên tài thổi kèn trumpet.' },
    { name: 'Agares Picero', role: 'Học sinh lớp Cá biệt', age: '14', description: 'Một ác ma luôn buồn ngủ và thích nằm trên đám mây ma thuật của mình. Cậu sở hữu khả năng điều khiển mặt đất cực kỳ mạnh mẽ.' },
    { name: 'Garp Goemon', role: 'Học sinh lớp Cá biệt', age: '14', description: 'Một ác ma có ngoại hình giống võ sĩ đạo, rất nhiệt tình và tốt bụng. Cậu sở hữu khả năng tạo ra các thanh kiếm gió.' },
    { name: 'Allocer Schneider', role: 'Học sinh lớp Cá biệt', age: '14', description: 'Ác ma có ngoại hình giống sư tử nhưng lại là người thông minh nhất lớp với kiến thức sâu rộng về mọi lĩnh vực.' },
    { name: 'Caim Kamui', role: 'Học sinh lớp Cá biệt', age: '14', description: 'Một ác ma có ngoại hình giống cú, cực kỳ am hiểu về ngôn ngữ của muôn loài và... có niềm đam mê mãnh liệt với phái nữ.' },
    { name: 'Elizabetta X', role: 'Học sinh lớp Cá biệt', age: '14', description: 'Một quý cô quyến rũ với khả năng huyết thống "Full Love Gauge" khiến bất kỳ ai cũng phải yêu mến cô.' },
    { name: 'Balam Shichiro', role: 'Giáo viên', age: '30+', description: 'Một giáo viên to lớn, đáng sợ nhưng thực chất lại cực kỳ hiền lành và yêu quý sinh vật. Ông là một trong số ít người biết Iruma là con người.' },
    { name: 'Amy Kirio', role: 'Phản diện', age: '16', description: 'Cựu học sinh trường Babyls, người có khoái cảm khi nhìn thấy sự tuyệt vọng của người khác. Hắn là kẻ thù nguy hiểm luôn nhắm vào Iruma.' },
    { name: 'Baal', role: 'Phản diện / Thập Tam Quan', age: 'Unknown', description: 'Một trong Thập Tam Quan, kẻ đứng sau nhiều âm mưu nhằm phá hủy trật tự hiện tại của Ma giới và đưa nó trở lại thời kỳ hỗn mang.' }
  ]
};
