/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_DeletedInputs */

const en_social_review_deleted = /** @type {(inputs: Social_Review_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review deleted.`)
};

const es_social_review_deleted = /** @type {(inputs: Social_Review_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reseña eliminada.`)
};

const de_social_review_deleted = /** @type {(inputs: Social_Review_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertung gelöscht.`)
};

const fr_social_review_deleted = /** @type {(inputs: Social_Review_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avis supprimé.`)
};

const it_social_review_deleted = /** @type {(inputs: Social_Review_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensione eliminata.`)
};

const nl_social_review_deleted = /** @type {(inputs: Social_Review_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review verwijderd.`)
};

const pl_social_review_deleted = /** @type {(inputs: Social_Review_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recenzja usunięta.`)
};

const pt_social_review_deleted = /** @type {(inputs: Social_Review_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliação excluída.`)
};

const ru_social_review_deleted = /** @type {(inputs: Social_Review_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзыв удалён.`)
};

const sv_social_review_deleted = /** @type {(inputs: Social_Review_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensionen är raderad.`)
};

const tr_social_review_deleted = /** @type {(inputs: Social_Review_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnceleme silindi.`)
};

const zh_social_review_deleted = /** @type {(inputs: Social_Review_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评价已删除。`)
};

const ja_social_review_deleted = /** @type {(inputs: Social_Review_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューを削除しました。`)
};

/**
* | output |
* | --- |
* | "Review deleted." |
*
* @param {Social_Review_DeletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_deleted = /** @type {((inputs?: Social_Review_DeletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_DeletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_deleted(inputs)
	if (locale === "de") return de_social_review_deleted(inputs)
	if (locale === "fr") return fr_social_review_deleted(inputs)
	if (locale === "it") return it_social_review_deleted(inputs)
	if (locale === "nl") return nl_social_review_deleted(inputs)
	if (locale === "pl") return pl_social_review_deleted(inputs)
	if (locale === "pt") return pt_social_review_deleted(inputs)
	if (locale === "ru") return ru_social_review_deleted(inputs)
	if (locale === "sv") return sv_social_review_deleted(inputs)
	if (locale === "tr") return tr_social_review_deleted(inputs)
	if (locale === "zh") return zh_social_review_deleted(inputs)
	if (locale === "ja") return ja_social_review_deleted(inputs)
	return en_social_review_deleted(inputs)
});
