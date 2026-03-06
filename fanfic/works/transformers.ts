import { FanficWork } from '../types';
import { IdentityType } from '../../types';

export const transformers: FanficWork = {
  id: 'transformers',
  title: 'Transformers (Người máy biến hình)',
  description: 'Cuộc chiến giữa Autobots và Decepticons từ hành tinh Cybertron lan đến Trái Đất, nơi những người máy có khả năng biến hình thành các phương tiện giao thông.',
  country: 'Khác',
  plot: 'Cybertron, quê hương của các Transformers, bị tàn phá bởi cuộc nội chiến giữa hai phe Autobots (những người bảo vệ hòa bình) và Decepticons (những kẻ chinh phục). Cuộc chiến này lan rộng đến Trái Đất khi cả hai phe đều tìm kiếm AllSpark - nguồn năng lượng tối thượng. Sam Witwicky, một học sinh trung học, tình cờ phát hiện ra bí mật của các Autobots và trở thành đồng minh quan trọng của họ.',
  worldSetting: 'Thế giới hiện đại tại Mỹ, nơi các người máy khổng lồ ẩn mình dưới dạng các phương tiện giao thông như xe hơi, máy bay, xe tải.',
  characters: [
    { 
      name: 'Optimus Prime', 
      role: 'Lãnh đạo Autobots', 
      age: 'Triệu năm', 
      description: 'Vị chỉ huy dũng cảm, thông thái và đầy lòng nhân ái của phe Autobots. Ông luôn chiến đấu vì tự do của mọi sinh linh.',
      identities: [
        {
          name: 'Xe tải Peterbilt 379',
          role: 'Phương tiện giao thông',
          description: 'Hình dạng ẩn mình khi ở Trái Đất.',
          isRevealed: true,
          type: IdentityType.FANFIC
        }
      ]
    },
    { 
      name: 'Megatron', 
      role: 'Lãnh đạo Decepticons', 
      age: 'Triệu năm', 
      description: 'Kẻ độc tài tàn bạo, khao khát quyền lực tuyệt đối và muốn thống trị vũ trụ bằng sức mạnh quân sự.',
      identities: [
        {
          name: 'Máy bay phản lực Cybertronian',
          role: 'Phương tiện giao thông',
          description: 'Hình dạng chiến đấu trên không.',
          isRevealed: true,
          type: IdentityType.FANFIC
        }
      ]
    },
    { 
      name: 'Bumblebee', 
      role: 'Trinh sát Autobots', 
      age: 'Unknown', 
      description: 'Một chiến binh trẻ tuổi, nhiệt huyết và trung thành. Anh là người bạn thân thiết nhất của Sam Witwicky.',
      identities: [
        {
          name: 'Chevrolet Camaro',
          role: 'Phương tiện giao thông',
          description: 'Hình dạng ẩn mình màu vàng đặc trưng.',
          isRevealed: true,
          type: IdentityType.FANFIC
        }
      ]
    },
    { name: 'Sam Witwicky', role: 'Nhân vật chính (Người)', age: '18', description: 'Một thiếu niên bình thường nhưng nắm giữ chìa khóa để tìm ra AllSpark.' },
    { name: 'Mikaela Banes', role: 'Nữ chính (Người)', age: '18', description: 'Bạn gái của Sam, một cô gái mạnh mẽ và am hiểu về cơ khí.' },
    { name: 'Ironhide', role: 'Chuyên gia vũ khí Autobots', age: 'Unknown', description: 'Chiến binh kỳ cựu với kho vũ khí khổng lồ, luôn sẵn sàng cho mọi cuộc đối đầu.' },
    { name: 'Ratchet', role: 'Sĩ quan y tế Autobots', age: 'Unknown', description: 'Người chịu trách nhiệm sửa chữa và bảo trì cho các Autobots khác.' },
    { name: 'Jazz', role: 'Phó chỉ huy Autobots', age: 'Unknown', description: 'Một chiến binh phong cách, yêu thích văn hóa Trái Đất và rất nhanh nhẹn.' },
    { name: 'Starscream', role: 'Phó chỉ huy Decepticons', age: 'Unknown', description: 'Kẻ xảo quyệt, luôn âm mưu lật đổ Megatron để chiếm quyền lãnh đạo.' },
    { name: 'Soundwave', role: 'Sĩ quan liên lạc Decepticons', age: 'Unknown', description: 'Bậc thầy về gián điệp và thu thập thông tin, trung thành tuyệt đối với Megatron.' },
    { name: 'Shockwave', role: 'Nhà khoa học Decepticons', age: 'Unknown', description: 'Một thực thể logic, lạnh lùng và cực kỳ nguy hiểm với những phát minh chết người.' },
    { name: 'Grimlock', role: 'Lãnh đạo Dinobots', age: 'Unknown', description: 'Một chiến binh mạnh mẽ có khả năng biến hình thành khủng long bạo chúa T-Rex.' },
    { name: 'Barricade', role: 'Trinh sát Decepticons', age: 'Unknown', description: 'Kẻ săn đuổi tàn nhẫn, thường ẩn mình dưới dạng xe cảnh sát Saleen S281.' },
    { name: 'Blackout', role: 'Chiến binh Decepticons', age: 'Unknown', description: 'Một người máy khổng lồ có khả năng biến hình thành trực thăng vận tải MH-53 Pave Low.' },
    { name: 'Bonecrusher', role: 'Chiến binh Decepticons', age: 'Unknown', description: 'Kẻ căm ghét mọi thứ, biến hình thành xe bọc thép phá mìn Buffalo H.' },
    { name: 'Devastator', role: 'Hợp thể Decepticons', age: 'Unknown', description: 'Một thực thể khổng lồ được tạo thành từ sự kết hợp của nhiều Decepticons khác nhau.' },
    { name: 'Arcee', role: 'Chiến binh Autobots', age: 'Unknown', description: 'Nữ chiến binh dũng cảm, thường biến hình thành xe mô tô phân khối lớn.' },
    { name: 'Sideswipe', role: 'Chiến binh Autobots', age: 'Unknown', description: 'Bậc thầy cận chiến với đôi kiếm sắc bén, biến hình thành Chevrolet Corvette Stingray.' },
    { name: 'Drift', role: 'Chiến binh Autobots', age: 'Unknown', description: 'Một cựu Decepticon quay đầu, chiến đấu như một samurai với danh dự cao quý.' },
    { name: 'Hound', role: 'Chiến binh Autobots', age: 'Unknown', description: 'Chuyên gia về hỏa lực hạng nặng, luôn mang theo vô số súng đạn trên người.' }
  ]
};
