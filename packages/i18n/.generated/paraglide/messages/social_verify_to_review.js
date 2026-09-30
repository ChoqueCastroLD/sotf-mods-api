/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Verify_To_ReviewInputs */

const en_social_verify_to_review = /** @type {(inputs: Social_Verify_To_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your e-mail to write a review.`)
};

const es_social_verify_to_review = /** @type {(inputs: Social_Verify_To_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica tu correo para escribir una reseña.`)
};

const de_social_verify_to_review = /** @type {(inputs: Social_Verify_To_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige deine E-Mail-Adresse, um eine Bewertung zu schreiben.`)
};

const fr_social_verify_to_review = /** @type {(inputs: Social_Verify_To_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez votre e-mail pour écrire un avis.`)
};

const it_social_verify_to_review = /** @type {(inputs: Social_Verify_To_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica la tua e-mail per scrivere una recensione.`)
};

const nl_social_verify_to_review = /** @type {(inputs: Social_Verify_To_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig je e-mailadres om een review te schrijven.`)
};

const pl_social_verify_to_review = /** @type {(inputs: Social_Verify_To_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zweryfikuj e-mail, aby napisać recenzję.`)
};

const pt_social_verify_to_review = /** @type {(inputs: Social_Verify_To_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifique seu e-mail para escrever uma avaliação.`)
};

const ru_social_verify_to_review = /** @type {(inputs: Social_Verify_To_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите e-mail, чтобы написать отзыв.`)
};

const sv_social_verify_to_review = /** @type {(inputs: Social_Verify_To_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifiera din e-post för att skriva en recension.`)
};

const tr_social_verify_to_review = /** @type {(inputs: Social_Verify_To_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnceleme yazmak için e-postanı doğrula.`)
};

const zh_social_verify_to_review = /** @type {(inputs: Social_Verify_To_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证邮箱后即可写评价。`)
};

const ja_social_verify_to_review = /** @type {(inputs: Social_Verify_To_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューを書くにはメールアドレスを確認してください。`)
};

/**
* | output |
* | --- |
* | "Verify your e-mail to write a review." |
*
* @param {Social_Verify_To_ReviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_verify_to_review = /** @type {((inputs?: Social_Verify_To_ReviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Verify_To_ReviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_verify_to_review(inputs)
	if (locale === "de") return de_social_verify_to_review(inputs)
	if (locale === "fr") return fr_social_verify_to_review(inputs)
	if (locale === "it") return it_social_verify_to_review(inputs)
	if (locale === "nl") return nl_social_verify_to_review(inputs)
	if (locale === "pl") return pl_social_verify_to_review(inputs)
	if (locale === "pt") return pt_social_verify_to_review(inputs)
	if (locale === "ru") return ru_social_verify_to_review(inputs)
	if (locale === "sv") return sv_social_verify_to_review(inputs)
	if (locale === "tr") return tr_social_verify_to_review(inputs)
	if (locale === "zh") return zh_social_verify_to_review(inputs)
	if (locale === "ja") return ja_social_verify_to_review(inputs)
	return en_social_verify_to_review(inputs)
});
