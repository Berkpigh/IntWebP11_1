import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signOut } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'

const SignOut = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSignOut = async () => {
    try {
      await fetch('/api/v1/user/signout')
      dispatch(signOut())
    } catch (error) {
      console.log(error)
    }
    navigate('/')
  }
  return (
    <div className="min-h-80vh flex flex-col bg-dark min-h-screen">
      <button
        className="p-10 m-auto text-grey-fff my-4 w-36 p-2 text-lg font-bold bg-submit"
        type="button"
        onClick={handleSignOut}
      >
        Sign Out ?
      </button>
      <Link
        to="/"
        className="p-10 m-auto text-grey-fff my-4 w-36 p-2 text-lg font-bold bg-submit"
      >
        Cancel
      </Link>
    </div>
  )
}

export default SignOut
