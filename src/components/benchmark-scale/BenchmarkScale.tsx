import { FormValues, RetrofitFields } from '@/constants/form'
import { FC, Fragment } from 'react'
import { BenchmarkArrowDown } from './BenchmarkArrowDown'
import { BenchmarkArrowUp } from './BenchmarkArrowUp'
import {
  BenchMarkDescription,
  BenchMarkRectangle,
  BenchmarkScaleContainer,
  BenchmarkScaleWrapper,
  BenchMarkWhiteRect,
  BodyContainer,
  BodyWrapper,
  MaxEnergyLabel,
} from './styled'

/** Definition of how many retangles on the benchmark scale */
const BENCHMARK_RECT_COUNT = 10

export type BenchmarkScaleProps = {
  /**
   * All form values except retrofit
   */
  values: FormValues
  /**
   * All retrofit form values
   */
  retrofitValues: RetrofitFields
}

export const BenchmarkScale: FC<BenchmarkScaleProps> = ({
  values,
  retrofitValues,
}) => {
  return (
    <BodyWrapper>
      <BenchMarkDescription>
        {values.benchmark_description}
      </BenchMarkDescription>

      <BodyContainer>
        <p>0</p>

        <BenchmarkScaleWrapper>
          <BenchmarkScaleContainer
            $lowEfficiencyPoint={values.low_efficiency_point}
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

        <MaxEnergyLabel $unit={values.current_energy_use_unit}>
          {values.highest_energy_use}
        </MaxEnergyLabel>
      </BodyContainer>
    </BodyWrapper>
  )
}
