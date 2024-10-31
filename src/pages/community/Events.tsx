import React from 'react';
import { Calendar, Clock, MapPin, Filter, Search, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const events = [
    {
      title: "Cultural Festival",
      date: "March 30, 2024",
      time: "2:00 PM - 8:00 PM",
      location: "Community Center",
      category: "Cultural",
      description: "Celebrate Ghanaian culture with traditional food, music, and dance.",
      image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80"
    },
    {
      title: "Youth Camp",
      date: "April 12-14, 2024",
      time: "All Day",
      location: "Camp Grounds",
      category: "Youth",
      description: "Three days of spiritual growth, fellowship, and outdoor activities.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
    },
    {
      title: "Family Fun Day",
      date: "April 20, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Church Grounds",
      category: "Family",
      description: "A day of games, activities, and fellowship for the whole family.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80"
    },
    {
      title: "Community Service Day",
      date: "April 27, 2024",
      time: "9:00 AM - 2:00 PM",
      location: "Various Locations",
      category: "Service",
      description: "Join us in serving our local community through various projects.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80"
    }
  ];

  const categories = ["All", "Cultural", "Youth", "Family", "Service", "Worship"];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 57, 84, 0.8), rgba(11, 57, 84, 0.8)), 
          url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80')`
        }}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Community Events</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Join us for upcoming events that bring our community together in faith and fellowship.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B3954] focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-[#0B3954] focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-[#0B3954] focus:border-transparent"
                >
                  <option>All Dates</option>
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>Next Month</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#0B3954]">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <Link 
                    to={`/events/${event.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[#0B3954] font-medium hover:text-[#0D4B6F] transition-colors flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Download */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-8">
            Stay Updated
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Never miss an event. Download our calendar or subscribe to receive updates.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="btn-primary">
              Download Calendar
              <Calendar className="w-5 h-5 ml-2" />
            </button>
            <Link to="/contact" className="btn-secondary">
              Subscribe to Updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;