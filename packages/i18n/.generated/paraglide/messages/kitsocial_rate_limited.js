/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Rate_LimitedInputs */

const en_kitsocial_rate_limited = /** @type {(inputs: Kitsocial_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Too many requests. Wait a moment and try again.`)
};

const es_kitsocial_rate_limited = /** @type {(inputs: Kitsocial_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demasiadas solicitudes. Espera un momento e inténtalo de nuevo.`)
};

const de_kitsocial_rate_limited = /** @type {(inputs: Kitsocial_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu viele Anfragen. Warte einen Moment und versuche es erneut.`)
};

const fr_kitsocial_rate_limited = /** @type {(inputs: Kitsocial_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trop de requêtes. Patientez un instant puis réessayez.`)
};

const it_kitsocial_rate_limited = /** @type {(inputs: Kitsocial_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Troppe richieste. Attendi un attimo e riprova.`)
};

const nl_kitsocial_rate_limited = /** @type {(inputs: Kitsocial_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te veel verzoeken. Wacht even en probeer het opnieuw.`)
};

const pl_kitsocial_rate_limited = /** @type {(inputs: Kitsocial_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zbyt wiele żądań. Poczekaj chwilę i spróbuj ponownie.`)
};

const pt_kitsocial_rate_limited = /** @type {(inputs: Kitsocial_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Muitas solicitações. Aguarde um momento e tente novamente.`)
};

const ru_kitsocial_rate_limited = /** @type {(inputs: Kitsocial_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Слишком много запросов. Подождите немного и повторите.`)
};

const sv_kitsocial_rate_limited = /** @type {(inputs: Kitsocial_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För många förfrågningar. Vänta en stund och försök igen.`)
};

const tr_kitsocial_rate_limited = /** @type {(inputs: Kitsocial_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok fazla istek. Biraz bekle ve tekrar dene.`)
};

const zh_kitsocial_rate_limited = /** @type {(inputs: Kitsocial_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求过多，请稍后重试。`)
};

const ja_kitsocial_rate_limited = /** @type {(inputs: Kitsocial_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストが多すぎます。しばらくしてからお試しください。`)
};

/**
* | output |
* | --- |
* | "Too many requests. Wait a moment and try again." |
*
* @param {Kitsocial_Rate_LimitedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_rate_limited = /** @type {((inputs?: Kitsocial_Rate_LimitedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Rate_LimitedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_rate_limited(inputs)
	if (locale === "de") return de_kitsocial_rate_limited(inputs)
	if (locale === "fr") return fr_kitsocial_rate_limited(inputs)
	if (locale === "it") return it_kitsocial_rate_limited(inputs)
	if (locale === "nl") return nl_kitsocial_rate_limited(inputs)
	if (locale === "pl") return pl_kitsocial_rate_limited(inputs)
	if (locale === "pt") return pt_kitsocial_rate_limited(inputs)
	if (locale === "ru") return ru_kitsocial_rate_limited(inputs)
	if (locale === "sv") return sv_kitsocial_rate_limited(inputs)
	if (locale === "tr") return tr_kitsocial_rate_limited(inputs)
	if (locale === "zh") return zh_kitsocial_rate_limited(inputs)
	if (locale === "ja") return ja_kitsocial_rate_limited(inputs)
	return en_kitsocial_rate_limited(inputs)
});
