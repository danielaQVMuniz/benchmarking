export type FormValues = {
  benchmark_description: string
  current_energy_use_label: string
  current_energy_use_unit: string
  current_energy_use_value: number
  highest_energy_use: number
  mid_efficiency_point: number
}

export type RetrofitFields = Retrofit[]

export type Retrofit = {
  id: number
  label: string
  unit: string
  value: number
}

export const INITIAL_RETROFIT_VALUES: RetrofitFields = [
  { id: 1, label: 'Retrofit', unit: 'kWh', value: 50 },
]

export const INITIAL_FORM_VALUES: FormValues = {
  benchmark_description: '',
  current_energy_use_label: 'Current',
  current_energy_use_unit: 'kWh',
  current_energy_use_value: 50,
  highest_energy_use: 100,
  mid_efficiency_point: 50,
}
