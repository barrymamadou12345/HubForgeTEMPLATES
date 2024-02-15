import React from "react";
import Hero from "../../assets/images/hero.jpg";

export default function AccTemp2() {
  return (
    <div>
      <section>
        <div className="mx-auto mt-10 max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16">
            <div className="lg:py-26">
              <div className="lg:text-left">
                <h2 className="lg:text-7xl font-bold max-sm:text-center  max-sm:text-5xl">
                  Business management made easy
                </h2>
                <p className="mt-4 text-gray-600 max-sm:text-center ">
                  Odio incidunt nam sit illum. Voluptas doloribus asperiores
                  quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
                </p>
              </div>
              <div className="flex gap-3 max-sm:gap-2">
                <a
                  href="#"
                  className="mt-8 inline-block rounded-3xl bg-blue-500 px-8 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="mt-8 inline-block rounded-3xl bg-blue-200 px-8 py-3 text-sm font-medium text-blue-500 transition  focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Learne More
                </a>
              </div>
            </div>
            <div class="relative w-[90%] max-lg:w-[100%]  h-64  overflow-hidden  rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                class="h-full w-full  object-cover object-left dark:hidden"
                src={Hero}
                alt="app screenshot"
                width="1628"
                height="1233"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
