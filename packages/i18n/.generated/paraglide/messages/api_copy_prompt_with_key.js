/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Copy_Prompt_With_KeyInputs */

const en_api_copy_prompt_with_key = /** @type {(inputs: Api_Copy_Prompt_With_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy AI prompt with this key`)
};

const es_api_copy_prompt_with_key = /** @type {(inputs: Api_Copy_Prompt_With_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar prompt de IA con esta clave`)
};

const de_api_copy_prompt_with_key = /** @type {(inputs: Api_Copy_Prompt_With_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KI-Prompt mit diesem Schlüssel kopieren`)
};

const fr_api_copy_prompt_with_key = /** @type {(inputs: Api_Copy_Prompt_With_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier le prompt IA avec cette clé`)
};

const it_api_copy_prompt_with_key = /** @type {(inputs: Api_Copy_Prompt_With_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia prompt IA con questa chiave`)
};

const nl_api_copy_prompt_with_key = /** @type {(inputs: Api_Copy_Prompt_With_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI-prompt met deze sleutel kopiëren`)
};

const pl_api_copy_prompt_with_key = /** @type {(inputs: Api_Copy_Prompt_With_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiuj prompt AI z tym kluczem`)
};

const pt_api_copy_prompt_with_key = /** @type {(inputs: Api_Copy_Prompt_With_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar prompt de IA com esta chave`)
};

const ru_api_copy_prompt_with_key = /** @type {(inputs: Api_Copy_Prompt_With_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Копировать ИИ-промпт с этим ключом`)
};

const sv_api_copy_prompt_with_key = /** @type {(inputs: Api_Copy_Prompt_With_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera AI-prompt med den här nyckeln`)
};

const tr_api_copy_prompt_with_key = /** @type {(inputs: Api_Copy_Prompt_With_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu anahtarla yapay zeka prompt'unu kopyala`)
};

const zh_api_copy_prompt_with_key = /** @type {(inputs: Api_Copy_Prompt_With_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制包含此密钥的 AI 提示词`)
};

const ja_api_copy_prompt_with_key = /** @type {(inputs: Api_Copy_Prompt_With_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このキー入りの AI プロンプトをコピー`)
};

/**
* | output |
* | --- |
* | "Copy AI prompt with this key" |
*
* @param {Api_Copy_Prompt_With_KeyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_copy_prompt_with_key = /** @type {((inputs?: Api_Copy_Prompt_With_KeyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Copy_Prompt_With_KeyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_copy_prompt_with_key(inputs)
	if (locale === "de") return de_api_copy_prompt_with_key(inputs)
	if (locale === "fr") return fr_api_copy_prompt_with_key(inputs)
	if (locale === "it") return it_api_copy_prompt_with_key(inputs)
	if (locale === "nl") return nl_api_copy_prompt_with_key(inputs)
	if (locale === "pl") return pl_api_copy_prompt_with_key(inputs)
	if (locale === "pt") return pt_api_copy_prompt_with_key(inputs)
	if (locale === "ru") return ru_api_copy_prompt_with_key(inputs)
	if (locale === "sv") return sv_api_copy_prompt_with_key(inputs)
	if (locale === "tr") return tr_api_copy_prompt_with_key(inputs)
	if (locale === "zh") return zh_api_copy_prompt_with_key(inputs)
	if (locale === "ja") return ja_api_copy_prompt_with_key(inputs)
	return en_api_copy_prompt_with_key(inputs)
});
