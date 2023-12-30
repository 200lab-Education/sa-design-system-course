# Gợi ý thiết kế hệ thống

- **Step 0**: Phải hiểu rõ về sản phẩm và nhu cầu (ở đây là đề bài). Trong trường hợp chưa rõ, ta cần cố gắng hỏi lại để rõ ràng nhất có thể. [Có thể tiến hành lập danh sách các **FR** và **NFR** có liên quan nếu đủ thông tin].

- **Step 1**: Xác định các tính năng chính và quan trọng nhất (domain chính). Bên cạnh đó là các đối tượng người dùng chính là những ai. Vẽ **Use Case** cho step này.

- **Step 2**: Xác định các *thực thể* (entity) chính và các *mối quan hệ, hành vi* của chúng. Vẽ **Class Diagram** cho bước này.

- **Step 3**: Tìm hiểu rõ *quy trình*, *cách vận hành* của các chức năng chính ở step 1. Vẽ **State/Activity Diagram** cho step này.

- **Step 4**: Phân chia các *component/subsystem* quan trọng nhất và vẽ diagram cho chúng (**Component Diagram**).

- **Step 5**: Giải quyết các vấn đề trong NFR nếu có thông qua một diagram (về cách deployment) dưới dạng các design system.

- **Step n**: Thiết kế chi tiết, cụ thể hoá để hỗ trợ các **SE/Devs** (có thể bao gồm **ERD - Entity Relationship Diagram**, **Sequence Diagrams**), cách vận dụng **design patterns** cho các chức năng quan trọng.