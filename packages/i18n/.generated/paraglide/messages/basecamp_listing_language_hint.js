/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Language_HintInputs */

const en_basecamp_listing_language_hint = /** @type {(inputs: Basecamp_Listing_Language_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The language you wrote the description in.`)
};

const es_basecamp_listing_language_hint = /** @type {(inputs: Basecamp_Listing_Language_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El idioma en el que escribiste la descripción.`)
};

const de_basecamp_listing_language_hint = /** @type {(inputs: Basecamp_Listing_Language_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Sprache, in der du die Beschreibung geschrieben hast.`)
};

const fr_basecamp_listing_language_hint = /** @type {(inputs: Basecamp_Listing_Language_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La langue dans laquelle vous avez écrit la description.`)
};

const it_basecamp_listing_language_hint = /** @type {(inputs: Basecamp_Listing_Language_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La lingua in cui hai scritto la descrizione.`)
};

const nl_basecamp_listing_language_hint = /** @type {(inputs: Basecamp_Listing_Language_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De taal waarin je de beschrijving schreef.`)
};

const pl_basecamp_listing_language_hint = /** @type {(inputs: Basecamp_Listing_Language_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Język, w którym napisałeś opis.`)
};

const pt_basecamp_listing_language_hint = /** @type {(inputs: Basecamp_Listing_Language_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O idioma em que você escreveu a descrição.`)
};

const ru_basecamp_listing_language_hint = /** @type {(inputs: Basecamp_Listing_Language_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Язык, на котором написано описание.`)
};

const sv_basecamp_listing_language_hint = /** @type {(inputs: Basecamp_Listing_Language_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Språket du skrev beskrivningen på.`)
};

const tr_basecamp_listing_language_hint = /** @type {(inputs: Basecamp_Listing_Language_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açıklamayı yazdığın dil.`)
};

const zh_basecamp_listing_language_hint = /** @type {(inputs: Basecamp_Listing_Language_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你撰写描述所用的语言。`)
};

const ja_basecamp_listing_language_hint = /** @type {(inputs: Basecamp_Listing_Language_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明を書いた言語。`)
};

/**
* | output |
* | --- |
* | "The language you wrote the description in." |
*
* @param {Basecamp_Listing_Language_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_language_hint = /** @type {((inputs?: Basecamp_Listing_Language_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Language_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_language_hint(inputs)
	if (locale === "de") return de_basecamp_listing_language_hint(inputs)
	if (locale === "fr") return fr_basecamp_listing_language_hint(inputs)
	if (locale === "it") return it_basecamp_listing_language_hint(inputs)
	if (locale === "nl") return nl_basecamp_listing_language_hint(inputs)
	if (locale === "pl") return pl_basecamp_listing_language_hint(inputs)
	if (locale === "pt") return pt_basecamp_listing_language_hint(inputs)
	if (locale === "ru") return ru_basecamp_listing_language_hint(inputs)
	if (locale === "sv") return sv_basecamp_listing_language_hint(inputs)
	if (locale === "tr") return tr_basecamp_listing_language_hint(inputs)
	if (locale === "zh") return zh_basecamp_listing_language_hint(inputs)
	if (locale === "ja") return ja_basecamp_listing_language_hint(inputs)
	return en_basecamp_listing_language_hint(inputs)
});
