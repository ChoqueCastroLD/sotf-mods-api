/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Theme_SystemInputs */

const en_cmdk_theme_system = /** @type {(inputs: Cmdk_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
};

const es_cmdk_theme_system = /** @type {(inputs: Cmdk_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistema`)
};

const de_cmdk_theme_system = /** @type {(inputs: Cmdk_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
};

const fr_cmdk_theme_system = /** @type {(inputs: Cmdk_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Système`)
};

const it_cmdk_theme_system = /** @type {(inputs: Cmdk_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistema`)
};

const nl_cmdk_theme_system = /** @type {(inputs: Cmdk_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Systeem`)
};

const pl_cmdk_theme_system = /** @type {(inputs: Cmdk_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Systemowy`)
};

const pt_cmdk_theme_system = /** @type {(inputs: Cmdk_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistema`)
};

const ru_cmdk_theme_system = /** @type {(inputs: Cmdk_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Системная`)
};

const sv_cmdk_theme_system = /** @type {(inputs: Cmdk_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
};

const tr_cmdk_theme_system = /** @type {(inputs: Cmdk_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistem`)
};

const zh_cmdk_theme_system = /** @type {(inputs: Cmdk_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`跟随系统`)
};

const ja_cmdk_theme_system = /** @type {(inputs: Cmdk_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`システム`)
};

/**
* | output |
* | --- |
* | "System" |
*
* @param {Cmdk_Theme_SystemInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_theme_system = /** @type {((inputs?: Cmdk_Theme_SystemInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Theme_SystemInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_theme_system(inputs)
	if (locale === "de") return de_cmdk_theme_system(inputs)
	if (locale === "fr") return fr_cmdk_theme_system(inputs)
	if (locale === "it") return it_cmdk_theme_system(inputs)
	if (locale === "nl") return nl_cmdk_theme_system(inputs)
	if (locale === "pl") return pl_cmdk_theme_system(inputs)
	if (locale === "pt") return pt_cmdk_theme_system(inputs)
	if (locale === "ru") return ru_cmdk_theme_system(inputs)
	if (locale === "sv") return sv_cmdk_theme_system(inputs)
	if (locale === "tr") return tr_cmdk_theme_system(inputs)
	if (locale === "zh") return zh_cmdk_theme_system(inputs)
	if (locale === "ja") return ja_cmdk_theme_system(inputs)
	return en_cmdk_theme_system(inputs)
});
