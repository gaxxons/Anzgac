import React from 'react';
import { Clock, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceTimes = () => {
  const services = [
    {
      name: "Main Sabbath Service",
      time: "9:30 AM - 12:30 PM",
      location: "Sydney Central Church",
      description: "Our main worship service featuring traditional and contemporary elements.",
      address: "123 Church Street, Sydney NSW 2000"
    },
    {
      name: "Bible Study",
      time: "11:00 AM - 12:00 PM",
      location: "Fellowship Hall",
      description: "In-depth Bible study and discussion groups for all ages.",
      address: "123 Church Street, Sydney NSW 2000"
    },
    {
      name: "Youth Service",
      time: "2:30 PM - 4:00 PM",
      location: "Youth Center",
      description: "Dynamic worship service tailored for young adults and teenagers.",
      address: "123 Church Street, Sydney NSW 2000"
    },
    {
      name: "Prayer Meeting",
      time: "7:00 PM - 8:30 PM",
      location: "Prayer Chapel",
      description: "Wednesday evening prayer and testimony service.",
      address: "123 Church Street, Sydney NSW 2000"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 57, 84, 0.8), rgba(11, 57, 84, 0.8)), 
          url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80')`
        }}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Service Times</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Join us for worship, fellowship, and spiritual growth throughout the week.
          </p>
        </div>
      </section>

      {/* Service Times Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0B3954]/10 rounded-lg p-3">
                    <Clock className="w-6 h-6 text-[#0B3954]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                    <div className="space-y-2 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{service.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{service.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-sm text-gray-500">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      {service.address}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <Calendar className="w-12 h-12 text-[#0B3954] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Special Services</h3>
              <p className="text-gray-600 mb-4">
                Join us for special holiday services and cultural celebrations throughout the year.
              </p>
              <Link to="/events" className="text-[#0B3954] font-medium hover:text-[#0D4B6F] inline-flex items-center">
                View Calendar
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="card p-6 text-center">
              <Users className="w-12 h-12 text-[#0B3954] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">New Visitors</h3>
              <p className="text-gray-600 mb-4">
                First time visiting? We'd love to welcome you and help you feel at home.
              </p>
              <Link to="/about" className="text-[#0B3954] font-medium hover:text-[#0D4B6F] inline-flex items-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="card p-6 text-center">
              <MapPin className="w-12 h-12 text-[#0B3954] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Location & Parking</h3>
              <p className="text-gray-600 mb-4">
                Find directions, parking information, and public transport options.
              </p>
              <Link to="/contact" className="text-[#0B3954] font-medium hover:text-[#0D4B6F] inline-flex items-center">
                Get Directions
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#0B3954]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Us This Week</h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            Experience the warmth of our community and the joy of worshiping together.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/live" className="bg-white text-[#0B3954] hover:bg-gray-100 px-8 py-3 
                                    rounded-lg font-medium transition-all duration-300">
              Watch Live Stream
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 
                                      rounded-lg font-medium transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceTimes;