import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ServicesCard from "../components/ServicesCard";
import servicesServices from "../services/servicesService";


const ServicesPage = () => {
    const [services, setServices] = useState([]);

    const fetchServices = async () => {
        try {
            const response = await servicesServices.getServices();
            setServices(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchServices();
    }, []);
    
    return <Container fluid style={{backgroundColor: '#F9E9D4', color: 'white'}}>
        <div className="d-flex flex-wrap justify-content-center p-3  gap-3">
            {services.map((service, index) => {
                return <ServicesCard key={index} service={service} />
            })}
        </div>
       
    </Container>;
}
 
export default ServicesPage;