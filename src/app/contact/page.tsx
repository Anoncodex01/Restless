import { ContactForm } from '../../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20" />
          <div className="absolute inset-0 bg-[#0f172a]/90" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div>
            <ContactForm className="shadow-2xl shadow-orange-500/5" />
          </div>

          {/* Contact Information */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-[#0f172a] rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Our Location
                    </h3>
                    <p className="text-gray-400">
                      Business Bay, Dubai,<br />
                      United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Phone Number
                    </h3>
                    <p className="text-gray-400">
                      +971 4 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Email Address
                    </h3>
                    <p className="text-gray-400">
                      info@rdvaccounting.ae
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Working Hours
                    </h3>
                    <p className="text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden h-[300px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178530154282!2d55.2667!3d25.1858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzA5LjAiTiA1NcKwMTYnMDAuMCJF!5e0!3m2!1sen!2sae!4v1635000000000!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 