import './style.scss'
import personicon from '../assets/person-img.png'
import { Link } from 'react-router-dom'

function Landing() {

    return (
      <>
        <div className='container'>
          <div className='landing-head txt-center'>
            Are you an introvert or an extrovert? Lets find out.
          </div>
          <Link to='/personality-test'>
            <div className='test-card'>
              <div className='icon'>
                <img src={personicon} alt="person-icon" className='w-100' />
              </div>
              <div className='title txt-center'>Personality Test</div>
            </div>
          </Link>
        </div>
      </>
    )
  }
  
  export default Landing
