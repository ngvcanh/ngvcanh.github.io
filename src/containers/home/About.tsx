const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-navy-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">ABOUT ME</h2>
        <div className="bg-navy-700 p-6 rounded-lg">
          <p className="text-gray-300 mb-4">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md">HIRE ME</button>
            <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md">RESUME</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
