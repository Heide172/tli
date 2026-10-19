// Формулы из внутриигрового справочника (раздел «Выживание»).

const ARMOR_CAP = 0.8
const ARMOR_NON_PHYSICAL_SHARE = 0.6
const EVASION_CAP = 0.75
const EVASION_SPELL_PENALTY = 0.4

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export function armorReduction(armor: number, enemyLevel: number) {
  const a = Math.max(0, armor)
  const physical = clamp(
    a / (0.9 * a + 3000 + 300 * Math.min(Math.max(enemyLevel, 1), 90)),
    0,
    ARMOR_CAP,
  )
  return {physical, nonPhysical: physical * ARMOR_NON_PHYSICAL_SHARE}
}

export function evasionChance(evasion: number, accuracy: number) {
  const calc = (ev: number) => {
    const acc = Math.max(1, accuracy)
    const e = Math.max(0, ev)
    return clamp(
      1 - (1.15 * acc) / (acc + 0.5 * Math.pow(e, 0.75)),
      0,
      EVASION_CAP,
    )
  }
  return {
    attack: calc(evasion),
    spell: calc(evasion * (1 - EVASION_SPELL_PENALTY)),
  }
}

export function percent(value: number) {
  return `${(value * 100).toFixed(1).replace('.', ',')}%`
}
