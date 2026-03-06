
import { FanficWork } from '../types';
import { IdentityType } from '../../types';

export const onePiece: FanficWork = {
  id: 'onepiece',
  title: 'One Piece',
  description: 'Hành trình tìm kiếm kho báu huyền thoại One Piece trên Đại Hải Trình.',
  country: 'Nhật',
  plot: 'Câu chuyện kể về Monkey D. Luffy, một thiếu niên có khả năng co giãn như cao su sau khi ăn trái ác quỷ Gomu Gomu. Luffy cùng băng hải tặc Mũ Rơm du hành qua Grand Line để tìm kiếm kho báu tối thượng "One Piece" và trở thành Vua Hải Tặc tiếp theo.',
  worldSetting: 'Thế giới One Piece bao gồm các đại dương bao la với vô số hòn đảo kỳ lạ. Grand Line là vùng biển nguy hiểm nhất, nơi tập trung các hải tặc mạnh nhất và Chính phủ Thế giới. Trái Ác Quỷ mang lại sức mạnh siêu nhiên nhưng tước đi khả năng bơi lội. Haki là sức mạnh tinh thần tiềm ẩn trong mỗi con người.',
  characters: [
    { name: 'Monkey D. Luffy', role: 'Thuyền trưởng', age: '19', description: 'Thuyền trưởng băng Mũ Rơm, ăn trái Gomu Gomu (Hito Hito no Mi, Model: Nika). Cậu luôn lạc quan, yêu tự do và sẵn sàng hy sinh tất cả vì đồng đội. Ước mơ trở thành Vua Hải Tặc.' },
    { name: 'Roronoa Zoro', role: 'Kiếm sĩ', age: '21', description: 'Kiếm sĩ tam kiếm phái, người muốn trở thành kiếm sĩ mạnh nhất thế giới. Cực kỳ trung thành, nghiêm túc nhưng mắc chứng mù đường kinh niên.' },
    { name: 'Nami', role: 'Hoa tiêu', age: '20', description: 'Hoa tiêu tài ba với khả năng dự báo thời tiết xuất sắc. Cô sở hữu gậy Clima-Tact và có niềm đam mê mãnh liệt với tiền bạc nhưng luôn đặt đồng đội lên hàng đầu.' },
    { name: 'Usopp', role: 'Xạ thủ', age: '19', description: 'Xạ thủ tài ba của băng, nổi tiếng với những lời nói dối nhưng luôn nỗ lực vượt qua nỗi sợ hãi để bảo vệ bạn bè.',
      identities: [{
        name: 'Sogeking (Vua Bắn Tỉa)',
        role: 'Anh hùng từ đảo Bắn Tỉa',
        description: 'Một nhân vật đeo mặt nạ bí ẩn xuất hiện tại Enies Lobby. Dù mọi người đều biết đó là Usopp, nhưng cậu luôn khẳng định mình là một anh hùng đến từ đảo Bắn Tỉa xa xôi để lấy lại sự tự tin khi đối mặt với đồng đội cũ.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Sanji', role: 'Đầu bếp', age: '21', description: 'Đầu bếp tài năng với đôi chân mạnh mẽ (Hắc Cước). Anh tôn thờ phụ nữ, không bao giờ dùng tay chiến đấu và luôn tìm kiếm vùng biển huyền thoại All Blue.',
      identities: [{
        name: 'O-Soba Mask (Stealth Black)',
        role: 'Chiến binh Germa 66',
        description: 'Dưới danh tính O-Soba Mask, Sanji sử dụng bộ đồ Raid Suit của Germa 66 để tàng hình và tăng cường sức mạnh. Dù ghét bỏ gia đình, anh vẫn chấp nhận sử dụng nó để bảo vệ đồng đội trong các tình huống ngặt nghèo tại Wano.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Tony Tony Chopper', role: 'Bác sĩ', age: '17', description: 'Chú tuần lộc ăn trái Hito Hito, bác sĩ của băng với trái tim nhân hậu. Cậu có thể biến hình thành nhiều dạng khác nhau nhờ Rumble Ball.' },
    { name: 'Nico Robin', role: 'Nhà khảo cổ', age: '30', description: 'Người duy nhất có thể đọc được Poneglyph, sở hữu năng lực trái Hana Hana. Cô mang trong mình quá khứ đau thương của đảo Ohara.',
      identities: [{
        name: 'Miss All Sunday',
        role: 'Phó chủ tịch Baroque Works',
        description: 'Danh tính cũ của Robin khi còn làm việc cho Crocodile. Cô là một người phụ nữ bí ẩn, tàn nhẫn và luôn giữ khoảng cách với mọi người để bảo vệ bản thân khỏi sự truy đuổi của Chính phủ Thế giới.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Franky', role: 'Thợ đóng tàu', age: '36', description: 'Người thợ đóng tàu người máy (Cyborg) đầy nhiệt huyết, người chế tạo ra tàu Thousand Sunny. Anh luôn xuất hiện với phong cách "Super!".' },
    { name: 'Brook', role: 'Nhạc công', age: '90+', description: 'Nhạc công bộ xương sống lại nhờ trái Yomi Yomi. Ông là một kiếm sĩ tài hoa với những bản nhạc làm say đắm lòng người.' },
    { name: 'Jinbe', role: 'Lái tàu', age: '46', description: 'Hiệp sĩ biển cả, cựu Thất Vũ Hải, bậc thầy Karate Người Cá. Ông là người điềm tĩnh, giàu kinh nghiệm và cực kỳ trọng danh dự.' },
    { name: 'Boa Hancock', role: 'Nữ hoàng hải tặc', age: '31', description: 'Nữ vương đảo Amazon Lily, sở hữu trái Mero Mero. Cô là người phụ nữ đẹp nhất thế giới và yêu Luffy say đắm.' },
    { name: 'Trafalgar Law', role: 'Thuyền trưởng băng Heart', age: '26', description: 'Bác sĩ tử thần, sở hữu trái Ope Ope với khả năng phẫu thuật thần kỳ trong "Room". Anh là đồng minh chiến lược quan trọng của Luffy.' },
    { name: 'Portgas D. Ace', role: 'Đội trưởng đội 2 băng Râu Trắng', age: '20', description: 'Anh trai của Luffy, sở hữu trái Mera Mera. Một chiến binh mạnh mẽ, trọng tình nghĩa, đã hy sinh để bảo vệ em trai.' },
    { name: 'Sabo', role: 'Tổng tham mưu trưởng Quân Cách mạng', age: '22', description: 'Người anh em kết nghĩa của Luffy, người kế thừa ý chí và năng lực của Ace. Anh là nhân vật quyền lực thứ hai trong Quân Cách mạng.' },
    { name: 'Shanks', role: 'Tứ Hoàng', age: '39', description: 'Thuyền trưởng băng Tóc Đỏ, một trong bốn hải tặc mạnh nhất thế giới. Ông là người đã truyền cảm hứng cho Luffy trở thành hải tặc.' },
    { name: 'Dracule Mihawk', role: 'Kiếm sĩ mạnh nhất thế giới', age: '43', description: 'Cựu Thất Vũ Hải, sở hữu thanh hắc kiếm Yoru. Ông là mục tiêu mà Zoro luôn khao khát vượt qua.' },
    { name: 'Edward Newgate (Râu Trắng)', role: 'Tứ Hoàng (Cựu)', age: '72', description: 'Người đàn ông mạnh nhất thế giới, sở hữu trái Gura Gura. Ông coi tất cả thành viên trong băng như con trai mình.' },
    { name: 'Marshall D. Teach (Râu Đen)', role: 'Tứ Hoàng', age: '40', description: 'Kẻ phản bội băng Râu Trắng, sở hữu hai trái ác quỷ Yami Yami và Gura Gura. Hắn là kẻ mưu mô, tàn nhẫn và đầy tham vọng.' },
    { name: 'Kaido', role: 'Tứ Hoàng (Cựu)', age: '59', description: 'Sinh vật mạnh nhất thế giới, sở hữu trái Uo Uo no Mi, Model: Seiryu. Ông là một kẻ nghiện rượu, khao khát một cái chết huy hoàng.' },
    { name: 'Charlotte Linlin (Big Mom)', role: 'Tứ Hoàng (Cựu)', age: '68', description: 'Nữ hoàng vùng Totto Land, sở hữu trái Soru Soru. Bà là một người mẹ khổng lồ với niềm đam mê đồ ngọt đến điên cuồng.' },
    { name: 'Sakazuki (Akainu)', role: 'Thủy sư Đô đốc', age: '55', description: 'Lãnh đạo tối cao của Hải quân, sở hữu trái Magu Magu. Ông tin vào "Chính nghĩa tuyệt đối" và sẵn sàng tiêu diệt mọi mầm mống hải tặc.' },
    { name: 'Borsalino (Kizaru)', role: 'Đô đốc', age: '58', description: 'Đô đốc Hải quân sở hữu trái Pika Pika. Ông có phong thái ung dung, chậm chạp nhưng sở hữu tốc độ ánh sáng đáng sợ.' },
    { name: 'Issho (Fujitora)', role: 'Đô đốc', age: '54', description: 'Đô đốc mù sở hữu trái Zushi Zushi với khả năng điều khiển trọng lực. Ông là người chính trực, luôn đặt sự an nguy của người dân lên hàng đầu.' },
    { name: 'Monkey D. Garp', role: 'Trung tướng', age: '78', description: 'Anh hùng Hải quân, ông nội của Luffy. Dù là Hải quân nhưng ông luôn yêu thương con cháu và sở hữu sức mạnh thể chất phi thường.' },
    { name: 'Kuzan (Aokiji)', role: 'Cựu Đô đốc', age: '49', description: 'Sở hữu trái Hie Hie, ông rời Hải quân sau khi thua Akainu và hiện đang có mối liên kết bí ẩn với băng Râu Đen.' },
    { name: 'Silvers Rayleigh', role: 'Cựu thuyền phó băng Roger', age: '78', description: 'Vua Bóng Đêm, cánh tay phải của Vua Hải Tặc. Ông là người đã dạy Luffy cách sử dụng Haki trong 2 năm luyện tập.' },
    { name: 'Donquixote Doflamingo', role: 'Cựu Thất Vũ Hải', age: '41', description: 'Thiên Dạ Xoa, sở hữu trái Ito Ito. Hắn là một kẻ điên rồ, tàn nhẫn, từng thống trị vương quốc Dressrosa bằng sự sợ hãi.',
      identities: [{
        name: 'Joker',
        role: 'Trùm môi giới thế giới ngầm',
        description: 'Dưới bí danh Joker, Doflamingo điều hành mạng lưới buôn bán vũ khí và trái ác quỷ nhân tạo SMILE, là mắt xích quan trọng nhất trong thế giới ngầm kết nối với các Tứ Hoàng.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Crocodile', role: 'Cựu Thất Vũ Hải', age: '46', description: 'Sở hữu trái Suna Suna, cựu lãnh đạo tổ chức Baroque Works. Sau khi vượt ngục Impel Down, hắn đã trở lại thế giới ngầm đầy mạnh mẽ.',
      identities: [{
        name: 'Mr. 0',
        role: 'Chủ tịch Baroque Works',
        description: 'Danh tính bí mật khi Crocodile âm mưu lật đổ vương quốc Alabasta. Hắn điều hành tổ chức sát thủ Baroque Works từ trong bóng tối mà không để bất kỳ cấp dưới nào biết mặt.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Eustass Kid', role: 'Thuyền trưởng băng Kid', age: '23', description: 'Một siêu tân tinh hung hãn, sở hữu trái Jiki Jiki. Anh luôn khao khát lật đổ các Tứ Hoàng để khẳng định sức mạnh của mình.' },
    { name: 'Yamato', role: 'Đồng minh', age: '28', description: 'Con gái của Kaido nhưng luôn tự nhận mình là Kozuki Oden. Cô sở hữu trái Inu Inu no Mi, Model: Okuchi no Makami và là đồng minh đắc lực của Luffy.' },
    { name: 'Kozuki Oden', role: 'Cựu lãnh chúa Wano', age: '39 (khi hy sinh)', description: 'Một samurai huyền thoại, người đã từng du hành cùng cả Râu Trắng và Roger. Ông là biểu tượng của tinh thần tự do và lòng dũng cảm của Wano.' },
    { name: 'Gol D. Roger', role: 'Vua Hải Tặc (Cựu)', age: '53 (khi hy sinh)', description: 'Người đàn ông duy nhất chinh phục được Đại Hải Trình và tìm thấy One Piece. Ông đã mở ra "Kỷ nguyên Hải tặc" bằng những lời trăn trối cuối cùng.' },
    { name: 'Monkey D. Dragon', role: 'Lãnh đạo Quân Cách mạng', age: '55', description: 'Cha của Luffy, người đàn ông bị truy nã gắt gao nhất thế giới. Ông khao khát lật đổ Chính phủ Thế giới để mang lại tự do thực sự.' },
    { name: 'Nefeltari Vivi', role: 'Công chúa Alabasta', age: '18', description: 'Thành viên danh dự của băng Mũ Rơm, một công chúa dũng cảm luôn đặt sự an nguy của thần dân lên hàng đầu.',
      identities: [{
        name: 'Miss Wednesday',
        role: 'Đặc vụ Baroque Works',
        description: 'Vivi đã thâm nhập vào tổ chức Baroque Works dưới mật danh Miss Wednesday để điều tra kẻ đứng sau âm mưu phá hoại đất nước mình.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Charlotte Katakuri', role: 'Tư lệnh ngọt băng Big Mom', age: '48', description: 'Con trai mạnh nhất của Big Mom, sở hữu Haki quan sát có thể nhìn thấy tương lai và trái Mochi Mochi thức tỉnh.' },
    { name: 'King', role: 'Tam Tai băng Bách Thú', age: '47', description: 'Hỏa Tai, tộc nhân Lunarian cuối cùng với khả năng điều khiển lửa và sức phòng ngự tuyệt đối.' },
    { name: 'Queen', role: 'Tam Tai băng Bách Thú', age: '56', description: 'Dịch Tai, một nhà khoa học điên rồ với cơ thể người máy và trái ác quỷ Brachiosaurus.' },
    { name: 'Rob Lucci', role: 'Sát thủ CP0', age: '30', description: 'Cựu thành viên CP9, một sát thủ máu lạnh với trái ác quỷ Báo Đốm và kỹ năng Lục Thức thượng thừa.',
      identities: [{
        name: 'Thợ đóng tàu Galley-La',
        role: 'Nằm vùng',
        description: 'Lucci đã thâm nhập vào xưởng đóng tàu Galley-La tại Water 7 suốt 5 năm để tìm kiếm bản thiết kế vũ khí cổ đại Pluton. Hắn đóng vai một thợ đóng tàu tài năng, ít nói và thường xuyên giao tiếp thông qua chú chim bồ câu Hattori.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Enel', role: 'Chúa tể Skypiea (Cựu)', age: 'Unknown', description: 'Sở hữu trái Goro Goro với sức mạnh của sấm sét. Hắn coi mình là một vị thần tối cao cai trị bầu trời.' },
    { name: 'Donquixote Rosinante (Corazon)', role: 'Đồng minh / Hải quân nằm vùng', age: '26 (khi hy sinh)', description: 'Em trai của Doflamingo, người đã hy sinh mạng sống để cứu Law và dạy anh về tình yêu thương.' },
    { name: 'Vinsmoke Reiju', role: 'Chị gái Sanji', age: '24', description: 'Độc Hồng của Germa 66, người duy nhất trong gia đình Vinsmoke còn giữ được cảm xúc và luôn âm thầm giúp đỡ Sanji.' },
    { name: 'Marco', role: 'Cựu đội trưởng đội 1 băng Râu Trắng', age: '45', description: 'Phượng Hoàng Marco, sở hữu trái ác quỷ hệ Zoan thần thoại với khả năng hồi phục phi thường.' },
    { name: 'Benn Beckman', role: 'Thuyền phó băng Tóc Đỏ', age: '50', description: 'Cánh tay phải của Shanks, một người đàn ông cực kỳ thông minh và sở hữu sức mạnh chiến đấu đáng gờm.' },
    { name: 'Jewelry Bonney', role: 'Thuyền trưởng băng Bonney', age: '12 (ngoại hình thay đổi)', description: 'Một siêu tân tinh với khả năng điều khiển tuổi tác, con gái của Kuma và mang trong mình những bí mật quan trọng.' },
    { name: 'Bartholomew Kuma', role: 'Cựu Thất Vũ Hải / Quân Cách mạng', age: '47', description: 'Bạo chúa Kuma, người đã chấp nhận trở thành vũ khí sinh học để bảo vệ con gái và lý tưởng của mình.' },
    { 
      name: 'Klahadore', 
      role: 'Quản gia', 
      age: '35', 
      description: 'Quản gia tận tụy của tiểu thư Kaya tại làng Syrup. Ông luôn xuất hiện với vẻ ngoài lịch thiệp, đeo kính và cực kỳ nghiêm túc trong công việc chăm sóc Kaya.',
      identities: [{
        name: 'Kuro "Trăm Kế"',
        role: 'Thuyền trưởng hải tặc',
        description: 'Thuyền trưởng băng hải tặc Mèo Đen, một kẻ tàn nhẫn và mưu mô bậc nhất. Hắn đã giả chết để sống ẩn dật suốt 3 năm dưới lốt quản gia nhằm chiếm đoạt toàn bộ tài sản của Kaya sau khi sát hại cô.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    }
  ]
};
