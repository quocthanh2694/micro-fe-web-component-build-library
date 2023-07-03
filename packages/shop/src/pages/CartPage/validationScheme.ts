import * as Yup from 'yup';

export const validationScheme = () => {
    return Yup.object().shape({
        fullname: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        district: Yup.string().required('Required'),
        ward: Yup.string().required('Required'),
        houseNumber: Yup.string().required('Required'),
    });
};