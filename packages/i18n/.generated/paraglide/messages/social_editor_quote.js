/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Editor_QuoteInputs */

const en_social_editor_quote = /** @type {(inputs: Social_Editor_QuoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quote`)
};

const es_social_editor_quote = /** @type {(inputs: Social_Editor_QuoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cita`)
};

const de_social_editor_quote = /** @type {(inputs: Social_Editor_QuoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zitat`)
};

const fr_social_editor_quote = /** @type {(inputs: Social_Editor_QuoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Citation`)
};

const it_social_editor_quote = /** @type {(inputs: Social_Editor_QuoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Citazione`)
};

const nl_social_editor_quote = /** @type {(inputs: Social_Editor_QuoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Citaat`)
};

const pl_social_editor_quote = /** @type {(inputs: Social_Editor_QuoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cytat`)
};

const pt_social_editor_quote = /** @type {(inputs: Social_Editor_QuoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Citação`)
};

const ru_social_editor_quote = /** @type {(inputs: Social_Editor_QuoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Цитата`)
};

const sv_social_editor_quote = /** @type {(inputs: Social_Editor_QuoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Citat`)
};

const tr_social_editor_quote = /** @type {(inputs: Social_Editor_QuoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alıntı`)
};

const zh_social_editor_quote = /** @type {(inputs: Social_Editor_QuoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`引用`)
};

const ja_social_editor_quote = /** @type {(inputs: Social_Editor_QuoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`引用`)
};

/**
* | output |
* | --- |
* | "Quote" |
*
* @param {Social_Editor_QuoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_quote = /** @type {((inputs?: Social_Editor_QuoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_QuoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_quote(inputs)
	if (locale === "de") return de_social_editor_quote(inputs)
	if (locale === "fr") return fr_social_editor_quote(inputs)
	if (locale === "it") return it_social_editor_quote(inputs)
	if (locale === "nl") return nl_social_editor_quote(inputs)
	if (locale === "pl") return pl_social_editor_quote(inputs)
	if (locale === "pt") return pt_social_editor_quote(inputs)
	if (locale === "ru") return ru_social_editor_quote(inputs)
	if (locale === "sv") return sv_social_editor_quote(inputs)
	if (locale === "tr") return tr_social_editor_quote(inputs)
	if (locale === "zh") return zh_social_editor_quote(inputs)
	if (locale === "ja") return ja_social_editor_quote(inputs)
	return en_social_editor_quote(inputs)
});
