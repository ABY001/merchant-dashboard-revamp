import React from 'react'
import { Link } from 'react-router-dom'
import lucred from '../../assets/lucred.png'
import home from '../../assets/home.png'
import addProduct from '../../assets/addProduct.png'
import sales from '../../assets/sales.png'
import profile from '../../assets/profile.png'
import userGuide from '../../assets/userGuide.png'
import userReport from '../../assets/userReport.png'
import settings from '../../assets/settings.png'
import help from '../../assets/help.png'
import logout from '../../assets/logout.png'

const Sidebar = () => {
  return (
    <div>
        <MaxSidebar />

    </div>
  )
}

export const MaxSidebar = () => {
    return (
        <div className='w-[15%] bg-[#533AE9] fixed h-[100vh] '>
            <img src={lucred} alt="Lucred" className='bg-[#fff] rounded-md mx-[auto] my-[12%] py-[5%] px-[5%] h-[9vh]' />
           <ul className='h-[60vh] flex flex-col justify-evenly ml-[5%]'>
                <li><Link to={'/dashboard'} className='text-[#fff] flex pl-[5%] items-center '><img src={home} alt="" className='h-[2vh] mr-[5%]'/>Dashboard</Link></li>
                <li><Link to={'/dashboard/add-product'} className='text-[#fff] flex pl-[5%] items-center '><img src={addProduct} alt="" className='h-[2vh] mr-[5%]'/>Add Product</Link></li>
                <li><Link to={'/dashboard/sales-info'} className='text-[#fff] flex pl-[5%] items-center '><img src={sales} alt="" className='h-[2vh] mr-[5%]'/>Sales Info</Link></li>
                <li><Link to={'/dashboard/profile'} className='text-[#fff] flex pl-[5%] items-center '><img src={profile} alt="" className='h-[2vh] mr-[5%]'/>Profile</Link></li>
                <li><Link to={''} className='text-[#fff] flex pl-[5%] items-center '><img src={userGuide} alt="" className='h-[auto] mr-[5%]'/>User Guide</Link></li>
                <li><Link to={'/dashboard/customer-report'} className='text-[#fff] flex pl-[5%] items-center '><img src={userReport} alt="" className='h-[2vh] mr-[5%]'/>User Report</Link></li>
                <li><Link to={''} className='text-[#fff] flex pl-[5%] items-center '><img src={settings} alt="" className='h-[2vh] mr-[5%]'/>Settings</Link></li>
                <li><Link to={''} className='text-[#fff] flex pl-[5%] items-center '><img src={help} alt="" className='h-[2vh] mr-[5%]'/>Help</Link></li>
                <li><Link to={''} className='text-[#fff] flex pl-[5%] items-center '><img src={logout} alt="" className='h-[2vh] mr-[5%]'/>Logout</Link></li>
            </ul>

        

        </div>
    )
    }


export default Sidebar