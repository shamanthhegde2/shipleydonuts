import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from "react-router-dom"

function Footer() {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const onGoHomeClicked = () => navigate("/")

    let goHomeButton = null
    if (pathname !== "/") {
        goHomeButton = (
            <button
                className="dash-footer__button icon-button"
                title="Home"
                onClick={onGoHomeClicked}
            >
                <FontAwesomeIcon icon={faHouse} />
            </button>
        )
    }
    return (
        <footer className="dash-footer">
            {goHomeButton}
            <div>5200 North Main, Houston, TX 77009 713-869-4636</div>
        </footer>
    )
}

export default Footer
