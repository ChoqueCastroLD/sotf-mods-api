/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Network_TitleInputs */

const en_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lost signal`)
};

const es_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin señal`)
};

const de_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Signal`)
};

const fr_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal perdu`)
};

const it_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnale perso`)
};

const nl_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen signaal`)
};

const pl_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak sygnału`)
};

const pt_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem sinal`)
};

const ru_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет сигнала`)
};

const sv_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen signal`)
};

const tr_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinyal yok`)
};

const zh_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信号中断`)
};

const ja_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`電波が届きません`)
};

/**
* | output |
* | --- |
* | "Lost signal" |
*
* @param {Errors_Network_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_network_title = /** @type {((inputs?: Errors_Network_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Network_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_network_title(inputs)
	if (locale === "de") return de_errors_network_title(inputs)
	if (locale === "fr") return fr_errors_network_title(inputs)
	if (locale === "it") return it_errors_network_title(inputs)
	if (locale === "nl") return nl_errors_network_title(inputs)
	if (locale === "pl") return pl_errors_network_title(inputs)
	if (locale === "pt") return pt_errors_network_title(inputs)
	if (locale === "ru") return ru_errors_network_title(inputs)
	if (locale === "sv") return sv_errors_network_title(inputs)
	if (locale === "tr") return tr_errors_network_title(inputs)
	if (locale === "zh") return zh_errors_network_title(inputs)
	if (locale === "ja") return ja_errors_network_title(inputs)
	return en_errors_network_title(inputs)
});
