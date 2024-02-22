import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Transactions from './Transactions'

const User = () => {
  const { currentUser } = useSelector((state) => state.user)
  return (
    <div className="min-h-80vh flex-1 bg-dark min-h-screen">
      <div className="text-grey-fff mb-8">
        <h1 className="block text-2em font-bold p-4">
          Welcome back
          <br />
          {currentUser.body.userName} !
        </h1>
        <Link to="/profile">
          <button
            type="button"
            className="text-grey-fff my-4 w-auto p-2.5 text-lg font-bold bg-submit"
          >
            Edit Name
          </button>
        </Link>
      </div>
      <Transactions view={1} />
    </div>
  )
}
export default User
