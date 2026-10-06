/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Unapproved_TitleInputs */

const en_explore_catalog_unapproved_title = /** @type {(inputs: Explore_Catalog_Unapproved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unapproved mods`)
};

const es_explore_catalog_unapproved_title = /** @type {(inputs: Explore_Catalog_Unapproved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods sin aprobar`)
};

const de_explore_catalog_unapproved_title = /** @type {(inputs: Explore_Catalog_Unapproved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht freigegebene Mods`)
};

const fr_explore_catalog_unapproved_title = /** @type {(inputs: Explore_Catalog_Unapproved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods non approuvés`)
};

const it_explore_catalog_unapproved_title = /** @type {(inputs: Explore_Catalog_Unapproved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod non approvati`)
};

const nl_explore_catalog_unapproved_title = /** @type {(inputs: Explore_Catalog_Unapproved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet goedgekeurde mods`)
};

const pl_explore_catalog_unapproved_title = /** @type {(inputs: Explore_Catalog_Unapproved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niezatwierdzone mody`)
};

const pt_explore_catalog_unapproved_title = /** @type {(inputs: Explore_Catalog_Unapproved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods não aprovados`)
};

const ru_explore_catalog_unapproved_title = /** @type {(inputs: Explore_Catalog_Unapproved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неодобренные моды`)
};

const sv_explore_catalog_unapproved_title = /** @type {(inputs: Explore_Catalog_Unapproved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ej godkända mods`)
};

const tr_explore_catalog_unapproved_title = /** @type {(inputs: Explore_Catalog_Unapproved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onaylanmamış modlar`)
};

const zh_explore_catalog_unapproved_title = /** @type {(inputs: Explore_Catalog_Unapproved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未批准的模组`)
};

const ja_explore_catalog_unapproved_title = /** @type {(inputs: Explore_Catalog_Unapproved_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未承認のMOD`)
};

/**
* | output |
* | --- |
* | "Unapproved mods" |
*
* @param {Explore_Catalog_Unapproved_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_unapproved_title = /** @type {((inputs?: Explore_Catalog_Unapproved_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Unapproved_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_unapproved_title(inputs)
	if (locale === "de") return de_explore_catalog_unapproved_title(inputs)
	if (locale === "fr") return fr_explore_catalog_unapproved_title(inputs)
	if (locale === "it") return it_explore_catalog_unapproved_title(inputs)
	if (locale === "nl") return nl_explore_catalog_unapproved_title(inputs)
	if (locale === "pl") return pl_explore_catalog_unapproved_title(inputs)
	if (locale === "pt") return pt_explore_catalog_unapproved_title(inputs)
	if (locale === "ru") return ru_explore_catalog_unapproved_title(inputs)
	if (locale === "sv") return sv_explore_catalog_unapproved_title(inputs)
	if (locale === "tr") return tr_explore_catalog_unapproved_title(inputs)
	if (locale === "zh") return zh_explore_catalog_unapproved_title(inputs)
	if (locale === "ja") return ja_explore_catalog_unapproved_title(inputs)
	return en_explore_catalog_unapproved_title(inputs)
});
