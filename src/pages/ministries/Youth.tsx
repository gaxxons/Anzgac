import React from 'react';
import { Users, Heart, Book, Music, Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Youth = () => {
  const programs = [
    {
      title: "Youth Sabbath Service",
      day: "Every Sabbath",
      time: "9:30 AM",
      location: "Youth Chapel",
      description: "Dynamic worship service designed for teens and young people."
    },
    {
      title: "Youth Bible Study",
      day: "Every Wednesday",
      time: "6:30 PM",
      location: "Youth Room",
      description: "Interactive Bible study and discussion for young people."
    },
    {
      title: "Youth Social Night",
      day: "Monthly, Last Friday",
      time: "7:00 PM",
      location: "Fellowship Hall",
      description: "Fun activities, games, and fellowship for youth."
    }
  ];

  const ministries = [
    {
      icon: Heart,
      title: "Spiritual Growth",
      description: "Nurturing faith in young hearts"
    },
    {
      icon: Users,
      title: "Fellowship",
      description: "Building lasting friendships"
    },
    {
      icon: Book,
      title: "Bible Study",
      description: "Deep diving into God's Word"
    },
    {
      icon: Music,
      title: "Youth Worship",
      description: "Praising God through music"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 57, 84, 0.8), rgba(11, 57, 84, 0.8)), 
          url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80')`
        }}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Youth Ministry</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Empowering young people to grow in faith, leadership, and community.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-12">Youth Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0B3954]/10 rounded-lg p-3">
                    <Calendar className="w-6 h-6 text-[#0B3954]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{program.title}</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{program.day}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{program.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{program.location}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">{program.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Areas */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-16">
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ministries.map((ministry, index) => {
              const IconComponent = ministry.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-[#0B3954]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6
                                transform group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-[#0B3954]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{ministry.title}</h3>
                  <p className="text-gray-600">{ministry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-8">
              Youth Testimonials
            </h2>
            <blockquote className="text-gray-600 mb-8 italic max-w-3xl mx-auto">
              "Being part of the youth ministry has helped me grow in my faith and make amazing friends who share my values. The mentorship and support from our leaders have been incredible."
            </blockquote>
            <p className="text-[#0B3954] font-medium">- Sarah, Youth Member</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#0B3954]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Youth Community</h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            Connect with other young people and grow in your faith journey.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/contact" className="bg-white text-[#0B3954] hover:bg-gray-100 px-8 py-3 
                                      rounded-lg font-medium transition-all duration-300">
              Get Connected
            </Link>
            <Link to="/events/youth" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 
                                          rounded-lg font-medium transition-all duration-300">
              View Youth Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Youth;