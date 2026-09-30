/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ reason: NonNullable<unknown> }} Basecamp_Versions_Rejected_ReasonInputs */

const en_basecamp_versions_rejected_reason = /** @type {(inputs: Basecamp_Versions_Rejected_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Not approved: ${i?.reason}`)
};

const es_basecamp_versions_rejected_reason = /** @type {(inputs: Basecamp_Versions_Rejected_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No aprobada: ${i?.reason}`)
};

const de_basecamp_versions_rejected_reason = /** @type {(inputs: Basecamp_Versions_Rejected_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nicht freigegeben: ${i?.reason}`)
};

const fr_basecamp_versions_rejected_reason = /** @type {(inputs: Basecamp_Versions_Rejected_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Non approuvée : ${i?.reason}`)
};

const it_basecamp_versions_rejected_reason = /** @type {(inputs: Basecamp_Versions_Rejected_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Non approvata: ${i?.reason}`)
};

const nl_basecamp_versions_rejected_reason = /** @type {(inputs: Basecamp_Versions_Rejected_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Niet goedgekeurd: ${i?.reason}`)
};

const pl_basecamp_versions_rejected_reason = /** @type {(inputs: Basecamp_Versions_Rejected_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Niezatwierdzona: ${i?.reason}`)
};

const pt_basecamp_versions_rejected_reason = /** @type {(inputs: Basecamp_Versions_Rejected_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Não aprovada: ${i?.reason}`)
};

const ru_basecamp_versions_rejected_reason = /** @type {(inputs: Basecamp_Versions_Rejected_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Не одобрена: ${i?.reason}`)
};

const sv_basecamp_versions_rejected_reason = /** @type {(inputs: Basecamp_Versions_Rejected_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inte godkänd: ${i?.reason}`)
};

const tr_basecamp_versions_rejected_reason = /** @type {(inputs: Basecamp_Versions_Rejected_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Onaylanmadı: ${i?.reason}`)
};

const zh_basecamp_versions_rejected_reason = /** @type {(inputs: Basecamp_Versions_Rejected_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`未通过：${i?.reason}`)
};

const ja_basecamp_versions_rejected_reason = /** @type {(inputs: Basecamp_Versions_Rejected_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`不承認：${i?.reason}`)
};

/**
* | output |
* | --- |
* | "Not approved: {reason}" |
*
* @param {Basecamp_Versions_Rejected_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_rejected_reason = /** @type {((inputs: Basecamp_Versions_Rejected_ReasonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Rejected_ReasonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_rejected_reason(inputs)
	if (locale === "de") return de_basecamp_versions_rejected_reason(inputs)
	if (locale === "fr") return fr_basecamp_versions_rejected_reason(inputs)
	if (locale === "it") return it_basecamp_versions_rejected_reason(inputs)
	if (locale === "nl") return nl_basecamp_versions_rejected_reason(inputs)
	if (locale === "pl") return pl_basecamp_versions_rejected_reason(inputs)
	if (locale === "pt") return pt_basecamp_versions_rejected_reason(inputs)
	if (locale === "ru") return ru_basecamp_versions_rejected_reason(inputs)
	if (locale === "sv") return sv_basecamp_versions_rejected_reason(inputs)
	if (locale === "tr") return tr_basecamp_versions_rejected_reason(inputs)
	if (locale === "zh") return zh_basecamp_versions_rejected_reason(inputs)
	if (locale === "ja") return ja_basecamp_versions_rejected_reason(inputs)
	return en_basecamp_versions_rejected_reason(inputs)
});
