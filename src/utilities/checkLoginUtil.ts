//// checkLoginUtil.ts - utility functions for checking user login status
import { NavigateFunction } from "react-router";
import { initPlayer } from "../features/player";
import { AppDispatch } from "./reduxTypesUtil";

export const checkLoginStatus = (dispatch: AppDispatch) => {
    const isLoggedIn = localStorage.getItem("LOGGED_IN");
    if (isLoggedIn) {
        const playerInfo = JSON.parse(isLoggedIn);
        dispatch(initPlayer(playerInfo));
    }
}

// also catches brute-force navigation via player ID in URL
export const checkPageRefresh = (dispatch: AppDispatch, navigate: NavigateFunction, id?: string) => {
    const isLoggedIn = localStorage.getItem("LOGGED_IN");
    if (isLoggedIn) {
        const playerInfo = JSON.parse(isLoggedIn);
        if (playerInfo.id !== Number(id)) {
            navigate('/error');
        }
        dispatch(initPlayer(playerInfo));
    } else {
        navigate('/error');
    }
}