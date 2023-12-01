'use client'
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Tables() {
    //en este estado se almacenaran los registros traidos desde /api/names
    const [registro, setRegitro] = useState([])

    //usamos un useEffect de manera que cuando se monte el componente
    //haga un llamado a /api/names y los almacene en el estado "registro".
    useEffect(()=>{
        axios.get('http://localhost:3000/api/names')
        .then(({data})=>{
            setRegitro(data)
        })
    },[])
    return (
        <div className="relative overflow-x-auto">
            <table className="m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Correo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Direccion
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Elim</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {registro.map((persona, i) => {
                        return (
                            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {persona.id}
                                </th>
                                <td className="px-6 py-4">
                                    {persona.nombre}
                                </td>
                                <td className="px-6 py-4">
                                    {persona.correo}
                                </td>
                                <td className="px-6 py-4">
                                    {persona.direccion}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="font-medium text-red-600 dark:text-red-500 hover:underline">Elim</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}