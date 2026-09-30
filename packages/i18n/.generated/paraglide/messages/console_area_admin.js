/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Area_AdminInputs */

const en_console_area_admin = /** @type {(inputs: Console_Area_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin`)
};

const es_console_area_admin = /** @type {(inputs: Console_Area_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administración`)
};

const de_console_area_admin = /** @type {(inputs: Console_Area_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin`)
};

const fr_console_area_admin = /** @type {(inputs: Console_Area_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administration`)
};

const it_console_area_admin = /** @type {(inputs: Console_Area_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Amministrazione`)
};

const nl_console_area_admin = /** @type {(inputs: Console_Area_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beheer`)
};

const pl_console_area_admin = /** @type {(inputs: Console_Area_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administracja`)
};

const pt_console_area_admin = /** @type {(inputs: Console_Area_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administração`)
};

const ru_console_area_admin = /** @type {(inputs: Console_Area_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Администрирование`)
};

const sv_console_area_admin = /** @type {(inputs: Console_Area_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Administration`)
};

const tr_console_area_admin = /** @type {(inputs: Console_Area_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yönetim`)
};

const zh_console_area_admin = /** @type {(inputs: Console_Area_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理`)
};

const ja_console_area_admin = /** @type {(inputs: Console_Area_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理`)
};

/**
* | output |
* | --- |
* | "Admin" |
*
* @param {Console_Area_AdminInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_area_admin = /** @type {((inputs?: Console_Area_AdminInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Area_AdminInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_area_admin(inputs)
	if (locale === "de") return de_console_area_admin(inputs)
	if (locale === "fr") return fr_console_area_admin(inputs)
	if (locale === "it") return it_console_area_admin(inputs)
	if (locale === "nl") return nl_console_area_admin(inputs)
	if (locale === "pl") return pl_console_area_admin(inputs)
	if (locale === "pt") return pt_console_area_admin(inputs)
	if (locale === "ru") return ru_console_area_admin(inputs)
	if (locale === "sv") return sv_console_area_admin(inputs)
	if (locale === "tr") return tr_console_area_admin(inputs)
	if (locale === "zh") return zh_console_area_admin(inputs)
	if (locale === "ja") return ja_console_area_admin(inputs)
	return en_console_area_admin(inputs)
});
