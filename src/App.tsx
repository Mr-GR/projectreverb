import { Route, Routes } from 'react-router-dom'
import './index.css'
import RootLayout from './_root/RootLayout'
import Home from './_root/pages/Home'
import ContactUs from './_root/pages/ContactUs'
import AboutUs from './_root/pages/AboutUs'
import Info from './_root/pages/Info'


function App() {

  return (
    <main className='flex bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Routes>

        {/* Public Routes */}
        <Route element={ <RootLayout />}>
          <Route index element={<Home />} />
          <Route path='/information' element={<Info />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='contact' element={<ContactUs />} />
        </Route>
      </Routes>

    </main>
  )
}

export default App
