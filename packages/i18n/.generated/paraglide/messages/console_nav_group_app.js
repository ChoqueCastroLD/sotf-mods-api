/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_Group_AppInputs */

const en_console_nav_group_app = /** @type {(inputs: Console_Nav_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App`)
};

const es_console_nav_group_app = /** @type {(inputs: Console_Nav_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aplicación`)
};

const de_console_nav_group_app = /** @type {(inputs: Console_Nav_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App`)
};

const fr_console_nav_group_app = /** @type {(inputs: Console_Nav_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Application`)
};

const it_console_nav_group_app = /** @type {(inputs: Console_Nav_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App`)
};

const nl_console_nav_group_app = /** @type {(inputs: Console_Nav_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App`)
};

const pl_console_nav_group_app = /** @type {(inputs: Console_Nav_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aplikacja`)
};

const pt_console_nav_group_app = /** @type {(inputs: Console_Nav_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aplicativo`)
};

const ru_console_nav_group_app = /** @type {(inputs: Console_Nav_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Приложение`)
};

const sv_console_nav_group_app = /** @type {(inputs: Console_Nav_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App`)
};

const tr_console_nav_group_app = /** @type {(inputs: Console_Nav_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uygulama`)
};

const zh_console_nav_group_app = /** @type {(inputs: Console_Nav_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`应用`)
};

const ja_console_nav_group_app = /** @type {(inputs: Console_Nav_Group_AppInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アプリ`)
};

/**
* | output |
* | --- |
* | "App" |
*
* @param {Console_Nav_Group_AppInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_group_app = /** @type {((inputs?: Console_Nav_Group_AppInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_Group_AppInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_group_app(inputs)
	if (locale === "de") return de_console_nav_group_app(inputs)
	if (locale === "fr") return fr_console_nav_group_app(inputs)
	if (locale === "it") return it_console_nav_group_app(inputs)
	if (locale === "nl") return nl_console_nav_group_app(inputs)
	if (locale === "pl") return pl_console_nav_group_app(inputs)
	if (locale === "pt") return pt_console_nav_group_app(inputs)
	if (locale === "ru") return ru_console_nav_group_app(inputs)
	if (locale === "sv") return sv_console_nav_group_app(inputs)
	if (locale === "tr") return tr_console_nav_group_app(inputs)
	if (locale === "zh") return zh_console_nav_group_app(inputs)
	if (locale === "ja") return ja_console_nav_group_app(inputs)
	return en_console_nav_group_app(inputs)
});
