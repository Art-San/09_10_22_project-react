// Одна из типичных задач для динамического изменения атрибутов - стилизация компонентов. 
// Часто мы хотим изменять CSS-класс в зависимости от какого-то параметра. Давай в нашем примере 
// представим, что мы делаем шаблон сайта, в котором пользователь может загрузить логотип или 
// не загрузить. Сделаем так, чтобы выводилось название сайта с отступом, если есть логотип и без, 
// если его нет.


import React from 'react'

const Page = () => {
    const logoUrl = "https://picsum.photos/100";
    // const logoUrl = "";
    const siteName = "example.com";

    return (
      <>
        <header className="d-flex  align-items-center w-100"> {/** Добавил стилей */}
          {
            /*
            * logoUrl && "me-4" - означает, что если есть логотип, то добавь класс "me-4"
            * можно сделать logoUrl ? "me-4" : "me-2" если хотим вывести
            * класс "me-2", когда логотипа нет
            */
          }
          <div className={logoUrl && "me-4"}>{siteName}</div>
          {logoUrl && <img src={logoUrl} alt="logo" />}
        </header>
        <p>Динамический рендер классов</p>
        <footer>подвал</footer>
      </>
    );
  };



//    (т.к. слово class зарезервировано в JS, то классы в JSX задаются через атрибут className).
// В нашем примере мы хотим динамически изменять класс у блока с siteName. 
// Если у нас будет несколько классов, то мы можем вынести их в отдельную 
// переменную или даже создать функцию.


export const Page6 = () => {
  const logoUrl = "";
  // const logoUrl = "https://picsum.photos/100";
  console.log('logoUrl', Boolean(logoUrl))
  
  const siteName = "example.com";

  const getClasses = () => {
    let classes = "p-2 shadow";
    return (classes += logoUrl ? " me-4" : "");
  };

  return (
    <>
      <header className="d-flex  align-items-center w-100">
        <div className={getClasses()}>
          {siteName}
        </div>
        {logoUrl && <img src={logoUrl} alt="logo" />}
      </header>
      <footer>подвал</footer>
    </>
  );
};



export default Page6