import React from 'react'

const FeaturesSection = () => {
  return (
    <div className="box-border flex flex-col items-center px-8 py-20 mx-auto leading-6 border-solid max-w-7xl xl:px-16 md:items-stretch md:justify-center md:py-24 tails-selected-element">
      <div className="relative pb-10">
        <h5
          className="w-full mx-0 mt-0 mb-4  font-bold text-center text-orange-700 border-0 border-stone-200"
          data-primary="orange-700"
        >
          Features
        </h5>
        <h2 className="w-full m-0  text-4xl font-black leading-loose tracking-wide text-center text-stone-700 border-0 border-stone-200 sm:text-5xl">
          Amazing Features
        </h2>
        <p className="w-full max-w-xl mx-0 mx-auto mt-4 mb-0  text-sm font-medium leading-relaxed text-center text-stone-400 border-0 border-stone-200 lg:text-lg md:text-base">
          Check out our set of awesome features and tools. We are the industry leaders in providing
          quality tools, trusted and used by over 1,200 companies. We kind'of rock!
        </p>
      </div>
      <div className="z-10 grid gap-5 md:grid-cols-6 lg:grid-cols-9">
        {/* Feature 1 */}
        <div
          className="col-span-3  text-stone-700 bg-stone-50 rounded-3xl"
          data-rounded="rounded-3xl"
          data-rounded-max="rounded-full"
        >
          <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
            <div
              className="flex-shrink-0 p-3  text-stone-700 border border-stone-200 rounded-full"
              data-rounded="rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="leading-6 text-center text-stone-700 align-middle stroke-current w-7 h-7"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5M16 5.25l-8 4.5" />
              </svg>
            </div>
            <div className="mt-4  text-left text-stone-700 border-0 border-stone-200 sm:mt-2 sm:ml-4">
              <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
                Projects
              </h6>
              <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-stone-400 border-solid sm:mt-4">
                Take advantage of our unlimited projects for your tasks and automated workflow.
              </p>
            </div>
          </div>
        </div>
        {/* Feature 2 */}
        <div
          className="col-span-3  text-stone-700 bg-stone-50 rounded-3xl"
          data-rounded="rounded-3xl"
          data-rounded-max="rounded-full"
        >
          <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
            <div
              className="flex-shrink-0 p-3  text-stone-700 border border-stone-200 rounded-full"
              data-rounded="rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="leading-6 text-center text-stone-700 align-middle stroke-current w-7 h-7"
                width={44}
                height={44}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <path d="M7 12l5 5L22 7M2 12l5 5m5-5l5-5" />
              </svg>
            </div>
            <div className="mt-4  text-left text-stone-700 border-0 border-stone-200 sm:mt-2 sm:ml-4">
              <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
                Tasks
              </h6>
              <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-stone-400 border-solid sm:mt-4">
                Unlimited tasks that perform some of your most important applications functionality.
              </p>
            </div>
          </div>
        </div>
        {/* Feature 3 */}
        <div
          className="col-span-3  text-stone-700 bg-stone-50 rounded-3xl"
          data-rounded="rounded-3xl"
          data-rounded-max="rounded-full"
        >
          <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
            <div
              className="flex-shrink-0 p-3  text-stone-700 border border-stone-200 rounded-full"
              data-rounded="rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="leading-6 text-center text-stone-700 align-middle stroke-current w-7 h-7"
                width={44}
                height={44}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <path d="M9 4.55a8 8 0 016 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01" />
              </svg>
            </div>
            <div className="mt-4  text-left text-stone-700 border-0 border-stone-200 sm:mt-2 sm:ml-4">
              <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
                Automation
              </h6>
              <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-stone-400 border-solid sm:mt-4">
                Set it, and forget it. Our automated tools will allow you to automate your workflow.
              </p>
            </div>
          </div>
        </div>
        {/* Feature 4 */}
        <div
          className="col-span-3  text-stone-700 bg-stone-50 rounded-3xl"
          data-rounded="rounded-3xl"
          data-rounded-max="rounded-full"
        >
          <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
            <div
              className="flex-shrink-0 p-3  text-stone-700 border border-stone-200 rounded-full"
              data-rounded="rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="leading-6 text-center text-stone-700 align-middle stroke-current w-7 h-7"
                width={44}
                height={44}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <path d="M3 12h3M12 3v3M7.8 7.8L5.6 5.6M16.2 7.8l2.2-2.2M7.8 16.2l-2.2 2.2M12 12l9 3-4 2-2 4-3-9" />
              </svg>
            </div>
            <div className="mt-4  text-left text-stone-700 border-0 border-stone-200 sm:mt-2 sm:ml-4">
              <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
                Simple
              </h6>
              <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-stone-400 border-solid sm:mt-4">
                We've built one of the simplest tools to integrate into your current system.
              </p>
            </div>
          </div>
        </div>
        {/* Feature 5 */}
        <div
          className="col-span-3  text-stone-700 bg-stone-50 rounded-3xl"
          data-rounded="rounded-3xl"
          data-rounded-max="rounded-full"
        >
          <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
            <div
              className="flex-shrink-0 p-3  text-stone-700 border border-stone-200 rounded-full"
              data-rounded="rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="leading-6 text-center text-stone-700 align-middle stroke-current w-7 h-7"
                width={44}
                height={44}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <path d="M13 3v7h6l-8 11v-7H5l8-11" />
              </svg>
            </div>
            <div className="mt-4  text-left text-stone-700 border-0 border-stone-200 sm:mt-2 sm:ml-4">
              <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
                Fast
              </h6>
              <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-stone-400 border-solid sm:mt-4">
                We have the fastest response times than any other service in our industry.
              </p>
            </div>
          </div>
        </div>
        {/* Feature 6 */}
        <div
          className="col-span-3  text-stone-700 border-0 bg-stone-50 rounded-3xl"
          data-rounded="rounded-3xl"
          data-rounded-max="rounded-full"
        >
          <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
            <div
              className="flex-shrink-0 p-3  text-stone-700 border border-stone-200 rounded-full"
              data-rounded="rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="leading-6 text-center text-stone-700 align-middle stroke-current w-7 h-7"
                width={44}
                height={44}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <rect x={3} y={4} width={18} height={8} rx={3} />
                <rect x={3} y={12} width={18} height={8} rx={3} />
                <path d="M7 8v.01M7 16v.01" />
              </svg>
            </div>
            <div className="mt-4  text-left text-stone-700 border-0 border-stone-200 sm:mt-2 sm:ml-4">
              <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
                Reliable
              </h6>
              <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-stone-400 border-solid sm:mt-4">
                We pride ourselves in our up-time metrics. We focus a lot of our energy on being
                reliable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
