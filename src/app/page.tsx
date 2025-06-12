'use client'

import MenuIcon from '@mui/icons-material/Menu'
import { Button, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import { ChangeEvent, useState } from 'react'

import { BenchmarkScale } from '@/components/benchmark-scale/BenchmarkScale'
import { Form } from '@/components/form/Form'
import {
  FormValues,
  INITIAL_FORM_VALUES,
  INITIAL_RETROFIT_VALUES,
  Retrofit,
  RetrofitFields,
} from '@/constants/form'

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

  const handleRemoveRetrofitField = () => {
    const updatedFields: RetrofitFields = [...retrofitValues]
    updatedFields.pop()

    setRetrofitValues(updatedFields)
  }

  return (
    <PageContainer>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Energy Benchmarking
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

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
