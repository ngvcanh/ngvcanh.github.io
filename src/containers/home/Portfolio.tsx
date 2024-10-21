// components/Portfolio.tsx
import Item from './Item'

const Portfolio = () => {
  const projects = [
    { title: 'Dating Mobile App Design', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.', imageSrc: '/project1.jpg' },
    { title: 'E-commerce Mobile App Design', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.', imageSrc: '/project2.jpg' },
    { title: 'Fitness Mobile App Design', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.', imageSrc: '/project3.jpg' },
    { title: 'Modeling Mobile App Design', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.', imageSrc: '/project4.jpg' },
  ]

  return (
    <section id="portfolio" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">PORTFOLIO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Item key={index} {...project} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md">View all</button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
