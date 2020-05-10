import axios from 'axios'
import { StateInfo } from '../interfaces/Corona'

const api = axios.create({
  baseURL: "https://disease.sh/v2"
})

export async function fetchCorona(): Promise<Array<StateInfo>> {
  try {
    const { data } = await api.get<StateInfo[]>("/states")
    return data
  } catch (err) {
    throw err
  }
}