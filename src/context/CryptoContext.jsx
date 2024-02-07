import { createContext } from "react"

// create context object
export const CryptoContext = createContext({}); 

// create provider component
export const CryptoProvider = ({children}) => {
  return (
    
    <CryptoContext.Provider value={{}}>
      {children}
    </CryptoContext.Provider>
  )
}