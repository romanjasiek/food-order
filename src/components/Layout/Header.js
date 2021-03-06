import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return  <Fragment>
                <header className="navbar">
                    <h1>Mahlzeit!</h1>
                    <HeaderCartButton onClick={props.onShow}/>
                </header>
                <div className="header">
                    <div className="header__container">
                        <div className="header__heading-container">
                            <h1 className="header__heading-main">Mahlzeit!</h1>
                            <p className="header__heading-sub-main">Regional. Gesund. ├ľkologisch. Lecker!</p>
                        </div>
                    </div>
                    <div className="header__slope"></div>
                 </div>

            </Fragment>
}

export default Header;