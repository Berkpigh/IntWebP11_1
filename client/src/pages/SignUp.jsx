import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userprofile from '../assets/img/userprofile.png'

const SignUp = () => {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(JSON.stringify(formData))
    try {
      setLoading(true)
      setError(false)
      const res = await fetch('http://localhost:3001/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      console.log(data)
      setLoading(false)
      if (data.success === false) {
        setError(true)
        return
      }
      navigate('/sign-in')
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }
  return (
    <div className="min-h-80vh flex-1 bg-dark min-h-screen">
      <div className="p-10">
        <div className="box-border border bg-white w-300px  mx-auto p-8 ">
          <img
            className="w-6 h-6 m-auto"
            src={userprofile}
            alt="profile utilisateur"
          />
          <h1 className="my-4">Sign Up</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="border-black border p-5px"
              />
            </div>
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="password">
                Password
              </label>
              <input
                type="text"
                placeholder="Password"
                id="password"
                className="border-black border p-5px"
              />
            </div>
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="firstname">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                id="firstname"
                className="border-black border p-5px"
              />
            </div>
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="lastname">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                id="lastname"
                className="border-black border p-5px"
              />
            </div>
            <div className="flex flex-col text-left mb-4">
              <label className="font-bold" htmlFor="username">
                User Name
              </label>
              <input
                type="text"
                placeholder="User Name"
                id="username"
                className="border-black border p-5px"
                onChange={handleChange}
              />
            </div>
            <button className="text-grey-fff my-4 w-full p-2 text-lg font-bold bg-submit">
              {loading ? 'Loading...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
      <div className="flex gap-2 mt-5">
        <p>Vous avez déjà un compte ?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Connecter-vous</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">
        {error && 'Une erreur est survenue !'}
      </p>
    </div>
  )
}

export default SignUp
