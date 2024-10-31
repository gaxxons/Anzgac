import React, { useState } from 'react';
import { CreditCard, DollarSign, Gift, ArrowRight, Heart, Calendar, Bank, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Give = () => {
  const [amount, setAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [fund, setFund] = useState('General Fund');
  const [frequency, setFrequency] = useState('One-time Gift');

  const handleAmountSelect = (value: string) => {
    setSelectedAmount(value);
    setAmount(value.replace('$', ''));
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAmount('');
    setAmount(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount) {
      toast.error('Please enter an amount');
      return;
    }
    toast.success('Proceeding to payment...');
    // Add payment processing logic here
  };

  const givingOptions = [
    {
      icon: CreditCard,
      title: "Online Giving",
      description: "Make a secure one-time or recurring donation online"
    },
    {
      icon: Bank,
      title: "Bank Transfer",
      description: "Set up direct bank transfers for regular giving"
    },
    {
      icon: Calendar,
      title: "Scheduled Giving",
      description: "Plan your giving with automated recurring donations"
    },
    {
      icon: Gift,
      title: "Special Offerings",
      description: "Support specific ministries and projects"
    }
  ];

  const fundingAreas = [
    {
      title: "General Fund",
      description: "Supports our core ministries and operations",
      percentage: "60%"
    },
    {
      title: "Missions & Outreach",
      description: "Supports local and global mission work",
      percentage: "15%"
    },
    {
      title: "Youth & Children",
      description: "Invests in the next generation",
      percentage: "15%"
    },
    {
      title: "Building & Maintenance",
      description: "Maintains and improves our facilities",
      percentage: "10%"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 57, 84, 0.8), rgba(11, 57, 84, 0.8)), 
          url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80')`
        }}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Give</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Support our mission to spread God's love through generous giving.
          </p>
        </div>
      </section>

      {/* Online Giving Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Make a Donation</h2>
              <p className="text-gray-600 mb-8">
                Your generous giving supports our ministries and helps us make a difference in our community.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    {['$50', '$100', '$250', '$500'].map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => handleAmountSelect(value)}
                        className={`py-2 px-4 border-2 rounded-lg transition-colors ${
                          selectedAmount === value
                            ? 'bg-[#0B3954] text-white border-[#0B3954]'
                            : 'border-[#0B3954] text-[#0B3954] hover:bg-[#0B3954] hover:text-white'
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    value={amount}
                    onChange={handleCustomAmount}
                    placeholder="Other Amount"
                    className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#0B3954] focus:ring-[#0B3954]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Fund
                  </label>
                  <select 
                    value={fund}
                    onChange={(e) => setFund(e.target.value)}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#0B3954] focus:ring-[#0B3954]"
                  >
                    {fundingAreas.map((area) => (
                      <option key={area.title} value={area.title}>
                        {area.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Giving Frequency
                  </label>
                  <select 
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#0B3954] focus:ring-[#0B3954]"
                  >
                    <option>One-time Gift</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Quarterly</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Continue to Payment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>

                <div className="flex items-center justify-center text-sm text-gray-500">
                  <Lock className="w-4 h-4 mr-2" />
                  Secure payment processing
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-[#F8F9FA] p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Where Your Gift Goes</h3>
                <div className="space-y-4">
                  {fundingAreas.map((area, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{area.title}</span>
                        <span>{area.percentage}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#0B3954] h-2 rounded-full transition-all duration-300"
                          style={{ width: area.percentage }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{area.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F8F9FA] p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Tax Deductible</h3>
                <p className="text-gray-600 text-sm">
                  All donations are tax-deductible. You will receive a receipt for your records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-16">
            Ways to Give
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {givingOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-[#0B3954]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6
                                transform group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-[#0B3954]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{option.title}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stewardship Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Biblical Stewardship</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe in faithful stewardship of all that God has blessed us with. Your giving supports our mission to spread the gospel and serve our community.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Heart className="w-6 h-6 text-[#0B3954] mr-3 mt-1" />
                  <span className="text-gray-600">Supporting local and global missions</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-6 h-6 text-[#0B3954] mr-3 mt-1" />
                  <span className="text-gray-600">Investing in youth and children's programs</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-6 h-6 text-[#0B3954] mr-3 mt-1" />
                  <span className="text-gray-600">Maintaining and improving our facilities</span>
                </li>
              </ul>
              <Link to="/resources/stewardship" className="btn-primary">
                Learn More About Stewardship
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80"
                alt="Community Service"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-24 bg-[#0B3954]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Have Questions?</h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            Our team is here to help you with any questions about giving or stewardship.
          </p>
          <Link to="/contact" className="bg-white text-[#0B3954] hover:bg-gray-100 px-8 py-3 
                                    rounded-lg font-medium transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Give;