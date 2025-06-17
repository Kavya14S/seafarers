const Training = () => {
    return(
        <>
        <div className="2xl:container bg-[#f2f9ff]">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col justify-center items-center m-4">
                    <img src="https://ik.imagekit.io/9rldi0s2f8/brill/bsm_sea_to_shore.width-1920.jpg?updatedAt=1750061123290" alt="imgg" className="rounded-md" />
                </div>
                
                <div className="flex flex-col justify-center items-start gap-3 m-4">
                    <h1 className="my-2 text-3xl text-[#003B61] font-normal font-[Poppins]">SYPPORTING A MEANINGFUL CAREER AT SEA</h1>
                    <p className="font-[Poppins] text-[#003B61] font-light">BSM provides continuous onshore and onboard learning and development to support seafarers in their career progression.</p>
                    <p className="font-[Poppins] text-[#003B61] font-light">Our 6 Maritime Training Centres, a designated team of onboard training superintendents and seafarer centric management system boosts the career development of our seagoing employees.</p>
                    <button className="text-white font-[Poppins] bg-[#003B61] p-3 rounded-md">Learn More</button>
                </div>
            </div>   
        </div>
        </>
    )
}
export default Training;