/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Console_BrowseInputs */

const en_kitsocial_console_browse = /** @type {(inputs: Kitsocial_Console_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse kits`)
};

const es_kitsocial_console_browse = /** @type {(inputs: Kitsocial_Console_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar kits`)
};

const de_kitsocial_console_browse = /** @type {(inputs: Kitsocial_Console_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits durchsuchen`)
};

const fr_kitsocial_console_browse = /** @type {(inputs: Kitsocial_Console_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parcourir les kits`)
};

const it_kitsocial_console_browse = /** @type {(inputs: Kitsocial_Console_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sfoglia i kit`)
};

const nl_kitsocial_console_browse = /** @type {(inputs: Kitsocial_Console_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits bekijken`)
};

const pl_kitsocial_console_browse = /** @type {(inputs: Kitsocial_Console_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj zestawy`)
};

const pt_kitsocial_console_browse = /** @type {(inputs: Kitsocial_Console_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar kits`)
};

const ru_kitsocial_console_browse = /** @type {(inputs: Kitsocial_Console_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть наборы`)
};

const sv_kitsocial_console_browse = /** @type {(inputs: Kitsocial_Console_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bläddra bland kits`)
};

const tr_kitsocial_console_browse = /** @type {(inputs: Kitsocial_Console_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitlere göz at`)
};

const zh_kitsocial_console_browse = /** @type {(inputs: Kitsocial_Console_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览套件`)
};

const ja_kitsocial_console_browse = /** @type {(inputs: Kitsocial_Console_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを探す`)
};

/**
* | output |
* | --- |
* | "Browse kits" |
*
* @param {Kitsocial_Console_BrowseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_console_browse = /** @type {((inputs?: Kitsocial_Console_BrowseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Console_BrowseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_console_browse(inputs)
	if (locale === "de") return de_kitsocial_console_browse(inputs)
	if (locale === "fr") return fr_kitsocial_console_browse(inputs)
	if (locale === "it") return it_kitsocial_console_browse(inputs)
	if (locale === "nl") return nl_kitsocial_console_browse(inputs)
	if (locale === "pl") return pl_kitsocial_console_browse(inputs)
	if (locale === "pt") return pt_kitsocial_console_browse(inputs)
	if (locale === "ru") return ru_kitsocial_console_browse(inputs)
	if (locale === "sv") return sv_kitsocial_console_browse(inputs)
	if (locale === "tr") return tr_kitsocial_console_browse(inputs)
	if (locale === "zh") return zh_kitsocial_console_browse(inputs)
	if (locale === "ja") return ja_kitsocial_console_browse(inputs)
	return en_kitsocial_console_browse(inputs)
});
