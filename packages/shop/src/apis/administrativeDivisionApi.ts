import { IAdministrative } from "src/interface/administrativeDivision";

const cities: IAdministrative[] = require('../dummyData/city.json');
const districts: IAdministrative[] = require('../dummyData/district.json');
const wards: IAdministrative[] = require('../dummyData/ward.json');

export const getCitiesApi = (): IAdministrative[] => {
    return cities;
}
export const getDistrictApi = (): IAdministrative[] => {
    return districts;
}
export const getWardsApi = (): IAdministrative[] => {
    return wards;
}