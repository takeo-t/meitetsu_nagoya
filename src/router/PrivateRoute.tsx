import { useContext, ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

interface PrivateRouteProps {
  children: ReactElement;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { userId } = useContext(AuthContext);
  
  return userId ? children : <Navigate to="/login" replace />;
};

// import { useContext, ReactElement, ReactNode } from "react";
// import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";

// interface PrivateRouteProps {
//   children: ReactElement;
// }

// // export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
// //   const { userId } = useContext(AuthContext);
// //   const location = useLocation();

// //   return userId ? (
// //     <Route path={location.pathname} element={children} />
// //   ) : (
// //     <Navigate to="/Login" />
// //   );
// // };
// export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
//     const { userId } = useContext(AuthContext);

//     return userId ? children : <Navigate to="/login" replace />;
//   };
