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
        <div className="z-10 w-full flex justify-between items-end">
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

          <div className='grid grid-cols-4 gap-4'>
            <a href="https://en.vedur.is" title='Weather' target="_blank" rel="noopener noreferrer" className='col-span-2 flex justify-end'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-neutral-700 hover:fill-neutral-950 ease-in-out duration-300'><path d="M124.1 259.9c-37.4-37.4-37.4-98.3 0-135.8 34.6-34.6 89.1-36.8 126.7-7.4 20-12.9 43.6-20.7 69.2-20.7.7 0 1.3.2 2 .2l8.9-26.7c3.4-10.2-6.3-19.8-16.5-16.4l-75.3 25.1-35.5-71c-4.8-9.6-18.5-9.6-23.3 0l-35.5 71-75.3-25.1c-10.2-3.4-19.8 6.3-16.4 16.5l25.1 75.3-71 35.5c-9.6 4.8-9.6 18.5 0 23.3l71 35.5-25.1 75.3c-3.4 10.2 6.3 19.8 16.5 16.5l59.2-19.7c-.2-2.4-.7-4.7-.7-7.2 0-12.5 2.3-24.5 6.2-35.9-3.6-2.7-7.1-5.2-10.2-8.3zm69.8-58c4.3-24.5 15.8-46.4 31.9-64-9.8-6.2-21.4-9.9-33.8-9.9-35.3 0-64 28.7-64 64 0 18.7 8.2 35.4 21.1 47.1 11.3-15.9 26.6-28.9 44.8-37.2zM436 336h-57.7l17.3-64.9c2-7.6-3.7-15.1-11.6-15.1h-68c-6 0-11.1 4.5-11.9 10.4l-16 120c-1 7.2 4.6 13.6 11.9 13.6h59.3l-23 97.2c-1.8 7.6 4 14.8 11.7 14.8 4.2 0 8.2-2.2 10.4-6l88-152c4.6-8-1.2-18-10.4-18zm74.5-110.5c-6.9-37.2-39.3-65.5-78.5-65.5-12.3 0-23.9 3-34.3 8-17.4-24.1-45.6-40-77.7-40-53 0-96 43-96 96 0 .5.2 1.1.2 1.6C187.6 233 160 265.2 160 304c0 44.2 35.8 80 80 80h16.3c.1-.6 0-1.2 0-1.8l16-120c3-21.8 21.7-38.2 43.7-38.2h68c13.8 0 26.5 6.3 34.9 17.2 8.4 10.9 11.2 24.8 7.6 38.1l-6.6 24.7h16c15.7 0 30.3 8.4 38.1 22 7.8 13.6 7.8 30.5 0 44l-8.1 14h30c44.2 0 80-35.8 80-80 .1-39.2-28.1-71.7-65.4-78.5z"/></svg>
            </a>
            <a href="https://road.is" title='Road condition' target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-neutral-700 hover:fill-neutral-950 ease-in-out duration-300'><path d="M573.19 402.67l-139.79-320C428.43 71.29 417.6 64 405.68 64h-97.59l2.45 23.16c.5 4.72-3.21 8.84-7.96 8.84h-29.16c-4.75 0-8.46-4.12-7.96-8.84L267.91 64h-97.59c-11.93 0-22.76 7.29-27.73 18.67L2.8 402.67C-6.45 423.86 8.31 448 30.54 448h196.84l10.31-97.68c.86-8.14 7.72-14.32 15.91-14.32h68.8c8.19 0 15.05 6.18 15.91 14.32L348.62 448h196.84c22.23 0 36.99-24.14 27.73-45.33zM260.4 135.16a8 8 0 0 1 7.96-7.16h39.29c4.09 0 7.53 3.09 7.96 7.16l4.6 43.58c.75 7.09-4.81 13.26-11.93 13.26h-40.54c-7.13 0-12.68-6.17-11.93-13.26l4.59-43.58zM315.64 304h-55.29c-9.5 0-16.91-8.23-15.91-17.68l5.07-48c.86-8.14 7.72-14.32 15.91-14.32h45.15c8.19 0 15.05 6.18 15.91 14.32l5.07 48c1 9.45-6.41 17.68-15.91 17.68z"/></svg>
            </a>
            <a href="https://safetravel.is" title='Safe travel' target="_blank" rel="noopener noreferrer">
              <img src='/landsbjorg-logo.png.webp' className='w-6 h-6' />
            </a>
            <a href="https://www.facebook.com/geysircarrental" title='Facebook' target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='w-6 h-6 fill-neutral-700 hover:fill-neutral-950 ease-in-out duration-300'><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
            </a>
            <a href="https://twitter.com/geysircarrental" title='Twitter' target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-6 h-6 fill-neutral-700 hover:fill-neutral-950 ease-in-out duration-300'><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
            </a>
            <a href="https://www.instagram.com/geysircarrental/" title='Instagram' target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 h-6 fill-neutral-700 hover:fill-neutral-950 ease-in-out duration-300'><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </a>
            <a href="https://wa.me/3548934455" title='Whatsapp' target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-6 h-6 fill-neutral-700 hover:fill-neutral-950 ease-in-out duration-300'><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            </a>
          </div>
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
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
