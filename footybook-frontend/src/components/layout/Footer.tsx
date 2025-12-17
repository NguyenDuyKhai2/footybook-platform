// src/components/layout/Footer.tsx
import { Facebook, Instagram, Mail, Phone, MapPin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="bg-gray-500 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">⚽</span>
              </div>
              <span className="text-xl font-bold text-white">
                Footy<span className="text-green-500">book</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Nền tảng đặt sân bóng đá hàng đầu Việt Nam. 
              Kết nối người chơi với những sân bóng chất lượng cao.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="hover:bg-gray-800 hover:text-green-500">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-gray-800 hover:text-green-500">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-gray-800 hover:text-green-500">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/venues" className="hover:text-green-500 transition-colors">
                  Tìm sân bóng
                </a>
              </li>
              <li>
                <a href="/team-match" className="hover:text-green-500 transition-colors">
                  Tìm đội chơi
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-green-500 transition-colors">
                  Bảng giá
                </a>
              </li>
              <li>
                <a href="/register-venue" className="hover:text-green-500 transition-colors">
                  Đăng ký sân bóng
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-green-500 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/faq" className="hover:text-green-500 transition-colors">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-green-500 transition-colors">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-green-500 transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="/cancellation" className="hover:text-green-500 transition-colors">
                  Chính sách hủy
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-500 transition-colors">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Đăng Lưu, Nam Thành, Yên Thành, Nghệ An</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-500" />
                <span>1900 1234</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-500" />
                <span>support@footybook.vn</span>
              </li>
            </ul>

            <div>
              <h4 className="text-white font-semibold mb-2 text-sm">
                Đăng ký nhận tin
              </h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email của bạn"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                />
                <Button className="bg-green-600 hover:bg-green-700 whitespace-nowrap">
                  Đăng ký
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 Footybook. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-green-500 transition-colors">
              Terms
            </a>
            <a href="/privacy" className="hover:text-green-500 transition-colors">
              Privacy
            </a>
            <a href="/cookies" className="hover:text-green-500 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}