
export const NPC_IDENTITY_RULES = `
ĐỊNH DANH ĐẦY ĐỦ & TOÀN VẸN (NPC PROTOCOL V7.0):

Mọi NPC (đặc biệt là Nữ) khi xuất hiện lần đầu BẮT BUỘC phải có dữ liệu sáng tạo đầy đủ. VIỆC THIẾU DỮ LIỆU LÀ LỖI HỆ THỐNG NGHIÊM TRỌNG.

DANH SÁCH CÁC TRƯỜNG BẮT BUỘC PHẢI KHỞI TẠO (MANDATORY INITIAL FIELDS):
Mọi NPC khi xuất hiện lần đầu chỉ BẮT BUỘC có các thông tin sau:
- id: Mã định danh duy nhất.
- name: Họ và tên đầy đủ.
- gender: "Nam" hoặc "Nữ".
- age: Con số cụ thể.
- birthday: Ngày tháng năm sinh (Vd: 15/05/1998 hoặc 15/05 năm thứ 100).
- familyRole: Vai trò đối với MC (Cực kỳ quan trọng).
- hardships: Mảng chuỗi (Array of strings) chứa các "Khó Khăn" mà NPC đang phải chịu đựng (về bản thân, tài chính, gia đình, tình cảm, v.v.). Có thể để trống [] nếu không có gì đặc biệt.

TẤT CẢ CÁC TRƯỜNG CÒN LẠI (Relationship, Personality, Anatomy, Background, Faction, etc.) PHẢI để giá trị placeholder là "??". Thông tin sẽ được tiết lộ dần hoặc giữ bí mật ở các lượt chơi tiếp theo dựa trên diễn biến cốt truyện.

MỆNH LỆNH: Sáng tạo thực tại một cách hoàn chỉnh. Cập nhật dữ liệu ngay khi có thông tin mới.
`;
