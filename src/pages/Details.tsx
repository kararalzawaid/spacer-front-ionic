import { IonText, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';

const Details: React.FC = () => {
    return (
        <IonPage>
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <img src="http://www.sulitest.org/files/source/logo%20test%20horiz%20bis.png?1574291102345" />
                <IonTitle>Title</IonTitle>
                <IonTitle>Description</IonTitle>
            </IonContent>
        </IonPage>
    );
};

export default Details;
