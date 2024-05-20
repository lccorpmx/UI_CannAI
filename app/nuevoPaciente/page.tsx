'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '@/components/Header';
export default function RegistroPacienteForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Aquí puedes enviar los datos del paciente a tu backend
  };

  return (
<div>
    <Header></Header>
    <div className="max-w-md mx-auto mt-8 p-6 bg-black rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-white">Registro de Paciente</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-medium text-white">Nombre:</label>
          <input type="text" id="nombre" {...register("nombre", { required: 'Campo requerido' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="edad" className="block text-sm font-medium text-white">Edad:</label>
          <input type="number" id="edad" {...register("edad", { required: 'Campo requerido' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          {errors.edad && <p className="text-red-500 text-sm mt-1">{errors.edad.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="descripcion" className="block text-sm font-medium text-white">Descripción:</label>
          <textarea id="descripcion" {...register("descripcion", { required: 'Campo requerido' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="4"></textarea>
          {errors.descripcion && <p className="text-red-500 text-sm mt-1">{errors.descripcion.message}</p>}
        </div>

        <div className="mt-4">
          <button type="submit" className="w-full bg-green-400 text-black py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-400">Registrar Paciente</button>
        </div>
      </form>
    </div>
</div>
  );
}
