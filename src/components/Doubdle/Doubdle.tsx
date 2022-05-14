import React from 'react';
import './Doubdle.css';

const Doubdle = () => {
  return (
    <section className='Doubdle' id='doubdle'>
      <h2>Doubdle</h2>
      {/* <div className='card-container'>
        <div className='card'>
            <div className='top'>

            </div>
            <div className='bottom'>
                <h3>Doubdle</h3>
            </div>
        </div>
      </div> */}
      <div className='description'>
        <p className='big'>Come play Doubdle!</p>
        <p className='small'>Guess two 5 letter words in six tries.</p>
        <a href='https://doubdle.polygonhacker.com' target='_blank' rel='noopener noreferrer'>Play Doubdle</a>
      </div>
      
    </section>
  )
}

export default Doubdle;
