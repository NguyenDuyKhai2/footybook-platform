# ⚽ FootyBook - Football Field Booking Platform

> A modern football field booking system built with **Spring Boot**, **React**, and **PostgreSQL**.  
> This project is developed for learning purposes as part of the Web Programming course at **Industrial University of Ho Chi Minh City (IUH)**.

---

## 📖 About The Project

FootyBook is a comprehensive platform that connects football enthusiasts with field venues, making it easy to:
- 🔍 Search and discover football fields near you
- 📅 Book fields by hour with real-time availability
- 💰 Flexible pricing (peak hours, weekends)
- ⭐ Rate and review venues
- 🤝 Find teammates for pickup games (unique feature!)

**Problem Solved:** In Vietnam, booking football fields is often done via phone calls or Facebook messages. This platform modernizes the process with a professional booking system.

---

## 🚀 Tech Stack

### Backend
- ☕ **Java 21** - Latest LTS version
- 🍃 **Spring Boot 3.4+** - Core framework
- 🔐 **Spring Security + JWT** - Authentication & Authorization
- 🗄️ **Spring Data JPA + Hibernate** - ORM
- ✅ **Spring Validation** - Input validation
- 🛠️ **Lombok** - Reduce boilerplate
- 📊 **MapStruct** - Object mapping

### Frontend
- ⚛️ **React 19** - UI library
- 📘 **TypeScript** - Type safety
- ⚡ **Vite** - Build tool
- 🎨 **TailwindCSS** - Styling
- 🔄 **React Query** - Data fetching
- 🧭 **React Router v7** - Routing
- 🌐 **i18next** - Internationalization

### Database & DevOps
- 🐘 **PostgreSQL 16** - Primary database
- 🐳 **Docker** - Containerization
- 📮 **Postman** - API testing
- 🔧 **Git & GitHub** - Version control

---

## ✨ Key Features

### Phase 1 - MVP (Core Features)
- ✅ User authentication (Customer, Venue Owner, Admin)
- ✅ Venue management with location
- ✅ Field types (5v5, 7v7, 11v11)
- ✅ Time-based booking system
- ✅ Real-time availability checking
- ✅ Payment integration (VNPay/MoMo)
- ✅ Review & rating system

### Phase 2 - Advanced Features
- 🔄 "Find Teammates" system (unique!)
- 🔄 Additional services (equipment rental, referee)
- 🔄 Recurring bookings
- 🔄 Promotion & discount system
- 🔄 Email notifications
- 🔄 Analytics dashboard

---

## 📊 Database Schema

**Core Entities (10):**
- User, Venue, Field, FieldType
- Booking, TimeSlot, Payment
- Review, Service, BookingService

**Relationships:**
- One Venue → Many Fields
- One Field → Many Bookings
- One Booking → Many Services
- Many-to-Many: User ↔ TeamMatch

[View detailed ERD →](docs/ERD.md)

---

## 🏗️ Project Structure

```
footybook-platform/
├── backend/                    # Spring Boot application
│   ├── src/main/java/
│   │   └── com/footybook/
│   │       ├── config/        # Security, CORS, etc.
│   │       ├── controller/    # REST Controllers
│   │       ├── service/       # Business Logic
│   │       ├── repository/    # Data Access
│   │       ├── entity/        # JPA Entities
│   │       ├── dto/           # Data Transfer Objects
│   │       ├── mapper/        # MapStruct Mappers
│   │       ├── exception/     # Custom Exceptions
│   │       └── util/          # Utilities
│   ├── src/main/resources/
│   │   ├── application.yml
│   │   └── application-dev.yml
│   └── pom.xml
│
├── frontend/                   # React application
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom hooks
│   │   ├── services/         # API services
│   │   ├── store/            # State management
│   │   ├── types/            # TypeScript types
│   │   ├── utils/            # Utilities
│   │   └── App.tsx
│   ├── package.json
│   └── vite.config.ts
│
├── docs/                       # Documentation
│   ├── ERD.md                 # Database design
│   ├── API.md                 # API documentation
│   ├── SETUP.md               # Setup guide
│   └── FEATURES.md            # Feature specs
│
├── docker-compose.yml          # Docker setup
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🚦 Getting Started

### Prerequisites
- Java 21+
- Node.js 18+
- PostgreSQL 16 (or Docker)
- Maven 3.8+
- Git

### Quick Start with Docker

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/footybook-platform.git
cd footybook-platform

# Start PostgreSQL with Docker
docker-compose up -d

# Backend setup
cd backend
./mvnw clean install
./mvnw spring-boot:run

# Frontend setup (new terminal)
cd frontend
npm install
npm run dev
```

[📖 Detailed Setup Guide →](docs/SETUP.md)

---

## 📋 Development Roadmap

### Week 1-2: Foundation
- [x] Project setup & repository
- [ ] Database schema design
- [ ] Backend API structure
- [ ] Authentication system

### Week 3-4: Core Features
- [ ] Venue & Field CRUD
- [ ] Booking system
- [ ] Payment integration
- [ ] Basic frontend pages

### Week 5-6: Advanced Features
- [ ] Review system
- [ ] Additional services
- [ ] Team matching feature
- [ ] Admin dashboard

### Week 7-8: Polish & Deploy
- [ ] UI/UX improvements
- [ ] Testing & bug fixes
- [ ] Performance optimization
- [ ] Deployment

[📅 Detailed Timeline →](docs/TIMELINE.md)

---

## 🤝 Contributing

This is an educational project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👥 Team

| Name | Role | GitHub |
|------|------|--------|
| Your Name | Full-stack Developer | [@NguyenDuyKhai2](https://github.com/NguyenDuyKhai2) |

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🎓 Academic Information

- **Institution:** Industrial University of Ho Chi Minh City (IUH)
- **Course:** Lập Trình WWW (Web Programming)
- **Academic Year:** 2025
- **Instructor:** [Instructor Name]

---

## 📞 Contact

- 📧 Email: khainguyenduy5@gmail.com
- 💼 LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [@NguyenDuyKhai2](https://github.com/NguyenDuyKhai2)

---

## 🙏 Acknowledgments

- Spring Boot & Spring Framework teams
- React & TypeScript communities
- PostgreSQL development team
- IUH Faculty of Information Technology
- Course instructor and mentors

---


### ⭐ If you find this project helpful, please consider giving it a star! ⭐

**Made with ❤️ for learning Web Development**

**⚽ Making football field booking easier, one commit at a time ⚽**
