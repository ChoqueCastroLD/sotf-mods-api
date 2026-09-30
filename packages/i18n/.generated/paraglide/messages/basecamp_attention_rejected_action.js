/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Rejected_ActionInputs */

const en_basecamp_attention_rejected_action = /** @type {(inputs: Basecamp_Attention_Rejected_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See the reason`)
};

const es_basecamp_attention_rejected_action = /** @type {(inputs: Basecamp_Attention_Rejected_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver el motivo`)
};

const de_basecamp_attention_rejected_action = /** @type {(inputs: Basecamp_Attention_Rejected_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grund ansehen`)
};

const fr_basecamp_attention_rejected_action = /** @type {(inputs: Basecamp_Attention_Rejected_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir le motif`)
};

const it_basecamp_attention_rejected_action = /** @type {(inputs: Basecamp_Attention_Rejected_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi il motivo`)
};

const nl_basecamp_attention_rejected_action = /** @type {(inputs: Basecamp_Attention_Rejected_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reden bekijken`)
};

const pl_basecamp_attention_rejected_action = /** @type {(inputs: Basecamp_Attention_Rejected_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz powód`)
};

const pt_basecamp_attention_rejected_action = /** @type {(inputs: Basecamp_Attention_Rejected_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver o motivo`)
};

const ru_basecamp_attention_rejected_action = /** @type {(inputs: Basecamp_Attention_Rejected_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Посмотреть причину`)
};

const sv_basecamp_attention_rejected_action = /** @type {(inputs: Basecamp_Attention_Rejected_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se orsaken`)
};

const tr_basecamp_attention_rejected_action = /** @type {(inputs: Basecamp_Attention_Rejected_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedeni gör`)
};

const zh_basecamp_attention_rejected_action = /** @type {(inputs: Basecamp_Attention_Rejected_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看原因`)
};

const ja_basecamp_attention_rejected_action = /** @type {(inputs: Basecamp_Attention_Rejected_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由を見る`)
};

/**
* | output |
* | --- |
* | "See the reason" |
*
* @param {Basecamp_Attention_Rejected_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_rejected_action = /** @type {((inputs?: Basecamp_Attention_Rejected_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Rejected_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_rejected_action(inputs)
	if (locale === "de") return de_basecamp_attention_rejected_action(inputs)
	if (locale === "fr") return fr_basecamp_attention_rejected_action(inputs)
	if (locale === "it") return it_basecamp_attention_rejected_action(inputs)
	if (locale === "nl") return nl_basecamp_attention_rejected_action(inputs)
	if (locale === "pl") return pl_basecamp_attention_rejected_action(inputs)
	if (locale === "pt") return pt_basecamp_attention_rejected_action(inputs)
	if (locale === "ru") return ru_basecamp_attention_rejected_action(inputs)
	if (locale === "sv") return sv_basecamp_attention_rejected_action(inputs)
	if (locale === "tr") return tr_basecamp_attention_rejected_action(inputs)
	if (locale === "zh") return zh_basecamp_attention_rejected_action(inputs)
	if (locale === "ja") return ja_basecamp_attention_rejected_action(inputs)
	return en_basecamp_attention_rejected_action(inputs)
});
