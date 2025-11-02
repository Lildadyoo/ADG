import { useState } from 'react';

export default function DonationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    alert('Thank you for your donation! Payment integration will be implemented here.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="card mt-8">
      <h2 className="text-2xl font-bold text-adg-blue mb-6">Make a Donation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adg-blue focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adg-blue focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Donation Amount (USD)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            required
            min="1"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adg-blue focus:border-transparent"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-adg-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Pay with PayPal
          </button>
          <button
            type="button"
            onClick={() => alert('Mobile Money integration will be implemented here.')}
            className="flex-1 bg-adg-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Pay with Mobile Money
          </button>
        </div>
      </form>
    </div>
  );
}

