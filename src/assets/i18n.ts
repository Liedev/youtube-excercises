import i18n from "i18n-js";

import * as fr from "./translations/fr.json";
import * as en from "./translations/en.json";
import * as nl from "./translations/nl.json";
import { Platform, NativeModules } from "react-native";

const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules.I18nManager.localeIdentifier;

i18n.locale = deviceLanguage.replace(/_/, '-') || "nl"
Platform.OS === 'ios'
  ? NativeModules.SettingsManager.settings.AppleLocale ||
    NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
  : NativeModules.I18nManager.localeIdentifier;;
i18n.fallbacks = true;
i18n.translations = { en, nl, fr};

export default i18n;