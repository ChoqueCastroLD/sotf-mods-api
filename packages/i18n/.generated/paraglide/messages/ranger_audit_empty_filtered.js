/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_Empty_FilteredInputs */

const en_ranger_audit_empty_filtered = /** @type {(inputs: Ranger_Audit_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No entry matches these filters.`)
};

const es_ranger_audit_empty_filtered = /** @type {(inputs: Ranger_Audit_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguna entrada coincide con estos filtros.`)
};

const de_ranger_audit_empty_filtered = /** @type {(inputs: Ranger_Audit_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Eintrag passt zu diesen Filtern.`)
};

const fr_ranger_audit_empty_filtered = /** @type {(inputs: Ranger_Audit_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune entrée ne correspond à ces filtres.`)
};

const it_ranger_audit_empty_filtered = /** @type {(inputs: Ranger_Audit_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna voce corrisponde a questi filtri.`)
};

const nl_ranger_audit_empty_filtered = /** @type {(inputs: Ranger_Audit_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen regel past bij deze filters.`)
};

const pl_ranger_audit_empty_filtered = /** @type {(inputs: Ranger_Audit_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden wpis nie pasuje do tych filtrów.`)
};

const pt_ranger_audit_empty_filtered = /** @type {(inputs: Ranger_Audit_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma entrada corresponde a estes filtros.`)
};

const ru_ranger_audit_empty_filtered = /** @type {(inputs: Ranger_Audit_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ни одна запись не подходит под эти фильтры.`)
};

const sv_ranger_audit_empty_filtered = /** @type {(inputs: Ranger_Audit_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen post matchar filtren.`)
};

const tr_ranger_audit_empty_filtered = /** @type {(inputs: Ranger_Audit_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu filtrelere uyan kayıt yok.`)
};

const zh_ranger_audit_empty_filtered = /** @type {(inputs: Ranger_Audit_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有符合这些筛选条件的记录。`)
};

const ja_ranger_audit_empty_filtered = /** @type {(inputs: Ranger_Audit_Empty_FilteredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このフィルターに一致する記録はありません。`)
};

/**
* | output |
* | --- |
* | "No entry matches these filters." |
*
* @param {Ranger_Audit_Empty_FilteredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_empty_filtered = /** @type {((inputs?: Ranger_Audit_Empty_FilteredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_Empty_FilteredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_empty_filtered(inputs)
	if (locale === "de") return de_ranger_audit_empty_filtered(inputs)
	if (locale === "fr") return fr_ranger_audit_empty_filtered(inputs)
	if (locale === "it") return it_ranger_audit_empty_filtered(inputs)
	if (locale === "nl") return nl_ranger_audit_empty_filtered(inputs)
	if (locale === "pl") return pl_ranger_audit_empty_filtered(inputs)
	if (locale === "pt") return pt_ranger_audit_empty_filtered(inputs)
	if (locale === "ru") return ru_ranger_audit_empty_filtered(inputs)
	if (locale === "sv") return sv_ranger_audit_empty_filtered(inputs)
	if (locale === "tr") return tr_ranger_audit_empty_filtered(inputs)
	if (locale === "zh") return zh_ranger_audit_empty_filtered(inputs)
	if (locale === "ja") return ja_ranger_audit_empty_filtered(inputs)
	return en_ranger_audit_empty_filtered(inputs)
});
