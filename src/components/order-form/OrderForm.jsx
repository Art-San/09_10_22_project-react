import React, { useState, useEffect } from 'react'
import FormLayout from '../FormLayout'
import TextField from '../TextField'
import SelectField from '../SelectField'
import { validate } from '../../utils/validator'
import { validationSchema } from './validationSchema'
import { deliveryTypeList } from './fieldsOptions'

const OrderForm = () => {
    const [values, setValues] = useState({
        fio: '',
        email: '',
        deliveryType: ''
    })

    const [errors, setErrors] = useState({})

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValid) {
            console.log('Отправлено!')
        }
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        const errors = validate(values, validationSchema)
        console.log('errors', errors)
        setErrors(errors)
    }, [values])

    return (
        <FormLayout title="Оформление заказа">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="fio"
                    name="fio"
                    label="ФИО"
                    value={values.fio}
                    onChange={handleChange}
                    error={errors.fio}
                />
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <SelectField
                    label="Выберите доставку"
                    name="deliveryType"
                    value={values.deliveryType}
                    onChange={handleChange}
                    error={errors.deliveryType}
                    options={deliveryTypeList}
                    defaultOption='Выберите вариант доставки'
                />
                <button className="btn btn-primary w-100 mx-auto" type="submit">
                    Оформить
                </button>
            </form>
        </FormLayout>
    )
}

export default OrderForm
