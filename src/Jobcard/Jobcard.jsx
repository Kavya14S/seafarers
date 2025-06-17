const Jobcard = (props) => {
    return(
        <>
        <div className="2xl:container">
            <div className="w-[90%] mx-auto m-4">
                <div className="bg-[#f2f9ff] flex flex-col p-10 space-y-4 rounded-md">
                    <div className="flex flex-col justify-start space-y-2">
                        <p className="font-[Poppins] text-[#003B61] font-light">{props.heading}</p>
                        <p className="text-[#003B61] font-[Poppins] font-bold text-2xl">{props.role}</p>
                    </div>
                    <div className="flex flex-col justify-start space-y-2">
                        <div className="flex justify-start items-center space-x-2">
                            <img src="https://ik.imagekit.io/9rldi0s2f8/brill/time.png?updatedAt=1750008012743" alt="clock" className="h-5" />
                            <p className="text-[#003B61] font-[Poppins] font-medium text-lg">{props.department}</p>
                        </div>
                        <div className="flex justify-start items-center space-x-2">
                            <img src="https://ik.imagekit.io/9rldi0s2f8/brill/people.png?updatedAt=1750008294429" alt="user" className="h-5" />
                            <p className="text-[#003B61] font-[Poppins] font-medium text-lg">{props.vesseltype}</p>
                        </div>
                        <div className="flex justify-start items-center space-x-2">
                            <img src="https://ik.imagekit.io/9rldi0s2f8/brill/location(1).png?updatedAt=1750008294257" alt="location" className="h-5" />
                            <p className="text-[#003B61] font-[Poppins] font-medium text-lg">{props.vesselsubtype}</p>
                        </div>
                        <div className="flex justify-start items-center space-x-2">
                            <img src="https://ik.imagekit.io/9rldi0s2f8/brill/app.png?updatedAt=1750011505226" alt="location" className="h-5" />
                            <p className="text-[#003B61] font-[Poppins] font-medium text-lg">{props.functionalLevel}</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <button className="bg-[#003B61] text-white p-3 rounded-md font-[Poppins]">
                            <p>View Details & Apply</p>
                        </button>
                        <button className="text-[#003B61] flex justify-center items-center space-x-2 font-[Poppins] border-2 border-solid border-[#003B61] p-2 rounded-md">
                            <img src="https://ik.imagekit.io/9rldi0s2f8/brill/email.png?updatedAt=1750009373695" alt="mail" className="h-6" />
                            <p>Share with a Friend</p>
                        </button>
                        <button className="text-[#003B61]  flex justify-center items-center space-x-2  font-[Poppins] border-2 border-solid border-[#003B61] p-2 rounded-md">
                            <img src="https://ik.imagekit.io/9rldi0s2f8/brill/link.png?updatedAt=1750009384268" alt="mail" className="h-5" />
                            <p>Copy Link</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Jobcard;