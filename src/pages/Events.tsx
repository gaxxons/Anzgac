import React from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Youth Sabbath Service",
      date: "March 23, 2024",
      time: "9:30 AM",
      location: "Sydney Central Church",
      category: "Worship",
      image: "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Community Prayer Meeting",
      date: "March 25, 2024",
      time: "7:00 PM",
      location: "Online via Zoom",
      category: "Prayer",
      image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Cultural Festival",
      date: "March 30, 2024",
      time: "2:00 PM",
      location: "Melbourne Convention Center",
      category: "Community",
      image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Bible Study Group",
      date: "April 2, 2024",
      time: "6:30 PM",
      location: "Church Fellowship Hall",
      category: "Study",
      image: "https://images.unsplash.com/photo-1507447786077-aff6d1c311a4?auto=format&fit=crop&q=80&w=500"
    }
  ];

  const categories = ["All", "Worship", "Prayer", "Community", "Study"];
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 57, 84, 0.8), rgba(11, 57, 84, 0.8)), 
          url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80')`
        }}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Upcoming Events</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Join us for worship services, community gatherings, and special events throughout the year.
          </p>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${index === 0 
                    ? 'bg-[#0B3954] text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
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
                  <div className="space-y-2 text-gray-600 mb-6">
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
            Never miss an event. Download our calendar or subscribe to receive updates about upcoming events.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="btn-primary">
              Download Calendar
              <Calendar className="w-5 h-5 ml-2" />
            </button>
            <Link to="/contact" className="btn-secondary">
              Subscribe to Updates
              <Users className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;