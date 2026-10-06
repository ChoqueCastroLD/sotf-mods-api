/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Error_TextInputs */

const en_explore_catalog_error_text = /** @type {(inputs: Explore_Catalog_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again in a moment.`)
};

const es_explore_catalog_error_text = /** @type {(inputs: Explore_Catalog_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inténtalo de nuevo en un momento.`)
};

const de_explore_catalog_error_text = /** @type {(inputs: Explore_Catalog_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versuche es gleich noch einmal.`)
};

const fr_explore_catalog_error_text = /** @type {(inputs: Explore_Catalog_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayez dans un instant.`)
};

const it_explore_catalog_error_text = /** @type {(inputs: Explore_Catalog_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova tra un momento.`)
};

const nl_explore_catalog_error_text = /** @type {(inputs: Explore_Catalog_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probeer het zo opnieuw.`)
};

const pl_explore_catalog_error_text = /** @type {(inputs: Explore_Catalog_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie za chwilę.`)
};

const pt_explore_catalog_error_text = /** @type {(inputs: Explore_Catalog_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tente novamente em instantes.`)
};

const ru_explore_catalog_error_text = /** @type {(inputs: Explore_Catalog_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторите попытку через минуту.`)
};

const sv_explore_catalog_error_text = /** @type {(inputs: Explore_Catalog_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen om en stund.`)
};

const tr_explore_catalog_error_text = /** @type {(inputs: Explore_Catalog_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Birazdan tekrar deneyin.`)
};

const zh_explore_catalog_error_text = /** @type {(inputs: Explore_Catalog_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请稍后再试。`)
};

const ja_explore_catalog_error_text = /** @type {(inputs: Explore_Catalog_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`しばらくしてからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Try again in a moment." |
*
* @param {Explore_Catalog_Error_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_error_text = /** @type {((inputs?: Explore_Catalog_Error_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Error_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_error_text(inputs)
	if (locale === "de") return de_explore_catalog_error_text(inputs)
	if (locale === "fr") return fr_explore_catalog_error_text(inputs)
	if (locale === "it") return it_explore_catalog_error_text(inputs)
	if (locale === "nl") return nl_explore_catalog_error_text(inputs)
	if (locale === "pl") return pl_explore_catalog_error_text(inputs)
	if (locale === "pt") return pt_explore_catalog_error_text(inputs)
	if (locale === "ru") return ru_explore_catalog_error_text(inputs)
	if (locale === "sv") return sv_explore_catalog_error_text(inputs)
	if (locale === "tr") return tr_explore_catalog_error_text(inputs)
	if (locale === "zh") return zh_explore_catalog_error_text(inputs)
	if (locale === "ja") return ja_explore_catalog_error_text(inputs)
	return en_explore_catalog_error_text(inputs)
});
