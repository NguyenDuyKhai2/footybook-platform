import { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, Star, Users, Wifi, Camera, Coffee, ShoppingBag, Award, ChevronRight, Check, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedFieldType, setSelectedFieldType] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Mock data cho venue duy nhất
  const venue = {
    name: "Sân Bóng FootyBook",
    address: "Đăng Lưu, Nam Thành, Yên Thành, Nghệ An",
    phone: "0909 123 456",
    openTime: "05:00 - 23:00",
    rating: 4.8,
    totalReviews: 342,
    images: [
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200",
      "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200",
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200"
    ]
  };

  const fields = [
    { type: 'Sân 5', count: 5, price: '200K', available: 3 },
    { type: 'Sân 7', count: 3, price: '400K', available: 2 },
    { type: 'Sân 11', count: 2, price: '800K', available: 1 }
  ];

  const amenities = [
    { icon: Wifi, label: 'WiFi miễn phí' },
    { icon: Camera, label: 'Live Stream' },
    { icon: Coffee, label: 'Đồ uống' },
    { icon: ShoppingBag, label: 'Thuê dụng cụ' },
    { icon: Award, label: 'Trọng tài' },
    { icon: Users, label: 'Tìm đồng đội' }
  ];

  const timeSlots = [
    { time: '05:00 - 07:00', label: 'Sáng sớm', discount: '-20%' },
    { time: '07:00 - 11:00', label: 'Buổi sáng', discount: '-10%' },
    { time: '11:00 - 17:00', label: 'Buổi trưa', discount: '-15%' },
    { time: '17:00 - 19:00', label: 'Chiều tối', popular: true },
    { time: '19:00 - 23:00', label: 'Tối muộn', popular: true }
  ];

  const reviews = [
    { 
      name: 'Nguyễn Văn An', 
      avatar: 'user1', 
      rating: 5, 
      date: '2 ngày trước',
      comment: 'Sân cỏ đẹp, nhân viên nhiệt tình. Đặt sân online rất tiện. Sẽ quay lại!' 
    },
    { 
      name: 'Trần Minh Khoa', 
      avatar: 'user2', 
      rating: 5, 
      date: '5 ngày trước',
      comment: 'Giá hợp lý, dịch vụ tốt. Đặc biệt là có cả livestream trận đấu!' 
    },
    { 
      name: 'Lê Hoàng Nam', 
      avatar: 'user3', 
      rating: 4, 
      date: '1 tuần trước',
      comment: 'Sân rộng rãi, sạch sẽ. Có đầy đủ tiện ích. Recommend!' 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section với Gallery */}
      <section className="relative h-[500px] md:h-[600px]">
        <div className="absolute inset-0 grid grid-cols-4 gap-1">
          <div className="col-span-4 md:col-span-2 relative overflow-hidden">
            <img
              src={venue.images[0]}
              alt="Main field"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          </div>
          <div className="hidden md:block col-span-1 relative overflow-hidden">
            <img
              src={venue.images[1]}
              alt="Field 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block col-span-1 relative overflow-hidden">
            <img
              src={venue.images[2]}
              alt="Field 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <Badge className="bg-green-600 text-white mb-4 text-sm px-3 py-1">
                <Star className="h-3 w-3 mr-1 fill-white" />
                {venue.rating} ({venue.totalReviews} đánh giá)
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {venue.name}
              </h1>
              
              <div className="space-y-2 text-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{venue.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>Mở cửa: {venue.openTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>{venue.phone}</span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Đặt sân ngay
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white/90 hover:bg-white">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Xem video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Form */}
      <section className="container mx-auto px-4 -mt-12 relative z-10">
        <Card className="shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl">Đặt sân nhanh</CardTitle>
            <CardDescription>Chọn thông tin và xem giá ngay</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Loại sân</label>
                <Select value={selectedFieldType} onValueChange={setSelectedFieldType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn loại sân" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">Sân 5 người</SelectItem>
                    <SelectItem value="7">Sân 7 người</SelectItem>
                    <SelectItem value="11">Sân 11 người</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Ngày đặt</label>
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Giờ chơi</label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn giờ" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot, idx) => (
                      <SelectItem key={idx} value={slot.time}>
                        {slot.time} - {slot.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button className="w-full bg-green-600 hover:bg-green-700 h-10">
                  Xem giá & Đặt sân
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Available Fields */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Các Loại Sân
          </h2>
          <p className="text-gray-600 text-lg">
            Chọn sân phù hợp với đội bóng của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fields.map((field, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-shadow border-2 hover:border-green-500">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl">{field.type}</CardTitle>
                  {field.available > 0 && (
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      {field.available} sân trống
                    </Badge>
                  )}
                </div>
                <CardDescription>
                  Tổng {field.count} sân • Cỏ nhân tạo • Có đèn
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6 bg-gray-50 rounded-lg mb-4">
                  <div className="text-sm text-gray-600 mb-1">Giá từ</div>
                  <div className="text-4xl font-bold text-green-600">{field.price}</div>
                  <div className="text-sm text-gray-600">/giờ</div>
                </div>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Cỏ nhân tạo chất lượng cao
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Đèn chiếu sáng hiện đại
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    Có trọng tài {field.type !== 'Sân 5' && '(miễn phí)'}
                  </li>
                </ul>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Xem lịch trống
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Time Slots with Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Khung Giờ & Giá Ưu Đãi
            </h2>
            <p className="text-gray-600 text-lg">
              Giảm giá đặc biệt cho khung giờ sáng sớm và trưa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {timeSlots.map((slot, idx) => (
              <Card 
                key={idx} 
                className={`text-center cursor-pointer hover:shadow-lg transition-all ${
                  slot.popular ? 'border-2 border-green-500 shadow-md' : ''
                }`}
              >
                <CardContent className="pt-6">
                  {slot.popular && (
                    <Badge className="bg-green-600 mb-3">Khung giờ hot</Badge>
                  )}
                  {slot.discount && (
                    <Badge variant="outline" className="border-orange-500 text-orange-600 mb-3">
                      {slot.discount}
                    </Badge>
                  )}
                  <div className="text-xl font-bold mb-1">{slot.time}</div>
                  <div className="text-sm text-gray-600">{slot.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tiện Ích & Dịch Vụ
          </h2>
          <p className="text-gray-600 text-lg">
            Đầy đủ tiện nghi cho trải nghiệm hoàn hảo
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((amenity, idx) => (
            <Card key={idx} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <amenity.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="font-medium">{amenity.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Đặc Biệt: Dịch Vụ Livestream</h3>
              <p className="text-white/90 mb-4">
                Ghi lại những khoảnh khắc đáng nhớ với dịch vụ quay video và livestream chuyên nghiệp. 
                Gia đình, bạn bè có thể theo dõi trận đấu trực tiếp!
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  Camera chuyên nghiệp
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  Livestream trực tiếp lên Facebook
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  Video highlights sau trận
                </li>
              </ul>
              <div className="mt-4 text-2xl font-bold">500K - 1 triệu/trận</div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800"
                alt="Livestream"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Đánh Giá Từ Khách Hàng
            </h2>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <span className="font-bold">{venue.rating}</span>
              <span className="text-gray-600">({venue.totalReviews} đánh giá)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.avatar}`} />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Xem tất cả {venue.totalReviews} đánh giá
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-4">
        <Card className="bg-gradient-to-r from-green-600 to-green-800 text-white border-none">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sẵn Sàng Đá Bóng?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Đặt sân ngay hôm nay và trải nghiệm dịch vụ tốt nhất tại TP.HCM!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Đặt Sân Ngay
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Gọi {venue.phone}
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}