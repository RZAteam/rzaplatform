import React from 'react';
import { IonSlides, IonSlide, IonContent } from '@ionic/react';
import ExploreContainer from "../ExploreContainer";

const slideOpts = {
    initialSlide: 1,
    speed: 400
};

export const deptOrderPictures: React.FC = () => (
    <IonContent>
        <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
                <h1>Slide 1</h1>
            </IonSlide>
            <IonSlide>
                <h1>Slide 2</h1>
            </IonSlide>
            <IonSlide>
                <h1>Slide 3</h1>
            </IonSlide>
        </IonSlides>
    </IonContent>
);
export default deptOrderPictures;