import React, { useState, useEffect } from 'react'
import TextField from '../common/form/TextField'
import { validator } from '../../utils/validator'
import api from '../../api'
// import { professions } from '../../api/fake.api/professions.api'

const RegisterForm = () => {
    const [data, setData] = useState({ email: '', password: '', profession: '' })
    const [errors, setErrors] = useState({})
    const [professions, setProfession] = useState()
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data))
    }, [])
    useEffect(() => {
        console.log('professions', professions)
    }, [professions])
    const handleChange = ({ target }) => {
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
            <div className="md-4">
                <label htmlFor="validationCustom04" className="form-label">
                    State
                </label>
                <select
                    className="form-select"
                    id="validationCustom04"
                    required
                >
                    <option selected={data.profession === ''} disabled value="">
                        Choose...
                    </option>
                    {professions &&
                        Object.keys(professions).map((professionName) => (
                            <option
                                selected={
                                    professions[professionName]._id ===
                                    data.profession
                                }
                                value={professions[professionName]._id}
                                key={professions[professionName]._id}
                            >
                                {professions[professionName].name}
                            </option>
                        ))}
                </select>
                <div className="invalid-feedback">
                    Please select a valid state.
                </div>
            </div>
            <button
                type='submit'
                disabled={!isValid}
                className='btn btn-primary w-100 mx-auto'>
                Submit
            </button>
        </form>
    )
}

export default RegisterForm

// 8:19

//   {/* <select
//                     className="form-select"
//                     id="validationCustom04"
//                     required
//                 >
//                     <option selected={data.profession === ''} disabled value="">
//                         Choose...
//                     </option>
//                     {professions &&
//                         professions.map((profession) => (
//                             <option
//                                 selected={profession._id === data.profession}
//                                 value={profession._id}
//                                 key={profession._id}
//                             >
//                                 {profession.name}
//                             </option>
//                         ))}
//                 </select> */}
