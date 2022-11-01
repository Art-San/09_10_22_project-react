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
    };

     // Обработчик нажатия // Добавили id
    const handleItemClick = (id) => {
        console.log("click", id);
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
            <ul className="list-group">
                {/* Передали анонимную функцию в которой вызываем handleItemClick(item) */}
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
        )}
        
      </div>
    );
  };

  export default Navbar