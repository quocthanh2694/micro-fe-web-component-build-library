import { useEffect, useState } from 'react';
import { getCitiesApi, getDistrictApi, getWardsApi } from 'src/apis/administrativeDivisionApi';
import { IAdministrative } from 'src/interface/administrativeDivision';


export default function useAdministrativeDivision() {

    const [cities, setCities] = useState<IAdministrative[]>([]);
    const [districts, setDistricts] = useState<IAdministrative[]>([]);
    const [wards, setWards] = useState<IAdministrative[]>([]);

    useEffect(() => {
        const _cities = getCitiesApi();
        setCities(_cities);

        const _districts = getDistrictApi();
        setDistricts(_districts);

        const _wards = getWardsApi();
        setWards(_wards);
    }, [])

    return {
        cities,
        districts,
        wards,
    }
}
