/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Error_TextInputs */

const en_jams_error_text = /** @type {(inputs: Jams_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again in a moment.`)
};

const es_jams_error_text = /** @type {(inputs: Jams_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inténtalo de nuevo en un momento.`)
};

const de_jams_error_text = /** @type {(inputs: Jams_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versuche es gleich noch einmal.`)
};

const fr_jams_error_text = /** @type {(inputs: Jams_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessayez dans un instant.`)
};

const it_jams_error_text = /** @type {(inputs: Jams_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova tra un attimo.`)
};

const nl_jams_error_text = /** @type {(inputs: Jams_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probeer het zo opnieuw.`)
};

const pl_jams_error_text = /** @type {(inputs: Jams_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie za chwilę.`)
};

const pt_jams_error_text = /** @type {(inputs: Jams_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tente novamente em instantes.`)
};

const ru_jams_error_text = /** @type {(inputs: Jams_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторите попытку через минуту.`)
};

const sv_jams_error_text = /** @type {(inputs: Jams_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen om en stund.`)
};

const tr_jams_error_text = /** @type {(inputs: Jams_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Birazdan tekrar deneyin.`)
};

const zh_jams_error_text = /** @type {(inputs: Jams_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请稍后再试。`)
};

const ja_jams_error_text = /** @type {(inputs: Jams_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`しばらくしてからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Try again in a moment." |
*
* @param {Jams_Error_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_error_text = /** @type {((inputs?: Jams_Error_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Error_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_error_text(inputs)
	if (locale === "de") return de_jams_error_text(inputs)
	if (locale === "fr") return fr_jams_error_text(inputs)
	if (locale === "it") return it_jams_error_text(inputs)
	if (locale === "nl") return nl_jams_error_text(inputs)
	if (locale === "pl") return pl_jams_error_text(inputs)
	if (locale === "pt") return pt_jams_error_text(inputs)
	if (locale === "ru") return ru_jams_error_text(inputs)
	if (locale === "sv") return sv_jams_error_text(inputs)
	if (locale === "tr") return tr_jams_error_text(inputs)
	if (locale === "zh") return zh_jams_error_text(inputs)
	if (locale === "ja") return ja_jams_error_text(inputs)
	return en_jams_error_text(inputs)
});
