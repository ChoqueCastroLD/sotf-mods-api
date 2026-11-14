/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_ModpacksInputs */

const en_console_nav_modpacks = /** @type {(inputs: Console_Nav_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const es_console_nav_modpacks = /** @type {(inputs: Console_Nav_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const de_console_nav_modpacks = /** @type {(inputs: Console_Nav_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const fr_console_nav_modpacks = /** @type {(inputs: Console_Nav_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const it_console_nav_modpacks = /** @type {(inputs: Console_Nav_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack`)
};

const nl_console_nav_modpacks = /** @type {(inputs: Console_Nav_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const pl_console_nav_modpacks = /** @type {(inputs: Console_Nav_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacki`)
};

const pt_console_nav_modpacks = /** @type {(inputs: Console_Nav_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const ru_console_nav_modpacks = /** @type {(inputs: Console_Nav_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модпаки`)
};

const sv_console_nav_modpacks = /** @type {(inputs: Console_Nav_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpaket`)
};

const tr_console_nav_modpacks = /** @type {(inputs: Console_Nav_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketleri`)
};

const zh_console_nav_modpacks = /** @type {(inputs: Console_Nav_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`整合包`)
};

const ja_console_nav_modpacks = /** @type {(inputs: Console_Nav_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパック`)
};

/**
* | output |
* | --- |
* | "Modpacks" |
*
* @param {Console_Nav_ModpacksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_modpacks = /** @type {((inputs?: Console_Nav_ModpacksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_ModpacksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_modpacks(inputs)
	if (locale === "de") return de_console_nav_modpacks(inputs)
	if (locale === "fr") return fr_console_nav_modpacks(inputs)
	if (locale === "it") return it_console_nav_modpacks(inputs)
	if (locale === "nl") return nl_console_nav_modpacks(inputs)
	if (locale === "pl") return pl_console_nav_modpacks(inputs)
	if (locale === "pt") return pt_console_nav_modpacks(inputs)
	if (locale === "ru") return ru_console_nav_modpacks(inputs)
	if (locale === "sv") return sv_console_nav_modpacks(inputs)
	if (locale === "tr") return tr_console_nav_modpacks(inputs)
	if (locale === "zh") return zh_console_nav_modpacks(inputs)
	if (locale === "ja") return ja_console_nav_modpacks(inputs)
	return en_console_nav_modpacks(inputs)
});
