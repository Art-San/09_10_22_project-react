import React from 'react'

const Page4 = () => {
    // const logoUrl = "https://picsum.photos/100";
    const logoUrl = "";
    const siteName = "example.com";

    const getHeadLine = () => {
        return logoUrl ? (
            <img src={logoUrl} alt="logo"/>
            ) : (
                <div>{siteName}</div>
            )
    }

  return (
    <>
        <header>{getHeadLine()}</header>
        <p>Вложенные выражения</p>
        <footer>Подвал</footer>
    </>
  )
}

export default Page4