import React, { useState } from 'react';

const CreateEvent: React.FC = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const [animator, setAnimator] = useState('');
  const [time, setTime] = useState('');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(`Submitting new event: ${title}, ${date}, ${place}, ${description}, ${animator}`);
  };

return (
  <div className="container">
    <h1>Create New Event</h1>
    <form className="create-event-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label>Title:</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Date:</label>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Estimated time needed:</label>
        <input type="time" value={time} onChange={e => setTime(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Place:</label>
        <input type="text" value={place} onChange={e => setPlace(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Description:</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Animator:</label>
        <input type="text" value={animator} onChange={e => setAnimator(e.target.value)} />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
);
};

export default CreateEvent;