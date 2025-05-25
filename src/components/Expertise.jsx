import React from "react";
import { TentTree, Omega, TriangleRight, GraduationCap } from "lucide-react";
import { EXPERTISE } from "../data/expertise";

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

      <section>
        {EXPERTISE.map((expertise) => {
          const {image, title, description} = expertise
          const Icon = image
          return (
            <section key={title} className="mt-12 w-full h-80 flex flex-col items-center justify-end px-8 pb-12">
              <Icon size="90px" color="#ffc700" className="mb-8" />
              <h2 className="text-lg text-blue font-bold mb-3">
                {title}
              </h2>
              <p className="text-center">
                {description}
              </p>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default Expertise;
