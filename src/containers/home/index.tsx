import Head from 'next/head'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Portfolio from './Portfolio'
import Services from './Services'
import Experience from './Experience'
import Contact from './Contact'
import Footer from './Footer'
import { ContainerPage } from '@/types/container'

const HomeContainer: ContainerPage = () => {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <Head>
        <title>Full Stack Software Developer Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default HomeContainer;
