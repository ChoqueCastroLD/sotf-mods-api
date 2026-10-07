/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Attention_Dismiss_NamedInputs */

const en_basecamp_attention_dismiss_named = /** @type {(inputs: Basecamp_Attention_Dismiss_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dismiss: ${i?.name}`)
};

const es_basecamp_attention_dismiss_named = /** @type {(inputs: Basecamp_Attention_Dismiss_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descartar: ${i?.name}`)
};

const de_basecamp_attention_dismiss_named = /** @type {(inputs: Basecamp_Attention_Dismiss_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ausblenden: ${i?.name}`)
};

const fr_basecamp_attention_dismiss_named = /** @type {(inputs: Basecamp_Attention_Dismiss_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Masquer : ${i?.name}`)
};

const it_basecamp_attention_dismiss_named = /** @type {(inputs: Basecamp_Attention_Dismiss_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nascondi: ${i?.name}`)
};

const nl_basecamp_attention_dismiss_named = /** @type {(inputs: Basecamp_Attention_Dismiss_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verbergen: ${i?.name}`)
};

const pl_basecamp_attention_dismiss_named = /** @type {(inputs: Basecamp_Attention_Dismiss_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odrzuć: ${i?.name}`)
};

const pt_basecamp_attention_dismiss_named = /** @type {(inputs: Basecamp_Attention_Dismiss_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dispensar: ${i?.name}`)
};

const ru_basecamp_attention_dismiss_named = /** @type {(inputs: Basecamp_Attention_Dismiss_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скрыть: ${i?.name}`)
};

const sv_basecamp_attention_dismiss_named = /** @type {(inputs: Basecamp_Attention_Dismiss_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dölj: ${i?.name}`)
};

const tr_basecamp_attention_dismiss_named = /** @type {(inputs: Basecamp_Attention_Dismiss_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gizle: ${i?.name}`)
};

const zh_basecamp_attention_dismiss_named = /** @type {(inputs: Basecamp_Attention_Dismiss_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`忽略：${i?.name}`)
};

const ja_basecamp_attention_dismiss_named = /** @type {(inputs: Basecamp_Attention_Dismiss_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を非表示にする`)
};

/**
* | output |
* | --- |
* | "Dismiss: {name}" |
*
* @param {Basecamp_Attention_Dismiss_NamedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_dismiss_named = /** @type {((inputs: Basecamp_Attention_Dismiss_NamedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Dismiss_NamedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_dismiss_named(inputs)
	if (locale === "de") return de_basecamp_attention_dismiss_named(inputs)
	if (locale === "fr") return fr_basecamp_attention_dismiss_named(inputs)
	if (locale === "it") return it_basecamp_attention_dismiss_named(inputs)
	if (locale === "nl") return nl_basecamp_attention_dismiss_named(inputs)
	if (locale === "pl") return pl_basecamp_attention_dismiss_named(inputs)
	if (locale === "pt") return pt_basecamp_attention_dismiss_named(inputs)
	if (locale === "ru") return ru_basecamp_attention_dismiss_named(inputs)
	if (locale === "sv") return sv_basecamp_attention_dismiss_named(inputs)
	if (locale === "tr") return tr_basecamp_attention_dismiss_named(inputs)
	if (locale === "zh") return zh_basecamp_attention_dismiss_named(inputs)
	if (locale === "ja") return ja_basecamp_attention_dismiss_named(inputs)
	return en_basecamp_attention_dismiss_named(inputs)
});
