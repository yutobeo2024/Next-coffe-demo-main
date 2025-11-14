# Test Google Drive Sync

## Các Bước Kiểm Tra

### 1. Kiểm tra cấu hình
- Mở Developer Tools (F12)
- Vào tab "Google Drive" trong ứng dụng
- Bấm nút "Test Config" 
- Xem console log để kiểm tra:
  - CLIENT_ID có đúng format không
  - API_KEY có đúng format không
  - Environment variables có được load không

### 2. Kiểm tra khởi tạo API
- Bấm nút "Debug Info" để xem trạng thái khởi tạo
- Kiểm tra các thuộc tính:
  - `isInitialized`: phải là true
  - `hasGapi`: phải là true
  - `hasGoogleIdentity`: phải là true
  - `initializationError`: phải là null

### 3. Test đăng nhập
- Bấm nút "Kết nối Google Drive"
- Kiểm tra console log:
  - Có thông báo "🔑 Starting Google Drive sign in..."
  - Có thông báo "✅ Access token received"
  - Có thông báo "👤 Getting user information..."
  - Có thông báo "✅ User info retrieved"

### 4. Kiểm tra user info
- Sau khi đăng nhập thành công, kiểm tra:
  - Có hiển thị tên người dùng
  - Có hiển thị email
  - Có hiển thị avatar (nếu có)

### 5. Test backup
- Bấm nút "Backup ngay"
- Kiểm tra có file backup được tạo trên Google Drive
- Kiểm tra nội dung file backup có đúng format JSON không

### 6. Test restore
- Bấm nút "Xem backup"
- Chọn một file backup để restore
- Kiểm tra dữ liệu có được khôi phục đúng không

## Các Lỗi Thường Gặp và Cách Sửa

### Lỗi "Configuration errors"
- Kiểm tra file `.env.local` có tồn tại không
- Kiểm tra CLIENT_ID và API_KEY có đúng định dạng không
- Restart server Next.js sau khi thay đổi environment variables

### Lỗi "Failed to initialize Google API"
- Kiểm tra internet connection
- Kiểm tra Google APIs có bị block không
- Thử bấm nút "Reinit" để khởi tạo lại

### Lỗi "Error getting user info"
- Đã được sửa bằng cách sử dụng multiple fallback methods
- Kiểm tra console log để xem method nào thành công

### Lỗi "Upload failed" 
- Kiểm tra quyền truy cập Google Drive
- Kiểm tra dung lượng Google Drive
- Kiểm tra token có hết hạn không

## Console Commands để Debug

```javascript
// Kiểm tra cấu hình
console.log('Config:', window.GoogleDriveUtils?.validateConfiguration());

// Kiểm tra trạng thái đăng nhập
console.log('Signed in:', window.GoogleDriveUtils?.isSignedIn());

// Kiểm tra debug info
console.log('Debug:', window.GoogleDriveUtils?.getDebugInfo());

// Test connection
window.GoogleDriveUtils?.testConnection().then(console.log);
```
