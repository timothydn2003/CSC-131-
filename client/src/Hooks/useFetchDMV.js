import useDMV from "./useDMV"
import { useState, useEffect } from 'react'

const useFetchDMV = () => {
    const{entities} = useDMV();
    const[dmvList,setDMVList] = useState([])
    useEffect(() => {
        const getList = async() => {    
            const response = await entities.people.list();
            setDMVList(response.items)
        }
        getList();
    }, []);
    return { dmvList }
}
export default useFetchDMV;