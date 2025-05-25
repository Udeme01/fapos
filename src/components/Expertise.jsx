import React from "react";
import {TentTree, Omega, TriangleRight, GraduationCap} from 'lucide-react'

const Expertise = () => {
  return (
    <section className="px-6 py-12">
      <section>
        <h1 className="text-blue font-bold text-xl mb-4">Our Expertise</h1>
        <p className="text-lg">
          We are a leading geotechnical engineering company dedicated to
          delivering high-quality solutions for our clients.
        </p>
      </section>
      <section className="mt-12 w-full h-80 flex flex-col items-center justify-end px-8 pb-12">
        <TentTree size='100px' color='#1b263b' className='mb-8' />
        <h2 className="text-lg text-blue font-bold mb-3">Site Investigation</h2>
        <p>
          Comprehensive geological and geotechnical analysis to assess soil
          conditions, stability, and suitablity for construction projects.
        </p>
      </section>
      <section className="mt-12 w-full h-80 flex flex-col items-center justify-end px-8 pb-12">
        <Omega size='100px' color='#1b263b' className='mb-8' />
        <h2 className="text-lg text-blue font-bold mb-3">Foundation Engineering</h2>
        <p>
          Expert foundation design and engineering solution tailored to your specific soil condition and structural requirements.
        </p>
      </section>
      <section className="mt-12 w-full h-80 flex flex-col items-center justify-end px-8 pb-12">
        <TriangleRight size='100px' color='#1b263b' className='mb-8' />
        <h2 className="text-lg text-blue font-bold mb-3">Slope Stability Analysis</h2>
        <p>
         Professonal assessment and solution for slope stability issues, ensuring safety and preventing potential hazards.
        </p>
      </section>
      <section className="mt-12 w-full h-80 flex flex-col items-center justify-end px-8 pb-12">
        <GraduationCap size='100px' color='#1b263b' className='mb-8' />
        <h2 className="text-lg text-blue font-bold mb-3">Education & Training</h2>
        <p>
         Educational workshops and consulting on paper construction practices, land evaluation, and forward-thinking investment strategies.
        </p>
      </section>
    </section>
  );
};

export default Expertise;