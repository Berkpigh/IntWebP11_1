import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import bankLogo from '../assets/img/argentBankLogo.png'

const Header = () => {
  const { currentUser } = useSelector((state) => state.user)
  return (
    <div className="flex justify-between items-center max-w-8xl mx-auto p-3">
      <Link to="/">
        <img src={bankLogo} alt="logo argentBankDB" />
      </Link>
      <ul className="flex gap-4 text-3xl">
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <Link to="/about">
          <li>A propos</li>
        </Link>
        <Link to="/sign-up">
          <li>S&apos;enregistrer</li>
        </Link>
        <Link to="/profile">
          {currentUser ? <li>Mon profil</li> : <li>Connexion</li>}
        </Link>
      </ul>
    </div>
  )
}

export default Header
