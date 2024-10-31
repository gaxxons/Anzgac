import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurStory = () => {
  const timeline = [
    {
      year: '1995',
      title: 'The Beginning',
      description: 'A small group of Ghanaian Adventists began meeting in Sydney homes for fellowship.',
    },
    {
      year: '2000',
      title: 'First Official Gathering',
      description: 'The community organized its first official church service with 50 members.',
    },
    {
      year: '2005',
      title: 'Growth & Expansion',
      description: 'ANZGAC expanded to Melbourne and Brisbane, forming new congregations.',
    },
    {
      year: '2010',
      title: 'New Zealand Chapter',
      description: 'The first New Zealand congregation was established in Auckland.',
    },
    {
      year: '2015',
      title: 'Youth Movement',
      description: 'Launch of dedicated youth programs and initiatives across all chapters.',
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Embraced online services and virtual community engagement during global challenges.',
    },
    {
      year: 'Today',
      title: 'Thriving Community',
      description: 'A vibrant community of over 1,000 members across Australia and New Zealand.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 57, 84, 0.8), rgba(11, 57, 84, 0.8)), 
          url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80')`
        }}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Our Story</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            The journey of ANZGAC from humble beginnings to a thriving community of faith.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Heritage</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Australia and New Zealand Ghanaian Adventist Community (ANZGAC) began as a vision to create a spiritual home for Ghanaian Adventists in Oceania. What started as informal gatherings in living rooms has blossomed into a vibrant, multi-city community.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our story is one of faith, perseverance, and the power of community. Through the years, we've maintained our cultural identity while embracing our new home, creating a unique blend of Ghanaian heritage and local culture.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80"
                alt="Church Community"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-16">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            <div className="space-y-16">
              {timeline.map((event, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className="w-1/2 flex justify-center">
                    <div className={`bg-white p-6 rounded-lg shadow-lg max-w-md ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#0B3954] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {event.year}
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#0B3954]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Be Part of Our Story</h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            Join our community and help write the next chapter of ANZGAC's journey.
          </p>
          <Link to="/contact" className="bg-white text-[#0B3954] hover:bg-gray-100 px-8 py-3 rounded-lg 
                                     font-medium inline-flex items-center space-x-2 transition-all duration-300">
            <span>Get Involved</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurStory;