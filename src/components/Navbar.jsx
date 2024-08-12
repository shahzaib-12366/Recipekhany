// import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    // const navigate = useNavigate()
    // const [input, setInput] = useState('')


    return (
        <>
            <div className="nav">
                <div className="left">
                    <Link to='/' className='link'>
                        <h2> Recipe khany</h2>
                    </Link>
                </div>
           
                <div className="right">
                    <Link to={`/category/indian`} className="link">
                        <div>Pakistani</div>
                    </Link>
                    <Link to={`/category/american`} className="link">
                        <div>American</div>
                    </Link>
                    <Link to={`/category/british`} className="link" >
                        <div>British</div>
                    </Link>
                    <Link to={`/category/chinese`} className="link">
                        <div>Chinese</div>
                    </Link>
                    <Link to={`/category/thai`} className="link">
                        <div>Thai</div>
                    </Link>


                </div>
            </div>
        </>
    )
}

export default Navbar