/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Reviews_Sign_InInputs */

const en_builds_reviews_sign_in = /** @type {(inputs: Builds_Reviews_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in to review`)
};

const es_builds_reviews_sign_in = /** @type {(inputs: Builds_Reviews_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión para reseñar`)
};

const de_builds_reviews_sign_in = /** @type {(inputs: Builds_Reviews_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Bewerten anmelden`)
};

const fr_builds_reviews_sign_in = /** @type {(inputs: Builds_Reviews_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se connecter pour donner un avis`)
};

const it_builds_reviews_sign_in = /** @type {(inputs: Builds_Reviews_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi per recensire`)
};

const nl_builds_reviews_sign_in = /** @type {(inputs: Builds_Reviews_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in om een review te schrijven`)
};

const pl_builds_reviews_sign_in = /** @type {(inputs: Builds_Reviews_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się, aby dodać recenzję`)
};

const pt_builds_reviews_sign_in = /** @type {(inputs: Builds_Reviews_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entre para avaliar`)
};

const ru_builds_reviews_sign_in = /** @type {(inputs: Builds_Reviews_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите, чтобы оставить отзыв`)
};

const sv_builds_reviews_sign_in = /** @type {(inputs: Builds_Reviews_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in för att recensera`)
};

const tr_builds_reviews_sign_in = /** @type {(inputs: Builds_Reviews_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnceleme yazmak için giriş yap`)
};

const zh_builds_reviews_sign_in = /** @type {(inputs: Builds_Reviews_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录后发表评价`)
};

const ja_builds_reviews_sign_in = /** @type {(inputs: Builds_Reviews_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインしてレビューする`)
};

/**
* | output |
* | --- |
* | "Sign in to review" |
*
* @param {Builds_Reviews_Sign_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_reviews_sign_in = /** @type {((inputs?: Builds_Reviews_Sign_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Reviews_Sign_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_reviews_sign_in(inputs)
	if (locale === "de") return de_builds_reviews_sign_in(inputs)
	if (locale === "fr") return fr_builds_reviews_sign_in(inputs)
	if (locale === "it") return it_builds_reviews_sign_in(inputs)
	if (locale === "nl") return nl_builds_reviews_sign_in(inputs)
	if (locale === "pl") return pl_builds_reviews_sign_in(inputs)
	if (locale === "pt") return pt_builds_reviews_sign_in(inputs)
	if (locale === "ru") return ru_builds_reviews_sign_in(inputs)
	if (locale === "sv") return sv_builds_reviews_sign_in(inputs)
	if (locale === "tr") return tr_builds_reviews_sign_in(inputs)
	if (locale === "zh") return zh_builds_reviews_sign_in(inputs)
	if (locale === "ja") return ja_builds_reviews_sign_in(inputs)
	return en_builds_reviews_sign_in(inputs)
});
