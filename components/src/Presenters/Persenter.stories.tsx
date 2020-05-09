import React from "react";
import { Presnter } from "./Presenter";
import { SimplePresenterProps } from "../Card/SimplePresenterCard/SimplePresenter";

export default {
  title: "Section Components | Presenters / Presenters",
  component: Presnter,
};

const renderPresenterLink = (children: JSX.Element) => (
  <a href="#">{children}</a>
);

const presnters: SimplePresenterProps[] = [
  {
    name: "سینا ماشینی",
    education: "دانشگاه آزاد",
    image: "profile.jpg",
    link: renderPresenterLink,
  },
  {
    name: "سینا ماشینی",
    education: "دانشگاه آزاد",
    image: "profile.jpg",
    link: renderPresenterLink,
  },
  {
    name: "سینا ماشینی",
    education: "دانشگاه آزاد",
    image: "profile.jpg",
    link: renderPresenterLink,
  },
  {
    name: "سینا ماشینی",
    education: "دانشگاه آزاد",
    image: "profile.jpg",
    link: renderPresenterLink,
  },
];

export const Presenter = () => {
  return <Presnter presnters={presnters} />;
};
