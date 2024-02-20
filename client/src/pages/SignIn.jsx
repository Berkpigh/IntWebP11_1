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
    <div className="flex-1 bg-dark min-h-screen">
      <div className="p-10">
        <div className="box-border border bg-white w-300px  mx-auto p-8 ">
          <img
            className="w-6 h-6 m-auto"
            src={userprofile}
            alt="profile utilisateur"
          />
          <h1 className="my-4">Sign In</h1>
          <form>
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="username">
                Username
              </label>
              <input
                className="border-black border p-5px"
                type="text"
                id="username"
              />
            </div>
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="password">
                Password
              </label>
              <input
                className="border-black border p-5px"
                type="password"
                id="password"
              />
            </div>
            <div className="flex">
              <input className="" type="checkbox" id="remember-me" />
              <label className="mx-1" htmlFor="remember-me">
                Remember me
              </label>
            </div>
            <button className="text-grey-fff my-4 w-full p-2 text-lg font-bold bg-submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
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
