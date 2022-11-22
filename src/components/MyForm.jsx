// import React, { useState, useEffect } from 'react'
// import TextField from './TextField'
// import { validate } from '../utils/validator'
// import { validationSchema } from './validationSchema'
// const MyForm = () => {
//     const [values, setValues] = useState({
//         email: '',
//         link: '',
//         description: ''
//     })
//     const [errors, setErrors] = useState({})

//     const handleSubmit = (e) => {
//         e.preventDefault()
//     }

//     useEffect(() => {
//         const errors = validate(values, validationSchema)
//         setErrors(errors)
//     }, [values])

//     const handleChange = (e) => {
//         const { value, name } = e.target
//         setValues((prev) => ({
//             ...prev,
//             [name]: value
//         }))
//     }

//     // Деструктуризируем для удобства
//     const { email, link, description } = values
//     return (
//         <div>
//             <h2>Отчёт об ошибке</h2>
//             {/* Для удобства просмотра
//             <div>
//                 <pre>{JSON.stringify(errors, null, 2)}</pre>
//             </div> */}

//             <form onSubmit={handleSubmit}>
//                 <TextField
//                     id="email"
//                     name="email"
//                     label="Email"
//                     value={email}
//                     onChange={handleChange}
//                     error={errors.email}
//                 />

//                 <TextField
//                     id="link"
//                     name="link"
//                     label="Ссылка на страницу с ошибкой"
//                     value={link}
//                     onChange={handleChange}
//                     error={errors.link}
//                 />

//                 <TextField
//                     id="description"
//                     name="description"
//                     label="Описание"
//                     value={description}
//                     onChange={handleChange}
//                     error={errors.description}
//                 />

//                 <button type="submit">Отправить</button>
//             </form>
//         </div>
//     )
// }

// export default MyForm

import React, { useState, useEffect } from 'react'
import TextField from './TextField'
import { validate } from '../utils/validator'
import { validationSchema } from './validationSchema'

const MyForm = () => {
    const [values, setValues] = useState({
        email: '',
        link: '',
        description: '',
        password: ''
    })

    const [errors, setErrors] = useState({})
    const isValid = Object.keys(errors).length === 0

    useEffect(() => {
        const errors = validate(values, validationSchema)
        setErrors(errors)
    }, [values])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValid) {
            // отправляем только если валидно
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

    const { email, link, description, password } = values

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h2>Отчёт об ошибке</h2>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            value={email}
                            onChange={handleChange}
                            error={errors.email}
                        />

                        <TextField
                            id="link"
                            name="link"
                            label="Ссылка на страницу с ошибкой"
                            value={link}
                            onChange={handleChange}
                            error={errors.link}
                        />

                        <TextField
                            id="description"
                            name="description"
                            label="Описание"
                            value={description}
                            onChange={handleChange}
                            error={errors.description}
                        />

                        <TextField
                            id="password"
                            name="password"
                            label="Пароль"
                            value={password}
                            onChange={handleChange}
                            error={errors.password}
                            type="password"
                        />

                        <button
                            className="btn btn-primary w-100 mx-auto"
                            disabled={!isValid}
                            type="submit"
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MyForm
