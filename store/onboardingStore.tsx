
import { create } from "zustand";

interface CheckedState {
  checkedOne: boolean;
  checkedTwo: boolean;
  checkedThree: boolean;
}

interface CustomerFormType {
  fullname: string
  email: string
  address: string
  address2?: string
  city:string
  province: string
  zipcode: string
  village: string
  taxidcode: string
}
export interface WidgetValue{
  small: number,
  medium: number,
  large: number
}


interface AppState {
  templateCount: number;
  step: number;
  checked: CheckedState;
  message: string;
  widgetState: {
    small: boolean;
    medium: boolean;
    large: boolean;
  };
  statementValue:number;
  widgetSelect: string;
  widgetValue: WidgetValue,
  customerFormVal: CustomerFormType;
  setTemplateCount: (count:number) => void;
  toggleCheck: (name: keyof CheckedState) => void;
  setStep: (step: number) => void;
  setCustomval: ({name, value}: {name:string, value:string}) => void;
  setWidgetState: (name: keyof AppState["widgetState"]) => void;
}

export const useProductsStore = create<AppState>((set) => ({
  templateCount: 0,
  step: 0,
  checked: {
    checkedOne: false,
    checkedTwo: false,
    checkedThree: false,
  },
  customerFormVal:{
    fullname: "",
    email: "",
    address: "",
    address2: "",
    city:"",
    province: "",
    zipcode: "",
    village: "12345",
    taxidcode: " RSSMRA85M01H501Z"
  },
  message: "",
  widgetState: {
    small: false,
    medium: true,
    large: false
  },
  widgetValue: {
    small: 490,
    medium: 1290,
    large: 3290
  },
  statementValue: 500,
  widgetSelect :"medium",
  setTemplateCount: (count) => set((state) => ({ templateCount: count })),

  toggleCheck: (name) =>
    set((state) => ({
      checked: {
        ...state.checked,
        [name]: state.checked[name] ? 0 : 1,
      },
    })),

  setStep: (step) => set({ step }),
  setCustomval: ({name, value}) =>
    set((state) => ({
      customerFormVal: {
        ...state.customerFormVal,
        [name]: value,
      },
    })),
    setWidgetState: (name) =>{
      set(() => ({widgetSelect:name}));
      set((state) => ({
        widgetState: Object.fromEntries(
          Object.entries(state.widgetState).map(([key, value]) => [
            key,
            key === name ? !value : false,
          ])
        ) as typeof state.widgetState,
      }))},
}));