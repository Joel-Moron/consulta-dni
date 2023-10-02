import { useState } from 'react'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const onInputChange = ({ target }) => {

    setInputValue(target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;
    setInputValue('')
    console.log(inputValue)
  }
  return (
    <>

      <div className="container">

        <div className="dni-container">

          <form onSubmit={onSubmit} action="">
            <input
              type='text'
              placeholder={'Ingresar DNI'}
              value={inputValue}
              onChange={onInputChange}
            />

            <button onSubmit={onSubmit}> Consultar</button>
          </form>

        </div>


      </div>

    </>
  )
}

export default App
