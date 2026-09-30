/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Language_PlaceholderInputs */

const en_basecamp_listing_language_placeholder = /** @type {(inputs: Basecamp_Listing_Language_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not set`)
};

const es_basecamp_listing_language_placeholder = /** @type {(inputs: Basecamp_Listing_Language_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin indicar`)
};

const de_basecamp_listing_language_placeholder = /** @type {(inputs: Basecamp_Listing_Language_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht angegeben`)
};

const fr_basecamp_listing_language_placeholder = /** @type {(inputs: Basecamp_Listing_Language_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non précisée`)
};

const it_basecamp_listing_language_placeholder = /** @type {(inputs: Basecamp_Listing_Language_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non indicata`)
};

const nl_basecamp_listing_language_placeholder = /** @type {(inputs: Basecamp_Listing_Language_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet ingesteld`)
};

const pl_basecamp_listing_language_placeholder = /** @type {(inputs: Basecamp_Listing_Language_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie ustawiono`)
};

const pt_basecamp_listing_language_placeholder = /** @type {(inputs: Basecamp_Listing_Language_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não definido`)
};

const ru_basecamp_listing_language_placeholder = /** @type {(inputs: Basecamp_Listing_Language_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не указан`)
};

const sv_basecamp_listing_language_placeholder = /** @type {(inputs: Basecamp_Listing_Language_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte angivet`)
};

const tr_basecamp_listing_language_placeholder = /** @type {(inputs: Basecamp_Listing_Language_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belirtilmedi`)
};

const zh_basecamp_listing_language_placeholder = /** @type {(inputs: Basecamp_Listing_Language_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未设置`)
};

const ja_basecamp_listing_language_placeholder = /** @type {(inputs: Basecamp_Listing_Language_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未設定`)
};

/**
* | output |
* | --- |
* | "Not set" |
*
* @param {Basecamp_Listing_Language_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_language_placeholder = /** @type {((inputs?: Basecamp_Listing_Language_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Language_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_language_placeholder(inputs)
	if (locale === "de") return de_basecamp_listing_language_placeholder(inputs)
	if (locale === "fr") return fr_basecamp_listing_language_placeholder(inputs)
	if (locale === "it") return it_basecamp_listing_language_placeholder(inputs)
	if (locale === "nl") return nl_basecamp_listing_language_placeholder(inputs)
	if (locale === "pl") return pl_basecamp_listing_language_placeholder(inputs)
	if (locale === "pt") return pt_basecamp_listing_language_placeholder(inputs)
	if (locale === "ru") return ru_basecamp_listing_language_placeholder(inputs)
	if (locale === "sv") return sv_basecamp_listing_language_placeholder(inputs)
	if (locale === "tr") return tr_basecamp_listing_language_placeholder(inputs)
	if (locale === "zh") return zh_basecamp_listing_language_placeholder(inputs)
	if (locale === "ja") return ja_basecamp_listing_language_placeholder(inputs)
	return en_basecamp_listing_language_placeholder(inputs)
});
