const Hero = () => {
    return (
        <>
        <section className=" ">
        <div className="2xl:container hero-bg h-[40%] ">
            <div className="w-[90%] mx-auto grid grid-cols-1 my-auto h-[100%]">
                <div className="flex flex-col justify-center items-center gap-6 lg:gap-4 text-center">
                    <h1 className="text-white font-extrabold text-3xl md:text-4xl lg:text-6xl font-[Poppins]">Explore Life at Sea</h1>
                    <p className="text-red-500 font-bold  text-xl font-[Poppins]">Empowering the Mariners Who Power Global Trade</p>
                    <p className="text-white font-semibold text-xl font-[Poppins]">Join a community of skilled professionals navigating oceans, connecting continents, and fueling the world’s economy. Discover opportunities, training, and stories from real seafarers — your journey starts here.</p>
                    <div className="space-y-4 space-x-2 ">
                        <button className="bg-red-500 font-[Poppins] rounded-xl px-8 py-4 text-white">Find your perfect role</button>
                        <button className="bg-transparent backdrop-blur-lg font-[Poppins] border border-red-500 px-8 py-4 rounded-xl text-white">Register for future positions</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Hero;