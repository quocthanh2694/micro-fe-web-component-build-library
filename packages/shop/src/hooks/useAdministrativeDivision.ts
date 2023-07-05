import { useEffect, useState } from 'react';
import { getCitiesApi } from 'src/apis/administrativeDivisionApi';
import { IAdministrative } from 'src/interface/administrativeDivision';


export default function useAdministrativeDivision() {

    const [cities, setCities] = useState<IAdministrative[]>([]);

    useEffect(() => {
        const _cities = getCitiesApi();
        setCities(_cities);
    }, [])

    return {
        cities,
    }
}
