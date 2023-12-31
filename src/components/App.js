import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import '../styles/App.css';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
 import { CheckUserExist } from '../helper/helper';
const router=createBrowserRouter([
  {
path:'/',
element:<Main></Main>
  },
  {
    path:'/quiz',
    element:<CheckUserExist><Quiz/></CheckUserExist>
  },
  {
    path:'/result',
    element:<CheckUserExist><Result/></CheckUserExist>
  }
])
function App() {
  return (
    <div >
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
