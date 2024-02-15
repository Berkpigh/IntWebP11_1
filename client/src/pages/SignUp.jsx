import {Link} from 'react-router-dom'

const SignUp = () => {
  const handleSubmit = () => {

  }
  const handleChange = () => {

  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Créer un compte</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder="Nom d'utilisateur"
          id='username'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder="Nom"
          id='name'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder="Prénom"
          id='firstname'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <button
          //disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          S&apos;enregister
           {/* {loading ? 'Loading...' : 'Sign Up'} */}
        </button>
        {/*<OAuth /> */}
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Vous avez déjà un compte ?</p>
        <Link to='/sign-in'>
          <span className='text-blue-500'>Connecter-vous</span>
        </Link>
      </div>
      {/*} <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p> */}
    </div>
  );
}

export default SignUp
