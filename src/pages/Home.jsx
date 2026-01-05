import { Card } from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import { SideContentBlock } from "../components/SideContentBlock/SideContentBlock";
import { cardArray, sideContentListArray } from "../const/constants";

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" placeholder="Поиск по объявлениям" />
                            <button className="btn btn-primary search-btn">
                                <img src="/img/search.svg" alt="search" className="search-btn__icon" />
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-main__title">Рекомендации для вас</h2>
                                <div className="content-main__list">
                                    {
                                        cardArray.map(card => {
                                            return (
                                                <Card
                                                    key={card.id}
                                                    title={card.title}
                                                    price={card.price}
                                                    address={card.address}
                                                    date={card.date}
                                                    img={card.img}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="content-side">
                                <h3 className="content-side--title">Сервисы и услуги</h3>
                                <div className="content-side__box">
                                    <div className="content-side__list">
                                        {
                                            sideContentListArray.map(block => (
                                                <SideContentBlock
                                                    key={block.id}
                                                    heading={block.heading}
                                                    text={block.text}
                                                    img={block.img}
                                                />
                                            ))
                                        }
                                    </div>
                                    <div className="content-side__footer">
                                        <p className="content-side__footer--item">© ООО «Абито», 2011–2021</p>
                                        <a href="#!" className="content-side__footer--item">Политика конфиденциальности</a>
                                        <a href="#!" className="content-side__footer--item">Обработка данных</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}