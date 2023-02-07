import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { AddAdventure, Community, Home, Map, Messages, Posts, Root } from './pages';

function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path = '/' element = {<Root/>}>
      <Route index element = {<Home/>}/>
      <Route path = '/map' element = {<Map/>} />
      <Route path = '/add-adventure' element = {<AddAdventure/>} />
      <Route path = '/inbox' element = {<Messages/>} />
      <Route path = '/community' element = {<Community />} />
      <Route path = '/posts' element = {<Posts/>} />
    </Route>
  ));
  
  return (
   <RouterProvider router = {router}/>
  );
}

export default App
