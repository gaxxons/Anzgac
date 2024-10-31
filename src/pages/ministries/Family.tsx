import React from 'react';
import { Home, Heart, Book, Users, Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Family = () => {
  const programs = [
    {
      title: "Family Worship Service",
      day: "Every Sabbath",
      time: "9:30 AM",
      location: "Main Sanctuary",
      description: "Intergenerational worship service for the whole family."
    },
    {
      title: "Marriage Enrichment",
      day: "Monthly, 2nd Sunday",
      time: "4:00 PM",
      location: "Fellowship Hall",
      description: "Workshops and activities for married couples."
    },
    {
      title: "Parenting Classes",
      day: "Monthly, 3rd Saturday",
      time: "3:00 PM",
      location: "Family Life Center",
      description: "Support and guidance for raising children in faith."
    }
  ];

  const ministries = [
    {
      icon: Heart,
      title: "Marriage Ministry",
      description: "Supporting and strengthening marriages"
    },
    {
      icon: Home,
      title: "Family Life",
      description: "Resources for building strong families"
    },
    {
      icon: Book,
      title: "Parent Support",
      description: "Guidance for Christian parenting"
    },
    {
      icon: Users,
      title: "Family Fellowship",
      description: "Activities for the whole family"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 57, 84, 0.8), rgba(11, 57, 84, 0.8)), 
          url('https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80')`
        }}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Family Ministry</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Building strong families through faith, fellowship, and support.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Strengthening Families</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Family Ministry is dedicated to supporting and nurturing strong, faith-centered families. We provide resources, counseling, and programs that help families grow together spiritually and emotionally.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From marriage enrichment to parenting support, we're here to help your family thrive in faith and love.
              </p>
              <Link to="/resources/family" className="btn-primary">
                Family Resources
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80"
                alt="Family Ministry"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-12">Family Programs</h2>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-16">
            How We Serve Families
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
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-8">
              Family Stories
            </h2>
            <blockquote className="text-gray-600 mb-8 italic max-w-3xl mx-auto">
              "The Family Ministry has been a blessing to our family. Through the marriage enrichment programs and parenting workshops, we've grown stronger in our faith and closer as a family. The support from other families in the community is invaluable."
            </blockquote>
            <p className="text-[#0B3954] font-medium">- The Addo Family</p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Family Resources</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Book className="w-6 h-6 text-[#0B3954] mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Family Devotional Materials</h3>
                    <p className="text-gray-600">Resources for family worship and Bible study</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Heart className="w-6 h-6 text-[#0B3954] mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Marriage Support</h3>
                    <p className="text-gray-600">Counseling and enrichment programs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-[#0B3954] mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Parenting Resources</h3>
                    <p className="text-gray-600">Tools and guidance for Christian parenting</p>
                  </div>
                </li>
              </ul>
              <Link to="/resources/family" className="btn-primary">
                Access Resources
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&q=80"
                alt="Family Resources"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#0B3954]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Family Community</h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            Connect with other families and grow together in faith and community.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/contact" className="bg-white text-[#0B3954] hover:bg-gray-100 px-8 py-3 
                                      rounded-lg font-medium transition-all duration-300">
              Get Connected
            </Link>
            <Link to="/events/family" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 
                                           rounded-lg font-medium transition-all duration-300">
              View Family Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Family;