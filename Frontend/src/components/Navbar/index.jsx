import { Link } from "react-router-dom"
import { FaBriefcaseMedical } from "react-icons/fa";
import './index.css'

const Navbar=()=>{
    return (
        <nav className="navbar p-2 flex justify-between">
            <Link to="/">
                <div className="flex gap-2 items-center">
                    <FaBriefcaseMedical className="website-name" size={30} />
                    <p className="website-name">MediConnect</p>
                </div>
            </Link>
            <Link to='/'>
                <p className="website-name">Home</p>
            </Link>
        </nav>
    )
}

export default Navbar