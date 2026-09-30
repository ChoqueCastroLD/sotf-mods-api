/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Title_LabelInputs */

const en_social_review_title_label = /** @type {(inputs: Social_Review_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Title`)
};

const es_social_review_title_label = /** @type {(inputs: Social_Review_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título`)
};

const de_social_review_title_label = /** @type {(inputs: Social_Review_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titel`)
};

const fr_social_review_title_label = /** @type {(inputs: Social_Review_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titre`)
};

const it_social_review_title_label = /** @type {(inputs: Social_Review_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titolo`)
};

const nl_social_review_title_label = /** @type {(inputs: Social_Review_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titel`)
};

const pl_social_review_title_label = /** @type {(inputs: Social_Review_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tytuł`)
};

const pt_social_review_title_label = /** @type {(inputs: Social_Review_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título`)
};

const ru_social_review_title_label = /** @type {(inputs: Social_Review_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заголовок`)
};

const sv_social_review_title_label = /** @type {(inputs: Social_Review_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rubrik`)
};

const tr_social_review_title_label = /** @type {(inputs: Social_Review_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlık`)
};

const zh_social_review_title_label = /** @type {(inputs: Social_Review_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标题`)
};

const ja_social_review_title_label = /** @type {(inputs: Social_Review_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タイトル`)
};

/**
* | output |
* | --- |
* | "Title" |
*
* @param {Social_Review_Title_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_title_label = /** @type {((inputs?: Social_Review_Title_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Title_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_title_label(inputs)
	if (locale === "de") return de_social_review_title_label(inputs)
	if (locale === "fr") return fr_social_review_title_label(inputs)
	if (locale === "it") return it_social_review_title_label(inputs)
	if (locale === "nl") return nl_social_review_title_label(inputs)
	if (locale === "pl") return pl_social_review_title_label(inputs)
	if (locale === "pt") return pt_social_review_title_label(inputs)
	if (locale === "ru") return ru_social_review_title_label(inputs)
	if (locale === "sv") return sv_social_review_title_label(inputs)
	if (locale === "tr") return tr_social_review_title_label(inputs)
	if (locale === "zh") return zh_social_review_title_label(inputs)
	if (locale === "ja") return ja_social_review_title_label(inputs)
	return en_social_review_title_label(inputs)
});
