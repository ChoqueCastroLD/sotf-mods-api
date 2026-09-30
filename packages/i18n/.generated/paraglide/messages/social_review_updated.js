/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_UpdatedInputs */

const en_social_review_updated = /** @type {(inputs: Social_Review_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review updated.`)
};

const es_social_review_updated = /** @type {(inputs: Social_Review_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reseña actualizada.`)
};

const de_social_review_updated = /** @type {(inputs: Social_Review_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertung aktualisiert.`)
};

const fr_social_review_updated = /** @type {(inputs: Social_Review_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avis mis à jour.`)
};

const it_social_review_updated = /** @type {(inputs: Social_Review_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensione aggiornata.`)
};

const nl_social_review_updated = /** @type {(inputs: Social_Review_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review bijgewerkt.`)
};

const pl_social_review_updated = /** @type {(inputs: Social_Review_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recenzja zaktualizowana.`)
};

const pt_social_review_updated = /** @type {(inputs: Social_Review_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliação atualizada.`)
};

const ru_social_review_updated = /** @type {(inputs: Social_Review_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзыв обновлён.`)
};

const sv_social_review_updated = /** @type {(inputs: Social_Review_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensionen är uppdaterad.`)
};

const tr_social_review_updated = /** @type {(inputs: Social_Review_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnceleme güncellendi.`)
};

const zh_social_review_updated = /** @type {(inputs: Social_Review_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评价已更新。`)
};

const ja_social_review_updated = /** @type {(inputs: Social_Review_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューを更新しました。`)
};

/**
* | output |
* | --- |
* | "Review updated." |
*
* @param {Social_Review_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_updated = /** @type {((inputs?: Social_Review_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_updated(inputs)
	if (locale === "de") return de_social_review_updated(inputs)
	if (locale === "fr") return fr_social_review_updated(inputs)
	if (locale === "it") return it_social_review_updated(inputs)
	if (locale === "nl") return nl_social_review_updated(inputs)
	if (locale === "pl") return pl_social_review_updated(inputs)
	if (locale === "pt") return pt_social_review_updated(inputs)
	if (locale === "ru") return ru_social_review_updated(inputs)
	if (locale === "sv") return sv_social_review_updated(inputs)
	if (locale === "tr") return tr_social_review_updated(inputs)
	if (locale === "zh") return zh_social_review_updated(inputs)
	if (locale === "ja") return ja_social_review_updated(inputs)
	return en_social_review_updated(inputs)
});
