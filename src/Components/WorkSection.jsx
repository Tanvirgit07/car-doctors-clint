import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const WorkSection = () => {
    const [work,setWork] = useState([])
    useEffect(() =>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setWork(data))
    },[])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {
                work.map(service => <ServiceCard key={service._id} service ={service}></ServiceCard>)
            }                        
        </div>
    );
};

export default WorkSection;