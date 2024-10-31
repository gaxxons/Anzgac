import React from 'react';
import { Heart, Book, Users, Calendar, Star, Music, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Children = () => {
  const programs = [
    {
      title: "Sabbath School",
      age: "Ages 4-12",
      time: "Saturdays, 9:30 AM",
      description: "Interactive Bible lessons, songs, and activities tailored for different age groups."
    },
    {
      title: "Adventurers Club",
      age: "Ages 6-9",
      time: "Sundays, 2:00 PM",
      description: "Fun activities that teach life skills, build character, and foster spiritual growth."
    },
    {
      title: "Pathfinders",
      age: "Ages 10-15",
      time: "Sundays, 3:30 PM",
      description: "Character-building activities, outdoor adventures, and community service."
    }
  ];

  const activities = [
    {
      icon: Book,
      title: "Bible Stories",
      description: "Interactive storytelling that brings Scripture to life"
    },
    {
      icon: Music,
      title: "Children's Choir",
      description: "Joyful worship through music and song"
    },
    {
      icon: Star,
      title: "Arts & Crafts",
      description: "Creative activities that reinforce biblical lessons"
    },
    {
      icon: Users,
      title: "Group Activities",
      description: "Team-building games and social interaction"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 57, 84, 0.8), rgba(11, 57, 84, 0.8)), 
          url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80')`
        }}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Children's Ministry</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Nurturing young hearts and minds in faith, love, and understanding of God's Word.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-12">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0B3954]/10 rounded-lg p-3">
                    <Calendar className="w-6 h-6 text-[#0B3954]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{program.title}</h3>
                    <p className="text-[#0B3954] font-medium mb-2">{program.age}</p>
                    <p className="text-gray-600 mb-2">{program.time}</p>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-16">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-[#0B3954]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6
                                transform group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-[#0B3954]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Child Safety First</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The safety and well-being of your children is our top priority. All our volunteers undergo thorough background checks and training in child safety protocols.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Heart className="w-6 h-6 text-[#0B3954] mr-3 mt-1" />
                  <span className="text-gray-600">Trained and certified staff</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-6 h-6 text-[#0B3954] mr-3 mt-1" />
                  <span className="text-gray-600">Secure check-in/check-out system</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-6 h-6 text-[#0B3954] mr-3 mt-1" />
                  <span className="text-gray-600">Emergency response protocols</span>
                </li>
              </ul>
              <Link to="/about/safety" className="btn-primary">
                Learn More About Safety
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1602028915047-37269d1a73f7?auto=format&fit=crop&q=80"
                alt="Child Safety"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#0B3954]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Children's Ministry</h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            Give your child the gift of faith-based learning and community.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/contact" className="bg-white text-[#0B3954] hover:bg-gray-100 px-8 py-3 
                                      rounded-lg font-medium transition-all duration-300">
              Register Your Child
            </Link>
            <Link to="/volunteer" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 
                                        rounded-lg font-medium transition-all duration-300">
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Children;