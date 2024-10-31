import React from 'react';
import { Book, Heart, Cross, Sun, ArrowRight, Globe, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatWeBelieve = () => {
  const corePrinciples = [
    {
      icon: Book,
      title: 'Scripture',
      description: 'We believe the Bible is God\'s inspired Word, revealing His will for humanity.',
    },
    {
      icon: Cross,
      title: 'Salvation',
      description: 'Salvation comes through faith in Jesus Christ as our personal Savior.',
    },
    {
      icon: Sun,
      title: 'Sabbath',
      description: 'The seventh-day Sabbath is God\'s gift of rest and renewal to humanity.',
    },
    {
      icon: Globe,
      title: 'Second Coming',
      description: 'We anticipate the soon return of Jesus Christ as promised in Scripture.',
    },
    {
      icon: Heart,
      title: 'Wholistic Living',
      description: 'We believe in caring for our bodies as temples of the Holy Spirit.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We value fellowship and support within our diverse church family.',
    },
    {
      icon: Clock,
      title: 'Prophecy',
      description: 'We believe in the prophetic guidance given to the Adventist church.',
    },
    {
      icon: Heart,
      title: 'Service',
      description: 'We are called to serve others and share God\'s love with our community.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 57, 84, 0.8), rgba(11, 57, 84, 0.8)), 
          url('https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80')`
        }}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">What We Believe</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Our faith is rooted in Scripture and the teachings of Jesus Christ.
          </p>
        </div>
      </section>

      {/* Core Beliefs Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-16">
            Our Core Beliefs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corePrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div key={index} className="card p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-[#0B3954]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6
                                group-hover:bg-[#0B3954] transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-[#0B3954] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Statement of Faith</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As Seventh-day Adventists, we believe in the power of God's love and His plan for humanity. Our faith is built on the foundation of Scripture and guided by the teachings of Jesus Christ.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We embrace our unique identity as Ghanaian Adventists, combining our rich cultural heritage with our deep spiritual convictions. Our worship celebrates both our faith and our cultural identity.
              </p>
              <Link to="/resources/beliefs" className="btn-primary">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80"
                alt="Bible Study"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#0B3954]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Explore Your Faith With Us</h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            Join us in worship and discover the joy of growing in faith together.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/worship/services" className="bg-white text-[#0B3954] hover:bg-gray-100 px-8 py-3 
                                               rounded-lg font-medium transition-all duration-300">
              Join Us This Sabbath
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 
                                      rounded-lg font-medium transition-all duration-300">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeBelieve;