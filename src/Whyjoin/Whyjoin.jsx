const Whyjoin = () => {
  return (
    <>
      <div className="2xl:container my-10 bg-[#f2f9ff] py-2">
        <div className="w-[90%] mx-auto bg-[#f2f9ff] grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://ik.imagekit.io/9rldi0s2f8/brill/seafarer.jpg?updatedAt=1749995450915"
                alt="seafarer"
                className="h-full rounded-md"
              />
            </div>
            <div className="flex flex-col justify-center items-start p-4">
              <p className="my-2 text-3xl text-[#003B61] font-normal font-[Poppins]">WHY JOIN HERE ?</p>
              <div className="flex justify-center items-center">
                <ul className="list-disc list-outside space-y-1 p-4">
                  <li className="font-[Poppins] text-[#003B61] font-light">
                    Set sail on international waters with access to world-class
                    maritime jobs, training programs, and career advancement.
                  </li>
                  <li className="font-[Poppins] text-[#003B61] font-light">
                    Gain hands-on experience, certifications, and mentorship
                    from seasoned maritime experts.
                  </li>
                  <li className="font-[Poppins] text-[#003B61] font-light">
                    Join a verified platform connecting you with top shipping
                    companies, crew agencies, and global ports.
                  </li>
                  <li className="font-[Poppins] text-[#003B61] font-light">
                    We provide 24/7 assistance, legal advice, and health support
                    for all members of our maritime family.
                  </li>
                  <li className="font-[Poppins] text-[#003B61] font-light">
                    Be inspired by fellow seafarers sharing authentic
                    experiences and life lessons from around the world.
                  </li>
                  <li className="font-[Poppins] text-[#003B61] font-light">
                    We’ll take good care of you at sea so you can look after your loved ones on shore.
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};
export default Whyjoin;
