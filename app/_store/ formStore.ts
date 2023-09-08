import {create} from "zustand";

interface FormState {
  payload: { [key: string]: string },
  setValue: (key: string, value: string) => void,
}

const formStore = create<FormState>((set) => ({
  payload: {},
  setValue: (key: string, value: string) => {
    set((state) => ({
        payload: {...state.payload, [key]: value}
    }))
  }
}))
export default formStore;
