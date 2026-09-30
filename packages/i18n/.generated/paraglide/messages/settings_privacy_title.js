/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Privacy_TitleInputs */

const en_settings_privacy_title = /** @type {(inputs: Settings_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy`)
};

const es_settings_privacy_title = /** @type {(inputs: Settings_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacidad`)
};

const de_settings_privacy_title = /** @type {(inputs: Settings_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privatsphäre`)
};

const fr_settings_privacy_title = /** @type {(inputs: Settings_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confidentialité`)
};

const it_settings_privacy_title = /** @type {(inputs: Settings_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy`)
};

const nl_settings_privacy_title = /** @type {(inputs: Settings_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy`)
};

const pl_settings_privacy_title = /** @type {(inputs: Settings_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prywatność`)
};

const pt_settings_privacy_title = /** @type {(inputs: Settings_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacidade`)
};

const ru_settings_privacy_title = /** @type {(inputs: Settings_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Приватность`)
};

const sv_settings_privacy_title = /** @type {(inputs: Settings_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integritet`)
};

const tr_settings_privacy_title = /** @type {(inputs: Settings_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizlilik`)
};

const zh_settings_privacy_title = /** @type {(inputs: Settings_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐私`)
};

const ja_settings_privacy_title = /** @type {(inputs: Settings_Privacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プライバシー`)
};

/**
* | output |
* | --- |
* | "Privacy" |
*
* @param {Settings_Privacy_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_privacy_title = /** @type {((inputs?: Settings_Privacy_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Privacy_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_privacy_title(inputs)
	if (locale === "de") return de_settings_privacy_title(inputs)
	if (locale === "fr") return fr_settings_privacy_title(inputs)
	if (locale === "it") return it_settings_privacy_title(inputs)
	if (locale === "nl") return nl_settings_privacy_title(inputs)
	if (locale === "pl") return pl_settings_privacy_title(inputs)
	if (locale === "pt") return pt_settings_privacy_title(inputs)
	if (locale === "ru") return ru_settings_privacy_title(inputs)
	if (locale === "sv") return sv_settings_privacy_title(inputs)
	if (locale === "tr") return tr_settings_privacy_title(inputs)
	if (locale === "zh") return zh_settings_privacy_title(inputs)
	if (locale === "ja") return ja_settings_privacy_title(inputs)
	return en_settings_privacy_title(inputs)
});
