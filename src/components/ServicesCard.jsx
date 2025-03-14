import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import massage from '../assets/massage.jpg';
import piscine from '../assets/piscine_interieur.webp';
import petitdej from '../assets/petitdej.jpg';
import simple from '../assets/simple.jpg';
import vélo from '../assets/vélo.jpg';
import diner from '../assets/diner.jpg';
import blanchisserie from '../assets/blanchisserie.jpg';
import visite from '../assets/visite.jpg';



const ServicesCard= ({ service }) => {
    return <>
    
        <Card style={{ width: '18rem' }}>
            {service.service_name === "Massage relaxant" && <Card.Img  variant="top" src={massage} styles={{objectFit: "contain"}} height={250} />}
            {service.service_name === "Accès piscine" && <Card.Img  variant="top" src={piscine} styles={{objectFit: "contain"}} height={250} />}
            {service.service_name === "Petit-déjeuner buffet" && <Card.Img  variant="top" src={petitdej} styles={{objectFit: "contain"}} height={250} />}
            {service.service_name === "Chambre Standard" && <Card.Img  variant="top" src={simple} styles={{objectFit: "contain"}} height={250} />}
            {service.service_name === "Location de vélo" && <Card.Img  variant="top" src={vélo} styles={{objectFit: "contain"}} height={250} />}
            {service.service_name === "Dîner gastronomique" && <Card.Img  variant="top" src={diner} styles={{objectFit: "contain"}} height={250} />}
            {service.service_name === "Service de blanchisserie" && <Card.Img  variant="top" src={blanchisserie} styles={{objectFit: "contain"}} height={250} />}
            {service.service_name === "Visite guidée" && <Card.Img  variant="top" src={visite} styles={{objectFit: "contain"}} height={250} />}

            <Card.Header className='text-center' style={{fontWeight:"bold", backgroundColor: '#333333', color:'#F5F6F5'}}>{service.service_name}</Card.Header>
            <Card.Body className='d-flex flex-column align-items-center' style={{backgroundColor: '#40C4FF'}}>
              
                <Card.Text className='text-center'>
                    <li> {service.description}</li>
                    <li>Prix : {service.price}</li>
                </Card.Text>
                <Button style={{backgroundColor:'#4CAF50', color:'#F5F6F5' }}>Réserver</Button>
            </Card.Body>
        </Card>
    </>;
}

export default ServicesCard;