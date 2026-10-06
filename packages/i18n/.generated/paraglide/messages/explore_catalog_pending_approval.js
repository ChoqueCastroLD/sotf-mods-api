/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Pending_ApprovalInputs */

const en_explore_catalog_pending_approval = /** @type {(inputs: Explore_Catalog_Pending_ApprovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pending approval`)
};

const es_explore_catalog_pending_approval = /** @type {(inputs: Explore_Catalog_Pending_ApprovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pendiente de aprobación`)
};

const de_explore_catalog_pending_approval = /** @type {(inputs: Explore_Catalog_Pending_ApprovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wartet auf Freigabe`)
};

const fr_explore_catalog_pending_approval = /** @type {(inputs: Explore_Catalog_Pending_ApprovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En attente d’approbation`)
};

const it_explore_catalog_pending_approval = /** @type {(inputs: Explore_Catalog_Pending_ApprovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In attesa di approvazione`)
};

const nl_explore_catalog_pending_approval = /** @type {(inputs: Explore_Catalog_Pending_ApprovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wacht op goedkeuring`)
};

const pl_explore_catalog_pending_approval = /** @type {(inputs: Explore_Catalog_Pending_ApprovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czeka na zatwierdzenie`)
};

const pt_explore_catalog_pending_approval = /** @type {(inputs: Explore_Catalog_Pending_ApprovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aguardando aprovação`)
};

const ru_explore_catalog_pending_approval = /** @type {(inputs: Explore_Catalog_Pending_ApprovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ожидает одобрения`)
};

const sv_explore_catalog_pending_approval = /** @type {(inputs: Explore_Catalog_Pending_ApprovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Väntar på godkännande`)
};

const tr_explore_catalog_pending_approval = /** @type {(inputs: Explore_Catalog_Pending_ApprovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onay bekliyor`)
};

const zh_explore_catalog_pending_approval = /** @type {(inputs: Explore_Catalog_Pending_ApprovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待批准`)
};

const ja_explore_catalog_pending_approval = /** @type {(inputs: Explore_Catalog_Pending_ApprovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承認待ち`)
};

/**
* | output |
* | --- |
* | "Pending approval" |
*
* @param {Explore_Catalog_Pending_ApprovalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_pending_approval = /** @type {((inputs?: Explore_Catalog_Pending_ApprovalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Pending_ApprovalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_pending_approval(inputs)
	if (locale === "de") return de_explore_catalog_pending_approval(inputs)
	if (locale === "fr") return fr_explore_catalog_pending_approval(inputs)
	if (locale === "it") return it_explore_catalog_pending_approval(inputs)
	if (locale === "nl") return nl_explore_catalog_pending_approval(inputs)
	if (locale === "pl") return pl_explore_catalog_pending_approval(inputs)
	if (locale === "pt") return pt_explore_catalog_pending_approval(inputs)
	if (locale === "ru") return ru_explore_catalog_pending_approval(inputs)
	if (locale === "sv") return sv_explore_catalog_pending_approval(inputs)
	if (locale === "tr") return tr_explore_catalog_pending_approval(inputs)
	if (locale === "zh") return zh_explore_catalog_pending_approval(inputs)
	if (locale === "ja") return ja_explore_catalog_pending_approval(inputs)
	return en_explore_catalog_pending_approval(inputs)
});
