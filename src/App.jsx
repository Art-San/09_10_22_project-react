import React from 'react'
import MyForm from './components/MyForm'
// import Counter from './components/counter'
// import EpisodesList from './components/EpisodesList'
import ProductList from './components/ProductList'

const App = () => {
    return (
        <>
            <MyForm/>
            {/* <Counter/> */}
            <div className="App">
                {/* <EpisodesList /> */}
                <ProductList />
            </div>
        </>
    )
}

export default App
