export enum TypeFunc {
  'Pure' = 'Pure',
  'Side-effect' = 'Side-effect',
}

export enum TypePureVerb {
  'Get' = 'Get',
  'Add' = 'Add',
  'Format' = 'Format',
  'Remove' = 'Remove',
  'Request' = 'Request',
  'Retrieve' = 'Retrieve',
}

export enum TypeSideEffectVerb {
  'Compose' = 'Compose',
  'Dispatch' = 'Dispatch',
  'Initialize' = 'Initialize',
  'Fetch' = 'Fetch',
  'Set' = 'Set',
  'Take' = 'Take',
  'Go' = 'Go',
}

export enum TypeReturn {
  'List' = 'List',
  'Boolean' = 'Boolean',
  'Object' = 'Object',
  'Number' = 'Number',
  'Date' = 'Date',
}

export type State = {
  type: TypeFunc
  pureVerb: TypePureVerb
  sideEffectVerb: TypeSideEffectVerb
  functionReturnType: TypeReturn
  context: string
  reactHook: boolean
  ninjaMode: boolean
}
