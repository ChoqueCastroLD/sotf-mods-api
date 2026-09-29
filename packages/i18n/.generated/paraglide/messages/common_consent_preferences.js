/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Consent_PreferencesInputs */

const en_common_consent_preferences = /** @type {(inputs: Common_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferences`)
};

const es_common_consent_preferences = /** @type {(inputs: Common_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferencias`)
};

const de_common_consent_preferences = /** @type {(inputs: Common_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einstellungen`)
};

const fr_common_consent_preferences = /** @type {(inputs: Common_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Préférences`)
};

const it_common_consent_preferences = /** @type {(inputs: Common_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferenze`)
};

const nl_common_consent_preferences = /** @type {(inputs: Common_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorkeuren`)
};

const pl_common_consent_preferences = /** @type {(inputs: Common_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferencje`)
};

const pt_common_consent_preferences = /** @type {(inputs: Common_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferências`)
};

const ru_common_consent_preferences = /** @type {(inputs: Common_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настроить`)
};

const sv_common_consent_preferences = /** @type {(inputs: Common_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inställningar`)
};

const tr_common_consent_preferences = /** @type {(inputs: Common_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tercihler`)
};

const zh_common_consent_preferences = /** @type {(inputs: Common_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`偏好设置`)
};

const ja_common_consent_preferences = /** @type {(inputs: Common_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細設定`)
};

/**
* | output |
* | --- |
* | "Preferences" |
*
* @param {Common_Consent_PreferencesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_consent_preferences = /** @type {((inputs?: Common_Consent_PreferencesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Consent_PreferencesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_consent_preferences(inputs)
	if (locale === "de") return de_common_consent_preferences(inputs)
	if (locale === "fr") return fr_common_consent_preferences(inputs)
	if (locale === "it") return it_common_consent_preferences(inputs)
	if (locale === "nl") return nl_common_consent_preferences(inputs)
	if (locale === "pl") return pl_common_consent_preferences(inputs)
	if (locale === "pt") return pt_common_consent_preferences(inputs)
	if (locale === "ru") return ru_common_consent_preferences(inputs)
	if (locale === "sv") return sv_common_consent_preferences(inputs)
	if (locale === "tr") return tr_common_consent_preferences(inputs)
	if (locale === "zh") return zh_common_consent_preferences(inputs)
	if (locale === "ja") return ja_common_consent_preferences(inputs)
	return en_common_consent_preferences(inputs)
});
