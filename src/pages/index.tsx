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
        <div className='w-full mb-24'>
          <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>Here are some Friendly advice's</h3>
          <ul className='list-disc'>
            <li>
              <p className='text-lg'>
                Hold <strong>tightly</strong> onto your door during heavy wind, wind damages can be very expensive. 
              </p>
            </li>
            <li>
              <p className='text-lg'>
                Make sure to <strong>check</strong> the lid before you pump fuel on the car, our cars are either diesel or gasoline 95. 
              </p>
            </li>
            <li>
              <p className='text-lg'>
                Crossing a river is <strong>always</strong> at the renter's responsibility. 
              </p>
            </li>
            <li>
              <p className='text-lg'>
                It's <strong>unsafe</strong> and <strong>dangerous</strong> to stop the car on the side of the road
              </p>
            </li>
            <li>
              <p className='text-lg'>
                Your mobile phone is <strong>not</strong> a reliable navigation system in Iceland.
              </p>
            </li>
          </ul>
        </div>

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
        <div className="w-full h-[50vh] bg-cover bg-center bg-[url('/driving-in-iceland-cover.jpg')] mb-24">
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

          <div className='w-full'>
            <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>Sheep in Iceland</h3>
            <p className='text-lg'>
              One of the things that you need to be extremely careful with is Iceland's population of over 800,000 wandering sheep. They can be found all along the ring road and they often wander, carelessly, onto the road, right in front of oncoming traffic.
            </p>
            <p className='text-lg my-4'>
            Be especially aware at night, as to the sheep, your car is just a wandering flicker of light and the road is just part of their terrain. Keep your eyes peel at all times.
            </p>
            <p className='text-lg'>
              If an accident occurs farmers in Iceland do appreciate if the local law enforcement are informed so they will be able to attend the wounded animal.
            </p>
          </div>

          <div className='w-full'>
            <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>Roundabouts</h3>
            <p className='text-lg'>
              Some tourists get especially confused about roundabouts in Iceland. There are a few roundabouts found around the country, many of them are when entering Reykjavik or other larger towns, like Akureyri.
            </p>
            <p className='text-lg my-4'>
              When you approach a roundabout, make sure you already know which exit you will be taking. You do not indicate when you enter the roundabout, instead, you need to indicate when you are leaving it.
            </p>
            <p className='text-lg'>
              Use the inside line if you plan to exit on the second, third, or fourth exist. Use the outside lane if you are exiting the roundabout on the first exit only. Remember that the inside lane always has the right of way.
            </p>
            <p className='text-lg my-4'>
              If for some reason you've entered the roundabout on the outside lane, but realize you don't need to exit immediately, then use your indicator to signal towards the inside lane - but do not switch lanes! Follow the roundabout on the outside line whilst indicating towards the inside lane until you've reached your exit, at this point indicate towards your exit.
            </p>
            <p className='text-lg'>
              Don't worry, it might sound more stressful than it really is. Also, there are no roundabouts in the whole of Iceland with more than two lanes.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full my-6 mt-0 lg:my-24 lg:mt-0" id="rules-and-regulations">
        <div className="w-full h-[50vh] bg-cover bg-center bg-[url('/rules-and-regulations-cover.jpg')] mb-24">
          <div className='bg-neutral-900/60 backdrop-brightness-70 h-full w-full flex items-center justify-center'>
            <h2 className='text-4xl 2xl:text-7xl font-bold text-white'>Rules & Regulations</h2>
          </div>
        </div>

        <div className='max-w-6xl mx-auto py-6 pt-0 lg:py-24 lg:pt-0 space-y-12 px-8 lg:px-0'>
        <div className='w-full'>
            <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>Basic rules</h3>
            <p className='text-lg'>
              Here are some general rules to have in mind when driving in Iceland.
            </p>

            <h4 className='mb-4 font-black uppercase mt-8'>The general rules are:</h4>
            <ul className='list-disc mb-8'>
              <li className='text-lg'>Traffic drives on the right side of the road.-Wearing a seatbelt at all times is mandatory.</li>
              <li className='text-lg'>The use of a handheld phone whilst driving is extremely dangerous and forbidden.</li>
              <li className='text-lg'>It is required to use seatbelts by law, fatal accidents are increasing due to less use. </li>
              <li className='text-lg'>You are not allowed to drive a vehicle under the influence of alcohol or drugs. </li>
              <li className='text-lg'>Headlights must be on at all times while driving.</li>
              <li className='text-lg'>Off-road driving is illegal in Iceland.</li>
              <li className='text-lg'>Only 4x4 cars are allowed to drive on F roads</li>
            </ul>
          </div>

          <div className='w-full'>
            <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>Speed Limits</h3>
            <p className='text-lg'>
              Keeping to the right speed limit is very important as spontaneous dangers can present themselves on Iceland roads. Speeding cameras are dotted around the country and speeding fines can range between ISK 5,000?70,000 (USD 45 to USD 575). Also, please remember that the speed limit is only an indicator of the maximum speed and so if road conditions change (i.e. heavy blizzard) then it's your responsibility to adjust your speed accordingly.
            </p>

            <h4 className='mb-4 font-black uppercase mt-8'>The general speed limits are:</h4>
            <ul className='list-disc mb-8'>
              <li className='text-lg'>90 km/h (56 mph) in the countryside</li>
              <li className='text-lg'>80 km/h (50 mph) on gravel roads</li>
              <li className='text-lg'>70 km/h (44 mph) in most road tunnels</li>
              <li className='text-lg'>50 km/h (31 mph) in urban areas</li>
              <li className='text-lg'>30 km/h (19 mph) in residential streets</li>
            </ul>

            <p className='text-lg'>Keep in mind that the above are only general speed limits, some areas may have different conditions so always make sure to check what the signs indicate.</p>
            
            <h4 className='mb-4 font-black uppercase mt-8'>Other speeding limits that are important to note:</h4>
            <ul className='list-disc mb-8'>
              <li className='text-lg'>Vehicles pulling a trailer (i.e. caravan) are allowed to drive no faster than 90 km/h (56 mph).</li>
              <li className='text-lg'>Vehicles pulling a trailer that is over 750kg (1,650 lb) and without brakes are not allowed to drive any faster than 90km/h (56 mph).</li>
            </ul>
          </div>

          <div className='w-full'>
            <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>The ring road and F-Roads</h3>
            <p className='text-lg'>
              The ring road (e. Road 1) and the F-roads are two completely different roads. The ring road is a paved road that is easy to drive and is suitable for all types of vehicles. The F-roads are unpaved roads that are only suitable for 4x4 vehicles. The F-roads are often impassable long into the summer, the weather conditions can change quickly, you need to be extra careful while driving these roads. F-roads are less maintained than the regular roads, resulting in big rocks on the road or large holes. Bad road condition can cause damages, especially to the underbody of the vehicle. Keep in mind that underbody damages can be <strong>very expensive</strong>.
            </p>

            <ul className='list-disc my-8'>
              <li className='text-lg'>The Ring Road (route 1) is mostly paved and easy to drive but some parts of it can be narrow and needs all of your attention. </li>
              <li className='text-lg'>F-roads are only suitable for AWD or 4WD vehicles and NOT allowed for 2WD cars.</li>
              <li className='text-lg'>The mountain roads (F-roads) are often impassable long into the summer, the weather conditions can change quickly, you need to be extra careful while driving these roads. </li>
              <li className='text-lg'>F-roads are less maintained than the regular roads, resulting in big rocks on the road or large holes. Bad road condition can cause damages, especially to the underbody of the vehicle. Underbody damages can be very expensive.</li>
            </ul>
          </div>
          
          <div className='w-full'>
            <h4 className='font-black text-sm uppercase mt-12'>*Here are approximate opening dates of popular F-roads in Iceland:</h4>
            <table className='w-full table-auto my-4'>
              <thead>
                <tr className='bg-neutral-100'>
                  <th className='p-2 border'>Name</th>
                  <th className='p-2 border'>Label</th>
                  <th className='p-2 border'>Opening</th>
                </tr>
              </thead>
              <tbody>
                <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                  <td className='border p-2'>Lakagígar</td>
                  <td className='border p-2'>F206</td>
                  <td className='border p-2'>June 15th</td>
                </tr>
                <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                  <td className='border p-2'>Fjallabaksleið nyrðri (Landmannalaugar, Eldgjá) </td>
                  <td className='border p-2'>F208</td>
                  <td className='border p-2'>June 10th</td>
                </tr>
                <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                  <td className='border p-2'>Landmannaleið, Landmannalaugar</td>
                  <td className='border p-2'>F225</td>
                  <td className='border p-2'>June 15th</td>
                </tr>
                <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                  <td className='border p-2'>Kjölur (Hveravellir)</td>
                  <td className='border p-2'>F35</td>
                  <td className='border p-2'>June 10th</td>
                </tr>
                <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                  <td className='border p-2'>Sprengisandur</td>
                  <td className='border p-2'>F26</td>
                  <td className='border p-2'>June 25th</td>
                </tr>
                <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                  <td className='border p-2'>Askja</td>
                  <td className='border p-2'>F88</td>
                  <td className='border p-2'>June 20th</td>
                </tr>
                <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                  <td className='border p-2'>Kverkfjöll</td>
                  <td className='border p-2'>F902</td>
                  <td className='border p-2'>June 20th</td>
                </tr>
                <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                  <td className='border p-2'>Uxahryggir</td>
                  <td className='border p-2'>F52</td>
                  <td className='border p-2'>June 5th</td>
                </tr>
                <tr className='even:bg-neutral-100/50 hover:bg-neutral-100'>
                  <td className='border p-2'>Kaldidalur</td>
                  <td className='border p-2'>F550</td>
                  <td className='border p-2'>June 15th</td>
                </tr>
              </tbody>
            </table>

            <p className='italic'>*You should always check the road and weather conditions before traveling to these destinations such as else.</p>
          </div>
        </div>
      </section>

      <section className="w-full my-6 mt-0 lg:my-24 lg:mt-0" id="insurances">
        <div className="w-full h-[50vh] bg-cover bg-center bg-[url('/insurances-cover.jpg')] mb-24">
          <div className='bg-neutral-900/60 backdrop-brightness-70 h-full w-full flex items-center justify-center'>
            <h2 className='text-4xl 2xl:text-7xl font-bold text-white'>Insurances</h2>
          </div>
        </div>

        <div className='max-w-6xl mx-auto py-6 pt-0 lg:py-24 lg:pt-0 space-y-12 px-8 lg:px-0'>
          <div className='w-full'>
            <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>Is not covered</h3>
            <p className='text-lg'>
              Here are the things that are <strong>never</strong> covered by any insurance from Geysir.
            </p>

            <h4 className='mb-4 font-black uppercase mt-8'>These things are:</h4>
            <ul className='list-disc mb-8'>
              <li className='text-lg'>Damages to the underbody.</li>
              <li className='text-lg'>Damages when driving off-road.</li>
              <li className='text-lg'>Damages to the tires and wheels.</li>
              <li className='text-lg'>Damages when driving in water.</li>
            </ul>
          </div>

          <div className='w-full'>
            <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>Emergency Roadside Assistance</h3>
            <p className='text-lg'>
              If the car malfunctions due to normal wear and tear, or for other reasons beyond the renter’s control, Geysir shall supply the renter with a comparable vehicle as soon as possible or arrange to have repairs done without delay by a Geysir service partner. A refund will be made for a lost rental time according to Geysir rulebook.
            </p>
          </div>

          <div className='w-full'>
            <h3 className='text-2xl 2xl:text-3xl font-bold mb-2 capitalize'>Refund Rulebook</h3>
            <p className='text-lg'>
              Roadside assistance required because of a breakdown, accident, damage or other reasons that is the driver´s / renter´s responsibility Geysir Car Rental will charge the renter for the assistance. The fee for such assistance and/or retrieval fee for picking up a rental car can vary depending on the location and what type of assistance is required. Price is 450 ISK per kilometer both ways. That is in addition to the damages to the rental car itself. 
            </p>
            <p className='text-lg my-4'>
              This fee is of course not charged if the assistance can be traced to a breakdown, or other reasons that are Geysir Car Rental´s responsibility.
            </p>
            <p className='text-lg'>
              In that case Geysir will cover the roadside assistance and/or exchange of the vehicles and offer a compensation for the lost time on the trip in following order:
            </p>

            <ul className='list-disc mt-2'>
              <li className='text-lg'>0-6 hours - no compensation.</li>
              <li className='text-lg'>6-12 hours - Half a day refund</li>
              <li className='text-lg'>12-24 hours - 1 day refund</li>
              <li className='text-lg'>24-48 hours - 2 days refund</li>
              <li className='text-lg'>48+ hours - Full refund </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
