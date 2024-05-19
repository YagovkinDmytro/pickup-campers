import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [boolingDate, setBoolingDate] = useState('');
  const [comment, setComment] = useState('');

  const handleFormSubmit = evt => {
    evt.preventDefault();
    resetForm();
  };

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
    }
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'boolingDate') {
      setBoolingDate(value);
    }
    if (name === 'comment') {
      setComment(value);
    }
  };
  const resetForm = () => {
    setName('');
    setEmail('');
    setBoolingDate('');
    setComment('');
  };

  return (
    <>
      <div>
        <form className="form-container" onSubmit={handleFormSubmit}>
          <div className="form-container-name">
            <input
              value={name}
              onChange={evt => handleChange(evt)}
              className=""
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div className="form-container-email">
            <input
              value={email}
              onChange={evt => handleChange(evt)}
              className=""
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Email should be in the format: characters@characters.domain. For example: example@example.com"
              required
            />
          </div>
          <div className="form-container-boolingdate">
            <input
              value={boolingDate}
              onChange={evt => handleChange(evt)}
              className=""
              type="date"
              id="boolingDate"
              name="boolingDate"
              placeholder="Booling date"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please choose a new date"
              required
            />
          </div>
          <div className="form-container-comment">
            <textarea
              value={comment}
              onChange={evt => handleChange(evt)}
              className=""
              id="comment"
              name="comment"
              placeholder="Comment"
            />
          </div>
          <button className="" type="submit">
            Add contact
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
