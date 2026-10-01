/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Err_BusyInputs */

const en_logs_err_busy = /** @type {(inputs: Logs_Err_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log sharing is busy right now. Try again in a few minutes.`)
};

const es_logs_err_busy = /** @type {(inputs: Logs_Err_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compartir logs está saturado ahora mismo. Inténtalo de nuevo en unos minutos.`)
};

const de_logs_err_busy = /** @type {(inputs: Logs_Err_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Teilen von Logs ist gerade überlastet. Versuche es in ein paar Minuten erneut.`)
};

const fr_logs_err_busy = /** @type {(inputs: Logs_Err_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le partage de logs est surchargé pour le moment. Réessayez dans quelques minutes.`)
};

const it_logs_err_busy = /** @type {(inputs: Logs_Err_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La condivisione dei log è molto richiesta in questo momento. Riprova tra qualche minuto.`)
};

const nl_logs_err_busy = /** @type {(inputs: Logs_Err_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logs delen is nu druk bezet. Probeer het over een paar minuten opnieuw.`)
};

const pl_logs_err_busy = /** @type {(inputs: Logs_Err_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Udostępnianie logów jest teraz przeciążone. Spróbuj ponownie za kilka minut.`)
};

const pt_logs_err_busy = /** @type {(inputs: Logs_Err_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A partilha de logs está sobrecarregada neste momento. Tente de novo dentro de alguns minutos.`)
};

const ru_logs_err_busy = /** @type {(inputs: Logs_Err_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сервис логов сейчас перегружен. Повторите через несколько минут.`)
};

const sv_logs_err_busy = /** @type {(inputs: Logs_Err_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loggdelning är överbelastad just nu. Försök igen om några minuter.`)
};

const tr_logs_err_busy = /** @type {(inputs: Logs_Err_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log paylaşımı şu anda yoğun. Birkaç dakika sonra tekrar deneyin.`)
};

const zh_logs_err_busy = /** @type {(inputs: Logs_Err_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日志分享目前很繁忙。请几分钟后重试。`)
};

const ja_logs_err_busy = /** @type {(inputs: Logs_Err_BusyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログ共有は現在混み合っています。数分後にもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Log sharing is busy right now. Try again in a few minutes." |
*
* @param {Logs_Err_BusyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_err_busy = /** @type {((inputs?: Logs_Err_BusyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Err_BusyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_err_busy(inputs)
	if (locale === "de") return de_logs_err_busy(inputs)
	if (locale === "fr") return fr_logs_err_busy(inputs)
	if (locale === "it") return it_logs_err_busy(inputs)
	if (locale === "nl") return nl_logs_err_busy(inputs)
	if (locale === "pl") return pl_logs_err_busy(inputs)
	if (locale === "pt") return pt_logs_err_busy(inputs)
	if (locale === "ru") return ru_logs_err_busy(inputs)
	if (locale === "sv") return sv_logs_err_busy(inputs)
	if (locale === "tr") return tr_logs_err_busy(inputs)
	if (locale === "zh") return zh_logs_err_busy(inputs)
	if (locale === "ja") return ja_logs_err_busy(inputs)
	return en_logs_err_busy(inputs)
});
