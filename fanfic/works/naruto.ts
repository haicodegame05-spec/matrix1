import { FanficWork } from '../types';
import { IdentityType } from '../../types';

export const naruto: FanficWork = {
  id: 'naruto',
  title: 'Naruto',
  description: 'Hành trình trở thành Hokage của cậu bé bị dân làng hắt hủi.',
  country: 'Nhật',
  plot: 'Naruto Uzumaki là một ninja trẻ tuổi mang trong mình phong ấn của Cửu Vĩ Hồ Ly, khiến cậu bị dân làng Lá xa lánh. Với ước mơ trở thành Hokage - người đứng đầu làng - để được mọi người công nhận, Naruto đã nỗ lực không ngừng, vượt qua mọi thử thách và bảo vệ hòa bình cho thế giới ninja.',
  worldSetting: 'Thế giới Ninja chia thành các quốc gia lớn với các Làng Lá, Làng Cát, Làng Mây... Ninja sử dụng Chakra để thi triển Nhẫn thuật (Ninjutsu), Ảo thuật (Genjutsu) và Thể thuật (Taijutsu). Các Vĩ thú là những nguồn sức mạnh khổng lồ bị phong ấn trong các Jinchuriki.',
  characters: [
    { name: 'Naruto Uzumaki', role: 'Nhân vật chính', age: '17', description: 'Jinchuriki của Cửu Vĩ, sở hữu ý chí kiên cường và ước mơ trở thành Hokage. Cậu nổi tiếng với lòng vị tha và khả năng thay đổi trái tim người khác.' },
    { name: 'Sasuke Uchiha', role: 'Đối thủ / Bạn thân', age: '17', description: 'Thiên tài tộc Uchiha, sở hữu Sharingan và Rinnegan. Anh từng rời bỏ làng để tìm kiếm sức mạnh trả thù nhưng sau đó đã quay lại bảo vệ làng từ bóng tối.' },
    { name: 'Sakura Haruno', role: 'Nữ chính', age: '17', description: 'Ninja y thuật tài ba, học trò của Tsunade. Cô sở hữu sức mạnh thể chất kinh người và khả năng kiểm soát Chakra hoàn hảo.' },
    { name: 'Kakashi Hatake', role: 'Người dẫn dắt', age: '30', description: 'Ninja sao chép nổi tiếng, thầy giáo của Đội 7 và sau này là Hokage đệ Lục. Ông luôn che mặt và mang theo cuốn sách "Thiên đường tung tăng".' },
    { 
      name: 'Itachi Uchiha', 
      role: 'Kẻ phản bội làng Lá', 
      age: '21', 
      description: 'Thiên tài tộc Uchiha, kẻ đã thảm sát cả gia tộc mình chỉ trong một đêm và gia nhập tổ chức tội phạm Akatsuki. Anh mang trong mình đôi mắt Mangekyo Sharingan đầy quyền năng và sự lạnh lùng đáng sợ.',
      identities: [{
        name: 'Anh hùng thầm lặng / Người bảo vệ làng',
        role: 'Điệp viên nhị trùng',
        description: 'Thực chất Itachi là một anh hùng đã hy sinh danh dự và cuộc đời mình để ngăn chặn một cuộc đảo chính đẫm máu. Anh chấp nhận mang danh kẻ phản bội để bảo vệ hòa bình cho làng Lá và sự an toàn cho em trai Sasuke.',
        isRevealed: false,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Jiraiya', role: 'Tiên nhân / Người thầy', age: '54', description: 'Một trong Tam Nin huyền thoại, người thầy đã dạy Naruto về nhẫn đạo và lòng dũng cảm. Ông cũng là một nhà văn nổi tiếng.' },
    { name: 'Hinata Hyuga', role: 'Đồng minh / Vợ Naruto', age: '16', description: 'Tiểu thư tộc Hyuga, sở hữu Byakugan. Cô luôn thầm lặng ủng hộ Naruto và có một tình yêu sâu đậm dành cho cậu.' },
    { name: 'Gaara', role: 'Kazekage đệ Ngũ', age: '17', description: 'Cựu Jinchuriki của Nhất Vĩ, từng là một kẻ sát nhân máu lạnh nhưng đã thay đổi nhờ Naruto và trở thành lãnh đạo làng Cát.' },
    { name: 'Minato Namikaze', role: 'Hokage đệ Tứ', age: '24 (khi hy sinh)', description: 'Cha của Naruto, được mệnh danh là "Tia chớp vàng làng Lá". Ông đã hy sinh để phong ấn Cửu Vĩ bảo vệ làng.' },
    { name: 'Madara Uchiha', role: 'Phản diện huyền thoại', age: 'Unknown', description: 'Lãnh đạo tộc Uchiha, người cùng Hashirama sáng lập làng Lá. Ông là kẻ đứng sau kế hoạch Nguyệt Nhãn nhằm đưa thế giới vào ảo mộng vĩnh cửu.' },
    { name: 'Orochimaru', role: 'Phản diện / Nhà khoa học', age: '54', description: 'Một trong Tam Nin huyền thoại, kẻ khao khát sự bất tử và nắm giữ mọi nhẫn thuật trên thế giới.' },
    { name: 'Tsunade', role: 'Hokage đệ Ngũ', age: '54', description: 'Một trong Tam Nin huyền thoại, công chúa của tộc Senju và là ninja y thuật vĩ đại nhất. Cô sở hữu sức mạnh thể chất kinh khủng và khả năng hồi phục thần tốc.' },
    { name: 'Hashirama Senju', role: 'Hokage đệ Nhất', age: 'Unknown', description: 'Vị thần của giới Ninja, người sáng lập làng Lá và sở hữu Mộc Độn huyền thoại. Ông là người mang trong mình ý chí lửa nồng cháy nhất.' },
    { name: 'Tobirama Senju', role: 'Hokage đệ Nhị', age: 'Unknown', description: 'Em trai của Hashirama, một thiên tài sáng tạo ra vô số nhẫn thuật như Ảnh Phân Thân và Phi Lôi Thần Thuật. Ông là người thực tế và nghiêm khắc.' },
    { name: 'Hiruzen Sarutobi', role: 'Hokage đệ Tam', age: '69 (khi hy sinh)', description: 'Được mệnh danh là "Giáo sư", người thông thạo mọi nhẫn thuật của làng Lá. Ông là người thầy hiền từ của Tam Nin huyền thoại.' },
    { 
      name: 'Pain', 
      role: 'Thủ lĩnh Akatsuki', 
      age: '35', 
      description: 'Một thực thể thần thánh sở hữu Rinnegan, người tin rằng nỗi đau là cách duy nhất để mang lại hòa bình thế giới. Hắn điều khiển Lục Đạo Luân Hồi để thực thi công lý của mình.',
      identities: [{
        name: 'Nagato Uzumaki',
        role: 'Vật chủ / Người điều khiển',
        description: 'Nagato là người thực sự đứng sau Pain, điều khiển 6 xác chết thông qua các thanh truyền Chakra. Anh là một đứa trẻ mồ côi từ làng Mưa, người đã bị chiến tranh và mất mát làm biến đổi lý tưởng ban đầu.',
        isRevealed: false,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Konan', role: 'Thành viên Akatsuki', age: '35', description: 'Đồng đội trung thành của Nagato, sở hữu nhẫn thuật điều khiển giấy độc đáo. Cô được mệnh danh là "Thiên sứ" của làng Mưa.' },
    { 
      name: 'Tobi', 
      role: 'Thành viên Akatsuki', 
      age: '31', 
      description: 'Một thành viên kỳ quặc, hài hước và có phần ngớ ngẩn của Akatsuki, thường xuyên đeo mặt nạ xoắn ốc màu cam và đi cùng Deidara.',
      identities: [{
        name: 'Obito Uchiha / Madara giả',
        role: 'Kẻ thao túng thực sự',
        description: 'Dưới lớp mặt nạ, Tobi thực chất là Obito Uchiha, người đã sống sót sau vụ sập đá năm xưa. Anh đã giả danh Madara Uchiha để thao túng Akatsuki và thực hiện kế hoạch Nguyệt Nhãn nhằm tạo ra một thế giới không có nỗi đau.',
        isRevealed: false,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Might Guy', role: 'Mãnh thú làng Lá', age: '31', description: 'Bậc thầy Thể thuật, đối thủ truyền kiếp của Kakashi. Anh có thể mở Bát Môn Độn Giáp để đạt được sức mạnh vượt xa cả các Hokage.' },
    { name: 'Rock Lee', role: 'Ninja nỗ lực', age: '17', description: 'Học trò cưng của Guy, người không thể sử dụng nhẫn thuật nhưng đã rèn luyện thể thuật đến mức thượng thừa nhờ sự nỗ lực không ngừng.' },
    { name: 'Neji Hyuga', role: 'Thiên tài tộc Hyuga', age: '18 (khi hy sinh)', description: 'Sở hữu Byakugan và Nhu Quyền đỉnh cao. Anh từng tin vào định mệnh nhưng đã thay đổi sau khi gặp Naruto.' },
    { name: 'Shikamaru Nara', role: 'Chiến lược gia', age: '17', description: 'Sở hữu chỉ số IQ trên 200, thiên tài về chiến thuật của làng Lá. Anh sử dụng Ảnh Thuật để khống chế đối thủ.' },
    { name: 'Temari', role: 'Đồng minh / Làng Cát', age: '19', description: 'Chị gái của Gaara, một nữ ninja sử dụng quạt khổng lồ để thi triển Phong thuật mạnh mẽ. Cô là người sắc sảo và quyết đoán.' },
    { name: 'Killer Bee', role: 'Jinchuriki Bát Vĩ', age: '36', description: 'Ninja làng Mây, người có thể kiểm soát hoàn toàn sức mạnh của Bát Vĩ. Anh nổi tiếng với phong cách rap ngẫu hứng và khả năng sử dụng thất kiếm.' },
    { name: 'Iruka Umino', role: 'Người thầy / Gia đình', age: '27', description: 'Thầy giáo đầu tiên của Naruto, người đã công nhận và yêu thương cậu khi cả làng hắt hủi. Anh là người cha tinh thần của Naruto.' },
    { name: 'Sai', role: 'Đồng minh / Đội 7', age: '17', description: 'Thành viên của tổ chức Root, người thay thế Sasuke trong Đội 7. Anh sử dụng nhẫn thuật vẽ tranh sinh động và đang học cách thấu hiểu cảm xúc.' },
    { name: 'Yamato', role: 'Người dẫn dắt / Đội 7', age: '26', description: 'Ninja sở hữu Mộc Độn, người được giao nhiệm vụ giám sát Naruto và kiềm chế sức mạnh Cửu Vĩ.' },
    { name: 'Kushina Uzumaki', role: 'Mẹ', age: '24 (khi hy sinh)', description: 'Mẹ của Naruto, cựu Jinchuriki của Cửu Vĩ. Cô là một người phụ nữ mạnh mẽ, nóng nảy nhưng tràn đầy tình yêu thương dành cho con trai.' },
    { name: 'Deidara', role: 'Thành viên Akatsuki', age: '19', description: 'Nghệ sĩ nổ tung, người tin rằng nghệ thuật là sự bùng nổ tức thời. Anh sử dụng đất sét nổ để thi triển các đòn tấn công tầm xa.' },
    { name: 'Sasori', role: 'Thành viên Akatsuki', age: '35 (ngoại hình trẻ)', description: 'Bậc thầy rối, người đã biến chính cơ thể mình thành một con rối bất tử. Anh tin rằng nghệ thuật là sự vĩnh cửu.' }
  ]
};
