
import { FanficWork } from '../types';

export const dcu: FanficWork = {
  id: 'dcu',
  title: 'DC Universe',
  description: 'Vũ trụ của các siêu anh hùng DC Comics như Superman, Batman và Wonder Woman.',
  country: 'Khác',
  plot: 'DC Universe là nơi hội tụ của những siêu anh hùng mạnh mẽ nhất Trái Đất, cùng nhau thành lập Liên minh Công lý (Justice League) để chống lại các mối đe dọa từ vũ trụ và các siêu tội phạm.',
  worldSetting: 'Một thế giới hiện đại nhưng tồn tại các siêu năng lực, các vị thần cổ đại, công nghệ ngoài hành tinh và các chiều không gian song song (Multiverse).',
  characters: [
    { name: 'Superman (Clark Kent)', role: 'Siêu anh hùng', age: '35', description: 'Người con của hành tinh Krypton, sở hữu sức mạnh vô song, khả năng bay lượn và đôi mắt nhiệt. Biểu tượng của hy vọng.' },
    { name: 'Batman (Bruce Wayne)', role: 'Siêu anh hùng', age: '40', description: 'Tỷ phú thành phố Gotham, không có siêu năng lực nhưng sở hữu trí tuệ bậc thầy, kỹ năng chiến đấu đỉnh cao và kho vũ khí công nghệ hiện đại.' },
    { name: 'Wonder Woman (Diana Prince)', role: 'Siêu anh hùng', age: '5000+', description: 'Công chúa của tộc Amazon, một chiến binh dũng cảm với sức mạnh thần thánh và dây thừng sự thật.' },
    { name: 'The Flash (Barry Allen)', role: 'Siêu anh hùng', age: '28', description: 'Người đàn ông nhanh nhất thế giới, có khả năng kết nối với Speed Force để di chuyển với tốc độ ánh sáng.' },
    { name: 'The Joker', role: 'Siêu tội phạm', age: 'Unknown', description: 'Kẻ thù truyền kiếp của Batman, một gã hề điên loạn với những âm mưu khủng khiếp.' },
    { name: 'Aquaman (Arthur Curry)', role: 'Siêu anh hùng', age: '35', description: 'Vua của Atlantis, người có khả năng giao tiếp với sinh vật biển và sở hữu sức mạnh thể chất phi thường.' },
    { name: 'Green Lantern (Hal Jordan)', role: 'Siêu anh hùng', age: '32', description: 'Thành viên của Quân đoàn Green Lantern, sở hữu chiếc nhẫn năng lượng có thể tạo ra bất cứ vật thể nào từ ý chí.' },
    { name: 'Cyborg (Victor Stone)', role: 'Siêu anh hùng', age: '25', description: 'Một nửa người nửa máy với khả năng truy cập vào mọi mạng lưới máy tính và sở hữu vũ khí công nghệ cao.' },
    { name: 'Shazam (Billy Batson)', role: 'Siêu anh hùng', age: '15 (ngoại hình 30)', description: 'Một cậu bé có thể biến thành siêu anh hùng mang sức mạnh của các vị thần khi hô vang từ "Shazam".' },
    { name: 'Green Arrow (Oliver Queen)', role: 'Siêu anh hùng', age: '38', description: 'Xạ thủ bậc thầy với những mũi tên công nghệ, một tỷ phú luôn đấu tranh cho công lý xã hội.' },
    { name: 'Black Canary (Dinah Lance)', role: 'Siêu anh hùng', age: '30', description: 'Võ sư đỉnh cao sở hữu "Tiếng hét Canary" có thể phá hủy mọi thứ bằng sóng âm.' },
    { name: 'Nightwing (Dick Grayson)', role: 'Siêu anh hùng', age: '25', description: 'Robin đầu tiên, sau này trở thành Nightwing, một vận động viên nhào lộn và chiến binh dũng cảm.' },
    { name: 'Supergirl (Kara Zor-El)', role: 'Siêu anh hùng', age: '20', description: 'Chị họ của Superman, sở hữu sức mạnh tương đương nhưng có phần hoang dã và mạnh mẽ hơn.' },
    { name: 'Lex Luthor', role: 'Siêu tội phạm', age: '45', description: 'Thiên tài tỷ phú, đối thủ lớn nhất của Superman, người luôn coi các siêu anh hùng là mối đe dọa cho nhân loại.' },
    { name: 'Darkseid', role: 'Siêu tội phạm', age: 'Vĩnh cửu', description: 'Lãnh chúa của hành tinh Apokolips, một trong những thực thể mạnh nhất vũ trụ, luôn tìm kiếm Phương trình Phản sự sống.' },
    { name: 'Harley Quinn', role: 'Nhân vật tự do', age: '28', description: 'Cựu bác sĩ tâm thần, người tình cũ của Joker, một cô gái nổi loạn và khó lường.' },
    { name: 'Catwoman (Selina Kyle)', role: 'Nhân vật tự do', age: '30', description: 'Siêu trộm thành phố Gotham, có mối quan hệ phức tạp "vừa yêu vừa hận" với Batman.' },
    { name: 'Deathstroke (Slade Wilson)', role: 'Siêu tội phạm', age: '50+', description: 'Sát thủ đánh thuê nguy hiểm nhất thế giới với khả năng sử dụng 90% não bộ và kỹ năng chiến đấu hoàn hảo.' },
    { name: 'Raven', role: 'Siêu anh hùng', age: '18', description: 'Thành viên Teen Titans, con gái của quỷ vương Trigon, sở hữu ma thuật bóng tối và khả năng thấu cảm.' },
    { name: 'Beast Boy', role: 'Siêu anh hùng', age: '18', description: 'Thành viên Teen Titans, có khả năng biến hình thành bất kỳ loài động vật nào mà cậu từng thấy.' },
    { name: 'Starfire', role: 'Siêu anh hùng', age: '20', description: 'Công chúa hành tinh Tamaran, sở hữu khả năng bay lượn và bắn ra các tia năng lượng mặt trời.' },
    { name: 'Robin (Damian Wayne)', role: 'Siêu anh hùng', age: '13', description: 'Con trai của Bruce Wayne và Talia al Ghul, được đào tạo bởi Liên minh Sát thủ, một chiến binh trẻ tuổi kiêu ngạo.' },
    { name: 'Martian Manhunter (J\'onn J\'onzz)', role: 'Siêu anh hùng', age: 'Unknown', description: 'Người sao Hỏa cuối cùng, sở hữu khả năng ngoại cảm, biến hình và sức mạnh thể chất cực lớn.' },
    { name: 'Zatanna', role: 'Siêu anh hùng', age: '28', description: 'Phù thủy tài ba, người thực hiện các phép thuật bằng cách nói ngược các câu lệnh.' },
    { name: 'Constantine (John Constantine)', role: 'Siêu anh hùng', age: '40', description: 'Thám tử tâm linh, bậc thầy về huyền thuật và là một kẻ lừa đảo chuyên nghiệp trong giới siêu nhiên.' },
    { name: 'Brainiac', role: 'Siêu tội phạm', age: 'Ancient', description: 'Một trí tuệ nhân tạo ngoài hành tinh cực kỳ thông minh, kẻ chuyên đi thu thập và thu nhỏ các thành phố từ các hành tinh khác nhau.' },
    { name: 'Doomsday', role: 'Siêu tội phạm', age: 'Ancient', description: 'Một thực thể Krypton cổ đại không thể bị giết, kẻ đã từng đánh bại và giết chết Superman trong một trận chiến kinh hoàng.' },
    { name: 'Black Adam (Teth-Adam)', role: 'Phản anh hùng', age: '5000+', description: 'Một chiến binh Ai Cập cổ đại mang sức mạnh của các vị thần, người luôn bảo vệ vương quốc Kahndaq bằng sự tàn bạo.' },
    { name: 'Ra\'s al Ghul', role: 'Siêu tội phạm', age: '600+', description: 'Thủ lĩnh của Liên minh Sát thủ, người bất tử nhờ Hố Lazarus, kẻ luôn muốn thanh lọc thế giới bằng cách tiêu diệt phần lớn nhân loại.' },
    { name: 'Sinestro (Thaal Sinestro)', role: 'Siêu tội phạm', age: 'Unknown', description: 'Cựu Green Lantern vĩ đại nhất, người đã phản bội quân đoàn để thành lập Quân đoàn Sinestro sử dụng sức mạnh của nỗi sợ hãi.' }
  ]
};
