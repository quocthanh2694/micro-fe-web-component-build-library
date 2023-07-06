import { generatePath, useResolvedPath } from "react-router-dom";
import { BASE_URL, URI } from "src/constants/constant";

const useCurrentResolvedPath = () => {
    let resolved = useResolvedPath("");
    let rootPath = resolved.pathname;

    if (rootPath.startsWith(BASE_URL)) {
        // inside container
        rootPath = `${BASE_URL}/`;
    } else {
        // mfeApp alone
        rootPath = '/'
    }

    const generateNavPath = (uri: URI, params?: { id: string }) => {
        const path = params?.id ? generatePath(uri, params) : uri;
        return `${rootPath}${path}`;
    }

    return { generateNavPath };
};

export default useCurrentResolvedPath;