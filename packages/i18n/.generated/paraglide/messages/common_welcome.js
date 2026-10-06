/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_WelcomeInputs */

const en_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Welcome to SOTF Mods.`)
};

const es_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te damos la bienvenida a SOTF Mods.`)
};

const de_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Willkommen bei SOTF Mods.`)
};

const fr_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bienvenue sur SOTF Mods.`)
};

const it_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benvenuto su SOTF Mods.`)
};

const nl_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Welkom bij SOTF Mods.`)
};

const pl_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Witaj w SOTF Mods.`)
};

const pt_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Boas-vindas ao SOTF Mods.`)
};

const ru_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добро пожаловать в SOTF Mods.`)
};

const sv_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välkommen till SOTF Mods.`)
};

const tr_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’a hoş geldin.`)
};

const zh_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`欢迎来到 SOTF Mods。`)
};

const ja_common_welcome = /** @type {(inputs: Common_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods へようこそ。`)
};

/**
* | output |
* | --- |
* | "Welcome to SOTF Mods." |
*
* @param {Common_WelcomeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_welcome = /** @type {((inputs?: Common_WelcomeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_WelcomeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_welcome(inputs)
	if (locale === "de") return de_common_welcome(inputs)
	if (locale === "fr") return fr_common_welcome(inputs)
	if (locale === "it") return it_common_welcome(inputs)
	if (locale === "nl") return nl_common_welcome(inputs)
	if (locale === "pl") return pl_common_welcome(inputs)
	if (locale === "pt") return pt_common_welcome(inputs)
	if (locale === "ru") return ru_common_welcome(inputs)
	if (locale === "sv") return sv_common_welcome(inputs)
	if (locale === "tr") return tr_common_welcome(inputs)
	if (locale === "zh") return zh_common_welcome(inputs)
	if (locale === "ja") return ja_common_welcome(inputs)
	return en_common_welcome(inputs)
});
