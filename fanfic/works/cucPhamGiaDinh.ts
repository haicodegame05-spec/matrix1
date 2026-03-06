import { FanficWork } from '../types';
import { IdentityType } from '../../types';

export const cucPhamGiaDinh: FanficWork = {
  id: 'cuc-pham-gia-dinh',
  title: 'Cực Phẩm Gia Đình',
  description: 'Hành trình xuyên không của một quản lý hiện đại trở thành gia đinh số một thiên hạ.',
  country: 'Trung',
  plot: 'Lâm Vãn Vinh là một quản lý bán hàng tài ba ở thế kỷ 21. Trong một chuyến du lịch, anh vô tình rơi xuống vực và xuyên không về một triều đại không có trong lịch sử - Đại Hoa. Tại đây, với cái tên Lâm Tam, anh bắt đầu cuộc đời mới từ một gia đinh (người hầu) trong Tiêu gia, dùng trí tuệ và sự lém lỉnh của mình để chinh phục mỹ nhân, dẹp loạn thù trong giặc ngoài, và trở thành một huyền thoại.',
  worldSetting: 'Triều đại Đại Hoa, một thế giới cổ đại giả tưởng với những quy tắc phong kiến nghiêm ngặt nhưng cũng đầy rẫy những âm mưu chính trị và những cuộc chiến tranh biên giới. Xã hội coi trọng nho giáo nhưng cũng bắt đầu có những sự thay đổi về tư duy kinh tế.',
  characters: [
    { 
      name: 'Lâm Vãn Vinh (Lâm Tam)', 
      role: 'Nhân vật chính', 
      age: '22', 
      description: 'Thông minh, lém lỉnh, đa tài và cực kỳ đào hoa. Anh sử dụng kiến thức hiện đại để giải quyết các vấn đề cổ đại.',
      identities: [{
        name: 'Thiên hạ đệ nhất gia đinh',
        role: 'Huyền thoại',
        description: 'Danh hiệu dành cho người hầu giỏi nhất, có tầm ảnh hưởng đến cả triều đình.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Tiêu Ngọc Nhược', role: 'Nữ chính / Đại tiểu thư', age: '20', description: 'Chủ nhân của Tiêu gia, xinh đẹp, giỏi kinh doanh nhưng ban đầu rất khắt khe với Lâm Tam.' },
    { name: 'Tiêu Ngọc Sương', role: 'Nữ chính / Nhị tiểu thư', age: '16', description: 'Ngây thơ, đáng yêu, là người đầu tiên thân thiết với Lâm Tam trong Tiêu gia.' },
    { name: 'Tần Tiên Nhi', role: 'Nữ chính / Thánh nữ', age: '19', description: 'Thánh nữ của Bạch Liên giáo, võ công cao cường, yêu Lâm Tam sâu đậm.' },
    { name: 'An Bích Như', role: 'Nữ chính / Sư phụ', age: 'Unknown', description: 'Yêu nữ của Diệu Ngọc phường, quyến rũ và đầy bí ẩn, là đối thủ cũng là người tình của Lâm Tam.' },
    { name: 'Ninh Vũ Tích', role: 'Nữ chính / Tiên tử', age: 'Unknown', description: 'Truyền nhân của Thiên Sơn, võ công tuyệt thế, thanh cao thoát tục.' },
    { name: 'Đổng Xảo Xảo', role: 'Nữ chính', age: '18', description: 'Cô gái bán đậu phụ hiền lành, đảm đang, là người đầu tiên chăm sóc Lâm Tam khi anh mới đến Đại Hoa.' },
    { name: 'Từ Chỉ Tình', role: 'Nữ chính / Tài nữ', age: '20', description: 'Con gái của Từ Vị, thông minh tuyệt đỉnh, giỏi mưu lược và quân sự.' },
    { name: 'Ngọc Già', role: 'Nữ chính / Công chúa', age: '19', description: 'Công chúa của Đột Quyết, mạnh mẽ, hoang dã và đầy kiêu hãnh.' },
    { name: 'Y Liên', role: 'Nữ chính / Miêu tộc', age: '18', description: 'Cô gái Miêu tộc xinh đẹp, giỏi cổ thuật và y thuật.' },
    { name: 'Tiêu phu nhân', role: 'Gia đình / Phu nhân', age: '38', description: 'Mẹ của Ngọc Nhược và Ngọc Sương, người phụ nữ quyền lực và sắc sảo của Tiêu gia.' },
    { name: 'Từ Vị', role: 'Đồng minh / Đại thần', age: '50+', description: 'Đại thần triều đình, người phát hiện ra tài năng của Lâm Tam và luôn hỗ trợ anh.' },
    { name: 'Lão hoàng đế', role: 'Hoàng đế', age: '60+', description: 'Vị vua anh minh của Đại Hoa, người đặt niềm tin lớn vào Lâm Tam.' },
    { name: 'Thành vương', role: 'Phản diện / Vương gia', age: '50+', description: 'Em trai hoàng đế, kẻ luôn âm mưu cướp ngôi và là đối thủ chính trị lớn nhất.' },
    { name: 'Cao Tù', role: 'Đồng minh / Hộ vệ', age: '25+', description: 'Hộ vệ trung thành và là người anh em thân thiết của Lâm Tam, võ công cao cường.' },
    { name: 'Ngụy Hiền', role: 'Đồng minh / Thái giám', age: '60+', description: 'Tổng quản thái giám, người bạn già và là đồng minh bí mật của Lâm Tam trong cung.' },
    { name: 'Lạc Ngưng', role: 'Nữ chính / Tài nữ', age: '19', description: 'Tài nữ Giang Nam, xinh đẹp và có tâm hồn nghệ thuật, yêu thích thơ ca của Lâm Tam.' },
    { name: 'Thanh Tuyền', role: 'Nữ chính / Công chúa', age: '19', description: 'Công chúa thực sự của Đại Hoa, người có mối lương duyên định mệnh với Lâm Tam.' },
    { name: 'Hồ Bất Quy', role: 'Đồng minh / Tướng quân', age: '30+', description: 'Tướng quân dũng mãnh, người cùng Lâm Tam vào sinh ra tử trên chiến trường.' },
    { name: 'Lý Thánh', role: 'Đồng minh / Tướng quân', age: '30+', description: 'Tướng quân tài ba, cánh tay phải của Lâm Tam trong các chiến dịch quân sự.' }
  ]
};
