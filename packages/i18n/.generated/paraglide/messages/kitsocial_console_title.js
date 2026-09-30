/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Console_TitleInputs */

const en_kitsocial_console_title = /** @type {(inputs: Kitsocial_Console_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits I follow`)
};

const es_kitsocial_console_title = /** @type {(inputs: Kitsocial_Console_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits que sigo`)
};

const de_kitsocial_console_title = /** @type {(inputs: Kitsocial_Console_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits, denen ich folge`)
};

const fr_kitsocial_console_title = /** @type {(inputs: Kitsocial_Console_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits que je suis`)
};

const it_kitsocial_console_title = /** @type {(inputs: Kitsocial_Console_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit che seguo`)
};

const nl_kitsocial_console_title = /** @type {(inputs: Kitsocial_Console_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits die ik volg`)
};

const pl_kitsocial_console_title = /** @type {(inputs: Kitsocial_Console_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwowane zestawy`)
};

const pt_kitsocial_console_title = /** @type {(inputs: Kitsocial_Console_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits que sigo`)
};

const ru_kitsocial_console_title = /** @type {(inputs: Kitsocial_Console_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Наборы, на которые я подписан`)
};

const sv_kitsocial_console_title = /** @type {(inputs: Kitsocial_Console_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits jag följer`)
};

const tr_kitsocial_console_title = /** @type {(inputs: Kitsocial_Console_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip ettiğim kitler`)
};

const zh_kitsocial_console_title = /** @type {(inputs: Kitsocial_Console_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我关注的套件`)
};

const ja_kitsocial_console_title = /** @type {(inputs: Kitsocial_Console_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中のキット`)
};

/**
* | output |
* | --- |
* | "Kits I follow" |
*
* @param {Kitsocial_Console_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_console_title = /** @type {((inputs?: Kitsocial_Console_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Console_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_console_title(inputs)
	if (locale === "de") return de_kitsocial_console_title(inputs)
	if (locale === "fr") return fr_kitsocial_console_title(inputs)
	if (locale === "it") return it_kitsocial_console_title(inputs)
	if (locale === "nl") return nl_kitsocial_console_title(inputs)
	if (locale === "pl") return pl_kitsocial_console_title(inputs)
	if (locale === "pt") return pt_kitsocial_console_title(inputs)
	if (locale === "ru") return ru_kitsocial_console_title(inputs)
	if (locale === "sv") return sv_kitsocial_console_title(inputs)
	if (locale === "tr") return tr_kitsocial_console_title(inputs)
	if (locale === "zh") return zh_kitsocial_console_title(inputs)
	if (locale === "ja") return ja_kitsocial_console_title(inputs)
	return en_kitsocial_console_title(inputs)
});
