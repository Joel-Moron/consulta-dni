import React, { useEffect, useState } from 'react';

export const DniCard = ({ getDates }) => {
  const [horaActual, setHoraActual] = useState('');

  useEffect(() => {
    const formatearNumero = (numero) => {
      // Agregar un cero al inicio si el número es menor que 10
      return numero < 10 ? `0${numero}` : numero.toString();
    };

    const actualizarHora = () => {
      const fechaActual = new Date();
      const horas = formatearNumero(fechaActual.getHours());
      const minutos = formatearNumero(fechaActual.getMinutes());
      const segundos = formatearNumero(fechaActual.getSeconds());

      const horaActual = `${horas}:${minutos}:${segundos}`;
      setHoraActual(horaActual);
    };

    actualizarHora();

    const intervalo = setInterval(actualizarHora, 1000);

    return () => clearInterval(intervalo);
  }, []);

    return (
        <>
            <div className='dni-container'>
                <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <div>
                        <p style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>Carnet</p>
                        <p style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>Estudiantil</p>
                    </div>
                    <div style={{ flex: 1, justifyContent: 'flex-end', display: 'flex' }}>
                        <p style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>{horaActual}</p>
                    </div>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{ width: 150, height: 150 }} src="https://www.senati.edu.pe/conexionsenati/wp-content/uploads/2021/03/image-2.png" alt="" />
                    </div>
                    <div style={{ marginLeft: 50}}>
                        <p style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>Nombre: {getDates.nombre} </p>
                        <p style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>Apellido P. : {getDates.apellidoP}</p>
                        <p style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>Apellido M. : {getDates.apellidoM}</p>
                        <p style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>Ingenieria de Software con IA </p>
                        <p style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>DNI: {getDates.dni}</p>
                    </div>
                </div>

                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>


            </div>
        </>
    )
}
