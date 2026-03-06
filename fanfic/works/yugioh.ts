import { FanficWork } from '../types';
import { IdentityType } from '../../types';

export const yugioh: FanficWork = {
  id: 'yugioh',
  title: 'Vua trò chơi Yu-Gi-Oh!',
  description: 'Yugi Mutou, một thiếu niên nhút nhát, giải mã được Trò chơi Ngàn năm và đánh thức linh hồn của một Pharaoh cổ đại, bắt đầu hành trình chinh phục các trò chơi bài ma thuật.',
  country: 'Nhật',
  plot: 'Yugi Mutou giải mã được Trò chơi Ngàn năm và đánh thức linh hồn của một Pharaoh cổ đại (Yami Yugi). Cùng với những người bạn, Yugi tham gia vào các giải đấu bài ma thuật (Duel Monsters) để bảo vệ thế giới khỏi những thế lực tà ác muốn chiếm đoạt sức mạnh của các bảo vật ngàn năm.',
  worldSetting: 'Thế giới hiện đại tại Nhật Bản, nơi trò chơi bài ma thuật Duel Monsters trở thành một hiện tượng toàn cầu và có ảnh hưởng sâu sắc đến vận mệnh của nhân loại.',
  characters: [
    { 
      name: 'Yugi Mutou', 
      role: 'Nhân vật chính', 
      age: '16', 
      description: 'Cậu bé nhút nhát nhưng có trái tim nhân hậu, người đã giải mã thành công Trò chơi Ngàn năm. Yugi luôn tin tưởng vào "Sức mạnh của tình bạn" và sự công bằng trong mọi trò chơi.',
      identities: [{
        name: 'Yami Yugi (Atem)',
        role: 'Linh hồn Pharaoh cổ đại',
        description: 'Linh hồn của một vị vua Ai Cập không tên trú ngụ bên trong Trò chơi Ngàn năm. Khi Yugi gặp nguy hiểm hoặc tham gia các trận đấu bài quan trọng, linh hồn này sẽ xuất hiện, mang theo sự tự tin, quyết đoán và kỹ năng chơi bài bậc thầy.',
        type: IdentityType.FANFIC,
        isRevealed: false
      }]
    },
    { name: 'Yami Yugi (Atem)', role: 'Nhân vật chính / Pharaoh', age: '3000+', description: 'Linh hồn của Pharaoh cổ đại trú ngụ trong Trò chơi Ngàn năm, một bậc thầy về chiến thuật bài ma thuật.' },
    { name: 'Seto Kaiba', role: 'Đối thủ / Chủ tịch tập đoàn', age: '16', description: 'Chủ tịch tập đoàn KaibaCorp, đối thủ lớn nhất của Yugi. Anh sở hữu ba lá bài Rồng Trắng Mắt Xanh huyền thoại.' },
    { name: 'Joey Wheeler (Jonouchi)', role: 'Bạn đồng hành / Bài thủ', age: '16', description: 'Bạn thân nhất của Yugi, một bài thủ đầy nhiệt huyết và may mắn với lá bài Rồng Đen Mắt Đỏ.' },
    { name: 'Tea Gardner (Anzu Mazaki)', role: 'Nữ chính / Bạn bè', age: '16', description: 'Bạn thanh mai trúc mã của Yugi, luôn cổ vũ và là chỗ dựa tinh thần cho cả nhóm.' },
    { name: 'Tristan Taylor (Hiroto Honda)', role: 'Bạn bè', age: '16', description: 'Thành viên trong nhóm bạn của Yugi, người luôn sẵn sàng dùng sức mạnh thể chất để bảo vệ bạn bè.' },
    { name: 'Solomon Mutou (Sugoroku)', role: 'Ông nội Yugi', age: '72', description: 'Chủ cửa hàng trò chơi và là người đã dạy Yugi cách chơi bài ma thuật.' },
    { name: 'Maximillion Pegasus', role: 'Phản diện / Người sáng tạo', age: '24', description: 'Người sáng tạo ra trò chơi Duel Monsters và sở hữu Con mắt Ngàn năm.' },
    { name: 'Mai Valentine (Mai Kujaku)', role: 'Đối thủ / Đồng minh', age: '24', description: 'Nữ bài thủ xinh đẹp với bộ bài Harpie Lady, ban đầu là đối thủ nhưng sau đó trở thành bạn của nhóm Yugi.' },
    { 
      name: 'Bakura Ryou', 
      role: 'Bạn bè / Vật chủ', 
      age: '16', 
      description: 'Cậu bé hiền lành, yêu thích các trò chơi nhập vai và là vật chủ của Vòng tròn Ngàn năm. Cậu thường xuyên bị linh hồn tà ác bên trong chiếm hữu mà không hề hay biết.',
      identities: [{
        name: 'Yami Bakura',
        role: 'Linh hồn tà ác cổ đại',
        description: 'Một thực thể tà ác trú ngụ trong Vòng tròn Ngàn năm, kẻ luôn âm mưu thu thập đủ 7 bảo vật ngàn năm để hồi sinh tà thần Zorc Necrophades.',
        type: IdentityType.FANFIC,
        isRevealed: false
      }]
    },
    { name: 'Yami Bakura', role: 'Phản diện / Linh hồn tà ác', age: '3000+', description: 'Linh hồn tà ác trú ngụ trong Vòng tròn Ngàn năm, kẻ muốn thu thập tất cả các bảo vật ngàn năm.' },
    { 
      name: 'Marik Ishtar', 
      role: 'Phản diện / Người canh giữ mộ', 
      age: '16', 
      description: 'Lãnh đạo của tổ chức Ghouls, người sở hữu Gậy Ngàn năm. Anh mang trong mình nỗi hận thù sâu sắc với Pharaoh vì những hủ tục khắc nghiệt của gia tộc canh giữ mộ.',
      identities: [{
        name: 'Yami Marik',
        role: 'Nhân cách tà ác',
        description: 'Một nhân cách tàn bạo và điên rồ được sinh ra từ nỗi đau tột cùng của Marik trong nghi lễ khắc biểu tượng lên lưng. Hắn khao khát sự hủy diệt và thích thú với việc hành hạ đối thủ trong các trận đấu bóng tối.',
        type: IdentityType.FANFIC,
        isRevealed: false
      }]
    },

    { name: 'Ishizu Ishtar', role: 'Đồng minh / Chị Marik', age: '20', description: 'Người canh giữ mộ sở hữu Vòng cổ Ngàn năm với khả năng nhìn thấy tương lai.' },
    { name: 'Odion (Rishid)', role: 'Đồng minh / Anh nuôi Marik', age: '25', description: 'Người hầu cận trung thành nhất của Marik, một bài thủ mạnh mẽ với bộ bài bẫy.' },
    { name: 'Shadi', role: 'Bí ẩn / Người canh giữ', age: 'Unknown', description: 'Người canh giữ các bảo vật ngàn năm, thường xuất hiện để thử thách các nhân vật.' },
    { name: 'Mokuba Kaiba', role: 'Em trai Kaiba', age: '11', description: 'Em trai yêu quý của Seto Kaiba, người luôn hỗ trợ anh trong việc quản lý tập đoàn.' },
    { name: 'Serenity Wheeler (Shizuka)', role: 'Em gái Joey', age: '14', description: 'Em gái của Joey, người đã trải qua ca phẫu thuật mắt thành công nhờ sự giúp đỡ của Yugi.' },
    { name: 'Duke Devlin (Ryuji Otogi)', role: 'Đối thủ / Đồng minh', age: '16', description: 'Người sáng tạo ra trò chơi Dungeon Dice Monsters, ban đầu thách thức Yugi nhưng sau đó trở thành bạn.' },
    { name: 'Rex Raptor (Ryuzaki)', role: 'Đối thủ', age: '16', description: 'Bài thủ chuyên về hệ khủng long, thường xuyên thất bại trước Joey.' },
    { name: 'Weevil Underwood (Haga)', role: 'Đối thủ', age: '16', description: 'Bài thủ chuyên về hệ côn trùng, nổi tiếng với những chiêu trò gian lận.' },
    { name: 'Mako Tsunami (Ryota Kajiki)', role: 'Đối thủ / Đồng minh', age: '19', description: 'Bài thủ chuyên về hệ nước, người luôn tôn thờ biển cả và cha mình.' },
    { name: 'Bandit Keith', role: 'Phản diện / Cựu vô địch', age: '26', description: 'Cựu vô địch bài ma thuật của Mỹ, một kẻ kiêu ngạo và tàn nhẫn.' },
    { name: 'Bonz (Ghost Koryu)', role: 'Đối thủ', age: '15', description: 'Bài thủ chuyên về hệ thây ma, tay sai của Bandit Keith trong giải đấu Đảo Quyết Đấu.' },
    { name: 'PaniK', role: 'Phản diện', age: 'Unknown', description: 'Một trong những kẻ ám sát của Pegasus, chuyên sử dụng bóng tối để đe dọa đối thủ.' },
    { name: 'Paradox', role: 'Phản diện', age: 'Unknown', description: 'Kẻ thù đến từ tương lai muốn phá hủy trò chơi bài ma thuật để cứu thế giới của mình.' },
    { name: 'Dartz', role: 'Phản diện chính / Vua Atlantis', age: '10000+', description: 'Lãnh đạo của tổ chức Doma, kẻ muốn hồi sinh thần Orichalcos để thanh tẩy thế giới.' },
    { name: 'Rafael', role: 'Phản diện / Đồng minh', age: '25', description: 'Thành viên mạnh nhất của nhóm Ba Ngự Lâm Quân của Doma, người có mối liên kết sâu sắc với các lá bài của mình.' },
    { name: 'Valon', role: 'Phản diện', age: '19', description: 'Thành viên của nhóm Ba Ngự Lâm Quân, người sử dụng bộ bài Giáp Trụ độc đáo.' },
    { name: 'Alister', role: 'Phản diện', age: '22', description: 'Thành viên của nhóm Ba Ngự Lâm Quân, người mang trong mình nỗi hận thù với tập đoàn Kaiba.' }
  ]
};
