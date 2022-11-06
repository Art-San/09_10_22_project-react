import React, { useState, useEffect } from 'react'
import { products as productsFromData } from '../data/products'
import Product from './Product'
import SortSelect from './SortSelect'
import _ from 'lodash'

const sortOptions = [
    {
        value: 'price',
        label: 'Цена',
        sort: (products) => _.orderBy(products, ['price'], ['asc'])
    },
    {
        value: 'priceDESC',
        label: 'Цена по убыванию',
        sort: (products) => _.orderBy(products, ['price'], ['desc'])
    },
    {
        value: 'ratingASC',
        label: 'Рейтинг по возрастанию',
        sort: (products) => _.orderBy(products, ['rating.rate'], ['asc'])
    },
    {
        value: 'ratingDESC',
        label: 'Рейтинг по убыванию',
        sort: (products) => _.orderBy(products, ['rating.rate'], ['desc'])
    }
]

const ProductList = () => {
    const [products] = useState(productsFromData)

    // Переменная для хранения сортированных товаров
    const [sortProducts, setSortProducts] = useState(productsFromData)

    // Хранение признака сортировки
    const [sortSign, setSortSign] = useState('price')
    // Установим сортировку по умолчанию
    const handleChangeSortSign = (e) => {
        setSortSign(e.target.value)
    }

    useEffect(() => {
        const findOption = sortOptions.find(({ value }) => value === sortSign)
        if (findOption) {
            setSortProducts(findOption.sort(products))
        } else {
            setSortProducts(products)
        }
    }, [sortSign, products])

    return (
        <div className="container mt-t">
            <div>
                {/* Компонент выбора признака сортировки */}
                <SortSelect
                    value={sortSign}
                    options={sortOptions}
                    onSort={handleChangeSortSign}
                />
            </div>
            <div className="row mt-4">
                {sortProducts.map((product) => (
                    // Список товаров
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
