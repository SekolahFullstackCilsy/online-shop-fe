import React, {useState} from 'react';
import { loginUser } from '../../store/actions/auth';
import { useDispatch, useSelector } from 'react-redux'

const Auth = (props) => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(loginUser(form))
  }

  return (
    <>
      <h1>Auth</h1>
      <form onSubmit={(e) => handleLogin(e)}>
        <div>
          <label htmlFor="">Username</label>
          <input type="text" name="username" value={form.username}
            onChange={(e) => handleChangeForm(e)}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" name="password" value={form.password}
            onChange={(e) => handleChangeForm(e)}
          />
        </div>
        <div>
          <button>Login</button>
        </div>
        {auth.error && <div style={{ color: 'red', fontWeight: 'bold' }}>
          {auth.error}
        </div>}
      </form>
    </>
  )
}


export default Auth