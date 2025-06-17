const Feedback = () => {
    return(
        <>
        <div className="2xl:container my-6">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col space-y-3 py-4">
                    <h1 className="my-2 text-3xl text-[#003B61] font-normal font-[Poppins]">MEET OUR SEAFARERS</h1>
                </div>
            </div>
        </div>
        <div className="2xl:container">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="flex flex-col justify-center items-center space-y-3 py-6 px-24  bg-[#f2f9ff] ">
                    <div className="flex justify-center items-center">
                        <img src="https://ik.imagekit.io/9rldi0s2f8/brill/eimy_bsm.width-450.jpg?updatedAt=1750086213180" alt="ph" className="h-52 w-52 float-left rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center items-start space-y-4">
                        <h1 className="my-2 text-3xl text-[#003B61] font-normal font-[Poppins]">Engine Cadet Eimy Acevedo</h1>
                        <p className="font-[Poppins] text-[#003B61] font-light">Engine Cadet Eimy Acevedo is part of BSM’s Cadet Training Programme and has sailed on her first container vessel with BSM to pursue her dream of becoming a Chief Engineer.</p>
                        <button className="text-[#003B61] font-[Poppins] border-2 border-solid border-[#003B61] p-2 rounded-md">Read More</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-3 py-6 px-24  bg-[#f2f9ff] ">
                    <div className="flex justify-center items-center">
                        <img src="https://ik.imagekit.io/9rldi0s2f8/brill/smokov_georgii_bsm.webp?updatedAt=1750093069863" alt="ph" className="h-52 w-52 float-left rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center items-start space-y-4">
                        <h1 className="my-2 text-3xl text-[#003B61] font-normal font-[Poppins]">Chief Engineer on LPG vessels Smokov Georgii</h1>
                        <p className="font-[Poppins] text-[#003B61] font-light">Smokov Georgii, currently sailing as Chief Engineer on LPG vessels, began his journey with BSM as a cadet. After his cadetship, he sailed on container vessels for a decade and later transitioned to LPG vessels.</p>
                        <button className="text-[#003B61] font-[Poppins] border-2 border-solid border-[#003B61] p-2 rounded-md">Read More</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-3 py-6 px-24  bg-[#f2f9ff] ">
                    <div className="flex justify-center items-center">
                        <img src="https://ik.imagekit.io/9rldi0s2f8/brill/bernard_bsm.width-450.jpg?updatedAt=1750093089287" alt="ph" className="h-52 w-52 float-left rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center items-start space-y-4">
                        <h1 className="my-2 text-3xl text-[#003B61] font-normal font-[Poppins]">Chief Officer Bernard Frempong</h1>
                        <p className="font-[Poppins] text-[#003B61] font-light">Bernard Frempong, joined BSM as a Deck Cadet and rose up the ranks to become a Chief Officer with BSM. With mentorship and support, he was able to overcome challenges at each step and was offered numerous opportunities for growth.</p>
                        <button className="text-[#003B61] font-[Poppins] border-2 border-solid border-[#003B61] p-2 rounded-md">Read More</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-3 py-6 px-24  bg-[#f2f9ff] ">
                    <div className="flex justify-center items-center">
                        <img src="https://ik.imagekit.io/9rldi0s2f8/brill/miguel_bsm.width-450.jpg?updatedAt=1750093185906" alt="ph" className="h-52 w-52 float-left rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center items-start space-y-4">
                        <h1 className="my-2 text-3xl text-[#003B61] font-normal font-[Poppins]">Fleet Personnel Manager Miguel Pires</h1>
                        <p className="font-[Poppins] text-[#003B61] font-light">Miguel Pires joined BSM as Engine Cadet in 1997, sailed for nine years on BSM vessels and then transitioned to shore-based roles in Venezuela followed by Fleet Personnel Manager in Hamburg. Miguel, with an experience of working for nearly three decades in BSM, is currently General Manager Placement & Management, Group HR Marine.</p>
                        <button className="text-[#003B61] font-[Poppins] border-2 border-solid border-[#003B61] p-2 rounded-md">Read More</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Feedback;