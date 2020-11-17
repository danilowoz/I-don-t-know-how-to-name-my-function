import React, { useState } from 'react'

import {
  State,
  TypeFunc,
  TypeFunctionVerb,
  TypeReturn,
  TypeSideEffectVerb,
} from 'options'
import Form from 'Form'
import SyntaxHighlight from 'syntax'
import createName from 'createName'

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

  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative z-10 pb-8 bg-white lg:max-w-2xl lg:w-full">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="relative mx-auto max-w-screen-xl py-20 px-4 lg:px-8">
              <div className="sm:text-center lg:text-left">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  I don't know how to
                  <br className="xl:hidden" />
                  <span className="text-indigo-600"> name my function</span>
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>

                <div className="bg-white shadow sm:rounded-lg p-6 mt-10">
                  <Form state={state} setState={setState} />
                </div>
              </div>
            </main>
          </div>
        </div>

        <div
          className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-right bg-cover"
          style={{ backgroundImage: 'url(hero.jpg)' }}
        >
          <SyntaxHighlight code={createName(state)} />
        </div>
      </div>
    </>
  )
}

export default IndexPage
