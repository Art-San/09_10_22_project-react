// import React, { useState, useEffect } from 'react'
// import FormLayout from '../FormLayout'
// import TextField from '../TextField'
// import SelectField from '../SelectField'
// import RadioField from '../RadioField'
// import MultiSelect from '../MultiSelect'
// import CheckboxField from '../CheckboxField'
// import SingleCheckboxField from '../SingleCheckboField'
// import { validate } from '../../utils/validator'
// import { validationSchema } from './validationSchema'
// import {
//     deliveryTypeList,
//     needLiftFloorOptions,
//     giftList,
//     agreements
// } from './fieldsOptions'

// const OrderForm = () => {
//     const [values, setValues] = useState({
//         fio: '',
//         email: '',
//         deliveryType: '',
//         needLiftFloor: '',
//         gifts: [],
//         agreement: [],
//         test: false
//     })

//     const [errors, setErrors] = useState({})

//     const isValid = Object.keys(errors).length === 0

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (isValid) {
//             console.log('Отправлено!')
//         }
//     }

//     const handleChange = (e) => {
//         console.log('eeeeeee', e)
//         const { value, name } = e.target
//         setValues((prev) => ({
//             ...prev,
//             [name]: value
//         }))
//     }

//     useEffect(() => {
//         const errors = validate(values, validationSchema)
//         setErrors(errors)
//     }, [values])

//     return (
//         <FormLayout title="Оформление заказа">
//             <form onSubmit={handleSubmit}>
//                 <TextField
//                     id="fio"
//                     name="fio"
//                     label="ФИО"
//                     value={values.fio}
//                     onChange={handleChange}
//                     error={errors.fio}
//                 />
//                 <TextField
//                     id="email"
//                     name="email"
//                     label="Email"
//                     value={values.email}
//                     onChange={handleChange}
//                     error={errors.email}
//                 />
//                 <SelectField
//                     label="Выберите доставку"
//                     name="deliveryType"
//                     value={values.deliveryType}
//                     onChange={handleChange}
//                     error={errors.deliveryType}
//                     options={deliveryTypeList}
//                     defaultOption='Выберите вариант доставки'
//                 />
//                 <RadioField
//                     options={needLiftFloorOptions}
//                     label="Нужен подъём на этаж?"
//                     name="needLiftFloor"
//                     onChange={handleChange}
//                     value={values.needLiftFloor}
//                     error={errors.needLiftFloor}
//                 />
//                 <MultiSelect
//                     options={giftList}
//                     onChange={handleChange}
//                     value={values.gifts}
//                     name="gifts"
//                     label="Выберите подарок"
//                 />
//                 <CheckboxField
//                     name="agreement"
//                     label="Подтвердите согласие"
//                     options={agreements}
//                     onChange={handleChange}
//                     value={values.agreement}
//                     error={errors.agreement}
//                 />
//                 <SingleCheckboxField
//                     name="test"
//                     onChange={handleChange}
//                     value={values.test}
//                     label="Проверка"
//                 />
//                 <button className="btn btn-primary w-100 mx-auto" type="submit">
//                     Оформить
//                 </button>
//             </form>
//         </FormLayout>
//     )
// }

// export default OrderForm

import React, { useState, useEffect } from 'react'
import FormLayout from '../FormLayout'
import TextField from '../TextField'
import SelectField from '../SelectField'
import RadioField from '../RadioField'
import MultiSelect from '../MultiSelect'
import CheckboxField from '../CheckboxField'
import { validationSchema } from './validationSchema'
import {
    deliveryTypeList,
    needLiftFloorOptions,
    giftList,
    agreements
} from './fieldsOptions'
import { parceYupError } from '../../utils/parceYupError'

const OrderForm = () => {
    const [values, setValues] = useState({
        fio: '',
        email: '',
        address: '',
        deliveryType: '',
        needLiftFloor: '',
        gifts: [],
        agreement: []
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
        validationSchema
            .validate(values, { abortEarly: false })
            .then(() => setErrors({}))
            .catch((yupError) => {
                const errors = parceYupError(yupError)
                setErrors(errors)
            })
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
                <TextField
                    id="address"
                    name="address"
                    label="Адрес"
                    value={values.address}
                    onChange={handleChange}
                    error={errors.address}
                />

                <SelectField
                    label="Выберите доставку"
                    name="deliveryType"
                    value={values.deliveryType}
                    onChange={handleChange}
                    error={errors.deliveryType}
                    options={deliveryTypeList}
                    defaultOption="Выберите вариант доставки"
                />

                <RadioField
                    options={needLiftFloorOptions}
                    label="Нужен подъём на этаж?"
                    value={values.needLiftFloor}
                    name="needLiftFloor"
                    onChange={handleChange}
                    error={errors.needLiftFloor}
                />

                <MultiSelect
                    options={giftList}
                    onChange={handleChange}
                    value={values.gifts}
                    name="gifts"
                    label="Выберите подарок"
                />

                <CheckboxField
                    name="agreement"
                    label="Подтвердите согласие"
                    options={agreements}
                    onChange={handleChange}
                    value={values.agreement}
                    error={errors.agreement}
                />

                <button className="btn btn-primary w-100 mx-auto" type="submit">
                    Оформить
                </button>
            </form>
        </FormLayout>
    )
}

export default OrderForm
