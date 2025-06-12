import Image from 'next/image'
import { FC } from 'react'

import { Retrofit } from '@/constants/form'

import { BenchmarkScaleProps } from './BenchmarkScale'
import { RetrofitArrowContainer, RetrofitLabel, RetrofitValue } from './styled'

type BenchmarkArrowUpProps = Retrofit &
  Pick<BenchmarkScaleProps['values'], 'highest_energy_use'>

export const BenchmarkArrowUp: FC<BenchmarkArrowUpProps> = ({
  label,
  unit,
  value,
  highest_energy_use,
}) => {
  if (!value) return null

  return (
    <RetrofitArrowContainer
      $retrofitValue={value}
      $highestEnergyUsed={highest_energy_use}
    >
      <Image src="/arrow-down.png" alt="" width={40} height={40} />

      <RetrofitValue>{value}</RetrofitValue>

      <RetrofitLabel>{unit}</RetrofitLabel>
      <RetrofitLabel>{label}</RetrofitLabel>
    </RetrofitArrowContainer>
  )
}
