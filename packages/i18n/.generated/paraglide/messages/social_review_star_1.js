/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Star_1Inputs */

const en_social_review_star_1 = /** @type {(inputs: Social_Review_Star_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doesn’t work for me`)
};

const es_social_review_star_1 = /** @type {(inputs: Social_Review_Star_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No me funciona`)
};

const de_social_review_star_1 = /** @type {(inputs: Social_Review_Star_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funktioniert bei mir nicht`)
};

const fr_social_review_star_1 = /** @type {(inputs: Social_Review_Star_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne marche pas chez moi`)
};

const it_social_review_star_1 = /** @type {(inputs: Social_Review_Star_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non funziona per me`)
};

const nl_social_review_star_1 = /** @type {(inputs: Social_Review_Star_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt niet bij mij`)
};

const pl_social_review_star_1 = /** @type {(inputs: Social_Review_Star_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`U mnie nie działa`)
};

const pt_social_review_star_1 = /** @type {(inputs: Social_Review_Star_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não funciona para mim`)
};

const ru_social_review_star_1 = /** @type {(inputs: Social_Review_Star_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У меня не работает`)
};

const sv_social_review_star_1 = /** @type {(inputs: Social_Review_Star_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar inte för mig`)
};

const tr_social_review_star_1 = /** @type {(inputs: Social_Review_Star_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bende çalışmıyor`)
};

const zh_social_review_star_1 = /** @type {(inputs: Social_Review_Star_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对我无效`)
};

const ja_social_review_star_1 = /** @type {(inputs: Social_Review_Star_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動かない`)
};

/**
* | output |
* | --- |
* | "Doesn’t work for me" |
*
* @param {Social_Review_Star_1Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_star_1 = /** @type {((inputs?: Social_Review_Star_1Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Star_1Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_star_1(inputs)
	if (locale === "de") return de_social_review_star_1(inputs)
	if (locale === "fr") return fr_social_review_star_1(inputs)
	if (locale === "it") return it_social_review_star_1(inputs)
	if (locale === "nl") return nl_social_review_star_1(inputs)
	if (locale === "pl") return pl_social_review_star_1(inputs)
	if (locale === "pt") return pt_social_review_star_1(inputs)
	if (locale === "ru") return ru_social_review_star_1(inputs)
	if (locale === "sv") return sv_social_review_star_1(inputs)
	if (locale === "tr") return tr_social_review_star_1(inputs)
	if (locale === "zh") return zh_social_review_star_1(inputs)
	if (locale === "ja") return ja_social_review_star_1(inputs)
	return en_social_review_star_1(inputs)
});
