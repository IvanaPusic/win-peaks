import { Outlet } from 'react-router-dom'
import Navigation from "../common/navigation/Navigation"


const Root = () => {
  return (
    <>
      <Outlet/>
      <Navigation/>
    </>
  )
}

export default Root