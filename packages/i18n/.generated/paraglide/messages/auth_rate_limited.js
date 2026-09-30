/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ seconds: NonNullable<unknown> }} Auth_Rate_LimitedInputs */

const en_auth_rate_limited = /** @type {(inputs: Auth_Rate_LimitedInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("en", i?.seconds, {});return /** @type {LocalizedString} */ (`Too many attempts. Wait ${seconds__number} s and try again.`)
};

const es_auth_rate_limited = /** @type {(inputs: Auth_Rate_LimitedInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("es", i?.seconds, {});return /** @type {LocalizedString} */ (`Demasiados intentos. Espera ${seconds__number} s y vuelve a intentarlo.`)
};

const de_auth_rate_limited = /** @type {(inputs: Auth_Rate_LimitedInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("de", i?.seconds, {});return /** @type {LocalizedString} */ (`Zu viele Versuche. Warte ${seconds__number} s und versuch es erneut.`)
};

const fr_auth_rate_limited = /** @type {(inputs: Auth_Rate_LimitedInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("fr", i?.seconds, {});return /** @type {LocalizedString} */ (`Trop de tentatives. Patientez ${seconds__number} s et réessayez.`)
};

const it_auth_rate_limited = /** @type {(inputs: Auth_Rate_LimitedInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("it", i?.seconds, {});return /** @type {LocalizedString} */ (`Troppi tentativi. Aspetta ${seconds__number} s e riprova.`)
};

const nl_auth_rate_limited = /** @type {(inputs: Auth_Rate_LimitedInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("nl", i?.seconds, {});return /** @type {LocalizedString} */ (`Te veel pogingen. Wacht ${seconds__number} s en probeer het opnieuw.`)
};

const pl_auth_rate_limited = /** @type {(inputs: Auth_Rate_LimitedInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("pl", i?.seconds, {});return /** @type {LocalizedString} */ (`Za dużo prób. Odczekaj ${seconds__number} s i spróbuj ponownie.`)
};

const pt_auth_rate_limited = /** @type {(inputs: Auth_Rate_LimitedInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("pt", i?.seconds, {});return /** @type {LocalizedString} */ (`Tentativas demais. Aguarde ${seconds__number} s e tente de novo.`)
};

const ru_auth_rate_limited = /** @type {(inputs: Auth_Rate_LimitedInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("ru", i?.seconds, {});return /** @type {LocalizedString} */ (`Слишком много попыток. Подождите ${seconds__number} с и попробуйте снова.`)
};

const sv_auth_rate_limited = /** @type {(inputs: Auth_Rate_LimitedInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("sv", i?.seconds, {});return /** @type {LocalizedString} */ (`För många försök. Vänta ${seconds__number} s och försök igen.`)
};

const tr_auth_rate_limited = /** @type {(inputs: Auth_Rate_LimitedInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("tr", i?.seconds, {});return /** @type {LocalizedString} */ (`Çok fazla deneme. ${seconds__number} sn bekleyip tekrar dene.`)
};

const zh_auth_rate_limited = /** @type {(inputs: Auth_Rate_LimitedInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("zh", i?.seconds, {});return /** @type {LocalizedString} */ (`尝试次数过多。请等待 ${seconds__number} 秒后重试。`)
};

const ja_auth_rate_limited = /** @type {(inputs: Auth_Rate_LimitedInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("ja", i?.seconds, {});return /** @type {LocalizedString} */ (`試行回数が多すぎます。${seconds__number} 秒待ってからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Too many attempts. Wait {seconds__number} s and try again." |
*
* @param {Auth_Rate_LimitedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_rate_limited = /** @type {((inputs: Auth_Rate_LimitedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Rate_LimitedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_rate_limited(inputs)
	if (locale === "de") return de_auth_rate_limited(inputs)
	if (locale === "fr") return fr_auth_rate_limited(inputs)
	if (locale === "it") return it_auth_rate_limited(inputs)
	if (locale === "nl") return nl_auth_rate_limited(inputs)
	if (locale === "pl") return pl_auth_rate_limited(inputs)
	if (locale === "pt") return pt_auth_rate_limited(inputs)
	if (locale === "ru") return ru_auth_rate_limited(inputs)
	if (locale === "sv") return sv_auth_rate_limited(inputs)
	if (locale === "tr") return tr_auth_rate_limited(inputs)
	if (locale === "zh") return zh_auth_rate_limited(inputs)
	if (locale === "ja") return ja_auth_rate_limited(inputs)
	return en_auth_rate_limited(inputs)
});
