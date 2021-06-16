import React from 'react';
import Header from './Header';
import Main  from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="root">
      <Header />
      <Main />
      <Footer />
    <article className="popup popup_type_edit-form">
      <form name="profile-form" className="popup__container" noValidate>
        <h2 className="popup__container-name">Редактировать профиль</h2>
        <input id="name-input" type="text" name="name" placeholder="Имя" className="popup__container-input" minLength="2" maxLength="40" required/>
        <span className="name-input-error popup__container-input-error"></span>
        <input id="job-input" type="text" name="about" placeholder="Вид деятельности" className="popup__container-input" minLength="2" maxLength="200" required/>
        <span className="job-input-error popup__container-input-error"></span>
        <button type="submit" className="popup__container-submit-button">Сохранить</button>
        <button name="close-edit-form" type="button" className="popup__container-close-button" aria-label="Закрыть форму"></button>
      </form>
    </article>
      <article className="popup popup_type_add-card">
      <form name="add-form" className="popup__container" noValidate>
        <h2 className="popup__container-name">Новое место</h2>
        <input id="new-name-input" type="text" name="name" placeholder="Название" className="popup__container-input" minLength="2" maxLength="30" required/>
        <span className="new-name-input-error popup__container-input-error"></span>
        <input id="url-input" type="url" name="link" placeholder="Ссылка на картинку" className="popup__container-input" required/>
        <span className="url-input-error popup__container-input-error"></span>
        <button type="submit" className="popup__container-submit-button popup__container-submit-button_inactive" disabled>Создать</button>
        <button name="close-add-card" type="button" className="popup__container-close-button" aria-label="Закрыть форму"></button>
      </form>
    </article>
      <article className="popup popup_type_show-image">
      <form name="image-form" className="popup__container popup__container_style-edition">
        <figure className="popup__container-image-block">
          <img src="#" alt="#" className="popup__container-image" />
          <figcaption className="popup__container-text"></figcaption>
        </figure>
        <button name="close-image" type="button" className="popup__container-close-button" aria-label="Закрыть картинку"></button>
      </form>
    </article>
    <article className="popup popup_type_delete-card">
      <form name="popup-confirm" className="popup__container">
        <h2 className="popup__container-name popup__container-name_style-edition">Вы уверены?</h2>
        <button type="submit" className="popup__container-submit-button popup__container-submit-button_style-edition">Да</button>
        <button name="close-add-card" type="button" className="popup__container-close-button" aria-label="Закрыть форму"></button>
      </form>
    </article>
    <article className="popup popup_type_upd-ava">
      <form name="ava-form" className="popup__container" noValidate>
        <h2 className="popup__container-name popup__container-name_style-edition">Обновить аватар</h2>
        <input id="ava-url-input" type="url" name="link" placeholder="Ссылка на аватарку" className="popup__container-input popup__container-input_style-edition" required/>
        <span className="ava-url-input-error popup__container-input-error popup__container-input-error_style-edition"></span>
        <button type="submit" className="popup__container-submit-button popup__container-submit-button_inactive" disabled>Сохранить</button>
        <button name="close-add-card" type="button" className="popup__container-close-button" aria-label="Закрыть форму"></button>
      </form>
    </article>
    <template className="item_template">
      <article className="elements__box">
        <img src="#" alt="#" className="elements__photo" />
        <button type="button" className="elements__delete-button" aria-label="Удалить карточку"></button>
        <div className="elements__footer">
          <h3 className="elements__text"></h3>
          <div className="elements__like-block">
            <button type="button" className="elements__button" aria-label="Лайк"></button>
            <p className="elements__likes-counter">0</p>
          </div>
        </div>
      </article>
    </template>
    </div>
  );
}

export default App;
