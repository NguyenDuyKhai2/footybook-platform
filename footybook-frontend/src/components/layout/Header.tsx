// src/components/layout/Header.tsx
import { useState } from 'react';
import { Menu, X, User, Calendar, Users, Search, Bell, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  isLoggedIn?: boolean;
  user?: {
    name: string;
    avatar?: string;
    role: string;
  };
}

export default function Header({ isLoggedIn = false, user }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">⚽</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Footy<span className="text-green-600">book</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Trang chủ
            </a>
            <a href="/venues" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Sân bóng
            </a>
            <a href="/team-match" className="text-gray-700 hover:text-green-600 font-medium transition-colors flex items-center gap-1">
              <Users className="h-4 w-4" />
              Tìm đội
            </a>
            <a href="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Về chúng tôi
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {isLoggedIn && user ? (
              <>
                {/* Notifications */}
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500">
                    3
                  </Badge>
                </Button>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2 px-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="hidden md:inline text-sm font-medium">{user.name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div className="flex flex-col">
                        <span className="font-semibold">{user.name}</span>
                        <span className="text-xs text-gray-500">{user.role}</span>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Hồ sơ
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Calendar className="mr-2 h-4 w-4" />
                      Booking của tôi
                    </DropdownMenuItem>
                    {user.role === 'OWNER' && (
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        Quản lý sân
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      Đăng xuất
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button variant="ghost" className="hidden md:inline-flex">
                  Đăng nhập
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  Đăng ký
                </Button>
              </>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col gap-3">
              <a href="/" className="text-gray-700 hover:text-green-600 font-medium py-2">
                Trang chủ
              </a>
              <a href="/venues" className="text-gray-700 hover:text-green-600 font-medium py-2">
                Sân bóng
              </a>
              <a href="/team-match" className="text-gray-700 hover:text-green-600 font-medium py-2 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Tìm đội
              </a>
              <a href="/about" className="text-gray-700 hover:text-green-600 font-medium py-2">
                Về chúng tôi
              </a>
              {!isLoggedIn && (
                <>
                  <Button variant="outline" className="w-full justify-start mt-2">
                    Đăng nhập
                  </Button>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Đăng ký
                  </Button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

