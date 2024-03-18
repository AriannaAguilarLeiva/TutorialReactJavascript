import React from "react";
function User({ name, email }) {

    return (
        <div className="bg-gray-900">

            <div class="flex flex-col text-center w-full">
                <h3 class="sm:text-3xl text-2xl font-medium title-font text-white">Name: {name}</h3>

            </div>
            <div class="flex flex-col text-center w-full mb-2">
                <p class="leading-relaxed">Email: {email}</p>
            </div>

        </div>

    );

}

export default User;