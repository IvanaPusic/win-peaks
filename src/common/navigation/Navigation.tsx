import { Link } from 'react-router-dom';
import community from '../../assets/community.svg';
import home from '../../assets/home.svg';
import inbox from '../../assets/inbox.svg';
import map from '../../assets/map.svg';
import plus from '../../assets/plus.svg';
import './Navigation.scss';

type Props = {}

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='nav-container'>
        <li className = 'route'>
          <Link to = '/'>
           <span className='img-container'>
            <img src={home} alt="home" />
           </span>
            <span className='text-container'>
              	Home
            </span>
          </Link>
        </li>
        <li className = 'route'>
          <Link to = '/map'>
            <span className='img-container'>
              <img src={map} alt="map" />
            </span>
            <span className='text-container'>
              Map
            </span>
          </Link>
        </li>
        <li className = 'route'>
          <Link to = '/add-adventure'>
            <span className='img-container'>
            <img src={plus} alt="plus" />
            </span>
            <span className='text-container'>
            Add adventure
            </span>
          </Link>
        </li>
        <li className = 'route'>
          <Link to = '/community'>
            <span className='img-container'>
            <img src={community} alt="community" />
            </span>
            <span className='text-container'>
            Community
            </span>
          </Link>
        </li>
        <li className = 'route'>
          <Link to = '/inbox'>
            <span className='img-container'>
              <img src={inbox} alt="inbox" />
            </span>
            <span className='text-container'>
              Inbox
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

