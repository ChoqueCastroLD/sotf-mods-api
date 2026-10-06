/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_UnapprovedInputs */

const en_explore_catalog_unapproved = /** @type {(inputs: Explore_Catalog_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unapproved`)
};

const es_explore_catalog_unapproved = /** @type {(inputs: Explore_Catalog_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin aprobar`)
};

const de_explore_catalog_unapproved = /** @type {(inputs: Explore_Catalog_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht freigegeben`)
};

const fr_explore_catalog_unapproved = /** @type {(inputs: Explore_Catalog_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non approuvés`)
};

const it_explore_catalog_unapproved = /** @type {(inputs: Explore_Catalog_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non approvati`)
};

const nl_explore_catalog_unapproved = /** @type {(inputs: Explore_Catalog_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet goedgekeurd`)
};

const pl_explore_catalog_unapproved = /** @type {(inputs: Explore_Catalog_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niezatwierdzone`)
};

const pt_explore_catalog_unapproved = /** @type {(inputs: Explore_Catalog_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não aprovados`)
};

const ru_explore_catalog_unapproved = /** @type {(inputs: Explore_Catalog_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не одобрены`)
};

const sv_explore_catalog_unapproved = /** @type {(inputs: Explore_Catalog_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ej godkända`)
};

const tr_explore_catalog_unapproved = /** @type {(inputs: Explore_Catalog_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onaylanmamış`)
};

const zh_explore_catalog_unapproved = /** @type {(inputs: Explore_Catalog_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未批准`)
};

const ja_explore_catalog_unapproved = /** @type {(inputs: Explore_Catalog_UnapprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未承認`)
};

/**
* | output |
* | --- |
* | "Unapproved" |
*
* @param {Explore_Catalog_UnapprovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_unapproved = /** @type {((inputs?: Explore_Catalog_UnapprovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_UnapprovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_unapproved(inputs)
	if (locale === "de") return de_explore_catalog_unapproved(inputs)
	if (locale === "fr") return fr_explore_catalog_unapproved(inputs)
	if (locale === "it") return it_explore_catalog_unapproved(inputs)
	if (locale === "nl") return nl_explore_catalog_unapproved(inputs)
	if (locale === "pl") return pl_explore_catalog_unapproved(inputs)
	if (locale === "pt") return pt_explore_catalog_unapproved(inputs)
	if (locale === "ru") return ru_explore_catalog_unapproved(inputs)
	if (locale === "sv") return sv_explore_catalog_unapproved(inputs)
	if (locale === "tr") return tr_explore_catalog_unapproved(inputs)
	if (locale === "zh") return zh_explore_catalog_unapproved(inputs)
	if (locale === "ja") return ja_explore_catalog_unapproved(inputs)
	return en_explore_catalog_unapproved(inputs)
});
