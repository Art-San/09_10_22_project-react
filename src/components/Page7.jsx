import React from 'react';

// const Navbar = () => {
//     const handleMenuClick = () => {}
  
//     return (
//       <div>
//         <button 
//           className="btn btn-sm btn-primary" 
//           onClick={handleMenuClick}
//         >
//           меню
//         </button>
//         <div>содержание меню</div>
//       </div>
//     );
//   };



const Navbar = () => {
    let open = true;
    const handleMenuClick = () => {
      // Переключаем на противоположное значение true -> false, false -> true
      open = !open; 
      console.log('open', open);
    };
    return (
      <div>
        {open && <div>Обработка событий</div>}
        <button className='btn btn-sm btn-primary' onClick={handleMenuClick}>
          меню
        </button>
        
      </div>
    );
  };

  export default Navbar