import { useSelector } from 'react-redux'
import bankLogo from '../assets/img/argentBankLogo.png'
import userprofile from '../assets/img/userprofile.png'

const Header = () => {
  const { currentUser } = useSelector((state) => state.user)
  return (
    <nav className="min-h-6vh max-h-10vh flex justify-between items-center mx-auto pt-1.5 pb-5">
      <a href="/">
        <img
          className="max-w-full w-48"
          src={bankLogo}
          alt="logo argentBankDB"
        />
      </a>
      <div className="">
        <a className="flex items-center" href="/login">
          <img
            className="w-6 h-6 "
            src={userprofile}
            alt="profile utilisateur"
          />
          <div className="mx-4">Sign In</div>
        </a>
      </div>
    </nav>
  )
}

export default Header
