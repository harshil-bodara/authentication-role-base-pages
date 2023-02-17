import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import routeConfig from '../RouteConfig';

const withAuth =
    (Component: React.FC) =>
        (allowedRole: any) =>
            (props:any) => {

                const isLoggedIn:boolean = true;

                const role = "business";

                const router = useRouter();

                const [isValidRoute, setIsValidRoute] = useState<boolean>(false);

                useEffect(() => {
                    if (!isLoggedIn && !routeConfig.auth[router.pathname]) {
                        setIsValidRoute(false);
                        router.push(routeConfig.auth.default);
                    }
                    else if (
                        isLoggedIn &&
                        (!(allowedRole?.includes(role)) ||
                            !routeConfig[role][router.pathname])
                    ) {
                        setIsValidRoute(false);
                        router.push(routeConfig[role].default);
                    }

                    else setIsValidRoute(true);
                }, []);

                return isValidRoute ? <Component {...props} /> : <h1>Loading...</h1>;
            };

export default withAuth;