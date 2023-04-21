/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between max-w-6xl w-full mx-auto py-6 pt-0 lg:py-24 lg:pt-0 px-8 lg:px-0">
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

        <div className='w-full my-24 lg:my-0'>
          <h3 className='text-xl 2xl:text-4xl font-light'>Explore Iceland. <br /> Drive Your Adventure Safely.</h3>
          <h1 className='text-7xl 2xl:text-9xl font-black'>Geysir <br /> Car Rental</h1>
        </div>
        
        <h4 className='text-left font-black text-sm uppercase block lg:hidden mb-4'>Links to subjects</h4>
        
        <div className="mb-32 -mx-5 grid text-left lg:text-center lg:mb-0 lg:grid-cols-4 items-end">
          <h4 className='col-span-4 mx-5 mb-4 font-black text-sm uppercase hidden lg:block'>Links to subjects</h4>
          <Link
            href="#useful-information"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-300 hover:bg-neutral-100/30"
            onClick={handleScroll}
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
              Find useful information about your insurance and damage prices.
            </p>
          </Link>

          <Link
            href="#driving-in-iceland"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-300 hover:bg-neutral-100/30"
            onClick={handleScroll}
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
              Find information about driving in Iceland.
            </p>
          </Link>

          <Link
            href="#rules-and-regulations"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-300 hover:bg-neutral-100/30"
            onClick={handleScroll}
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
              Read about Icelandic rules and regulations.
            </p>
          </Link>

          <Link
            href="#insurances"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-300 hover:bg-neutral-100/30"
            onClick={handleScroll}
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
              See our Insurances and what they cover.
            </p>
          </Link>
        </div>
      </main>

      <section className='max-w-6xl mx-auto py-6 pt-8 lg:py-24 lg:pt-0 px-8 lg:px-0' id="useful-information">
        <h2 className='text-4xl 2xl:text-6xl font-bold mb-12 2xl:mb-24'>Useful Information</h2>

        <div className='w-full lg:w-1/2'>
          <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>Insurances are important</h3>
          <p className='text-lg'>
            Repair cost in Iceland can be very expensive, for that reason it is very important to be well insured while driving around Iceland. If you have a third-party insurance, then you must be aware that you will have to pay for the damage at Geysir and then you are able to claim the cost back from your third-party insurer. 
          </p>
        </div>
        
        <div className='w-full lg:w-1/2 lg:ml-auto my-6'>
          <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>What is included in your insurance?</h3>
          <p className='text-lg'>Read carefully through the terms and conditions of the insurances that you have added to your booking. You can read more about them here: <a href="https://www.geysir.is/terms-and-conditions/" className='link' target="_blank" rel="noopener noreferrer">https://www.geysir.is/terms-and-conditions/</a></p>
        </div>
        
        <div className='w-full lg:w-1/2'>
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

          <h4 className='font-black text-sm uppercase mt-12 mb-4'>Here are example prices for the most common damages</h4>
          <table className='w-full table-fixed'>
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

      <section className="w-full my-6 mt-0 lg:my-24 lg:mt-0" id="driving-in-iceland">
        <div className="w-full h-[50vh] bg-cover bg-center bg-[url('/cover.jpg')] mb-24">
          <div className='bg-neutral-900/60 backdrop-brightness-70 h-full w-full flex items-center justify-center'>
            <h2 className='text-4xl 2xl:text-7xl font-bold text-white'>Driving in Iceland</h2>
          </div>
        </div>

        <div className='max-w-6xl mx-auto py-6 pt-0 lg:py-24 lg:pt-0 space-y-12 px-8 lg:px-0'>
          <div className='w-full flex flex-col lg:flex-row items-center lg:space-x-6 space-y-6'>
            <div className='w-full lg:w-1/2'>
              <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>Off-Road Driving</h3>
              <p className='text-lg'>
                Off-road driving is illegal in Iceland. The Icelandic nature is unique and untouched in big areas, and we want to keep it that way in the future. Off road driving is subject to high fines and even imprisonment.
              </p>
            </div>
            <img src="https://icelandmag.is/sites/default/files/styles/lightbox/public/thumbnails/image/vatnajokull_national_park_0.jpg?itok=gU-VXtYH" className='w-full lg:w-1/2 h-48 lg:h-80 object-cover' />
          </div>
          
          <div className='w-full flex flex-col lg:flex-row items-center lg:space-x-6 space-y-6'>
            <div className='w-full lg:w-1/2'>
              <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>River Crossing</h3>
              <p className='text-lg'>
                Driver is always at his own responsibility while crossing a river. Crossing rivers requires a special driving technique and knowledge. You need to find the correct place to cross, water depth should not be higher than 50% of the wheel and you should drive slowly. Slowly means about 4 km/h.
              </p>
            </div>
            <img src="https://www.icerental4x4.is/data/public/70916536_2652559508140116_3168184996716347392_n.jpg" className='w-full lg:w-1/2 h-48 lg:h-80 object-cover' />
          </div>
          
          <div className='w-full flex flex-col lg:flex-row items-center lg:space-x-6 space-y-6'>
            <div className='w-full lg:w-1/2'>
              <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>⚠️ Heavy Wind</h3>
              <p className='text-lg'>
                Wind can be very strong in Iceland and can easily cause big damages to the doors. When opening a car door during heavy wind, we recommend that you hold onto the door very tightly.
              </p>
            </div>
            <img src="https://res.cloudinary.com/car-rentals-is/image/upload/v1663681014/blog/124/16e9fce13c0cc9deaffa8bb1a93ba3cf.jpg" className='w-full lg:w-1/2 h-48 lg:h-80 object-cover' />
          </div>

          <div className='w-full lg:w-1/2 pt-6 lg:pt-12'>
            <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>What is included in your insurance?</h3>
            <p className='text-lg'>Read carefully through the terms and conditions of the insurances that you have added to your booking. You can read more about them here: <a href="https://www.geysir.is/terms-and-conditions/" className='link' target="_blank" rel="noopener noreferrer">https://www.geysir.is/terms-and-conditions/</a></p>
          </div>
          
          <div className='w-full lg:w-1/2 ml-auto'>
            <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>Useful information about our insurances</h3>
            <p className='text-lg'>
              First and formost <strong>not</strong> all vehicles are insured on F-Roads. Damages to the underbody of the car are <strong>not</strong> covered with our insurances. Damages caused by sand or ash storms are <strong>only</strong> covered with Gold insurance or Zero Excess. And Windshield and gravel damages are <strong>only</strong> covered with Gold insurance and Zero Excess
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
