import React from 'react';
import { Users, Book, Coffee, Heart, Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const YoungAdults = () => {
  const events = [
    {
      title: "Bible Study & Discussion",
      day: "Every Tuesday",
      time: "7:00 PM",
      location: "Fellowship Hall",
      description: "Deep dive into Scripture with contemporary life application."
    },
    {
      title: "Social Gathering",
      day: "Last Friday Monthly",
      time: "6:30 PM",
      location: "Various Locations",
      description: "Fellowship, food, and fun activities for young professionals."
    },
    {
      title: "Service Project",
      day: "First Saturday Monthly",
      time: "2:00 PM",
      location: "Community Center",
      description: "Making a difference through community service initiatives."
    }
  ];

  const groups = [
    {
      icon: Book,
      title: "Life Groups",
      description: "Small groups focused on faith and life discussions"
    },
    {
      icon: Coffee,
      title: "Career Network",
      description: "Professional networking and mentorship opportunities"
    },
    {
      icon: Heart,
      title: "Outreach Team",
      description: "Community service and mission projects"
    },
    {
      icon: Users,
      title: "Social Events",
      description: "Building friendships through regular social activities"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 57, 84, 0.8), rgba(11, 57, 84, 0.8)), 
          url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80')`
        }}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Young Adults Ministry</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            A community of young professionals growing together in faith, purpose, and leadership.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Who We Are</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Young Adults Ministry provides a space for individuals in their 20s and 30s to connect, grow spiritually, and navigate life's challenges together. Whether you're a student, young professional, or starting a family, you'll find community here.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We focus on relevant topics like career development, relationships, financial stewardship, and applying faith to everyday life.
              </p>
              <Link to="/about/young-adults" className="btn-primary">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80"
                alt="Young Adults Group"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-12">Regular Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0B3954]/10 rounded-lg p-3">
                    <Calendar className="w-6 h-6 text-[#0B3954]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{event.day}</span>
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
                    <p className="mt-4 text-gray-600">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Groups */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-16">
            Get Connected
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {groups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-[#0B3954]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6
                                transform group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-[#0B3954]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
                  <p className="text-gray-600">{group.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#0B3954]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            Connect with other young adults who are passionate about faith and making a difference.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/contact" className="bg-white text-[#0B3954] hover:bg-gray-100 px-8 py-3 
                                      rounded-lg font-medium transition-all duration-300">
              Get Connected
            </Link>
            <Link to="/events" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 
                                     rounded-lg font-medium transition-all duration-300">
              View Calendar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YoungAdults;