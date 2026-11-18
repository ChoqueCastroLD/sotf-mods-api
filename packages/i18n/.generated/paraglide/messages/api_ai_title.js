/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Ai_TitleInputs */

const en_api_ai_title = /** @type {(inputs: Api_Ai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt for AI assistants`)
};

const es_api_ai_title = /** @type {(inputs: Api_Ai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt para asistentes de IA`)
};

const de_api_ai_title = /** @type {(inputs: Api_Ai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt für KI-Assistenten`)
};

const fr_api_ai_title = /** @type {(inputs: Api_Ai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt pour assistants IA`)
};

const it_api_ai_title = /** @type {(inputs: Api_Ai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt per assistenti IA`)
};

const nl_api_ai_title = /** @type {(inputs: Api_Ai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt voor AI-assistenten`)
};

const pl_api_ai_title = /** @type {(inputs: Api_Ai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt dla asystentów AI`)
};

const pt_api_ai_title = /** @type {(inputs: Api_Ai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt para assistentes de IA`)
};

const ru_api_ai_title = /** @type {(inputs: Api_Ai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Промпт для ИИ-ассистентов`)
};

const sv_api_ai_title = /** @type {(inputs: Api_Ai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt för AI-assistenter`)
};

const tr_api_ai_title = /** @type {(inputs: Api_Ai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapay zeka asistanları için prompt`)
};

const zh_api_ai_title = /** @type {(inputs: Api_Ai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI 助手提示词`)
};

const ja_api_ai_title = /** @type {(inputs: Api_Ai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI アシスタント用プロンプト`)
};

/**
* | output |
* | --- |
* | "Prompt for AI assistants" |
*
* @param {Api_Ai_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_ai_title = /** @type {((inputs?: Api_Ai_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Ai_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_ai_title(inputs)
	if (locale === "de") return de_api_ai_title(inputs)
	if (locale === "fr") return fr_api_ai_title(inputs)
	if (locale === "it") return it_api_ai_title(inputs)
	if (locale === "nl") return nl_api_ai_title(inputs)
	if (locale === "pl") return pl_api_ai_title(inputs)
	if (locale === "pt") return pt_api_ai_title(inputs)
	if (locale === "ru") return ru_api_ai_title(inputs)
	if (locale === "sv") return sv_api_ai_title(inputs)
	if (locale === "tr") return tr_api_ai_title(inputs)
	if (locale === "zh") return zh_api_ai_title(inputs)
	if (locale === "ja") return ja_api_ai_title(inputs)
	return en_api_ai_title(inputs)
});
