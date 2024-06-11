import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
// import { IoIosStats } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { CgGym } from 'react-icons/cg';

const AdminNavbar = () => {
  const uid = sessionStorage.getItem('uid');
  console.log(uid);

  const location = useLocation();
  if (!location.pathname.includes('admin')) {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link
          style={{
            color: location.pathname === `/admin/login` ? 'black' : 'red',
          }}
          to={`/admin/login`}
        >
          <IoHomeOutline />
          <p>{location.pathname === `/admin/login` ? 'Inicio' : ''}</p>
        </Link>
      </div>
      <div className="navbar-center">
        <div className="navbar-icon">
          <Link
            style={{
              color: location.pathname === `/admin/dashboard` ? 'black' : 'red',
            }}
            to={`/admin/dashboard`}
          >
            {' '}
            <CgGym />
            <p>{location.pathname === `/admin/dashboard` ? 'Plan' : ''}</p>{' '}
          </Link>
        </div>
      </div>
      {/* <div className="navbar-right">
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
      </div> */}
    </nav>
  );
};

export default AdminNavbar;
