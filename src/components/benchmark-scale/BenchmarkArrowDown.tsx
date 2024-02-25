import Image from 'next/image'
import { FC } from 'react'
import { BenchmarkScaleProps } from './BenchmarkScale'
import {
  CurrentEnnergyArrowContainer,
  CurrentEnnergyLabel,
  CurrentEnnergyValue,
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
    <CurrentEnnergyArrowContainer
      $currentEnergyValue={current_energy_use_value}
      $highestEnergyUsed={highest_energy_use}
    >
      <CurrentEnnergyValue $label={current_energy_use_label}>
        {current_energy_use_value}
      </CurrentEnnergyValue>

      <CurrentEnnergyLabel>{current_energy_use_unit}</CurrentEnnergyLabel>

      <Image src="/arrow-down.png" alt="" width={40} height={40} />
    </CurrentEnnergyArrowContainer>
  )
}
