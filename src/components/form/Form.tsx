import { HandleChangeEventProps } from '@/app/page'
import { FormValues, INITIAL_FORM_VALUES } from '@/constants/form'
import { Formik } from 'formik'
import { ChangeEvent, FC } from 'react'
import { InputField } from '../input-field/InputField'
import { FormContainer } from './styled'

type FormProps = {
  handleMidEfficiencyChange: (values: HandleChangeEventProps) => void
}

export const Form: FC<FormProps> = ({ handleMidEfficiencyChange }) => {
  const handleFormSubmit = () => {}

  const handleValidate = (values: FormValues) => {
    const errors: any = {}

    if (values.mid_efficiency_point > 100) {
      errors.mid_efficiency_point = 'Invalid value'
    }

    return errors
  }

  return (
    <Formik
      initialValues={INITIAL_FORM_VALUES}
      onSubmit={handleFormSubmit}
      validate={handleValidate}
      validateOnBlur
      validateOnChange
    >
      {({ handleChange, values, errors }) => (
        <FormContainer>
          <fieldset>
            <legend>Benchmark Dynamic Values</legend>

            <InputField
              id="benchmark_description"
              label="Benchmark Description"
              onChange={handleChange}
              type="text"
              value={values.benchmark_description}
            />

            <InputField
              hasError={!!errors.mid_efficiency_point}
              max={100}
              min={0}
              value={values.mid_efficiency_point}
              type="number"
              onChange={(evt) =>
                handleMidEfficiencyChange({
                  callback: handleChange,
                  evt,
                  fieldName: 'mid_efficiency_point',
                })
              }
              label="Mid Eddiciency"
              id="mid_efficiency_point"
            />

            <InputField
              id="highest_ennergy_use"
              label="Highest Eddiciency Use"
              onChange={handleChange}
              type="number"
              value={values.highest_ennergy_use}
            />

            <InputField
              id="highest_ennergy_use"
              label="Retrofit Value"
              onChange={(evt) =>
                handleMidEfficiencyChange({
                  callback: handleChange,
                  evt,
                  fieldName: 'highest_ennergy_use',
                })
              }
              type="number"
              value={values.retrofit_value}
            />

            <InputField
              id="current_energy_use_value"
              label="Current Energy Use"
              max={100}
              min={0}
              onChange={(evt) =>
                handleMidEfficiencyChange({
                  callback: handleChange,
                  evt,
                  fieldName: 'current_energy_use_value',
                })
              }
              type="number"
              value={values.current_energy_use_value}
            />

            <InputField
              id="current_energy_use_unit"
              label="Current Energy Use Unit"
              onChange={(evt) =>
                handleMidEfficiencyChange({
                  callback: handleChange,
                  evt,
                  fieldName: 'current_energy_use_unit',
                })
              }
              type="text"
              value={values.current_energy_use_unit}
            />

            <InputField
              id="current_energy_use_label"
              label="Current Energy Use Label"
              onChange={(evt) =>
                handleMidEfficiencyChange({
                  callback: handleChange,
                  evt,
                  fieldName: 'current_energy_use_label',
                })
              }
              type="text"
              value={values.current_energy_use_label}
            />
          </fieldset>
        </FormContainer>
      )}
    </Formik>
  )
}
