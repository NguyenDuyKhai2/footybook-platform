// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/home/HomePage';
// Import other pages as you create them
// import VenueListPage from '@/pages/venues/VenueListPage';
// import VenueDetailPage from '@/pages/venues/VenueDetailPage';
// import BookingPage from '@/pages/bookings/BookingPage';
// import TeamMatchPage from '@/pages/team-match/TeamMatchPage';

function App() {
  // Mock user data - replace with real auth later
  const isLoggedIn = false;
  const user = {
    name: 'Nguyễn Văn An',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=customer1',
    role: 'CUSTOMER',
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header isLoggedIn={isLoggedIn} user={isLoggedIn ? user : undefined} />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add more routes as you create pages */}
            {/* <Route path="/venues" element={<VenueListPage />} /> */}
            {/* <Route path="/venues/:id" element={<VenueDetailPage />} /> */}
            {/* <Route path="/booking/:fieldId" element={<BookingPage />} /> */}
            {/* <Route path="/team-match" element={<TeamMatchPage />} /> */}
          </Routes>
        </main>

        <Footer />
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;

