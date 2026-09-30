/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_SourceInputs */

const en_basecamp_listing_source = /** @type {(inputs: Basecamp_Listing_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Source code`)
};

const es_basecamp_listing_source = /** @type {(inputs: Basecamp_Listing_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código fuente`)
};

const de_basecamp_listing_source = /** @type {(inputs: Basecamp_Listing_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quellcode`)
};

const fr_basecamp_listing_source = /** @type {(inputs: Basecamp_Listing_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code source`)
};

const it_basecamp_listing_source = /** @type {(inputs: Basecamp_Listing_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codice sorgente`)
};

const nl_basecamp_listing_source = /** @type {(inputs: Basecamp_Listing_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Broncode`)
};

const pl_basecamp_listing_source = /** @type {(inputs: Basecamp_Listing_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod źródłowy`)
};

const pt_basecamp_listing_source = /** @type {(inputs: Basecamp_Listing_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código-fonte`)
};

const ru_basecamp_listing_source = /** @type {(inputs: Basecamp_Listing_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Исходный код`)
};

const sv_basecamp_listing_source = /** @type {(inputs: Basecamp_Listing_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Källkod`)
};

const tr_basecamp_listing_source = /** @type {(inputs: Basecamp_Listing_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaynak kod`)
};

const zh_basecamp_listing_source = /** @type {(inputs: Basecamp_Listing_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`源代码`)
};

const ja_basecamp_listing_source = /** @type {(inputs: Basecamp_Listing_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ソースコード`)
};

/**
* | output |
* | --- |
* | "Source code" |
*
* @param {Basecamp_Listing_SourceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_source = /** @type {((inputs?: Basecamp_Listing_SourceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_SourceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_source(inputs)
	if (locale === "de") return de_basecamp_listing_source(inputs)
	if (locale === "fr") return fr_basecamp_listing_source(inputs)
	if (locale === "it") return it_basecamp_listing_source(inputs)
	if (locale === "nl") return nl_basecamp_listing_source(inputs)
	if (locale === "pl") return pl_basecamp_listing_source(inputs)
	if (locale === "pt") return pt_basecamp_listing_source(inputs)
	if (locale === "ru") return ru_basecamp_listing_source(inputs)
	if (locale === "sv") return sv_basecamp_listing_source(inputs)
	if (locale === "tr") return tr_basecamp_listing_source(inputs)
	if (locale === "zh") return zh_basecamp_listing_source(inputs)
	if (locale === "ja") return ja_basecamp_listing_source(inputs)
	return en_basecamp_listing_source(inputs)
});
