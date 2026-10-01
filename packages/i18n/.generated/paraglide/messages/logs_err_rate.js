/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ seconds: NonNullable<unknown> }} Logs_Err_RateInputs */

const en_logs_err_rate = /** @type {(inputs: Logs_Err_RateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Too many requests — try again in ${i?.seconds} s`)
};

const es_logs_err_rate = /** @type {(inputs: Logs_Err_RateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Demasiadas solicitudes — vuelve a intentarlo en ${i?.seconds} s`)
};

const de_logs_err_rate = /** @type {(inputs: Logs_Err_RateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zu viele Anfragen — versuche es in ${i?.seconds} s erneut`)
};

const fr_logs_err_rate = /** @type {(inputs: Logs_Err_RateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Trop de requêtes — réessayez dans ${i?.seconds} s`)
};

const it_logs_err_rate = /** @type {(inputs: Logs_Err_RateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Troppe richieste — riprova tra ${i?.seconds} s`)
};

const nl_logs_err_rate = /** @type {(inputs: Logs_Err_RateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Te veel verzoeken — probeer het over ${i?.seconds} s opnieuw`)
};

const pl_logs_err_rate = /** @type {(inputs: Logs_Err_RateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zbyt wiele żądań — spróbuj ponownie za ${i?.seconds} s`)
};

const pt_logs_err_rate = /** @type {(inputs: Logs_Err_RateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Muitos pedidos — tente de novo em ${i?.seconds} s`)
};

const ru_logs_err_rate = /** @type {(inputs: Logs_Err_RateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Слишком много запросов — повторите через ${i?.seconds} с`)
};

const sv_logs_err_rate = /** @type {(inputs: Logs_Err_RateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`För många förfrågningar — försök igen om ${i?.seconds} s`)
};

const tr_logs_err_rate = /** @type {(inputs: Logs_Err_RateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Çok fazla istek — ${i?.seconds} sn sonra tekrar deneyin`)
};

const zh_logs_err_rate = /** @type {(inputs: Logs_Err_RateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`请求过多 — 请在 ${i?.seconds} 秒后重试`)
};

const ja_logs_err_rate = /** @type {(inputs: Logs_Err_RateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`リクエストが多すぎます — ${i?.seconds} 秒後にもう一度お試しください`)
};

/**
* | output |
* | --- |
* | "Too many requests — try again in {seconds} s" |
*
* @param {Logs_Err_RateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_err_rate = /** @type {((inputs: Logs_Err_RateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Err_RateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_err_rate(inputs)
	if (locale === "de") return de_logs_err_rate(inputs)
	if (locale === "fr") return fr_logs_err_rate(inputs)
	if (locale === "it") return it_logs_err_rate(inputs)
	if (locale === "nl") return nl_logs_err_rate(inputs)
	if (locale === "pl") return pl_logs_err_rate(inputs)
	if (locale === "pt") return pt_logs_err_rate(inputs)
	if (locale === "ru") return ru_logs_err_rate(inputs)
	if (locale === "sv") return sv_logs_err_rate(inputs)
	if (locale === "tr") return tr_logs_err_rate(inputs)
	if (locale === "zh") return zh_logs_err_rate(inputs)
	if (locale === "ja") return ja_logs_err_rate(inputs)
	return en_logs_err_rate(inputs)
});
