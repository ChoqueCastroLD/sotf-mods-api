/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_MoreInputs */

const en_basecamp_listing_more = /** @type {(inputs: Basecamp_Listing_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More details`)
};

const es_basecamp_listing_more = /** @type {(inputs: Basecamp_Listing_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más detalles`)
};

const de_basecamp_listing_more = /** @type {(inputs: Basecamp_Listing_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weitere Angaben`)
};

const fr_basecamp_listing_more = /** @type {(inputs: Basecamp_Listing_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus de détails`)
};

const it_basecamp_listing_more = /** @type {(inputs: Basecamp_Listing_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altri dettagli`)
};

const nl_basecamp_listing_more = /** @type {(inputs: Basecamp_Listing_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer details`)
};

const pl_basecamp_listing_more = /** @type {(inputs: Basecamp_Listing_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej szczegółów`)
};

const pt_basecamp_listing_more = /** @type {(inputs: Basecamp_Listing_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais detalhes`)
};

const ru_basecamp_listing_more = /** @type {(inputs: Basecamp_Listing_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дополнительно`)
};

const sv_basecamp_listing_more = /** @type {(inputs: Basecamp_Listing_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fler detaljer`)
};

const tr_basecamp_listing_more = /** @type {(inputs: Basecamp_Listing_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer ayrıntılar`)
};

const zh_basecamp_listing_more = /** @type {(inputs: Basecamp_Listing_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更多信息`)
};

const ja_basecamp_listing_more = /** @type {(inputs: Basecamp_Listing_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他の詳細`)
};

/**
* | output |
* | --- |
* | "More details" |
*
* @param {Basecamp_Listing_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_more = /** @type {((inputs?: Basecamp_Listing_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_more(inputs)
	if (locale === "de") return de_basecamp_listing_more(inputs)
	if (locale === "fr") return fr_basecamp_listing_more(inputs)
	if (locale === "it") return it_basecamp_listing_more(inputs)
	if (locale === "nl") return nl_basecamp_listing_more(inputs)
	if (locale === "pl") return pl_basecamp_listing_more(inputs)
	if (locale === "pt") return pt_basecamp_listing_more(inputs)
	if (locale === "ru") return ru_basecamp_listing_more(inputs)
	if (locale === "sv") return sv_basecamp_listing_more(inputs)
	if (locale === "tr") return tr_basecamp_listing_more(inputs)
	if (locale === "zh") return zh_basecamp_listing_more(inputs)
	if (locale === "ja") return ja_basecamp_listing_more(inputs)
	return en_basecamp_listing_more(inputs)
});
