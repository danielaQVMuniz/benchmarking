import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { ChangeEvent, FC } from 'react'

import { CustomTextField, FormCard } from './styled'
import DeleteIcon from '@mui/icons-material/Delete'
import { FormProps } from '@/types/form'
import { Add } from '@mui/icons-material'
import { IconButton } from '@mui/material'

type FormRetrofitValuesProps = Pick<
  FormProps,
  | 'handleAddRetrofitField'
  | 'retrofitValues'
  | 'handleRemoveRetrofitField'
  | 'handleRetrofitChange'
  | 'values'
>

export const FormRetrofitValues: FC<FormRetrofitValuesProps> = ({
  handleAddRetrofitField,
  handleRemoveRetrofitField,
  retrofitValues,
  handleRetrofitChange,
  values,
}) => {
  return (
    <section>
      <Button
        variant="contained"
        onClick={handleAddRetrofitField}
        endIcon={<Add />}
        sx={{ width: '100%', marginBottom: '20px' }}
      >
        Add Option
      </Button>

      <Stack flexDirection="column" gap={2}>
        {retrofitValues.map((item, index) => {
          const valueId = `retrofit_value-${item.id}`
          const unitId = `retrofit_unit-${item.id}`
          const labelId = `retrofit_label-${item.id}`

          return (
            <FormCard
              variant="outlined"
              key={`retrofit-values-${index}`}
              sx={{ background: 'white', borderRadius: '8px' }}
            >
              <CardContent
                sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                <CustomTextField
                  id={valueId}
                  label="Retrofit Value"
                  inputProps={{ min: 0, max: values.highest_energy_use }}
                  onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                    handleRetrofitChange({
                      evt,
                      fieldName: 'value',
                      id: item.id,
                    })
                  }
                  type="number"
                  value={item.value}
                />

                <CustomTextField
                  id={unitId}
                  label="Retrofit Unit"
                  onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                    handleRetrofitChange({
                      evt,
                      fieldName: 'unit',
                      id: item.id,
                    })
                  }
                  value={item.unit}
                />

                <CustomTextField
                  id={labelId}
                  label="Retrofit Label"
                  onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                    handleRetrofitChange({
                      evt,
                      fieldName: 'label',
                      id: item.id,
                    })
                  }
                  value={item.label}
                />

                <Stack display="flex" alignItems="flex-end">
                  <IconButton
                    aria-label="Delete option"
                    color="error"
                    size="small"
                    onClick={() => handleRemoveRetrofitField(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </CardContent>
            </FormCard>
          )
        })}
      </Stack>
    </section>
  )
}
