import Data from "../../store/data";

import { useRef } from 'react';
import { useState } from 'react';

import classes from './newItem.module.css';

const NewItem = () => {
  const nameInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPrice = parseFloat(priceInputRef.current.value);
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      id: Data.length,
      name: enteredName,
      price: enteredPrice,
      description: enteredDescription,
      count: 1
    };

    Data.push(meetupData);
    nameInputRef.current.value = "";
    priceInputRef.current.value = "";
    descriptionInputRef.current.value = "";
  }
  return (
    <div className={classes.main}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Recipe Name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor='price'>Recipe Price</label>
          <input type='decimal' required id='price' ref={priceInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Meal</button>
        </div>
      </form>
    </div>
  )
}
export default NewItem;
