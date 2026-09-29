/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ seconds: NonNullable<unknown> }} Errors_Code_Rate_Limited_RetryInputs */

const en_errors_code_rate_limited_retry = /** @type {(inputs: Errors_Code_Rate_Limited_RetryInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("en", i?.seconds, {});return /** @type {LocalizedString} */ (`Kelvin needs a break. Try again in ${seconds__number} s.`)
};

const es_errors_code_rate_limited_retry = /** @type {(inputs: Errors_Code_Rate_Limited_RetryInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("es", i?.seconds, {});return /** @type {LocalizedString} */ (`Kelvin necesita un descanso. Vuelve a intentarlo en ${seconds__number} s.`)
};

const de_errors_code_rate_limited_retry = /** @type {(inputs: Errors_Code_Rate_Limited_RetryInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("de", i?.seconds, {});return /** @type {LocalizedString} */ (`Kelvin braucht eine Pause. Versuch es in ${seconds__number} s erneut.`)
};

const fr_errors_code_rate_limited_retry = /** @type {(inputs: Errors_Code_Rate_Limited_RetryInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("fr", i?.seconds, {});return /** @type {LocalizedString} */ (`Kelvin a besoin d’une pause. Réessayez dans ${seconds__number} s.`)
};

const it_errors_code_rate_limited_retry = /** @type {(inputs: Errors_Code_Rate_Limited_RetryInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("it", i?.seconds, {});return /** @type {LocalizedString} */ (`Kelvin ha bisogno di una pausa. Riprova tra ${seconds__number} s.`)
};

const nl_errors_code_rate_limited_retry = /** @type {(inputs: Errors_Code_Rate_Limited_RetryInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("nl", i?.seconds, {});return /** @type {LocalizedString} */ (`Kelvin heeft even pauze nodig. Probeer het over ${seconds__number} s opnieuw.`)
};

const pl_errors_code_rate_limited_retry = /** @type {(inputs: Errors_Code_Rate_Limited_RetryInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("pl", i?.seconds, {});return /** @type {LocalizedString} */ (`Kelvin potrzebuje przerwy. Spróbuj ponownie za ${seconds__number} s.`)
};

const pt_errors_code_rate_limited_retry = /** @type {(inputs: Errors_Code_Rate_Limited_RetryInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("pt", i?.seconds, {});return /** @type {LocalizedString} */ (`O Kelvin precisa de uma pausa. Tente de novo em ${seconds__number} s.`)
};

const ru_errors_code_rate_limited_retry = /** @type {(inputs: Errors_Code_Rate_Limited_RetryInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("ru", i?.seconds, {});return /** @type {LocalizedString} */ (`Кельвину нужен перерыв. Попробуйте снова через ${seconds__number} с.`)
};

const sv_errors_code_rate_limited_retry = /** @type {(inputs: Errors_Code_Rate_Limited_RetryInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("sv", i?.seconds, {});return /** @type {LocalizedString} */ (`Kelvin behöver en paus. Försök igen om ${seconds__number} s.`)
};

const tr_errors_code_rate_limited_retry = /** @type {(inputs: Errors_Code_Rate_Limited_RetryInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("tr", i?.seconds, {});return /** @type {LocalizedString} */ (`Kelvin’in biraz molaya ihtiyacı var. ${seconds__number} sn sonra tekrar dene.`)
};

const zh_errors_code_rate_limited_retry = /** @type {(inputs: Errors_Code_Rate_Limited_RetryInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("zh", i?.seconds, {});return /** @type {LocalizedString} */ (`Kelvin 需要歇一会儿。请在 ${seconds__number} 秒后重试。`)
};

const ja_errors_code_rate_limited_retry = /** @type {(inputs: Errors_Code_Rate_Limited_RetryInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("ja", i?.seconds, {});return /** @type {LocalizedString} */ (`ケルヴィンがひと休みしています。${seconds__number} 秒後にもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Kelvin needs a break. Try again in {seconds__number} s." |
*
* @param {Errors_Code_Rate_Limited_RetryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_rate_limited_retry = /** @type {((inputs: Errors_Code_Rate_Limited_RetryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Rate_Limited_RetryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_rate_limited_retry(inputs)
	if (locale === "de") return de_errors_code_rate_limited_retry(inputs)
	if (locale === "fr") return fr_errors_code_rate_limited_retry(inputs)
	if (locale === "it") return it_errors_code_rate_limited_retry(inputs)
	if (locale === "nl") return nl_errors_code_rate_limited_retry(inputs)
	if (locale === "pl") return pl_errors_code_rate_limited_retry(inputs)
	if (locale === "pt") return pt_errors_code_rate_limited_retry(inputs)
	if (locale === "ru") return ru_errors_code_rate_limited_retry(inputs)
	if (locale === "sv") return sv_errors_code_rate_limited_retry(inputs)
	if (locale === "tr") return tr_errors_code_rate_limited_retry(inputs)
	if (locale === "zh") return zh_errors_code_rate_limited_retry(inputs)
	if (locale === "ja") return ja_errors_code_rate_limited_retry(inputs)
	return en_errors_code_rate_limited_retry(inputs)
});
