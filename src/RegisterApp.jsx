import './RegisterApp.css';
import FormContainer from './components/register/FormContainer';

export default function App() {
    return(
        <>
            <FormContainer />
            <div className='bgCircle little' style={{ left: '25dvw', top: '65dvh' }}></div>
            <div className='bgCircle little' style={{ left: '85dvw', top: '40dvh' }}></div>
            <div className='bgCircle medium' style={{ left: '70dvw', top: '5dvh' }}></div>
            <div className='bgCircle medium' style={{ left: '55dvw', top: '60dvh' }}></div>
            <div className='bgCircle large' style={{ left: '5dvw', top: '10dvh' }}></div>
        </>
    );
}