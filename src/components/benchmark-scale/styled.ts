import styled from 'styled-components'

const BENCHMARK_RECT_WIDTH = '8rem'
const BENCHMARK_RECT_HEIGHT = '6rem'
const BENCHMARK_RECT_BODER = '0.3rem'
const BENCHMARK_SCALE_GAP = '0.5rem'

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BodyContainer = styled.div`
  font-size: 4rem;
  display: flex;
  align-items: flex-end;
  width: fit-content;
  gap: 1rem;

  & > p {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`

export const MaxEnergyLabel = styled.p<{ $unit: string }>(
  ({ $unit }) => `
  position: relative;
  
  &::after {
    content: '${$unit}';
    font-size: 1.8rem;
    margin-left: 0.2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`
)

export const BenchMarkDescription = styled.h2`
  font-size: 3rem;
  margin-top: 5rem;
  text-align: center;
  letter-spacing: 0.1rem;
`

/** SCALE */
export const BenchmarkScaleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const BenchmarkScaleContainer = styled.div<{
  $midEfficiencyPoint: number
  $lowEfficiencyPoint: number
}>(
  ({ $midEfficiencyPoint, $lowEfficiencyPoint }) => `
  align-items: center;
  background: rgb(0, 166, 82);
  background: linear-gradient(
    90deg,
    rgba(0, 166, 82, 1) 0%,
    rgba(254, 242, 1, 1) ${$midEfficiencyPoint}%,
    rgba(253, 184, 18, 1) ${$lowEfficiencyPoint}%,
    rgba(237, 28, 36, 1) 100%
  );
  display: flex;
  gap: ${BENCHMARK_SCALE_GAP};
  justify-content: center;
  margin-top: 10rem;
  position: relative;
  width: fit-content;
`
)

export const BenchMarkRectangle = styled.div`
  background-color: transparent;
  border: ${BENCHMARK_RECT_BODER} solid black;
  height: 6rem;
  position: relative;
  width: ${BENCHMARK_RECT_WIDTH};
`

export const BenchMarkWhiteRect = styled.div`
  background-color: white;
  height: ${BENCHMARK_RECT_HEIGHT};
  position: absolute;
  right: calc(-${BENCHMARK_RECT_BODER} * 2 - 0.2rem);
  bottom: -${BENCHMARK_RECT_BODER};
  width: ${BENCHMARK_SCALE_GAP};
`

/** CURRENT ENERGY */
const arrowContainer = `
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  transform: translateX(-50%);
`

export const CurrentEnergyArrowContainer = styled.div<{
  $currentEnergyValue: number
  $highestEnergyUsed: number
}>(
  ({ $currentEnergyValue, $highestEnergyUsed }) => `
  ${arrowContainer}
  bottom: calc(${BENCHMARK_RECT_HEIGHT} - 1rem);
  left: ${($currentEnergyValue * 100) / $highestEnergyUsed}%;
  `
)

export const CurrentEnergyValue = styled.p<{ $label?: string }>(
  ({ $label }) => `
  font-size: 4rem;
  position: relative;

  &::after {
    content: "${$label}";
    font-size: 1.8rem;
    margin-left: 0.5rem;
    margin-top: 50%;
    position: absolute;
    transform: translateY(-50%);
    width: 12rem;
  }
`
)

export const CurrentEnergyLabel = styled.p`
  font-size: 1.8rem;
  margin-bottom: -0.5rem;
`

/**
 * RETROFIT
 * */

export const RetrofitArrowContainer = styled.div<{
  $retrofitValue: number
  $highestEnergyUsed: number
}>(
  ({ $highestEnergyUsed, $retrofitValue }) => `
  ${arrowContainer}
  top: calc(${BENCHMARK_RECT_HEIGHT} - 1rem);
  left: ${($retrofitValue * 100) / $highestEnergyUsed}%;
  
  & img {
    transform: rotate(180deg);
  }
`
)

export const RetrofitValue = styled.p`
  font-size: 3rem;
  margin-top: -0.5rem;
`

export const RetrofitLabel = styled.p`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  max-width: 8rem;
  text-align: center;
`
