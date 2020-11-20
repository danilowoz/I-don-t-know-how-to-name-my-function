import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import {
  State,
  TypeFunc,
  TypePureVerb,
  TypeReturn,
  TypeSideEffectVerb,
} from 'components/options'
import Form from 'components/Form'
import SyntaxHighlight from 'components/syntax'
import Footer from 'components/footer'
import createName from 'components/createName'
import data from 'components/data'

const IndexPage: React.FC = () => {
  const [state, setState] = useState<State>({
    type: TypeFunc.Pure,
    pureVerb: TypePureVerb.Get,
    sideEffectVerb: TypeSideEffectVerb.Detach,
    functionReturnType: TypeReturn['List'],
    context: 'Table view',
    ninjaMode: false,
    reactHook: false,
  })

  const [started, setStarted] = useState(false)

  return (
    <>
      <div className="relative bg-white overflow-hidden min-h-screen relative">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative z-10 pb-8 bg-white lg:max-w-2xl lg:w-full ">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="relative mx-auto max-w-screen-xl py-20 px-4 lg:px-8 min-h-screen">
              <div className="sm:text-center lg:text-left pb-10">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  I don&apos;t know how to
                  <br className="xl:hidden" />
                  <span className="text-indigo-600"> name my function</span>
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  <span className="text-gray-600">
                    Development can be more challenging than you think.
                  </span>{' '}
                  It&apos;s not about algorithms, data structures, or whatever,
                  but about naming functions and variables! (fearful face)
                  Here&apos;s a tool to help you in this intense journey: naming
                  a function.
                </p>

                <div className="lg:hidden block relative font-sans overflow-hidden mt-10">
                  <SyntaxHighlight state={state} code={createName(state)} />
                </div>

                <AnimatePresence>
                  {started && (
                    <motion.div
                      initial={{ opacity: 0, translateY: 100 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      className="bg-white shadow sm:rounded-lg mt-10"
                    >
                      <Form state={state} setState={setState} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {!started && (
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <button
                        onClick={() => setStarted(true)}
                        className="shadow-xl w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                      >
                        Get started
                      </button>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://twitter.com/intent/tweet?text=${data.description}%20%0A%0A${data.domain}`}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                      >
                        <span
                          className="text-indigo-500 mr-3"
                          style={{ width: 20 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 24 24"
                            className="fill-current "
                          >
                            <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
                          </svg>
                        </span>
                        Share
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <Footer />
            </main>
          </div>
        </div>

        <div
          className="hidden lg:block absolute inset-y-0 right-0 w-1/2 bg-right bg-cover bg-fixed"
          style={{ backgroundImage: 'url(hero.jpg)' }}
        >
          {started && (
            <div
              className="absolute font-sans overflow-hidden"
              style={{ width: '70%', left: '15%', top: '45%' }}
            >
              <SyntaxHighlight state={state} code={createName(state)} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default IndexPage
