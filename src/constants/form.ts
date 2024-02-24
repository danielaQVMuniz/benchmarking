export type FormValues = {
  benchmark_description: string
  current_energy_use_unit?: string
  current_energy_use_label?: string
  current_energy_use_value: number
  highest_ennergy_use: number
  mid_efficiency_point: number
  retrofit_label1?: string
  retrofit_label2?: string
  retrofit_value?: number
}

export const INITIAL_FORM_VALUES: FormValues = {
  benchmark_description: '',
  current_energy_use_unit: 'kWh',
  current_energy_use_label: 'Current',
  current_energy_use_value: 50,
  highest_ennergy_use: 100,
  mid_efficiency_point: 50,
  retrofit_label1: '',
  retrofit_label2: '',
  retrofit_value: 0,
}
