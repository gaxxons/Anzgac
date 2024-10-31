import React from 'react';
import { ArrowRight, Calendar, Users, Heart, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const upcomingEvents = [
    {
      title: "Youth Sabbath Service",
      date: "March 23, 2024",
      time: "9:30 AM",
      location: "Sydney Central Church"
    },
    {
      title: "Community Prayer Meeting",
      date: "March 25, 2024",
      time: "7:00 PM",
      location: "Online via Zoom"
    },
    {
      title: "Cultural Festival",
      date: "March 30, 2024",
      time: "2:00 PM",
      location: "Melbourne Convention Center"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 57, 84, 0.8), rgba(11, 57, 84, 0.8)), 
          url('https://images.unsplash.com/photo-1601142634808-38923eb7c560?auto=format&fit=crop&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B3954]/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-32">
          <div className="text-white max-w-3xl">
            <h1 className="text-6xl font-bold mb-8 leading-tight">
              Welcome to ANZGAC
            </h1>
            <p className="text-xl mb-12 leading-relaxed opacity-90">
              Uniting Ghanaian Adventists across Australia and New Zealand through faith, culture, and community.
            </p>
            <div className="flex space-x-6">
              <Link to="/about" className="btn-primary">
                <span>Join Our Community</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/contact" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#0B3954] px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2">
              Welcome to Our Community
            </h2>
            <p className="text-lg text-gray-600 mt-8 mb-12 leading-relaxed">
              ANZGAC is a vibrant community of Seventh-day Adventist believers from Ghana, united in faith and culture across Australia and New Zealand. We invite you to join us in worship, fellowship, and service.
            </p>
            <div className="flex justify-center space-x-6">
              <Link to="/about" className="btn-primary">
                Learn More
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="section-title">Upcoming Events</h2>
            <Link to="/events" className="text-[#0B3954] hover:text-[#0D4B6F] flex items-center font-medium">
              View All Events
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0B3954]/10 rounded-lg p-3">
                    <Calendar className="w-6 h-6 text-[#0B3954]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">{event.title}</h3>
                    <div className="space-y-2 text-gray-600">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Focus Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-16">
            Our Ministry Focus
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-[#0B3954]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6
                            transform group-hover:scale-110 transition-all duration-300">
                <Users className="w-10 h-10 text-[#0B3954]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Life</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience authentic fellowship and support within our vibrant Ghanaian-Adventist community.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-[#0B3954]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6
                            transform group-hover:scale-110 transition-all duration-300">
                <Heart className="w-10 h-10 text-[#0B3954]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Spiritual Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Deepen your faith through Bible study, prayer, and worship in our cultural context.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-[#0B3954]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6
                            transform group-hover:scale-110 transition-all duration-300">
                <Calendar className="w-10 h-10 text-[#0B3954]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cultural Connection</h3>
              <p className="text-gray-600 leading-relaxed">
                Celebrate our Ghanaian heritage while embracing our new home in Australia and New Zealand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-16">
            Featured Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Weekly Sermon",
                image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=500",
                description: "Watch our latest sermon recordings and spiritual messages."
              },
              {
                title: "Prayer Resources",
                image: "https://images.unsplash.com/photo-1507447786077-aff6d1c311a4?auto=format&fit=crop&q=80&w=500",
                description: "Access prayer guides and devotional materials."
              },
              {
                title: "Community News",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=500",
                description: "Stay updated with our community newsletter and announcements."
              }
            ].map((resource, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3954]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Link to="/resources" className="text-[#0B3954] font-medium hover:text-[#0D4B6F] transition-colors flex items-center">
                    Access Resource
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#0B3954]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Community Today</h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Be part of our growing family of believers. Connect with fellow Ghanaian Adventists and grow in faith together.
          </p>
          <Link to="/contact" className="bg-white text-[#0B3954] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium 
                                     inline-flex items-center space-x-2 transition-all duration-300
                                     hover:shadow-lg transform hover:-translate-y-0.5">
            <span>Get Connected</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;