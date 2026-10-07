/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_DismissInputs */

const en_basecamp_attention_dismiss = /** @type {(inputs: Basecamp_Attention_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dismiss`)
};

const es_basecamp_attention_dismiss = /** @type {(inputs: Basecamp_Attention_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar`)
};

const de_basecamp_attention_dismiss = /** @type {(inputs: Basecamp_Attention_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ausblenden`)
};

const fr_basecamp_attention_dismiss = /** @type {(inputs: Basecamp_Attention_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masquer`)
};

const it_basecamp_attention_dismiss = /** @type {(inputs: Basecamp_Attention_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascondi`)
};

const nl_basecamp_attention_dismiss = /** @type {(inputs: Basecamp_Attention_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbergen`)
};

const pl_basecamp_attention_dismiss = /** @type {(inputs: Basecamp_Attention_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzuć`)
};

const pt_basecamp_attention_dismiss = /** @type {(inputs: Basecamp_Attention_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dispensar`)
};

const ru_basecamp_attention_dismiss = /** @type {(inputs: Basecamp_Attention_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыть`)
};

const sv_basecamp_attention_dismiss = /** @type {(inputs: Basecamp_Attention_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dölj`)
};

const tr_basecamp_attention_dismiss = /** @type {(inputs: Basecamp_Attention_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizle`)
};

const zh_basecamp_attention_dismiss = /** @type {(inputs: Basecamp_Attention_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`忽略`)
};

const ja_basecamp_attention_dismiss = /** @type {(inputs: Basecamp_Attention_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非表示にする`)
};

/**
* | output |
* | --- |
* | "Dismiss" |
*
* @param {Basecamp_Attention_DismissInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_dismiss = /** @type {((inputs?: Basecamp_Attention_DismissInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_DismissInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_dismiss(inputs)
	if (locale === "de") return de_basecamp_attention_dismiss(inputs)
	if (locale === "fr") return fr_basecamp_attention_dismiss(inputs)
	if (locale === "it") return it_basecamp_attention_dismiss(inputs)
	if (locale === "nl") return nl_basecamp_attention_dismiss(inputs)
	if (locale === "pl") return pl_basecamp_attention_dismiss(inputs)
	if (locale === "pt") return pt_basecamp_attention_dismiss(inputs)
	if (locale === "ru") return ru_basecamp_attention_dismiss(inputs)
	if (locale === "sv") return sv_basecamp_attention_dismiss(inputs)
	if (locale === "tr") return tr_basecamp_attention_dismiss(inputs)
	if (locale === "zh") return zh_basecamp_attention_dismiss(inputs)
	if (locale === "ja") return ja_basecamp_attention_dismiss(inputs)
	return en_basecamp_attention_dismiss(inputs)
});
