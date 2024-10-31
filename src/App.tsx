import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/authStore';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Login from './pages/admin/Login';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ManageContent from './pages/admin/ManageContent';
import ManageEvents from './pages/admin/ManageEvents';
import ManageResources from './pages/admin/ManageResources';
import ManageUsers from './pages/admin/ManageUsers';
import OurStory from './pages/about/OurStory';
import WhatWeBelieve from './pages/about/WhatWeBelieve';
import LeadershipTeam from './pages/about/LeadershipTeam';
import ServiceTimes from './pages/worship/ServiceTimes';
import LiveStream from './pages/worship/LiveStream';
import PastSermons from './pages/worship/PastSermons';
import Children from './pages/ministries/Children';
import Youth from './pages/ministries/Youth';
import YoungAdults from './pages/ministries/YoungAdults';
import Family from './pages/ministries/Family';
import CommunityEvents from './pages/community/Events';
import SmallGroups from './pages/community/SmallGroups';
import GetInvolved from './pages/community/GetInvolved';

function App() {
  const checkUser = useAuthStore((state) => state.checkUser);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/about/story" element={<OurStory />} />
                  <Route path="/about/beliefs" element={<WhatWeBelieve />} />
                  <Route path="/about/leadership" element={<LeadershipTeam />} />
                  <Route path="/ministries" element={<Ministries />} />
                  <Route path="/ministries/children" element={<Children />} />
                  <Route path="/ministries/youth" element={<Youth />} />
                  <Route path="/ministries/young-adults" element={<YoungAdults />} />
                  <Route path="/ministries/family" element={<Family />} />
                  <Route path="/worship/services" element={<ServiceTimes />} />
                  <Route path="/worship/live" element={<LiveStream />} />
                  <Route path="/worship/sermons" element={<PastSermons />} />
                  <Route path="/community/events" element={<CommunityEvents />} />
                  <Route path="/community/groups" element={<SmallGroups />} />
                  <Route path="/community/volunteer" element={<GetInvolved />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="content" element={<ManageContent />} />
          <Route path="events" element={<ManageEvents />} />
          <Route path="resources" element={<ManageResources />} />
          <Route path="users" element={<ManageUsers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;