import { useState } from 'react';
import './Login.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { login } from '../../validator';
import z from 'zod';
import { createUser } from '../../services';

// TODO Limpiar de console.log y refactorizar handleLogin

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<z.ZodError | null>(null);

  const auth = getAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setErrors(null);
    try {
      login.parse(loginInfo);
      signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          sessionStorage.setItem('uid', user.uid);
          createUser(user.uid)
            .then((userId) => {
              console.log(userId);
              window.location.href = '/admin/dashboard';
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } catch (error) {
      setErrors(error as z.ZodError);
      console.log(error);
      setTimeout(() => {
        setErrors(null);
      }, 3000);
    }
    setLoading(false);
  };

  return (
    <div className="loginContainer">
      <h2>Login</h2>
      <form className="form" onSubmit={handleLogin}>
        <label>Usuario</label>
        <input
          onChange={handleChange}
          name="email"
          type="text"
          style={{
            borderColor: errors?.issues.find(
              (issue) => issue.path[0] === 'email'
            )
              ? 'red'
              : '',
          }}
        />
        <label>Contraseña</label>
        <input
          style={{
            borderColor: errors?.issues.find(
              (issue) => issue.path[0] === 'password'
            )
              ? 'red'
              : '',
          }}
          onChange={handleChange}
          name="password"
          type="password"
        />
        <button disabled={loading} className="loginButton">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
