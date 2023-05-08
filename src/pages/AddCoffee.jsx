import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = (event) => {
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
        const newCoffee = { name, chef, supplier, category, details, photo, taste, price };
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Coffee Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <div className='bg-[ #F4F3F0] px-28'>
                <form onSubmit={handleAddCoffee}>
                    <h1 className='text-center text-indigo-500 text-5xl font-extrabold mb-8 mt-10 '>Add New Coffee</h1>
                    <p className='text-center px-20 mb-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <div className='md: flex gap-4'>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='coffeeName' placeholder="Enter coffee name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='chef' placeholder="Enter coffee chef" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className='md: flex gap-4'>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">supplier</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='taste' placeholder="Enter coffee taste" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className='md: flex gap-4'>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name='category' placeholder="Enter coffee category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='price' placeholder="Enter coffee price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' placeholder="Enter photo url " className="input input-bordered w-full" />
                        </label>
                    </div>
                    <button className="btn btn-primary form-control w-full ">Add Coffee</button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;