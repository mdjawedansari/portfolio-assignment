"use client"
import Image from "next/image";

// components/About.js 
const About = () => {
    return (
      <section id="about" className="py-16">
        <div className="container mx-auto text-center bg-black mt-28 ">
        <h2 className="text-3xl font-bold flex justify-center mb-4">About</h2>
          <div className="flex sm:flex-row-reverse flex-col">
            <div className=' p-6 ml-2 mt-4 sm:mt-10 shadow-lg rounded-lg'>
                    <Image width={500} height={100} src="/about/heroImage.jpg" className="rounded-full" />
                    
            </div>
            
            <div className='sm:w-2/3 p-4 shadow-lg rounded-lg sm:mt-28'>
            <h2 className="text-3xl font-bold  mb-4">Md Jawed Ansari</h2>
                <p className="text-lg text-slate-300">
                I am a frontend developer with experience in building responsive and optimized web applications using HTML, CSS, Javascript, Tailwind, React.js and Bootstrap.
                </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  