export type FormState =
  | {
      errors?: {
        name?: string[] 
        email?: string[] 
        password?: string[] 
        confirmPassword?: string[]
      }
      message?: string 
    }
  | undefined

export type FormValue = 
  |  {
        usename?: string[] | ""
        email?: string[] | ""
        password?: string[] | ""
        confirmPassword?: string[] | ""
    }
  | undefined

export type CustomerFormState = 
    | {
      errors?: {
        fullname?: string[] | ""
        email?: string[] | ""
        address?: string[] | ""
        address2?: string[] | ""
        city?:string[] | ""
        province?: string[] | ""
        zipcode?: string[] | ""
        village?: string[] | ""
        taxidcode?: string[] | ""
      }
    }
  | undefined


export type SessionPayload = {
  userId: string;
  // iat: number;
  expiresAt: Date;
};