import { useWeb3React } from "@web3-react/core";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute(props: { children: React.ReactNode }) {

    const { children } = props
    const { account } = useWeb3React();
    const location = useLocation()
    
    return account ? (
        <>{children}</>
      ) : (
        <Navigate
          replace={true}
          to={location.pathname.match(/^\/[^/]+/)[0] + '/login'}
          state={{ from: location.pathname }}
        />
      )
}

export default PrivateRoute;
