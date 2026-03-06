import { FanficWork } from '../types';
import { IdentityType } from '../../types';

export const kiSinhThu: FanficWork = {
  id: 'ki-sinh-thu',
  title: 'Kí Sinh Thú (Parasyte)',
  description: 'Một loài sinh vật ngoài hành tinh kí sinh vào não người để kiểm soát vật chủ. Shinichi Izumi may mắn chỉ bị kí sinh vào tay phải, từ đó bắt đầu cuộc chiến sinh tồn giữa người và kí sinh thú.',
  country: 'Nhật',
  plot: 'Những sinh vật nhỏ bé từ không gian rơi xuống Trái Đất, xâm nhập vào não bộ con người để chiếm quyền điều khiển cơ thể và ăn thịt đồng loại. Shinichi Izumi, một học sinh trung học, đã ngăn chặn được một con kí sinh xâm nhập vào não mình, khiến nó phải kí sinh vào tay phải của cậu. Cả hai buộc phải hợp tác để tồn tại khi những kí sinh thú khác coi họ là mối đe dọa.',
  worldSetting: 'Thế giới hiện đại tại Nhật Bản, nơi những vụ giết người hàng loạt bí ẩn bắt đầu xảy ra do sự xuất hiện của các sinh vật kí sinh.',
  characters: [
    { 
      name: 'Shinichi Izumi', 
      role: 'Nhân vật chính', 
      age: '17', 
      description: 'Một học sinh trung học bình thường nhưng sau khi bị Migi kí sinh, cậu trở nên mạnh mẽ, điềm tĩnh và có khả năng chiến đấu phi thường.',
      identities: [
        {
          name: 'Người lai Kí Sinh Thú',
          role: 'Chiến binh sinh tồn',
          description: 'Sự cộng sinh hoàn hảo giữa người và kí sinh thú.',
          isRevealed: false,
          type: IdentityType.FANFIC
        }
      ]
    },
    { 
      name: 'Migi', 
      role: 'Đồng hành / Tay phải', 
      age: 'Unknown', 
      description: 'Con kí sinh thú sống trong tay phải của Shinichi. Nó cực kỳ thông minh, lý trí và không có cảm xúc con người.',
      identities: [
        {
          name: 'Kí sinh thú tay phải',
          role: 'Vũ khí sống',
          description: 'Có khả năng biến hình thành các loại vũ khí sắc bén.',
          isRevealed: true,
          type: IdentityType.FANFIC
        }
      ]
    },
    { name: 'Satomi Murano', role: 'Nữ chính', age: '17', description: 'Bạn gái của Shinichi, người luôn lo lắng về sự thay đổi kỳ lạ của cậu.' },
    { name: 'Kana Kimishima', role: 'Nhân vật phụ', age: '17', description: 'Một cô gái có khả năng cảm nhận được sóng não của các kí sinh thú, cô bị thu hút bởi Shinichi.' },
    { 
      name: 'Reiko Tamura', 
      role: 'Phản diện / Nghiên cứu', 
      age: 'Unknown', 
      description: 'Một kí sinh thú cực kỳ thông minh, cô cố gắng tìm hiểu về sự tồn tại và mục đích của loài mình.',
      identities: [
        {
          name: 'Ryoko Tamiya',
          role: 'Giáo viên',
          description: 'Danh tính giả khi làm giáo viên tại trường của Shinichi.',
          isRevealed: true,
          type: IdentityType.FANFIC
        }
      ]
    },
    { name: 'Gotou', role: 'Phản diện chính', age: 'Unknown', description: 'Một thực thể kí sinh thú mạnh mẽ nhất, được tạo thành từ 5 kí sinh thú khác nhau trong một cơ thể.' },
    { name: 'Mr. A', role: 'Phản diện', age: 'Unknown', description: 'Một kí sinh thú hung hãn, kẻ đã tấn công trường học của Shinichi.' },
    { name: 'Hideo Shimada', role: 'Phản diện', age: 'Unknown', description: 'Kí sinh thú thâm nhập vào trường học dưới lốt học sinh để quan sát Shinichi.' },
    { name: 'Mamoru Uda', role: 'Đồng minh', age: '30', description: 'Một người đàn ông khác bị kí sinh vào hàm, anh trở thành đồng minh của Shinichi.' },
    { name: 'Jaw', role: 'Đồng hành của Uda', age: 'Unknown', description: 'Con kí sinh thú sống trong hàm của Uda.' },
    { name: 'Kazuyuki Izumi', role: 'Gia đình', age: '45', description: 'Cha của Shinichi, người phải đối mặt với nỗi đau mất vợ.' },
    { name: 'Nobuko Izumi', role: 'Gia đình', age: '42', description: 'Mẹ của Shinichi, bà bị một kí sinh thú giết hại và chiếm đoạt cơ thể.' },
    { name: 'Uragemi', role: 'Tội phạm / Hỗ trợ', age: '35', description: 'Một kẻ giết người hàng loạt có khả năng phân biệt người và kí sinh thú bằng mắt thường.' },
    { name: 'Hirama', role: 'Cảnh sát', age: '40', description: 'Thanh tra cảnh sát dẫn đầu cuộc điều tra về các vụ giết người do kí sinh thú gây ra.' },
    { name: 'Yamagishi', role: 'Quân đội', age: '45', description: 'Chỉ huy lực lượng đặc nhiệm trong chiến dịch tiêu diệt kí sinh thú tại tòa thị chính.' },
    { name: 'Takeshi Hirokawa', role: 'Phản diện / Chính trị gia', age: '50', description: 'Thị trưởng thành phố, người ủng hộ sự tồn tại của kí sinh thú để "thanh lọc" Trái Đất.' },
    { name: 'Miki', role: 'Phản diện', age: 'Unknown', description: 'Một trong những kí sinh thú trong cơ thể Gotou, có khả năng điều khiển tay phải.' },
    { name: 'Kusano', role: 'Phản diện', age: 'Unknown', description: 'Đồng bọn của Reiko Tamura, kẻ sau đó phản bội cô.' },
    { name: 'Yuko Tachikawa', role: 'Bạn bè', age: '17', description: 'Bạn của Satomi, người đã phát hiện ra bí mật của Hideo Shimada.' },
    { name: 'Akiho Suzuki', role: 'Bạn bè', age: '17', description: 'Bạn của Satomi và Yuko, một cô gái năng động.' }
  ]
};
