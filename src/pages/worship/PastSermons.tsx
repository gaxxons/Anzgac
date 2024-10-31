import React, { useState } from 'react';
import { Search, Calendar, Clock, Download, Play, Filter, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const PastSermons = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');

  const sermons = [
    {
      title: "Walking in Faith",
      speaker: "Rev. Daniel Mensah",
      date: "March 16, 2024",
      duration: "45 minutes",
      category: "Faith",
      thumbnail: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "The Power of Prayer",
      speaker: "Elder James Kwesi",
      date: "March 9, 2024",
      duration: "38 minutes",
      category: "Prayer",
      thumbnail: "https://images.unsplash.com/photo-1507447786077-aff6d1c311a4?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Understanding God's Grace",
      speaker: "Pastor Sarah Owusu",
      date: "March 2, 2024",
      duration: "42 minutes",
      category: "Grace",
      thumbnail: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Living the Christian Life",
      speaker: "Rev. Daniel Mensah",
      date: "February 24, 2024",
      duration: "40 minutes",
      category: "Christian Living",
      thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=500"
    }
  ];

  const categories = ["All", "Faith", "Prayer", "Grace", "Christian Living", "Youth", "Family"];
  const months = ["All", "March 2024", "February 2024", "January 2024", "December 2023"];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 57, 84, 0.8), rgba(11, 57, 84, 0.8)), 
          url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80')`
        }}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Past Sermons</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Access our library of past sermons and messages to continue your spiritual growth journey.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search sermons..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B3954] focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-[#0B3954] focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>

              <div className="relative">
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-[#0B3954] focus:border-transparent"
                >
                  {months.map((month) => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative">
                  <img 
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#0B3954]">
                    {sermon.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{sermon.title}</h3>
                  <p className="text-gray-600 mb-4">{sermon.speaker}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{sermon.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{sermon.duration}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <Link 
                      to={`/worship/sermons/${sermon.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-[#0B3954] font-medium hover:text-[#0D4B6F] transition-colors"
                    >
                      Watch Now
                    </Link>
                    <button className="text-gray-500 hover:text-[#0B3954] transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <button className="btn-primary">
            Load More Sermons
          </button>
        </div>
      </section>
    </div>
  );
};

export default PastSermons;