"use client";

import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";
import { Card } from "../Card/Card";
import Styles from "./CardsSlider.module.css";
import Link from "next/link";

export const CardsSlider = (props) => {
  useEffect(() => {
    const options = {
      loop: false,
      spaceBetween: 10,
      allowTouchMove: true,
      slidesPerView: 1,
      autoplay: {
        enabled: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        enabled: true,
        clickable: true,
      },
      breakpoints: {
        450: {
          loop: true,
          spaceBetween: 20,
          allowTouchMove: false,
          slidesPerView: "auto",
          speed: 6500,
          autoplay: {
            enabled: true,
            delay: 0,
          },
          pagination: {
            enabled: false,
          },
        },
      },
      modules: [Autoplay, Pagination],
    };
    new Swiper(".swiper", options);
  }, []);
  return (
    <div className={`swiper ${Styles["slider"]}`}>
      <ul className={`swiper-wrapper ${Styles["slider-wrapper"]}`}>
        {props.data.map((item, i) => {
          return (
            <li className={`swiper-slide ${Styles["slide"]}`} key={i}>
              <Link href={`/games/${item.id}`}>
                <Card {...item} />
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={`swiper-pagination ${Styles["pagination"]}`}></div>
    </div>
  );
};
