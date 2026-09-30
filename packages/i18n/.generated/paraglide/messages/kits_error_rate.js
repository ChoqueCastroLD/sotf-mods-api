/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Error_RateInputs */

const en_kits_error_rate = /** @type {(inputs: Kits_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Too many changes in a short time. Wait a minute.`)
};

const es_kits_error_rate = /** @type {(inputs: Kits_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demasiados cambios en poco tiempo. Espera un minuto.`)
};

const de_kits_error_rate = /** @type {(inputs: Kits_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu viele Änderungen in kurzer Zeit. Warte eine Minute.`)
};

const fr_kits_error_rate = /** @type {(inputs: Kits_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trop de modifications en peu de temps. Patientez une minute.`)
};

const it_kits_error_rate = /** @type {(inputs: Kits_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Troppe modifiche in poco tempo. Aspetta un minuto.`)
};

const nl_kits_error_rate = /** @type {(inputs: Kits_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te veel wijzigingen in korte tijd. Wacht een minuut.`)
};

const pl_kits_error_rate = /** @type {(inputs: Kits_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Za dużo zmian w krótkim czasie. Odczekaj minutę.`)
};

const pt_kits_error_rate = /** @type {(inputs: Kits_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alterações demais em pouco tempo. Aguarde um minuto.`)
};

const ru_kits_error_rate = /** @type {(inputs: Kits_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Слишком много изменений за короткое время. Подождите минуту.`)
};

const sv_kits_error_rate = /** @type {(inputs: Kits_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För många ändringar på kort tid. Vänta en minut.`)
};

const tr_kits_error_rate = /** @type {(inputs: Kits_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısa sürede çok fazla değişiklik. Bir dakika bekle.`)
};

const zh_kits_error_rate = /** @type {(inputs: Kits_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`短时间内修改太频繁，请稍等一分钟。`)
};

const ja_kits_error_rate = /** @type {(inputs: Kits_Error_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`短時間に変更が多すぎます。1 分ほどお待ちください。`)
};

/**
* | output |
* | --- |
* | "Too many changes in a short time. Wait a minute." |
*
* @param {Kits_Error_RateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_error_rate = /** @type {((inputs?: Kits_Error_RateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Error_RateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_error_rate(inputs)
	if (locale === "de") return de_kits_error_rate(inputs)
	if (locale === "fr") return fr_kits_error_rate(inputs)
	if (locale === "it") return it_kits_error_rate(inputs)
	if (locale === "nl") return nl_kits_error_rate(inputs)
	if (locale === "pl") return pl_kits_error_rate(inputs)
	if (locale === "pt") return pt_kits_error_rate(inputs)
	if (locale === "ru") return ru_kits_error_rate(inputs)
	if (locale === "sv") return sv_kits_error_rate(inputs)
	if (locale === "tr") return tr_kits_error_rate(inputs)
	if (locale === "zh") return zh_kits_error_rate(inputs)
	if (locale === "ja") return ja_kits_error_rate(inputs)
	return en_kits_error_rate(inputs)
});
