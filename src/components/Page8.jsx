import React, { useState } from 'react';



const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleMenuClick = () => {
        setOpen((prevState) => !prevState)
        // setOpen(!open)
    };
    return (
      <div>
        {open && <div>Обработка событий</div>}
        <button 
            className='btn btn-sm btn-primary' 
            onClick={handleMenuClick}>
          меню
        </button>
        
      </div>
    );
  };

  export default Navbar