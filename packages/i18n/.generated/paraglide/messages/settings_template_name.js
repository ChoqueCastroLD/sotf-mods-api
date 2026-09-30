/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Template_NameInputs */

const en_settings_template_name = /** @type {(inputs: Settings_Template_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
};

const es_settings_template_name = /** @type {(inputs: Settings_Template_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre`)
};

const de_settings_template_name = /** @type {(inputs: Settings_Template_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
};

const fr_settings_template_name = /** @type {(inputs: Settings_Template_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom`)
};

const it_settings_template_name = /** @type {(inputs: Settings_Template_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome`)
};

const nl_settings_template_name = /** @type {(inputs: Settings_Template_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naam`)
};

const pl_settings_template_name = /** @type {(inputs: Settings_Template_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa`)
};

const pt_settings_template_name = /** @type {(inputs: Settings_Template_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome`)
};

const ru_settings_template_name = /** @type {(inputs: Settings_Template_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название`)
};

const sv_settings_template_name = /** @type {(inputs: Settings_Template_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namn`)
};

const tr_settings_template_name = /** @type {(inputs: Settings_Template_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad`)
};

const zh_settings_template_name = /** @type {(inputs: Settings_Template_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称`)
};

const ja_settings_template_name = /** @type {(inputs: Settings_Template_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前`)
};

/**
* | output |
* | --- |
* | "Name" |
*
* @param {Settings_Template_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_template_name = /** @type {((inputs?: Settings_Template_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Template_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_template_name(inputs)
	if (locale === "de") return de_settings_template_name(inputs)
	if (locale === "fr") return fr_settings_template_name(inputs)
	if (locale === "it") return it_settings_template_name(inputs)
	if (locale === "nl") return nl_settings_template_name(inputs)
	if (locale === "pl") return pl_settings_template_name(inputs)
	if (locale === "pt") return pt_settings_template_name(inputs)
	if (locale === "ru") return ru_settings_template_name(inputs)
	if (locale === "sv") return sv_settings_template_name(inputs)
	if (locale === "tr") return tr_settings_template_name(inputs)
	if (locale === "zh") return zh_settings_template_name(inputs)
	if (locale === "ja") return ja_settings_template_name(inputs)
	return en_settings_template_name(inputs)
});
