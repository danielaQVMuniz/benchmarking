'use client'

import { BenchmarkScale } from '@/components/benchmark-scale/BenchmarkScale'
import { Form } from '@/components/form/Form'
import {
  FormValues,
  INITIAL_FORM_VALUES,
  INITIAL_RETROFIT_VALUES,
  Retrofit,
  RetrofitFields,
} from '@/constants/form'
import { ChangeEvent, useState } from 'react'
import { PageContainer } from './styled'

export type HandleChangeEventProps = {
  evt: ChangeEvent<HTMLInputElement>
  fieldName: keyof FormValues
}

export type HandleChangeRetrofitEventProps = {
  evt: ChangeEvent<HTMLInputElement>
  fieldName: string
  id: number
}

export default function Home() {
  const [values, setValues] = useState<FormValues>(INITIAL_FORM_VALUES)
  const [retrofitValues, setRetrofitValues] = useState<RetrofitFields>(
    INITIAL_RETROFIT_VALUES
  )

  const handleFieldChange = ({ fieldName, evt }: HandleChangeEventProps) => {
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

  const handleRemoveRetrofitField = () => {
    const updatedFields: RetrofitFields = [...retrofitValues]
    updatedFields.pop()

    setRetrofitValues(updatedFields)
  }

  return (
    <PageContainer>
      <BenchmarkScale retrofitValues={retrofitValues} values={values} />

      <Form
        handleAddRetrofitField={handleAddRetrofitField}
        handleChange={handleFieldChange}
        handleRemoveRetrofitField={handleRemoveRetrofitField}
        handleRetrofitChange={handleRetrofitChange}
        retrofitValues={retrofitValues}
        values={values}
      />
    </PageContainer>
  )
}
