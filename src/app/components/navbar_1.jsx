import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [menuItems, setMenuItems] = useState(["Главная", "Блог", "Контакты"]);

    const handleMenuClick = () => {
        setOpen((prevState) => !prevState);
    };

    // Добавили id
    const handleItemClick = (id) => {
        console.log(id);
        setMenuItems((prevItems) => prevItems.filter((tag) => tag !== id));
    };

    return (
        <div>
            <button
                className="btn btn-sm btn-primary"
                onClick={handleMenuClick}
            >
                меню
            </button>
            {open && (
                <ul className="list-group">
                    {/* Передали анонимную функцию в которой вызываем handleItemClick(item) */}
                    {menuItems.map((item) => (
                        <li
                            className="list-group-item"
                            key={item}
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

export default Navbar;
