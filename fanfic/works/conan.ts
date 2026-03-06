import { FanficWork } from '../types';
import { IdentityType } from '../../types';

export const conan: FanficWork = {
  id: 'conan',
  title: 'Thám tử lừng danh Conan',
  description: 'Shinichi Kudo, một thám tử trung học tài ba, bị tổ chức Áo Đen đầu độc và biến thành một đứa trẻ. Anh lấy tên là Conan Edogawa để tiếp tục phá án và tìm cách trở lại hình dáng cũ.',
  country: 'Nhật',
  plot: 'Shinichi Kudo bị tổ chức Áo Đen ép uống thuốc độc APTX 4869, khiến cơ thể anh bị thu nhỏ lại. Dưới danh tính Conan Edogawa, anh sống tại nhà thám tử ngủ gật Kogoro Mouri và âm thầm giúp ông phá án để thu thập thông tin về tổ chức Áo Đen, đồng thời bảo vệ những người xung quanh khỏi sự nguy hiểm của chúng.',
  worldSetting: 'Thế giới hiện đại tại Nhật Bản, nơi các vụ án mạng ly kỳ xảy ra liên tục và cuộc chiến cân não giữa các thám tử với tội phạm.',
  characters: [
    { 
      name: 'Shinichi Kudo', 
      role: 'Nhân vật chính', 
      age: '17', 
      description: 'Thám tử trung học nổi tiếng với khả năng suy luận sắc bén. Anh bị thu nhỏ sau khi bị tổ chức Áo Đen đầu độc.',
      lineage: 'Cậu con trai duy nhất của Gia Đình Kudo (Yusaku & Yukiko)',
      identities: [
        {
          name: 'Conan Edogawa',
          role: 'Học sinh tiểu học / Thám tử nhí',
          description: 'Danh tính giả để che giấu sự tồn tại của bản thân trước tổ chức Áo Đen.',
          isRevealed: true,
          type: IdentityType.FANFIC
        },
        {
          name: 'Thám tử lừng danh miền Đông',
          role: 'Cứu tinh của sở cảnh sát',
          description: 'Thân phận thật sự được cả thế giới biết đến.',
          isRevealed: true,
          type: IdentityType.NORMAL
        }
      ]
    },
    { 
      name: 'Conan Edogawa', 
      role: 'Nhân vật chính', 
      age: '7', 
      description: 'Một cậu bé tiểu học thông minh xuất chúng, thực chất là thám tử trung học Shinichi Kudo bị thu nhỏ. Cậu sở hữu đôi mắt sắc sảo, khả năng quan sát tinh tường và luôn mang theo những phát minh công nghệ cao của tiến sĩ Agasa để đối đầu với tội phạm.',
      lineage: 'Họ hàng xa của tiến sĩ Agasa (Danh tính giả)',
      identities: [{
        name: 'Shinichi Kudo',
        role: 'Thám tử lừng danh',
        description: 'Thám tử trung học nổi tiếng của miền Đông, được mệnh danh là "Cứu tinh của sở cảnh sát Nhật Bản". Sau khi bị tổ chức Áo Đen ép uống thuốc độc APTX 4869, cơ thể anh bị thu nhỏ nhưng trí tuệ vẫn vẹn nguyên, buộc phải sống dưới danh nghĩa Conan để truy tìm tung tích kẻ thù.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },
    { 
      name: 'Ran Mouri', 
      role: 'Nữ chính / Bạn gái', 
      age: '17', 
      description: 'Bạn thanh mai trúc mã của Shinichi, giỏi võ Karate và luôn quan tâm đến Conan.',
      lineage: 'Con gái duy nhất của thám tử Kogoro Mouri và luật sư Eri Kisaki',
      identities: [
        {
          name: 'Nữ hoàng Karate trung học',
          role: 'Võ sĩ',
          description: 'Vô địch giải Karate toàn thành phố.',
          isRevealed: true,
          type: IdentityType.NORMAL
        }
      ]
    },
    { name: 'Kogoro Mouri', role: 'Thám tử / Cha Ran', age: '38', description: 'Thám tử tư nổi tiếng với biệt danh "Thám tử ngủ gật" nhờ sự giúp đỡ ngầm của Conan.' },
    { 
      name: 'Ai Haibara', 
      role: 'Đồng minh / Cựu thành viên Áo Đen', 
      age: '7 (thực tế 18)', 
      description: 'Một cô bé trầm tính, lạnh lùng và mang trong mình nhiều bí mật. Cô luôn cảnh giác với mọi thứ xung quanh và có kiến thức sâu rộng về hóa học, đặc biệt là các loại độc dược.',
      lineage: 'Con gái của Elena và Atsushi Miyano (Nhà khoa học Tổ chức Áo Đen)',
      identities: [{
        name: 'Shiho Miyano (Sherry)',
        role: 'Nhà khoa học thiên tài',
        description: 'Cựu thành viên cấp cao của tổ chức Áo Đen với mật danh Sherry. Cô là người trực tiếp nghiên cứu ra loại thuốc APTX 4869. Sau khi chị gái bị sát hại, cô đã uống chính loại thuốc này để tự sát nhưng lại bị thu nhỏ và trốn thoát khỏi tổ chức.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Hiroshi Agasa', role: 'Đồng minh / Tiến sĩ', age: '52', description: 'Người hàng xóm thân thiết và là người chế tạo ra nhiều thiết bị hỗ trợ cho Conan.' },
    { name: 'Ayumi Yoshida', role: 'Đội thám tử nhí', age: '7', description: 'Một cô bé đáng yêu, thành viên của Đội thám tử nhí lớp 1B.' },
    { name: 'Mitsuhiko Tsuburaya', role: 'Đội thám tử nhí', age: '7', description: 'Cậu bé thông minh và ham học hỏi, thường đưa ra những kiến thức bổ ích cho đội.' },
    { name: 'Genta Kojima', role: 'Đội thám tử nhí', age: '7', description: 'Cậu bé to béo, ham ăn và luôn tự nhận mình là đội trưởng Đội thám tử nhí.' },
    { 
      name: 'Sonoko Suzuki', 
      role: 'Bạn thân Ran', 
      age: '17', 
      description: 'Tiểu thư tập đoàn Suzuki giàu có, thường xuyên đi du lịch cùng Ran và Conan.',
      lineage: 'Nhị tiểu thư của Tập đoàn tài phiệt Suzuki',
      identities: [
        {
          name: 'Nữ thám tử mộng mơ',
          role: 'Thám tử (tự phong)',
          description: 'Thường xuyên bị Conan cho "ngủ gật" để phá án thay cho Kogoro.',
          isRevealed: true,
          type: IdentityType.NORMAL
        }
      ]
    },
    { 
      name: 'Heiji Hattori', 
      role: 'Đối thủ / Đồng minh', 
      age: '17', 
      description: 'Thám tử miền Tây nổi tiếng, bạn thân và là người hiếm hoi biết được danh tính thật của Conan.',
      lineage: 'Con trai của Heizo Hattori (Cảnh sát trưởng Osaka)',
      identities: [
        {
          name: 'Thám tử lừng danh miền Tây',
          role: 'Thám tử',
          description: 'Đối thủ lớn nhất của Shinichi Kudo.',
          isRevealed: true,
          type: IdentityType.NORMAL
        }
      ]
    },
    { name: 'Kazuha Toyama', role: 'Bạn Heiji', age: '17', description: 'Bạn thanh mai trúc mã của Heiji, giỏi Aikido và luôn mang theo bùa hộ mệnh.' },
    { 
      name: 'Kaito Kuroba', 
      role: 'Học sinh trung học', 
      age: '17', 
      description: 'Một nam sinh trung học vui vẻ, yêu thích ảo thuật và luôn bày trò trêu chọc bạn bè. Cậu sở hữu đôi tay khéo léo và trí thông minh tuyệt vời.',
      lineage: 'Con trai của ảo thuật gia huyền thoại Toichi Kuroba',
      identities: [
        {
          name: 'Kaito Kid (Siêu đạo chích 1412)',
          role: 'Siêu trộm ánh trăng',
          description: 'Tên trộm hào hoa chuyên nhắm vào các viên đá quý quý giá. Với khả năng cải trang hoàn hảo, giả giọng bất cứ ai và những màn ảo thuật thoát hiểm ngoạn mục, Kid luôn là nỗi đau đầu của cảnh sát toàn cầu.',
          isRevealed: true,
          type: IdentityType.FANFIC
        },
        {
          name: 'Ảo thuật gia dưới ánh trăng',
          role: 'Ảo thuật gia',
          description: 'Thân phận kế thừa từ người cha quá cố.',
          isRevealed: true,
          type: IdentityType.LEGENDARY
        }
      ]
    },
    { name: 'Gin', role: 'Phản diện / Tổ chức Áo Đen', age: 'Unknown', description: 'Thành viên cấp cao máu lạnh của tổ chức Áo Đen, kẻ đã đầu độc Shinichi.' },
    { name: 'Vodka', role: 'Phản diện / Tổ chức Áo Đen', age: 'Unknown', description: 'Cánh tay phải của Gin, luôn đi theo và hỗ trợ hắn trong các nhiệm vụ.' },
    { 
      name: 'Vermouth', 
      role: 'Nữ diễn viên nổi tiếng', 
      age: 'Unknown', 
      description: 'Một ngôi sao điện ảnh Hollywood lừng danh với vẻ đẹp không tuổi và phong thái quý phái. Cô luôn giữ cho mình một bức màn bí ẩn với câu nói nổi tiếng: "A secret makes a woman woman".',
      identities: [{
        name: 'Sharon Vineyard / Chris Vineyard',
        role: 'Sát thủ cấp cao tổ chức Áo Đen',
        description: 'Thành viên cốt cán của tổ chức Áo Đen, bậc thầy cải trang và thâm nhập. Cô biết rõ danh tính của Conan và Haibara nhưng vì những lý do riêng tư mà luôn giữ kín bí mật này với tổ chức.',
        isRevealed: false,
        type: IdentityType.FANFIC
      }]
    },
    { 
      name: 'Tooru Amuro', 
      role: 'Nhân viên quán Cafe Poirot', 
      age: '29', 
      description: 'Một chàng trai trẻ năng động, giỏi nấu ăn và đang làm việc bán thời gian tại quán cafe dưới văn phòng thám tử Mouri. Anh luôn tỏ ra ngưỡng mộ và muốn học hỏi kỹ năng phá án của Kogoro.',
      identities: [{
        name: 'Bourbon / Rei Furuya',
        role: 'Cảnh sát mật / Đặc vụ nằm vùng',
        description: 'Đặc vụ của Cục An ninh Cảnh sát Quốc gia Nhật Bản (Zero) đang thâm nhập vào tổ chức Áo Đen với mật danh Bourbon. Anh là một chuyên gia thu thập thông tin và có khả năng suy luận không thua kém gì các thám tử hàng đầu.',
        isRevealed: false,
        type: IdentityType.FANFIC
      }]
    },
    { 
      name: 'Subaru Okiya', 
      role: 'Sinh viên cao học', 
      age: '27', 
      description: 'Một sinh viên cao học ngành kỹ thuật đang sống nhờ tại nhà của Shinichi Kudo. Anh luôn đeo kính, mặc áo cao cổ và có phong thái điềm tĩnh, bí ẩn.',
      identities: [{
        name: 'Akai Shuichi',
        role: 'Đặc vụ FBI / Tay súng bắn tỉa',
        description: 'Tay súng bắn tỉa siêu hạng của FBI, được tổ chức Áo Đen mệnh danh là "Silver Bullet". Anh đã giả chết để bảo vệ danh tính và tiếp tục âm thầm điều tra tổ chức dưới lốt Subaru Okiya.',
        isRevealed: false,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Jodie Starling', role: 'Đồng minh / FBI', age: '28', description: 'Nhân viên FBI, từng là giáo viên tiếng Anh tại trường của Ran để điều tra tổ chức Áo Đen.' },
    { name: 'James Black', role: 'Đồng minh / FBI', age: 'Unknown', description: 'Lãnh đạo nhóm FBI tại Nhật Bản, một người điềm tĩnh và giàu kinh nghiệm.' },
    { name: 'Andre Camel', role: 'Đồng minh / FBI', age: '27', description: 'Nhân viên FBI với kỹ năng lái xe điêu luyện và thân hình hộ pháp.' },
    { name: 'Eri Kisaki', role: 'Luật sư / Mẹ Ran', age: '38', description: 'Nữ luật sư xinh đẹp và sắc sảo, hiện đang sống ly thân với Kogoro Mouri.' },
    { name: 'Yusaku Kudo', role: 'Gia đình / Cha Shinichi', age: '38', description: 'Tiểu thuyết gia trinh thám nổi tiếng toàn thế giới, sở hữu trí tuệ vượt trội hơn cả con trai.', lineage: 'Trụ cột gia đình Kudo' },
    { name: 'Yukiko Kudo', role: 'Gia đình / Mẹ Shinichi', age: '37', description: 'Cựu diễn viên nổi tiếng với khả năng cải trang và diễn xuất xuất sắc.', lineage: 'Phu nhân gia đình Kudo' },
    { name: 'Wataru Takagi', role: 'Cảnh sát', age: '26', description: 'Trung sĩ cảnh sát hiền lành, thường xuyên hỗ trợ Conan trong các vụ án.' },
    { name: 'Miwako Sato', role: 'Cảnh sát', age: '28', description: 'Nữ thiếu úy cảnh sát xinh đẹp, giỏi võ và là thần tượng của nhiều đồng nghiệp nam.' },
    { name: 'Juzo Megure', role: 'Cảnh sát / Thanh tra', age: 'Unknown', description: 'Thanh tra cảnh sát luôn đội mũ để che giấu vết sẹo quá khứ, cấp trên của Takagi và Sato.' },
    { name: 'Ninzaburo Shiratori', role: 'Cảnh sát / Thanh tra', age: 'Unknown', description: 'Thanh tra cảnh sát xuất thân từ gia đình giàu có, ban đầu là đối thủ tình trường của Takagi.' },
    { name: 'Kazunobu Chiba', role: 'Cảnh sát', age: '24', description: 'Trung sĩ cảnh sát to béo, bạn thân của Takagi và là một fan cuồng của anime.' },
    { name: 'Yumi Miyamoto', role: 'Cảnh sát giao thông', age: '28', description: 'Nữ cảnh sát giao thông tinh quái, bạn thân của Sato và luôn bày trò trêu chọc đồng nghiệp.' }
  ]
};
