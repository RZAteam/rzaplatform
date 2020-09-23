import React, {useEffect,useState} from 'react';
import {IonSlides, IonSlide, IonContent, IonImg, IonCard, IonItem, IonText, IonButton} from '@ionic/react';
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


export const DeptOrderPictures: React.FC = () => {
    const [OrdersList,setSrcs] = useState([]);
    useEffect(() => {
        getSourceList();
    }, []);

    function getSourceList() {
        fetch("http://127.0.0.1:5000/prikazy",)
            .then(res => res.json())
            .then(
                (res) => {
                    setSrcs(res._items);
                    // console.log(res._items);
                },
                (error) => {
                    console.log(error);
                }
            )
        return 1;
    }

    return (
    <IonContent>
        <IonSlides pager={true} options={slideOpts}>
            {OrdersList.map((item, index) => (
                <IonSlide key = {item+index}>
                        <IonImg  src={item} key = {index} />
                </IonSlide>))}
        </IonSlides>
        {/*<IonButton>Обновить</IonButton>*/}
    </IonContent>
    )
}
export default DeptOrderPictures;