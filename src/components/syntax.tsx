import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import Clipboard from 'clipboard'

import { State } from 'components/options'

const SyntaxHighlight: React.FC<{ code: string; state: State }> = ({
  code,
  state,
}) => {
  const isNinjaMode = state.ninjaMode

  useEffect(() => {
    const clipBoard = new Clipboard('#copy-to-clipboard')

    return () => {
      clipBoard.destroy()
    }
  }, [])

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <button
          id="copy-to-clipboard"
          data-clipboard-text={`function ${code} {}`}
          className="absolute"
          style={{ right: '1em', top: '1em' }}
        >
          <svg
            className="fill-current cursor-pointer transition duration-200 transition-all ease-in-out text-gray-400 hover:text-gray-600 w-4"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            version="1.1"
            viewBox="0 0 477.867 477.867"
            xmlSpace="preserve"
          >
            <path d="M341.333 85.333H51.2c-28.277 0-51.2 22.923-51.2 51.2v290.133c0 28.277 22.923 51.2 51.2 51.2h290.133c28.277 0 51.2-22.923 51.2-51.2V136.533c0-28.277-22.923-51.2-51.2-51.2zM358.4 426.667c0 9.426-7.641 17.067-17.067 17.067H51.2c-9.426 0-17.067-7.641-17.067-17.067V136.533c0-9.426 7.641-17.067 17.067-17.067h290.133c9.426 0 17.067 7.641 17.067 17.067v290.134z" />
            <path d="M426.667 0h-307.2c-28.277 0-51.2 22.923-51.2 51.2 0 9.426 7.641 17.067 17.067 17.067S102.4 60.626 102.4 51.2s7.641-17.067 17.067-17.067h307.2c9.426 0 17.067 7.641 17.067 17.067v307.2c0 9.426-7.641 17.067-17.067 17.067s-17.067 7.641-17.067 17.067 7.641 17.067 17.067 17.067c28.277 0 51.2-22.923 51.2-51.2V51.2c0-28.277-22.923-51.2-51.2-51.2z" />
          </svg>
        </button>

        <div
          className={`${
            isNinjaMode ? 'bg-gray-900' : 'bg-white'
          } transition duration-200 transition-all ease-in-out shadow rounded-lg p-10 text-xl`}
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
                Don&apos;t be a ninja developer,{' '}
                <a
                  className="text-indigo-600 underline"
                  href="https://javascript.info/ninja-code"
                  target="_blank"
                  rel="noreferrer"
                >
                  here&apos;s why
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
    </>
  )
}

export default SyntaxHighlight
