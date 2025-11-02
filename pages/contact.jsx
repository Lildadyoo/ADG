import ContactForm from '../components/ContactForm';
import contentData from '../data/content.json';

export default function Contact() {
  return (
    <main className="py-8 md:py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-adg-blue mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-adg-blue mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-2xl mr-4">📍</div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">{contentData.organization.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-2xl mr-4">📞</div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">{contentData.organization.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-2xl mr-4">✉️</div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <a href={`mailto:${contentData.organization.email}`} className="text-adg-blue hover:underline">
                    {contentData.organization.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h2 className="text-2xl font-bold text-adg-blue mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>

        {/* Google Map */}
        <div className="card p-0 overflow-hidden">
          <div className="w-full h-96 bg-gray-200 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.75123456789!2d31.157407914757812!3d-0.40382869999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dba7c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2sLyantonde%20District%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

