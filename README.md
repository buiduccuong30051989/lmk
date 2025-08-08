# Sổ tay sức khỏe - Health Handbook

Một ứng dụng web hiển thị ghi chép kinh nghiệm chữa bệnh, phòng bệnh và sống lành mạnh.

## 🎯 Tính năng

- **30+ bài viết y tế** được phân loại theo 9 chủ đề
- **Tính năng tìm kiếm** nhanh chóng và chính xác
- **Giao diện thân thiện** với menu điều hướng dễ sử dụng
- **Thiết kế responsive** hoạt động tốt trên mọi thiết bị
- **Animations mượt mà** với GSAP
- **UI components đẹp** với shadcn/ui và Tailwind CSS

## 📋 Nội dung bao gồm (30 bài viết)

### 🌡️ Dị ứng & Viêm nhiễm (5 bài)
- Bệnh dị ứng thời tiết
- Viêm bờ mi, giác mạc dị ứng  
- Viêm do virus Herpes
- Bệnh Zona thần kinh
- Viêm họng & Ho

### ❤️ Tim mạch & Huyết áp (8 bài)
- Bệnh Động Mạch Vành
- Cấp cứu đau thắt ngực
- Tụt huyết áp
- 10 Dấu hiệu đột quỵ
- Chăm sóc tim mạch
- 10 Thói quen tốt cho tim
- 10 thói quen xấu gây hại cho tim
- Cấp cứu & Xử lý bệnh tim

### 🫁 Hô hấp (2 bài)
- Bệnh cúm mùa
- Bệnh cảm lạnh

### 🍽️ Tiêu hóa & Dưỡng sinh (2 bài)
- Rối loạn tiêu hóa & Tiêu chảy
- Dưỡng Tỳ Vị

### 🧠 Thần kinh & Não bộ (2 bài)
- Bệnh rối loạn tiền đình
- Ba bước giúp não bộ tốt, dễ ngủ

### 🩺 Tiết niệu (1 bài)
- Viêm tuyến tiền liệt

### 🥗 Dinh dưỡng & Thực phẩm (5 bài)
- Thực phẩm giàu Protein cho người già
- Nước hồng sâm Hàn Quốc
- 10 loại rau người già hạn chế ăn
- 7 loại thực phẩm giúp cơ chân khỏe
- Trái cây tốt cho xương khớp

### 🧘‍♂️ Sống khỏe & Phòng bệnh (4 bài)
- Dưỡng khí
- Thể Hàn & Dưỡng khí
- 5 Cách phòng chống COVID-19
- Cách sống giữ cơ thể khỏe mạnh

### 🌿 Bài thuốc & Phương pháp (1 bài)
- Chườm tê tay, chân, gai chân

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js (v18 trở lên)
- pnpm (khuyên dùng)

### Các bước cài đặt

1. **Cài đặt dependencies:**
```bash
pnpm install
```

2. **Chạy development server:**
```bash
pnpm dev
```

### ⚠️ Lưu ý JSX Files
Các file trong `src/data/` sử dụng extension `.jsx` vì chứa JSX syntax. Nếu gặp lỗi parse, hãy đảm bảo các file này có đúng extension `.jsx`.

3. **Mở trình duyệt và truy cập:**
```
http://localhost:5173
```

## 🛠️ Tech Stack

### Core
- **React 18** với TypeScript
- **Vite** cho development và build nhanh

### Styling & UI
- **Tailwind CSS** - utility-first CSS framework
- **SCSS** - custom styles và mixins
- **shadcn/ui** - components đẹp và accessible

### Code Quality
- **Biome** - linting và formatting nhanh
- **Prettier** - formatting nhất quán
- **TypeScript** - type safety

### Animation
- **GSAP** - animations mượt mà

## 📁 Cấu trúc dự án

```
src/
├── components/          # Reusable components
│   └── ui/             # shadcn/ui components
├── data/               # Data files chứa nội dung các trang
│   ├── masterData1.jsx  # Trang 1-5
│   ├── masterData2.jsx  # Trang 6-10
│   ├── masterData3.jsx  # Trang 11-15
│   ├── masterData4.jsx  # Trang 16-20
│   ├── masterData5.jsx  # Trang 21-25
│   ├── masterData6.jsx  # Trang 26-30
│   └── masterData.jsx   # File tổng hợp
├── lib/                # Utility functions
├── styles/             # Global styles và SCSS
└── App.tsx             # Main app component
```

## 🎨 Cách sử dụng

1. **Mở menu:** Click vào nút menu ở góc trái trên
2. **Tìm kiếm:** Gõ từ khóa vào ô tìm kiếm để tìm bài viết
3. **Chọn chủ đề:** Click vào một category để mở rộng
4. **Đọc bài viết:** Click vào tiêu đề bài viết để xem nội dung
5. **Điều hướng:** Dễ dàng chuyển đổi giữa các bài viết

## ✨ Các tính năng nổi bật

### 🔍 Tìm kiếm thông minh
- Tìm kiếm theo tiêu đề bài viết
- Hiển thị kết quả realtime
- Dễ dàng điều hướng đến bài viết

### 📊 Thống kê tổng quan
- Hiển thị tổng số bài viết (30)
- Phân chia theo chủ đề (9 categories)
- Thống kê số lượng bài viết mỗi chủ đề

### 🎨 Giao diện đẹp mắt
- Design hiện đại với gradient backgrounds
- Icons phù hợp cho từng chủ đề
- Color coding cho các danh mục
- Animations mượt mà với GSAP

### 📱 Responsive Design
- Hoạt động tốt trên desktop, tablet, mobile
- Menu sidebar thích ứng với màn hình nhỏ
- Layout linh hoạt

## ⚠️ Lưu ý quan trọng

**Thông tin trong ứng dụng này chỉ mang tính chất tham khảo và chia sẻ kinh nghiệm cá nhân. Luôn tham khảo ý kiến bác sĩ chuyên khoa trước khi áp dụng bất kỳ phương pháp điều trị nào.**

## 🔧 Scripts có sẵn

```bash
# Chạy development server
pnpm dev

# Build production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Check code quality
pnpm check
```

## 📝 Thêm nội dung mới

Để thêm bài viết mới:

1. Tạo component JSX trong file `masterDataX.js` tương ứng
2. Thêm thông tin trang vào array `pagesGroupX`
3. Cập nhật `masterData.js` để bao gồm trang mới
4. Thêm vào category phù hợp trong `pageCategories`

### Cấu trúc một trang mới:

```jsx
export const pageXX = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-3">
        🏥 Tiêu đề bài viết
      </h1>
      {/* Nội dung bài viết */}
    </div>
  </div>
);
```

## 🎯 Roadmap

- [ ] Thêm tính năng bookmark bài viết yêu thích
- [ ] Export bài viết ra PDF
- [ ] Dark mode
- [ ] Offline reading với Service Worker
- [ ] Thêm comments/notes cá nhân
- [ ] Voice search

## 🤝 Contributing

Mọi đóng góp đều được hoan nghênh! Vui lòng:

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

MIT License - Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 🏆 Achievements

- ✅ **30 bài viết** hoàn chỉnh từ kinh nghiệm thực tế
- ✅ **9 chủ đề** được phân loại khoa học
- ✅ **Tìm kiếm realtime** nhanh chóng
- ✅ **Responsive design** hoàn hảo
- ✅ **Clean code** với TypeScript + Biome
- ✅ **Modern UI** với Tailwind + shadcn/ui
- ✅ **Smooth animations** với GSAP

---

**"Sức khỏe là tài sản quý giá nhất!"** 🌟

*Được xây dựng với ❤️ bằng React + Vite*
