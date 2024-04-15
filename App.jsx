import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Boots from './component/Boots'
import Stream from './component/Stream'
import Pricing from './component/Pricing'
import Testimonial from './component/Testimonial'
import Sign from './component/Sign'
import Page from './component/page'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div class="bg-gradient-to-t from-blue-500 to-white pb-[350px]">
          <Navbar></Navbar>
          <Page></Page>
        </div>
        <div class="bg-gradient-to-t from-slate-300 to-white pb-[0]">
        <Boots></Boots>
        </div>
        <Stream></Stream>
        <Pricing></Pricing>
        <Testimonial></Testimonial>
        <div class="bg-gradient-to-t from-blue-500 to-white pb-[0]">
          <Sign></Sign>
        </div>

      </div>
    </>
  )
}

export default App
