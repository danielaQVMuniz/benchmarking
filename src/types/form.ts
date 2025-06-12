import { FormValues, RetrofitFields } from '@/constants/form'
import { ChangeEvent } from 'react'

export type HandleChangeEventProps = {
  evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  fieldName: keyof FormValues
}

export type HandleChangeRetrofitEventProps = {
  evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  fieldName: string
  id: number
}

export type FormProps = {
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
