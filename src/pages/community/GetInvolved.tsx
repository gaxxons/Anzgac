import React from 'react';
import { Heart, Users, Music, Book, Coffee, Star, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  const opportunities = [
    {
      icon: Music,
      title: "Music Ministry",
      description: "Join our choir or music team"
    },
    {
      icon: Users,
      title: "Youth Programs",
      description: "Mentor and guide young people"
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Participate in outreach programs"
    },
    {
      icon: Coffee,
      title: "Hospitality",
      description: "Welcome and assist visitors"
    },
    {
      icon: Book,
      title: "Teaching",
      description: "Lead Bible studies or classes"
    },
    {
      icon: Star,
      title: "Event Planning",
      description: "Help organize church events"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 57, 84, 0.8), rgba(11, 57, 84, 0.8)), 
          url('https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80')`
        }}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Get Involved</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Discover meaningful ways to serve and make a difference in our community.
          </p>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-16">
            Service Opportunities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <div key={index} className="card p-6 text-center group hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-[#0B3954]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6
                                transform group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-[#0B3954]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-6">{opportunity.description}</p>
                  <Link 
                    to="/contact" 
                    className="text-[#0B3954] font-medium hover:text-[#0D4B6F] inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-8">
            Training & Support
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide comprehensive training and ongoing support to help you succeed in your area of service. Our leadership team is committed to helping you develop your skills and grow in your ministry role.
          </p>
          <Link to="/resources" className="btn-primary">
            View Resources
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Next Steps</h2>
              <ul className="space-y-6 mb-8">
                <li className="flex items-start">
                  <div className="bg-[#0B3954]/10 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-[#0B3954] font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Explore Opportunities</h3>
                    <p className="text-gray-600">Browse through our various ministry areas and find what interests you.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0B3954]/10 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-[#0B3954] font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Connect With Us</h3>
                    <p className="text-gray-600">Reach out to learn more about specific opportunities and requirements.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#0B3954]/10 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-[#0B3954] font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Get Started</h3>
                    <p className="text-gray-600">Begin serving and making a difference in our community.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
                alt="Volunteer Training"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#0B3954]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            Join our team of dedicated volunteers and help us build a stronger community.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/contact" className="bg-white text-[#0B3954] hover:bg-gray-100 px-8 py-3 
                                      rounded-lg font-medium transition-all duration-300">
              Get Started Today
            </Link>
            <Link to="/about/volunteer" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 
                                             rounded-lg font-medium transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;