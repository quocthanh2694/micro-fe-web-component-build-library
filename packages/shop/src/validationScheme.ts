import * as Yup from 'yup';


export const defaultValue = {
    username: '',
};

export const validationScheme = () => {
    return Yup.object().shape({
        username: Yup.string().required('Required'),
    });
};