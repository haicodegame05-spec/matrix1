import { FanficWork } from '../types';
import { IdentityType } from '../../types';

export const eminenceInShadow: FanficWork = {
  id: 'eminence-in-shadow',
  title: 'Chúa Tể Bóng Tối (The Eminence in Shadow)',
  description: 'Cid Kagenou khao khát trở thành một "Chúa tể bóng tối" - kẻ đứng sau giật dây mọi chuyện, và vô tình biến những lời nói dối của mình thành sự thật.',
  country: 'Nhật',
  plot: 'Cid là một kẻ cuồng phong cách "Chúa tể bóng tối". Sau khi chết và chuyển sinh sang thế giới ma pháp, cậu thành lập tổ chức Shadow Garden để chống lại giáo phái Diablos (mà cậu tưởng là mình bịa ra). Oái oăm thay, giáo phái đó có thật, và các thuộc hạ của cậu đều tin rằng Cid là một thiên tài đại trí nhược ngu.',
  worldSetting: 'Thế giới kỳ ảo nơi ma pháp và kiếm thuật tồn tại. Cid hoạt động dưới danh nghĩa một học sinh bình thường nhưng thực chất là thủ lĩnh của Shadow Garden.',
  characters: [
    { 
      name: 'Cid Kagenou', 
      role: 'Nhân vật chính', 
      age: '15', 
      description: 'Một học sinh trung học bình thường, mờ nhạt và luôn cố gắng đóng vai "nhân vật quần chúng" hoàn hảo. Cậu luôn giả vờ yếu đuối để che giấu sức mạnh thực sự của mình.',
      identities: [{
        name: 'Shadow / Mundane Mann / John Smith',
        role: 'Chúa tể bóng tối',
        description: 'Thủ lĩnh tối cao của tổ chức Shadow Garden. Dưới danh nghĩa Shadow, cậu sở hữu sức mạnh áp đảo và trí tuệ (vô tình) vượt xa mọi kế hoạch của kẻ thù. Cậu cũng thường xuyên sử dụng các danh tính giả khác như Mundane Mann (kiếm sĩ yếu ớt) hay John Smith (đặc vụ bí ẩn) để thực hiện các kế hoạch "làm màu" của mình.',
        isRevealed: false,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Alpha', role: 'Cấp dưới', age: '15', description: 'Người đầu tiên của Thất Ảnh, xinh đẹp và tài năng, quản lý toàn bộ Shadow Garden và tôn thờ Cid tuyệt đối.' },
    { 
      name: 'Beta', 
      role: 'Thành viên Thất Ảnh', 
      age: '15', 
      description: 'Thành viên Thất Ảnh, một nhà văn nổi tiếng ở thế giới thực, luôn ghi chép lại những "chiến tích" của Shadow.',
      identities: [{
        name: 'Natsume',
        role: 'Nhà văn nổi tiếng',
        description: 'Danh tính của Beta trong xã hội loài người. Cô là một tác giả cực kỳ nổi tiếng với những tác phẩm văn học (thực chất là chép lại từ các câu chuyện Cid kể) và thường xuyên thâm nhập vào giới quý tộc để thu thập tin tức.',
        isRevealed: false,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Alexia Midgar', role: 'Nữ chính / Đối thủ', age: '15', description: 'Nhị công chúa của vương quốc, có mối quan hệ "oan gia" với Cid và luôn bị cậu làm cho tức điên.' },
    { name: 'Rose Oriana', role: 'Đồng minh', age: '16', description: 'Công chúa của vương quốc Oriana, một kiếm sĩ tài năng, sau này gia nhập Shadow Garden vì ngưỡng mộ Shadow.' },
    { 
      name: 'Gamma', 
      role: 'Thành viên Thất Ảnh', 
      age: '15', 
      description: 'Thành viên Thất Ảnh, dù vụng về trong chiến đấu nhưng là một thiên tài kinh doanh, xây dựng đế chế tài chính cho tổ chức.',
      identities: [{
        name: 'Luna',
        role: 'Chủ tịch tập đoàn Mitsugoshi',
        description: 'Dưới danh nghĩa Luna, Gamma điều hành tập đoàn Mitsugoshi khổng lồ, mang về nguồn tài chính vô tận cho Shadow Garden thông qua những sản phẩm "hiện đại" mà Cid gợi ý.',
        isRevealed: false,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Delta', role: 'Cấp dưới', age: '14', description: 'Thành viên Thất Ảnh, sở hữu sức mạnh thể chất áp đảo và bản năng hoang dã, trung thành tuyệt đối với Shadow.' },
    { name: 'Epsilon', role: 'Cấp dưới', age: '15', description: 'Thành viên Thất Ảnh, bậc thầy về điều khiển ma lực và là người có kỹ năng "độn ngực" bằng slime đỉnh cao.' },
    { name: 'Zeta', role: 'Cấp dưới', age: '15', description: 'Thành viên Thất Ảnh, chuyên trách về tình báo và các hoạt động bí mật bên ngoài.' },
    { name: 'Eta', role: 'Cấp dưới', age: '15', description: 'Thành viên Thất Ảnh, một nhà nghiên cứu điên rồ, người đứng sau các phát minh kỹ thuật của Shadow Garden.' },
    { name: 'Nu', role: 'Cấp dưới', age: '17', description: 'Thành viên của Shadow Garden, một cựu tiểu thư quý tộc, chuyên trách về liên lạc và hỗ trợ các nhiệm vụ tại thủ đô.' },
    { name: 'Victoria (Số 559)', role: 'Cấp dưới', age: '16', description: 'Một thành viên cực kỳ trung thành và cuồng tín của Shadow Garden, sở hữu sức mạnh ma lực vượt trội.' },
    { name: 'Claire Kagenou', role: 'Gia đình', age: '17', description: 'Chị gái của Cid, một thiên tài kiếm thuật và luôn cực kỳ bảo vệ (đôi khi là thái quá) em trai mình.' },
    { name: 'Sherry Barnett', role: 'Đồng minh', age: '15', description: 'Một thiên tài giải mã cổ ngữ, tính cách nhút nhát nhưng rất kiên trì trong việc tìm kiếm sự thật về quá khứ.' },
    { name: 'Beatrix', role: 'Đối thủ / Đồng minh', age: '???', description: 'Nữ thần chiến tranh của tộc Elf, sở hữu kỹ năng kiếm thuật đỉnh cao, đang đi tìm kiếm người thân bị thất lạc.' },
    { name: 'Aurora (Phù thủy Tai ương)', role: 'Đồng minh / Bí ẩn', age: 'Ancient', description: 'Thực thể bị phong ấn trong thánh địa, có mối liên kết kỳ lạ với Cid và là nguồn gốc của nhiều bí mật thế giới.' },
    { name: 'Annerose', role: 'Đối thủ', age: '18', description: 'Một kiếm sĩ nổi tiếng tham gia đại hội võ thuật, luôn cố gắng nhìn thấu sức mạnh thực sự của Cid.' },
    { name: 'Yukime', role: 'Đồng minh', age: '24', description: 'Nữ vương của khu ổ chuột, một hồ ly tinh quyến rũ và là đối tác kinh doanh bí mật của Shadow.' },
    { name: 'Juggernaut', role: 'Đối thủ', age: '30+', description: 'Một kẻ tàn bạo thống trị một phần của khu ổ chuột, sở hữu sức mạnh thể chất đáng sợ.' },
    { name: 'Mary', role: 'Đồng minh', age: '???', description: 'Một thợ săn ma cà rồng bí ẩn, người đã đồng hành cùng Cid trong sự kiện Huyết Nguyệt.' },
    { name: 'Elisabeth', role: 'Nhân vật quan trọng', age: 'Ancient', description: 'Nữ vương ma cà rồng, người sở hữu sức mạnh hủy diệt và là tâm điểm của sự kiện Huyết Nguyệt.' },
    { name: 'Nelson', role: 'Phản diện', age: '50+', description: 'Một giám mục của Giáo hội, thực chất là thành viên của Giáo phái Diablos, kẻ đứng sau các thí nghiệm tàn bạo.' },
    { name: 'Zenon Griffey', role: 'Phản diện', age: '20+', description: 'Một kiếm sĩ quý tộc, thành viên của Giáo phái Diablos, kẻ đã bắt cóc Alexia.' },
    { name: 'Iris Midgar', role: 'Đối thủ', age: '20', description: 'Đại công chúa của vương quốc Midgar, chị gái của Alexia, người đứng đầu hiệp hội hiệp sĩ và luôn truy đuổi Shadow Garden.' },
    { name: 'Doem Ketsuhat', role: 'Phản diện', age: '40+', description: 'Một quý tộc của vương quốc Oriana, thành viên của Giáo phái Diablos, kẻ đang thao túng Rose.' },
    { name: 'Mordred', role: 'Phản diện', age: '???', description: 'Một trong những lãnh đạo cấp cao của Giáo phái Diablos, sở hữu sức mạnh và kiến thức cổ đại.' },
    { name: 'Perv Asshat', role: 'Phản diện', age: '20+', description: 'Một quý tộc hèn hạ, kẻ đang cố gắng ép Rose kết hôn để chiếm lấy vương quốc Oriana.' },
    { name: 'Goldy Gilded', role: 'Hỗ trợ', age: '20+', description: 'Một kiếm sĩ tự phụ tham gia đại hội võ thuật, luôn khoe khoang về kỹ năng của mình.' },
    { name: 'Quinton', role: 'Hỗ trợ', age: '25+', description: 'Một kiếm sĩ thô lỗ tham gia đại hội võ thuật, ban đầu coi thường Cid nhưng sau đó bị khuất phục.' },
    { name: 'Hyoro Gari', role: 'Bạn bè', age: '15', description: 'Bạn cùng lớp của Cid, một kẻ hám gái và luôn cùng Jaga tham gia vào các trò đùa của Cid.' },
    { name: 'Jaga Imo', role: 'Bạn bè', age: '15', description: 'Bạn cùng lớp của Cid, một cậu bé mập mạp và là đồng phạm trong các kế hoạch "làm màu" của Cid.' }
  ]
};
