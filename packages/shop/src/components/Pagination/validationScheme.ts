import * as Yup from 'yup';

export const validationScheme = (max: number) => {
    return Yup.object().shape({
        page: Yup.string()//.required('Required')
            .test('min', 'Invalid number ', val => !val || (!!val && Number(val) > 0))
            .test('max', 'Invalid number ', v => !v || (!!v && Number(v) <= max)),
    });
};