import "./Header.css";
export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-box">
                    <div className="header-logo">
                        <img src="/img/logo.svg" alt="Logo" />
                        <a href="/">Abito</a>
                    </div>
                    <div className="header-controls">
                        <button className="btn btn-outline">Вход и регистрация</button>
                        <button className="btn btn-primary">Подать объявление</button>
                    </div>
                    <div className="header-hamburger">
                        <img src="/img/hamburger.svg" alt="Hamburger" />
                    </div>
                </div>
            </div>
        </header>
    )
}