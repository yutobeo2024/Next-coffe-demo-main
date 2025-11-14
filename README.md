# 🚀 GoalPÓ - Hệ thống quản lý bán hàng

![GoalPÓ Banner](./public/logo1.png)
sd
## 📋 Giới thiệu

**GoalPÓ** là hệ thống quản lý bán hàng (Point of Sale) toàn diện được thiết kế dành riêng cho các cửa hàng F&B như nhà hàng, quán cafe, và các cơ sở kinh doanh thức ăn nước uống. Hệ thống được xây dựng với công nghệ hiện đại, giao diện thân thiện và tích hợp đầy đủ các tính năng cần thiết cho việc quản lý kinh doanh hiệu quả.
12
## ✨ Tính năng chính12
1212
### 🛍️ POS Bán hàng
- **Giao diện trực quan**: Thiết kế responsive, thân thiện trên mọi thiết bị
- **Bán hàng nhanh chóng**: Quy trình thanh toán tối ưu với phím tắt
- **Đa phương thức thanh toán**: Tiền mặt, chuyển khoản, thẻ, VietQR
- **Quản lý bàn**: Theo dõi trạng thái và chuyển đổi bàn linh hoạt
- **In hóa đơn tự động**: Mẫu in tùy chỉnh cho POS và bếp
12
### 👥 Quản lý khách hàng12`3
- **Phân loại khách hàng**: Khách thường, VIP, Kim cương
- **Ưu đãi tự động**: Giảm giá theo hạng khách hàng (10-20%)
- **Điểm tích lũy**: Hệ thống tích điểm và quản lý khách hàng thân thiết
- **Lịch sử mua hàng**: Theo dõi chi tiết giao dịch
12
### 🍽️ Quản lý Menu & Sản phẩm
- **Danh mục sản phẩm**: Tổ chức menu theo categories
- **Quản lý nguyên liệu**: Theo dõi kho, cảnh báo hết hàng
- **Cấu hình định mức**: Tính toán nguyên liệu cho từng sản phẩm
- **Máy tính định mức**: Công cụ hỗ trợ tính toán tự động

### 📊 Báo cáo & Thống kê
- **Dashboard tổng quan**: Biểu đồ doanh thu, xu hướng kinh doanh
- **Báo cáo bán hàng**: Thống kê chi tiết theo thời gian
- **Top sản phẩm**: Phân tích món bán chạy
- **Hiệu suất nhân viên**: Đánh giá KPI và năng suất

### ⚙️ Quản lý hệ thống12
- **Phân quyền người dùng**: Admin, Manager, Nhân viên
- **Cài đặt mẫu in**: Tùy chỉnh hóa đơn, receipt template
- **Sao lưu dữ liệu**: Backup và restore tự động
- **Đồng bộ realtime**: Cập nhật dữ liệu trên nhiều thiết bị

## 🛠️ Công nghệ sử dụng

### Frontend
- **Next.js 14** - React framework với App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icon library

### UI/UX
- **Responsive Design** - Tối ưu cho mọi thiết bị
- **Dark/Light Mode** - Chế độ giao diện linh hoạt
- **Animation** - Smooth transitions và micro-interactions
- **Accessibility** - Tuân thủ WCAG guidelines

### Features
- **Real-time Updates** - Đồng bộ dữ liệu tức thì
- **Offline Support** - Hoạt động khi mất mạng
- **PWA Ready** - Progressive Web App capabilities
- **Print Integration** - Tích hợp in hóa đơn

## 🚀 Hướng dẫn cài đặt

### Yêu cầu hệ thống
- Node.js 18.0 hoặc cao hơn
- npm hoặc yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Cài đặt

1. **Clone repository**
```bash
git clone https://github.com/GoalCrmApp/GoalPÓ.git
cd GoalPÓ
```

2. **Cài đặt dependencies**
```bash
npm install
# hoặc
yarn install
```

3. **Cấu hình environment**
```bash
cp .env.example .env.local
# Chỉnh sửa các biến môi trường trong .env.local
```

4. **Chạy development server**
```bash
npm run dev
# hoặc
yarn dev
```

5. **Truy cập ứng dụng**
Mở trình duyệt và truy cập: `http://localhost:3000`

## 🔧 Khắc phục lỗi thường gặp

### Lỗi Serverless Environment

**Lỗi:** `ENOENT: no such file or directory, mkdir '/var/task/data'`

**Nguyên nhân:** Ứng dụng đang chạy trong môi trường serverless (Vercel, AWS Lambda) nơi không thể tạo thư mục trong `/var/task/`.

**Giải pháp:** Hệ thống đã được cập nhật để tự động phát hiện môi trường serverless và sử dụng thư mục `/tmp` thay thế.

**Chi tiết:** Xem file `docs/serverless-compatibility.md` để biết thêm thông tin.

### Lỗi khác

Nếu gặp lỗi khác, vui lòng kiểm tra:
- Console logs trong browser
- Terminal logs khi chạy development server
- File `docs/` để xem hướng dẫn chi tiết

### Build cho production
```bash
npm run build
npm start
```

## 📱 Giao diện & Screenshots

### Dashboard
![Dashboard](./docs/screenshots/dashboard.png)

### POS Interface
![POS](./docs/screenshots/pos.png)

### Reports
![Reports](./docs/screenshots/reports.png)

## 📖 Tài liệu hướng dẫn

### 🎯 Dành cho người dùng cuối
- **[Hướng dẫn đăng nhập](./docs/user-guide.md#đăng-nhập-hệ-thống)**
- **[Sử dụng POS bán hàng](./docs/user-guide.md#pos-bán-hàng)**
- **[Quản lý khách hàng](./docs/user-guide.md#quản-lý-khách-hàng)**
- **[Xem báo cáo](./docs/user-guide.md#báo-cáo--thống-kê)**

### 🛠️ Dành cho quản trị viên
- **[Cài đặt hệ thống](./docs/admin-guide.md)**
- **[Quản lý nhân viên](./docs/admin-guide.md#quản-lý-nhân-viên)**
- **[Cấu hình menu](./docs/admin-guide.md#menu--sản-phẩm)**
- **[Backup & Restore](./docs/admin-guide.md#sao-lưu-dữ-liệu)**

### 💻 Dành cho developer
- **[API Documentation](./docs/api.md)**
- **[Component Library](./docs/components.md)**
- **[Deployment Guide](./docs/deployment.md)**

## ⌨️ Phím tắt

| Phím tắt | Chức năng |
|----------|-----------|
| `F1` | Reset bộ lọc |
| `F2` | Mở danh sách bàn |
| `F4` | Thanh toán nhanh |
| `F5` | Đồng bộ dữ liệu |
| `Esc` | Xóa giỏ hàng |
| `Ctrl + S` | Lưu nhanh |

## 🔧 Cấu hình

### Environment Variables
```env
# Database
DATABASE_URL="your_database_url"

# Authentication
NEXTAUTH_SECRET="your_secret_key"
NEXTAUTH_URL="http://localhost:3000"

# API Keys
PAYMENT_API_KEY="your_payment_api_key"
PRINT_SERVICE_URL="your_print_service_url"
```

### Customization
- **Theme**: Chỉnh sửa `tailwind.config.js`
- **Components**: Tùy chỉnh trong `src/components/ui/`
- **Layout**: Điều chỉnh trong `src/app/(dashboard)/layout.tsx`

## 🤝 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp từ cộng đồng!

### Cách đóng góp
1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

### Code Style
- Sử dụng ESLint và Prettier
- Follow React/TypeScript best practices
- Viết tests cho features mới
- Update documentation khi cần thiết

## 🐛 Báo lỗi & Hỗ trợ

### Bug Reports
Nếu phát hiện lỗi, vui lòng tạo issue với:
- Mô tả chi tiết lỗi
- Các bước để reproduce
- Screenshots nếu có
- Environment information

### Feature Requests
Đề xuất tính năng mới qua GitHub Issues với label `enhancement`

### Hỗ trợ kỹ thuật
- **Email**: support@GoalPÓ.com
- **Phone**: 0326132124
- **Discord**: [GoalPÓ Community](https://discord.gg/GoalPÓ)

## 📄 License

Dự án này được phân phối dưới giấy phép MIT. Xem file [LICENSE](./LICENSE) để biết thêm chi tiết.

## 🏆 Credits

### Core Team
- **[Your Name]** - Project Lead & Frontend Developer
- **[Team Member]** - Backend Developer
- **[Designer]** - UI/UX Designer

### Contributors
Cảm ơn tất cả những người đã đóng góp cho dự án:
- [Contributor 1](https://github.com/contributor1)
- [Contributor 2](https://github.com/contributor2)

### Dependencies
Dự án sử dụng các thư viện mã nguồn mở tuyệt vời:
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)

## 📈 Roadmap

### V2.0 (Q1 2025)
- [ ] Multi-language support
- [ ] Advanced inventory management
- [ ] Kitchen display system
- [ ] Mobile apps (iOS/Android)

### V2.1 (Q2 2025)
- [ ] AI-powered analytics
- [ ] Voice ordering
- [ ] Advanced reporting
- [ ] Third-party integrations

### V3.0 (Q3 2025)
- [ ] Cloud infrastructure
- [ ] Multi-location support
- [ ] Franchise management
- [ ] Enterprise features

## 📞 Liên hệ

- **Website**: [https://GoalPÓ.com](https://GoalPÓ.com)
- **Email**: info@GoalPÓ.com
- **Phone**: +84 326 132 124
- **Address**: Đông Hà, Quảng Trị, Vietnam

---

<div align="center">

**Made with ❤️ by GoalPÓ Team**

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Stars](https://img.shields.io/github/stars/goalcrmapp/GoalPÓ?style=social)

[⭐ Star us on GitHub](https://github.com/GoalCrmApp/GoalPÓ) | [📖 Documentation](./docs/user-guide.md) | [🐛 Report Bug](https://github.com/GoalCrmApp/GoalPÓ/issues) | [💡 Request Feature](https://github.com/GoalCrmApp/GoalPÓ/issues)

</div>
