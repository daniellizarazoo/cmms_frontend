import { create } from "zustand";
// import { persist,createJSONStorage } from "zustand/middleware";

export const useUserStore = create(
    (set) => ({
        userData: {},
        setUserData: (newUserData) => {
            set({ userData: newUserData });
        },
        clearUserData: (navigate) => {
            set({userData:null});
            localStorage.removeItem('userData'); // Remove from local storage
            sessionStorage.removeItem('userData'); // Remove from session storage
            navigate('/'); // Navigate to the login page
        }
    })
);