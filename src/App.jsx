import { Link } from 'react-router-dom'
import './App.css'
import Button from './components/button'
import { useEffect } from 'react'
import { initialiseGA } from './analytics/googleAnalytics'

function App() {
  
  useEffect(()=>{
    initialiseGA()
  },[])

  return (
    <>
      <p className='mx-auto text-green-700 text-4xl pt-20'>Hello Google Analytics...</p>
      <p className='pt-20'>Click below to navigate to homepage</p>
      <br/>
      <Link to={"/home"} className=' bg-yellow-200 rounded-full p-2'> Home Page</Link>
      <div className='h-32'/>
      <Button catagory="User Interaction" label="Click" />
        </>
  )
}

export default App
