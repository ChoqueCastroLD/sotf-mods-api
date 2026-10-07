/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_Reason_SearchInputs */

const en_ranger_audit_reason_search = /** @type {(inputs: Ranger_Audit_Reason_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search the reason`)
};

const es_ranger_audit_reason_search = /** @type {(inputs: Ranger_Audit_Reason_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar en el motivo`)
};

const de_ranger_audit_reason_search = /** @type {(inputs: Ranger_Audit_Reason_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Im Grund suchen`)
};

const fr_ranger_audit_reason_search = /** @type {(inputs: Ranger_Audit_Reason_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher dans le motif`)
};

const it_ranger_audit_reason_search = /** @type {(inputs: Ranger_Audit_Reason_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca nel motivo`)
};

const nl_ranger_audit_reason_search = /** @type {(inputs: Ranger_Audit_Reason_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken in de reden`)
};

const pl_ranger_audit_reason_search = /** @type {(inputs: Ranger_Audit_Reason_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj w powodzie`)
};

const pt_ranger_audit_reason_search = /** @type {(inputs: Ranger_Audit_Reason_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar no motivo`)
};

const ru_ranger_audit_reason_search = /** @type {(inputs: Ranger_Audit_Reason_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск по причине`)
};

const sv_ranger_audit_reason_search = /** @type {(inputs: Ranger_Audit_Reason_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök i orsaken`)
};

const tr_ranger_audit_reason_search = /** @type {(inputs: Ranger_Audit_Reason_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerekçede ara`)
};

const zh_ranger_audit_reason_search = /** @type {(inputs: Ranger_Audit_Reason_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索原因`)
};

const ja_ranger_audit_reason_search = /** @type {(inputs: Ranger_Audit_Reason_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由を検索`)
};

/**
* | output |
* | --- |
* | "Search the reason" |
*
* @param {Ranger_Audit_Reason_SearchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_reason_search = /** @type {((inputs?: Ranger_Audit_Reason_SearchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_Reason_SearchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_reason_search(inputs)
	if (locale === "de") return de_ranger_audit_reason_search(inputs)
	if (locale === "fr") return fr_ranger_audit_reason_search(inputs)
	if (locale === "it") return it_ranger_audit_reason_search(inputs)
	if (locale === "nl") return nl_ranger_audit_reason_search(inputs)
	if (locale === "pl") return pl_ranger_audit_reason_search(inputs)
	if (locale === "pt") return pt_ranger_audit_reason_search(inputs)
	if (locale === "ru") return ru_ranger_audit_reason_search(inputs)
	if (locale === "sv") return sv_ranger_audit_reason_search(inputs)
	if (locale === "tr") return tr_ranger_audit_reason_search(inputs)
	if (locale === "zh") return zh_ranger_audit_reason_search(inputs)
	if (locale === "ja") return ja_ranger_audit_reason_search(inputs)
	return en_ranger_audit_reason_search(inputs)
});
