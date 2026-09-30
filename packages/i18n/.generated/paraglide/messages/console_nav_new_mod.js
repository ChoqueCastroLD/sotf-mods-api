/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_New_ModInputs */

const en_console_nav_new_mod = /** @type {(inputs: Console_Nav_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New mod`)
};

const es_console_nav_new_mod = /** @type {(inputs: Console_Nav_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo mod`)
};

const de_console_nav_new_mod = /** @type {(inputs: Console_Nav_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neuer Mod`)
};

const fr_console_nav_new_mod = /** @type {(inputs: Console_Nav_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau mod`)
};

const it_console_nav_new_mod = /** @type {(inputs: Console_Nav_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuova mod`)
};

const nl_console_nav_new_mod = /** @type {(inputs: Console_Nav_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe mod`)
};

const pl_console_nav_new_mod = /** @type {(inputs: Console_Nav_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowy mod`)
};

const pt_console_nav_new_mod = /** @type {(inputs: Console_Nav_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo mod`)
};

const ru_console_nav_new_mod = /** @type {(inputs: Console_Nav_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый мод`)
};

const sv_console_nav_new_mod = /** @type {(inputs: Console_Nav_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny modd`)
};

const tr_console_nav_new_mod = /** @type {(inputs: Console_Nav_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni mod`)
};

const zh_console_nav_new_mod = /** @type {(inputs: Console_Nav_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建模组`)
};

const ja_console_nav_new_mod = /** @type {(inputs: Console_Nav_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいMOD`)
};

/**
* | output |
* | --- |
* | "New mod" |
*
* @param {Console_Nav_New_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_new_mod = /** @type {((inputs?: Console_Nav_New_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_New_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_new_mod(inputs)
	if (locale === "de") return de_console_nav_new_mod(inputs)
	if (locale === "fr") return fr_console_nav_new_mod(inputs)
	if (locale === "it") return it_console_nav_new_mod(inputs)
	if (locale === "nl") return nl_console_nav_new_mod(inputs)
	if (locale === "pl") return pl_console_nav_new_mod(inputs)
	if (locale === "pt") return pt_console_nav_new_mod(inputs)
	if (locale === "ru") return ru_console_nav_new_mod(inputs)
	if (locale === "sv") return sv_console_nav_new_mod(inputs)
	if (locale === "tr") return tr_console_nav_new_mod(inputs)
	if (locale === "zh") return zh_console_nav_new_mod(inputs)
	if (locale === "ja") return ja_console_nav_new_mod(inputs)
	return en_console_nav_new_mod(inputs)
});
