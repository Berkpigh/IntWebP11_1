import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import bankLogo from '../assets/img/argentBankLogo.png'

const Header = () => {
  const { currentUser } = useSelector((state) => state.user)
  return (
    <nav className="flex justify-between items-center max-w-8xl mx-auto pt-1.5 pb-5">
      <Link to="/">
        <img
          className="max-w-full w-48"
          src={bankLogo}
          alt="logo argentBankDB"
        />
        {/* <h1 className='border-0 '>Argent Bank</h1> */}
      </Link>
      <div>
        {/*         <a href="/sign-in" className="no-underline mr-2">
          {currentUser ? '' : <i className=""></i>}
        </a> 
        <a href="/sign-in" className="no-underline mr-2">
          {currentUser ? '' : 'Connexion'}
        </a>
        <a href="/sign-up" className="no-underline  mr-2">
          {currentUser ? (
            ''
          ) : (
            <span className="bg-green-600 text-white">S&apos;enregistrer</span>
          )}
          </a> */}
        <a href="/sign-in" className="no-underline mr-2">
          Connexion
        </a>
        <a href="/sign-up" className="no-underline  mr-2">
          S&apos;enregistrer
        </a>
      </div>
    </nav>
  )
}

export default Header
