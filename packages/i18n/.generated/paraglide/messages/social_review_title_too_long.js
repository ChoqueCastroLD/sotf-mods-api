/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Social_Review_Title_Too_LongInputs */

const en_social_review_title_too_long = /** @type {(inputs: Social_Review_Title_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The title can have up to ${i?.max} characters.`)
};

const es_social_review_title_too_long = /** @type {(inputs: Social_Review_Title_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`El título puede tener hasta ${i?.max} caracteres.`)
};

const de_social_review_title_too_long = /** @type {(inputs: Social_Review_Title_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Der Titel darf höchstens ${i?.max} Zeichen haben.`)
};

const fr_social_review_title_too_long = /** @type {(inputs: Social_Review_Title_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Le titre peut contenir jusqu’à ${i?.max} caractères.`)
};

const it_social_review_title_too_long = /** @type {(inputs: Social_Review_Title_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il titolo può avere fino a ${i?.max} caratteri.`)
};

const nl_social_review_title_too_long = /** @type {(inputs: Social_Review_Title_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De titel mag maximaal ${i?.max} tekens hebben.`)
};

const pl_social_review_title_too_long = /** @type {(inputs: Social_Review_Title_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tytuł może mieć maksymalnie ${i?.max} znaków.`)
};

const pt_social_review_title_too_long = /** @type {(inputs: Social_Review_Title_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O título pode ter até ${i?.max} caracteres.`)
};

const ru_social_review_title_too_long = /** @type {(inputs: Social_Review_Title_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`В заголовке не больше ${i?.max} символов.`)
};

const sv_social_review_title_too_long = /** @type {(inputs: Social_Review_Title_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rubriken får ha högst ${i?.max} tecken.`)
};

const tr_social_review_title_too_long = /** @type {(inputs: Social_Review_Title_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Başlık en fazla ${i?.max} karakter olabilir.`)
};

const zh_social_review_title_too_long = /** @type {(inputs: Social_Review_Title_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`标题最多 ${i?.max} 个字符。`)
};

const ja_social_review_title_too_long = /** @type {(inputs: Social_Review_Title_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`タイトルは ${i?.max} 文字までです。`)
};

/**
* | output |
* | --- |
* | "The title can have up to {max} characters." |
*
* @param {Social_Review_Title_Too_LongInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_title_too_long = /** @type {((inputs: Social_Review_Title_Too_LongInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Title_Too_LongInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_title_too_long(inputs)
	if (locale === "de") return de_social_review_title_too_long(inputs)
	if (locale === "fr") return fr_social_review_title_too_long(inputs)
	if (locale === "it") return it_social_review_title_too_long(inputs)
	if (locale === "nl") return nl_social_review_title_too_long(inputs)
	if (locale === "pl") return pl_social_review_title_too_long(inputs)
	if (locale === "pt") return pt_social_review_title_too_long(inputs)
	if (locale === "ru") return ru_social_review_title_too_long(inputs)
	if (locale === "sv") return sv_social_review_title_too_long(inputs)
	if (locale === "tr") return tr_social_review_title_too_long(inputs)
	if (locale === "zh") return zh_social_review_title_too_long(inputs)
	if (locale === "ja") return ja_social_review_title_too_long(inputs)
	return en_social_review_title_too_long(inputs)
});
