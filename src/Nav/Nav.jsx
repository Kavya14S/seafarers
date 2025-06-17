const Nav = () => {
    const handleMenu = () => {
    content.classList.toggle("hidden");
    crossicon.classList.toggle("hidden");
    menuicon.classList.toggle("hidden");
  };
  const handleCross = () => {
    content.classList.toggle("hidden");
    crossicon.classList.toggle("hidden");
    menuicon.classList.toggle("hidden");
  }
    return (
        <>
        <nav>
        <div className="2xl:container mx-auto py-2 md:py-0  bg-[#003B61] h-fit lg:h-16 ">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:h-16">
                <div className="flex justify-between items-center">
                    <p className="text-white font-[Poppins] font-bold">CAREERS.COM</p>

                    <div className="md:hidden">
                        <img src="https://ik.imagekit.io/9rldi0s2f8/brill/burger-bar.png?updatedAt=1749994333152" alt="menu" className="h-5 w-5" id="menuicon" 
                      onClick={handleMenu} />
                        
                        <img src="https://ik.imagekit.io/9rldi0s2f8/brill/close(2).png?updatedAt=1749994332932" alt="cross" className="h-4 w-4 hidden" id="crossicon" 
                      onClick={handleCross} />
    
                    </div>
                </div>
                <div className="hidden md:flex text-white flex-col justify-center items-center md:flex-row md:justify-end gap-4 space-y-2 md:space-y-0 p-2.5 md:p-0" id="content">
                    <p className="bg-red-500 rounded-md px-4 py-1 align-middle font-[Poppins]">JOIN</p>
                    <p className="font-[Poppins]">OPEN POSITIONS</p>
                    <p className="font-[Poppins]">WHY JOIN</p>
                    <p className="font-[Poppins]">TRAINING</p>
                    <p className="font-[Poppins]">MEET OUR SEAFARERS</p>
                </div>
            </div>
        </div>
    </nav>
        </>
    )
}
export default Nav