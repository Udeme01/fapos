import { WHY_CHOOOSE_US } from "../data/whychooseus"

const WhoChooseUs = () => {
  return (
    <section className='px-6'>
        <section>
            <h1 className="text-blue font-bold text-xl">Why Choose Us</h1>
            <div className='flex flex-col gap-4 py-4 mb-8'>
                <p>
                At Fapos, we bring together the precision of geological science with the craftsmanship of expert construction to deliver unparalleled results. Our unique approach combines deep understanding of soil mechanics, ground conditions, and material properties with proven construction methodologies.
            </p>
            <p>
                Our mission is to educate and empower clients to make informed decisions about their construction projects, land investments, and property ventures. We believe that knowledge-driven construction leads to stronger, safer, and more valuable structures.
            </p>
            <p>
                With years of experience in both geological consulting and construction management, we provide the expertise you need to build with confidence and invest with clarity.
            </p>
            </div>
        </section>
        <section>
            {WHY_CHOOOSE_US.map((data) => {
                const {numbers, text} = data
                return (
                    <div key={numbers} className='bg-blue text-white mx-6 rounded-md text-center py-3 mb-6'>
                        <h2 className='font-bold text-2xl mb-2 text-yellow'>{numbers}</h2>
                        <p className='text-xs font-medium text-yellow'>{text}</p>
                    </div>
                )
            })}
        </section>
    </section>
  )
}

export default WhoChooseUs