'use client'

import { useState } from 'react'
import clsx from 'clsx'

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Mobile App')

  const tabs = ['Mobile App', 'Website', 'Desktop', 'Other Projects']

  const projects = [
    {
      title: 'Dating Mobile App Design',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      image: '/project1.jpg'
    },
    {
      title: 'E-commerce Mobile App Design',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      image: '/project2.jpg'
    },
    {
      title: 'Fitness Mobile App Design',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      image: '/project3.jpg'
    },
    {
      title: 'Modeling Mobile App Design',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      image: '/project4.jpg'
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* Centered Title */}
        <h2 className="text-2xl font-semibold text-white text-center mb-8">
          PORTFOLIO
        </h2>

        {/* Tabs */}
        <div className="bg-[#111A27] rounded-lg p-4 mb-8">
          <div className="flex justify-center">
            <div className="flex space-x-16">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={clsx(
                    'relative pb-2 text-base font-medium transition-colors duration-300',
                    {
                      'text-[#67C6E3] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#67C6E3]': activeTab === tab,
                      'text-white hover:text-[#67C6E3]': activeTab !== tab,
                    }
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={clsx(
                'flex gap-6 items-center',
                { 'flex-row-reverse': index % 2 !== 0 }
              )}
            >
              {/* Image Section with Blue Frame */}
              <div className="w-1/2">
                <div className="relative">
                  <div className="relative z-10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[320px] object-cover rounded-lg"
                    />
                  </div>
                  {/* Blue Frame */}
                  <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#4E85F0] rounded-lg z-0"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-1/2 space-y-4">
                {/* Project Number */}
                <span className="text-[#67C6E3] text-sm font-medium">
                  PROJECT {String(index + 1).padStart(2, '0')}
                </span>

                {/* Project Title */}
                <h3 className="text-white text-2xl font-medium">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-[#848484] text-base">
                  {project.description}
                </p>

                {/* Read More Link */}
                <div>
                  <button className="text-[#67C6E3] text-sm hover:underline inline-flex items-center gap-2">
                    Read more
                    <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-gradient-to-r from-[#4E85F0] to-[#6464ED] text-white text-sm font-medium px-8 py-3 rounded hover:opacity-90 transition-duration-300">
            View all
          </button>
        </div>
      </div>
    </section>
  )
}