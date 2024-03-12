# PinCard - Hệ thống quản lý Task đơn giản và tiện lợi (giống Trello)

**PinCard** là hệ thống hỗ trợ tạo và quản lý các Task dưới dạng các card để thuận tiện tao tác (kanban board).

Để sử dụng hệ thống, người dùng trước tiên cần tạo tài khoản sau đó có thể tạo Board. Người dùng có thể tạo một hoặc nhiều Board. Các Board này sẽ chứa các Task (dưới dạng Card) và đặt trong các cột (Column).

### Board
- Thông tin cơ bản: Title và tổng số thành viên hiện có.
- Chứa một hoặc nhiều Column/List.
- Có thể có một hoặc nhiều thành viên.
- Chỉ có chủ Board được phép add/remove thành viên.
- Chỉ có chủ Board được phép tạo/edit/delete Board.
- Mỗi thành viên chỉ được phép tạo tối đa 5 Boards.
- Thành viên khi nhận lời mời (Invitation) có thể đồng ý hoặc từ chối. Sau khi đồng ý, thành viên mới chính thức có mặt trong Board.

### Column
- Thông tin cơ bản: Title và vị trí hiển thị (Display Position).
- Có thể chứa nhiều Card hoặc không có Card. Card hiển thị trên Column chỉ bao gồm một số thông tin cơ bản: Title, DueDate nếu có, Assignees nếu có, Comment Count nếu có, SubCard Count nếu có và trạng thái hoàn thành nếu có (FinishedStatus). 
- Có thể thay đổi vị trí hiển thị.
- Khi bị xoá, tất cả các Card hiện có sẽ bị xoá theo.
- Có thể dịch chuyển tất cả Card hiện có qua Column khác.
- Các thành viên đều có thể thay đổi thông tin Column.

### Card
- Thông tin:
  1. (Required) Title: tên card, ngắn gọn (<= 150 kí tự).
  2. (Required) Status: Active/Finished/Archived/Deleted.
  3. (Required) Creator: First Name, Last Name và Avatar.
  4. (Required) ColumnId: ID của Column chứa Card.
  5. (Required) ParentId: ID của Card cha.
  6. (Optional) DisplayPosition: Vị trí hiển thị trong Column.
  7. (Optional) Content: nội dung chi tiết công việc.
  8. (Optional) Assignees: Danh sách các thành viên được gán: First Name, Last Name và Avatar.
  9. (Optional) DueDate: hạn chót hoàn thành.
  10. (Optional) Các bộ đếm: số lượng Comment, số lượng SubCard.


Thiết kế hệ thống để phục vụ các nhu cầu trên.


