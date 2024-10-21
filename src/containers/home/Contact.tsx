/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const ContactItem = ({ icon: Icon, text }: any) => (
  <div className="flex items-center space-x-2 mb-4">
    <Icon className="w-6 h-6 text-blue-500" />
    <span>{text}</span>
  </div>
)

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
  
    try {
      // Here you would typically send the data to your backend
      console.log('Form data:', data);
      alert('Message sent successfully!');
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-navy-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">CONTACT</h2>
        <div className="bg-navy-700 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Drop Me a Message</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ContactItem icon={FaEnvelope} text="fsdev@gmail.com" />
              <ContactItem icon={FaPhone} text="+91 9090-0090" />
              <ContactItem icon={FaMapMarkerAlt} text="Mumbai, India" />
            </div>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" className="w-full p-2 mb-4 bg-navy-600 rounded" required />
              <input type="email" name="email" placeholder="Email" className="w-full p-2 mb-4 bg-navy-600 rounded" required />
              <textarea name="message" placeholder="Message" rows={4} className="w-full p-2 mb-4 bg-navy-600 rounded" required></textarea>
              <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
