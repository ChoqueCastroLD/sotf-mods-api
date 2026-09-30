/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Faq_MoreInputs */

const en_landing_faq_more = /** @type {(inputs: Landing_Faq_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read more`)
};

const es_landing_faq_more = /** @type {(inputs: Landing_Faq_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leer más`)
};

const de_landing_faq_more = /** @type {(inputs: Landing_Faq_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehr lesen`)
};

const fr_landing_faq_more = /** @type {(inputs: Landing_Faq_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En savoir plus`)
};

const it_landing_faq_more = /** @type {(inputs: Landing_Faq_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leggi di più`)
};

const nl_landing_faq_more = /** @type {(inputs: Landing_Faq_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lees meer`)
};

const pl_landing_faq_more = /** @type {(inputs: Landing_Faq_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czytaj dalej`)
};

const pt_landing_faq_more = /** @type {(inputs: Landing_Faq_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saiba mais`)
};

const ru_landing_faq_more = /** @type {(inputs: Landing_Faq_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подробнее`)
};

const sv_landing_faq_more = /** @type {(inputs: Landing_Faq_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läs mer`)
};

const tr_landing_faq_more = /** @type {(inputs: Landing_Faq_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Devamını oku`)
};

const zh_landing_faq_more = /** @type {(inputs: Landing_Faq_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`了解更多`)
};

const ja_landing_faq_more = /** @type {(inputs: Landing_Faq_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳しく見る`)
};

/**
* | output |
* | --- |
* | "Read more" |
*
* @param {Landing_Faq_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_faq_more = /** @type {((inputs?: Landing_Faq_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Faq_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_faq_more(inputs)
	if (locale === "de") return de_landing_faq_more(inputs)
	if (locale === "fr") return fr_landing_faq_more(inputs)
	if (locale === "it") return it_landing_faq_more(inputs)
	if (locale === "nl") return nl_landing_faq_more(inputs)
	if (locale === "pl") return pl_landing_faq_more(inputs)
	if (locale === "pt") return pt_landing_faq_more(inputs)
	if (locale === "ru") return ru_landing_faq_more(inputs)
	if (locale === "sv") return sv_landing_faq_more(inputs)
	if (locale === "tr") return tr_landing_faq_more(inputs)
	if (locale === "zh") return zh_landing_faq_more(inputs)
	if (locale === "ja") return ja_landing_faq_more(inputs)
	return en_landing_faq_more(inputs)
});
