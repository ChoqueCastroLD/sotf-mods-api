/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Copy_PromptInputs */

const en_api_copy_prompt = /** @type {(inputs: Api_Copy_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy prompt`)
};

const es_api_copy_prompt = /** @type {(inputs: Api_Copy_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar prompt`)
};

const de_api_copy_prompt = /** @type {(inputs: Api_Copy_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt kopieren`)
};

const fr_api_copy_prompt = /** @type {(inputs: Api_Copy_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier le prompt`)
};

const it_api_copy_prompt = /** @type {(inputs: Api_Copy_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia prompt`)
};

const nl_api_copy_prompt = /** @type {(inputs: Api_Copy_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt kopiëren`)
};

const pl_api_copy_prompt = /** @type {(inputs: Api_Copy_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiuj prompt`)
};

const pt_api_copy_prompt = /** @type {(inputs: Api_Copy_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar prompt`)
};

const ru_api_copy_prompt = /** @type {(inputs: Api_Copy_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Копировать промпт`)
};

const sv_api_copy_prompt = /** @type {(inputs: Api_Copy_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera prompt`)
};

const tr_api_copy_prompt = /** @type {(inputs: Api_Copy_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt'u kopyala`)
};

const zh_api_copy_prompt = /** @type {(inputs: Api_Copy_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制提示词`)
};

const ja_api_copy_prompt = /** @type {(inputs: Api_Copy_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロンプトをコピー`)
};

/**
* | output |
* | --- |
* | "Copy prompt" |
*
* @param {Api_Copy_PromptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_copy_prompt = /** @type {((inputs?: Api_Copy_PromptInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Copy_PromptInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_copy_prompt(inputs)
	if (locale === "de") return de_api_copy_prompt(inputs)
	if (locale === "fr") return fr_api_copy_prompt(inputs)
	if (locale === "it") return it_api_copy_prompt(inputs)
	if (locale === "nl") return nl_api_copy_prompt(inputs)
	if (locale === "pl") return pl_api_copy_prompt(inputs)
	if (locale === "pt") return pt_api_copy_prompt(inputs)
	if (locale === "ru") return ru_api_copy_prompt(inputs)
	if (locale === "sv") return sv_api_copy_prompt(inputs)
	if (locale === "tr") return tr_api_copy_prompt(inputs)
	if (locale === "zh") return zh_api_copy_prompt(inputs)
	if (locale === "ja") return ja_api_copy_prompt(inputs)
	return en_api_copy_prompt(inputs)
});
