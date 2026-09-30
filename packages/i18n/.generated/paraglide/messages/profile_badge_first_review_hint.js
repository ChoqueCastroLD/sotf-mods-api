/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_First_Review_HintInputs */

const en_profile_badge_first_review_hint = /** @type {(inputs: Profile_Badge_First_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write your first review with text.`)
};

const es_profile_badge_first_review_hint = /** @type {(inputs: Profile_Badge_First_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe tu primera reseña con texto.`)
};

const de_profile_badge_first_review_hint = /** @type {(inputs: Profile_Badge_First_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schreibe deine erste Bewertung mit Text.`)
};

const fr_profile_badge_first_review_hint = /** @type {(inputs: Profile_Badge_First_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rédigez votre premier avis avec du texte.`)
};

const it_profile_badge_first_review_hint = /** @type {(inputs: Profile_Badge_First_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scrivi la tua prima recensione con testo.`)
};

const nl_profile_badge_first_review_hint = /** @type {(inputs: Profile_Badge_First_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schrijf je eerste review met tekst.`)
};

const pl_profile_badge_first_review_hint = /** @type {(inputs: Profile_Badge_First_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Napisz swoją pierwszą recenzję z tekstem.`)
};

const pt_profile_badge_first_review_hint = /** @type {(inputs: Profile_Badge_First_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escreva sua primeira avaliação com texto.`)
};

const ru_profile_badge_first_review_hint = /** @type {(inputs: Profile_Badge_First_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Напишите свой первый отзыв с текстом.`)
};

const sv_profile_badge_first_review_hint = /** @type {(inputs: Profile_Badge_First_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriv din första recension med text.`)
};

const tr_profile_badge_first_review_hint = /** @type {(inputs: Profile_Badge_First_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Metin içeren ilk incelemeni yaz.`)
};

const zh_profile_badge_first_review_hint = /** @type {(inputs: Profile_Badge_First_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撰写你的第一条带文字的评价。`)
};

const ja_profile_badge_first_review_hint = /** @type {(inputs: Profile_Badge_First_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テキスト付きの最初のレビューを書く。`)
};

/**
* | output |
* | --- |
* | "Write your first review with text." |
*
* @param {Profile_Badge_First_Review_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_first_review_hint = /** @type {((inputs?: Profile_Badge_First_Review_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_First_Review_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_first_review_hint(inputs)
	if (locale === "de") return de_profile_badge_first_review_hint(inputs)
	if (locale === "fr") return fr_profile_badge_first_review_hint(inputs)
	if (locale === "it") return it_profile_badge_first_review_hint(inputs)
	if (locale === "nl") return nl_profile_badge_first_review_hint(inputs)
	if (locale === "pl") return pl_profile_badge_first_review_hint(inputs)
	if (locale === "pt") return pt_profile_badge_first_review_hint(inputs)
	if (locale === "ru") return ru_profile_badge_first_review_hint(inputs)
	if (locale === "sv") return sv_profile_badge_first_review_hint(inputs)
	if (locale === "tr") return tr_profile_badge_first_review_hint(inputs)
	if (locale === "zh") return zh_profile_badge_first_review_hint(inputs)
	if (locale === "ja") return ja_profile_badge_first_review_hint(inputs)
	return en_profile_badge_first_review_hint(inputs)
});
