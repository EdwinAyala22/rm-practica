import { useEffect } from 'react';

import { useCharacter } from '../../hooks/useCharacter';
import { CardApp } from '../Card/Card';


export const Personajes = () => {
    const {personajes, getPersonajes} = useCharacter();
    useEffect(() => {
        getPersonajes();
    }, [personajes])
    
    
  return (
    <>
    <h1 className='fw-bold m-5 text-center'>PERSONAJES</h1>
    <div className='container d-flex justify-content-center flex-wrap'>
        {personajes != null ? (
            personajes.map(personaje =>(
                
                <CardApp key={personaje.id}
                    imageSrc={personaje.image}
                    title={personaje.name}
                    url={personaje.id}
                >

                </CardApp>
            ))
        ): ('Cargando...')}
    </div>
    </>
  )
}
