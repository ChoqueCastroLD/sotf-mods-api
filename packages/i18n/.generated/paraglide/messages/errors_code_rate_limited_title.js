/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Rate_Limited_TitleInputs */

const en_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Too many requests`)
};

const es_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demasiadas solicitudes`)
};

const de_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu viele Anfragen`)
};

const fr_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trop de requêtes`)
};

const it_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Troppe richieste`)
};

const nl_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te veel verzoeken`)
};

const pl_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zbyt wiele żądań`)
};

const pt_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Muitos pedidos`)
};

const ru_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Слишком много запросов`)
};

const sv_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För många förfrågningar`)
};

const tr_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok fazla istek`)
};

const zh_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求过多`)
};

const ja_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストが多すぎます`)
};

/**
* | output |
* | --- |
* | "Too many requests" |
*
* @param {Errors_Code_Rate_Limited_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_rate_limited_title = /** @type {((inputs?: Errors_Code_Rate_Limited_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Rate_Limited_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_rate_limited_title(inputs)
	if (locale === "de") return de_errors_code_rate_limited_title(inputs)
	if (locale === "fr") return fr_errors_code_rate_limited_title(inputs)
	if (locale === "it") return it_errors_code_rate_limited_title(inputs)
	if (locale === "nl") return nl_errors_code_rate_limited_title(inputs)
	if (locale === "pl") return pl_errors_code_rate_limited_title(inputs)
	if (locale === "pt") return pt_errors_code_rate_limited_title(inputs)
	if (locale === "ru") return ru_errors_code_rate_limited_title(inputs)
	if (locale === "sv") return sv_errors_code_rate_limited_title(inputs)
	if (locale === "tr") return tr_errors_code_rate_limited_title(inputs)
	if (locale === "zh") return zh_errors_code_rate_limited_title(inputs)
	if (locale === "ja") return ja_errors_code_rate_limited_title(inputs)
	return en_errors_code_rate_limited_title(inputs)
});
