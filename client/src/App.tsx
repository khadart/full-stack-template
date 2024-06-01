import './App.css';
import {  createBrowserRouter,  RouterProvider} from 'react-router-dom';
import{ Login ,Home, SignUp}from './pages'
import { paths } from './routes';



export const router = createBrowserRouter (
  [
  {
  path: paths.login,
  element:<Login/>
  },
  {
    path: paths.home,
    element:<Home/>
  },
  {
    path: paths.signUp,
    element:<SignUp/>
  }
  ]
);

function App(){
return <RouterProvider router={router} />
}


export default App