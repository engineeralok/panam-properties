
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-20 space-y-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Get in Touch with Panam-Properties</h1>
        <p className="text-gray-400 max-w-2xl">
          Welcome to Panam-Properties's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, send us a message below.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl">
            <Mail className="w-6 h-6 text-purple-600 mb-2" />
            <p className="text-gray-400">info@Panam-Properties.com</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <Phone className="w-6 h-6 text-purple-600 mb-2" />
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <MapPin className="w-6 h-6 text-purple-600 mb-2" />
            <p className="text-gray-400">Main Headquarters</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <div className="flex gap-4 mb-2">
              <Instagram className="w-6 h-6 text-purple-600" />
              <Linkedin className="w-6 h-6 text-purple-600" />
              <Facebook className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-gray-400">Social Media</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Let's Connect</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="bg-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone"
                className="bg-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <select className="bg-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600">
                <option value="">Inquiry Type</option>
                <option value="buy">Buy Property</option>
                <option value="sell">Sell Property</option>
                <option value="rent">Rent Property</option>
                <option value="other">Other</option>
              </select>
            </div>
            <select className="w-full bg-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600">
              <option value="">How Did You Hear About Us?</option>
              <option value="social">Social Media</option>
              <option value="search">Search Engine</option>
              <option value="referral">Referral</option>
              <option value="other">Other</option>
            </select>
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full bg-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" className="rounded text-purple-600" />
              <label htmlFor="terms" className="text-gray-400">
                I agree with Terms of Use and Privacy Policy
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
            >
              Send Your Message
            </button>
          </form>
        </div>
      </section>

      {/* Office Locations */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Discover Our Office Locations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Headquarters */}
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Main Headquarters</h3>
            <p className="text-lg mb-2">123 Panam-Properties Plaza, City Center, Metropolis</p>
            <p className="text-gray-400 mb-6">
              Our main headquarters serves as the heart of Panam-Properties. Located in the bustling city
              center, here you'll find our team of experts ready to assist with all your real estate needs.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-600" />
                <span>info@Panam-Properties.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-purple-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-600" />
                <span>Metropolis</span>
              </div>
            </div>
            <button className="w-full bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700">
              Get Direction
            </button>
          </div>

          {/* Regional Office */}
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Regional Office</h3>
            <p className="text-lg mb-2">456 Urban Avenue, Downtown District, Metropolis</p>
            <p className="text-gray-400 mb-6">
              Panam-Properties's presence extends to multiple regions, each with its own dynamic real estate
              landscape. Our regional offices are strategically located to best serve our customers.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-600" />
                <span>regional@Panam-Properties.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-purple-600" />
                <span>+1 (555) 987-6543</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-600" />
                <span>Metropolis</span>
              </div>
            </div>
            <button className="w-full bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700">
              Get Direction
            </button>
          </div>
        </div>
      </section>

      {/* Company Gallery */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Explore Panam-Properties's World</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="aspect-video">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              alt="Office interior"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="aspect-video">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              alt="Team meeting"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="aspect-video">
            <img
              src="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&w=800&q=80"
              alt="Property tour"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-gray-900 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Start Your Real Estate Journey Today</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Panam-Properties is here to assist you every step of the way.
          </p>
          <button className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700">
            Explore Properties
          </button>
        </div>
      </section>
    </div>
  );
}