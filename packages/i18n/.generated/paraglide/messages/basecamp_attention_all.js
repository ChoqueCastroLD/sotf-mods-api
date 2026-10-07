/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_AllInputs */

const en_basecamp_attention_all = /** @type {(inputs: Basecamp_Attention_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All`)
};

const es_basecamp_attention_all = /** @type {(inputs: Basecamp_Attention_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo`)
};

const de_basecamp_attention_all = /** @type {(inputs: Basecamp_Attention_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const fr_basecamp_attention_all = /** @type {(inputs: Basecamp_Attention_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout`)
};

const it_basecamp_attention_all = /** @type {(inputs: Basecamp_Attention_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto`)
};

const nl_basecamp_attention_all = /** @type {(inputs: Basecamp_Attention_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles`)
};

const pl_basecamp_attention_all = /** @type {(inputs: Basecamp_Attention_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko`)
};

const pt_basecamp_attention_all = /** @type {(inputs: Basecamp_Attention_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo`)
};

const ru_basecamp_attention_all = /** @type {(inputs: Basecamp_Attention_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все`)
};

const sv_basecamp_attention_all = /** @type {(inputs: Basecamp_Attention_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla`)
};

const tr_basecamp_attention_all = /** @type {(inputs: Basecamp_Attention_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümü`)
};

const zh_basecamp_attention_all = /** @type {(inputs: Basecamp_Attention_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const ja_basecamp_attention_all = /** @type {(inputs: Basecamp_Attention_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて`)
};

/**
* | output |
* | --- |
* | "All" |
*
* @param {Basecamp_Attention_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_all = /** @type {((inputs?: Basecamp_Attention_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_all(inputs)
	if (locale === "de") return de_basecamp_attention_all(inputs)
	if (locale === "fr") return fr_basecamp_attention_all(inputs)
	if (locale === "it") return it_basecamp_attention_all(inputs)
	if (locale === "nl") return nl_basecamp_attention_all(inputs)
	if (locale === "pl") return pl_basecamp_attention_all(inputs)
	if (locale === "pt") return pt_basecamp_attention_all(inputs)
	if (locale === "ru") return ru_basecamp_attention_all(inputs)
	if (locale === "sv") return sv_basecamp_attention_all(inputs)
	if (locale === "tr") return tr_basecamp_attention_all(inputs)
	if (locale === "zh") return zh_basecamp_attention_all(inputs)
	if (locale === "ja") return ja_basecamp_attention_all(inputs)
	return en_basecamp_attention_all(inputs)
});
