# Test Auto Restore & Auto Backup

## Tính Năng Mới

### 🔄 **Auto Restore từ localStorage**
- Khi load trang, tự động kiểm tra localStorage có thông tin đăng nhập không
- Nếu có và chưa hết hạn, tự động khôi phục kết nối
- Không cần đăng nhập lại mỗi lần refresh trang

### ⏰ **Auto Backup Hàng Ngày**
- Tự động backup mỗi 24 giờ (kiểm tra mỗi 1 giờ)
- Backup ngay lập tức nếu chưa từng backup
- Hiển thị trạng thái "Cần backup" khi quá 24 giờ

### 📱 **UI Improvements**
- Hiển thị trạng thái "Đang hoạt động" khi auto backup được bật
- Hiển thị thời gian backup cuối cùng
- Cảnh báo khi cần backup

## Cách Test

### 1. Test Auto Restore
```
1. Đăng nhập Google Drive
2. Refresh trang (F5)
3. Kiểm tra xem có tự động đăng nhập lại không
4. Console log sẽ hiển thị "🔄 Checking for stored authentication..."
5. Nếu thành công: "✅ Authentication restored from storage"
```

### 2. Test Auto Backup
```
1. Đăng nhập Google Drive
2. Bật "Tự động backup" 
3. Kiểm tra console log: "⏰ Starting auto backup timer..."
4. Đợi 30 giây để kiểm tra initial backup
5. Console log: "🔄 Initial auto backup check..."
```

### 3. Test Token Expiry
```
1. Đăng nhập và đợi 1 giờ (hoặc modify tokenExpiry trong localStorage)
2. Refresh trang
3. Kiểm tra xem có hiển thị "⏰ Stored token has expired" không
4. Phải đăng nhập lại
```

### 4. Test Last Sync Info
```
1. Sau khi backup thành công
2. Kiểm tra UI hiển thị "Lần backup cuối: [thời gian]"
3. Modify lastSync trong localStorage về 2 ngày trước
4. Refresh trang - phải hiển thị "⏰ Cần backup (hơn 24 giờ)"
```

## Debug Commands

```javascript
// Kiểm tra auth info
console.log('Auth Info:', JSON.parse(localStorage.getItem('googleDriveAuth')));

// Kiểm tra có cần sync không
console.log('Should Auto Sync:', GoogleDriveUtils.shouldAutoSync());

// Kiểm tra trạng thái đăng nhập
console.log('Is Signed In:', GoogleDriveUtils.isSignedIn());

// Force auto backup
GoogleDriveUtils.startAutoBackupTimer();

// Stop auto backup
GoogleDriveUtils.stopAutoBackupTimer();

// Test restore
GoogleDriveUtils.restoreAuthFromStorage().then(console.log);
```

## localStorage Structure

```json
{
  "accessToken": "ya29.xxx...",
  "user": {
    "name": "User Name",
    "email": "user@gmail.com",
    "picture": "https://..."
  },
  "lastSync": "2025-01-15T10:30:00.000Z",
  "autoSyncEnabled": true,
  "tokenExpiry": 1705312200000,
  "savedAt": "2025-01-15T09:30:00.000Z"
}
```

## Console Logs để Theo Dõi

### Successful Auto Restore:
```
🔍 Checking Google Drive configuration...
✅ Configuration validation passed
🔄 Checking for stored authentication...
🔄 Restoring auth from localStorage...
✅ Auth restored successfully from localStorage
⏰ Starting auto backup timer...
```

### Successful Auto Backup:
```
🔄 Auto backup check...
📊 Days since last sync: 1.2
🚀 Starting auto backup...
✅ Auto backup completed successfully
```

### Token Expired:
```
⏰ Stored token has expired
ℹ️ No valid stored authentication found
```
