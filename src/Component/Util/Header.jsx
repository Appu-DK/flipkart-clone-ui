import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<header>
<header className="bg-gray-800 border-green-50 text-white py-3">
        <nav className="container mx-auto flex items-center justify-between">
           
            <Link  className='flex items-center justify-center pl-20 '>
            <img src="images\flipkartlogo.png" alt="logo" className="h-11 w-auto mr-1"/>
            </Link>

            {/*search bar */}
            <div className="flex items-center border border-white rounded-lg w-96">
                <input type="text" placeholder='search for products,category etc' className="bg-transparent text-white focus:outline-none flex-grow py-2 "  />
            </div>
            {/*link block*/}
            <div  className="flex items-start space-x-1">
              
                {/*login*/}
                <Link to={"/"} className='p-4'>
                <i className="fas fa-user mr-1"></i>
                    Login
                </Link>
        

                 {/*become seller option*/}
                 <Link to={"/"} className='p-4'>
                 <i className="fas fa-store mr-1"></i>
                    Become a Seller
                    </Link>

                     {/*cart*/}
                <Link to={"/"} className='p-4'>
                <i className="fas fa-shopping-cart mr-1"></i>
                    Cart
                    </Link>
                
            </div>
        </nav>
        </header>
    </header>


  )
}

export default Header