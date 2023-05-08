import React, { useState } from 'react';
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({coffee, coffees, setCoffees}) => {
    const { _id, name, chef, supplier, category, details, photo, taste, price } = coffee;

    const handleDeleteCoffee = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                        )
                        const remaining = coffees.filter(c => c._id !== _id);
                        setCoffees(remaining);
                    })
            }
        })
    }
    return (
        <div className="card card-side bg-gray-50 shadow-2xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex  w-full justify-between mr-5 ml-8 p-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Chef: {chef}</p>
                    <p>Tasty: {taste}</p>
                    <p>price: {price} tk</p>
                </div>

                <div className="btn-group btn-group-vertical space-y-4 mt-2`">
                    <button className=" "><FaEye className=' text-2xl border-1 rounded'></FaEye> </button>
                    <Link to={`/updateCoffee/${_id}`}><button className=""><FaEdit className=' text-2xl border-1 rounded'></FaEdit> </button></Link>
                    <button
                        onClick={() => handleDeleteCoffee(_id)}
                        className=""><FaTrashAlt className=' text-2xl border-1 rounded'></FaTrashAlt> </button>

                </div>
            </div>
        </div>
    );
};

export default Coffee;