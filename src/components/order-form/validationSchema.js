export const validationSchema = {
    fio: {
        isRequired: {
            message: 'ФИО обязательно для заполнения'
        },
        isFIO: {
            message: 'Введите корректное ФИО'
        }
    },
    email: {
        isRequired: {
            message: 'Электронная почта обязательна для заполнения'
        },
        isEmail: {
            message: 'Email введён некорректно'
        }
    },
    deliveryType: {
        isRequired: {
            message: 'Выберите вариант доставки'
        }
    }
}
