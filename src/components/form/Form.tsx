import {
  HandleChangeEventProps,
  HandleChangeRetrofitEventProps,
} from '@/app/page'
import { FormValues, RetrofitFields } from '@/constants/form'
import { FC } from 'react'
import { InputField } from '../input-field/InputField'
import {
  AddRetrofitArrowButton,
  FormContainer,
  RetrofitFieldset,
} from './styled'

type FormProps = {
  /**
   * Adds a new retrofit field to the form
   * This action will automatically add a new retrofir arrow to the benchmark
   */
  handleAddRetrofitField: () => void
  /**
   * Handles the state of all the input fields except the retrofit ones
   */
  handleChange: (values: HandleChangeEventProps) => void
  /**
   * Handles removing the last retrofit field
   */
  handleRemoveRetrofitField: () => void
  /**
   * Handles the state of the retrofit fields
   */
  handleRetrofitChange: (values: HandleChangeRetrofitEventProps) => void
  /**
   * Values of all retrofit fields
   */
  retrofitValues: RetrofitFields
  /**
   * Values of all benchmark fields except retrofit
   */
  values: FormValues
}

export const Form: FC<FormProps> = ({
  handleAddRetrofitField,
  handleChange,
  handleRemoveRetrofitField,
  handleRetrofitChange,
  retrofitValues,
  values,
}) => {
  return (
    <FormContainer>
      <fieldset>
        <legend>Benchmark Dynamic Values</legend>

        <InputField
          id="benchmark_description"
          label="Benchmark Description"
          onChange={(evt) =>
            handleChange({ evt, fieldName: 'benchmark_description' })
          }
          type="text"
          value={values.benchmark_description}
        />

        <InputField
          id="mid_efficiency_point"
          label="Mid Efficiency"
          max={values.highest_energy_use}
          min={0}
          onChange={(evt) =>
            handleChange({ evt, fieldName: 'mid_efficiency_point' })
          }
          type="number"
          value={values.mid_efficiency_point}
        />

        <InputField
          id="highest_energy_use"
          label="Highest Energy Use"
          onChange={(evt) =>
            handleChange({ evt, fieldName: 'highest_energy_use' })
          }
          type="number"
          value={values.highest_energy_use}
        />

        <InputField
          id="current_energy_use_value"
          label="Current Energy Use"
          max={100}
          min={0}
          onChange={(evt) =>
            handleChange({ evt, fieldName: 'current_energy_use_value' })
          }
          type="number"
          value={values.current_energy_use_value}
        />

        <InputField
          id="current_energy_use_unit"
          label="Current Energy Use Unit"
          onChange={(evt) =>
            handleChange({ evt, fieldName: 'current_energy_use_unit' })
          }
          type="text"
          value={values.current_energy_use_unit}
        />

        <InputField
          id="current_energy_use_label"
          label="Current Energy Use Label"
          onChange={(evt) =>
            handleChange({ evt, fieldName: 'current_energy_use_label' })
          }
          type="text"
          value={values.current_energy_use_label}
        />
      </fieldset>

      <fieldset>
        <legend>Retrofit Values</legend>

        <AddRetrofitArrowButton type="button" onClick={handleAddRetrofitField}>
          Add Retrofit Option
        </AddRetrofitArrowButton>

        {retrofitValues.length > 1 && (
          <AddRetrofitArrowButton
            type="button"
            onClick={handleRemoveRetrofitField}
          >
            Remove Retrofit Option
          </AddRetrofitArrowButton>
        )}

        {retrofitValues.map((item) => {
          const valueId = `retrofit_value-${item.id}`
          const unitId = `retrofit_unit-${item.id}`
          const labelId = `retrofit_label-${item.id}`

          return (
            <RetrofitFieldset>
              <legend>Retrofit Option({item.id})</legend>
              <InputField
                id={valueId}
                label="Retrofit Value"
                max={values.highest_energy_use}
                min={0}
                onChange={(evt) =>
                  handleRetrofitChange({ evt, fieldName: 'value', id: item.id })
                }
                type="number"
                value={item.value}
              />

              <InputField
                id={unitId}
                label="Retrofit Unit"
                onChange={(evt) =>
                  handleRetrofitChange({ evt, fieldName: 'unit', id: item.id })
                }
                type="text"
                value={item.unit}
              />

              <InputField
                id={labelId}
                label="Retrofit Label"
                onChange={(evt) =>
                  handleRetrofitChange({ evt, fieldName: 'label', id: item.id })
                }
                type="text"
                value={item.label}
              />
            </RetrofitFieldset>
          )
        })}
      </fieldset>
    </FormContainer>
  )
}
