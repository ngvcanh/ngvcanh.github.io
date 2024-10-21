// components/Services.tsx
import Item from './Item'
import { FaCamera, FaDesktop, FaCode, FaTerminal } from 'react-icons/fa'

const Services = () => {
  const services = [
    { title: 'Video Editing', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.', icon: FaCamera },
    { title: 'Mobile App Development', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.', icon: FaDesktop },
    { title: 'Desktop App Development', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.', icon: FaCode },
    { title: 'Programming Languages', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.', icon: FaTerminal },
  ]

  return (
    <section id="services" className="py-16 px-4 bg-navy-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Item key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;