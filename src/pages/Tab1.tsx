import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
// import TextComponent from '../components/TextComponent'
import './Tab1.css';
import deptOrderPictures from '../components/deptOrderPictures/deptOrderPictures';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Новости</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <deptOrderPictures />
        {/*<TextComponent name = "Stranger" />*/}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
