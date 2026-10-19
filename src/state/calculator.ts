import {atomWithStorage} from 'jotai/utils'

// Значения калькулятора переживают уход со страницы и перезагрузку.
export type CalculatorValues = {
  armor: number
  enemyLevel: number
  evasion: number
  accuracy: number
}

export const calculatorDefaults: CalculatorValues = {
  armor: 20000,
  enemyLevel: 90,
  evasion: 6000,
  accuracy: 680,
}

export const calculatorAtom = atomWithStorage<CalculatorValues>(
  'tli.calculator',
  calculatorDefaults,
)
