/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_My_ModsInputs */

const en_console_nav_my_mods = /** @type {(inputs: Console_Nav_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`My mods`)
};

const es_console_nav_my_mods = /** @type {(inputs: Console_Nav_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis mods`)
};

const de_console_nav_my_mods = /** @type {(inputs: Console_Nav_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meine Mods`)
};

const fr_console_nav_my_mods = /** @type {(inputs: Console_Nav_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mes mods`)
};

const it_console_nav_my_mods = /** @type {(inputs: Console_Nav_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mie mod`)
};

const nl_console_nav_my_mods = /** @type {(inputs: Console_Nav_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn mods`)
};

const pl_console_nav_my_mods = /** @type {(inputs: Console_Nav_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moje mody`)
};

const pt_console_nav_my_mods = /** @type {(inputs: Console_Nav_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meus mods`)
};

const ru_console_nav_my_mods = /** @type {(inputs: Console_Nav_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мои моды`)
};

const sv_console_nav_my_mods = /** @type {(inputs: Console_Nav_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mina moddar`)
};

const tr_console_nav_my_mods = /** @type {(inputs: Console_Nav_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarım`)
};

const zh_console_nav_my_mods = /** @type {(inputs: Console_Nav_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我的模组`)
};

const ja_console_nav_my_mods = /** @type {(inputs: Console_Nav_My_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マイMOD`)
};

/**
* | output |
* | --- |
* | "My mods" |
*
* @param {Console_Nav_My_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_my_mods = /** @type {((inputs?: Console_Nav_My_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_My_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_my_mods(inputs)
	if (locale === "de") return de_console_nav_my_mods(inputs)
	if (locale === "fr") return fr_console_nav_my_mods(inputs)
	if (locale === "it") return it_console_nav_my_mods(inputs)
	if (locale === "nl") return nl_console_nav_my_mods(inputs)
	if (locale === "pl") return pl_console_nav_my_mods(inputs)
	if (locale === "pt") return pt_console_nav_my_mods(inputs)
	if (locale === "ru") return ru_console_nav_my_mods(inputs)
	if (locale === "sv") return sv_console_nav_my_mods(inputs)
	if (locale === "tr") return tr_console_nav_my_mods(inputs)
	if (locale === "zh") return zh_console_nav_my_mods(inputs)
	if (locale === "ja") return ja_console_nav_my_mods(inputs)
	return en_console_nav_my_mods(inputs)
});
