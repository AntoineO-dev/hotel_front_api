import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import RoomsService from "../Services/RoomsService";
import { toast } from "react-toastify";
import ServicesService from "../Services/ServicesService";

const ModalDeleteServices = ({ open, setOpen, fetchServices, currentServices }) => {

    const handleClose = () => {
        setOpen(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ServicesService.deleteService(currentServices.id_service);
            fetchServices();
            toast.success('Service supprimé avec succès');
            setOpen(false);
        } catch (error) {
            console.error(error);
            toast.error('Erreur lors de la suppression du service');
        }
    }

    return <Modal show={open} onHide={handleClose} position="center">
        <Modal.Header closeButton>
            <Modal.Title className="text-dark">Supprimé un service</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-dark">
            Etes vous sûr de vouloir supprimer le seervice {currentServices&&currentServices.service_name}?
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
                Annuler
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Valider
            </Button>
        </Modal.Footer>

    </Modal>;
}

export default ModalDeleteServices;