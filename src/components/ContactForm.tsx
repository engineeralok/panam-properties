import { Mail, Phone } from 'lucide-react';

export default function ContactForm() {
  return (
    <div className="bg-gray-900 p-8 rounded-xl">
      <h3 className="text-2xl font-bold mb-6">Inquire About Property</h3>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="bg-gray-800 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-gray-800 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-800 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="bg-gray-800 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Preferred Contact Method</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="contact" value="phone" className="text-purple-600" />
              <Phone className="w-4 h-4" />
              Phone
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="contact" value="email" className="text-purple-600" />
              <Mail className="w-4 h-4" />
              Email
            </label>
          </div>
        </div>
        <textarea
          placeholder="Your Message"
          rows={4}
          className="bg-gray-800 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
        ></textarea>
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}