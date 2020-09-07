import React from 'react';
import {IonSlides, IonSlide, IonContent, IonImg, IonCard, IonItem} from '@ionic/react';
import ExploreContainer from "../ExploreContainer";
import "./deptOrderPictures.css"


const slideOpts = {
    inutialSlide : 0,
    slidesPerView: 2,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
};

const OrdersList = [
    "/assets/123.jpg",
    "/assets/321.jpg"
]

export const DeptOrderPictures: React.FC = () => {
    return (
        <IonSlides pager={true} options={slideOpts}>
            {/*<IonSlide key ={1}>*/}
            {/*    <IonImg  src="/assets/123.jpg"/>*/}
            {/*</IonSlide>*/}
            {/*<IonSlide key ={1}>*/}
            {/*    <IonImg  src="/assets/321.jpg"/>*/}
            {/*</IonSlide>*/}
            {OrdersList.map((item, index) => (
                <IonSlide key = {item.toString()+index}>
                        <IonImg  src={item} key = {index} />
                </IonSlide>))}
        </IonSlides>
    );
}
export default DeptOrderPictures;