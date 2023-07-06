import { useNavigate } from "react-router-dom";
import { URI } from "src/constants/constant";
import useCurrentResolvedPath from "./useCurrentResolvedPath";

const useNavigateMFA = () => {
    const { generateNavPath } = useCurrentResolvedPath();
    const navigate = useNavigate();

    const navigateTo = (uri: URI, params?: { id: string }) => {
        const path = generateNavPath(uri, params);
        navigate(path);
    }

    return { navigateTo };
};

export default useNavigateMFA;