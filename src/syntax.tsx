import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import { State } from 'options'

const SyntaxHighlight: React.FC<{ code: string; state: State }> = ({
  code,
  state,
}) => {
  const isNinjaMode = state.ninjaMode
  return (
    <div
      className="absolute font-sans overflow-hidden"
      style={{ width: '70%', left: '15%', top: '45%' }}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div
          className={`bg-${
            isNinjaMode ? 'gray-900' : 'white'
          } transition duration-200 transition-all ease-in-out shadow sm:rounded-lg p-10 text-xl`}
        >
          <p className="font-light tracking-wide">
            <span className="text-gray-500">function</span>{' '}
            <span className="font-normal text-indigo-600">{code}( )</span>{' '}
            <span className="text-gray-500">{`{ }`}</span>
          </p>
          <AnimatePresence>
            {isNinjaMode && (
              <motion.p
                initial={{ opacity: 0, marginTop: 0, height: 0 }}
                animate={{ opacity: 1, marginTop: 15, height: 25 }}
                exit={{ opacity: 0, marginTop: 0, height: 0 }}
                className="font-light text-sm text-gray-700 overflow-hidden tracking-wide"
              >
                Do not be a ninja developer,{' '}
                <a
                  className="text-indigo-600 underline"
                  href="https://javascript.info/ninja-code"
                  target="_blank"
                  rel="noreferrer"
                >
                  here is why
                </a>
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.img
        initial={{ translateY: 100, rotate: 0 }}
        animate={{
          translateY: isNinjaMode ? 0 : 150,
          rotate: isNinjaMode ? -15 : 15,
        }}
        src="/ninja.png"
        alt="ninja mode"
        className="absolute"
        style={{ width: 100, bottom: -10, right: -10 }}
      />
    </div>
  )
}

export default SyntaxHighlight
