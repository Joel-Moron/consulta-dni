import React, { useState } from 'react'

export const SearchDni = ({ placeholder = '', buscarDni, setInputValue, inputValue, error ='ups corrio algo', validator}) => {

    return (
        <form  action="">
            <input
                type='number'
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            {validator && <span style={{color:'red'}} >{error}</span>}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%',marginTop:10 }}>
                <button style={{ borderRadius:10,width: '50%', backgroundColor: '#264186', color: '#fff', fontSize: 18 }} disabled={(validator || inputValue === '')} className='btn' onClick={(event) => buscarDni(event)}>Consultar</button>
            </div>
        </form>

    )
}
