//// checkLoginStatus.ts - utility function to check if user is logged in
import { NavigateFunction } from "react-router";

export const checkLoginStatus = (setPlayer: (data: object) => void) => {
    const isLoggedIn = localStorage.getItem("LOGGED_IN");
    if (isLoggedIn) {
        const playerInfo = JSON.parse(isLoggedIn);
        setPlayer(playerInfo);
    }
}

export const checkPageRefresh = (setPlayer: (data: object) => void, navigate: NavigateFunction, id?: string) => {
    const isLoggedIn = localStorage.getItem("LOGGED_IN");
    if (isLoggedIn) {
        const playerInfo = JSON.parse(isLoggedIn);
        if (playerInfo.id !== Number(id)) {
            navigate('/error');
        }
        setPlayer(playerInfo);
    } else {
        navigate('/error');
    }
}