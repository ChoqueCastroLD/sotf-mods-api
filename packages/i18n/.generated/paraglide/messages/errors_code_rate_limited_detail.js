/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Rate_Limited_DetailInputs */

const en_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Too many requests. Try again in a moment.`)
};

const es_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demasiadas solicitudes. Vuelve a intentarlo en un momento.`)
};

const de_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu viele Anfragen. Versuch es gleich noch einmal.`)
};

const fr_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trop de requêtes. Réessayez dans un instant.`)
};

const it_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Troppe richieste. Riprova tra un momento.`)
};

const nl_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te veel verzoeken. Probeer het zo opnieuw.`)
};

const pl_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zbyt wiele żądań. Spróbuj ponownie za chwilę.`)
};

const pt_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Muitos pedidos. Tente de novo daqui a pouco.`)
};

const ru_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Слишком много запросов. Попробуйте чуть позже.`)
};

const sv_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För många förfrågningar. Försök igen om en stund.`)
};

const tr_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok fazla istek. Birazdan tekrar dene.`)
};

const zh_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求过多。请稍后再试。`)
};

const ja_errors_code_rate_limited_detail = /** @type {(inputs: Errors_Code_Rate_Limited_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストが多すぎます。少し待ってからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Too many requests. Try again in a moment." |
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
