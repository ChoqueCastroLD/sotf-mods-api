/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Network_RetryingInputs */

const en_errors_network_retrying = /** @type {(inputs: Errors_Network_RetryingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lost signal. Retrying…`)
};

const es_errors_network_retrying = /** @type {(inputs: Errors_Network_RetryingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin señal. Reintentando…`)
};

const de_errors_network_retrying = /** @type {(inputs: Errors_Network_RetryingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Signal. Neuer Versuch …`)
};

const fr_errors_network_retrying = /** @type {(inputs: Errors_Network_RetryingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal perdu. Nouvelle tentative…`)
};

const it_errors_network_retrying = /** @type {(inputs: Errors_Network_RetryingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnale perso. Nuovo tentativo…`)
};

const nl_errors_network_retrying = /** @type {(inputs: Errors_Network_RetryingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen signaal. Opnieuw proberen…`)
};

const pl_errors_network_retrying = /** @type {(inputs: Errors_Network_RetryingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak sygnału. Ponawiam…`)
};

const pt_errors_network_retrying = /** @type {(inputs: Errors_Network_RetryingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem sinal. Tentando de novo…`)
};

const ru_errors_network_retrying = /** @type {(inputs: Errors_Network_RetryingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет сигнала. Пробуем снова…`)
};

const sv_errors_network_retrying = /** @type {(inputs: Errors_Network_RetryingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen signal. Försöker igen…`)
};

const tr_errors_network_retrying = /** @type {(inputs: Errors_Network_RetryingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinyal yok. Yeniden deneniyor…`)
};

const zh_errors_network_retrying = /** @type {(inputs: Errors_Network_RetryingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信号中断，正在重试…`)
};

const ja_errors_network_retrying = /** @type {(inputs: Errors_Network_RetryingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`電波が届きません。再接続しています…`)
};

/**
* | output |
* | --- |
* | "Lost signal. Retrying…" |
*
* @param {Errors_Network_RetryingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_network_retrying = /** @type {((inputs?: Errors_Network_RetryingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Network_RetryingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_network_retrying(inputs)
	if (locale === "de") return de_errors_network_retrying(inputs)
	if (locale === "fr") return fr_errors_network_retrying(inputs)
	if (locale === "it") return it_errors_network_retrying(inputs)
	if (locale === "nl") return nl_errors_network_retrying(inputs)
	if (locale === "pl") return pl_errors_network_retrying(inputs)
	if (locale === "pt") return pt_errors_network_retrying(inputs)
	if (locale === "ru") return ru_errors_network_retrying(inputs)
	if (locale === "sv") return sv_errors_network_retrying(inputs)
	if (locale === "tr") return tr_errors_network_retrying(inputs)
	if (locale === "zh") return zh_errors_network_retrying(inputs)
	if (locale === "ja") return ja_errors_network_retrying(inputs)
	return en_errors_network_retrying(inputs)
});
