import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <article className="elements__box">
            <img src={props.card.link} alt={props.card.name} onClick={handleClick} className="elements__photo" />
            <button type="button" className="elements__delete-button" aria-label="Удалить карточку"></button>
            <div className="elements__footer">
                <h3 className="elements__text">{props.card.name}</h3>
                <div className="elements__like-block">
                    <button type="button" className="elements__button" aria-label="Лайк"></button>
                    <p className="elements__likes-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </article>
    );
}

export default Card