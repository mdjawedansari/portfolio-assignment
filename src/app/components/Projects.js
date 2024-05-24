import Image from "next/image";
import Link from "next/link"
// components/Projects.js
const Projects = () => {
    return (
      <section id="projects" className="py-16">
        <div className="container mx-auto text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project Card */}
            <div className="bg-white p-6 shadow-lg rounded-lg ml-4 mr-4">
              <div className="w-full flex justify-center">
                <Image src="/project/travel.jpg" width={200} height={100} />
              </div>
              <h3 className="text-2xl font-bold mb-2 mt-2 text-black">Travel App</h3>
              <p className="text-gray-700 text-xl">This is a fully responsive travel app developed using React.js</p>
              <div className="mt-2">
                <div className="bg-blue-500 rounded">
                  <Link href="https://makesmytrips.netlify.app">Demo</Link>
                </div>
                <div className="bg-blue-500 mt-2 rounded">
                  <Link href="https://github.com/mdjawedansari/travel">Code</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 shadow-lg rounded-lg ml-4 mr-4">
              <div className="w-full flex justify-center">
                <Image src="/project/food.jpg" width={200} height={100} />
              </div>
              <h3 className="text-2xl font-bold mb-2 mt-2 text-black">Food App</h3>
              <p className="text-gray-700 text-xl">This is a fully responsive food app using HTML, CSS, JS</p>
              <div className="mt-2">
                <div className="bg-blue-500 rounded">
                  <Link href="https://foods-web-app.netlify.app">Demo</Link>
                </div>
                <div className="bg-blue-500 mt-2 rounded">
                  <Link href="https://github.com/mdjawedansari/foods-web">Code</Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg ml-4 mr-4">
              <div className="w-full flex justify-center">
                <Image src="/project/ecommerce.avif" width={200} height={100} />
              </div>
              <h3 className="text-2xl font-bold mb-2 mt-2 text-black">Ecommerce</h3>
              <p className="text-gray-700 text-xl">This is a fully responsive app created using MERN Stack</p>
              <div className="mt-2">
                <div className="bg-blue-500 rounded">
                  <Link href="https://ecommerce-frontend-mauve-three.vercel.app">Demo</Link>
                </div>
                <div className="bg-blue-500 mt-2 rounded">
                  <Link href="https://github.com/mdjawedansari/ecommerce-frontend">Code</Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  