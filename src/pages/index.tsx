import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import {
  State,
  TypeFunc,
  TypeFunctionVerb,
  TypeReturn,
  TypeSideEffectVerb,
} from 'components/options'
import Form from 'components/Form'
import SyntaxHighlight from 'components/syntax'
import Footer from 'components/footer'
import createName from 'components/createName'

const IndexPage: React.FC = () => {
  const [state, setState] = useState<State>({
    type: TypeFunc.Functional,
    functionalVerb: TypeFunctionVerb.Get,
    sideEffectVerb: TypeSideEffectVerb.Detach,
    functionReturnType: TypeReturn['List'],
    context: 'Function name',
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
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>

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
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                      >
                        Get started
                      </button>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                        Share
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <Footer />
            </main>
          </div>
        </div>

        <div
          className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-right bg-cover bg-fixed"
          style={{ backgroundImage: 'url(hero.jpg)' }}
        >
          {started && (
            <SyntaxHighlight state={state} code={createName(state)} />
          )}
        </div>
      </div>
    </>
  )
}

export default IndexPage
