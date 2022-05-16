import React from 'react';

export interface ThemeType {
    buttonType: string
}

const themeContextDefaultValue: ThemeType = {
    buttonType: 'default',
};

export const ThemeContext = React.createContext(themeContextDefaultValue);
