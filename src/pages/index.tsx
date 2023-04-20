/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between max-w-6xl w-full mx-auto py-6 pt-0 lg:py-24 lg:pt-0">
        <div className="z-10 w-full">
          <a
            href="https://geysir.is"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className='w-16 lg:w-24'
              src="/logo.jpg"
              alt="Geysir Car Rental Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>

        <div className='w-full'>
          <h3 className='text-xl 2xl:text-4xl font-light'>Explore Iceland. <br /> Drive Your Adventure Safely.</h3>
          <h1 className='text-7xl 2xl:text-9xl font-black'>Geysir <br /> Car Rental</h1>
        </div>

        <div className="mb-32 -mx-5 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left items-end">
          <a
            href="#useful-information"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-300 hover:bg-neutral-100/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 xl:mb-3 text-xl 2xl:text-2xl font-semibold`}>
              Useful <br />Information{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="#driving-in-iceland"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-300 hover:bg-neutral-100/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 xl:mb-3 text-xl 2xl:text-2xl font-semibold`}>
              Driving in <br /> Iceland{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="#rules-and-regulations"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-300 hover:bg-neutral-100/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 xl:mb-3 text-xl 2xl:text-2xl font-semibold`}>
              Rules & <br /> Regulations{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="#insurances"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-300 hover:bg-neutral-100/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 xl:mb-3 text-xl 2xl:text-2xl font-semibold`}>
              Insurances{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <section className='max-w-6xl mx-auto py-6 pt-0 lg:py-24 lg:pt-0' id='useful-information'>
        <h2 className='text-4xl 2xl:text-6xl font-bold mb-12 2xl:mb-24'>Useful Information</h2>

        <div className='w-1/2'>
          <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>Insurances are important</h3>
          <p className='text-lg'>
            Repair cost in Iceland can be very expensive, for that reason it is very important to be well insured while driving around Iceland. If you have a third-party insurance, then you must be aware that you will have to pay for the damage at Geysir and then you are able to claim the cost back from your third-party insurer. 
          </p>
        </div>
        
        <div className='w-1/2 ml-auto my-6'>
          <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>What is included in your insurance?</h3>
          <p className='text-lg'>Read carefully through the terms and conditions of the insurances that you have added to your booking. You can read more about them here: <a href="https://www.geysir.is/terms-and-conditions/" className='link' target="_blank" rel="noopener noreferrer">https://www.geysir.is/terms-and-conditions/</a></p>
        </div>
        
        <div className='w-1/2'>
          <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>Useful information about our insurances</h3>
          <p className='text-lg'>
            First and formost <strong>not</strong> all vehicles are insured on F-Roads. Damages to the underbody of the car are <strong>not</strong> covered with our insurances. Damages caused by sand or ash storms are <strong>only</strong> covered with Gold insurance or Zero Excess. And Windshield and gravel damages are <strong>only</strong> covered with Gold insurance and Zero Excess
          </p>
        </div>

        <div className='w-full my-24'>
          <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>Payment settlement for vehicle damage</h3>
          <ul>
            <li>
              <p className='text-lg'>
                <strong>Day 1:</strong> Pre-authorized cost (self-risk) is charged from your credit card or from your cash deposit.
              </p>
            </li>
            <li>
              <p className='text-lg'>
              <strong>2-10 days after damage:</strong> Claims department will send you an e-mail including photos and damage cost from a certified repair shop. If the damage cost is lower than the pre-authorized cost, you will be refunded the difference.
              </p>
            </li>
          </ul>

          <table className='w-full table-fixed mt-12'>
            <thead>
              <tr className='bg-neutral-100'>
                <th className='p-2 border'>Class</th>
                <th className='p-2 border'>Windshield</th>
                <th className='p-2 border'>Tires</th>
              </tr>
            </thead>
            <tbody>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Hyundai i-10 old model</td>
                <td className='border p-2'>580€</td>
                <td className='border p-2'>300€</td>
              </tr>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Hyundai i-10 new model</td>
                <td className='border p-2'>1,100€</td>
                <td className='border p-2'>300€</td>
              </tr>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Toyota aygo</td>
                <td className='border p-2'>580€</td>
                <td className='border p-2'>300€</td>
              </tr>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Hyundai i-20</td>
                <td className='border p-2'>1,200€</td>
                <td className='border p-2'>300€</td>
              </tr>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Hyundai i-30</td>
                <td className='border p-2'>1,100€</td>
                <td className='border p-2'>300€</td>
              </tr>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Renault Megane</td>
                <td className='border p-2'>750€</td>
                <td className='border p-2'>300€</td>
              </tr>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Dacia Duster</td>
                <td className='border p-2'>600€</td>
                <td className='border p-2'>450€</td>
              </tr>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Jeep Renegade</td>
                <td className='border p-2'>1,300€</td>
                <td className='border p-2'>450€</td>
              </tr>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Suzuki Vitara</td>
                <td className='border p-2'>1,050€</td>
                <td className='border p-2'>450€</td>
              </tr>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Nissan Qaskhai</td>
                <td className='border p-2'>1,350€</td>
                <td className='border p-2'>450€</td>
              </tr>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Hyundai Bayon</td>
                <td className='border p-2'>1,100€</td>
                <td className='border p-2'>450€</td>
              </tr>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Jeep Compass</td>
                <td className='border p-2'>1,250€</td>
                <td className='border p-2'>450€</td>
              </tr>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Hyundai Tucson</td>
                <td className='border p-2'>1,100€</td>
                <td className='border p-2'>450€</td>
              </tr>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Mitsubishi Eclipse</td>
                <td className='border p-2'>1,350€</td>
                <td className='border p-2'>500€</td>
              </tr>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Toyota Land Cruiser</td>
                <td className='border p-2'>2,250€</td>
                <td className='border p-2'>500€</td>
              </tr>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Jeep Wrangler</td>
                <td className='border p-2'>1,200€</td>
                <td className='border p-2'>500€</td>
              </tr>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Land Rover Defender</td>
                <td className='border p-2'>2,050€</td>
                <td className='border p-2'>500€</td>
              </tr>
              <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                <td className='border p-2'>Ford Transit</td>
                <td className='border p-2'>1,300€</td>
                <td className='border p-2'>500€</td>
              </tr>
            </tbody>
          </table>
        </div>

        
        {/* <div className="my-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left items-end">
          <a
            href="https://www.geysir.is/faq/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-300 hover:bg-neutral-100/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 xl:mb-3 text-xl 2xl:text-2xl font-semibold`}>
              FAQ{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`m-0 max-w-[30ch] text-sm opacity-50`}
            >
              For more information's visit FAQ page on our website
            </p>
          </a>

          <a
            href="https://www.safetravel.is"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-300 hover:bg-neutral-100/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 xl:mb-3 text-xl 2xl:text-2xl font-semibold`}>
              Safety information{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`m-0 max-w-[30ch] text-sm opacity-50`}
            >
              We recommend people to be aware of the weather conditions and alerts before heading out on the road.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-300 hover:bg-neutral-100/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 xl:mb-3 text-xl 2xl:text-2xl font-semibold`}>
              Weather forecast{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`m-0 max-w-[30ch] text-sm opacity-50`}
            >
              You can call +354 902 0600 to get a recorded forecast or visit en.vedur.is.
            </p>
          </a>

          <a
            href="https://www.112.is/en"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-300 hover:bg-neutral-100/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 xl:mb-3 text-xl 2xl:text-2xl font-semibold`}>
              National emergency <br />number{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`m-0 max-w-[30ch] text-sm opacity-50`}
            >
              The national emergency number is 112. If you are in a life-threatening situation, call 112 immediately.
            </p>
          </a>

          <a
            href="https://www.road.is"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-300 hover:bg-neutral-100/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 xl:mb-3 text-xl 2xl:text-2xl font-semibold`}>
              Road conditions <br />and alerts{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`m-0 max-w-[30ch] text-sm opacity-50`}
            >
              You can call 1777 or 1778 to get information about road conditions and alerts.
            </p>
          </a>

        
          <a
            href="https://www.geysir.is/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-300 hover:bg-neutral-100/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 xl:mb-3 text-xl 2xl:text-2xl font-semibold`}>
              Emergency roadside<br /> assistance{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`m-0 max-w-[30ch] text-sm opacity-50`}
            >
              If you need assistance on the road, call +354 455 0005.
            </p>
          </a>

          
        </div> */}

        
      </section>
    </>
  )
}
