import { Container } from "react-bootstrap";
import hotel from '../assets/hotel_homepage2.jpg';

const Homepage = () => {
    return <>
        <Container fluid className="p-0">
            <div className="position-relative w-100">
                <img 
                    src={hotel} 
                    alt="wallpaper hotel" 
                    className="img-fluid w-100"
                    style={{ objectFit: 'cover', maxHeight: '94vh' }} 
                />
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                    <h1 className="display-3 fw-bold">Bienvenue à notre Hôtel</h1>
                    <p className="lead">Un séjour exceptionnel vous attend</p>
                    <button className="btn btn-primary btn-lg mt-3">Réserver maintenant</button>
                </div>
            </div>
        </Container>
    </>;
}

export default Homepage;