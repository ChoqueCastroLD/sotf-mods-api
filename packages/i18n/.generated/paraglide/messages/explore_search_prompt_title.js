/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Search_Prompt_TitleInputs */

const en_explore_search_prompt_title = /** @type {(inputs: Explore_Search_Prompt_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What are you looking for?`)
};

const es_explore_search_prompt_title = /** @type {(inputs: Explore_Search_Prompt_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Qué estás buscando?`)
};

const de_explore_search_prompt_title = /** @type {(inputs: Explore_Search_Prompt_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wonach suchst du?`)
};

const fr_explore_search_prompt_title = /** @type {(inputs: Explore_Search_Prompt_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Que cherchez-vous ?`)
};

const it_explore_search_prompt_title = /** @type {(inputs: Explore_Search_Prompt_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa stai cercando?`)
};

const nl_explore_search_prompt_title = /** @type {(inputs: Explore_Search_Prompt_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waar ben je naar op zoek?`)
};

const pl_explore_search_prompt_title = /** @type {(inputs: Explore_Search_Prompt_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czego szukasz?`)
};

const pt_explore_search_prompt_title = /** @type {(inputs: Explore_Search_Prompt_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que você está procurando?`)
};

const ru_explore_search_prompt_title = /** @type {(inputs: Explore_Search_Prompt_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что вы ищете?`)
};

const sv_explore_search_prompt_title = /** @type {(inputs: Explore_Search_Prompt_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad letar du efter?`)
};

const tr_explore_search_prompt_title = /** @type {(inputs: Explore_Search_Prompt_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne arıyorsun?`)
};

const zh_explore_search_prompt_title = /** @type {(inputs: Explore_Search_Prompt_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你在找什么？`)
};

const ja_explore_search_prompt_title = /** @type {(inputs: Explore_Search_Prompt_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`何をお探しですか？`)
};

/**
* | output |
* | --- |
* | "What are you looking for?" |
*
* @param {Explore_Search_Prompt_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_prompt_title = /** @type {((inputs?: Explore_Search_Prompt_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_Prompt_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_prompt_title(inputs)
	if (locale === "de") return de_explore_search_prompt_title(inputs)
	if (locale === "fr") return fr_explore_search_prompt_title(inputs)
	if (locale === "it") return it_explore_search_prompt_title(inputs)
	if (locale === "nl") return nl_explore_search_prompt_title(inputs)
	if (locale === "pl") return pl_explore_search_prompt_title(inputs)
	if (locale === "pt") return pt_explore_search_prompt_title(inputs)
	if (locale === "ru") return ru_explore_search_prompt_title(inputs)
	if (locale === "sv") return sv_explore_search_prompt_title(inputs)
	if (locale === "tr") return tr_explore_search_prompt_title(inputs)
	if (locale === "zh") return zh_explore_search_prompt_title(inputs)
	if (locale === "ja") return ja_explore_search_prompt_title(inputs)
	return en_explore_search_prompt_title(inputs)
});
