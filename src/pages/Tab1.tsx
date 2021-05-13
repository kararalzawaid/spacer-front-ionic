import React from 'react';
import { Redirect } from 'react-router-dom';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonButtons,
    IonBackButton,
} from '@ionic/react';

import './Tab1.css';

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="buttonText" icon="buttonIcon" />
                    </IonButtons>
                    <IonTitle>News</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonItem routerLink="/news/1/details">
                        <img src="http://www.sulitest.org/files/source/logo%20test%20horiz%20bis.png?1574291102345" />
                    </IonItem>
                    <IonCardHeader>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        <IonCardTitle>Card Title</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        Keep close to Nature's heart... and break clear away, once in awhile,
                        and climb a mountain or spend a week in the woods. Wash your spirit clean.
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
