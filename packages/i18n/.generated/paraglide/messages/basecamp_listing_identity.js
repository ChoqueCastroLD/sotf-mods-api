/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_IdentityInputs */

const en_basecamp_listing_identity = /** @type {(inputs: Basecamp_Listing_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identity`)
};

const es_basecamp_listing_identity = /** @type {(inputs: Basecamp_Listing_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identidad`)
};

const de_basecamp_listing_identity = /** @type {(inputs: Basecamp_Listing_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identität`)
};

const fr_basecamp_listing_identity = /** @type {(inputs: Basecamp_Listing_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identité`)
};

const it_basecamp_listing_identity = /** @type {(inputs: Basecamp_Listing_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identità`)
};

const nl_basecamp_listing_identity = /** @type {(inputs: Basecamp_Listing_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identiteit`)
};

const pl_basecamp_listing_identity = /** @type {(inputs: Basecamp_Listing_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tożsamość`)
};

const pt_basecamp_listing_identity = /** @type {(inputs: Basecamp_Listing_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identidade`)
};

const ru_basecamp_listing_identity = /** @type {(inputs: Basecamp_Listing_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Основное`)
};

const sv_basecamp_listing_identity = /** @type {(inputs: Basecamp_Listing_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identitet`)
};

const tr_basecamp_listing_identity = /** @type {(inputs: Basecamp_Listing_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kimlik`)
};

const zh_basecamp_listing_identity = /** @type {(inputs: Basecamp_Listing_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`基本信息`)
};

const ja_basecamp_listing_identity = /** @type {(inputs: Basecamp_Listing_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`基本情報`)
};

/**
* | output |
* | --- |
* | "Identity" |
*
* @param {Basecamp_Listing_IdentityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_identity = /** @type {((inputs?: Basecamp_Listing_IdentityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_IdentityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_identity(inputs)
	if (locale === "de") return de_basecamp_listing_identity(inputs)
	if (locale === "fr") return fr_basecamp_listing_identity(inputs)
	if (locale === "it") return it_basecamp_listing_identity(inputs)
	if (locale === "nl") return nl_basecamp_listing_identity(inputs)
	if (locale === "pl") return pl_basecamp_listing_identity(inputs)
	if (locale === "pt") return pt_basecamp_listing_identity(inputs)
	if (locale === "ru") return ru_basecamp_listing_identity(inputs)
	if (locale === "sv") return sv_basecamp_listing_identity(inputs)
	if (locale === "tr") return tr_basecamp_listing_identity(inputs)
	if (locale === "zh") return zh_basecamp_listing_identity(inputs)
	if (locale === "ja") return ja_basecamp_listing_identity(inputs)
	return en_basecamp_listing_identity(inputs)
});
