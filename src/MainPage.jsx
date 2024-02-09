import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';


function MainPage() {
  const [email, setEmail] = useState('');
  const [setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (input) => {
    // Regular expression for validating an Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleSubscribe = () => {
    // Assuming you want to show the success message only if a valid email is entered
    if (!validateEmail(email)) {
      // Show error message for invalid email format
      setShowError(true);

      // Clear error message after a short delay
      setTimeout(() => {
        setShowError(false);
      }, 5000); // Adjust the delay as needed
      return;
    }

    // Simulate subscription logic by showing success after a short delay
    setShowSuccess(true);

    // Redirect to the success page after a delay
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/SuccessPage', { state: { email } }); // Pass email as state
    }); // Adjust the delay as needed for your use case
  };

  return (
    <div className='rover'>
      <div className="App">
        <div className='move'>
        <div className='force'>
          <h1>Stay updated!</h1>
          <p> Join 60,000+ product managers receiving monthly  <br/> updates on: </p>
          <div className='live'>
            <li> Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li> And much more!</li>
          </div>
        </div>
        </div>
        <div className='form'>
          <h2>Email address</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`input ${showError ? 'error' : ''}`}
          />

          {showError && <p className="error-message">valid email required</p>}
          <div>
            <button 
              className='buttons' 
              onClick={handleSubscribe}
              type="button"
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
        <div className='image'>
          <img src='./illustration-sign-up-desktop.svg' className='desktop' alt='imag'/>
          <img src='./illustration-sign-up-mobile.svg' className='mobile' alt='imag'/>
          <div className='mage'>
            <img src='./icon-list.svg' className='imag' alt='imag'/>
            <img src='./icon-list.svg' className='imagi' alt='imag'/>
            <img src='./icon-list.svg' className='imagii' alt='imag'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
