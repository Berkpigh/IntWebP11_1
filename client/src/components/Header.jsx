import { Link } from 'react-router-dom'
import bankLogo from '../assets/img/argentBankLogo.png'

const Header = () => {
  return (
    <div  className='flex justify-between items-center max-w-8xl mx-auto p-3'>
      <Link to='/' >
        <img src={bankLogo} alt="logo argentBankDB" />
      </Link>
      <ul className='flex gap-4 text-3xl'>
          <Link to='/'>
            <li>Accueil</li>
          </Link>
          <Link to='/about'>
            <li>A propos</li>
          </Link>
          <Link to='/sign-in'>
            <li>Se connecter</li>
          </Link>
          <Link to='/sign-in'>
            <li>S&apos;enregistrer</li>
          </Link>
        </ul>
    </div>
  )
}

export default Header
