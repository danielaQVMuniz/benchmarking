'use client'

import { BenchmarkScale } from '@/components/benchmark-scale/BenchmarkScale'
import { Form } from '@/components/form/Form'
import { FormValues, INITIAL_FORM_VALUES } from '@/constants/form'
import { ChangeEvent, useState } from 'react'
import { PageContainer } from './styled'

export type HandleChangeEventProps = {
  fieldName: keyof FormValues
  evt: ChangeEvent<HTMLInputElement>
  callback: (evt: ChangeEvent<HTMLInputElement>) => void
}

export default function Home() {
  const [values, setValues] = useState<FormValues>(INITIAL_FORM_VALUES)

  const handleFieldChange = ({
    fieldName,
    callback,
    evt,
  }: HandleChangeEventProps) => {
    callback(evt)
    setValues((prev) => ({
      ...prev,
      [fieldName]: evt.currentTarget?.value,
    }))
  }

  return (
    <PageContainer>
      <BenchmarkScale values={values} />

      <Form handleMidEfficiencyChange={handleFieldChange} />
    </PageContainer>
  )
}
