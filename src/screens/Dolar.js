import React from 'react';
import InfoDolar from '../components/infoDolar';
import styles from '../styles/Dolar.module.css';

const Dolar = () => {
  return (
    
    <div className='container'>
        <div className={`text-center ${styles.titulo}`}>
        <h1>DolarHoy!</h1>
        </div>
      <div className='row justify-content-center'>
        <div className='col-md-4'>
        <div className={`card text-center ${styles.dolar}`}>
            <div className='card-body'>
              <h2 className='card-title'>Dolar Oficial</h2>
              <h5 className='card-text'>
                <InfoDolar nombre='Dolar Oficial' />
              </h5>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
        <div className={`card text-center ${styles.dolar}`}>
            <div className='card-body'>
              <h2 className='card-title'>Dolar Blue</h2>
              <h5 className='card-text'>
                <InfoDolar nombre='Dolar Blue' />
              </h5>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
        <div className={`card text-center ${styles.dolar}`}>
            <div className='card-body'>
              <h2 className='card-title'>Dolar Turista</h2>
              <h5 className='card-text'>
                <InfoDolar nombre='Dolar turista' />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dolar;