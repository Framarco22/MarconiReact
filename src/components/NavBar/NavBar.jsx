import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"
import Button from "../Button/Button"

const NavBar = () => {
    return (
        <nav>
            < Logo />
            <div>
                < Button label={'Service'} clickeando={() => console.log('Service')}/>
                < Button label={'Products'} clickeando={() => console.log('Products')}/>
                < Button label={'About Us'} clickeando={() => console.log('ServAbout Usice')}/>
                < Button label={'Languages'} clickeando={() => console.log('Languages')}/>
                < Button label={'Book Now'} clickeando={() => console.log('Book Now')}/>
            </div>
            < CartWidget />
        </nav>

    )
}

export default NavBar