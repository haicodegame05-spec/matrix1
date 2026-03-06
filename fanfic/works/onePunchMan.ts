
import { FanficWork } from '../types';

export const onePunchMan: FanficWork = {
  id: 'one-punch-man',
  title: 'One Punch Man',
  description: 'Saitama, người anh hùng có thể đánh bại mọi kẻ thù chỉ bằng một cú đấm.',
  country: 'Nhật',
  plot: 'Saitama, một người đàn ông bình thường đã rèn luyện đến mức rụng hết tóc để có được sức mạnh vô địch. Anh có thể kết thúc mọi trận chiến chỉ bằng một cú đấm, điều này khiến anh cảm thấy nhàm chán và trống rỗng. Anh gia nhập Hiệp Hội Anh Hùng để tìm kiếm ý nghĩa và những đối thủ xứng tầm.',
  worldSetting: 'Thế giới bị đe dọa bởi các quái vật (Kaijin) xuất hiện ngẫu nhiên. Hiệp Hội Anh Hùng được thành lập để bảo vệ người dân, phân loại anh hùng từ hạng C đến hạng S. Sức mạnh của các quái vật được chia theo các cấp độ: Sói, Hổ, Quỷ, Rồng, Thần.',
  characters: [
    { name: 'Saitama', role: 'Anh hùng (Nhân vật chính)', age: '25', description: 'Anh hùng hói đầu với sức mạnh vô hạn sau khi rèn luyện khắc nghiệt. Anh luôn giữ thái độ thờ ơ, quan tâm đến việc giảm giá ở siêu thị hơn là danh tiếng.' },
    { name: 'Genos', role: 'Người máy sinh học / Đệ tử', age: '19', description: 'Đệ tử trung thành của Saitama. Một Cyborg luôn tìm kiếm sức mạnh tuyệt đối để trả thù kẻ đã hủy diệt quê hương mình.' },
    { name: 'Tatsumaki', role: 'Anh hùng hạng S (Hạng 2)', age: '28', description: 'Đứa con của bão, siêu năng lực gia mạnh nhất thế giới. Cô có ngoại hình nhỏ bé nhưng tính cách cực kỳ kiêu ngạo và khó gần.' },
    { name: 'Fubuki', role: 'Anh hùng hạng B (Hạng 1)', age: '23', description: 'Bão tuyết địa ngục, em gái Tatsumaki. Cô lãnh đạo nhóm Fubuki và luôn cố gắng vượt qua cái bóng của chị gái mình.' },
    { name: 'Garou', role: 'Quái vật nhân loại', age: '18', description: 'Kẻ săn lùng anh hùng, một võ sĩ thiên tài. Anh muốn trở thành "Quái vật tuyệt đối" để mang lại sự công bằng thông qua nỗi sợ hãi.' },
    { name: 'King', role: 'Anh hùng hạng S (Hạng 7)', age: '29', description: 'Được mệnh danh là người đàn ông mạnh nhất thế giới với "Động cơ King". Thực chất anh chỉ là một otaku nhát gan gặp may mắn kỳ lạ.' },
    { name: 'Bang (Silver Fang)', role: 'Anh hùng hạng S (Hạng 3)', age: '81', description: 'Bậc thầy võ thuật, người sáng tạo ra môn võ Nước Chảy Đá Mòn. Ông luôn cố gắng thu nhận Saitama và Genos vào võ đường của mình.' },
    { name: 'Mumen Rider', role: 'Anh hùng hạng C (Hạng 1)', age: '25', description: 'Anh hùng đi xe đạp với tinh thần chính nghĩa bất diệt. Dù sức mạnh có hạn, anh không bao giờ lùi bước trước cái ác.' },
    { name: 'Sonic', role: 'Ninja / Đối thủ', age: '25', description: 'Ninja tốc độ âm thanh, luôn coi Saitama là đối thủ truyền kiếp sau khi bị đánh bại một cách nhục nhã.' },
    { name: 'Boros', role: 'Chúa tể vũ trụ', age: 'Unknown', description: 'Kẻ thống trị thiên hà, đến Trái Đất để tìm kiếm một đối thủ xứng tầm. Là người duy nhất chịu được nhiều hơn một cú đấm của Saitama.' },
    { name: 'Atomic Samurai', role: 'Anh hùng hạng S (Hạng 4)', age: '37', description: 'Kiếm sĩ bậc thầy với khả năng chém hàng nghìn nhát trong một giây. Ông có lòng tự tôn cao và luôn tìm kiếm những kiếm sĩ giỏi.' },
    { name: 'Child Emperor', role: 'Anh hùng hạng S (Hạng 5)', age: '10', description: 'Thiên tài nhỏ tuổi nhất Hiệp hội Anh hùng, sử dụng các thiết bị công nghệ hiện đại và robot Brave Giant để chiến đấu.' },
    { name: 'Metal Knight (Bofoi)', role: 'Anh hùng hạng S (Hạng 6)', age: 'Unknown', description: 'Nhà khoa học bí ẩn điều khiển các robot khổng lồ từ xa. Ông quan tâm đến việc thử nghiệm vũ khí hơn là cứu người.' },
    { name: 'Zombieman', role: 'Anh hùng hạng S (Hạng 8)', age: 'Unknown', description: 'Sản phẩm của Ngôi nhà Tiến hóa, sở hữu khả năng hồi phục vô hạn. Anh chiến đấu bằng sự bền bỉ và các loại vũ khí hạng nặng.' },
    { name: 'Drive Knight', role: 'Anh hùng hạng S (Hạng 9)', age: 'Unknown', description: 'Anh hùng người máy với khả năng biến hình linh hoạt thành nhiều dạng vũ khí khác nhau. Anh là một người cực kỳ thận trọng và bí ẩn.' },
    { name: 'Pig God', role: 'Anh hùng hạng S (Hạng 10)', age: 'Unknown', description: 'Anh hùng có khả năng ăn mọi thứ, kể cả quái vật khổng lồ. Anh sở hữu lớp mỡ dày bảo vệ và một sức mạnh tiềm ẩn chưa được tiết lộ.' },
    { name: 'Superalloy Darkshine', role: 'Anh hùng hạng S (Hạng 11)', age: '27', description: 'Anh hùng có cơ bắp cứng nhất thế giới. Anh tự tin vào sức mạnh thể chất của mình nhưng lại có tâm lý khá yếu đuối.' },
    { name: 'Watchdog Man', role: 'Anh hùng hạng S (Hạng 12)', age: 'Unknown', description: 'Anh hùng bảo vệ thành phố Q, luôn mặc bộ đồ chó và chiến đấu bằng bản năng động vật cực kỳ nhanh nhẹn.' },
    { name: 'Flashy Flash', role: 'Anh hùng hạng S (Hạng 13)', age: '25', description: 'Ninja tốc độ nhất thế giới, xuất thân từ làng Ninja giống như Sonic. Anh sở hữu kỹ năng kiếm thuật tinh xảo và tốc độ vượt trội.' },
    { name: 'Tanktop Master', role: 'Anh hùng hạng S (Hạng 14)', age: '38', description: 'Lãnh đạo của quân đoàn Tanktop, tin vào sức mạnh của chiếc áo ba lỗ. Anh là một người chính trực và luôn quan tâm đến đàn em.' },
    { name: 'Puri-Puri Prisoner', role: 'Anh hùng hạng S (Hạng 17)', age: '33', description: 'Anh hùng có sức mạnh thể chất phi thường và phong cách chiến đấu "thiên thần" kỳ dị. Anh luôn cố gắng bảo vệ những chàng trai đẹp.' },
    { name: 'Sweet Mask', role: 'Anh hùng hạng A (Hạng 1)', age: '24', description: 'Thần tượng nổi tiếng kiêm anh hùng, người gác cổng hạng A. Anh có quan điểm cực đoan về công lý và sức mạnh.' },
    { name: 'Deep Sea King', role: 'Quái vật (Cấp Rồng)', age: 'Unknown', description: 'Vua của biển cả, kẻ đã đánh bại nhiều anh hùng hạng S và A trước khi bị Saitama hạ gục chỉ bằng một cú đấm.' },
    { name: 'Carnage Kabuto', role: 'Quái vật (Cấp Rồng)', age: 'N/A', description: 'Sản phẩm mạnh nhất của Ngôi nhà Tiến hóa, sở hữu trí tuệ siêu việt và sức mạnh điên cuồng ở chế độ Carnage.' },
    { name: 'Dr. Kuseno', role: 'Nhà khoa học / Hỗ trợ', age: '70+', description: 'Người đã cứu sống và nâng cấp Genos, một nhà khoa học tài ba luôn lo lắng cho sự an toàn của cậu.' },
    { name: 'Sitch', role: 'Lãnh đạo Hiệp hội', age: '50+', description: 'Thành viên cấp cao của Hiệp hội Anh hùng, người luôn nỗ lực để đối phó với các mối đe dọa cấp độ Thần.' },
    { name: 'Black Sperm', role: 'Quái vật (Cấp Rồng)', age: 'Unknown', description: 'Một quái vật cực kỳ mạnh mẽ với khả năng phân thân vô hạn, là một trong những thành viên nguy hiểm nhất của Hiệp hội Quái vật.' },
    { name: 'Overgrown Rover', role: 'Quái vật (Cấp Rồng)', age: 'Unknown', description: 'Một con chó quái vật khổng lồ với khả năng bắn ra những quả cầu năng lượng hủy diệt.' },
    { name: 'Psykos', role: 'Lãnh đạo Hiệp hội Quái vật', age: 'Unknown', description: 'Một siêu năng lực gia xảo quyệt, người đứng sau điều hành Hiệp hội Quái vật và là bạn cũ của Fubuki.' },
    { name: 'Orochi', role: 'Vua Quái vật', age: 'Unknown', description: 'Thực thể mạnh nhất của Hiệp hội Quái vật, một quái vật khổng lồ với sức mạnh tiến hóa không ngừng.' }
  ]
};
