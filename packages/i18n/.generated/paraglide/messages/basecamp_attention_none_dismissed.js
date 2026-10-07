/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_None_DismissedInputs */

const en_basecamp_attention_none_dismissed = /** @type {(inputs: Basecamp_Attention_None_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have not dismissed anything.`)
};

const es_basecamp_attention_none_dismissed = /** @type {(inputs: Basecamp_Attention_None_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No has descartado nada.`)
};

const de_basecamp_attention_none_dismissed = /** @type {(inputs: Basecamp_Attention_None_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast nichts ausgeblendet.`)
};

const fr_basecamp_attention_none_dismissed = /** @type {(inputs: Basecamp_Attention_None_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous n'avez rien masqué.`)
};

const it_basecamp_attention_none_dismissed = /** @type {(inputs: Basecamp_Attention_None_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non hai nascosto nulla.`)
};

const nl_basecamp_attention_none_dismissed = /** @type {(inputs: Basecamp_Attention_None_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt niets verborgen.`)
};

const pl_basecamp_attention_none_dismissed = /** @type {(inputs: Basecamp_Attention_None_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nic nie zostało odrzucone.`)
};

const pt_basecamp_attention_none_dismissed = /** @type {(inputs: Basecamp_Attention_None_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você não dispensou nada.`)
};

const ru_basecamp_attention_none_dismissed = /** @type {(inputs: Basecamp_Attention_None_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы ничего не скрывали.`)
};

const sv_basecamp_attention_none_dismissed = /** @type {(inputs: Basecamp_Attention_None_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har inte dolt något.`)
};

const tr_basecamp_attention_none_dismissed = /** @type {(inputs: Basecamp_Attention_None_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hiçbir şeyi gizlemediniz.`)
};

const zh_basecamp_attention_none_dismissed = /** @type {(inputs: Basecamp_Attention_None_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你没有忽略任何事项。`)
};

const ja_basecamp_attention_none_dismissed = /** @type {(inputs: Basecamp_Attention_None_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非表示にした項目はありません。`)
};

/**
* | output |
* | --- |
* | "You have not dismissed anything." |
*
* @param {Basecamp_Attention_None_DismissedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_none_dismissed = /** @type {((inputs?: Basecamp_Attention_None_DismissedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_None_DismissedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_none_dismissed(inputs)
	if (locale === "de") return de_basecamp_attention_none_dismissed(inputs)
	if (locale === "fr") return fr_basecamp_attention_none_dismissed(inputs)
	if (locale === "it") return it_basecamp_attention_none_dismissed(inputs)
	if (locale === "nl") return nl_basecamp_attention_none_dismissed(inputs)
	if (locale === "pl") return pl_basecamp_attention_none_dismissed(inputs)
	if (locale === "pt") return pt_basecamp_attention_none_dismissed(inputs)
	if (locale === "ru") return ru_basecamp_attention_none_dismissed(inputs)
	if (locale === "sv") return sv_basecamp_attention_none_dismissed(inputs)
	if (locale === "tr") return tr_basecamp_attention_none_dismissed(inputs)
	if (locale === "zh") return zh_basecamp_attention_none_dismissed(inputs)
	if (locale === "ja") return ja_basecamp_attention_none_dismissed(inputs)
	return en_basecamp_attention_none_dismissed(inputs)
});
