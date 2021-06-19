import React, { useState, useEffect } from 'react';
import avatar from '../images/avatar.jpg';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = useState('ФИО пользователя');
    const [userDescription, SetUserDescription] = useState('Информация о пользователе');
    const [userAvatar, setUserAvatar] = useState({ avatar });
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userInfo, initialCards]) => {
                setUserName(userInfo.name);
                SetUserDescription(userInfo.about);
                setUserAvatar(userInfo.avatar);
                setCards(initialCards)
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__img">
                    <div style={{ backgroundImage: `url(${userAvatar})` }} alt="Аватарка профиля" className="profile__photo"></div>
                    <button type="button" className="profile__edit-photo-button" aria-label="Редактировать аватарку" onClick={props.onEditAvatar}></button>
                </div>
                <div className="profile__account">
                    <div className="profile__name">
                        <h1 className="profile__name-text">{userName}</h1>
                        <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" aria-label="Добавить карточку" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((card) => (
                    <Card
                        card={card}
                        key={card._id}
                        onCardClick={props.onCardClick}
                    />
                ))}
            </section>
        </main>
    );
}

export default Main