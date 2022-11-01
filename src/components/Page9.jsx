import React, { useState } from 'react';



const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [menuItems, setMenuItems] = useState([
        'Главная',
        'Блог',
        'Контакты',
    ])

 

    const handleMenuClick = () => {
        setOpen((prevState) => !prevState)
        // setOpen(!open)
        // setMenuItems((prevItems) => prevItems.push('New menu item 1'));
    };

   
    return (
      <div>
        {open && <div>Рендр списка</div>}
        <button 
            className='btn btn-sm btn-primary'
            onClick={handleMenuClick}>
          меню
        </button>
        {open && (
            <ul>
                {menuItems.map((item, i) => (
                    <li className="list-group-item" key={i}>{item}</li>
                ))}
            </ul>
        )}
        
      </div>
    );
  };

  export default Navbar