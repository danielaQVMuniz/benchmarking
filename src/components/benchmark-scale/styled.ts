import styled from 'styled-components'

const BENCHMARK_RECT_WIDTH = '80px'
const BENCHMARK_RECT_HEIGHT = '60px'
const BENCHMARK_RECT_BODER = '3px'
const BENCHMARK_SCALE_GAP = '5px'

export const BodyWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 110px;
`

export const BodyContainer = styled.div`
  font-size: 40px;
  display: flex;
  align-items: flex-end;
  width: fit-content;
  gap: 10px;

  & > p {
    font-size: 30px;
    margin-bottom: 10px;
  }
`

export const MaxEnergyLabel = styled.p<{ $unit: string }>(
  ({ $unit }) => `
  position: relative;
  
  &::after {
    content: '${$unit}';
    font-size: 18px;
    margin-left: 2px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`
)

export const BenchMarkDescription = styled.h2`
  font-size: 30px;
  text-align: center;
  letter-spacing: 1px;
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
  margin-top: 100px;
  position: relative;
  width: fit-content;
`
)

export const BenchMarkRectangle = styled.div`
  background-color: transparent;
  border: ${BENCHMARK_RECT_BODER} solid black;
  height: 60px;
  position: relative;
  width: ${BENCHMARK_RECT_WIDTH};
`

export const BenchMarkWhiteRect = styled.div`
  background-color: white;
  height: ${BENCHMARK_RECT_HEIGHT};
  position: absolute;
  right: calc(-${BENCHMARK_RECT_BODER} * 2 - 2px);
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
  bottom: calc(${BENCHMARK_RECT_HEIGHT} - 10px);
  left: ${($currentEnergyValue * 100) / $highestEnergyUsed}%;
  `
)

export const CurrentEnergyValue = styled.p<{ $label?: string }>(
  ({ $label }) => `
  font-size: 35px;
  line-height: 1;
  margin-bottom: 4px;
  position: relative;

  &::after {
    content: "${$label}";
    font-size: 18px;
    margin-left: 2px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 135px;
  }
`
)

export const CurrentEnergyLabel = styled.p`
  font-size: 18px;
  margin-bottom: -5px;
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
  top: calc(${BENCHMARK_RECT_HEIGHT} - 10px);
  left: ${($retrofitValue * 100) / $highestEnergyUsed}%;
  
  & img {
    transform: rotate(180deg);
  }
`
)

export const RetrofitValue = styled.p`
  font-size: 30px;
  line-height: 1;
  margin-top: -5px;
`

export const RetrofitLabel = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  max-width: 80px;
  text-align: center;
  line-height: 1;
`
