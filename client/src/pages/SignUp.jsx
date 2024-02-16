import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
    <div className="p-3 max-w-lg mx-auto  pb-48">
      <h1 className="text-3xl text-center font-semibold my-7">
        Créer un compte
      </h1>
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
        <input
          type="text"
          placeholder="Prénom"
          id="firstName"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Nom"
          id="lastName"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          id="userName"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? 'Traitement en cours...' : "S'enregister"}
        </button>
        {/*<OAuth /> */}
      </form>
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
