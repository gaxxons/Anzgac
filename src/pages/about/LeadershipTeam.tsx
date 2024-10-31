import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeadershipTeam = () => {
  const leaders = [
    {
      name: "Rev. Daniel Mensah",
      role: "Senior Pastor",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80",
      bio: "Rev. Daniel has been leading our community for over 15 years, bringing wisdom and spiritual guidance.",
      contact: {
        email: "daniel.mensah@anzgac.org",
        phone: "+61 2 1234 5678"
      }
    },
    {
      name: "Sarah Owusu",
      role: "Youth Pastor",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80",
      bio: "Sarah leads our youth ministry with passion and innovation, inspiring the next generation.",
      contact: {
        email: "sarah.owusu@anzgac.org",
        phone: "+61 2 1234 5679"
      }
    },
    {
      name: "Michael Addo",
      role: "Elder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      bio: "Elder Michael brings years of experience in community leadership and pastoral care.",
      contact: {
        email: "michael.addo@anzgac.org",
        phone: "+61 2 1234 5680"
      }
    },
    {
      name: "Grace Asante",
      role: "Community Services Director",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
      bio: "Grace coordinates our community outreach programs with dedication and compassion.",
      contact: {
        email: "grace.asante@anzgac.org",
        phone: "+61 2 1234 5681"
      }
    },
    {
      name: "Samuel Koffi",
      role: "Music Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      bio: "Samuel leads our music ministry, bringing traditional and contemporary worship styles together.",
      contact: {
        email: "samuel.koffi@anzgac.org",
        phone: "+61 2 1234 5682"
      }
    },
    {
      name: "Elizabeth Boateng",
      role: "Children's Ministry Coordinator",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      bio: "Elizabeth nurtures our youngest members with creativity and loving care.",
      contact: {
        email: "elizabeth.boateng@anzgac.org",
        phone: "+61 2 1234 5683"
      }
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
          <h1 className="text-5xl font-bold text-white mb-6">Our Leadership Team</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Meet the dedicated individuals who guide and serve our community.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3954]/80 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-[#0B3954] font-medium mb-4">{leader.role}</p>
                  <p className="text-gray-600 mb-6">{leader.bio}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-4 h-4 mr-2" />
                      <a href={`mailto:${leader.contact.email}`} className="hover:text-[#0B3954]">
                        {leader.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      <a href={`tel:${leader.contact.phone}`} className="hover:text-[#0B3954]">
                        {leader.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-8">
            Get Involved
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Interested in serving? There are many opportunities to contribute to our community's growth.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Our Team
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LeadershipTeam;