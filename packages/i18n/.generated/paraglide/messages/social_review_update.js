/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_UpdateInputs */

const en_social_review_update = /** @type {(inputs: Social_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update review`)
};

const es_social_review_update = /** @type {(inputs: Social_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizar reseña`)
};

const de_social_review_update = /** @type {(inputs: Social_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertung aktualisieren`)
};

const fr_social_review_update = /** @type {(inputs: Social_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mettre à jour l’avis`)
};

const it_social_review_update = /** @type {(inputs: Social_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiorna recensione`)
};

const nl_social_review_update = /** @type {(inputs: Social_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review bijwerken`)
};

const pl_social_review_update = /** @type {(inputs: Social_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaktualizuj recenzję`)
};

const pt_social_review_update = /** @type {(inputs: Social_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizar avaliação`)
};

const ru_social_review_update = /** @type {(inputs: Social_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновить отзыв`)
};

const sv_social_review_update = /** @type {(inputs: Social_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdatera recension`)
};

const tr_social_review_update = /** @type {(inputs: Social_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemeyi güncelle`)
};

const zh_social_review_update = /** @type {(inputs: Social_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新评价`)
};

const ja_social_review_update = /** @type {(inputs: Social_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューを更新`)
};

/**
* | output |
* | --- |
* | "Update review" |
*
* @param {Social_Review_UpdateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_update = /** @type {((inputs?: Social_Review_UpdateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_UpdateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_update(inputs)
	if (locale === "de") return de_social_review_update(inputs)
	if (locale === "fr") return fr_social_review_update(inputs)
	if (locale === "it") return it_social_review_update(inputs)
	if (locale === "nl") return nl_social_review_update(inputs)
	if (locale === "pl") return pl_social_review_update(inputs)
	if (locale === "pt") return pt_social_review_update(inputs)
	if (locale === "ru") return ru_social_review_update(inputs)
	if (locale === "sv") return sv_social_review_update(inputs)
	if (locale === "tr") return tr_social_review_update(inputs)
	if (locale === "zh") return zh_social_review_update(inputs)
	if (locale === "ja") return ja_social_review_update(inputs)
	return en_social_review_update(inputs)
});
