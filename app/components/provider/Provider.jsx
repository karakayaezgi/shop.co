"use client"
import { store } from '../../redux/store/store'
import { Provider as ReactProvider } from 'react-redux'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Provider = ({children}) => {
  return (
    <ReactProvider store={store}>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex-grow'>
            {children}
        </main>
        <Footer />
      </div>
    </ReactProvider>
  )
}

export default Provider
