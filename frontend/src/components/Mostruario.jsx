import React, { useEffect, useState } from 'react'
import axios from "axios";



const Mostruario = () => {
    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        try {
            const response = await axios.get(
                'http://localhost:8080/'
            );
            const data = response.data;
            setPosts(data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getPosts();

    }, [])
    return (
        <>
            <div className='px-12'>
                <div className='grid grid-cols-3 gap-4'>
                    {posts.length === 0 ? <p>Carregando</p> : (
                        posts.map((posts) => (
                            <div className='bg-white p-5 rounded-xl' key={posts.id}>
                                <button className='float-right bg-red-500 px-2 text-white rounded-full'>x</button>
                                <div className="mt-2 text-center">
                                    <div className="flex space-x-4 items-center">
                                        <h1>Product ID:</h1>
                                        <p className="text-xl">{posts.id}</p>
                                    </div>
                                    <div className="flex space-x-4 items-center">
                                        <h1>Name:</h1>
                                        <p className="text-xl">{posts.nome}</p>
                                    </div>
                                    <div className="flex space-x-4 items-center">
                                        <h1>Email:</h1>
                                        <p className="text-xl">{posts.email}</p>
                                    </div>
                                    <div className="flex space-x-4 items-center">
                                        <h1>Descricao:</h1>
                                        <p className="text-xl">{posts.descricao}</p>
                                    </div>
                                    <div className="flex space-x-4 items-center">
                                        <h1>CPF:</h1>
                                        <p className="text-xl">{posts.cpf}</p>
                                    </div>


                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

        </>
    )
}

export default Mostruario