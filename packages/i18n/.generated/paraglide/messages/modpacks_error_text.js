/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Error_TextInputs */

const en_modpacks_error_text = /** @type {(inputs: Modpacks_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again in a moment.`)
};

const es_modpacks_error_text = /** @type {(inputs: Modpacks_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inténtalo de nuevo en un momento.`)
};

const de_modpacks_error_text = /** @type {(inputs: Modpacks_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versuche es gleich noch einmal.`)
};

const fr_modpacks_error_text = /** @type {(inputs: Modpacks_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayez dans un instant.`)
};

const it_modpacks_error_text = /** @type {(inputs: Modpacks_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova tra un momento.`)
};

const nl_modpacks_error_text = /** @type {(inputs: Modpacks_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probeer het zo meteen opnieuw.`)
};

const pl_modpacks_error_text = /** @type {(inputs: Modpacks_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie za chwilę.`)
};

const pt_modpacks_error_text = /** @type {(inputs: Modpacks_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tente novamente em instantes.`)
};

const ru_modpacks_error_text = /** @type {(inputs: Modpacks_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Попробуйте ещё раз через минуту.`)
};

const sv_modpacks_error_text = /** @type {(inputs: Modpacks_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen om en stund.`)
};

const tr_modpacks_error_text = /** @type {(inputs: Modpacks_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Birazdan tekrar dene.`)
};

const zh_modpacks_error_text = /** @type {(inputs: Modpacks_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请稍后再试。`)
};

const ja_modpacks_error_text = /** @type {(inputs: Modpacks_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`しばらくしてからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Try again in a moment." |
*
* @param {Modpacks_Error_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_error_text = /** @type {((inputs?: Modpacks_Error_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Error_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_error_text(inputs)
	if (locale === "de") return de_modpacks_error_text(inputs)
	if (locale === "fr") return fr_modpacks_error_text(inputs)
	if (locale === "it") return it_modpacks_error_text(inputs)
	if (locale === "nl") return nl_modpacks_error_text(inputs)
	if (locale === "pl") return pl_modpacks_error_text(inputs)
	if (locale === "pt") return pt_modpacks_error_text(inputs)
	if (locale === "ru") return ru_modpacks_error_text(inputs)
	if (locale === "sv") return sv_modpacks_error_text(inputs)
	if (locale === "tr") return tr_modpacks_error_text(inputs)
	if (locale === "zh") return zh_modpacks_error_text(inputs)
	if (locale === "ja") return ja_modpacks_error_text(inputs)
	return en_modpacks_error_text(inputs)
});
