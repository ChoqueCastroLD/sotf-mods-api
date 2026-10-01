/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Logs_Err_Too_LargeInputs */

const en_logs_err_too_large = /** @type {(inputs: Logs_Err_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`That log is larger than ${i?.max}. Send only the part around the problem.`)
};

const es_logs_err_too_large = /** @type {(inputs: Logs_Err_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ese log supera ${i?.max}. Envía solo la parte cercana al problema.`)
};

const de_logs_err_too_large = /** @type {(inputs: Logs_Err_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dieses Log ist größer als ${i?.max}. Sende nur den Teil rund um das Problem.`)
};

const fr_logs_err_too_large = /** @type {(inputs: Logs_Err_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ce log dépasse ${i?.max}. Envoyez uniquement la partie autour du problème.`)
};

const it_logs_err_too_large = /** @type {(inputs: Logs_Err_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Questo log supera ${i?.max}. Invia solo la parte attorno al problema.`)
};

const nl_logs_err_too_large = /** @type {(inputs: Logs_Err_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die log is groter dan ${i?.max}. Stuur alleen het deel rond het probleem.`)
};

const pl_logs_err_too_large = /** @type {(inputs: Logs_Err_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ten log jest większy niż ${i?.max}. Wyślij tylko fragment wokół problemu.`)
};

const pt_logs_err_too_large = /** @type {(inputs: Logs_Err_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Esse log excede ${i?.max}. Envie apenas a parte à volta do problema.`)
};

const ru_logs_err_too_large = /** @type {(inputs: Logs_Err_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Этот лог больше ${i?.max}. Отправьте только часть вокруг проблемы.`)
};

const sv_logs_err_too_large = /** @type {(inputs: Logs_Err_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Loggen är större än ${i?.max}. Skicka bara delen kring problemet.`)
};

const tr_logs_err_too_large = /** @type {(inputs: Logs_Err_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bu log ${i?.max} sınırından büyük. Yalnızca sorunun çevresindeki kısmı gönderin.`)
};

const zh_logs_err_too_large = /** @type {(inputs: Logs_Err_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`该日志超过 ${i?.max}。请只发送问题前后的部分。`)
};

const ja_logs_err_too_large = /** @type {(inputs: Logs_Err_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`このログは ${i?.max} を超えています。問題の前後の部分だけを送ってください。`)
};

/**
* | output |
* | --- |
* | "That log is larger than {max}. Send only the part around the problem." |
*
* @param {Logs_Err_Too_LargeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_err_too_large = /** @type {((inputs: Logs_Err_Too_LargeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Err_Too_LargeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_err_too_large(inputs)
	if (locale === "de") return de_logs_err_too_large(inputs)
	if (locale === "fr") return fr_logs_err_too_large(inputs)
	if (locale === "it") return it_logs_err_too_large(inputs)
	if (locale === "nl") return nl_logs_err_too_large(inputs)
	if (locale === "pl") return pl_logs_err_too_large(inputs)
	if (locale === "pt") return pt_logs_err_too_large(inputs)
	if (locale === "ru") return ru_logs_err_too_large(inputs)
	if (locale === "sv") return sv_logs_err_too_large(inputs)
	if (locale === "tr") return tr_logs_err_too_large(inputs)
	if (locale === "zh") return zh_logs_err_too_large(inputs)
	if (locale === "ja") return ja_logs_err_too_large(inputs)
	return en_logs_err_too_large(inputs)
});
