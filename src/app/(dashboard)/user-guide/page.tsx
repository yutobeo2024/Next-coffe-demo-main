'use client';

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Search, 
  ChevronRight, 
  Home,
  Monitor,
  ShoppingCart,
  Users,
  Coffee,
  BarChart3,
  Settings,
  Keyboard,
  Smartphone,
  AlertTriangle,
  Phone,
  Download,
  ExternalLink,
  Check,
  Info,
  Lightbulb,
  Star,
  Gift
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface Section {
  id: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
  color: string;
}

export default function UserGuidePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('introduction');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Search functionality
  useEffect(() => {
    if (searchTerm) {
      const results = sections
        .filter(section => 
          section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          section.id.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map(section => section.id);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const sections: Section[] = [
    {
      id: 'introduction',
      title: 'Giới thiệu chung',
      icon: Home,
      color: 'bg-blue-500',
      content: (
        <div className="space-y-6">
          <div className="text-center py-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">GOAL POS System</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hệ thống quản lý bán hàng toàn diện dành cho nhà hàng, quán cafe và các cửa hàng F&B
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-blue-500" />
                  POS Bán hàng
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Giao diện bán hàng trực quan, nhanh chóng với đầy đủ tính năng</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-500" />
                  Quản lý khách hàng
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Hệ thống khách hàng thân thiết với ưu đãi tự động</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-500" />
                  Báo cáo thống kê
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Phân tích doanh thu và hiệu quả kinh doanh chi tiết</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
              <Star className="w-5 h-5" />
              Tính năng nổi bật
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-blue-700">Giao diện responsive trên mọi thiết bị</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-blue-700">Tích hợp đầy đủ phương thức thanh toán</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-blue-700">Quản lý kho và nguyên liệu thông minh</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-blue-700">Báo cáo và thống kê realtime</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'login',
      title: 'Đăng nhập hệ thống',
      icon: Monitor,
      color: 'bg-green-500',
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Các bước đăng nhập</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                <div>
                  <h4 className="font-medium text-green-800">Truy cập trang đăng nhập</h4>
                  <p className="text-green-700 text-sm">Mở trình duyệt và truy cập địa chỉ hệ thống</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                <div>
                  <h4 className="font-medium text-green-800">Nhập thông tin đăng nhập</h4>
                  <p className="text-green-700 text-sm">Tên đăng nhập và mật khẩu được cấp</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                <div>
                  <h4 className="font-medium text-green-800">Truy cập Dashboard</h4>
                  <p className="text-green-700 text-sm">Vào trang chính với các ứng dụng</p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>💡 Lưu ý quan trọng</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Đảm bảo kết nối internet ổn định</p>
              <p>• Sử dụng trình duyệt web hiện đại (Chrome, Firefox, Edge)</p>
              <p>• Liên hệ Admin nếu quên mật khẩu</p>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 'pos',
      title: 'POS Bán hàng',
      icon: Monitor,
      color: 'bg-orange-500',
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
              <Monitor className="w-5 h-5" />
              Giao diện POS
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded border border-orange-200">
                <h4 className="font-medium text-orange-800">Khu vực sản phẩm</h4>
                <p className="text-orange-700 text-sm">Danh sách menu và tìm kiếm</p>
              </div>
              <div className="bg-white p-4 rounded border border-orange-200">
                <h4 className="font-medium text-orange-800">Giỏ hàng</h4>
                <p className="text-orange-700 text-sm">Các món đã chọn và tổng tiền</p>
              </div>
              <div className="bg-white p-4 rounded border border-orange-200">
                <h4 className="font-medium text-orange-800">Thanh công cụ</h4>
                <p className="text-orange-700 text-sm">Chọn bàn, lọc, tìm kiếm</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Quy trình bán hàng
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">1</span>
                <div>
                  <h4 className="font-medium">Chọn bàn</h4>
                  <p className="text-sm text-gray-600">Nhấn "Chọn bàn" hoặc F2</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">2</span>
                <div>
                  <h4 className="font-medium">Chọn sản phẩm</h4>
                  <p className="text-sm text-gray-600">Nhấn vào món để thêm vào giỏ</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">3</span>
                <div>
                  <h4 className="font-medium">Chọn khách hàng</h4>
                  <p className="text-sm text-gray-600">Tùy chọn - để nhận ưu đãi</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">4</span>
                <div>
                  <h4 className="font-medium">Thanh toán</h4>
                  <p className="text-sm text-gray-600">Nhấn "Thanh toán" hoặc F4</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
              <Gift className="w-5 h-5" />
              Hệ thống ưu đãi khách hàng
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded border">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Khách thường</Badge>
                  <span>Không ưu đãi</span>
                </div>
                <span className="text-gray-500">0%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded border">
                <div className="flex items-center gap-2">
                  <Badge className="bg-yellow-500">Khách VIP</Badge>
                  <span>Giảm giá tự động</span>
                </div>
                <span className="text-yellow-600 font-semibold">10%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded border">
                <div className="flex items-center gap-2">
                  <Badge className="bg-purple-500">Khách kim cương</Badge>
                  <span>Giảm giá tự động</span>
                </div>
                <span className="text-purple-600 font-semibold">20%</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'orders',
      title: 'Quản lý đơn hàng',
      icon: ShoppingCart,
      color: 'bg-blue-500',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Các thao tác với đơn hàng
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 border rounded">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white">👁️</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Xem chi tiết</h4>
                    <p className="text-sm text-gray-600">Thông tin đầy đủ đơn hàng</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white">🖨️</span>
                  </div>
                  <div>
                    <h4 className="font-medium">In hóa đơn</h4>
                    <p className="text-sm text-gray-600">In lại hóa đơn cho khách</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white">✅</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Xác nhận thanh toán</h4>
                    <p className="text-sm text-gray-600">Đối với đơn chờ xác nhận</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white">❌</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Hủy đơn</h4>
                    <p className="text-sm text-gray-600">Chỉ Admin/Manager</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">Trạng thái đơn hàng</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Badge className="bg-yellow-500">🔄 Chờ xác nhận</Badge>
                <span>Đơn vừa tạo, chờ xử lý</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-green-500">✅ Đã thanh toán</Badge>
                <span>Hoàn tất giao dịch thành công</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-red-500">❌ Đã hủy</Badge>
                <span>Đơn hàng bị hủy bỏ</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'customers',
      title: 'Quản lý khách hàng',
      icon: Users,
      color: 'bg-purple-500',
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Phân loại khách hàng</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-l-4 border-l-gray-400">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Badge variant="secondary">Khách thường</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Không có ưu đãi đặc biệt</p>
                  <p className="font-semibold text-gray-700">0% giảm giá</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-400">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Badge className="bg-yellow-500">Khách VIP</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Ưu đãi tự động mỗi đơn hàng</p>
                  <p className="font-semibold text-yellow-600">10% giảm giá</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-400">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Badge className="bg-purple-500">Khách kim cương</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Ưu đãi cao nhất hệ thống</p>
                  <p className="font-semibold text-purple-600">20% giảm giá</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>💰 Hệ thống điểm tích lũy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 p-4 rounded border border-green-200">
                <h4 className="font-medium text-green-800 mb-2">Quy tắc tích điểm</h4>
                <div className="space-y-2">
                  <p className="text-green-700">• 1.000 VNĐ = 1 điểm tích lũy</p>
                  <p className="text-green-700">• Điểm được cộng tự động sau mỗi giao dịch</p>
                  <p className="text-green-700">• Theo dõi lịch sử mua hàng chi tiết</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📋 Quản lý thông tin khách hàng</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Thêm khách hàng mới</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Cập nhật thông tin liên lạc</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Theo dõi điểm tích lũy</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Xem lịch sử mua hàng</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 'menu',
      title: 'Menu & Sản phẩm',
      icon: Coffee,
      color: 'bg-brown-500',
      content: (
        <div className="space-y-6">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h3 className="text-lg font-semibold text-amber-800 mb-4">Quản lý sản phẩm</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Thêm sản phẩm mới</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Chỉnh sửa thông tin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Phân loại theo danh mục</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Cập nhật giá bán</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Quản lý hình ảnh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Theo dõi tồn kho</span>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coffee className="w-5 h-5" />
                Quản lý nguyên liệu
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded">
                  <h4 className="font-medium mb-2">📦 Danh sách nguyên liệu</h4>
                  <p className="text-sm text-gray-600">Quản lý tất cả nguyên liệu trong kho</p>
                </div>
                <div className="p-4 border rounded">
                  <h4 className="font-medium mb-2">⚖️ Đơn vị tính và quy đổi</h4>
                  <p className="text-sm text-gray-600">Thiết lập đơn vị và hệ số quy đổi</p>
                </div>
                <div className="p-4 border rounded">
                  <h4 className="font-medium mb-2">⚠️ Cảnh báo hết hàng</h4>
                  <p className="text-sm text-gray-600">Thông báo khi nguyên liệu sắp hết</p>
                </div>
                <div className="p-4 border rounded">
                  <h4 className="font-medium mb-2">🔧 Cấu hình định mức</h4>
                  <p className="text-sm text-gray-600">Định mức nguyên liệu cho từng sản phẩm</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 'reports',
      title: 'Báo cáo & Thống kê',
      icon: BarChart3,
      color: 'bg-indigo-500',
      content: (
        <div className="space-y-6">
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <h3 className="text-lg font-semibold text-indigo-800 mb-4">Dashboard tổng quan</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border border-indigo-200">
                <h4 className="font-medium text-indigo-800 mb-2">💰 Doanh thu</h4>
                <p className="text-indigo-700 text-sm">Theo dõi doanh thu theo ngày/tuần/tháng</p>
              </div>
              <div className="bg-white p-4 rounded border border-indigo-200">
                <h4 className="font-medium text-indigo-800 mb-2">📈 Biểu đồ xu hướng</h4>
                <p className="text-indigo-700 text-sm">Phân tích xu hướng kinh doanh</p>
              </div>
              <div className="bg-white p-4 rounded border border-indigo-200">
                <h4 className="font-medium text-indigo-800 mb-2">🏆 Top sản phẩm</h4>
                <p className="text-indigo-700 text-sm">Món bán chạy nhất</p>
              </div>
              <div className="bg-white p-4 rounded border border-indigo-200">
                <h4 className="font-medium text-indigo-800 mb-2">👥 Thống kê khách hàng</h4>
                <p className="text-indigo-700 text-sm">Phân tích hành vi khách hàng</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>📊 Các loại báo cáo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded">
                  <BarChart3 className="w-5 h-5 text-blue-500" />
                  <div>
                    <h4 className="font-medium">Báo cáo bán hàng</h4>
                    <p className="text-sm text-gray-600">Doanh thu, số đơn, giá trị trung bình</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded">
                  <Coffee className="w-5 h-5 text-green-500" />
                  <div>
                    <h4 className="font-medium">Báo cáo món bán chạy</h4>
                    <p className="text-sm text-gray-600">Ranking và thống kê sản phẩm</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded">
                  <Users className="w-5 h-5 text-purple-500" />
                  <div>
                    <h4 className="font-medium">Báo cáo nhân viên</h4>
                    <p className="text-sm text-gray-600">Hiệu suất và KPI nhân viên</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-3">📄 Xuất báo cáo</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-green-600" />
                <span className="text-green-700">Xuất file Excel để phân tích chi tiết</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-green-600" />
                <span className="text-green-700">In báo cáo giấy cho quản lý</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'settings',
      title: 'Cài đặt hệ thống',
      icon: Settings,
      color: 'bg-gray-500',
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Cài đặt mẫu in
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Tùy chỉnh mẫu hóa đơn</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Thông tin công ty</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Khổ giấy và font chữ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Cài đặt cho POS và Kitchen</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>👨‍💼 Quản lý nhân viên (Admin/Manager)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2">Phân quyền hệ thống</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-700">Admin</span>
                    <Badge className="bg-red-500">Toàn quyền hệ thống</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-700">Manager</span>
                    <Badge className="bg-yellow-500">Quản lý vận hành</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-700">Nhân viên</span>
                    <Badge variant="secondary">Bán hàng cơ bản</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>💾 Cài đặt data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Sao lưu dữ liệu định kỳ</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Đồng bộ hóa giữa các thiết bị</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Dọn dẹp và tối ưu dữ liệu</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Kiểm tra tính toàn vẹn dữ liệu</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 'shortcuts',
      title: 'Phím tắt',
      icon: Keyboard,
      color: 'bg-teal-500',
      content: (
        <div className="space-y-6">
          <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
            <h3 className="text-lg font-semibold text-teal-800 mb-4 flex items-center gap-2">
              <Keyboard className="w-5 h-5" />
              Phím tắt hữu ích
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <span className="font-mono font-medium">F1</span>
                  <span>Reset bộ lọc</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <span className="font-mono font-medium">F2</span>
                  <span>Mở danh sách bàn</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <span className="font-mono font-medium">F4</span>
                  <span>Thanh toán nhanh</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <span className="font-mono font-medium">F5</span>
                  <span>Đồng bộ dữ liệu</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <span className="font-mono font-medium">Esc</span>
                  <span>Xóa giỏ hàng</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <span className="font-mono font-medium">Ctrl+S</span>
                  <span>Lưu nhanh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Mẹo sử dụng hiệu quả
            </h3>
            <div className="space-y-2">
              <p className="text-blue-700">• Sử dụng phím tắt để tăng tốc độ làm việc</p>
              <p className="text-blue-700">• Thiết lập khách hàng thường xuyên để nhận ưu đãi</p>
              <p className="text-blue-700">• Kiểm tra báo cáo hàng ngày để theo dõi kinh doanh</p>
              <p className="text-blue-700">• Sao lưu dữ liệu định kỳ để đảm bảo an toàn</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'mobile',
      title: 'Hỗ trợ di động',
      icon: Smartphone,
      color: 'bg-pink-500',
      content: (
        <div className="space-y-6">
          <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
            <h3 className="text-lg font-semibold text-pink-800 mb-4 flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              Giao diện responsive
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-l-4 border-l-pink-400">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">📱 Tablet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Giao diện tối ưu cho màn hình cảm ứng</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-pink-400">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">📲 Smartphone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Bố cục thu gọn, dễ thao tác</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-pink-400">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">💻 Desktop</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Giao diện đầy đủ tính năng</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>✨ Tính năng mobile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Thao tác bằng cảm ứng trực quan</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Giao diện tìm kiếm mở rộng thân thiện</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Giỏ hàng thu gọn tiết kiệm không gian</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Điều hướng nhanh chóng giữa các trang</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 'troubleshooting',
      title: 'Xử lý lỗi',
      icon: AlertTriangle,
      color: 'bg-red-500',
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Các lỗi thường gặp
            </h3>
            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-red-800">🔐 Lỗi đăng nhập</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Kiểm tra tên đăng nhập và mật khẩu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Đảm bảo kết nối internet ổn định</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Liên hệ Admin để reset mật khẩu</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-red-800">💳 Lỗi thanh toán</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Kiểm tra số tiền khách trả {'>='} tổng tiền</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Đảm bảo đã chọn bàn</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Kiểm tra giỏ hàng không trống</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-red-800">🖨️ Lỗi in hóa đơn</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Kiểm tra máy in đã kết nối</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Vào Cài đặt mẫu in để cấu hình</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Thử in lại từ menu Đơn hàng</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-red-800">🔄 Lỗi đồng bộ dữ liệu</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Nhấn F5 để đồng bộ thủ công</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Kiểm tra kết nối mạng</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Tải lại trang nếu cần thiết</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'support',
      title: 'Hỗ trợ kỹ thuật',
      icon: Phone,
      color: 'bg-green-500',
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Thông tin liên hệ
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">Hotline</h4>
                      <p className="text-green-600 font-semibold">0326132124</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📧</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-blue-600 font-semibold">ninhphuoc@phuocnv.io.vn</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-4 p-4 bg-white rounded border border-green-200">
              <h4 className="font-medium text-green-800 mb-2">🕐 Thời gian hỗ trợ</h4>
              <p className="text-green-700">8:00 - 22:00 (Thứ 2 - Chủ nhật)</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>📚 Tài liệu bổ sung</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-3 border rounded hover:bg-gray-50 cursor-pointer">
                <Info className="w-5 h-5 text-blue-500" />
                <div>
                  <h4 className="font-medium">FAQ - Câu hỏi thường gặp</h4>
                  <p className="text-sm text-gray-600">Giải đáp các thắc mắc phổ biến</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
              
              <div className="flex items-center gap-3 p-3 border rounded hover:bg-gray-50 cursor-pointer">
                <span className="text-red-500">🎥</span>
                <div>
                  <h4 className="font-medium">Video hướng dẫn</h4>
                  <p className="text-sm text-gray-600">Tutorial chi tiết từng tính năng</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
              
              <div className="flex items-center gap-3 p-3 border rounded hover:bg-gray-50 cursor-pointer">
                <span className="text-green-500">💬</span>
                <div>
                  <h4 className="font-medium">Chat support</h4>
                  <p className="text-sm text-gray-600">Hỗ trợ trực tuyến realtime</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </CardContent>
          </Card>

          <div className="text-center py-6 border-t">
            <p className="text-gray-600 mb-4">© 2024 GOAL POS System - All Rights Reserved</p>
            <p className="text-sm text-gray-500">
              Tài liệu này được cập nhật liên tục để phản ánh những thay đổi mới nhất của hệ thống
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <h1 className="text-xl font-bold text-gray-800">Hướng dẫn GOAL POS</h1>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Tải PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto flex">
        {/* Sidebar */}
        <aside className="sticky top-16 h-[calc(100vh-4rem)] w-80 bg-white border-r border-gray-200">
          <div className="p-6 h-full overflow-y-auto">
            <div className="mb-6">
              <h2 className="font-semibold text-gray-800 mb-4">Mục lục</h2>
              
              {/* Search */}
              <div className="relative mb-6">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <nav className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                const isSearchResult = searchResults.length > 0 && searchResults.includes(section.id);
                const shouldShow = searchResults.length === 0 || isSearchResult;
                
                if (!shouldShow) return null;
                
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors
                      ${isActive 
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' 
                        : 'text-gray-700 hover:bg-gray-50'
                      }
                    `}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${section.color}`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{section.title}</span>
                    {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="max-w-4xl mx-auto px-6 py-8">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-16 scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${section.color}`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">{section.title}</h2>
                </div>
                {section.content}
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
