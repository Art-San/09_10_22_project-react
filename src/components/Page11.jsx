import React, { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [menuItems, setMenuItems] = useState(['Главная', 'Блог', 'Контакты'])

    const handleMenuClick = () => {
        setOpen((prevState) => !prevState)
    };

    const handleItemClick = (id) => {
        console.log("click", id);
    };

    // const renderMenu = () => {
    //     return (
    //         open && (
    //             <ul className="list-group">
    //             {menuItems.map((item, i) => (
    //                 <li 
    //                     className="list-group-item" 
    //                     key={i}
    //                     onClick={() => handleItemClick(item)}
    //                 >
    //                     {item}
    //                 </li>
    //             ))}
    //         </ul>
    //         )
    //     )
    // }

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

    return (
      <div>
        {open && <div>Условный Рендр</div>}
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