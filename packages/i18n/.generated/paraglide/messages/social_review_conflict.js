/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_ConflictInputs */

const en_social_review_conflict = /** @type {(inputs: Social_Review_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You already reviewed this mod. Edit your review instead.`)
};

const es_social_review_conflict = /** @type {(inputs: Social_Review_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya reseñaste este mod. Edita tu reseña.`)
};

const de_social_review_conflict = /** @type {(inputs: Social_Review_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast diesen Mod schon bewertet. Bearbeite stattdessen deine Bewertung.`)
};

const fr_social_review_conflict = /** @type {(inputs: Social_Review_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez déjà noté ce mod. Modifiez plutôt votre avis.`)
};

const it_social_review_conflict = /** @type {(inputs: Social_Review_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai già recensito questa mod. Modifica la tua recensione.`)
};

const nl_social_review_conflict = /** @type {(inputs: Social_Review_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt deze mod al gereviewd. Bewerk je review.`)
};

const pl_social_review_conflict = /** @type {(inputs: Social_Review_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Już zrecenzowałeś tego moda. Edytuj swoją recenzję.`)
};

const pt_social_review_conflict = /** @type {(inputs: Social_Review_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você já avaliou este mod. Edite sua avaliação.`)
};

const ru_social_review_conflict = /** @type {(inputs: Social_Review_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы уже оставили отзыв об этом моде. Измените его.`)
};

const sv_social_review_conflict = /** @type {(inputs: Social_Review_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har redan recenserat den här modden. Redigera din recension i stället.`)
};

const tr_social_review_conflict = /** @type {(inputs: Social_Review_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu modu zaten inceledin. Bunun yerine incelemeni düzenle.`)
};

const zh_social_review_conflict = /** @type {(inputs: Social_Review_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已经评价过这个模组，请编辑原有评价。`)
};

const ja_social_review_conflict = /** @type {(inputs: Social_Review_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この MOD はすでにレビュー済みです。レビューを編集してください。`)
};

/**
* | output |
* | --- |
* | "You already reviewed this mod. Edit your review instead." |
*
* @param {Social_Review_ConflictInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_conflict = /** @type {((inputs?: Social_Review_ConflictInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_ConflictInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_conflict(inputs)
	if (locale === "de") return de_social_review_conflict(inputs)
	if (locale === "fr") return fr_social_review_conflict(inputs)
	if (locale === "it") return it_social_review_conflict(inputs)
	if (locale === "nl") return nl_social_review_conflict(inputs)
	if (locale === "pl") return pl_social_review_conflict(inputs)
	if (locale === "pt") return pt_social_review_conflict(inputs)
	if (locale === "ru") return ru_social_review_conflict(inputs)
	if (locale === "sv") return sv_social_review_conflict(inputs)
	if (locale === "tr") return tr_social_review_conflict(inputs)
	if (locale === "zh") return zh_social_review_conflict(inputs)
	if (locale === "ja") return ja_social_review_conflict(inputs)
	return en_social_review_conflict(inputs)
});
