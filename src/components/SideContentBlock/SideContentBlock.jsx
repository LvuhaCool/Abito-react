import "./SideContentBlock.css";
export const SideContentBlock = ({heading, text, img}) => {
    return (
        <div className="content-side__list-item">
            <img src={img} alt="" className="content-side__list-item--img" />
            <h5 className="content-side__list-item--title">{heading}</h5>
            <p className="content-side__list-item--text">{text}</p>
        </div>
    )
}
// import "./SideContentBlock.css";
// export const SideContentBlock = ({heading, text, img}) => {
//     console.log(props);
    
//     return (
//         <div className="content-side__list-item">
//             <img src="/img/content-side/delivery.svg" alt="" className="content-side__list-item--img" />
//             <h5 className="content-side__list-item--title">Доставка</h5>
//             <p className="content-side__list-item--text">Проверка при получении и возможность бесплатно вернуть товар</p>
//         </div>
//     )
// }