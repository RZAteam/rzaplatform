import React from 'react';
<<<<<<< Updated upstream
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import TextComponent from '../components/TextComponent'
import './Tab1.css';
=======
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Tab1.css';
import NewsSlider from "../components/newsComps/newsSlider";
>>>>>>> Stashed changes

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
<<<<<<< Updated upstream
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <TextComponent name = "Stranger" />
      </IonContent>
=======
      <NewsSlider/>
>>>>>>> Stashed changes
    </IonPage>
  );
};

export default Tab1;
