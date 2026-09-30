/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Editor_SampleInputs */

const en_social_editor_sample = /** @type {(inputs: Social_Editor_SampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`text`)
};

const es_social_editor_sample = /** @type {(inputs: Social_Editor_SampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`texto`)
};

const de_social_editor_sample = /** @type {(inputs: Social_Editor_SampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Text`)
};

const fr_social_editor_sample = /** @type {(inputs: Social_Editor_SampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`texte`)
};

const it_social_editor_sample = /** @type {(inputs: Social_Editor_SampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`testo`)
};

const nl_social_editor_sample = /** @type {(inputs: Social_Editor_SampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`tekst`)
};

const pl_social_editor_sample = /** @type {(inputs: Social_Editor_SampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`tekst`)
};

const pt_social_editor_sample = /** @type {(inputs: Social_Editor_SampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`texto`)
};

const ru_social_editor_sample = /** @type {(inputs: Social_Editor_SampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`текст`)
};

const sv_social_editor_sample = /** @type {(inputs: Social_Editor_SampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`text`)
};

const tr_social_editor_sample = /** @type {(inputs: Social_Editor_SampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`metin`)
};

const zh_social_editor_sample = /** @type {(inputs: Social_Editor_SampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文本`)
};

const ja_social_editor_sample = /** @type {(inputs: Social_Editor_SampleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テキスト`)
};

/**
* | output |
* | --- |
* | "text" |
*
* @param {Social_Editor_SampleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_sample = /** @type {((inputs?: Social_Editor_SampleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_SampleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_sample(inputs)
	if (locale === "de") return de_social_editor_sample(inputs)
	if (locale === "fr") return fr_social_editor_sample(inputs)
	if (locale === "it") return it_social_editor_sample(inputs)
	if (locale === "nl") return nl_social_editor_sample(inputs)
	if (locale === "pl") return pl_social_editor_sample(inputs)
	if (locale === "pt") return pt_social_editor_sample(inputs)
	if (locale === "ru") return ru_social_editor_sample(inputs)
	if (locale === "sv") return sv_social_editor_sample(inputs)
	if (locale === "tr") return tr_social_editor_sample(inputs)
	if (locale === "zh") return zh_social_editor_sample(inputs)
	if (locale === "ja") return ja_social_editor_sample(inputs)
	return en_social_editor_sample(inputs)
});
