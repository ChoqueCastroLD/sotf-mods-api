/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Rating_RequiredInputs */

const en_social_review_rating_required = /** @type {(inputs: Social_Review_Rating_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose from 1 to 5 stars.`)
};

const es_social_review_rating_required = /** @type {(inputs: Social_Review_Rating_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige de 1 a 5 estrellas.`)
};

const de_social_review_rating_required = /** @type {(inputs: Social_Review_Rating_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle 1 bis 5 Sterne.`)
};

const fr_social_review_rating_required = /** @type {(inputs: Social_Review_Rating_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez de 1 à 5 étoiles.`)
};

const it_social_review_rating_required = /** @type {(inputs: Social_Review_Rating_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli da 1 a 5 stelle.`)
};

const nl_social_review_rating_required = /** @type {(inputs: Social_Review_Rating_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies 1 tot 5 sterren.`)
};

const pl_social_review_rating_required = /** @type {(inputs: Social_Review_Rating_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz od 1 do 5 gwiazdek.`)
};

const pt_social_review_rating_required = /** @type {(inputs: Social_Review_Rating_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha de 1 a 5 estrelas.`)
};

const ru_social_review_rating_required = /** @type {(inputs: Social_Review_Rating_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите от 1 до 5 звёзд.`)
};

const sv_social_review_rating_required = /** @type {(inputs: Social_Review_Rating_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj 1 till 5 stjärnor.`)
};

const tr_social_review_rating_required = /** @type {(inputs: Social_Review_Rating_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 ile 5 yıldız arasında seç.`)
};

const zh_social_review_rating_required = /** @type {(inputs: Social_Review_Rating_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择 1 到 5 星。`)
};

const ja_social_review_rating_required = /** @type {(inputs: Social_Review_Rating_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`星を 1〜5 つ選んでください。`)
};

/**
* | output |
* | --- |
* | "Choose from 1 to 5 stars." |
*
* @param {Social_Review_Rating_RequiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_rating_required = /** @type {((inputs?: Social_Review_Rating_RequiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Rating_RequiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_rating_required(inputs)
	if (locale === "de") return de_social_review_rating_required(inputs)
	if (locale === "fr") return fr_social_review_rating_required(inputs)
	if (locale === "it") return it_social_review_rating_required(inputs)
	if (locale === "nl") return nl_social_review_rating_required(inputs)
	if (locale === "pl") return pl_social_review_rating_required(inputs)
	if (locale === "pt") return pt_social_review_rating_required(inputs)
	if (locale === "ru") return ru_social_review_rating_required(inputs)
	if (locale === "sv") return sv_social_review_rating_required(inputs)
	if (locale === "tr") return tr_social_review_rating_required(inputs)
	if (locale === "zh") return zh_social_review_rating_required(inputs)
	if (locale === "ja") return ja_social_review_rating_required(inputs)
	return en_social_review_rating_required(inputs)
});
