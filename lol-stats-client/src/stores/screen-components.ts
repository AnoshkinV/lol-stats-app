import { lazy } from "react";



export const screenComponents = {
    home: lazy(() => import("../screens/home-screen/home-screen")),
    summoner: lazy(() => import("../screens/summoner-screen/summoner-screen"))
}



export type ScreenType = keyof typeof screenComponents;