import React from 'react';
import avatar from '../images/avatar.jpg';

const handleEditAvatarClick = () => {
    document.querySelector('.popup_type_upd-ava').classList.add('popup_opened');
}

const handleEditProfileClick = () => {
    document.querySelector('.popup_type_edit-form').classList.add('popup_opened');
}

const handleAddPlaceClick = () => {
    document.querySelector('.popup_type_add-card').classList.add('popup_opened');
}

function Main() {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__img">
                    <img src={avatar} alt="Аватарка профиля" className="profile__photo" />
                    <button type="button" className="profile__edit-photo-button" aria-label="Редактировать аватарку" onClick={handleEditAvatarClick}></button>
                </div>
                <div className="profile__account">
                    <div className="profile__name">
                        <h1 className="profile__name-text">ФИО пользователя</h1>
                        <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={handleEditProfileClick}></button>
                    </div>
                    <p className="profile__description">Информация о пользователе</p>
                </div>
                <button type="button" className="profile__add-button" aria-label="Добавить карточку" onClick={handleAddPlaceClick}></button>
            </section>
            <section className="elements">
            </section>
        </main>
    );
}

export default Main