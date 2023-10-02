import React, { useState, useEffect } from 'react'
import { SearchDni } from './Components/SearchDNI'
import { DniCard } from './Components/DniCard'
import  Toast from './Components/toast';

export const ConsultationApp = () => {
    const [validator, setvalidator] = useState(false)
    const [getDates, setGetDates] = useState({ dni: '', nombre: '', apellidoP: '', apellidoM: '' })
    const [inputValue, setInputValue] = useState('')
    const [datosCargados, setDatosCargados] = useState(true);
    const [textError, setTextError] = useState('')
    const [showToast, setShowToast] = useState(true);
    const [toastPropierties, setToastPropierties] = useState({
        titulo:'',
        message: '',
        error: false,
        success: false
    });
    const [render, setRender] = useState(false);
    
    const handleCloseToast = () => {
        setShowToast(false);
        setToastPropierties({
            titulo:'',
            message: '',
            error: false,
            success: false
        })
    };

    const error = () => {
        // Convierte inputValue en una cadena para contar los dígitos
        const inputValueString = inputValue.toString();
      
        if (inputValueString.length > 8) {
          // Si hay más de 8 dígitos, establece un mensaje de error
          setTextError('El valor debe tener 8 dígitos, no más.');
          setvalidator(true)
        } else if (inputValueString.length < 8) {
            setTextError('El valor debe tener 8 dígitos, no menos.');
          setvalidator(true)
        }else {
          // Si no, borra el mensaje de error
          setTextError('');
          setvalidator(false)
        }
      };

    useEffect(() => {
        if (render) {
            error();
            
        }else{
            setRender(true)
        }
        
      }, [inputValue]);

    const cargar = () =>{
        if (render) {
            setDatosCargados(false)
            setTimeout(() => {
                setDatosCargados(true);
            }, 2000);
        }
        
    }

    const buscarDni = async (event) => {
        event.preventDefault();
        cargar()
        console.log(inputValue)
        try {
            const response = await fetch(`https://dniruc.apisperu.com/api/v1/dni/${inputValue}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1hdHN1ZGFjYW5vdG9qaG9lbDFAZ21haWwuY29tIn0.GqwE5ao3vLAl0KNfhcsVDtFaTsVo5l6Dav0wmfBAY5A`, {
              method: 'GET',
            });
          let data = await response.json();
            if (!response.ok) {

                setToastPropierties({
                    titulo:'ERROR',
                    message: 'error al general la consulta',
                    error: true
                })
              throw new Error('La solicitud no se pudo completar correctamente.');
            }
            if (data?.success === false) {

                setToastPropierties({
                    titulo:'ERROR',
                    message: 'error al general la consulta',
                    error: true
                })
            }else{

                setToastPropierties({
                    titulo:'EXITO',
                    message: 'se obtuvieron los datos',
                    success: true
                })
                setGetDates({ dni: data.dni, nombre: data.nombres, apellidoM: data.apellidoMaterno, apellidoP: data.apellidoPaterno})
            }
            setShowToast(true)
            
            console.log(data);

          } catch (error) {
            console.error('Error al obtener los datos:', error);
          }
    };

    return (
        <>
            <h1>Consultar DNI</h1>
            <SearchDni placeholder='Ingrese su numero de DNI' buscarDni={buscarDni} setInputValue={setInputValue} inputValue={inputValue} validator={validator} error={textError}  render={render}/>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <DniCard getDates={getDates} datosCargados={datosCargados} setDatosCargados={setDatosCargados} render={render}/>
                
            </div>
            <Toast titulo={toastPropierties.titulo} message={toastPropierties.message} show={showToast} onClose={handleCloseToast} error={toastPropierties.error} success={toastPropierties.success} />
        </>
    )
}
