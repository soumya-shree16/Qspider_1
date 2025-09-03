import React from 'react'
import { NavLink, Outlet,Link } from 'react-router-dom'
import AllUsers from '../../pages/CreateUser'
import Users from '../../pages/Users'

const Dashboard = () => {
  return (
    <div className='bg-indigo-100 h-full flex'>
        <div className='w-[20%] h-full bg-black fix'>
            <ul className='w-full h-full text-white text-lg font-semibold p-10 '>
                <li className='hover:bg-slate-600'><NavLink to="/dashboard/createusers">Create users</NavLink></li>
                <li className='hover:bg-slate-600'><NavLink to="/dashboard/users">Users</NavLink></li>
                <li className='hover:bg-slate-600'><NavLink to="/dashboard/cart">Cart</NavLink></li>
                <li className='hover:bg-slate-600'><NavLink to="/dashboard/profile">Profile</NavLink></li>
                <li className='hover:bg-slate-600'><NavLink to="/dashboard/allproducts">All Products</NavLink></li>
                <li className='hover:bg-slate-600'><NavLink to="/dashboard/setting">Setting</NavLink></li>
                <li className='hover:bg-slate-600'><NavLink to="/dashboard/help">Help</NavLink></li>
                   <div>
          <button className='mt-40 bg-indigo-300 text-black cursor-pointer w-20 hover:bg-slate-50'><Link to="/login">Logout</Link></button>
        </div>
            </ul>
        </div>
       
        <div >
            <Outlet>
       \
            </Outlet>
        </div>
    </div>
  )
}

export default Dashboard