export enum TypeFunc {
  'Functional' = 'Functional',
  'Side-effect' = 'Side-effect',
}

export enum TypeFunctionVerb {
  'Get' = 'Get',
  'Add' = 'Add',
  'Format' = 'Format',
  'Remove' = 'Remove',
  'Request' = 'Request',
  'Retrieve' = 'Retrieve',
}

export enum TypeSideEffectVerb {
  'Detach' = 'Detach',
  'Dispatch' = 'Dispatch',
  'Initialize' = 'Initialize',
  'Invoke' = 'Invoke',
  'Set' = 'Set',
  'Take' = 'Take',
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
  functionalVerb: TypeFunctionVerb
  sideEffectVerb: TypeSideEffectVerb
  functionReturnType: TypeReturn
  context: string
  reactHook: boolean
  ninjaMode: boolean
}
