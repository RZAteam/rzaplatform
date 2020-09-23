import React from 'react';
import {IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Расписание</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonItem className = "textblock">В процессе....</IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
