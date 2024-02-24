import { FormValues } from '@/constants/form'
import { FC, Fragment } from 'react'
import { BenchmarkArrow } from './BenchmarkArrow'
import {
  BenchMarkRectangle,
  BenchmarkScaleContainer,
  BenchmarkScaleWrapper,
  BenchMarkWhiteRect,
} from './styled'

const BENCHMARK_RECT_COUNT = 10

export type BenchmarkScaleProps = {
  values: FormValues
}

export const BenchmarkScale: FC<BenchmarkScaleProps> = ({ values }) => {
  return (
    <BenchmarkScaleWrapper>
      <BenchmarkScaleContainer midEfficiencyPoint={values.mid_efficiency_point}>
        <BenchmarkArrow values={values} />

        {Array.from({ length: BENCHMARK_RECT_COUNT }).map((_, index) => (
          <Fragment key={`benchmark-rectangle-${index}`}>
            <BenchMarkRectangle>
              <BenchMarkWhiteRect />
            </BenchMarkRectangle>
          </Fragment>
        ))}
      </BenchmarkScaleContainer>
    </BenchmarkScaleWrapper>
  )
}
