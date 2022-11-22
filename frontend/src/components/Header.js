import { Link } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom"

const DashHeader = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const onMenuClicked = () => navigate("/menu")
    const onContactClicked = () => navigate("/contact")
    const onHomeClicked = () => navigate("/")

    const content = (
        <header className="dash-header">
            <div className="dash-header__container">
                <Link to="/">
                    <img
                        className="dash-header__title"
                        id="logo"
                        src="https://shipleydonuts.com/wp-content/uploads/2022/09/Shipley_Logo_1_color_brown.png"
                        alt="logo"
                        width="90vw"
                    ></img>
                </Link>
                <nav className="dash-header__nav">
                    <button
                        className="icon-button"
                        title="DonutHome"
                        onClick={onHomeClicked}
                    >
                        Home
                    </button>
                    <button
                        className="icon-button"
                        title="Menu"
                        onClick={onMenuClicked}
                    >
                        Menu
                    </button>
                    <button
                        className="icon-button"
                        title="Contact"
                        onClick={onContactClicked}
                    >
                        Contact
                    </button>
                </nav>
            </div>
        </header>
    )

    return content
}
export default DashHeader
