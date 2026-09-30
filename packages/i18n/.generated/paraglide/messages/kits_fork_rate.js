/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Fork_RateInputs */

const en_kits_fork_rate = /** @type {(inputs: Kits_Fork_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Too many kits in a short time. Wait a minute and try again.`)
};

const es_kits_fork_rate = /** @type {(inputs: Kits_Fork_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demasiados kits en poco tiempo. Espera un minuto y vuelve a intentarlo.`)
};

const de_kits_fork_rate = /** @type {(inputs: Kits_Fork_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu viele Kits in kurzer Zeit. Warte eine Minute und versuch es dann erneut.`)
};

const fr_kits_fork_rate = /** @type {(inputs: Kits_Fork_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trop de kits en peu de temps. Patientez une minute puis réessayez.`)
};

const it_kits_fork_rate = /** @type {(inputs: Kits_Fork_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Troppi kit in poco tempo. Aspetta un minuto e riprova.`)
};

const nl_kits_fork_rate = /** @type {(inputs: Kits_Fork_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te veel kits in korte tijd. Wacht een minuut en probeer het opnieuw.`)
};

const pl_kits_fork_rate = /** @type {(inputs: Kits_Fork_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Za dużo zestawów w krótkim czasie. Odczekaj minutę i spróbuj ponownie.`)
};

const pt_kits_fork_rate = /** @type {(inputs: Kits_Fork_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits demais em pouco tempo. Aguarde um minuto e tente de novo.`)
};

const ru_kits_fork_rate = /** @type {(inputs: Kits_Fork_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Слишком много наборов за короткое время. Подождите минуту и попробуйте снова.`)
};

const sv_kits_fork_rate = /** @type {(inputs: Kits_Fork_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För många kit på kort tid. Vänta en minut och försök igen.`)
};

const tr_kits_fork_rate = /** @type {(inputs: Kits_Fork_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısa sürede çok fazla kit. Bir dakika bekleyip tekrar dene.`)
};

const zh_kits_fork_rate = /** @type {(inputs: Kits_Fork_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`短时间内创建的套装太多，请稍等一分钟再试。`)
};

const ja_kits_fork_rate = /** @type {(inputs: Kits_Fork_RateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`短時間にキットを作りすぎています。1 分ほど待ってから再度お試しください。`)
};

/**
* | output |
* | --- |
* | "Too many kits in a short time. Wait a minute and try again." |
*
* @param {Kits_Fork_RateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_fork_rate = /** @type {((inputs?: Kits_Fork_RateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Fork_RateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_fork_rate(inputs)
	if (locale === "de") return de_kits_fork_rate(inputs)
	if (locale === "fr") return fr_kits_fork_rate(inputs)
	if (locale === "it") return it_kits_fork_rate(inputs)
	if (locale === "nl") return nl_kits_fork_rate(inputs)
	if (locale === "pl") return pl_kits_fork_rate(inputs)
	if (locale === "pt") return pt_kits_fork_rate(inputs)
	if (locale === "ru") return ru_kits_fork_rate(inputs)
	if (locale === "sv") return sv_kits_fork_rate(inputs)
	if (locale === "tr") return tr_kits_fork_rate(inputs)
	if (locale === "zh") return zh_kits_fork_rate(inputs)
	if (locale === "ja") return ja_kits_fork_rate(inputs)
	return en_kits_fork_rate(inputs)
});
