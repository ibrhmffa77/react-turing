import React from 'react'
import './form.scss'

const Form = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleNameChane = (e) => setName(e.target.value);
    const handleEmailChane = (e) => setEmail(e.target.value);
    const handleMessageChane = (e) => setMessage(e.target.value);

    const handlesubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)
        setName('');
        setEmail('');
        setMessage('')
    }

    return (
        <form action="#" onSubmit={handlesubmit}>
            <label htmlFor="name"><h3>Name:</h3></label>
            <input type="text" id='name' value={name} onChange={handleNameChane} />

            <label htmlFor="email"><h3>Email:</h3></label>
            <input type="email" id='email' value={email} onChange={handleEmailChane} />

            <label htmlFor="message"><h3>Message:</h3></label>
            <textarea name="message" id="message" value={message} onChange={handleMessageChane}></textarea>
            <br />
            <button type='submit'>submit</button>
        </form>
    )
}

export default Form