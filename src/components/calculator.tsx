import {useEffect} from 'react'
import {useAtom} from 'jotai'
import {useForm} from 'react-hook-form'

import {armorReduction, evasionChance, percent} from '#/lib/formulas'
import {calculatorAtom, type CalculatorValues} from '#/state/calculator'
import {FieldLabel, FieldRoot} from '#/ui/field'
import {Input} from '#/ui/input'
import {Tab, TabPanel, TabsList, TabsRoot} from '#/ui/tabs'

const NUMBER = {valueAsNumber: true, min: 0} as const

function Result({label, value}: {label: string; value: string}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line py-1.5 text-sm last:border-b-0">
      <span className="text-ink-dim">{label}</span>
      <span className="font-mono text-ink-head">{value}</span>
    </div>
  )
}

export function Calculator() {
  const [stored, setStored] = useAtom(calculatorAtom)
  const {register, watch} = useForm<CalculatorValues>({defaultValues: stored})

  useEffect(() => {
    const sub = watch(values => {
      const next = {...stored, ...values}
      if (
        Object.values(next).every(
          v => typeof v === 'number' && !Number.isNaN(v),
        )
      ) {
        setStored(next)
      }
    })
    return () => sub.unsubscribe()
  }, [watch, setStored, stored])

  const values = watch()
  const armor = armorReduction(values.armor, values.enemyLevel)
  const evasion = evasionChance(values.evasion, values.accuracy)

  return (
    <section className="mb-6 rounded-md bg-panel p-4 shadow-panel">
      <h3 className="mb-1 font-head text-h3 font-medium text-ink-head">
        Калькулятор защиты
      </h3>
      <p className="mb-3 text-sm text-ink-dim">
        По формулам из справочника. Значения сохраняются между визитами.
      </p>
      <TabsRoot defaultValue="armor">
        <TabsList>
          <Tab value="armor">Броня</Tab>
          <Tab value="evasion">Уклонение</Tab>
        </TabsList>
        <TabPanel value="armor" className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-3">
            <FieldRoot>
              <FieldLabel>Броня</FieldLabel>
              <Input type="number" {...register('armor', NUMBER)} />
            </FieldRoot>
            <FieldRoot>
              <FieldLabel>Уровень врага (до 90)</FieldLabel>
              <Input
                type="number"
                {...register('enemyLevel', {...NUMBER, max: 100})}
              />
            </FieldRoot>
          </div>
          <div>
            <Result
              label="Снижение физического"
              value={percent(armor.physical)}
            />
            <Result
              label="Снижение нефизического (60%)"
              value={percent(armor.nonPhysical)}
            />
          </div>
        </TabPanel>
        <TabPanel value="evasion" className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-3">
            <FieldRoot>
              <FieldLabel>Уклонение</FieldLabel>
              <Input type="number" {...register('evasion', NUMBER)} />
            </FieldRoot>
            <FieldRoot>
              <FieldLabel>Меткость врага (130–680 по уровню)</FieldLabel>
              <Input type="number" {...register('accuracy', NUMBER)} />
            </FieldRoot>
          </div>
          <div>
            <Result
              label="Шанс уклониться от атаки"
              value={percent(evasion.attack)}
            />
            <Result
              label="От заклинания (уклонение −40%)"
              value={percent(evasion.spell)}
            />
          </div>
        </TabPanel>
      </TabsRoot>
    </section>
  )
}
