import React from 'react'
import Mostruario from '../components/Mostruario'

const Home = () => {
    return (
        <div className='flex'>
            <div className='w-full max-w-xs'>

                <form className='bg-white shadow-md rounded px-8 p-6 pb-8 mb-4'>
                    <h1 className="uppercase text-2xl text-center">Formulario Teste</h1>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Nome</label>
                        <input className=' shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                    focus:outline-none focus:shadow-outline' placeholder="Digite seu nome" />
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                    focus:outline-none focus:shadow-outline ' placeholder="Digite seu email" />
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Descricao</label>
                        <input className=' shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                    focus:outline-none focus:shadow-outline ' placeholder="Digite seu descricao" />
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>CPF</label>
                        <input className=' shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                    focus:outline-none focus:shadow-outline ' placeholder="Digite seu cpf" />
                    </div>
                    <div className='mb-6  flex justify-center items-center'>
                        <button className="px-10 py-2 text-md text-white bg-gray-700 rounded">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <Mostruario />
            </div>
        </div>
    )
}

export default Home