import React from "react";
import User from './User';


function UserList({ users }) {

    return (

        <div className="bg-gray-900">

            <div class="flex flex-col text-center w-full mb-2">
                <h2 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">USER LIST</h2>

            </div>

            {users.map((user) => (

                <User key={user.email} name={user.name} email={user.email} />
            ))}
        </div>
    );

}

export default UserList;
