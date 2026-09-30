/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Referrer_AiInputs */

const en_basecamp_referrer_ai = /** @type {(inputs: Basecamp_Referrer_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI assistants`)
};

const es_basecamp_referrer_ai = /** @type {(inputs: Basecamp_Referrer_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asistentes de IA`)
};

const de_basecamp_referrer_ai = /** @type {(inputs: Basecamp_Referrer_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KI-Assistenten`)
};

const fr_basecamp_referrer_ai = /** @type {(inputs: Basecamp_Referrer_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistants IA`)
};

const it_basecamp_referrer_ai = /** @type {(inputs: Basecamp_Referrer_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistenti IA`)
};

const nl_basecamp_referrer_ai = /** @type {(inputs: Basecamp_Referrer_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI-assistenten`)
};

const pl_basecamp_referrer_ai = /** @type {(inputs: Basecamp_Referrer_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asystenci AI`)
};

const pt_basecamp_referrer_ai = /** @type {(inputs: Basecamp_Referrer_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistentes de IA`)
};

const ru_basecamp_referrer_ai = /** @type {(inputs: Basecamp_Referrer_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ИИ-ассистенты`)
};

const sv_basecamp_referrer_ai = /** @type {(inputs: Basecamp_Referrer_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI-assistenter`)
};

const tr_basecamp_referrer_ai = /** @type {(inputs: Basecamp_Referrer_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapay zekâ asistanları`)
};

const zh_basecamp_referrer_ai = /** @type {(inputs: Basecamp_Referrer_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI 助手`)
};

const ja_basecamp_referrer_ai = /** @type {(inputs: Basecamp_Referrer_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI アシスタント`)
};

/**
* | output |
* | --- |
* | "AI assistants" |
*
* @param {Basecamp_Referrer_AiInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_referrer_ai = /** @type {((inputs?: Basecamp_Referrer_AiInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Referrer_AiInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_referrer_ai(inputs)
	if (locale === "de") return de_basecamp_referrer_ai(inputs)
	if (locale === "fr") return fr_basecamp_referrer_ai(inputs)
	if (locale === "it") return it_basecamp_referrer_ai(inputs)
	if (locale === "nl") return nl_basecamp_referrer_ai(inputs)
	if (locale === "pl") return pl_basecamp_referrer_ai(inputs)
	if (locale === "pt") return pt_basecamp_referrer_ai(inputs)
	if (locale === "ru") return ru_basecamp_referrer_ai(inputs)
	if (locale === "sv") return sv_basecamp_referrer_ai(inputs)
	if (locale === "tr") return tr_basecamp_referrer_ai(inputs)
	if (locale === "zh") return zh_basecamp_referrer_ai(inputs)
	if (locale === "ja") return ja_basecamp_referrer_ai(inputs)
	return en_basecamp_referrer_ai(inputs)
});
