import React, { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    // const [menuItems, setMenuItems] = useState(['Главная', 'Блог', 'Контакты'])
    const [menuItems, setMenuItems] = useState([])

    const handleMenuClick = () => {
        setOpen((prevState) => !prevState)
    };

    const handleItemClick = (id) => {
        console.log("click", id);
    };

    const renderMenu = () => {
        return open ? (
                <ul className="list-group">
                {menuItems.map((item, i) => (
                    <li 
                        className="list-group-item" 
                        key={i}
                        onClick={() => handleItemClick(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            ) : null
    }

    if (menuItems.length === 0) {
        return <h4>Not menu items</h4>;
      }

    return (
      <div>
        {open && <div className='btn btn-sm btn-primary'>Условный Рендр Стрелочки</div>}
        <button 
            className='btn btn-sm btn-primary'
            onClick={handleMenuClick}>
          меню
        </button>
       {renderMenu()}
      </div>
    );
  };

  export default Navbar