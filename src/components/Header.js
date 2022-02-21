import bell from '../recources/photos/bell_3.svg'
import logo from '../recources/photos/logo-market.jpg'

function Header() {

    async function onClick () {
        let response = await fetch('http://localhost:8080/getImage', {mode: 'no-cors'});
        let answer = response.json();
        console.log(answer)
    }

    return (
        <header className={"header"}>
            <div className={"header__intro-part"}>
                <div className={"header__title"}>
                    <img className={"header__title-logo"} src={logo} alt=""/>
                    <h1 className={"header__title-name"} onClick={onClick}>
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
                    <li className={"nav-part__choose-element"}>Главная</li>
                    <li className={"nav-part__choose-element"}>Продвижение</li>
                    <li className={"nav-part__choose-element"}>Реклама</li>
                    <li className={"nav-part__choose-element"}>Статистика</li>
                    <li className={"nav-part__choose-element"}>Финансы</li>
                    <li className={"nav-part__choose-element"}>Еще...</li>
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