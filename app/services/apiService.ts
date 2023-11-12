import { ApiResponse} from "../types/apiTypes";

export async function fetchData() : Promise<ApiResponse | null>{
    try {
        const response = await fetch('URL_SPRINGBOOT');
        if (!response.ok){
            throw new Error('Network response not OK');
        }
        return await response.json() as ApiResponse;
    } catch (error) {
        console.error('There was a problem feching the data', error);
        return null;
    }
}