/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Unapproved_DescriptionInputs */

const en_explore_catalog_unapproved_description = /** @type {(inputs: Explore_Catalog_Unapproved_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods that passed the automated checks and are waiting for approval.`)
};

const es_explore_catalog_unapproved_description = /** @type {(inputs: Explore_Catalog_Unapproved_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods que superaron las comprobaciones automáticas y esperan aprobación.`)
};

const de_explore_catalog_unapproved_description = /** @type {(inputs: Explore_Catalog_Unapproved_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods, die die automatischen Prüfungen bestanden haben und auf Freigabe warten.`)
};

const fr_explore_catalog_unapproved_description = /** @type {(inputs: Explore_Catalog_Unapproved_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods ayant réussi les vérifications automatiques et en attente d’approbation.`)
};

const it_explore_catalog_unapproved_description = /** @type {(inputs: Explore_Catalog_Unapproved_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod che hanno superato i controlli automatici e attendono l’approvazione.`)
};

const nl_explore_catalog_unapproved_description = /** @type {(inputs: Explore_Catalog_Unapproved_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods die de automatische controles hebben doorstaan en op goedkeuring wachten.`)
};

const pl_explore_catalog_unapproved_description = /** @type {(inputs: Explore_Catalog_Unapproved_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody, które przeszły automatyczne kontrole i czekają na zatwierdzenie.`)
};

const pt_explore_catalog_unapproved_description = /** @type {(inputs: Explore_Catalog_Unapproved_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods que passaram nas verificações automáticas e aguardam aprovação.`)
};

const ru_explore_catalog_unapproved_description = /** @type {(inputs: Explore_Catalog_Unapproved_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды, прошедшие автоматические проверки и ожидающие одобрения.`)
};

const sv_explore_catalog_unapproved_description = /** @type {(inputs: Explore_Catalog_Unapproved_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods som har klarat de automatiska kontrollerna och väntar på godkännande.`)
};

const tr_explore_catalog_unapproved_description = /** @type {(inputs: Explore_Catalog_Unapproved_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otomatik kontrolleri geçen ve onay bekleyen modlar.`)
};

const zh_explore_catalog_unapproved_description = /** @type {(inputs: Explore_Catalog_Unapproved_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已通过自动检查、等待批准的模组。`)
};

const ja_explore_catalog_unapproved_description = /** @type {(inputs: Explore_Catalog_Unapproved_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自動チェックを通過し、承認待ちのMODです。`)
};

/**
* | output |
* | --- |
* | "Mods that passed the automated checks and are waiting for approval." |
*
* @param {Explore_Catalog_Unapproved_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_unapproved_description = /** @type {((inputs?: Explore_Catalog_Unapproved_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Unapproved_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_unapproved_description(inputs)
	if (locale === "de") return de_explore_catalog_unapproved_description(inputs)
	if (locale === "fr") return fr_explore_catalog_unapproved_description(inputs)
	if (locale === "it") return it_explore_catalog_unapproved_description(inputs)
	if (locale === "nl") return nl_explore_catalog_unapproved_description(inputs)
	if (locale === "pl") return pl_explore_catalog_unapproved_description(inputs)
	if (locale === "pt") return pt_explore_catalog_unapproved_description(inputs)
	if (locale === "ru") return ru_explore_catalog_unapproved_description(inputs)
	if (locale === "sv") return sv_explore_catalog_unapproved_description(inputs)
	if (locale === "tr") return tr_explore_catalog_unapproved_description(inputs)
	if (locale === "zh") return zh_explore_catalog_unapproved_description(inputs)
	if (locale === "ja") return ja_explore_catalog_unapproved_description(inputs)
	return en_explore_catalog_unapproved_description(inputs)
});
