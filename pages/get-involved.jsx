import Link from 'next/link';
import DonationForm from '../components/DonationForm';

export default function GetInvolved() {
  const involvementOptions = [
    {
      title: 'Volunteer',
      description: 'Join our team of dedicated volunteers and make a direct impact in communities across Uganda. We welcome individuals with diverse skills and backgrounds who are passionate about sustainable development.',
      buttonText: 'Sign Up to Volunteer',
      link: '/contact?type=volunteer',
      icon: '🤝'
    },
    {
      title: 'Partner',
      description: 'Partner with ADG to amplify your impact. We collaborate with corporations, foundations, and other organizations to create sustainable development solutions that benefit communities and partners alike.',
      buttonText: 'Become a Partner',
      link: '/contact?type=partner',
      icon: '🤝'
    },
    {
      title: 'Donate',
      description: 'Your financial support enables us to implement life-changing programs in education, health, water, and empowerment. Every contribution, no matter the size, makes a meaningful difference.',
      buttonText: 'Make a Donation',
      link: '#donate',
      icon: '💝'
    }
  ];

  return (
    <main className="py-8 md:py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-adg-blue mb-4">Get Involved</h1>
          <p className="text-xl text-gray-600">Join us in creating lasting positive change</p>
        </div>

        {/* Involvement Options */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {involvementOptions.map((option, index) => (
            <div key={index} className="card text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{option.icon}</div>
              <h2 className="text-2xl font-bold text-adg-blue mb-4">{option.title}</h2>
              <p className="text-gray-600 mb-6">{option.description}</p>
              {option.link.startsWith('#') ? (
                <a href={option.link} className="btn-primary inline-block">
                  {option.buttonText}
                </a>
              ) : (
                <Link href={option.link} className="btn-primary inline-block">
                  {option.buttonText}
                </Link>
              )}
            </div>
          ))}
        </section>

        {/* Donation Form */}
        <section id="donate">
          <DonationForm />
        </section>
      </div>
    </main>
  );
}

