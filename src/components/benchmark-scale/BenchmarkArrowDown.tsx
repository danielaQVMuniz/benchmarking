import Image from 'next/image'
import { FC } from 'react'
import { BenchmarkScaleProps } from './BenchmarkScale'
import {
  CurrentEnergyArrowContainer,
  CurrentEnergyLabel,
  CurrentEnergyValue,
} from './styled'

type BenchmarkArrowDownProps = Pick<BenchmarkScaleProps, 'values'>

export const BenchmarkArrowDown: FC<BenchmarkArrowDownProps> = ({ values }) => {
  const {
    current_energy_use_value,
    highest_energy_use,
    current_energy_use_unit,
    current_energy_use_label,
  } = values

  if (typeof current_energy_use_value === 'undefined') return null

  return (
    <CurrentEnergyArrowContainer
      $currentEnergyValue={current_energy_use_value}
      $highestEnergyUsed={highest_energy_use}
    >
      <CurrentEnergyValue $label={current_energy_use_label}>
        {current_energy_use_value}
      </CurrentEnergyValue>

      <CurrentEnergyLabel>{current_energy_use_unit}</CurrentEnergyLabel>

      <Image src="/arrow-down.png" alt="" width={40} height={40} />
    </CurrentEnergyArrowContainer>
  )
}
