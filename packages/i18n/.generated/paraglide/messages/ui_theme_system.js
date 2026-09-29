/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Theme_SystemInputs */

const en_ui_theme_system = /** @type {(inputs: Ui_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
};

const es_ui_theme_system = /** @type {(inputs: Ui_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistema`)
};

const de_ui_theme_system = /** @type {(inputs: Ui_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
};

const fr_ui_theme_system = /** @type {(inputs: Ui_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Système`)
};

const it_ui_theme_system = /** @type {(inputs: Ui_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistema`)
};

const nl_ui_theme_system = /** @type {(inputs: Ui_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Systeem`)
};

const pl_ui_theme_system = /** @type {(inputs: Ui_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Systemowy`)
};

const pt_ui_theme_system = /** @type {(inputs: Ui_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistema`)
};

const ru_ui_theme_system = /** @type {(inputs: Ui_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Системная`)
};

const sv_ui_theme_system = /** @type {(inputs: Ui_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
};

const tr_ui_theme_system = /** @type {(inputs: Ui_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistem`)
};

const zh_ui_theme_system = /** @type {(inputs: Ui_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`跟随系统`)
};

const ja_ui_theme_system = /** @type {(inputs: Ui_Theme_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`システム`)
};

/**
* | output |
* | --- |
* | "System" |
*
* @param {Ui_Theme_SystemInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_theme_system = /** @type {((inputs?: Ui_Theme_SystemInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Theme_SystemInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_theme_system(inputs)
	if (locale === "de") return de_ui_theme_system(inputs)
	if (locale === "fr") return fr_ui_theme_system(inputs)
	if (locale === "it") return it_ui_theme_system(inputs)
	if (locale === "nl") return nl_ui_theme_system(inputs)
	if (locale === "pl") return pl_ui_theme_system(inputs)
	if (locale === "pt") return pt_ui_theme_system(inputs)
	if (locale === "ru") return ru_ui_theme_system(inputs)
	if (locale === "sv") return sv_ui_theme_system(inputs)
	if (locale === "tr") return tr_ui_theme_system(inputs)
	if (locale === "zh") return zh_ui_theme_system(inputs)
	if (locale === "ja") return ja_ui_theme_system(inputs)
	return en_ui_theme_system(inputs)
});
