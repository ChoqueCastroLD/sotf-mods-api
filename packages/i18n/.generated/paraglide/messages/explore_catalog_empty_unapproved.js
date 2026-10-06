/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Empty_UnapprovedInputs */

const en_explore_catalog_empty_unapproved = /** @type {(inputs: Explore_Catalog_Empty_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`There are no unapproved mods to show right now.`)
};

const es_explore_catalog_empty_unapproved = /** @type {(inputs: Explore_Catalog_Empty_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ahora mismo no hay mods sin aprobar.`)
};

const de_explore_catalog_empty_unapproved = /** @type {(inputs: Explore_Catalog_Empty_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurzeit gibt es keine nicht freigegebenen Mods.`)
};

const fr_explore_catalog_empty_unapproved = /** @type {(inputs: Explore_Catalog_Empty_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun mod non approuvé à afficher pour le moment.`)
};

const it_explore_catalog_empty_unapproved = /** @type {(inputs: Explore_Catalog_Empty_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al momento non ci sono mod non approvati.`)
};

const nl_explore_catalog_empty_unapproved = /** @type {(inputs: Explore_Catalog_Empty_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er zijn nu geen niet goedgekeurde mods.`)
};

const pl_explore_catalog_empty_unapproved = /** @type {(inputs: Explore_Catalog_Empty_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obecnie nie ma niezatwierdzonych modów.`)
};

const pt_explore_catalog_empty_unapproved = /** @type {(inputs: Explore_Catalog_Empty_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No momento não há mods não aprovados.`)
};

const ru_explore_catalog_empty_unapproved = /** @type {(inputs: Explore_Catalog_Empty_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сейчас нет неодобренных модов.`)
};

const sv_explore_catalog_empty_unapproved = /** @type {(inputs: Explore_Catalog_Empty_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det finns inga ej godkända mods just nu.`)
};

const tr_explore_catalog_empty_unapproved = /** @type {(inputs: Explore_Catalog_Empty_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şu anda onaylanmamış mod yok.`)
};

const zh_explore_catalog_empty_unapproved = /** @type {(inputs: Explore_Catalog_Empty_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`目前没有未批准的模组。`)
};

const ja_explore_catalog_empty_unapproved = /** @type {(inputs: Explore_Catalog_Empty_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在、未承認のMODはありません。`)
};

/**
* | output |
* | --- |
* | "There are no unapproved mods to show right now." |
*
* @param {Explore_Catalog_Empty_UnapprovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_empty_unapproved = /** @type {((inputs?: Explore_Catalog_Empty_UnapprovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Empty_UnapprovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_empty_unapproved(inputs)
	if (locale === "de") return de_explore_catalog_empty_unapproved(inputs)
	if (locale === "fr") return fr_explore_catalog_empty_unapproved(inputs)
	if (locale === "it") return it_explore_catalog_empty_unapproved(inputs)
	if (locale === "nl") return nl_explore_catalog_empty_unapproved(inputs)
	if (locale === "pl") return pl_explore_catalog_empty_unapproved(inputs)
	if (locale === "pt") return pt_explore_catalog_empty_unapproved(inputs)
	if (locale === "ru") return ru_explore_catalog_empty_unapproved(inputs)
	if (locale === "sv") return sv_explore_catalog_empty_unapproved(inputs)
	if (locale === "tr") return tr_explore_catalog_empty_unapproved(inputs)
	if (locale === "zh") return zh_explore_catalog_empty_unapproved(inputs)
	if (locale === "ja") return ja_explore_catalog_empty_unapproved(inputs)
	return en_explore_catalog_empty_unapproved(inputs)
});
