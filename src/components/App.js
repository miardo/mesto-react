import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
const [selectedCard, setSelectedCard] = useState({name: '', link: ''});

const handleCardClick = (card) => {
  setSelectedCard(card)
}

const handleEditProfileClick = () => {
  setIsEditProfilePopupOpen(true)
}

const handleEditAvatarClick = () => {
  setIsEditAvatarPopupOpen(true)
}

const handleAddPlaceClick = () => {
  setIsAddPlacePopupOpen(true)
}

const closeAllPopups = () => {
  setIsEditProfilePopupOpen(false);
  setIsEditAvatarPopupOpen(false);
  setIsAddPlacePopupOpen(false);
  setSelectedCard({name: '', link: ''});
}

  return (
    <>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm name="edit-form" title="Редактировать профиль" text="Сохранить"  isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input id="name-input" type="text" name="name" placeholder="Имя" className="popup__container-input" minLength="2" maxLength="40" required />
        <span className="name-input-error popup__container-input-error"></span>
        <input id="job-input" type="text" name="about" placeholder="Вид деятельности" className="popup__container-input" minLength="2" maxLength="200" required />
        <span className="job-input-error popup__container-input-error"></span>
      </PopupWithForm>
      <PopupWithForm name="add-form" title="Новое место" text="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input id="new-name-input" type="text" name="name" placeholder="Название" className="popup__container-input" minLength="2" maxLength="30" required />
        <span className="new-name-input-error popup__container-input-error"></span>
        <input id="url-input" type="url" name="link" placeholder="Ссылка на картинку" className="popup__container-input" required />
        <span className="url-input-error popup__container-input-error"></span>
      </PopupWithForm>
      <PopupWithForm name="ava-form" title="Обновить аватар" decoration="popup__container-name_style-edition" text="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input id="ava-url-input" type="url" name="link" placeholder="Ссылка на аватарку" className="popup__container-input popup__container-input_style-edition" required />
        <span className="ava-url-input-error popup__container-input-error popup__container-input-error_style-edition"></span>
      </PopupWithForm>
      <PopupWithForm name="delete-card" title="Вы уверены?" decoration="popup__container-name_style-edition" text="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
