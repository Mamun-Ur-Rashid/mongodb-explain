import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, chef, supplier, category, details, photo, taste, price } = coffee;

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.coffeeName.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const updateCoffee = { name, chef, supplier, category, details, photo, taste, price };
        console.log("update page", updateCoffee);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateCoffee)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire(
                            'Updated!',
                            'Your Coffee has been Updated.',
                            'success'
                        )
                    })
            }
        })
    }

    return (
        <div>
            <div>
                <div className='bg-[ #F4F3F0] px-28'>
                    <form onSubmit={handleUpdateCoffee}>
                        <h1 className='text-center text-indigo-500 text-5xl font-extrabold mb-8 mt-10 '>Update Existing Coffee Details</h1>
                        <p className='text-center px-20 mb-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        <div className='md: flex gap-4'>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name='coffeeName' defaultValue={coffee?.name} placeholder="Enter coffee name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name='chef' defaultValue={coffee?.chef} placeholder="Enter coffee chef" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='md: flex gap-4'>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">supplier</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name='supplier' defaultValue={coffee?.supplier} placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name='taste' defaultValue={coffee?.taste} placeholder="Enter coffee taste" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='md: flex gap-4'>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name='category' defaultValue={coffee?.category} placeholder="Enter coffee category" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name='details' defaultValue={coffee?.details} placeholder="Enter coffee details" className="input input-bordered w-full" />
                                </label>
                            </div>

                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='price' defaultValue={coffee?.price} placeholder="Enter coffee price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='photo' defaultValue={coffee?.photo} placeholder="Enter photo url " className="input input-bordered w-full" />
                            </label>
                        </div>
                        <button className="btn btn-primary form-control w-full ">Update Coffee</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;