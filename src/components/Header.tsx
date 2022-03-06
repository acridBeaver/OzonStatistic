import bell from '../recources/photos/bell_3.svg'
import logo from '../recources/photos/logo-market.jpg'
import StyledLink from "./styled-components/StyledLink";
import React from "react";

const Header : React.FC = () => {
    return (
        <header className={"header"}>
            <div className={"header__intro-part"}>
                <div className={"header__title"}>
                    <img className={"header__title-logo"} src={logo} alt=""/>
                    <h1 className={"header__title-name"}>
                        <span>МАРКЕТ</span>
                        <span className={"header__title-dot"}>&middot;</span>
                        <span>ПРО</span>
                    </h1>
                </div>

                <div className={"profile"}>
                    <span className={"profile__name"}>
                        poshlay13y.o
                    </span>
                    <div className={"profile__avatar"}>
                        <img className={"profile__avatar-img"}
                            src="https://phonoteka.org/uploads/posts/2021-05/1622024717_28-phonoteka_org-p-akhegao-piksel-art-krasivo-37.jpg"
                            alt=""/>
                    </div>
                    <div className={"profile__notifications"}>
                        <img className={"profile__notifications-img"} src={bell} alt=""/>
                    </div>
                    <span className={"profile__more"}>...</span>
                </div>
            </div>
            <nav className={"header__nav-part"}>
                <ul className={"nav-part__choose"}>
                    <li className={"nav-part__choose-element"}>
                        <StyledLink to="/">
                            <div className={"nav-part__choose-element-content"}>
                                Главная
                            </div>
                        </StyledLink>
                    </li>
                    <li className={"nav-part__choose-element"}>
                        <StyledLink to="/advertisement">
                            <div className={"nav-part__choose-element-content"}>
                                Рекламы
                            </div>
                        </StyledLink>
                    </li>
                    <li className={"nav-part__choose-element"}>
                        <StyledLink to="/unit">
                            <div className={"nav-part__choose-element-content"}>
                                Unit-экономика
                            </div>
                        </StyledLink>
                    </li>
                    <li className={"nav-part__choose-element"}>
                        <StyledLink to="/analytics">
                            <div className={"nav-part__choose-element-content"}>
                                Аналитика
                            </div>
                        </StyledLink>
                    </li>
                    <li className={"nav-part__choose-element"}>
                        <div className={"nav-part__choose-element-content"}>
                            Ещё...
                        </div>
                    </li>
                </ul>
                <div className={"nav-part__info-boxes"}>
                    <div className={"nav-part__info-box"}>
                        <span className={"nav-part__info-box-about"}>Последний проданный товар: NVIDIA-GTX-1060-6gb</span>
                    </div>
                    <div className={"nav-part__info-box"}>
                        <span className={"nav-part__info-box-about"}>Ваш текущий доход: 228 р.</span>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header;