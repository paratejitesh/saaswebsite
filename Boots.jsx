const Boots = () => {

   return (
      <>
      <div class="w-full py-20 shadow-xl">
         <img src="brand.png" alt="brand" />
      </div>
         <div className="text-center mt-30">
            <div className="text-center text-xl m-4 font-semibold">
               <span class="border-2 px-5 rounded-xl">Boots your productivity</span>
            </div>

            <div class="text-center ">
               <h2 class=" text-5xl font-bold">A more effective way <br /> <span id="a">to track progress</span></h2>
            </div>
            <div id="a" class="text-center text-2xl mt-4 m-15 px-10">
               <span class="gap-5 ">Effortlessly turn your ideas into a fully functional,  responsive,<br /> no-code SaaS website in just minutes with the set of free components for Framer.</span>
            </div>
            <div class="m-5 shadow-2xl bg-slate-200">
               <img src="marketing.png" alt="" />
            </div>
         </div>
         <div class="flex flex-wrap justify-evenly text-left bg-slate-300">
            <div className="ml-0">
               <img src="icon1.png" alt="" />
               <h3 class="font-bold ml-1">Integration ecosystem</h3>
               <p class="text-lg">Track your progress and motivate <br /> your efforts everyday</p><br />
               <button>Learn more <img class="inline-block" src="icon5.png" alt="icon" /></button>


            </div>

            <div className="ml-0">
               <img src="icon2.png" alt="" />
               <h3 class="font-bold ">Goal setting and tracking</h3>
               <p class="text-lg">Set and track goals with manageable <br />task breakdowns</p><br />
               <button>Learn more <img class="inline-block" src="icon5.png" alt="icon" /></button>


            </div>

            <div className="ml-0">
               <img src="icon3.png" alt="" />
               <h3 class="font-bold ">Secure data encryption</h3>
               <p class="text-lg">Ensure your data’s safety with top <br />tier encryption.</p><br />
               <button>Learn more <img class="inline-block" src="icon5.png" alt="icon" /></button>


            </div>

            <div className="ml-0">
               <img src="icon4.png" alt="" />
               <h3 class="font-bold ">Customizable notifications</h3>
               <p class="text-lg">Get alerts on tasks and deadlines <br />that matter most.</p><br />
               <button>Learn more <img class="inline-block" src="icon5.png" alt="icon" /></button>

            </div>


         </div>













      </>

   )
}
export default Boots