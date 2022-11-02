import React from 'react'


const NavLink = (props) => {

  // Вызываем только метод из props
  const handleClick = () => {
    props.onActiveChange(props.id);
  };

  const getClasses = () => {
    // let classes = "list-group-item";
    let classes = "nav-link"
    // Заменено на значение из props
    return (classes += props.active ? " active" : "");
  };

  return (
    <li className="nav-item" onClick={handleClick}>
      <a href={props.link} className={getClasses()}>
        {props.text}
      </a>
    </li>
  );
};




export default NavLink