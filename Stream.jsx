function Stream() {
    return (
        <>
            <div className="text-center">
                <div className="text-center text-xl m-4 font-semibold">
                    <span class="border-2 px-5 rounded-xl">Everything you need</span>
                </div>

                <div class="text-center ">
                    <h2 class=" text-5xl font-bold">Streamlined for easy<br /> <span id="a">management</span></h2>
                </div>
                <div id="a" class="text-center text-2xl mt-4 m-15 px-10">
                    <span class="gap-5 ">Enjoy customizable lists, team work tools, and smart tracking all in one place. <br /> Set tasks, get reminders, and see your progress simply and quickly.</span>
                </div>

            </div>

            <div class="flex flex-wrap justify-evenly text-center m-15 py-10 ">
                <div class="border-2 m-4 p-4 shadow-2xl hover:shadow-gray-500/100  rounded-2xl ">
                    <div className="w-[250px] h-[250px] ml-4"> 
                        <img className="w-[230px] h-[230px]" src="img1.png"/>
                    </div>
                    <div>
                    <h3 class="font-bold text-xl">Integration ecosystem</h3>
                    </div>
                    <div>
                        <p>Enhance your productivity by connecting <br />with your favorite tools,<br /> keeping all your
                          essentials in one place.</p> 
                    </div>

                    
                </div>

                <div class="border-2 m-4 p-4 shadow-2xl hover:shadow-gray-500/100  rounded-2xl">
                    <div className="w-[250px] h-[250px] ml-4" > 
                        <img className="w-[230px] h-[230px]" src="img2.png"/>
                    </div>
                    <div>
                    <h3 class="font-bold text-xl">Integration ecosystem</h3>
                    </div>
                    <div>
                        <p>Enhance your productivity by connecting <br />with your favorite tools,<br /> keeping all your
                          essentials in one place.</p> 
                    </div>


                    
                </div>
            </div>


        </>
    )
}
export default Stream