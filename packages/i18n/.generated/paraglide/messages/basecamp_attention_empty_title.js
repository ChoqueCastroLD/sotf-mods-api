/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Empty_TitleInputs */

const en_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All quiet at camp`)
};

const es_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo tranquilo en el campamento`)
};

const de_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles ruhig im Lager`)
};

const fr_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calme plat au camp`)
};

const it_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto tranquillo al campo`)
};

const nl_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles rustig in het kamp`)
};

const pl_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W obozie spokój`)
};

const pt_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo tranquilo no acampamento`)
};

const ru_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В лагере спокойно`)
};

const sv_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lugnt i lägret`)
};

const tr_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kampta her şey sakin`)
};

const zh_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`营地一切平静`)
};

const ja_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンプは平穏です`)
};

/**
* | output |
* | --- |
* | "All quiet at camp" |
*
* @param {Basecamp_Attention_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_empty_title = /** @type {((inputs?: Basecamp_Attention_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_empty_title(inputs)
	if (locale === "de") return de_basecamp_attention_empty_title(inputs)
	if (locale === "fr") return fr_basecamp_attention_empty_title(inputs)
	if (locale === "it") return it_basecamp_attention_empty_title(inputs)
	if (locale === "nl") return nl_basecamp_attention_empty_title(inputs)
	if (locale === "pl") return pl_basecamp_attention_empty_title(inputs)
	if (locale === "pt") return pt_basecamp_attention_empty_title(inputs)
	if (locale === "ru") return ru_basecamp_attention_empty_title(inputs)
	if (locale === "sv") return sv_basecamp_attention_empty_title(inputs)
	if (locale === "tr") return tr_basecamp_attention_empty_title(inputs)
	if (locale === "zh") return zh_basecamp_attention_empty_title(inputs)
	if (locale === "ja") return ja_basecamp_attention_empty_title(inputs)
	return en_basecamp_attention_empty_title(inputs)
});
