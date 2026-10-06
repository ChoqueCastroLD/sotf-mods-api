/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Rate_Limited_DetailInputs */

const en_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wait a moment and try again.`)
};

const es_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Espera un momento y vuelve a intentarlo.`)
};

const de_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warte einen Moment und versuch es erneut.`)
};

const fr_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patientez un instant puis réessayez.`)
};

const it_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attendi un momento e riprova.`)
};

const nl_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wacht even en probeer het opnieuw.`)
};

const pl_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poczekaj chwilę i spróbuj ponownie.`)
};

const pt_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aguarde um momento e tente de novo.`)
};

const ru_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подождите немного и попробуйте снова.`)
};

const sv_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vänta en stund och försök igen.`)
};

const tr_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biraz bekle ve tekrar dene.`)
};

const zh_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请稍等片刻后再试。`)
};

const ja_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`少し待ってからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Wait a moment and try again." |
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
