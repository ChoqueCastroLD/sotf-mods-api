/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_In_Kits_BrowseInputs */

const en_mod_in_kits_browse = /** @type {(inputs: Mod_In_Kits_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse kits`)
};

const es_mod_in_kits_browse = /** @type {(inputs: Mod_In_Kits_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver kits`)
};

const de_mod_in_kits_browse = /** @type {(inputs: Mod_In_Kits_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits durchsuchen`)
};

const fr_mod_in_kits_browse = /** @type {(inputs: Mod_In_Kits_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parcourir les kits`)
};

const it_mod_in_kits_browse = /** @type {(inputs: Mod_In_Kits_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sfoglia i kit`)
};

const nl_mod_in_kits_browse = /** @type {(inputs: Mod_In_Kits_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits bekijken`)
};

const pl_mod_in_kits_browse = /** @type {(inputs: Mod_In_Kits_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj zestawy`)
};

const pt_mod_in_kits_browse = /** @type {(inputs: Mod_In_Kits_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver kits`)
};

const ru_mod_in_kits_browse = /** @type {(inputs: Mod_In_Kits_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть наборы`)
};

const sv_mod_in_kits_browse = /** @type {(inputs: Mod_In_Kits_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bläddra bland kit`)
};

const tr_mod_in_kits_browse = /** @type {(inputs: Mod_In_Kits_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitlere göz at`)
};

const zh_mod_in_kits_browse = /** @type {(inputs: Mod_In_Kits_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览合集`)
};

const ja_mod_in_kits_browse = /** @type {(inputs: Mod_In_Kits_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを見る`)
};

/**
* | output |
* | --- |
* | "Browse kits" |
*
* @param {Mod_In_Kits_BrowseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_in_kits_browse = /** @type {((inputs?: Mod_In_Kits_BrowseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_In_Kits_BrowseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_in_kits_browse(inputs)
	if (locale === "de") return de_mod_in_kits_browse(inputs)
	if (locale === "fr") return fr_mod_in_kits_browse(inputs)
	if (locale === "it") return it_mod_in_kits_browse(inputs)
	if (locale === "nl") return nl_mod_in_kits_browse(inputs)
	if (locale === "pl") return pl_mod_in_kits_browse(inputs)
	if (locale === "pt") return pt_mod_in_kits_browse(inputs)
	if (locale === "ru") return ru_mod_in_kits_browse(inputs)
	if (locale === "sv") return sv_mod_in_kits_browse(inputs)
	if (locale === "tr") return tr_mod_in_kits_browse(inputs)
	if (locale === "zh") return zh_mod_in_kits_browse(inputs)
	if (locale === "ja") return ja_mod_in_kits_browse(inputs)
	return en_mod_in_kits_browse(inputs)
});
