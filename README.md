# 🎮 Lật Hình Đôi Realtime

Một mini game lật hình đôi được xây dựng theo mô hình **Client-Server nhiều người chơi (Multi Client - Server)** sử dụng **Node.js + Socket.IO**.

---

## 📌 Tính năng chính

-  Giao diện bàn chơi động (sinh 4x4 thẻ random).
-  Lật hình theo thời gian thực giữa các người chơi.
-  Giao tiếp qua **Socket.IO** giữa client và server.
-  Mỗi người lật bài → tất cả người chơi cùng thấy cập nhật.
-  Kiểm tra trùng khớp, tính điểm và luân phiên lượt.

---

## 📌 Công nghệ sử dụng

| Thành phần        | Công nghệ                  |
|-------------------|----------------------------|
| Server            | Node.js + Express + Socket.IO |
| Client (UI)       | HTML + CSS + JavaScript    |
| Giao tiếp         | Socket.IO (realtime)       |
| Dữ liệu truyền     | JSON                       |

---

## 🧑‍💻 Cách tương tác với dự án

### 1. Clone & Run
```bash
git clone https://github.com/tqd-tech/Nhom8-LatHinhDoi.git
cd Nhom8-LatHinhDoi
npm install
node server/index.js
```
🚀 Server running on http://localhost:3000

### 2. Clone & Contribute
```bash
git clone https://github.com/tqd-tech/Nhom8-LatHinhDoi.git
cd Nhom8-LatHinhDoi
git checkout dev
git pull origin dev
git add .
git commit -m " Mô tả phần vừa làm"
git push origin dev
```
### 3. Quy tắc đặt tên commit
> Để mọi thành viên commit thống nhất và dễ đọc lịch sử Git, nhóm áp dụng quy tắc sau:
```bash
<loại commit>: <mô tả ngắn gọn>
```
- feat: Thêm chức năng kiểm tra 2 thẻ giống nhau
- fix: Sửa lỗi lật 3 thẻ cùng lúc
- style: Cải thiện giao diện hiệu ứng hover
- docs: Cập nhật README.md với hướng dẫn pull/push



