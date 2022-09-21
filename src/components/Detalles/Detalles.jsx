import {useEffect} from 'react'
import { useCharacter } from '../../hooks/useCharacter'
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const Detalles = () => {
    
    const params = useParams();

    const {detalle, getDetalle, back} = useCharacter();

    useEffect(() => {
        getDetalle(params.id);
    }, [params.id])
    
  return (
    <>
    
    
    <div className='position-absolute d-flex col-md-12'>
        <Button onClick={back} className='m-2 position-relative'>Volver</Button>
        <div className='col-md-11'>
            <h2 className='m-2 text-center fw-bold'>DETALLE DE PERSONAJE</h2>
        </div>
    </div>
    <div className='container-fluid m-auto mt-5 mb-5 p-5'>
        {detalle != null ? (
            <div className='row'>
                <div className='col-md-4 d-flex justify-content-center'>
                    <img src={detalle.image} className='img-fluid mb-4 rounded'></img>
                </div>
                <div className='col-md-8 d-flex justify-content-center align-items-center'>
                    <div className='row col-md-12'>
                        <div className='col-md-6'>
                            <p><b>Nombre:</b> {detalle.name}</p>
                            <p><b>Género:</b> {detalle.gender}</p>
                            <p><b>Creado:</b> {detalle.created}</p>
                            <p><b>Especie:</b> {detalle.species}</p>
                        </div>
                        <div className='col-md-6'>
                            <p><b>Estatus:</b> {detalle.status}</p>
                            <p><b>Origen:</b> {detalle.origin.name}</p>
                            <p><b>Ubicación:</b> {detalle.location.name}</p>
                            <p><b>Tipo:</b> {detalle.type === "" ? ('n/a'):(detalle.type)}</p>
                        </div>
                    </div>
                </div>
            </div>
        ): ('Cargando...')}
    </div>
    </>
  )
}
