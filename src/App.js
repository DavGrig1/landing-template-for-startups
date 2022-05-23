import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/navbar/Navbar'
import Features from './components/Features'
import Main from './components/main/Main'
import Workflow from './components/workflow/Workflow'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
   useEffect(() => {
      Aos.init({ duration: 2500 })
   }, [])

   return (
      <div className='lg:mx-auto max-w-5xl sm:mx-4 text-white'>
         <Navbar />
         <Main />
         <Workflow />
         <Features />
         <Testimonials />
         <ContactUs />
         <Footer />
      </div>
   )
}

export default App
