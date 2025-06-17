import Jobcarddata from "../api/Jobcarddata"
import Jobcard from "../Jobcard/Jobcard"

const Webpage = () => {
    return (
        <>
        <div className="2xl:container">
            <div className="w-[90%] mx-auto my-6 grid grid-cols-1 md:grid-cols-2">
                {Jobcarddata.map((job)=>{
                    return (
                        <>
                        <Jobcard
                        heading = {job.heading}
                        role= {job.role}
                        department= {job.department}
                        vesseltype= {job.vesseltype}
                        vesselsubtype= {job.vesselsubtype}
                        functionalLevel={job.functionalLevel}
                         />
                        </>
                    )
                })
                }
            </div>
        </div>
        
        </>
    )
}
export default Webpage;