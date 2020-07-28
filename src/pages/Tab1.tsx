import React from 'react';
import {IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import NewsSlider from "../components/newsComps/newsSlider";



const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      {<NewsSlider width={document.documentElement.clientWidth}/>}
    </IonPage>
  );
};

export default Tab1;
