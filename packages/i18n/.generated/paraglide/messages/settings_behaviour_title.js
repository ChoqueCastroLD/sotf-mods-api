/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Behaviour_TitleInputs */

const en_settings_behaviour_title = /** @type {(inputs: Settings_Behaviour_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Behaviour`)
};

const es_settings_behaviour_title = /** @type {(inputs: Settings_Behaviour_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comportamiento`)
};

const de_settings_behaviour_title = /** @type {(inputs: Settings_Behaviour_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verhalten`)
};

const fr_settings_behaviour_title = /** @type {(inputs: Settings_Behaviour_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comportement`)
};

const it_settings_behaviour_title = /** @type {(inputs: Settings_Behaviour_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comportamento`)
};

const nl_settings_behaviour_title = /** @type {(inputs: Settings_Behaviour_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gedrag`)
};

const pl_settings_behaviour_title = /** @type {(inputs: Settings_Behaviour_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zachowanie`)
};

const pt_settings_behaviour_title = /** @type {(inputs: Settings_Behaviour_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comportamento`)
};

const ru_settings_behaviour_title = /** @type {(inputs: Settings_Behaviour_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поведение`)
};

const sv_settings_behaviour_title = /** @type {(inputs: Settings_Behaviour_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beteende`)
};

const tr_settings_behaviour_title = /** @type {(inputs: Settings_Behaviour_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Davranış`)
};

const zh_settings_behaviour_title = /** @type {(inputs: Settings_Behaviour_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`行为`)
};

const ja_settings_behaviour_title = /** @type {(inputs: Settings_Behaviour_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作`)
};

/**
* | output |
* | --- |
* | "Behaviour" |
*
* @param {Settings_Behaviour_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_behaviour_title = /** @type {((inputs?: Settings_Behaviour_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Behaviour_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_behaviour_title(inputs)
	if (locale === "de") return de_settings_behaviour_title(inputs)
	if (locale === "fr") return fr_settings_behaviour_title(inputs)
	if (locale === "it") return it_settings_behaviour_title(inputs)
	if (locale === "nl") return nl_settings_behaviour_title(inputs)
	if (locale === "pl") return pl_settings_behaviour_title(inputs)
	if (locale === "pt") return pt_settings_behaviour_title(inputs)
	if (locale === "ru") return ru_settings_behaviour_title(inputs)
	if (locale === "sv") return sv_settings_behaviour_title(inputs)
	if (locale === "tr") return tr_settings_behaviour_title(inputs)
	if (locale === "zh") return zh_settings_behaviour_title(inputs)
	if (locale === "ja") return ja_settings_behaviour_title(inputs)
	return en_settings_behaviour_title(inputs)
});
