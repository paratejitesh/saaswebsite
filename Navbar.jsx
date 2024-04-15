
function Navbar() {
    return (
        <>
            <nav class=" h-14 py-6 bg-slate-200 md:flex md:items-center md:justify-between mx-0 ">


                <div class="flex  md:flex " >
                   
                    <h2 class='text-black  ml-3 font-bold '><img src="logos.png"  /></h2>

                    <span class=" text-3xl cursor-pointer ml-40 md:hidden block">
                        <ion-icon name="menu " onclick="Menu(this)"></ion-icon>

                    </span>

                </div>
                <ul id="ul" class="md:flex text-black md:items-center z-20-bg-slate-200  bg-slate-200 md:z-auto md:static  w-full  md:w-auto
                         md:py-0  md:pl-0 pl-5 md:px-6 md:opacity-100 opacity-0 top-[-400px] 
                         transition-all ease-in duration-300 text-center   ">
                    <li class="mx-3 my-3 md:my-0" ><a href="#" class="text-md font-semibold  "> About</a></li>
                    <li class="mx-3 my-3 md:my-0" ><a href="#" class="text-md font-semibold  ">  Features</a></li>
                    <li class="mx-3 my-3 md:my-0" ><a href="#" class="text-md font-semibold  ">  Coustmer</a></li>
                    <li class="mx-3 my-3 md:my-0" ><a href="#" class="text-md font-semibold  "> Updates</a></li>
                    <li class="mx-3 my-3 md:my-0" ><a href="#" class="text-md font-semibold  "> Help</a></li>


                    <button class=" border-2 bg-black text-white duration-500 px-12 py-1 mx-4 rounded-xl   hover:shadow-white-200"> Get For Free</button>
                </ul>

            </nav>
           
            
           









        </>

    )
}
export default Navbar