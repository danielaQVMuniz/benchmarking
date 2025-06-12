import { FormProps } from '@/types/form'
import CardContent from '@mui/material/CardContent'
import { ChangeEvent, FC } from 'react'

import { CustomTextField, FormCard, FormDynamicValuesWrapper } from './styled'

type FormDynamicValuesProps = Pick<FormProps, 'handleChange' | 'values'>

export const FormDynamicValues: FC<FormDynamicValuesProps> = ({
  handleChange,
  values,
}) => {
  return (
    <FormDynamicValuesWrapper>
      <FormCard
        variant="outlined"
        sx={{ background: 'white', borderRadius: '8px' }}
      >
        <CardContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <CustomTextField
            id="benchmark_description"
            label="Benchmark Description"
            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
              handleChange({ evt, fieldName: 'benchmark_description' })
            }
            value={values.benchmark_description}
          />

          <CustomTextField
            id="mid_efficiency_point"
            label="Mid Efficiency Mark (%)"
            type="number"
            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
              handleChange({ evt, fieldName: 'mid_efficiency_point' })
            }
            inputProps={{ min: 0, max: values.highest_energy_use }}
            value={values.mid_efficiency_point}
          />

          <CustomTextField
            id="low_efficiency_point"
            label="Low Efficiency Mark (%)"
            inputProps={{ min: 0, max: values.highest_energy_use }}
            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
              handleChange({ evt, fieldName: 'low_efficiency_point' })
            }
            type="number"
            value={values.low_efficiency_point}
          />

          <CustomTextField
            id="highest_energy_use"
            label="Highest Energy Use"
            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
              handleChange({ evt, fieldName: 'highest_energy_use' })
            }
            type="number"
            value={values.highest_energy_use}
          />

          <CustomTextField
            id="current_energy_use_value"
            label="Current Energy Use"
            inputProps={{ min: 0, max: 100 }}
            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
              handleChange({ evt, fieldName: 'current_energy_use_value' })
            }
            type="number"
            value={values.current_energy_use_value}
          />

          <CustomTextField
            id="current_energy_use_unit"
            label="Current Energy Use Unit"
            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
              handleChange({ evt, fieldName: 'current_energy_use_unit' })
            }
            type="text"
            value={values.current_energy_use_unit}
          />

          <CustomTextField
            id="current_energy_use_label"
            label="Current Energy Use Label"
            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
              handleChange({ evt, fieldName: 'current_energy_use_label' })
            }
            type="text"
            value={values.current_energy_use_label}
          />
        </CardContent>
      </FormCard>
    </FormDynamicValuesWrapper>
  )
}
