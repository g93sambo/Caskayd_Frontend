import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
//importing inter font type
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const HomePage = () => {
  return (
<main className={`${inter.className} min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12`}> 
  <div
        className="w-full max-w-[1200px] h-auto md:h-[550px] bg-cover bg-center rounded-2xl shadow-xl flex flex-col items-center justify-center text-white p-6 md:p-12"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-center">
          Be The First To Experience It
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-extralight max-w-[800px] mb-6 text-center">
          Don&apos;t miss out! Join our waitlist today to get exclusive early access, special launch offers, and be notified the moment we go live. Secure your spot and transform your advertising strategy.
        </p>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-center max-w-[500px]">
          Choose your tier and start driving results today.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:max-w-[500px]">
  <Link href="/CreatorWaitlistPage" className="flex-1">
    <button className="w-full bg-white text-black px-6 py-3 text-lg sm:text-xl rounded-sm hover:scale-110 hover:shadow-lg transition-transform duration-300">
      Creator
    </button>
  </Link>

  <Link href="/BusinessWaitlistPage" className="flex-1">
    <button className="w-full bg-black border border-white px-6 py-3 text-lg sm:text-xl rounded-sm hover:scale-110 hover:shadow-lg transition-transform duration-300">
      Business
    </button>
  </Link>
</div>
      </div>
    </main>
  );
};

export default HomePage;
