import React, { useState } from 'react';

const Donate = () => {
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    anonymous: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission logic
    console.log({ donationType, amount, donorInfo });
    // You'd typically integrate with a payment gateway here
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Support Our Mission</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Your generous donation helps us continue providing vital services to children with disabilities and vulnerable families.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Donation Options */}
        <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Ways to Give</h2>
          
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-xl font-medium mb-4">Monthly Support</h3>
              <button
                onClick={() => setDonationType('monthly')}
                className={`w-full p-4 rounded-lg ${
                  donationType === 'monthly' 
                    ? 'bg-blue-800 text-white' 
                    : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                }`}
              >
                Become a Monthly Donor
              </button>
              <p className="mt-3 text-gray-600 text-sm">
                Recurring donations provide sustainable support for our programs
              </p>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-xl font-medium mb-4">One-Time Gift</h3>
              <button
                onClick={() => setDonationType('one-time')}
                className={`w-full p-4 rounded-lg ${
                  donationType === 'one-time' 
                    ? 'bg-blue-800 text-white' 
                    : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                }`}
              >
                Make a Single Donation
              </button>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Other Ways to Help</h3>
              <ul className="space-y-3 text-blue-800">
                <li>→ Sponsor a Child's Education</li>
                <li>→ Donate Medical Equipment</li>
                <li>→ Corporate Partnerships</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Donation Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Amount (KES)</label>
              <select
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-3 border rounded-lg"
                required
              >
                <option value="">Select Amount</option>
                <option value="500">500</option>
                <option value="1000">1,000</option>
                <option value="5000">5,000</option>
                <option value="other">Other</option>
              </select>
            </div>

            {amount === 'other' && (
              <div>
                <label className="block text-gray-700 mb-2">Custom Amount</label>
                <input
                  type="number"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter amount in KES"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                required
                onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg"
                required
                onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full p-3 border rounded-lg"
                required
                onChange={(e) => setDonorInfo({...donorInfo, phone: e.target.value})}
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                onChange={(e) => setDonorInfo({...donorInfo, anonymous: e.target.checked})}
              />
              <span className="text-gray-600">Make this donation anonymously</span>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-medium mb-4">Payment Method</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button type="button" className="p-3 border rounded-lg hover:border-blue-800">
                  M-Pesa
                </button>
                <button type="button" className="p-3 border rounded-lg hover:border-blue-800">
                  Credit Card
                </button>
                <button type="button" className="p-3 border rounded-lg hover:border-blue-800">
                  PayPal
                </button>
                <button type="button" className="p-3 border rounded-lg hover:border-blue-800">
                  Bank Transfer
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-4 rounded-lg hover:bg-blue-700 transition"
              >
                Complete Donation
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-12 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <img src="/ssl-secure.png" alt="SSL Secure" className="h-12" />
          <img src="/mpesa-logo.png" alt="M-Pesa" className="h-12" />
          <img src="/visa-mastercard.png" alt="Credit Cards" className="h-12" />
        </div>
        <p className="text-gray-600 text-sm">
          All donations are securely processed and tax-deductible
        </p>
      </div>
    </div>
  );
};

export default Donate;