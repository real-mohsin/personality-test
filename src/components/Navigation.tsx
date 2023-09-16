import teamwaylogo from '../assets/teamway-logos.png'

function Navigation() {

    return (
      <>
        <nav className="nav-bar">
          <div className='logo'>
            <img src={teamwaylogo} alt="teamway-log" className='w-100' />
          </div>
        </nav>
      </>
    )
  }
  
  export default Navigation
