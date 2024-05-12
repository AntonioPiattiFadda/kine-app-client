import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { IoIosStats } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { CgGym } from 'react-icons/cg';

const Navbar = () => {
  const clientId = 1231;

  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link
          style={{
            color: location.pathname === `/home/${clientId}` ? 'black' : 'grey',
          }}
          to={`/home/${clientId}`}
        >
          <IoHomeOutline />
          <p>{location.pathname === `/home/${clientId}` ? 'Home' : ''}</p>
        </Link>
      </div>
      <div className="navbar-center">
        <div className="navbar-icon">
          <Link
            style={{
              color:
                location.pathname === `/patient/${clientId}` ? 'black' : 'grey',
            }}
            to={`/patient/${clientId}`}
          >
            {' '}
            <CgGym />
            <p>
              {location.pathname === `/patient/${clientId}` ? 'Patient' : ''}
            </p>{' '}
          </Link>
        </div>
      </div>
      <div className="navbar-right">
        <Link
          style={{
            color:
              location.pathname === `/graphics/${clientId}` ? 'black' : 'grey',
          }}
          to={`/graphics/${clientId}`}
        >
          {' '}
          <IoIosStats />{' '}
          <p>
            {location.pathname === `/graphics/${clientId}` ? 'graphics' : ''}
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
