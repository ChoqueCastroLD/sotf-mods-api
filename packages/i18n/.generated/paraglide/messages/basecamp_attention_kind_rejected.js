/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Kind_RejectedInputs */

const en_basecamp_attention_kind_rejected = /** @type {(inputs: Basecamp_Attention_Kind_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not approved`)
};

const es_basecamp_attention_kind_rejected = /** @type {(inputs: Basecamp_Attention_Kind_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No aprobado`)
};

const de_basecamp_attention_kind_rejected = /** @type {(inputs: Basecamp_Attention_Kind_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht freigegeben`)
};

const fr_basecamp_attention_kind_rejected = /** @type {(inputs: Basecamp_Attention_Kind_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non approuvé`)
};

const it_basecamp_attention_kind_rejected = /** @type {(inputs: Basecamp_Attention_Kind_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non approvato`)
};

const nl_basecamp_attention_kind_rejected = /** @type {(inputs: Basecamp_Attention_Kind_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet goedgekeurd`)
};

const pl_basecamp_attention_kind_rejected = /** @type {(inputs: Basecamp_Attention_Kind_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niezatwierdzone`)
};

const pt_basecamp_attention_kind_rejected = /** @type {(inputs: Basecamp_Attention_Kind_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não aprovado`)
};

const ru_basecamp_attention_kind_rejected = /** @type {(inputs: Basecamp_Attention_Kind_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не одобрено`)
};

const sv_basecamp_attention_kind_rejected = /** @type {(inputs: Basecamp_Attention_Kind_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ej godkänd`)
};

const tr_basecamp_attention_kind_rejected = /** @type {(inputs: Basecamp_Attention_Kind_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onaylanmadı`)
};

const zh_basecamp_attention_kind_rejected = /** @type {(inputs: Basecamp_Attention_Kind_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未通过`)
};

const ja_basecamp_attention_kind_rejected = /** @type {(inputs: Basecamp_Attention_Kind_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未承認`)
};

/**
* | output |
* | --- |
* | "Not approved" |
*
* @param {Basecamp_Attention_Kind_RejectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_kind_rejected = /** @type {((inputs?: Basecamp_Attention_Kind_RejectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Kind_RejectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_kind_rejected(inputs)
	if (locale === "de") return de_basecamp_attention_kind_rejected(inputs)
	if (locale === "fr") return fr_basecamp_attention_kind_rejected(inputs)
	if (locale === "it") return it_basecamp_attention_kind_rejected(inputs)
	if (locale === "nl") return nl_basecamp_attention_kind_rejected(inputs)
	if (locale === "pl") return pl_basecamp_attention_kind_rejected(inputs)
	if (locale === "pt") return pt_basecamp_attention_kind_rejected(inputs)
	if (locale === "ru") return ru_basecamp_attention_kind_rejected(inputs)
	if (locale === "sv") return sv_basecamp_attention_kind_rejected(inputs)
	if (locale === "tr") return tr_basecamp_attention_kind_rejected(inputs)
	if (locale === "zh") return zh_basecamp_attention_kind_rejected(inputs)
	if (locale === "ja") return ja_basecamp_attention_kind_rejected(inputs)
	return en_basecamp_attention_kind_rejected(inputs)
});
