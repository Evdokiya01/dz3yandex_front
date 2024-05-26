import Styles from "./Card.module.css";

export const Card = (props) => {
  return (
    <article className={Styles["card"]}>
      <img src={props.image} alt="" className={Styles["card__image"]} />
      <div className={Styles["card__content-block"]}>
        <h3 className={Styles["card__title"]}>{props.title}</h3>
        <p className={Styles["card__description"]}>{props.description}</p>
        <div className={Styles["card__info-container"]}>
          <p className={Styles["card__author"]}>
            Автор:{" "}
            <span className={Styles["card__accent"]}>{props.developer}</span>
          </p>
          <p className={Styles["card__votes"]}>
            Голосов на сайте:
            <span className={Styles["card__accent"]}>{props.users.length}</span>
          </p>
        </div>
      </div>
    </article>
  );
};
