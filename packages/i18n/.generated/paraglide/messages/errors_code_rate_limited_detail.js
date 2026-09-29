/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Rate_Limited_DetailInputs */

const en_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin needs a break. Try again in a moment.`)
};

const es_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin necesita un descanso. Vuelve a intentarlo en un momento.`)
};

const de_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin braucht eine Pause. Versuch es gleich noch einmal.`)
};

const fr_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin a besoin d’une pause. Réessayez dans un instant.`)
};

const it_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin ha bisogno di una pausa. Riprova tra un momento.`)
};

const nl_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin heeft even pauze nodig. Probeer het zo opnieuw.`)
};

const pl_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin potrzebuje przerwy. Spróbuj ponownie za chwilę.`)
};

const pt_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O Kelvin precisa de uma pausa. Tente de novo daqui a pouco.`)
};

const ru_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кельвину нужен перерыв. Попробуйте чуть позже.`)
};

const sv_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin behöver en paus. Försök igen om en stund.`)
};

const tr_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin’in biraz molaya ihtiyacı var. Birazdan tekrar dene.`)
};

const zh_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin 需要歇一会儿。请稍后再试。`)
};

const ja_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ケルヴィンがひと休みしています。少し待ってからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Kelvin needs a break. Try again in a moment." |
*
* @param {Errors_Code_Rate_Limited_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_rate_limited_detail = /** @type {((inputs?: Errors_Code_Rate_Limited_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Rate_Limited_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_rate_limited_detail(inputs)
	if (locale === "de") return de_errors_code_rate_limited_detail(inputs)
	if (locale === "fr") return fr_errors_code_rate_limited_detail(inputs)
	if (locale === "it") return it_errors_code_rate_limited_detail(inputs)
	if (locale === "nl") return nl_errors_code_rate_limited_detail(inputs)
	if (locale === "pl") return pl_errors_code_rate_limited_detail(inputs)
	if (locale === "pt") return pt_errors_code_rate_limited_detail(inputs)
	if (locale === "ru") return ru_errors_code_rate_limited_detail(inputs)
	if (locale === "sv") return sv_errors_code_rate_limited_detail(inputs)
	if (locale === "tr") return tr_errors_code_rate_limited_detail(inputs)
	if (locale === "zh") return zh_errors_code_rate_limited_detail(inputs)
	if (locale === "ja") return ja_errors_code_rate_limited_detail(inputs)
	return en_errors_code_rate_limited_detail(inputs)
});
