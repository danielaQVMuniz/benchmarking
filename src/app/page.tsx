'use client'

import { useState } from 'react'

import { BenchmarkScale } from '@/components/benchmark-scale/BenchmarkScale'
import {
  FormValues,
  INITIAL_FORM_VALUES,
  INITIAL_RETROFIT_VALUES,
  Retrofit,
  RetrofitFields,
} from '@/constants/form'

import { PageContainer, PageLayoutGrid } from './styled'
import { Header } from '@/components/header/Header'
import { OptionsNav } from '@/components/options-nav/OptionsNav'
import {
  HandleChangeEventProps,
  HandleChangeRetrofitEventProps,
} from '@/types/form'

export default function Home() {
  const [values, setValues] = useState<FormValues>(INITIAL_FORM_VALUES)
  const [retrofitValues, setRetrofitValues] = useState<RetrofitFields>(
    INITIAL_RETROFIT_VALUES
  )

  const handleFieldChange = ({ fieldName, evt }: HandleChangeEventProps) => {
    const updatedValue = evt.currentTarget?.value

    if (
      (fieldName === 'current_energy_use_unit' ||
        fieldName === 'current_energy_use_value' ||
        fieldName === 'mid_efficiency_point' ||
        fieldName === 'low_efficiency_point') &&
      parseInt(updatedValue) > values.highest_energy_use
    ) {
      const newValues = {
        ...values,
        [fieldName]: values.highest_energy_use,
      }
      setValues(newValues)
      return
    }

    const newValues = {
      ...values,
      [fieldName]: evt.currentTarget?.value,
    }
    setValues(newValues)
  }

  const handleRetrofitChange = ({
    evt,
    fieldName,
    id,
  }: HandleChangeRetrofitEventProps) => {
    const newValues = retrofitValues.map((item) => {
      if (item.id !== id) return item

      if (fieldName === 'value' && item.value > values.highest_energy_use) {
        return { ...item, [fieldName]: values.highest_energy_use }
      }

      return { ...item, [fieldName]: evt.currentTarget?.value }
    })

    setRetrofitValues(newValues)
  }

  const handleAddRetrofitField = () => {
    const newId = retrofitValues.length + 1
    /**
     * It innializes the retrofit fields with the default values and a new ID
     * */
    const newRetrofit: Retrofit = {
      ...INITIAL_RETROFIT_VALUES[0],
      id: newId,
    }
    /** Add new retrofit fields to form */
    setRetrofitValues([...retrofitValues, newRetrofit])
  }

  const handleRemoveRetrofitField = (index: number) => {
    const updatedFields: RetrofitFields = [...retrofitValues]
    updatedFields.splice(index, 1)

    setRetrofitValues(updatedFields)
  }

  return (
    <PageContainer>
      <Header />

      <PageLayoutGrid>
        <OptionsNav
          handleAddRetrofitField={handleAddRetrofitField}
          handleChange={handleFieldChange}
          handleRemoveRetrofitField={handleRemoveRetrofitField}
          handleRetrofitChange={handleRetrofitChange}
          retrofitValues={retrofitValues}
          values={values}
        />

        <BenchmarkScale retrofitValues={retrofitValues} values={values} />
      </PageLayoutGrid>
    </PageContainer>
  )
}
