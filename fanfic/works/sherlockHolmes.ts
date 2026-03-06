import { FanficWork } from '../types';
import { IdentityType } from '../../types';

export const sherlockHolmes: FanficWork = {
  id: 'sherlock-holmes',
  title: 'Sherlock Holmes',
  description: 'Vị thám tử tài ba nhất mọi thời đại với khả năng quan sát và suy luận logic siêu phàm.',
  country: 'Khác',
  plot: 'Sherlock Holmes là một thám tử tư sống tại số 221B phố Baker, London. Cùng với người bạn thân là bác sĩ Watson, ông đã giải quyết vô số vụ án hóc búa mà cảnh sát Scotland Yard phải bó tay. Các vụ án thường bắt đầu từ những chi tiết nhỏ nhặt nhất mà người thường bỏ qua, dẫn đến những kết luận bất ngờ và chính xác.',
  worldSetting: 'London thời kỳ Victoria cuối thế kỷ 19, một thành phố sương mù với những góc khuất tội phạm và sự phân hóa giàu nghèo sâu sắc.',
  characters: [
    { 
      name: 'Sherlock Holmes', 
      role: 'Nhân vật chính', 
      age: '30-60', 
      description: 'Thám tử tư tại số 221B phố Baker, thông minh kiệt xuất, có tính cách lập dị và khả năng quan sát, suy luận logic siêu phàm.',
      identities: [{
        name: 'Bậc thầy cải trang (Captain Basil / Sigerson)',
        role: 'Điệp viên / Kẻ ẩn danh',
        description: 'Holmes thường xuyên sử dụng các danh tính giả để thâm nhập vào giới tội phạm hoặc thu thập tin tức mà không bị phát hiện. Ông có thể biến thành một thủy thủ già (Captain Basil), một linh mục, hay thậm chí là một nhà thám hiểm người Na Uy (Sigerson) trong suốt 3 năm "mất tích" sau sự kiện tại thác Reichenbach.',
        isRevealed: false,
        type: IdentityType.FANFIC
      }]
    },
    { name: 'John Watson', role: 'Bạn đồng hành / Người kể chuyện', age: '30-60', description: 'Bác sĩ quân y giải ngũ, người bạn trung thành và là người ghi chép lại các vụ án của Holmes. Anh là cầu nối giữa trí tuệ của Holmes và thế giới thực.' },
    { name: 'James Moriarty', role: 'Phản diện chính', age: '50+', description: 'Giáo sư toán học, "Napoleon của tội phạm", đối thủ xứng tầm duy nhất của Sherlock Holmes, kẻ đứng sau mạng lưới tội phạm khổng lồ.' },
    { name: 'Irene Adler', role: 'Nhân vật quan trọng', age: '30', description: 'Một nữ ca sĩ opera thông minh và quyến rũ, người phụ nữ duy nhất từng đánh bại Holmes trong một vụ án và được ông gọi là "Người Phụ Nữ".' },
    { name: 'Mycroft Holmes', role: 'Hỗ trợ', age: '40-70', description: 'Anh trai của Sherlock, sở hữu khả năng suy luận còn vượt xa em trai mình nhưng lại lười vận động và làm việc cho chính phủ Anh.' },
    { name: 'Lestrade', role: 'Đồng minh', age: '40-50', description: 'Thanh tra cảnh sát Scotland Yard, thường xuyên nhờ đến sự giúp đỡ của Holmes trong các vụ án hóc búa dù đôi khi có chút đố kỵ.' },
    { name: 'Mrs. Hudson', role: 'Hỗ trợ', age: '60+', description: 'Chủ nhà trọ tại số 221B phố Baker, người luôn chăm sóc và chịu đựng những thói quen kỳ quặc của Holmes.' },
    { name: 'Mary Morstan', role: 'Hỗ trợ', age: '25-30', description: 'Vợ của bác sĩ Watson, một người phụ nữ thông minh và điềm tĩnh, người đã đưa Watson và Holmes vào vụ án "Dấu bộ tứ".' },
    { name: 'Sebastian Moran', role: 'Phản diện', age: '50+', description: 'Cánh tay phải của Moriarty, một tay súng bắn tỉa nguy hiểm và là kẻ thù đáng sợ của Holmes sau cái chết của giáo sư.' },
    { name: 'Wiggins', role: 'Đồng minh', age: '12-15', description: 'Thủ lĩnh của đội quân thám tử nhí phố Baker, những đứa trẻ đường phố giúp Holmes thu thập thông tin bí mật.' },
    { name: 'Toby', role: 'Đồng minh (Động vật)', age: 'Unknown', description: 'Một chú chó lai với khả năng đánh hơi tuyệt vời, thường xuyên giúp Holmes lần theo dấu vết tội phạm.' },
    { name: 'Charles Augustus Milverton', role: 'Phản diện', age: '50', description: 'Kẻ tống tiền nguy hiểm nhất London, kẻ mà Holmes coi là sinh vật ghê tởm nhất mà ông từng đối mặt.' },
    { name: 'Vua xứ Bohemia', role: 'Hỗ trợ', age: '40', description: 'Vị khách hàng cao quý trong vụ án "Vụ bê bối ở xứ Bohemia", người đã thuê Holmes lấy lại bức ảnh từ Irene Adler.' },
    { name: 'Helen Stoner', role: 'Hỗ trợ', age: '25', description: 'Nạn nhân trong vụ án "Dải băng lốm đốm", người đã tìm đến Holmes trong sự sợ hãi tột cùng về người cha dượng độc ác.' },
    { name: 'Đại tá James Barclay', role: 'Nhân vật quan trọng', age: '50', description: 'Nhân vật trung tâm trong vụ án "Người thọt", một câu chuyện bi kịch về tình yêu và sự phản bội kéo dài nhiều thập kỷ.' },
    { name: 'Giáo sư Coram', role: 'Phản diện', age: '60', description: 'Một học giả già nua trong vụ án "Chiếc kẹp mũi vàng", người che giấu một bí mật chính trị đen tối từ quá khứ.' },
    { name: 'Billy', role: 'Hỗ trợ', age: '15', description: 'Cậu bé giúp việc tận tụy tại số 221B phố Baker, người thường xuyên giúp Holmes tiếp đón khách hàng và thực hiện các nhiệm vụ nhỏ.' },
    { name: 'Langdale Pike', role: 'Hỗ trợ', age: '50', description: 'Một chuyên gia về tin đồn và các vụ bê bối trong giới thượng lưu, nguồn cung cấp thông tin xã hội quan trọng cho Holmes.' },
    { name: 'Shinwell Johnson', role: 'Đồng minh', age: '40', description: 'Một cựu tội phạm đã cải tà quy chính, người giúp Holmes thâm nhập vào thế giới ngầm của London.' },
    { name: 'Stanley Hopkins', role: 'Đồng minh', age: '30', description: 'Một thanh tra trẻ đầy triển vọng của Scotland Yard, người luôn ngưỡng mộ và học hỏi các phương pháp của Holmes.' },
    { name: 'Kitty Winter', role: 'Hỗ trợ', age: '25', description: 'Một người phụ nữ dũng cảm và mang lòng thù hận sâu sắc với Milverton, người đã giúp Holmes trong vụ án đối đầu với kẻ tống tiền này.' },
    { name: 'Von Bork', role: 'Phản diện', age: '40', description: 'Một điệp viên Đức tài ba trong vụ án "Cung đàn sau cuối", người đã bị Holmes lừa và bắt giữ ngay trước khi Thế chiến I bùng nổ.' },
    { name: 'Garrideb', role: 'Nhân vật quan trọng', age: '60', description: 'Nhân vật chính trong vụ án "Ba người nhà Garrideb", một câu chuyện về sự lừa đảo tinh vi nhằm chiếm đoạt tài sản.' },
    { name: 'Dr. Grimesby Roylott', role: 'Phản diện', age: '50', description: 'Kẻ thủ ác trong vụ án "Dải băng lốm đốm", một bác sĩ tàn bạo với những con thú hoang dã và âm mưu giết con riêng của vợ.' },
    { name: 'Jefferson Hope', role: 'Phản diện', age: '40', description: 'Kẻ sát nhân trong vụ án đầu tiên "Chiếc nhẫn tình cờ", người đã thực hiện cuộc trả thù kéo dài hàng thập kỷ từ Mỹ sang Anh.' },
    { name: 'Enoch Drebber', role: 'Nạn nhân', age: '40', description: 'Nạn nhân trong vụ án "Chiếc nhẫn tình cờ", một kẻ tội lỗi bị truy đuổi bởi quá khứ đen tối của mình.' },
    { name: 'Joseph Stangerson', role: 'Nạn nhân', age: '40', description: 'Thư ký và là đồng bọn của Drebber, người cũng phải chịu kết cục bi thảm dưới tay Jefferson Hope.' },
    { name: 'Jonathan Small', role: 'Phản diện / Nhân vật quan trọng', age: '50', description: 'Một trong "Bộ tứ" trong vụ án "Dấu bộ tứ", người đã đánh cắp kho báu Agra và mang theo nỗi hận thù sâu sắc.' },
    { name: 'Tonga', role: 'Phản diện', age: '20', description: 'Người thổ dân trung thành của Jonathan Small, một tay súng thổi tiêu cực kỳ nguy hiểm.' },
    { name: 'Bartholomew Sholto', role: 'Nạn nhân', age: '35', description: 'Con trai của Đại tá Sholto, người đã tìm thấy kho báu và bị giết hại một cách bí ẩn.' },
    { name: 'Thaddeus Sholto', role: 'Khách hàng', age: '35', description: 'Anh trai sinh đôi của Bartholomew, một người kỳ quặc nhưng lương thiện, người đã mời Holmes vào cuộc.' },
    { name: 'Major Sholto', role: 'Nhân vật quan trọng', age: '60', description: 'Cha của anh em nhà Sholto, người đã phản bội đồng đội để chiếm đoạt kho báu Agra.' },
    { name: 'Captain Morstan', role: 'Nhân vật quan trọng', age: '50', description: 'Cha của Mary Morstan, người đã mất tích một cách bí ẩn sau khi trở về từ Ấn Độ.' }
  ]
};
