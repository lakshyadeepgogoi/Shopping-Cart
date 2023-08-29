import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex flex-row justify-between">
       <NavLink to="/">
        <div>
          <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fres.cloudinary.com%2Fcodehelp%2Fimage%2Fupload%2Fv1667493133%2FcodehelpFinalAssets%2Fort4cxqmugzj9an4sbae.png&tbnid=pFePnbY_N_KrBM&vet=12ahUKEwjdnJnG-4GBAxW67DgGHRDBBGgQMygBegQIARBQ..i&imgrefurl=https%3A%2F%2Flearn.thecodehelp.in%2Ftermsofuse&docid=ota6LdPjwskI0M&w=158&h=158&q=codehelp%20logo&ved=2ahUKEwjdnJnG-4GBAxW67DgGHRDBBGgQMygBegQIARBQ" />
        </div>
       </NavLink>
        
        <NavLink to="/">
          <p>Home</p>        

        </NavLink>
        <NavLink to="/cart">
          <div>
             <FaShoppingCart/>
          </div>
        </NavLink>

        
      </div>
    </div>
  )
};

export default Navbar;
