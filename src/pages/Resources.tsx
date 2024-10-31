import React from 'react';
import { Book, Video, FileText, Download, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const resources = [
    {
      title: "Sermon Archive",
      icon: Video,
      description: "Access our collection of past sermons and special services.",
      items: [
        "Latest Sabbath Service",
        "Youth Day Special",
        "Prayer Week Series"
      ]
    },
    {
      title: "Bible Studies",
      icon: Book,
      description: "Download Bible study materials and guides.",
      items: [
        "Fundamental Beliefs",
        "Prophecy Series",
        "New Believers Guide"
      ]
    },
    {
      title: "Newsletters",
      icon: FileText,
      description: "Stay updated with our church newsletters.",
      items: [
        "March 2024 Newsletter",
        "February 2024 Newsletter",
        "January 2024 Newsletter"
      ]
    },
    {
      title: "Music",
      icon: Headphones,
      description: "Listen to our choir and music ministry recordings.",
      items: [
        "Worship Songs Collection",
        "Ghanaian Hymns",
        "Special Programs"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 57, 84, 0.8), rgba(11, 57, 84, 0.8)), 
          url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80')`
        }}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Resources</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Access our library of spiritual resources, including sermons, Bible studies, and more.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <div key={index} className="card p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-[#0B3954]/10 rounded-lg p-3">
                      <IconComponent className="w-6 h-6 text-[#0B3954]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                      <p className="text-gray-600">{resource.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-6">
                    {resource.items.map((item, idx) => (
                      <li key={idx} className="flex items-center justify-between">
                        <span className="text-gray-700">{item}</span>
                        <button className="text-[#0B3954] hover:text-[#0D4B6F] transition-colors">
                          <Download className="w-5 h-5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={`/resources/${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[#0B3954] font-medium hover:text-[#0D4B6F] transition-colors flex items-center"
                  >
                    View All
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Request Resources */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-8">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            If you need specific resources or have questions, our team is here to help.
          </p>
          <Link to="/contact" className="btn-primary">
            Request Resources
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Resources;