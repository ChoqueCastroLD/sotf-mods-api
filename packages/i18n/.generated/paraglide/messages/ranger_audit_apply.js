/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_ApplyInputs */

const en_ranger_audit_apply = /** @type {(inputs: Ranger_Audit_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter`)
};

const es_ranger_audit_apply = /** @type {(inputs: Ranger_Audit_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar`)
};

const de_ranger_audit_apply = /** @type {(inputs: Ranger_Audit_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtern`)
};

const fr_ranger_audit_apply = /** @type {(inputs: Ranger_Audit_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrer`)
};

const it_ranger_audit_apply = /** @type {(inputs: Ranger_Audit_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtra`)
};

const nl_ranger_audit_apply = /** @type {(inputs: Ranger_Audit_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filteren`)
};

const pl_ranger_audit_apply = /** @type {(inputs: Ranger_Audit_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtruj`)
};

const pt_ranger_audit_apply = /** @type {(inputs: Ranger_Audit_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar`)
};

const ru_ranger_audit_apply = /** @type {(inputs: Ranger_Audit_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фильтровать`)
};

const sv_ranger_audit_apply = /** @type {(inputs: Ranger_Audit_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrera`)
};

const tr_ranger_audit_apply = /** @type {(inputs: Ranger_Audit_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrele`)
};

const zh_ranger_audit_apply = /** @type {(inputs: Ranger_Audit_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`筛选`)
};

const ja_ranger_audit_apply = /** @type {(inputs: Ranger_Audit_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`絞り込む`)
};

/**
* | output |
* | --- |
* | "Filter" |
*
* @param {Ranger_Audit_ApplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_apply = /** @type {((inputs?: Ranger_Audit_ApplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_ApplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_apply(inputs)
	if (locale === "de") return de_ranger_audit_apply(inputs)
	if (locale === "fr") return fr_ranger_audit_apply(inputs)
	if (locale === "it") return it_ranger_audit_apply(inputs)
	if (locale === "nl") return nl_ranger_audit_apply(inputs)
	if (locale === "pl") return pl_ranger_audit_apply(inputs)
	if (locale === "pt") return pt_ranger_audit_apply(inputs)
	if (locale === "ru") return ru_ranger_audit_apply(inputs)
	if (locale === "sv") return sv_ranger_audit_apply(inputs)
	if (locale === "tr") return tr_ranger_audit_apply(inputs)
	if (locale === "zh") return zh_ranger_audit_apply(inputs)
	if (locale === "ja") return ja_ranger_audit_apply(inputs)
	return en_ranger_audit_apply(inputs)
});
