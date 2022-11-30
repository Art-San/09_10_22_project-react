import React, { useState, useEffect } from 'react'
import TextField from '../common/form/TextField'
import { validator } from '../../utils/validator'
import api from '../../api'
import SelectField from '../common/form/SelectField'
import RadioField from '../common/form/RadioField'
import MultiSelectField from '../common/form/MultiSelectField'
import CheckBoxField from '../common/form/CheckBoxField'
// 30/11/22

const RegisterForm = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        profession: '',
        sex: 'male',
        qualities: {},
        licence: false
    })
    const [qualities, setQualities] = useState({})
    const [errors, setErrors] = useState({})
    const [professions, setProfession] = useState()
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data))
        api.qualities.fetchAll().then((data) => setQualities(data))
    }, [])
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения'
            },
            isEmail: {
                message: 'Email введен не некорректно'
            }
        },
        password: {
            isRequired: {
                message: 'Пароль обязательна для заполнения'
            },
            isCapitalSymbol: {
                message: 'Пароль должен содержать хотя бы одну заглавную букву'
            },
            isContainDigit: {
                message: 'Пароль должен содержать хотя бы одну цыфру'
            },
            min: {
                message: 'Пароль должен быть не менее 8 символов',
                value: 8
            }
        },
        profession: {
            isRequired: {
                message: 'Обязательно выберите вашу профессию'
            }
        },
        licence: {
            isRequired: {
                message: 'Вы не можете использовать наш сервис без подтверждения лицензионного соглашения'
            }
        }
    }

    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        console.log('isValid', isValid)
        if (!isValid) return
        console.log('data', data)
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label='Электронная почта'
                name='email'
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label='Пароль'
                type='password'
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <SelectField
                label='Выберите вашу профессию'
                defaultOption='Choose...'
                options={professions}
                onChange={handleChange}
                value={data.profession}
                error={errors.profession}
            />
            <RadioField options={[
                { name: 'Male', value: 'male' },
                { name: 'Female', value: 'female' },
                { name: 'Other', value: 'other' }
            ]}
            value={data.sex}
            name='sex'
            onChange={handleChange}
            label='Выберите ваш пол'
            />
            <MultiSelectField
                label='Выберите ваши качества'
                options={qualities}
                onChange={handleChange}
                name='qualities'
            />
            <CheckBoxField
                name='licence'
                value={data.licence}
                onChange={handleChange}
                error={errors.licence}
            >
                Подтвердите <a>лицензионное соглашение</a>
            </CheckBoxField>
            <button
                type='submit'
                disabled={!isValid}
                className='btn btn-primary w-100 mx-auto'
            >
                Submit
            </button>
        </form>
    )
}

export default RegisterForm

// import React from 'react';

// import Select from 'react-select';
// import { colourOptions } from '../data';

// export default () => (
//   <Select
//     defaultValue={[colourOptions[2], colourOptions[3]]}
//     isMulti
//     name="colors"
//     options={colourOptions}
//     className="basic-multi-select"
//     classNamePrefix="select"
//   />
// );
