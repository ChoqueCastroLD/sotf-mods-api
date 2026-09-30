/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Toast_Rate_LimitedInputs */

const en_mod_toast_rate_limited = /** @type {(inputs: Mod_Toast_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Too many tries. Wait a minute and try again.`)
};

const es_mod_toast_rate_limited = /** @type {(inputs: Mod_Toast_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demasiados intentos. Espera un minuto y vuelve a probar.`)
};

const de_mod_toast_rate_limited = /** @type {(inputs: Mod_Toast_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu viele Versuche. Warte eine Minute und versuch es erneut.`)
};

const fr_mod_toast_rate_limited = /** @type {(inputs: Mod_Toast_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trop d’essais. Attendez une minute et réessayez.`)
};

const it_mod_toast_rate_limited = /** @type {(inputs: Mod_Toast_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Troppi tentativi. Aspetta un minuto e riprova.`)
};

const nl_mod_toast_rate_limited = /** @type {(inputs: Mod_Toast_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te veel pogingen. Wacht een minuut en probeer het opnieuw.`)
};

const pl_mod_toast_rate_limited = /** @type {(inputs: Mod_Toast_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Za dużo prób. Odczekaj minutę i spróbuj ponownie.`)
};

const pt_mod_toast_rate_limited = /** @type {(inputs: Mod_Toast_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentativas demais. Espere um minuto e tente de novo.`)
};

const ru_mod_toast_rate_limited = /** @type {(inputs: Mod_Toast_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Слишком много попыток. Подождите минуту и попробуйте снова.`)
};

const sv_mod_toast_rate_limited = /** @type {(inputs: Mod_Toast_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För många försök. Vänta en minut och försök igen.`)
};

const tr_mod_toast_rate_limited = /** @type {(inputs: Mod_Toast_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok fazla deneme. Bir dakika bekleyip tekrar dene.`)
};

const zh_mod_toast_rate_limited = /** @type {(inputs: Mod_Toast_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`尝试次数过多，请等一分钟后再试。`)
};

const ja_mod_toast_rate_limited = /** @type {(inputs: Mod_Toast_Rate_LimitedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`試行回数が多すぎます。1 分待ってからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Too many tries. Wait a minute and try again." |
*
* @param {Mod_Toast_Rate_LimitedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_toast_rate_limited = /** @type {((inputs?: Mod_Toast_Rate_LimitedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Toast_Rate_LimitedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_toast_rate_limited(inputs)
	if (locale === "de") return de_mod_toast_rate_limited(inputs)
	if (locale === "fr") return fr_mod_toast_rate_limited(inputs)
	if (locale === "it") return it_mod_toast_rate_limited(inputs)
	if (locale === "nl") return nl_mod_toast_rate_limited(inputs)
	if (locale === "pl") return pl_mod_toast_rate_limited(inputs)
	if (locale === "pt") return pt_mod_toast_rate_limited(inputs)
	if (locale === "ru") return ru_mod_toast_rate_limited(inputs)
	if (locale === "sv") return sv_mod_toast_rate_limited(inputs)
	if (locale === "tr") return tr_mod_toast_rate_limited(inputs)
	if (locale === "zh") return zh_mod_toast_rate_limited(inputs)
	if (locale === "ja") return ja_mod_toast_rate_limited(inputs)
	return en_mod_toast_rate_limited(inputs)
});
