import React, { useState } from 'react';

function UserForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit({ name, email });
        setName('');
        setEmail('');

    };

    return (
        <form onSubmit={handleSubmit}>     

            <section class=" bg-gray-900 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="name" class="leading-7 text-sm text-gray-400">
                                        Name:
                                        <input id="name" name="name" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                                    </label>
                                    </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="name" class="leading-7 text-sm text-gray-400">
                                        Email:
                                        <input id="name" name="name" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </label>
                                </div>
                            </div>
                            
                            <div class="p-2 w-full">
                                <button className="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-700-600 rounded">save</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>












        </form>

    );
}
export default UserForm;