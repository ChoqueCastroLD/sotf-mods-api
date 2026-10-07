/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_DismissedInputs */

const en_basecamp_attention_dismissed = /** @type {(inputs: Basecamp_Attention_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dismissed`)
};

const es_basecamp_attention_dismissed = /** @type {(inputs: Basecamp_Attention_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartado`)
};

const de_basecamp_attention_dismissed = /** @type {(inputs: Basecamp_Attention_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ausgeblendet`)
};

const fr_basecamp_attention_dismissed = /** @type {(inputs: Basecamp_Attention_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masqué`)
};

const it_basecamp_attention_dismissed = /** @type {(inputs: Basecamp_Attention_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascosto`)
};

const nl_basecamp_attention_dismissed = /** @type {(inputs: Basecamp_Attention_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verborgen`)
};

const pl_basecamp_attention_dismissed = /** @type {(inputs: Basecamp_Attention_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzucono`)
};

const pt_basecamp_attention_dismissed = /** @type {(inputs: Basecamp_Attention_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dispensado`)
};

const ru_basecamp_attention_dismissed = /** @type {(inputs: Basecamp_Attention_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыто`)
};

const sv_basecamp_attention_dismissed = /** @type {(inputs: Basecamp_Attention_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dolt`)
};

const tr_basecamp_attention_dismissed = /** @type {(inputs: Basecamp_Attention_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizlendi`)
};

const zh_basecamp_attention_dismissed = /** @type {(inputs: Basecamp_Attention_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已忽略`)
};

const ja_basecamp_attention_dismissed = /** @type {(inputs: Basecamp_Attention_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非表示にしました`)
};

/**
* | output |
* | --- |
* | "Dismissed" |
*
* @param {Basecamp_Attention_DismissedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_dismissed = /** @type {((inputs?: Basecamp_Attention_DismissedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_DismissedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_dismissed(inputs)
	if (locale === "de") return de_basecamp_attention_dismissed(inputs)
	if (locale === "fr") return fr_basecamp_attention_dismissed(inputs)
	if (locale === "it") return it_basecamp_attention_dismissed(inputs)
	if (locale === "nl") return nl_basecamp_attention_dismissed(inputs)
	if (locale === "pl") return pl_basecamp_attention_dismissed(inputs)
	if (locale === "pt") return pt_basecamp_attention_dismissed(inputs)
	if (locale === "ru") return ru_basecamp_attention_dismissed(inputs)
	if (locale === "sv") return sv_basecamp_attention_dismissed(inputs)
	if (locale === "tr") return tr_basecamp_attention_dismissed(inputs)
	if (locale === "zh") return zh_basecamp_attention_dismissed(inputs)
	if (locale === "ja") return ja_basecamp_attention_dismissed(inputs)
	return en_basecamp_attention_dismissed(inputs)
});
