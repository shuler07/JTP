import './RegisterPageApp.css';

import { useContext, useEffect } from 'react';
import { AppContext } from './MainApp';

import FormContainer from './components/register/FormContainer';

export default function RegisterPageApp() {
    const context = useContext(AppContext);
    useEffect(() => {
        context.setPage('Register');
    }, []);

    return(
        <div id='registerMainDiv'>
            <FormContainer />
            <div className='bgCircle little' style={{ left: '25dvw', top: '65dvh' }}></div>
            <div className='bgCircle little' style={{ left: '85dvw', top: '40dvh' }}></div>
            <div className='bgCircle medium' style={{ left: '70dvw', top: '5dvh' }}></div>
            <div className='bgCircle medium' style={{ left: '55dvw', top: '75dvh' }}></div>
            <div className='bgCircle large' style={{ left: '5dvw', top: '10dvh' }}></div>
        </div>
    );
}