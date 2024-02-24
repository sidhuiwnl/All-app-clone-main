import React,{Suspense} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const Homepage = React.lazy(() => import('./components/Homepage'))
const Notification = React.lazy(() => import('./components/Notification'))
const Setting = React.lazy(() => import('./components/Setting'))
const Messaging = React.lazy(() => import('./components/Messaging'))

function App() {
  

  return (
    <>
     <Suspense fallback={<div>Loading....</div>}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/notification' element = {<Notification/>} />
            <Route path='/setting' element={<Setting/>} />
            <Route path='/messaging' element={<Messaging/>} />
          </Routes>
        </BrowserRouter>
      </Suspense>  
     
    </>
  )
}

export default App
