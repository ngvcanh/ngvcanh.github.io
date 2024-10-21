/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';

const ExperienceItem = ({ name, logo }: any) => (
  <div className="bg-navy-800 p-4 rounded-lg flex items-center justify-center">
    <Image src={logo} alt={name} width={50} height={50} objectFit="contain" />
  </div>
)

const Experience = () => {
  const experiences = [
    { name: 'AWS', logo: '/aws-logo.png' },
    { name: 'CSS3', logo: '/css3-logo.png' },
    { name: 'React', logo: '/react-logo.png' },
    { name: 'HTML5', logo: '/html5-logo.png' },
    { name: 'Angular', logo: '/angular-logo.png' },
    { name: 'JavaScript', logo: '/javascript-logo.png' },
    { name: 'Node.js', logo: '/nodejs-logo.png' },
    { name: 'Python', logo: '/python-logo.png' },
  ]

  return (
    <section id="experience" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">EXPERIENCE</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience;
