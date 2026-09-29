/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Theme_SystemInputs */

const en_common_theme_system = /** @type {(inputs: Common_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
};

const es_common_theme_system = /** @type {(inputs: Common_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistema`)
};

const de_common_theme_system = /** @type {(inputs: Common_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
};

const fr_common_theme_system = /** @type {(inputs: Common_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Système`)
};

const it_common_theme_system = /** @type {(inputs: Common_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistema`)
};

const nl_common_theme_system = /** @type {(inputs: Common_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Systeem`)
};

const pl_common_theme_system = /** @type {(inputs: Common_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Systemowy`)
};

const pt_common_theme_system = /** @type {(inputs: Common_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistema`)
};

const ru_common_theme_system = /** @type {(inputs: Common_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Системная`)
};

const sv_common_theme_system = /** @type {(inputs: Common_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
};

const tr_common_theme_system = /** @type {(inputs: Common_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistem`)
};

const zh_common_theme_system = /** @type {(inputs: Common_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`跟随系统`)
};

const ja_common_theme_system = /** @type {(inputs: Common_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`システム`)
};

/**
* | output |
* | --- |
* | "System" |
*
* @param {Common_Theme_SystemInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_theme_system = /** @type {((inputs?: Common_Theme_SystemInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Theme_SystemInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_theme_system(inputs)
	if (locale === "de") return de_common_theme_system(inputs)
	if (locale === "fr") return fr_common_theme_system(inputs)
	if (locale === "it") return it_common_theme_system(inputs)
	if (locale === "nl") return nl_common_theme_system(inputs)
	if (locale === "pl") return pl_common_theme_system(inputs)
	if (locale === "pt") return pt_common_theme_system(inputs)
	if (locale === "ru") return ru_common_theme_system(inputs)
	if (locale === "sv") return sv_common_theme_system(inputs)
	if (locale === "tr") return tr_common_theme_system(inputs)
	if (locale === "zh") return zh_common_theme_system(inputs)
	if (locale === "ja") return ja_common_theme_system(inputs)
	return en_common_theme_system(inputs)
});
