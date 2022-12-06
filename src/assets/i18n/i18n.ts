import i18n from "i18n-js";
import * as en from "./translations/en.json";
import * as nl from "./translations/nl.json";
import { Platform, NativeModules } from "react-native";

const getLocale = () => {
    const deviceLanguage =
        Platform.OS === "ios"
            ? NativeModules.SettingsManager.settings.AppleLocale ||
            NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
            : NativeModules.I18nManager.localeIdentifier;

    return deviceLanguage.replace(/_/, "-");
};

const language = getLocale();

i18n.locale = language;
i18n.fallbacks = true;
i18n.translations = { en, nl };

export default i18n;