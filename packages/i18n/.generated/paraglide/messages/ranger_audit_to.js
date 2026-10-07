/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_ToInputs */

const en_ranger_audit_to = /** @type {(inputs: Ranger_Audit_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To date`)
};

const es_ranger_audit_to = /** @type {(inputs: Ranger_Audit_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hasta la fecha`)
};

const de_ranger_audit_to = /** @type {(inputs: Ranger_Audit_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bis Datum`)
};

const fr_ranger_audit_to = /** @type {(inputs: Ranger_Audit_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jusqu’au`)
};

const it_ranger_audit_to = /** @type {(inputs: Ranger_Audit_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fino alla data`)
};

const nl_ranger_audit_to = /** @type {(inputs: Ranger_Audit_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tot datum`)
};

const pl_ranger_audit_to = /** @type {(inputs: Ranger_Audit_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do daty`)
};

const pt_ranger_audit_to = /** @type {(inputs: Ranger_Audit_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Até a data`)
};

const ru_ranger_audit_to = /** @type {(inputs: Ranger_Audit_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По дату`)
};

const sv_ranger_audit_to = /** @type {(inputs: Ranger_Audit_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Till datum`)
};

const tr_ranger_audit_to = /** @type {(inputs: Ranger_Audit_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bitiş tarihi`)
};

const zh_ranger_audit_to = /** @type {(inputs: Ranger_Audit_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`截止日期`)
};

const ja_ranger_audit_to = /** @type {(inputs: Ranger_Audit_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`終了日`)
};

/**
* | output |
* | --- |
* | "To date" |
*
* @param {Ranger_Audit_ToInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_to = /** @type {((inputs?: Ranger_Audit_ToInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_ToInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_to(inputs)
	if (locale === "de") return de_ranger_audit_to(inputs)
	if (locale === "fr") return fr_ranger_audit_to(inputs)
	if (locale === "it") return it_ranger_audit_to(inputs)
	if (locale === "nl") return nl_ranger_audit_to(inputs)
	if (locale === "pl") return pl_ranger_audit_to(inputs)
	if (locale === "pt") return pt_ranger_audit_to(inputs)
	if (locale === "ru") return ru_ranger_audit_to(inputs)
	if (locale === "sv") return sv_ranger_audit_to(inputs)
	if (locale === "tr") return tr_ranger_audit_to(inputs)
	if (locale === "zh") return zh_ranger_audit_to(inputs)
	if (locale === "ja") return ja_ranger_audit_to(inputs)
	return en_ranger_audit_to(inputs)
});
