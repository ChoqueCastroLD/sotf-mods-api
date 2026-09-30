/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Attention_RejectedInputs */

const en_basecamp_attention_rejected = /** @type {(inputs: Basecamp_Attention_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} was not approved: see the reason and resubmit`)
};

const es_basecamp_attention_rejected = /** @type {(inputs: Basecamp_Attention_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} no se aprobó: mira el motivo y reenvíalo`)
};

const de_basecamp_attention_rejected = /** @type {(inputs: Basecamp_Attention_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} wurde nicht freigegeben: Grund ansehen und erneut einreichen`)
};

const fr_basecamp_attention_rejected = /** @type {(inputs: Basecamp_Attention_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} n’a pas été approuvé : consultez le motif et renvoyez-le`)
};

const it_basecamp_attention_rejected = /** @type {(inputs: Basecamp_Attention_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} non è stata approvata: guarda il motivo e rinviala`)
};

const nl_basecamp_attention_rejected = /** @type {(inputs: Basecamp_Attention_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is niet goedgekeurd: bekijk de reden en stuur hem opnieuw in`)
};

const pl_basecamp_attention_rejected = /** @type {(inputs: Basecamp_Attention_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} nie został zatwierdzony: sprawdź powód i wyślij ponownie`)
};

const pt_basecamp_attention_rejected = /** @type {(inputs: Basecamp_Attention_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} não foi aprovado: veja o motivo e reenvie`)
};

const ru_basecamp_attention_rejected = /** @type {(inputs: Basecamp_Attention_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} не одобрен: посмотрите причину и отправьте снова`)
};

const sv_basecamp_attention_rejected = /** @type {(inputs: Basecamp_Attention_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} godkändes inte: se orsaken och skicka in igen`)
};

const tr_basecamp_attention_rejected = /** @type {(inputs: Basecamp_Attention_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} onaylanmadı: nedenine bak ve yeniden gönder`)
};

const zh_basecamp_attention_rejected = /** @type {(inputs: Basecamp_Attention_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 未通过审核：查看原因并重新提交`)
};

const ja_basecamp_attention_rejected = /** @type {(inputs: Basecamp_Attention_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} は承認されませんでした。理由を確認して再提出してください`)
};

/**
* | output |
* | --- |
* | "{name} was not approved: see the reason and resubmit" |
*
* @param {Basecamp_Attention_RejectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_rejected = /** @type {((inputs: Basecamp_Attention_RejectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_RejectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_rejected(inputs)
	if (locale === "de") return de_basecamp_attention_rejected(inputs)
	if (locale === "fr") return fr_basecamp_attention_rejected(inputs)
	if (locale === "it") return it_basecamp_attention_rejected(inputs)
	if (locale === "nl") return nl_basecamp_attention_rejected(inputs)
	if (locale === "pl") return pl_basecamp_attention_rejected(inputs)
	if (locale === "pt") return pt_basecamp_attention_rejected(inputs)
	if (locale === "ru") return ru_basecamp_attention_rejected(inputs)
	if (locale === "sv") return sv_basecamp_attention_rejected(inputs)
	if (locale === "tr") return tr_basecamp_attention_rejected(inputs)
	if (locale === "zh") return zh_basecamp_attention_rejected(inputs)
	if (locale === "ja") return ja_basecamp_attention_rejected(inputs)
	return en_basecamp_attention_rejected(inputs)
});
