/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_NsfwInputs */

const en_basecamp_listing_nsfw = /** @type {(inputs: Basecamp_Listing_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adult content`)
};

const es_basecamp_listing_nsfw = /** @type {(inputs: Basecamp_Listing_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido para adultos`)
};

const de_basecamp_listing_nsfw = /** @type {(inputs: Basecamp_Listing_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhalte für Erwachsene`)
};

const fr_basecamp_listing_nsfw = /** @type {(inputs: Basecamp_Listing_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu pour adultes`)
};

const it_basecamp_listing_nsfw = /** @type {(inputs: Basecamp_Listing_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenuti per adulti`)
};

const nl_basecamp_listing_nsfw = /** @type {(inputs: Basecamp_Listing_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhoud voor volwassenen`)
};

const pl_basecamp_listing_nsfw = /** @type {(inputs: Basecamp_Listing_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Treści dla dorosłych`)
};

const pt_basecamp_listing_nsfw = /** @type {(inputs: Basecamp_Listing_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo adulto`)
};

const ru_basecamp_listing_nsfw = /** @type {(inputs: Basecamp_Listing_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Контент для взрослых`)
};

const sv_basecamp_listing_nsfw = /** @type {(inputs: Basecamp_Listing_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vuxeninnehåll`)
};

const tr_basecamp_listing_nsfw = /** @type {(inputs: Basecamp_Listing_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yetişkin içeriği`)
};

const zh_basecamp_listing_nsfw = /** @type {(inputs: Basecamp_Listing_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成人内容`)
};

const ja_basecamp_listing_nsfw = /** @type {(inputs: Basecamp_Listing_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成人向けコンテンツ`)
};

/**
* | output |
* | --- |
* | "Adult content" |
*
* @param {Basecamp_Listing_NsfwInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_nsfw = /** @type {((inputs?: Basecamp_Listing_NsfwInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_NsfwInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_nsfw(inputs)
	if (locale === "de") return de_basecamp_listing_nsfw(inputs)
	if (locale === "fr") return fr_basecamp_listing_nsfw(inputs)
	if (locale === "it") return it_basecamp_listing_nsfw(inputs)
	if (locale === "nl") return nl_basecamp_listing_nsfw(inputs)
	if (locale === "pl") return pl_basecamp_listing_nsfw(inputs)
	if (locale === "pt") return pt_basecamp_listing_nsfw(inputs)
	if (locale === "ru") return ru_basecamp_listing_nsfw(inputs)
	if (locale === "sv") return sv_basecamp_listing_nsfw(inputs)
	if (locale === "tr") return tr_basecamp_listing_nsfw(inputs)
	if (locale === "zh") return zh_basecamp_listing_nsfw(inputs)
	if (locale === "ja") return ja_basecamp_listing_nsfw(inputs)
	return en_basecamp_listing_nsfw(inputs)
});
