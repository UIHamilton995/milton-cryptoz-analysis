import { Outlet, Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

const Home = () => {
  return (
    <main className='w-full h-full flex flex-col first-letter:content-center items-center relative text-white font-nunito'>
      <div className='w-screen h-screen bg-gray-300 fixed -z-10'></div>
      <Link to='/' className="font-bold text:sm sm:text-xl flex flex-wrap mr-auto ml-3">
        <div className="w-16 h-12">
          <img src="./src/assets/burncoin.png" alt="Crytpoz logo" className="" />  
        </div>
        <div className="hidden sm:flex flex-col h-14">
          <span className="text-lg mt-1 text-cyan">Milton</span>
          <span className="text-lg -mt-2 text-cyan">Cryptoz</span>
        </div>
      </Link>
      <Navigation />
      <Outlet />
    </main>
  )
}

export default Home  