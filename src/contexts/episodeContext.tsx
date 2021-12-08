import React, { useContext } from "react";

export interface EpisodeContextDefinition {
    currentEpisodeIndex: number;
    setCurrentEpisodeIndex: (index: number) => any;
}

export const NavigationContext = React.createContext<EpisodeContextDefinition>(null);

export const useEpisodeContext = () => useContext(NavigationContext);

interface Props {
    navigationContext: EpisodeContextDefinition;
    children: any;
}

export default function EpisodeContextProvider({ navigationContext, children }: Props) {

    return (
        <NavigationContext.Provider value={navigationContext}>
            {children}
        </NavigationContext.Provider>
    );

}