import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"

const NavBar = () => {
    return (
        <nav>
            < Logo />
            <div>
                <button> Services </button>
                <button> Products </button>
                <button> About Us </button>
                <button> Languages </button>
                <button> Book Now </button>
            </div>
            < CartWidget />
        </nav>

    )
}

export default NavBar