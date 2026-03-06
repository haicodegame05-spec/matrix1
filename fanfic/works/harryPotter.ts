import { FanficWork } from '../types';
import { IdentityType } from '../../types';

export const harryPotter: FanficWork = {
  id: 'harry-potter',
  title: 'Harry Potter',
  description: 'Cậu bé sống sót và cuộc chiến chống lại Chúa tể Hắc ám Voldemort.',
  country: 'Khác',
  plot: 'Harry Potter, một cậu bé mồ côi phát hiện ra mình là phù thủy vào sinh nhật thứ 11. Cậu nhập học trường Pháp thuật và Ma thuật Hogwarts, nơi cậu kết bạn với Ron và Hermione. Harry dần khám phá ra định mệnh của mình là phải đối đầu với Chúa tể Voldemort, kẻ đã giết cha mẹ cậu và đang âm mưu thống trị thế giới phù thủy.',
  worldSetting: 'Thế giới phù thủy tồn tại song song và bí mật với thế giới người thường (Muggles). Phù thủy sử dụng đũa phép để thi triển bùa chú. Trường Hogwarts là nơi đào tạo phù thủy trẻ, chia làm 4 nhà: Gryffindor, Slytherin, Ravenclaw và Hufflepuff.',
  characters: [
    { name: 'Harry Potter', role: 'Nhân vật chính', age: '17', description: 'Cậu bé sống sót, sở hữu vết sẹo hình tia chớp và khả năng xà ngữ. Anh là một phù thủy dũng cảm, trung thành, người định mệnh phải đối đầu và tiêu diệt Chúa tể Voldemort.' },
    { name: 'Hermione Granger', role: 'Bạn thân / Nữ chính', age: '17', description: 'Phù thủy thông minh nhất thế hệ, luôn chuẩn bị kỹ lưỡng và ham học hỏi. Cô là bộ não chiến thuật của nhóm bạn thân, luôn tìm ra giải pháp cho những tình huống ngặt nghèo.' },
    { name: 'Ron Weasley', role: 'Bạn thân', age: '17', description: 'Người bạn trung thành nhất của Harry, đến từ gia đình phù thủy thuần chủng lâu đời. Anh giỏi cờ phù thủy và luôn sát cánh bên Harry bất chấp mọi hiểm nguy.' },
    { name: 'Albus Dumbledore', role: 'Người dẫn dắt', age: '115', description: 'Hi hiệu trưởng trường Hogwarts, phù thủy vĩ đại nhất thời đại. Ông là người thông thái, điềm tĩnh và luôn âm thầm dẫn dắt Harry trong cuộc chiến chống lại cái ác.' },
    { 
      name: 'Severus Snape', 
      role: 'Giáo sư Độc dược', 
      age: '38', 
      description: 'Một giáo sư lạnh lùng, nghiêm khắc và luôn tỏ ra thù ghét Harry Potter. Anh là bậc thầy về Độc dược và Bế quan Bí thuật, luôn che giấu cảm xúc thật của mình sau một khuôn mặt không cảm xúc.',
      identities: [{
        name: 'Điệp viên nhị trùng / Người bảo vệ thầm lặng',
        role: 'Thành viên Hội Phượng Hoàng',
        description: 'Snape thực chất là một điệp viên nhị trùng làm việc cho Dumbledore để giám sát Voldemort. Mọi hành động của anh, dù có vẻ tàn nhẫn, đều nhằm mục đích bảo vệ Harry và thực hiện kế hoạch tiêu diệt Chúa tể Hắc ám vì tình yêu bất diệt dành cho Lily Potter.',
        isRevealed: false,
        type: IdentityType.FANFIC
      }]
    },
    { 
      name: 'Lord Voldemort', 
      role: 'Chúa tể Hắc ám', 
      age: '71', 
      description: 'Kẻ phản diện đáng sợ nhất thế giới phù thủy, kẻ đã chia tách linh hồn mình để đạt được sự bất tử. Hắn không có khả năng thấu hiểu tình yêu và luôn dùng sự sợ hãi để thống trị.',
      identities: [{
        name: 'Tom Marvolo Riddle',
        role: 'Học sinh xuất sắc của Hogwarts',
        description: 'Trước khi trở thành Voldemort, hắn là Tom Riddle, một nam sinh tài năng, quyến rũ nhưng đầy tham vọng của nhà Slytherin. Hắn đã dùng vẻ ngoài hoàn hảo của mình để che giấu bản chất đen tối và bắt đầu tìm kiếm các Trường Sinh Linh Giá ngay từ khi còn ở trường.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'Sirius Black', role: 'Cha đỡ đầu', age: '36', description: 'Cha đỡ đầu của Harry, một phù thủy mạnh mẽ, phóng khoáng. Ông từng bị oan sai và luôn yêu thương Harry như con đẻ, sẵn sàng hy sinh để bảo vệ anh.' },
    { name: 'Draco Malfoy', role: 'Đối thủ', age: '17', description: 'Đối thủ của Harry tại trường, xuất thân từ gia đình quý tộc thuần chủng kiêu ngạo. Anh mang trong mình nhiều áp lực từ gia đình và dần nhận ra sự tàn khốc của phe Hắc Ám.' },
    { name: 'Luna Lovegood', role: 'Đồng minh', age: '16', description: 'Một cô gái kỳ lạ, mơ mộng nhưng rất thông minh và có cái nhìn độc đáo về thế giới. Cô là người bạn chân thành, luôn ủng hộ Harry trong những lúc khó khăn nhất.' },
    { name: 'Neville Longbottom', role: 'Đồng minh / Anh hùng', age: '17', description: 'Một cậu bé nhút nhát nhưng dần trở nên dũng cảm phi thường. Anh đóng vai trò quan trọng trong cuộc chiến cuối cùng khi tiêu diệt con rắn Nagini.' },
    { name: 'Bellatrix Lestrange', role: 'Phản diện', age: '47', description: 'Tử thần Thực tử trung thành nhất của Voldemort, một phù thủy điên cuồng và tàn bạo, kẻ đã gây ra nhiều bi kịch cho gia đình Harry và bạn bè.' },
    { name: 'Minerva McGonagall', role: 'Giáo sư', age: '70', description: 'Chủ nhiệm nhà Gryffindor, một phù thủy nghiêm khắc nhưng công bằng và cực kỳ tài giỏi trong môn Biến hình.' },
    { name: 'Remus Lupin', role: 'Người dẫn dắt', age: '38', description: 'Một người sói hiền lành, giáo viên môn Phòng chống Nghệ thuật Hắc ám, người đã dạy Harry cách sử dụng bùa Hộ mệnh.' },
    { name: 'Nymphadora Tonks', role: 'Đồng minh', age: '25', description: 'Một Thần Sáng trẻ tuổi, có khả năng thay đổi hình dạng, tính cách vui vẻ và là thành viên tích cực của Hội Phượng Hoàng.' },
    { name: 'Fred Weasley', role: 'Đồng minh', age: '20', description: 'Anh trai của Ron, một thiên tài về các trò đùa ma thuật, luôn mang lại tiếng cười ngay cả trong những thời điểm đen tối nhất.' },
    { name: 'George Weasley', role: 'Đồng minh', age: '20', description: 'Anh em sinh đôi với Fred, cùng nhau điều hành cửa hàng Tiệm Giỡn của Nhà Weasley và chiến đấu dũng cảm chống lại Voldemort.' },
    { name: 'Ginny Weasley', role: 'Đồng minh / Tình cảm', age: '16', description: 'Em gái út nhà Weasley, một phù thủy mạnh mẽ, giỏi thể thao và sau này trở thành vợ của Harry Potter.' },
    { name: 'Molly Weasley', role: 'Gia đình', age: '48', description: 'Mẹ của Ron, một người phụ nữ gia đình ấm áp nhưng cực kỳ mạnh mẽ khi cần bảo vệ con cái và bạn bè.' },
    { name: 'Arthur Weasley', role: 'Gia đình', age: '50', description: 'Cha của Ron, làm việc tại Bộ Pháp thuật, luôn tò mò về thế giới Muggle và là một người cha mẫu mực.' },
    { name: 'Lucius Malfoy', role: 'Phản diện', age: '44', description: 'Cha của Draco, một Tử thần Thực tử quyền lực và kiêu ngạo, luôn tìm cách duy trì sự thuần chủng của dòng máu phù thủy.' },
    { name: 'Narcissa Malfoy', role: 'Nhân vật quan trọng', age: '42', description: 'Mẹ của Draco, dù thuộc phe Hắc Ám nhưng tình yêu dành cho con trai đã khiến bà có hành động cứu mạng Harry ở cuối truyện.' },
    { name: 'Cornelius Fudge', role: 'Nhân vật quan trọng', age: '60', description: 'Bộ trưởng Bộ Pháp thuật, một người bảo thủ và sợ hãi sự trở lại của Voldemort đến mức chối bỏ sự thật.' },
    { name: 'Dolores Umbridge', role: 'Phản diện', age: '50+', description: 'Thứ trưởng Bộ Pháp thuật, một người phụ nữ tàn nhẫn núp bóng dưới vẻ ngoài màu hồng và những quy tắc hà khắc.' },
    { 
      name: 'Dobby', 
      role: 'Gia tinh tự do', 
      age: 'Unknown', 
      description: 'Một gia tinh nhỏ bé với đôi mắt to tròn, luôn khao khát sự tự do và cực kỳ trung thành với Harry Potter. Dobby sẵn sàng làm mọi thứ, kể cả mạo hiểm mạng sống, để bảo vệ "Cậu chủ Harry".',
      identities: [{
        name: 'Người bảo vệ bí mật',
        role: 'Gia tinh nhà Malfoy (Cựu)',
        description: 'Trước khi được Harry giải phóng, Dobby là gia tinh của nhà Malfoy. Cậu đã bí mật cảnh báo Harry về những âm mưu hắc ám tại Hogwarts ngay từ năm học thứ hai, dù điều đó đồng nghĩa với việc cậu phải tự trừng phạt bản thân vì phản bội chủ nhân.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },
    { 
      name: 'Peter Pettigrew', 
      role: 'Tử thần Thực tử', 
      age: '38', 
      description: 'Một kẻ hèn nhát, phản bội bạn bè để đi theo Voldemort. Hắn là kẻ đã chỉ điểm nơi ở của gia đình Potter cho Chúa tể Hắc ám.',
      identities: [{
        name: 'Scabbers',
        role: 'Thú cưng của nhà Weasley',
        description: 'Dưới hình dạng một con chuột già mất một ngón chân, Peter đã lẩn trốn trong gia đình Weasley suốt 12 năm để chờ đợi ngày Voldemort trở lại, đồng thời trốn tránh sự truy đuổi của Sirius Black.',
        isRevealed: true,
        type: IdentityType.FANFIC
      }]
    },

    { name: 'Gilderoy Lockhart', role: 'Giáo sư / Phản diện', age: '30+', description: 'Một phù thủy nổi tiếng nhờ những cuốn sách về chiến tích giả mạo, thực chất là một kẻ hèn nhát giỏi bùa Lú.' },
    { name: 'Rubeus Hagrid', role: 'Người dẫn dắt', age: '60+', description: 'Người giữ khóa và giữ rừng của Hogwarts, một người khổng lồ lai hiền lành và cực kỳ yêu quý các sinh vật huyền bí.' },
    { name: 'Cedric Diggory', role: 'Đồng minh / Anh hùng', age: '17', description: 'Đại diện của nhà Hufflepuff trong cuộc thi Tam Pháp Thuật, một phù thủy tài năng và chính trực.' },
    { name: 'Cho Chang', role: 'Tình cảm', age: '17', description: 'Tầm thủ của nhà Ravenclaw, mối tình đầu của Harry, một cô gái xinh đẹp nhưng mang nhiều nỗi buồn sau cái chết của Cedric.' },
    { name: 'Viktor Krum', role: 'Đối thủ / Đồng minh', age: '18', description: 'Tầm thủ Quidditch nổi tiếng thế giới, đại diện của trường Durmstrang, người có tình cảm với Hermione.' },
    { name: 'Fleur Delacour', role: 'Đồng minh', age: '18', description: 'Đại diện của trường Beauxbatons, một phù thủy mang dòng máu tiên nữ (Veela) xinh đẹp và dũng cảm.' },
    { name: 'Aberforth Dumbledore', role: 'Đồng minh', age: '100+', description: 'Em trai của Albus Dumbledore, chủ quán Đầu Heo, người đã giúp đỡ Harry và các bạn thâm nhập vào Hogwarts.' }
  ]
};
