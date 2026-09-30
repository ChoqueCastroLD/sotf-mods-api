/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Ranger_Decided_ApproveInputs */

const en_ranger_decided_approve = /** @type {(inputs: Ranger_Decided_ApproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Approved: ${i?.title}`)
};

const es_ranger_decided_approve = /** @type {(inputs: Ranger_Decided_ApproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aprobado: ${i?.title}`)
};

const de_ranger_decided_approve = /** @type {(inputs: Ranger_Decided_ApproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Freigegeben: ${i?.title}`)
};

const fr_ranger_decided_approve = /** @type {(inputs: Ranger_Decided_ApproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Approuvé : ${i?.title}`)
};

const it_ranger_decided_approve = /** @type {(inputs: Ranger_Decided_ApproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Approvato: ${i?.title}`)
};

const nl_ranger_decided_approve = /** @type {(inputs: Ranger_Decided_ApproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Goedgekeurd: ${i?.title}`)
};

const pl_ranger_decided_approve = /** @type {(inputs: Ranger_Decided_ApproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zatwierdzono: ${i?.title}`)
};

const pt_ranger_decided_approve = /** @type {(inputs: Ranger_Decided_ApproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aprovado: ${i?.title}`)
};

const ru_ranger_decided_approve = /** @type {(inputs: Ranger_Decided_ApproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Одобрено: ${i?.title}`)
};

const sv_ranger_decided_approve = /** @type {(inputs: Ranger_Decided_ApproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Godkänd: ${i?.title}`)
};

const tr_ranger_decided_approve = /** @type {(inputs: Ranger_Decided_ApproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Onaylandı: ${i?.title}`)
};

const zh_ranger_decided_approve = /** @type {(inputs: Ranger_Decided_ApproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已批准：${i?.title}`)
};

const ja_ranger_decided_approve = /** @type {(inputs: Ranger_Decided_ApproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`承認しました：${i?.title}`)
};

/**
* | output |
* | --- |
* | "Approved: {title}" |
*
* @param {Ranger_Decided_ApproveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_decided_approve = /** @type {((inputs: Ranger_Decided_ApproveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decided_ApproveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_decided_approve(inputs)
	if (locale === "de") return de_ranger_decided_approve(inputs)
	if (locale === "fr") return fr_ranger_decided_approve(inputs)
	if (locale === "it") return it_ranger_decided_approve(inputs)
	if (locale === "nl") return nl_ranger_decided_approve(inputs)
	if (locale === "pl") return pl_ranger_decided_approve(inputs)
	if (locale === "pt") return pt_ranger_decided_approve(inputs)
	if (locale === "ru") return ru_ranger_decided_approve(inputs)
	if (locale === "sv") return sv_ranger_decided_approve(inputs)
	if (locale === "tr") return tr_ranger_decided_approve(inputs)
	if (locale === "zh") return zh_ranger_decided_approve(inputs)
	if (locale === "ja") return ja_ranger_decided_approve(inputs)
	return en_ranger_decided_approve(inputs)
});
