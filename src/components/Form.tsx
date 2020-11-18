import React from 'react'

import {
  State,
  TypeFunc,
  TypeFunctionVerb,
  TypeReturn,
  TypeSideEffectVerb,
} from 'components/options'

const classNames = {
  tabsWrapper:
    'bg-gray-200 mt-3 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex',
  tabRegular:
    'inline-flex items-center transition-all duration-300 ease-in active:outline-none focus:outline-none hover:text-indigo-600 rounded-l-full px-4 py-2 active',
  tabActive: 'bg-white text-indigo-600 rounded-full',
  title: 'text-2xl text-gray-600 mt-10',
}

const Form: React.FC<{
  state: State
  setState: React.Dispatch<React.SetStateAction<State>>
}> = ({ setState, state }) => {
  const isFunctional = state.type === TypeFunc.Functional

  return (
    <>
      <div className="p-6">
        {/* 
    
      Type
      
      */}
        <p className={`${classNames.title}`} style={{ marginTop: 0 }}>
          What is the <span className="text-indigo-600">type</span> of function?
        </p>

        <div className={classNames.tabsWrapper}>
          {Object.values(TypeFunc).map((item) => {
            return (
              <button
                key={item}
                onClick={() =>
                  setState((prev) => ({
                    ...prev,
                    type: item,
                  }))
                }
                className={`${item === state.type && classNames.tabActive} ${
                  classNames.tabRegular
                }`}
                id="grid"
              >
                <span>{item}</span>
              </button>
            )
          })}
        </div>

        {/* 

        Action

      */}
        <p className={classNames.title}>
          How would you describe the{' '}
          <span className="text-indigo-600">action</span> of the function?
        </p>

        {isFunctional && (
          <div className={classNames.tabsWrapper}>
            {Object.values(TypeFunctionVerb).map((item) => {
              return (
                <button
                  key={item}
                  onClick={() =>
                    setState((prev) => ({
                      ...prev,
                      functionalVerb: item,
                    }))
                  }
                  className={`${
                    item === state.functionalVerb && classNames.tabActive
                  } ${classNames.tabRegular}`}
                  id="grid"
                >
                  <span>{item}</span>
                </button>
              )
            })}
          </div>
        )}

        {!isFunctional && (
          <div className={classNames.tabsWrapper}>
            {Object.values(TypeSideEffectVerb).map((item) => {
              return (
                <button
                  key={item}
                  onClick={() =>
                    setState((prev) => ({
                      ...prev,
                      sideEffectVerb: item,
                    }))
                  }
                  className={`${
                    item === state.sideEffectVerb && classNames.tabActive
                  } ${classNames.tabRegular}`}
                  id="grid"
                >
                  <span>{item}</span>
                </button>
              )
            })}
          </div>
        )}

        {isFunctional && (
          <>
            <p className={classNames.title}>
              What is the <span className="text-indigo-600">return?</span>
            </p>
            <div className={classNames.tabsWrapper}>
              {Object.values(TypeReturn).map((item) => {
                return (
                  <button
                    key={item}
                    onClick={() =>
                      setState((prev) => ({
                        ...prev,
                        functionReturnType: item,
                      }))
                    }
                    className={`${
                      item === state.functionReturnType && classNames.tabActive
                    } ${classNames.tabRegular}`}
                    id="grid"
                  >
                    <span>{item}</span>
                  </button>
                )
              })}
            </div>
          </>
        )}

        {/* 

        Context

      */}
        {isFunctional ? (
          <p className={classNames.title}>
            Where it will <span className="text-indigo-600">get from?</span>
          </p>
        ) : (
          <p className={classNames.title}>
            What is the scope it will be{' '}
            <span className="text-indigo-600">executed?</span>
          </p>
        )}

        <input
          placeholder="Type here..."
          onChange={(event) => {
            setState((prev) => ({
              ...prev,
              context: event.target.value,
            }))
          }}
          defaultValue={state.context}
          className="text-gray-600 mt-3 w-full appearance-none border rounded py-2 px-3 text-grey-darker"
        />
      </div>

      <div className="p-6 bg-gray-100">
        <div className="flex flex-row">
          <div className="mr-10">
            <p className={classNames.title} style={{ marginTop: 0 }}>
              Is it a <span className="text-indigo-600">React Hook?</span>
            </p>

            <div className={classNames.tabsWrapper}>
              {['On', 'Off'].map((item) => {
                const conditional =
                  (state.reactHook && item === 'On') ||
                  (!state.reactHook && item === 'Off')
                return (
                  <button
                    key={item}
                    onClick={() =>
                      setState((prev) => ({
                        ...prev,
                        reactHook: !prev.reactHook,
                      }))
                    }
                    className={`${conditional && classNames.tabActive} ${
                      classNames.tabRegular
                    }`}
                    id="grid"
                  >
                    <span>{item}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div>
            <p className={classNames.title} style={{ marginTop: 0 }}>
              <span className="text-indigo-600">Ninja</span> mode
            </p>

            <div className={classNames.tabsWrapper}>
              {['On', 'Off'].map((item) => {
                const conditional =
                  (state.ninjaMode && item === 'On') ||
                  (!state.ninjaMode && item === 'Off')
                return (
                  <button
                    key={item}
                    onClick={() =>
                      setState((prev) => ({
                        ...prev,
                        ninjaMode: !prev.ninjaMode,
                      }))
                    }
                    className={`${conditional && classNames.tabActive} ${
                      classNames.tabRegular
                    }`}
                    id="grid"
                  >
                    <span>{item}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
