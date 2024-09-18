import { createSlice } from "@reduxjs/toolkit"
import i18n from 'i18next';

interface LanguageState {
    language: string
}

const initialState : LanguageState = {
    language: 'en'
}

const languageSlice =  createSlice ({
    name: 'language',
    initialState,
    reducers: {
        toggleLanguage: (state) => {
            const newLang = state.language === 'en' ? 'fr' : 'en';
            state.language = newLang
            i18n.changeLanguage(newLang)
        }
    }
})

export const { toggleLanguage } = languageSlice.actions
export default languageSlice.reducer