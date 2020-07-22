import React from "react";
import {IonSlide, IonSlides, IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/react';
import newsList from "./newsList";

const slideOpts = {
  speed: 600,
  autoHeight: true,
  direction: "horizontal",
  slidesPerColumnFill: "row",
  spaceBetween: 5,
  slidesPerView: 10,
  autoplay:{
    delay: 3000,
    disableOnInteraction: false,
  },
  virtual: true,
};

const NewsSlider= () => {
	return (
    <IonContent>
      <IonHeader  className="header">
        <IonToolbar>
          <IonTitle>Новости</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonSlides pager={true} options={slideOpts} className="slider">
			{newsList.map((src, index) => (<IonSlide className="slideNew">
        			  <img className="img"  src={src}/>
        			  </IonSlide>
			))}
			</IonSlides>
		</IonContent>
		);
};

export default NewsSlider;