import React, { useState } from 'react'
import { SearchDni } from './Components/SearchDNI'
import { DniCard } from './Components/DniCard'

export const ConsultationApp = () => {

    const [getDates, setGetDates] = useState({ dni: '', nombre: '', apellidoP: '', apellidoM: '' })
    const [inputValue, setInputValue] = useState('')

    const buscarDni = async (event) => {
        event.preventDefault();
        console.log(inputValue)
        try {
            const response = await fetch(`https://dniruc.apisperu.com/api/v1/dni/${inputValue}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1hdHN1ZGFjYW5vdG9qaG9lbDFAZ21haWwuY29tIn0.GqwE5ao3vLAl0KNfhcsVDtFaTsVo5l6Dav0wmfBAY5A`, {
              method: 'GET',
            });
          
            if (!response.ok) {
              throw new Error('La solicitud no se pudo completar correctamente.');
            }
          
            const data = await response.json();
            console.log(data);
            setGetDates({ dni: data.dni, nombre: data.nombres, apellidoM: data.apellidoMaterno, apellidoP: data.apellidoPaterno})
          } catch (error) {
            console.error('Error al obtener los datos:', error);
          }
    };

    return (
        <>
            <h1>Consultar DNI</h1>
            <SearchDni placeholder='Ingrese su numero de DNI' buscarDni={buscarDni} setInputValue={setInputValue} inputValue={inputValue} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <DniCard getDates={getDates}/>
            </div>
        </>
    )
}
