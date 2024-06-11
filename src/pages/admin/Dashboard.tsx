import { Link } from 'react-router-dom';

const Dashboard = () => {
  const uid = sessionStorage.getItem('uid');
  console.log(uid);

  // getUserById(uid as string).then((user) => {
  //   console.log(user);
  // });

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Bienvenido a tu app</p>
      <Link to={'/admin/create-plan'}>Crear Nuevo Plan</Link>
      <Link to={'/admin/my-plans'}>Mis Planes</Link>
    </div>
  );
};

export default Dashboard;
