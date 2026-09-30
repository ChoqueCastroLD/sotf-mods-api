/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Appearance_TitleInputs */

const en_settings_appearance_title = /** @type {(inputs: Settings_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appearance`)
};

const es_settings_appearance_title = /** @type {(inputs: Settings_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apariencia`)
};

const de_settings_appearance_title = /** @type {(inputs: Settings_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Darstellung`)
};

const fr_settings_appearance_title = /** @type {(inputs: Settings_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apparence`)
};

const it_settings_appearance_title = /** @type {(inputs: Settings_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aspetto`)
};

const nl_settings_appearance_title = /** @type {(inputs: Settings_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weergave`)
};

const pl_settings_appearance_title = /** @type {(inputs: Settings_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wygląd`)
};

const pt_settings_appearance_title = /** @type {(inputs: Settings_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aparência`)
};

const ru_settings_appearance_title = /** @type {(inputs: Settings_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Внешний вид`)
};

const sv_settings_appearance_title = /** @type {(inputs: Settings_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utseende`)
};

const tr_settings_appearance_title = /** @type {(inputs: Settings_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görünüm`)
};

const zh_settings_appearance_title = /** @type {(inputs: Settings_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`外观`)
};

const ja_settings_appearance_title = /** @type {(inputs: Settings_Appearance_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`外観`)
};

/**
* | output |
* | --- |
* | "Appearance" |
*
* @param {Settings_Appearance_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_appearance_title = /** @type {((inputs?: Settings_Appearance_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Appearance_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_appearance_title(inputs)
	if (locale === "de") return de_settings_appearance_title(inputs)
	if (locale === "fr") return fr_settings_appearance_title(inputs)
	if (locale === "it") return it_settings_appearance_title(inputs)
	if (locale === "nl") return nl_settings_appearance_title(inputs)
	if (locale === "pl") return pl_settings_appearance_title(inputs)
	if (locale === "pt") return pt_settings_appearance_title(inputs)
	if (locale === "ru") return ru_settings_appearance_title(inputs)
	if (locale === "sv") return sv_settings_appearance_title(inputs)
	if (locale === "tr") return tr_settings_appearance_title(inputs)
	if (locale === "zh") return zh_settings_appearance_title(inputs)
	if (locale === "ja") return ja_settings_appearance_title(inputs)
	return en_settings_appearance_title(inputs)
});
