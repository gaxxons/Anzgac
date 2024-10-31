import React from 'react';
import { Users, MapPin, Clock, Calendar, Heart, Book, Coffee, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmallGroups = () => {
  const groups = [
    {
      title: "Young Professionals",
      day: "Every Tuesday",
      time: "7:00 PM",
      location: "Various Locations",
      leader: "Michael Addo",
      description: "Career-focused discussions and spiritual growth for young professionals."
    },
    {
      title: "Family Life",
      day: "Every Wednesday",
      time: "6:30 PM",
      location: "Fellowship Hall",
      leader: "The Owusu Family",
      description: "Support and discussion group for families navigating life together."
    },
    {
      title: "Women's Bible Study",
      day: "Every Thursday",
      time: "10:00 AM",
      location: "Church Library",
      leader: "Sarah Mensah",
      description: "Deep dive into Scripture with focus on women's perspectives and challenges."
    },
    {
      title: "Men's Fellowship",
      day: "Every Saturday",
      time: "7:30 AM",
      location: "Community Room",
      leader: "Daniel Koffi",
      description: "Brotherhood, accountability, and spiritual growth for men."
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Community",
      description: "Build meaningful relationships with fellow believers"
    },
    {
      icon: Book,
      title: "Bible Study",
      description: "Grow deeper in your understanding of God's Word"
    },
    {
      icon: Heart,
      title: "Support",
      description: "Find encouragement and prayer support"
    },
    {
      icon: Coffee,
      title: "Fellowship",
      description: "Share life experiences in a welcoming environment"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 57, 84, 0.8), rgba(11, 57, 84, 0.8)), 
          url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80')`
        }}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Small Groups</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Connect, grow, and share life together in our small group communities.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-16">
            Why Join a Small Group?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-[#0B3954]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6
                                transform group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-[#0B3954]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Groups List */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-12">Available Groups</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {groups.map((group, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0B3954]/10 rounded-lg p-3">
                    <Users className="w-6 h-6 text-[#0B3954]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{group.title}</h3>
                    <p className="text-gray-600 mb-4">{group.description}</p>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{group.day}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{group.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{group.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span>Led by {group.leader}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Your Own Group */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Start Your Own Group</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Feel called to lead? We provide training, resources, and support to help you start and lead a successful small group.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Heart className="w-6 h-6 text-[#0B3954] mr-3 mt-1" />
                  <span className="text-gray-600">Leadership training provided</span>
                </li>
                <li className="flex items-start">
                  <Book className="w-6 h-6 text-[#0B3954] mr-3 mt-1" />
                  <span className="text-gray-600">Study materials and resources</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-[#0B3954] mr-3 mt-1" />
                  <span className="text-gray-600">Ongoing support and mentoring</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-primary">
                Learn About Leading
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80"
                alt="Small Group Leadership"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#0B3954]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join a Group?</h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            Take the first step towards deeper community and spiritual growth.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/contact" className="bg-white text-[#0B3954] hover:bg-gray-100 px-8 py-3 
                                      rounded-lg font-medium transition-all duration-300">
              Find a Group
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 
                                      rounded-lg font-medium transition-all duration-300">
              Contact a Leader
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmallGroups;