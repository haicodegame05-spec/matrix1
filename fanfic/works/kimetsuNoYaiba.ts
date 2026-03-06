import { FanficWork } from '../types';
import { IdentityType } from '../../types';

export const kimetsuNoYaiba: FanficWork = {
  id: 'kimetsu-no-yaiba',
  title: 'Kimetsu no Yaiba',
  description: 'Cuộc hành trình của Tanjiro Kamado để biến em gái mình trở lại thành người và tiêu diệt chúa quỷ Muzan Kibutsuji.',
  country: 'Nhật',
  plot: 'Vào thời Taisho, Tanjiro Kamado trở về nhà và thấy gia đình mình bị quỷ tàn sát, chỉ còn em gái Nezuko sống sót nhưng đã biến thành quỷ. Để cứu em gái, Tanjiro gia nhập Sát Quỷ Đội, học Hơi thở của Nước và dấn thân vào cuộc chiến chống lại loài quỷ ăn thịt người.',
  worldSetting: 'Nhật Bản thời Taisho. Loài quỷ sở hữu sức mạnh siêu nhiên và khả năng hồi phục đáng kinh ngạc, chỉ bị tiêu diệt bởi ánh sáng mặt trời hoặc kiếm Nichirin. Sát Quỷ Đội sử dụng các kỹ thuật "Hơi thở" để gia tăng sức mạnh thể chất chiến đấu với quỷ.',
  characters: [
    { name: 'Tanjiro Kamado', role: 'Nhân vật chính', age: '15', description: 'Kiếm sĩ Sát Quỷ Đội hiền lành, sở hữu khứu giác nhạy bén và ý chí kiên cường.' },
    { name: 'Nezuko Kamado', role: 'Em gái / Quỷ thiện', age: '14', description: 'Em gái Tanjiro, dù là quỷ nhưng vẫn giữ được nhân tính và chiến đấu bảo vệ con người.' },
    { name: 'Zenitsu Agatsuma', role: 'Bạn thân / Hơi thở Sấm Sét', age: '16', description: 'Kiếm sĩ nhút nhát nhưng sở hữu sức mạnh kinh hoàng khi rơi vào trạng thái ngủ quên.' },
    { name: 'Inosuke Hashibira', role: 'Bạn thân / Hơi thở Muông Thú', age: '15', description: 'Kiếm sĩ hoang dã đeo mặt nạ đầu lợn rừng, chiến đấu bằng bản năng và sự linh hoạt.' },
    { name: 'Giyu Tomioka', role: 'Thủy Trụ', age: '21', description: 'Trụ cột đầu tiên Tanjiro gặp, người đã giới thiệu anh vào Sát Quỷ Đội.' },
    { name: 'Shinobu Kocho', role: 'Trùng Trụ', age: '18', description: 'Nữ trụ cột sử dụng độc dược thay vì sức mạnh vật lý, luôn nở nụ cười che giấu nỗi đau.' },
    { name: 'Kyojuro Rengoku', role: 'Viêm Trụ', age: '20', description: 'Trụ cột nhiệt huyết với tinh thần rực cháy, hy sinh anh dũng để bảo vệ mọi người.' },
    { name: 'Tengen Uzui', role: 'Âm Trụ', age: '23', description: 'Cựu nhẫn giả hào nhoáng, sử dụng thuốc nổ và âm thanh trong chiến đấu.' },
    { name: 'Muichiro Tokito', role: 'Hà Trụ', age: '14', description: 'Thiên tài kiếm thuật, trở thành trụ cột chỉ sau hai tháng cầm kiếm.' },
    { name: 'Mitsuri Kanroji', role: 'Luyến Trụ', age: '19', description: 'Nữ trụ cột xinh đẹp với sức mạnh cơ bắp gấp 8 lần người thường.' },
    { name: 'Obanai Iguro', role: 'Xà Trụ', age: '21', description: 'Trụ cột bí ẩn với kỹ thuật kiếm uốn lượn như rắn, thầm yêu Mitsuri.' },
    { name: 'Sanemi Shinazugawa', role: 'Phong Trụ', age: '21', description: 'Trụ cột nóng nảy, mang nhiều vết sẹo và lòng căm thù quỷ sâu sắc.' },
    { name: 'Gyomei Himejima', role: 'Nham Trụ', age: '27', description: 'Trụ cột mạnh nhất, một nhà sư mù với lòng từ bi và sức mạnh vô song.' },
    { name: 'Kanao Tsuyuri', role: 'Đồng môn / Kế tử', age: '16', description: 'Người kế nhiệm Shinobu, ban đầu rất ít nói và thường dùng đồng xu để quyết định.' },
    { name: 'Genya Shinazugawa', role: 'Đồng môn / Em trai Sanemi', age: '16', description: 'Kiếm sĩ không thể dùng hơi thở nhưng có khả năng ăn thịt quỷ để lấy sức mạnh.' },
    { name: 'Kagaya Ubuyashiki', role: 'Thủ lĩnh Sát Quỷ Đội', age: '23', description: 'Người đứng đầu gia tộc Ubuyashiki, dẫn dắt các trụ cột bằng sự dịu dàng và thông tuệ.' },
    { name: 'Muzan Kibutsuji', role: 'Phản diện chính / Chúa Quỷ', age: '1000+', description: 'Con quỷ đầu tiên và là nguồn gốc của mọi loài quỷ, tàn ác và ám ảnh với sự bất tử.', identities: [{ name: 'Tsukihiko', role: 'Người chồng / Cha', description: 'Danh tính giả khi sống trong xã hội loài người với một gia đình.', isRevealed: false, type: IdentityType.FANFIC }] },
    { name: 'Kokushibo', role: 'Thượng Huyền Nhất', age: '480+', description: 'Con quỷ mạnh nhất dưới trướng Muzan, cựu kiếm sĩ Sát Quỷ Đội và anh trai của Yoriichi.' },
    { name: 'Doma', role: 'Thượng Huyền Nhị', age: '130+', description: 'Kẻ đứng đầu giáo phái Vạn Thế Cực Lạc, tàn nhẫn và không có cảm xúc con người.' },
    { name: 'Akaza', role: 'Thượng Huyền Tam', age: '100+', description: 'Con quỷ cuồng chiến, luôn tìm kiếm những đối thủ mạnh mẽ để so tài.' },
    { name: 'Nakime', role: 'Thượng Huyền Tứ (Mới)', age: 'Unknown', description: 'Quỷ Tì Bà, có khả năng điều khiển Pháo Đài Vô Cực.' },
    { name: 'Gyokko', role: 'Thượng Huyền Ngũ', age: 'Unknown', description: 'Con quỷ nghệ sĩ biến thái, sống trong những chiếc bình gốm.' },
    { name: 'Gyutaro', role: 'Thượng Huyền Lục', age: '100+', description: 'Anh trai của Daki, chiến đấu bằng cặp liềm tẩm độc.' },
    { name: 'Daki', role: 'Thượng Huyền Lục', age: '100+', description: 'Em gái Gyutaro, xinh đẹp và kiêu ngạo, sử dụng dải lụa Obi để tấn công.' },
    { name: 'Tamayo', role: 'Đồng minh / Quỷ y', age: '400+', description: 'Nữ quỷ đã thoát khỏi sự kiểm soát của Muzan, cống hiến đời mình để tìm thuốc chữa quỷ.' },
    { name: 'Yushiro', role: 'Đồng minh / Trợ lý Tamayo', age: 'Unknown', description: 'Con quỷ duy nhất do Tamayo tạo ra, trung thành tuyệt đối và yêu thầm cô.' },
    { name: 'Urokodaki Sakonji', role: 'Sư phụ / Cựu Thủy Trụ', age: 'Unknown', description: 'Người đã dạy Tanjiro Hơi thở của Nước, luôn đeo mặt nạ Tengu.' },
    { name: 'Jigoro Kuwajima', role: 'Sư phụ / Cựu Minh Trụ', age: 'Unknown', description: 'Người đã dạy Zenitsu, luôn nghiêm khắc nhưng yêu thương học trò.' },
    { name: 'Aoi Kanzaki', role: 'Hỗ trợ / Điệp Phủ', age: '16', description: 'Nữ kiếm sĩ không đủ tự tin chiến đấu, chuyển sang hỗ trợ hậu cần tại Điệp Phủ.' },
    { name: 'Yoriichi Tsugikuni', role: 'Kiếm sĩ huyền thoại', age: 'Unknown', description: 'Người sáng tạo ra Hơi thở Mặt Trời, kiếm sĩ mạnh nhất lịch sử.' }
  ]
};
