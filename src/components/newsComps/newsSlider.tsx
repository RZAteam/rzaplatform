import React from "react";
import {IonSlide, IonSlides, IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/react';
import newsList from "./newsList";
import { RouteComponentProps } from '@reach/router';

interface OwnProps { }

interface StateProps {
  width: number;
}

type NewsSliderProps = OwnProps & StateProps;

const NewsSlider: React.FC<NewsSliderProps> = ({width}) => {

  let imgStyle = 30;

  let slideOpts = {
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
  if ((width <= 1280)&&(width >=1060)){
    slideOpts["slidesPerView"] = 8;
    imgStyle = 25;
  }

  if ((width <= 1060)&&(width >=640)){
    slideOpts["slidesPerView"] = 6;
    imgStyle = 20;
  }

  if (width < 640){
    slideOpts["slidesPerView"] = 4;
    imgStyle = 15;
  }
  return (
    <IonContent>
      <IonHeader  className="header">
        <IonToolbar>
          <IonTitle>{width}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonSlides pager={true} options={slideOpts} className="slider">
	 	{newsList.map((src, index) => (<IonSlide className="slideNew">
        			  <img style={{borderRadius: imgStyle}}  src={src}/>
        			  </IonSlide>
	 	))}
	 	</IonSlides>
	 </IonContent>
	);
};


export default NewsSlider;