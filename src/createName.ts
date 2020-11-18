import { State, TypeFunc, TypeReturn } from 'options'

function camelize(str: string) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, '')
}

type CompositionType = {
  verb: string
  context: string
  returnType: string
  preposition: string
}

const contentChange = (state: State): CompositionType => {
  const isFunctional = state.type === TypeFunc.Functional
  const verb: string = isFunctional
    ? state.functionalVerb
    : state.sideEffectVerb
  const returnType = isFunctional ? state.functionReturnType : ''
  const composition = {
    verb,
    context: state.context,
    returnType,
    preposition: 'from',
  }

  if (returnType === TypeReturn.Boolean) {
    composition.verb = 'Is'
    composition.returnType = ''
  }

  if (composition.verb === 'Initialize') {
    composition.verb = 'Init'
  }

  if (state.ninjaMode) {
    composition.returnType = 'data'
    composition.context = ''
    composition.preposition = ''
    composition.verb = composition.verb
      .split('')
      .filter((e, i) => {
        if (i == 0 && e.match(/(a|e|i|o|u)/gi)) {
          return true
        }

        if (e.match(/(a|e|i|o|u)/gi)) {
          return false
        }

        return true
      })
      .join('')
  }

  return composition
}

const setOrder = (composition: CompositionType, state: State): string[] => {
  let order = [composition.verb, composition.returnType, composition.context]

  // const isFunctional = state.type === TypeFunc.Functional
  // if (
  //   isFunctional &&
  //   [TypeFunctionVerb.Add, TypeFunctionVerb.Remove].indexOf(
  //     state.functionalVerb
  //   ) !== -1
  // ) {
  //   order = [
  //     composition.verb,
  //     state.context,
  //     composition.preposition,
  //     composition.returnType,
  //   ]
  // }

  if (state.reactHook) {
    order = ['use', ...order]
  }

  return order
}

const createName = (state: State): string => {
  const composition = contentChange(state)
  const order = setOrder(composition, state)
  const final = order.join(' ')

  return camelize(final)
}

export default createName
