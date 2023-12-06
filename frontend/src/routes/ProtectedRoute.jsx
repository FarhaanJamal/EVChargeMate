import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { authContext } from "../context/AuthContext"

const ProtectedRoute = ({children}) => {
  const {token} = useContext(authContext)
  const accessibleRoute = token ? children : <Navigate to='/login'/>
  return accessibleRoute
}

export default ProtectedRoute