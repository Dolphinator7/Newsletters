import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SuccessPage() {
  const location = useLocation();
  const email = location.state && location.state.email;

  return (
    <div className='cove'>
    <div className="success-message">
      <img src='./icon-list.svg' className='imag' alt='imag'/>
      <div className='success'><h1>Thanks for <br/> subscribing!</h1>
      <p>A confirmation email has been sent to <br/> {email}.
      Please open it and click <br/> the button inside to confirm your subscription.</p>
      <Link to="/"><button>Dismiss message</button></Link>
      </div>
    </div>
    </div>
  );
}

export default SuccessPage;
