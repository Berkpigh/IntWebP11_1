import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import userprofile from '../assets/img/userprofile.png'

const SignIn = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const { loading, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(signInStart())
      const res = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success === false) {
        dispatch(signInFailure(data))
        return
      }
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      dispatch(signInFailure(error))
    }
  }
  return (
    <div className="flex-1 bg-dark">
      <section className="box-border bg-white w-300px m-auto my-12 p-8">
        <img className="w-6 h-6 " src={userprofile} alt="profile utilisateur" />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          <a href="./user.html" className="sign-in-button">
            Sign In
          </a>
          {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
          {/* <!-- <button className="sign-in-button">Sign In</button> --> */}
        </form>
      </section>
    </div>
  )
}

export default SignIn
/* 
return (
  <div className="p-3 max-w-lg mx-auto  pb-48">
    <h1 className="text-3xl text-center font-semibold my-7">Connexion</h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Adresse mail"
        id="email"
        className="bg-slate-100 p-3 rounded-lg"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        id="password"
        className="bg-slate-100 p-3 rounded-lg"
        onChange={handleChange}
      />
      <button
        disabled={loading}
        className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
      >
        {loading ? 'Loading...' : 'Se connecter'}
      </button>
    </form>
    <div className="flex gap-2 mt-5">
      <p>Vous n&apos;avez pas encore de compte ?</p>
      <Link to="/sign-up">
        <span className="text-blue-500">Créer un compte</span>
      </Link>
    </div>
    <p className="text-red-700 mt-5">
      {error ? error.message || 'Une erreur est survenue !' : ''}
    </p>
  </div>
)
 */
