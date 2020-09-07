import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonLabel,
    IonItem
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
// import TextComponent from '../components/TextComponent'
import './Tab1.css';
import DeptOrderPictures from '../components/deptOrderPictures/deptOrderPictures';

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Новости</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol className = "ion-col"><IonItem ><IonLabel>Блок новостей</IonLabel></IonItem></IonCol>
                        <IonCol className = "ion-col"><IonItem ><IonLabel>Блок времени</IonLabel></IonItem></IonCol>
                    </IonRow>
                    <IonRow className = "ion-col">
                        <IonItem >
                            <h1>Приказы</h1>
                        </IonItem>
                    </IonRow>
                    <IonRow>
                            <DeptOrderPictures/>
                    </IonRow>
                </IonGrid>
                {/*<TextComponent name = "Stranger" />*/}
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
