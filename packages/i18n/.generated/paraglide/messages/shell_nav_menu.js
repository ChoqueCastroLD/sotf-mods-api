/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Nav_MenuInputs */

const en_shell_nav_menu = /** @type {(inputs: Shell_Nav_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menu`)
};

const es_shell_nav_menu = /** @type {(inputs: Shell_Nav_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menú`)
};

const de_shell_nav_menu = /** @type {(inputs: Shell_Nav_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menü`)
};

const fr_shell_nav_menu = /** @type {(inputs: Shell_Nav_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menu`)
};

const it_shell_nav_menu = /** @type {(inputs: Shell_Nav_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menu`)
};

const nl_shell_nav_menu = /** @type {(inputs: Shell_Nav_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menu`)
};

const pl_shell_nav_menu = /** @type {(inputs: Shell_Nav_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menu`)
};

const pt_shell_nav_menu = /** @type {(inputs: Shell_Nav_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menu`)
};

const ru_shell_nav_menu = /** @type {(inputs: Shell_Nav_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Меню`)
};

const sv_shell_nav_menu = /** @type {(inputs: Shell_Nav_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meny`)
};

const tr_shell_nav_menu = /** @type {(inputs: Shell_Nav_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menü`)
};

const zh_shell_nav_menu = /** @type {(inputs: Shell_Nav_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`菜单`)
};

const ja_shell_nav_menu = /** @type {(inputs: Shell_Nav_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メニュー`)
};

/**
* | output |
* | --- |
* | "Menu" |
*
* @param {Shell_Nav_MenuInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_nav_menu = /** @type {((inputs?: Shell_Nav_MenuInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Nav_MenuInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_nav_menu(inputs)
	if (locale === "de") return de_shell_nav_menu(inputs)
	if (locale === "fr") return fr_shell_nav_menu(inputs)
	if (locale === "it") return it_shell_nav_menu(inputs)
	if (locale === "nl") return nl_shell_nav_menu(inputs)
	if (locale === "pl") return pl_shell_nav_menu(inputs)
	if (locale === "pt") return pt_shell_nav_menu(inputs)
	if (locale === "ru") return ru_shell_nav_menu(inputs)
	if (locale === "sv") return sv_shell_nav_menu(inputs)
	if (locale === "tr") return tr_shell_nav_menu(inputs)
	if (locale === "zh") return zh_shell_nav_menu(inputs)
	if (locale === "ja") return ja_shell_nav_menu(inputs)
	return en_shell_nav_menu(inputs)
});
