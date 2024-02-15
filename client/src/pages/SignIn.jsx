import { Link } from 'react-router-dom'

const SignIn = () => {
  const handleSubmit = () => {

  }
  const handleChange = () => {
    
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Connexion</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='Adresse mail'
          id='email'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Mot de passe'
          id='password'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <button
          // disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          Se connecter
          {/*{loading ? 'Loading...' : 'Sign In'} */}
        </button>
        {/*} <OAuth /> */}
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Vous n&apos;avez pas encore de compte ?</p>
        <Link to='/sign-up'>
          <span className='text-blue-500'>Créer un compte</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>
        {/* {error ? error.message || 'Something went wrong!' : ''} */}
      </p>
    </div>
  );
}

export default SignIn
