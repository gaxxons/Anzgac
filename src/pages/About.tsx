import React from 'react';
import { Users, Heart, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const leaders = [
    {
      name: "Rev. Daniel Mensah",
      role: "Senior Pastor",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Sarah Owusu",
      role: "Youth Pastor",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Michael Addo",
      role: "Elder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const beliefs = [
    {
      title: "Scripture",
      description: "We believe the Bible is God's inspired Word and the foundation of our faith.",
    },
    {
      title: "Salvation",
      description: "We believe in salvation through faith in Jesus Christ alone.",
    },
    {
      title: "Sabbath",
      description: "We observe the seventh-day Sabbath as a day of rest and worship.",
    },
    {
      title: "Second Coming",
      description: "We anticipate the soon return of Jesus Christ.",
    },
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
          <h1 className="text-5xl font-bold text-white mb-6">About ANZGAC</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            A vibrant community of Seventh-day Adventist believers from Ghana, united in faith and culture across Australia and New Zealand.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ANZGAC began as a small group of Ghanaian Adventists who came together to worship and maintain their cultural identity while living in Australia and New Zealand. What started as informal gatherings has grown into a thriving community of believers.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, we continue to grow and serve our community, providing a spiritual home for Ghanaian Adventists and welcoming all who wish to worship with us.
              </p>
              <Link to="/about/story" className="btn-primary">
                Read Full Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
                alt="Church Community"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-[#0B3954] mb-2">20+</div>
                <div className="text-gray-600">Years of Community</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-16">
            What We Believe
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beliefs.map((belief, index) => (
              <div key={index} className="card p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">{belief.title}</h3>
                <p className="text-gray-600">{belief.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/about/beliefs" className="btn-primary">
              Learn More About Our Beliefs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-16">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3954]/80 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-gray-600">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 bg-[#0B3954]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            We welcome you to be part of our growing family. Experience the warmth of Ghanaian hospitality and the joy of worshiping together.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/worship/services" className="bg-white text-[#0B3954] hover:bg-gray-100 px-8 py-3 
                                                rounded-lg font-medium transition-all duration-300">
              Join Us This Sabbath
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

export default About;