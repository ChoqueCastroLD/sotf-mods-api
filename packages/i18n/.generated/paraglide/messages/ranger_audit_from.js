/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_FromInputs */

const en_ranger_audit_from = /** @type {(inputs: Ranger_Audit_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`From date`)
};

const es_ranger_audit_from = /** @type {(inputs: Ranger_Audit_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desde la fecha`)
};

const de_ranger_audit_from = /** @type {(inputs: Ranger_Audit_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ab Datum`)
};

const fr_ranger_audit_from = /** @type {(inputs: Ranger_Audit_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À partir du`)
};

const it_ranger_audit_from = /** @type {(inputs: Ranger_Audit_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dalla data`)
};

const nl_ranger_audit_from = /** @type {(inputs: Ranger_Audit_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vanaf datum`)
};

const pl_ranger_audit_from = /** @type {(inputs: Ranger_Audit_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Od daty`)
};

const pt_ranger_audit_from = /** @type {(inputs: Ranger_Audit_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A partir de`)
};

const ru_ranger_audit_from = /** @type {(inputs: Ranger_Audit_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`С даты`)
};

const sv_ranger_audit_from = /** @type {(inputs: Ranger_Audit_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Från datum`)
};

const tr_ranger_audit_from = /** @type {(inputs: Ranger_Audit_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlangıç tarihi`)
};

const zh_ranger_audit_from = /** @type {(inputs: Ranger_Audit_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`起始日期`)
};

const ja_ranger_audit_from = /** @type {(inputs: Ranger_Audit_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開始日`)
};

/**
* | output |
* | --- |
* | "From date" |
*
* @param {Ranger_Audit_FromInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_from = /** @type {((inputs?: Ranger_Audit_FromInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_FromInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_from(inputs)
	if (locale === "de") return de_ranger_audit_from(inputs)
	if (locale === "fr") return fr_ranger_audit_from(inputs)
	if (locale === "it") return it_ranger_audit_from(inputs)
	if (locale === "nl") return nl_ranger_audit_from(inputs)
	if (locale === "pl") return pl_ranger_audit_from(inputs)
	if (locale === "pt") return pt_ranger_audit_from(inputs)
	if (locale === "ru") return ru_ranger_audit_from(inputs)
	if (locale === "sv") return sv_ranger_audit_from(inputs)
	if (locale === "tr") return tr_ranger_audit_from(inputs)
	if (locale === "zh") return zh_ranger_audit_from(inputs)
	if (locale === "ja") return ja_ranger_audit_from(inputs)
	return en_ranger_audit_from(inputs)
});
