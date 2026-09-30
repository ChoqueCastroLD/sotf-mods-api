/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Consent_PreferencesInputs */

const en_ui_domain_consent_preferences = /** @type {(inputs: Ui_Domain_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferences`)
};

const es_ui_domain_consent_preferences = /** @type {(inputs: Ui_Domain_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferencias`)
};

const de_ui_domain_consent_preferences = /** @type {(inputs: Ui_Domain_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einstellungen`)
};

const fr_ui_domain_consent_preferences = /** @type {(inputs: Ui_Domain_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Préférences`)
};

const it_ui_domain_consent_preferences = /** @type {(inputs: Ui_Domain_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferenze`)
};

const nl_ui_domain_consent_preferences = /** @type {(inputs: Ui_Domain_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorkeuren`)
};

const pl_ui_domain_consent_preferences = /** @type {(inputs: Ui_Domain_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferencje`)
};

const pt_ui_domain_consent_preferences = /** @type {(inputs: Ui_Domain_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferências`)
};

const ru_ui_domain_consent_preferences = /** @type {(inputs: Ui_Domain_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настроить`)
};

const sv_ui_domain_consent_preferences = /** @type {(inputs: Ui_Domain_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inställningar`)
};

const tr_ui_domain_consent_preferences = /** @type {(inputs: Ui_Domain_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tercihler`)
};

const zh_ui_domain_consent_preferences = /** @type {(inputs: Ui_Domain_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`偏好设置`)
};

const ja_ui_domain_consent_preferences = /** @type {(inputs: Ui_Domain_Consent_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細設定`)
};

/**
* | output |
* | --- |
* | "Preferences" |
*
* @param {Ui_Domain_Consent_PreferencesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_consent_preferences = /** @type {((inputs?: Ui_Domain_Consent_PreferencesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Consent_PreferencesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_consent_preferences(inputs)
	if (locale === "de") return de_ui_domain_consent_preferences(inputs)
	if (locale === "fr") return fr_ui_domain_consent_preferences(inputs)
	if (locale === "it") return it_ui_domain_consent_preferences(inputs)
	if (locale === "nl") return nl_ui_domain_consent_preferences(inputs)
	if (locale === "pl") return pl_ui_domain_consent_preferences(inputs)
	if (locale === "pt") return pt_ui_domain_consent_preferences(inputs)
	if (locale === "ru") return ru_ui_domain_consent_preferences(inputs)
	if (locale === "sv") return sv_ui_domain_consent_preferences(inputs)
	if (locale === "tr") return tr_ui_domain_consent_preferences(inputs)
	if (locale === "zh") return zh_ui_domain_consent_preferences(inputs)
	if (locale === "ja") return ja_ui_domain_consent_preferences(inputs)
	return en_ui_domain_consent_preferences(inputs)
});
