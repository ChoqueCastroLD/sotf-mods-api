/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_VerifiedInputs */

const en_explore_verified = /** @type {(inputs: Explore_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verified creators only`)
};

const es_explore_verified = /** @type {(inputs: Explore_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo creadores verificados`)
};

const de_explore_verified = /** @type {(inputs: Explore_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur verifizierte Creator`)
};

const fr_explore_verified = /** @type {(inputs: Explore_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateurs vérifiés uniquement`)
};

const it_explore_verified = /** @type {(inputs: Explore_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo creator verificati`)
};

const nl_explore_verified = /** @type {(inputs: Explore_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen geverifieerde makers`)
};

const pl_explore_verified = /** @type {(inputs: Explore_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko zweryfikowani twórcy`)
};

const pt_explore_verified = /** @type {(inputs: Explore_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só criadores verificados`)
};

const ru_explore_verified = /** @type {(inputs: Explore_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только проверенные авторы`)
};

const sv_explore_verified = /** @type {(inputs: Explore_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara verifierade skapare`)
};

const tr_explore_verified = /** @type {(inputs: Explore_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca doğrulanmış üreticiler`)
};

const zh_explore_verified = /** @type {(inputs: Explore_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅认证创作者`)
};

const ja_explore_verified = /** @type {(inputs: Explore_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証済みクリエイターのみ`)
};

/**
* | output |
* | --- |
* | "Verified creators only" |
*
* @param {Explore_VerifiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_verified = /** @type {((inputs?: Explore_VerifiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_VerifiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_verified(inputs)
	if (locale === "de") return de_explore_verified(inputs)
	if (locale === "fr") return fr_explore_verified(inputs)
	if (locale === "it") return it_explore_verified(inputs)
	if (locale === "nl") return nl_explore_verified(inputs)
	if (locale === "pl") return pl_explore_verified(inputs)
	if (locale === "pt") return pt_explore_verified(inputs)
	if (locale === "ru") return ru_explore_verified(inputs)
	if (locale === "sv") return sv_explore_verified(inputs)
	if (locale === "tr") return tr_explore_verified(inputs)
	if (locale === "zh") return zh_explore_verified(inputs)
	if (locale === "ja") return ja_explore_verified(inputs)
	return en_explore_verified(inputs)
});
