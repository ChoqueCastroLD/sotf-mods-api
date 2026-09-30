/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Url_FixedInputs */

const en_basecamp_listing_url_fixed = /** @type {(inputs: Basecamp_Listing_Url_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The address stays the same:`)
};

const es_basecamp_listing_url_fixed = /** @type {(inputs: Basecamp_Listing_Url_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La dirección no cambia:`)
};

const de_basecamp_listing_url_fixed = /** @type {(inputs: Basecamp_Listing_Url_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Adresse bleibt gleich:`)
};

const fr_basecamp_listing_url_fixed = /** @type {(inputs: Basecamp_Listing_Url_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’adresse ne change pas :`)
};

const it_basecamp_listing_url_fixed = /** @type {(inputs: Basecamp_Listing_Url_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’indirizzo non cambia:`)
};

const nl_basecamp_listing_url_fixed = /** @type {(inputs: Basecamp_Listing_Url_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het adres blijft hetzelfde:`)
};

const pl_basecamp_listing_url_fixed = /** @type {(inputs: Basecamp_Listing_Url_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres się nie zmienia:`)
};

const pt_basecamp_listing_url_fixed = /** @type {(inputs: Basecamp_Listing_Url_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O endereço não muda:`)
};

const ru_basecamp_listing_url_fixed = /** @type {(inputs: Basecamp_Listing_Url_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Адрес не меняется:`)
};

const sv_basecamp_listing_url_fixed = /** @type {(inputs: Basecamp_Listing_Url_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adressen förblir densamma:`)
};

const tr_basecamp_listing_url_fixed = /** @type {(inputs: Basecamp_Listing_Url_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres aynı kalır:`)
};

const zh_basecamp_listing_url_fixed = /** @type {(inputs: Basecamp_Listing_Url_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地址保持不变：`)
};

const ja_basecamp_listing_url_fixed = /** @type {(inputs: Basecamp_Listing_Url_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アドレスは変わりません：`)
};

/**
* | output |
* | --- |
* | "The address stays the same:" |
*
* @param {Basecamp_Listing_Url_FixedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_url_fixed = /** @type {((inputs?: Basecamp_Listing_Url_FixedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Url_FixedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_url_fixed(inputs)
	if (locale === "de") return de_basecamp_listing_url_fixed(inputs)
	if (locale === "fr") return fr_basecamp_listing_url_fixed(inputs)
	if (locale === "it") return it_basecamp_listing_url_fixed(inputs)
	if (locale === "nl") return nl_basecamp_listing_url_fixed(inputs)
	if (locale === "pl") return pl_basecamp_listing_url_fixed(inputs)
	if (locale === "pt") return pt_basecamp_listing_url_fixed(inputs)
	if (locale === "ru") return ru_basecamp_listing_url_fixed(inputs)
	if (locale === "sv") return sv_basecamp_listing_url_fixed(inputs)
	if (locale === "tr") return tr_basecamp_listing_url_fixed(inputs)
	if (locale === "zh") return zh_basecamp_listing_url_fixed(inputs)
	if (locale === "ja") return ja_basecamp_listing_url_fixed(inputs)
	return en_basecamp_listing_url_fixed(inputs)
});
