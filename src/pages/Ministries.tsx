import React from 'react';
import { Users, Heart, Book, Music, Baby, UserPlus, Coffee, HandHeart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ministries = () => {
  const ministries = [
    {
      title: "Children's Ministry",
      icon: Baby,
      description: "Nurturing young minds through Bible stories, activities, and Christian education.",
      link: "/ministries/children"
    },
    {
      title: "Youth Ministry",
      icon: Users,
      description: "Empowering teenagers and young people to grow in faith and leadership.",
      link: "/ministries/youth"
    },
    {
      title: "Young Adults",
      icon: UserPlus,
      description: "Building community and spiritual growth among young professionals.",
      link: "/ministries/young-adults"
    },
    {
      title: "Music Ministry",
      icon: Music,
      description: "Praising God through traditional and contemporary worship music.",
      link: "/ministries/music"
    },
    {
      title: "Bible Study",
      icon: Book,
      description: "Deep diving into God's Word through group studies and discussions.",
      link: "/ministries/bible-study"
    },
    {
      title: "Community Service",
      icon: HandHeart,
      description: "Reaching out to our community through various service projects.",
      link: "/ministries/community-service"
    },
    {
      title: "Prayer Ministry",
      icon: Heart,
      description: "Supporting our church and community through intercessory prayer.",
      link: "/ministries/prayer"
    },
    {
      title: "Fellowship Groups",
      icon: Coffee,
      description: "Building relationships through small group meetings and activities.",
      link: "/ministries/fellowship"
    }
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
          <h1 className="text-5xl font-bold text-white mb-6">Our Ministries</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Serving God and our community through various ministries that cater to different age groups and interests.
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => {
              const IconComponent = ministry.icon;
              return (
                <Link key={index} to={ministry.link} className="card p-6 hover:border-[#0B3954] border-2 border-transparent">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#0B3954]/10 rounded-lg p-3">
                      <IconComponent className="w-6 h-6 text-[#0B3954]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{ministry.title}</h3>
                      <p className="text-gray-600">{ministry.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-8">
            Get Involved
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            There are many ways to serve and grow in our church community. Find your place in one of our ministries and make a difference.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link to="/community/volunteer" className="btn-secondary">
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministries;