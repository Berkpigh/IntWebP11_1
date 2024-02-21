import { useSelector } from 'react-redux'
import bankLogo from '../assets/img/argentBankLogo.png'
import userprofile from '../assets/img/userprofile.png'
import signoutlogo from '../assets/img/logout_icon.png'

const Header = () => {
  const { currentUser } = useSelector((state) => state.user)

  return (
    <reactFragment>
      <nav className="min-h-6vh max-h-10vh flex justify-between items-center mx-auto pt-1.5 pb-5">
        <a href="/">
          <img
            className="max-w-full w-48"
            src={bankLogo}
            alt="logo argentBankDB"
          />
        </a>
        <div className="flex items-center">
          {currentUser ? (
            <img
              className="w-6 h-6 inline"
              src={userprofile}
              alt="profil utilisateur"
            />
          ) : (
            <img
              className="w-6 h-6 hidden"
              src={userprofile}
              alt="profil utilisateur"
            />
          )}
          {currentUser ? (
            <div className="flex items-center">
              <span className="mx-4 hover:underline">
                {currentUser.body.userName}
              </span>
              <a className="flex items-center mx-4" href="/signout">
                <img
                  className="w-6 h-6 "
                  src={signoutlogo}
                  alt="logo sign out"
                />
                <div className="mx-4">Sign Out</div>
              </a>
            </div>
          ) : (
            <a className="flex items-center" href="/login">
              <img
                className="w-6 h-6 "
                src={userprofile}
                alt="profile utilisateur"
              />
              <div className="mx-4">Sign In</div>
            </a>
          )}
        </div>
      </nav>
    </reactFragment>
  )
}

export default Header
