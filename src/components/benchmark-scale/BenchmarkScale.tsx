import { FormValues, RetrofitFields } from '@/constants/form'
import { FC, Fragment } from 'react'
import { BenchmarkArrowDown } from './BenchmarkArrowDown'
import { BenchmarkArrowUp } from './BenchmarkArrowUp'
import {
  BenchMarkRectangle,
  BenchmarkScaleContainer,
  BenchmarkScaleWrapper,
  BenchMarkWhiteRect,
} from './styled'

const BENCHMARK_RECT_COUNT = 10

export type BenchmarkScaleProps = {
  values: FormValues
  retrofitValues: RetrofitFields
}

export const BenchmarkScale: FC<BenchmarkScaleProps> = ({
  values,
  retrofitValues,
}) => {
  return (
    <BenchmarkScaleWrapper>
      <BenchmarkScaleContainer
        $midEfficiencyPoint={values.mid_efficiency_point}
      >
        <BenchmarkArrowDown values={values} />

        {Array.from({ length: BENCHMARK_RECT_COUNT }).map((_, index) => (
          <Fragment key={`benchmark-rectangle-${index}`}>
            <BenchMarkRectangle>
              <BenchMarkWhiteRect />
            </BenchMarkRectangle>
          </Fragment>
        ))}

        {retrofitValues.map((retrofit) => (
          <BenchmarkArrowUp
            key={`retrofit-arrow-up-${retrofit.id}`}
            highest_energy_use={values.highest_energy_use}
            {...retrofit}
          />
        ))}
      </BenchmarkScaleContainer>
    </BenchmarkScaleWrapper>
  )
}
