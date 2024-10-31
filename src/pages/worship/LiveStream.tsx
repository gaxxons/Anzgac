import React from 'react';
import { Play, Calendar, Share2, Bell, Download, Globe, Smartphone, Tv, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const LiveStream = () => {
  const upcomingServices = [
    {
      title: "Sabbath Morning Service",
      date: "Saturday, March 23, 2024",
      time: "9:30 AM AEST",
      description: "Join us for our main worship service featuring praise, prayer, and the Word."
    },
    {
      title: "Youth Service",
      date: "Saturday, March 23, 2024",
      time: "2:30 PM AEST",
      description: "Special youth-led worship service with contemporary music and relevant messages."
    },
    {
      title: "Prayer Meeting",
      date: "Wednesday, March 27, 2024",
      time: "7:00 PM AEST",
      description: "Midweek prayer service for spiritual refreshing and community support."
    }
  ];

  return (
    <div className="pt-20">
      {/* Live Stream Section */}
      <section className="bg-[#0B3954] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-red-500 text-white text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></span>
              LIVE NOW
            </span>
            <h1 className="text-4xl font-bold text-white mb-4">Sabbath Morning Service</h1>
            <p className="text-white/90">Join us for worship, wherever you are.</p>
          </div>

          {/* Video Player */}
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-16 h-16 text-white opacity-80 hover:opacity-100 cursor-pointer" />
            </div>
            <img 
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
              alt="Service Preview"
              className="w-full h-full object-cover opacity-50"
            />
          </div>

          {/* Stream Controls */}
          <div className="flex flex-wrap justify-center gap-4 text-white mb-8">
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20">
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20">
              <Download className="w-5 h-5" />
              <span>Download App</span>
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-12">Upcoming Live Streams</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingServices.map((service, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0B3954]/10 rounded-lg p-3">
                    <Calendar className="w-6 h-6 text-[#0B3954]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-sm text-gray-500">
                      <p>{service.date}</p>
                      <p>{service.time}</p>
                    </div>
                    <button className="mt-4 text-[#0B3954] font-medium hover:text-[#0D4B6F] inline-flex items-center">
                      Set Reminder
                      <Bell className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Watch */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-16">
            How to Watch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#0B3954]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-[#0B3954]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Web Browser</h3>
              <p className="text-gray-600">
                Watch directly from your computer or mobile device's web browser.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#0B3954]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-[#0B3954]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mobile App</h3>
              <p className="text-gray-600">
                Download our app for the best mobile viewing experience.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#0B3954]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Tv className="w-8 h-8 text-[#0B3954]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart TV</h3>
              <p className="text-gray-600">
                Cast to your smart TV for a big-screen experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-[#0B3954]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Help?</h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            Having trouble with the live stream? Our technical support team is here to help.
          </p>
          <Link to="/contact" className="bg-white text-[#0B3954] hover:bg-gray-100 px-8 py-3 
                                     rounded-lg font-medium transition-all duration-300">
            Get Support
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LiveStream;