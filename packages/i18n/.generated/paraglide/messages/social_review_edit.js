/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_EditInputs */

const en_social_review_edit = /** @type {(inputs: Social_Review_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit your review`)
};

const es_social_review_edit = /** @type {(inputs: Social_Review_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar tu reseña`)
};

const de_social_review_edit = /** @type {(inputs: Social_Review_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertung bearbeiten`)
};

const fr_social_review_edit = /** @type {(inputs: Social_Review_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier votre avis`)
};

const it_social_review_edit = /** @type {(inputs: Social_Review_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica la tua recensione`)
};

const nl_social_review_edit = /** @type {(inputs: Social_Review_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je review bewerken`)
};

const pl_social_review_edit = /** @type {(inputs: Social_Review_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj recenzję`)
};

const pt_social_review_edit = /** @type {(inputs: Social_Review_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar sua avaliação`)
};

const ru_social_review_edit = /** @type {(inputs: Social_Review_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить отзыв`)
};

const sv_social_review_edit = /** @type {(inputs: Social_Review_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera din recension`)
};

const tr_social_review_edit = /** @type {(inputs: Social_Review_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemeni düzenle`)
};

const zh_social_review_edit = /** @type {(inputs: Social_Review_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑你的评价`)
};

const ja_social_review_edit = /** @type {(inputs: Social_Review_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューを編集`)
};

/**
* | output |
* | --- |
* | "Edit your review" |
*
* @param {Social_Review_EditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_edit = /** @type {((inputs?: Social_Review_EditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_EditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_edit(inputs)
	if (locale === "de") return de_social_review_edit(inputs)
	if (locale === "fr") return fr_social_review_edit(inputs)
	if (locale === "it") return it_social_review_edit(inputs)
	if (locale === "nl") return nl_social_review_edit(inputs)
	if (locale === "pl") return pl_social_review_edit(inputs)
	if (locale === "pt") return pt_social_review_edit(inputs)
	if (locale === "ru") return ru_social_review_edit(inputs)
	if (locale === "sv") return sv_social_review_edit(inputs)
	if (locale === "tr") return tr_social_review_edit(inputs)
	if (locale === "zh") return zh_social_review_edit(inputs)
	if (locale === "ja") return ja_social_review_edit(inputs)
	return en_social_review_edit(inputs)
});
