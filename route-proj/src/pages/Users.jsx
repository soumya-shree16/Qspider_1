
import {Link} from "react-router-dom"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetch = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/users');
      setUsers(data);
    } catch (error) {
      console.log('Error fetching users:', error);
    }
  };

  const handleEdit=()=>{
    console.log("edited");
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
  <div className="w-full h-screen flex flex-col  ms-3">
  {/* Header (non-scrollable) */}
  <div className="px-8 pt-8">
    <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">Users</h2>
  </div>

  {/* Scrollable User Grid */}
  <div className="flex-1 overflow-y-auto px-8 pb-8">
    <div className="flex flex-wrap gap-6 bg-slate-100 p-4 rounded-xl">
      {users?.map((user, id) => (
        <div
          key={id}
          className="bg-white w-[350px] rounded-xl shadow-md p-6 ms-10 mt-3 hover:shadow-xl transition duration-300"
        >
          <div className="flex flex-col items-center">
            <img
              src={user.image}
              alt={user.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-indigo-500"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{user.name}</h3>
            <p className="text-gray-600 text-sm mb-1">
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p className="text-gray-600 text-sm mb-1">
              <span className="font-medium">DOB:</span> {user.dob}
            </p>
            <p className="text-gray-600 text-sm mb-1">
              <span className="font-medium">Gender:</span> {user.gender}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              <span className="font-medium">Phone:</span> {user.phone || 'N/A'}
            </p>
            <button
              onClick={() => handleEdit(user)}
              className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-red-400 transition"
            >
             <Link to="/dashboard/edit">Edit</Link>  {user.name}
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Users;

