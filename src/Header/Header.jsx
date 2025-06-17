const Header = () => {
    return (
        <>
        <div className="2xl:container">
            <div className="w-[90%] mx-auto">
                <div className="flex justify-between items-center my-2">
                    <div className="flex justify-center items-center">
                        <h1 className="text-[#003B61] font-[Poppins] font-bold text-2xl">BRILL SOFT</h1>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <button className="text-white font-[Poppins] bg-[#003B61] p-3 rounded-md">REGISTER FOR FUTURE POSITIONS</button>
                        <button className="text-[#003B61] font-[Poppins] border-2 border-solid border-[#003B61] p-2 rounded-md">SIGN IN</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header