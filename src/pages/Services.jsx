import {FaBroom, FaCalendarCheck, FaClock, FaHamburger, FaHeadset, FaShoppingBag, FaShoppingCart, FaTruck, FaUserTie, FaUtensils} from "react-icons/fa";

export default function Services(){
    return(
        <div className="p-4 bg-[#cccc]">
            <h2 className="pt-5 text-[30px] px-5 text-[DodgerBlue] font-bold text-center">Services</h2>
                <div className="p-2 md:p-[50px]">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-3">
                        <div className="bg-[white] pt-3 hover:bg-[DodgerBlue] rounded shadow-light group transition duration-350 else-in-out">
                            <div className="p-4 py-5 px-5">
                                <FaUserTie size='50' className="text-[DodgerBlue] mb-4 group-hover:text-white"/>
                                <h5 className="font-nun text-h5 font-bold text-[##0F172B] mb-2  group-hover:text-white">Master Chefs</h5>
                                <p className="block mb-4 mx-0 text-[#666585]  group-hover:text-white ">Our skilled chefs prepare each meal with passion and care.</p>
                            </div>
                        </div>
                        <div className="bg-[white] hover:bg-[DodgerBlue] rounded shadow-light group transition duration-350 else-in-out">
                            <div className="p-4 py-5 px-5">
                                <FaBroom size='50' className="text-[DodgerBlue] mb-4 group-hover:text-white"/>
                                <h5 className="font-nun text-h5 font-bold text-[##0F172B] mb-2  group-hover:text-white">Clean Environment</h5>
                                <p className="block mb-4 mx-0 text-[#666585]  group-hover:text-white ">We maintain the highest standards of cleanliness and hygiene.</p>
                            </div>
                        </div>
                        <div className="bg-[white] hover:bg-[DodgerBlue] rounded shadow-light group transition duration-350 else-in-out">
                            <div className="p-4 py-5 px-5">
                                <FaHamburger size='50' className="text-[DodgerBlue] mb-4 group-hover:text-white"/>
                                <h5 className="font-nun text-h5 font-bold text-[##0F172B] mb-2  group-hover:text-white">Quality Food</h5>
                                <p className="block mb-4 mx-0 text-[#666585]  group-hover:text-white ">We use only fresh and high-quality ingredients every day.</p>
                            </div>
                        </div>
                        <div className="bg-[white] hover:bg-[DodgerBlue] rounded shadow-light group transition duration-350 else-in-out">
                            <div className="p-4 py-5 px-5">
                                <FaCalendarCheck size='50' className="text-[DodgerBlue] mb-4 group-hover:text-white"/>
                                <h5 className="font-nun text-h5 font-bold text-[##0F172B] mb-2  group-hover:text-white">Easy Reservations</h5>
                                <p className="block mb-4 mx-0 text-[#666585]  group-hover:text-white ">Book your table in just a few clicks, no waiting.</p>
                            </div>
                        </div>
                        <div className="bg-[white] hover:bg-[DodgerBlue] rounded shadow-light group transition duration-350 else-in-out">
                            <div className="p-4 py-5 px-5">
                                <FaHeadset size='50' className="text-[DodgerBlue] mb-4 group-hover:text-white"/>
                                <h5 className="font-nun text-h5 font-bold text-[##0F172B] mb-2  group-hover:text-white">Customer Support</h5>
                                <p className="block mb-4 mx-0 text-[#666585]  group-hover:text-white ">Friendly help is always available whenever you need it.</p>
                            </div>
                        </div>
                        <div className="bg-[white] hover:bg-[DodgerBlue] rounded shadow-light group transition duration-350 else-in-out">
                            <div className="p-4 py-5 px-5">
                                <FaShoppingCart size='50' className="text-[DodgerBlue] mb-4 group-hover:text-white"/>
                                <h5 className="font-nun text-h5 font-bold text-[##0F172B] mb-2  group-hover:text-white">Online Order </h5>
                                <p className="block mb-4 mx-0 text-[#666585]  group-hover:text-white ">Order your favorite dishes easily from your phone or computer.</p>
                            </div>
                        </div>
                        <div className="bg-[white] hover:bg-[DodgerBlue] rounded shadow-light group transition duration-350 else-in-out">
                            <div className="p-4 py-5 px-5">
                                <FaTruck size='50' className="text-[DodgerBlue] mb-4 group-hover:text-white"/>
                                <h5 className="font-nun text-h5 font-bold text-[##0F172B] mb-2  group-hover:text-white">Fast Delivery</h5>
                                <p className="block mb-4 mx-0 text-[#666585]  group-hover:text-white ">Get your food hot and fresh right at your doorstep.</p>
                            </div>
                        </div>
                        <div className="bg-[white] hover:bg-[DodgerBlue] rounded shadow-light group transition duration-350 else-in-out">
                            <div className="p-4 py-5 px-5">
                                <FaClock size='50' className="text-[DodgerBlue] mb-4 group-hover:text-white"/>
                                <h5 className="font-nun text-h5 font-bold text-[##0F172B] mb-2  group-hover:text-white">24/7 Service</h5>
                                <p className="block mb-4 mx-0 text-[#666585]  group-hover:text-white ">We’re always ready to serve you, anytime you’re hungry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}