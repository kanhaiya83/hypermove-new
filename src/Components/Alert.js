import { Toast } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { useAlertContext } from '../context/alert';

const AlertComponent=()=>{
    const {alert,setAlert}=useAlertContext();
    const closeAlert=()=>{
        setAlert({show:false,message:""})
    }
    return(
        <>
        <div className="custom-alert-container">
            <Toast show={alert.show} onClose={closeAlert} delay={5000} autohide>
            <Toast.Header><b>Alert</b> <span className="me-auto"></span> </Toast.Header>
            <Toast.Body>{alert.message}</Toast.Body>
            </Toast>
        </div>
        </>
    )
}

export default AlertComponent