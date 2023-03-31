// I would probably change this to Nav

import { Link } from 'react-router-dom';
import { myVariable } from '../../keys/clientKeys';

export default function Header() {

  return (
    <header>
    <Link to='/' className='logo'>
      Jason Codes Blog
    </Link>
    <nav>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </nav>
    {console.log(myVariable)}
  </header>
 ) 
}