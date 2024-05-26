import Styles from "./Popup.module.css";

export const Popup = (props) => {
  return (
    <div
      className={`${Styles["popup"]} ${
        props.isOpened && Styles["popup_is-opened"]
      }`}
    >
      <button className={Styles["close"]} onClick={() => props.close()}>
        <svg
          className={Styles["close-icon"]}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 25"
        >
          <path
            fill="#7E8292"
            d="M15.3321 18.34c.04.0667.06.1533.06.26 0 .0933-.0467.1867-.14.28-.08.08-.18.12-.3.12h-4.5c-.36 0-.63332-.1533-.81999-.46l-1.74-2.68-1.66 2.68c-.18667.3067-.46.46-.82.46h-4.36c-.120001 0-.226667-.04-.320001-.12-.08-.0933-.12-.1867-.12-.28 0-.1067.02-.1933.06-.26l4.200001-6.5-3.78-6.18c-.04-.08-.06-.16667-.06-.26s.04-.18.12-.26c.09333-.09333.2-.14.32-.14h4.34c.37333 0 .65333.16667.84.5l1.4 2.44 1.52-2.44c.18667-.33333.46669-.5.83999-.5h4.14c.12 0 .22.04667.3.14.0933.08.14.17333.14.28 0 .09333-.02.17333-.06.24l-3.86 6.12 4.26 6.56Z"
          />
        </svg>
      </button>
      <div className={Styles.content}>{props.children}</div>
    </div>
  );
};
