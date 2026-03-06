import { FanficWork } from '../types';
import { IdentityType } from '../../types';

export const pokemon: FanficWork = {
  id: 'pokemon',
  title: 'Thế giới Pokemon',
  description: 'Ash Ketchum (Satoshi), một thiếu niên khao khát trở thành Bậc thầy Pokemon, cùng chú Pokemon Pikachu trung thành du hành qua các vùng đất để thu phục và huấn luyện Pokemon.',
  country: 'Nhật',
  plot: 'Satoshi bắt đầu cuộc hành trình từ thị trấn Pallet với mục tiêu chinh phục các giải đấu Pokemon League. Cùng với những người bạn đồng hành và các Pokemon mới thu phục, cậu phải đối mặt với những thử thách từ các nhà huấn luyện khác, các băng nhóm tội phạm như Team Rocket và những bí ẩn về các Pokemon huyền thoại.',
  worldSetting: 'Thế giới nơi con người và các sinh vật gọi là Pokemon cùng chung sống. Các vùng đất như Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar và Paldea đều có những loài Pokemon đặc trưng và các giải đấu hấp dẫn.',
  characters: [
    { name: 'Ash Ketchum (Satoshi)', role: 'Nhân vật chính', age: '10', description: 'Nhà huấn luyện Pokemon đầy nhiệt huyết với mục tiêu trở thành Bậc thầy Pokemon. Cậu luôn tin tưởng vào tình bạn giữa con người và Pokemon.' },
    { name: 'Pikachu', role: 'Pokemon chính / Bạn thân', age: 'N/A', description: 'Pokemon hệ điện trung thành của Satoshi, luôn đi cùng cậu thay vì ở trong Poke Ball. Pikachu sở hữu sức mạnh điện năng phi thường.' },
    { name: 'Misty (Kasumi)', role: 'Nữ chính / Bạn đồng hành', age: '10', description: 'Chuyên gia Pokemon hệ nước, người đã cùng Satoshi du hành qua vùng Kanto và Johto. Cô có tính cách mạnh mẽ và sợ sâu bọ.' },
    { name: 'Brock (Takeshi)', role: 'Bạn đồng hành / Đầu bếp', age: '15', description: 'Chuyên gia Pokemon hệ đá, người luôn chăm sóc cho cả đội bằng những bữa ăn ngon. Anh khao khát trở thành một bác sĩ Pokemon giỏi.' },
    { name: 'Gary Oak (Shigeru)', role: 'Đối thủ / Thám tử', age: '10', description: 'Cháu trai của giáo sư Oak, đối thủ lớn nhất của Satoshi trong giai đoạn đầu. Sau này anh trở thành một nhà nghiên cứu Pokemon tài năng.' },
    { name: 'Professor Oak (Ookido)', role: 'Giáo sư / Nhà nghiên cứu', age: '50', description: 'Chuyên gia hàng đầu về Pokemon tại vùng Kanto, người đã tặng Satoshi chú Pikachu đầu tiên.' },
    { name: 'Delia Ketchum (Hanako)', role: 'Mẹ Satoshi', age: '35', description: 'Người mẹ dịu dàng luôn ủng hộ Satoshi trong mọi chuyến hành trình và chăm sóc nhà cửa tại thị trấn Pallet.' },
    { 
      name: 'Giovanni', 
      role: 'Lãnh đạo Team Rocket', 
      age: '45', 
      description: 'Thủ lĩnh tối cao của tổ chức tội phạm Team Rocket, một người đàn ông quyền lực, tàn nhẫn và luôn khao khát chiếm đoạt những Pokemon mạnh nhất thế giới.',
      identities: [{
        name: 'Thủ lĩnh nhà thi đấu Viridian',
        role: 'Gym Leader',
        description: 'Giovanni che giấu thân phận thật của mình dưới danh nghĩa là thủ lĩnh nhà thi đấu cuối cùng của vùng Kanto. Ông được biết đến là một nhà huấn luyện hệ Đất cực kỳ mạnh mẽ và nghiêm khắc.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },
    { 
      name: 'Jessie', 
      role: 'Thành viên Team Rocket', 
      age: '25', 
      description: 'Thành viên nữ của băng Team Rocket, luôn âm mưu bắt trộm Pikachu. Cô có tính cách nóng nảy, kiêu ngạo nhưng đôi khi cũng bộc lộ khía cạnh tình cảm.',
      identities: [{
        name: 'Nhà điều phối Pokemon / Chuyên gia cải trang',
        role: 'Cải trang',
        description: 'Jessie thường xuyên cải trang thành nhiều nhân vật khác nhau (như Jessilina) để tham gia các cuộc thi điều phối Pokemon hoặc tiếp cận Satoshi mà không bị phát hiện.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },
    { 
      name: 'James', 
      role: 'Thành viên Team Rocket', 
      age: '25', 
      description: 'Thành viên nam của băng Team Rocket, xuất thân từ gia đình giàu có. Anh là người hiền lành nhất trong nhóm và có niềm đam mê với các bộ sưu tập nắp chai.',
      identities: [{
        name: 'Chuyên gia cải trang',
        role: 'Cải trang',
        description: 'Giống như Jessie, James là một bậc thầy cải trang, có thể hóa thân thành bất kỳ ai từ một cụ già đến một cô gái xinh đẹp để thực hiện các kế hoạch của Team Rocket.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },

    { name: 'Tracey Sketchit (Kenji)', role: 'Bạn đồng hành / Họa sĩ', age: '15', description: 'Người quan sát Pokemon tài ba, đã cùng Satoshi du hành qua quần đảo Orange.' },
    { name: 'May (Haruka)', role: 'Nữ chính / Bạn đồng hành', age: '10', description: 'Nhà điều phối Pokemon (Pokemon Coordinator) xinh đẹp, đã cùng Satoshi du hành qua vùng Hoenn.' },
    { name: 'Max (Masato)', role: 'Bạn đồng hành / Em trai May', age: '7', description: 'Cậu bé thông minh với kiến thức sâu rộng về Pokemon, dù chưa đủ tuổi để sở hữu Pokemon riêng.' },
    { name: 'Dawn (Hikari)', role: 'Nữ chính / Bạn đồng hành', age: '10', description: 'Nhà điều phối Pokemon đầy tự tin, đã cùng Satoshi du hành qua vùng Sinnoh.' },
    { name: 'Iris', role: 'Nữ chính / Bạn đồng hành', age: '10', description: 'Chuyên gia Pokemon hệ rồng, người khao khát trở thành Bậc thầy Rồng (Dragon Master).' },
    { name: 'Cilan (Dento)', role: 'Bạn đồng hành / Chuyên gia nếm trải', age: '15', description: 'Chuyên gia nếm trải Pokemon (Pokemon Connoisseur), người luôn đánh giá mối quan hệ giữa nhà huấn luyện và Pokemon.' },
    { name: 'Serena', role: 'Nữ chính / Bạn đồng hành', age: '10', description: 'Nhà trình diễn Pokemon (Pokemon Performer) tài năng, người có tình cảm đặc biệt với Satoshi từ thuở nhỏ.' },
    { name: 'Clemont (Citron)', role: 'Bạn đồng hành / Nhà phát minh', age: '15', description: 'Thủ lĩnh nhà thi đấu hệ điện tại thành phố Lumiose, một nhà phát minh thiên tài nhưng các phát minh hay bị nổ tung.' },
    { name: 'Bonnie (Eureka)', role: 'Bạn đồng hành / Em gái Clemont', age: '7', description: 'Cô bé năng động luôn tìm kiếm một người vợ cho anh trai mình và rất yêu quý các Pokemon.' },
    { name: 'Lana (Suiren)', role: 'Bạn đồng hành / Học sinh', age: '10', description: 'Học sinh tại trường Pokemon vùng Alola, chuyên gia Pokemon hệ nước với niềm đam mê câu cá.' },
    { name: 'Kiawe (Kaki)', role: 'Bạn đồng hành / Học sinh', age: '15', description: 'Học sinh tại trường Pokemon vùng Alola, chuyên gia Pokemon hệ lửa với phong cách chiến đấu rực cháy.' },
    { name: 'Lillie', role: 'Nữ chính / Bạn đồng hành', age: '10', description: 'Cô gái nhút nhát ban đầu rất sợ Pokemon nhưng sau đó đã vượt qua nỗi sợ để trở thành một nhà huấn luyện giỏi.' },
    { name: 'Mallow (Mao)', role: 'Bạn đồng hành / Học sinh', age: '10', description: 'Học sinh tại trường Pokemon vùng Alola, chuyên gia Pokemon hệ cỏ và là một đầu bếp tài năng.' },
    { name: 'Sophocles (Mamane)', role: 'Bạn đồng hành / Học sinh', age: '10', description: 'Học sinh tại trường Pokemon vùng Alola, chuyên gia Pokemon hệ điện với niềm đam mê công nghệ.' },
    { name: 'Goh', role: 'Nhân vật chính / Bạn Satoshi', age: '10', description: 'Nhà nghiên cứu Pokemon với mục tiêu thu phục tất cả các loài Pokemon, đặc biệt là Pokemon huyền thoại Mew.' },
    { name: 'Chloe (Koharu)', role: 'Bạn Satoshi / Bạn Goh', age: '10', description: 'Con gái của giáo sư Cerise, người ban đầu không quan tâm đến Pokemon nhưng sau đó đã gắn bó với chú Eevee đặc biệt.' },
    { name: 'Leon (Dande)', role: 'Đối thủ / Nhà vô địch', age: '25', description: 'Nhà vô địch thế giới (Monarch) đến từ vùng Galar, người sở hữu chú Charizard bất bại.' },
    { name: 'Cynthia (Shirona)', role: 'Đối thủ / Nhà vô địch', age: '28', description: 'Nhà vô địch vùng Sinnoh, một nhà khảo cổ học tài năng và là một trong những nhà huấn luyện mạnh nhất thế giới.' },
    { name: 'Steven Stone (Daigo)', role: 'Đối thủ / Nhà vô địch', age: '25', description: 'Nhà vô địch vùng Hoenn, người có niềm đam mê mãnh liệt với các loại đá quý và Pokemon hệ thép.' }
  ]
};
