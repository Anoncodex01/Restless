import React, { useState } from 'react';
import { X, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact RDV Consultants – Business Setup & Advisory UAE</title>
        <meta name="description" content="Contact RDV Consultants for expert business setup, accounting, tax, and advisory services in Dubai and the UAE. Get in touch with our team today." />
        <meta name="keywords" content="Contact RDV Consultants, Contact business consultants UAE, Contact accounting firm Dubai, Contact business setup UAE, Contact tax consultants UAE, Contact business advisory Dubai" />
        <meta property="og:title" content="Contact RDV Consultants – Business Setup & Advisory UAE" />
        <meta property="og:description" content="Contact RDV Consultants for expert business setup, accounting, tax, and advisory services in Dubai and the UAE. Get in touch with our team today." />
        <meta property="og:image" content="/images/favicon-r-orange.png" />
        <meta property="og:url" content="https://rdv.ae/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact RDV Consultants – Business Setup & Advisory UAE" />
        <meta name="twitter:description" content="Contact RDV Consultants for expert business setup, accounting, tax, and advisory services in Dubai and the UAE. Get in touch with our team today." />
        <meta name="twitter:image" content="/images/favicon-r-orange.png" />
      </Helmet>
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[#1e1b4b]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e1b4b]/95 to-[#1e1b4b]/70"></div>
          <img
            src="/images/imas.jpg"
            alt="Dubai Marina"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Start a
            <span className="text-orange-500"> Conversation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Reach out to us with your questions, feedback, or partnership inquiries. We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div>
            <h2 className="text-[#1e1b4b] text-5xl font-bold mb-16">
              Have Questions? We're<br />Here To Help!
            </h2>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 mb-12">
              {/* Email */}
              <div>
                <h3 className="text-gray-500 text-lg mb-1">Email</h3>
                <a href="mailto:info@rdv.ea" className="text-[#1e1b4b] text-lg hover:text-orange-600">
                  info@rdv.ea
                </a>
              </div>

              {/* Call Us */}
              <div>
                <h3 className="text-gray-500 text-lg mb-1">Call Us</h3>
                <a href="tel:(+971) 55 470 3339" className="text-[#1e1b4b] text-lg hover:text-orange-600">
                  (+971) 55 470 3339
                </a>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-gray-500 text-lg mb-1">Location</h3>
                <p className="text-[#1e1b4b] text-lg">
                Dubai Silicon Oasis, DDP<br />
                Building A2, Dubai, UAE

                </p>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="text-gray-500 text-lg mb-1">Follow Us</h3>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://twitter.com/rdvconsultants"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1e1b4b] hover:text-orange-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/15w8NYqRVV/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1e1b4b] hover:text-orange-600 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/rdv.consultants?igsh=MTBobzg5eml3aGMxMQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1e1b4b] hover:text-orange-600 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/rdvconsultants/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1e1b4b] hover:text-orange-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[300px] rounded-lg overflow-hidden bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178770731627!2d55.27180147538251!3d25.197201977705288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sid!4v1709697649519!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullname" className="block text-gray-900 mb-2">
                  Fullname
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-900 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your message"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1e1b4b] text-white py-4 px-6 rounded-full font-medium hover:bg-[#2d2a5a] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;