/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Offline_EyebrowInputs */

const en_shell_offline_eyebrow = /** @type {(inputs: Shell_Offline_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No signal`)
};

const es_shell_offline_eyebrow = /** @type {(inputs: Shell_Offline_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin señal`)
};

const de_shell_offline_eyebrow = /** @type {(inputs: Shell_Offline_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Signal`)
};

const fr_shell_offline_eyebrow = /** @type {(inputs: Shell_Offline_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun signal`)
};

const it_shell_offline_eyebrow = /** @type {(inputs: Shell_Offline_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun segnale`)
};

const nl_shell_offline_eyebrow = /** @type {(inputs: Shell_Offline_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen signaal`)
};

const pl_shell_offline_eyebrow = /** @type {(inputs: Shell_Offline_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak sygnału`)
};

const pt_shell_offline_eyebrow = /** @type {(inputs: Shell_Offline_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem sinal`)
};

const ru_shell_offline_eyebrow = /** @type {(inputs: Shell_Offline_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет сигнала`)
};

const sv_shell_offline_eyebrow = /** @type {(inputs: Shell_Offline_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen signal`)
};

const tr_shell_offline_eyebrow = /** @type {(inputs: Shell_Offline_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinyal yok`)
};

const zh_shell_offline_eyebrow = /** @type {(inputs: Shell_Offline_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无信号`)
};

const ja_shell_offline_eyebrow = /** @type {(inputs: Shell_Offline_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`圏外`)
};

/**
* | output |
* | --- |
* | "No signal" |
*
* @param {Shell_Offline_EyebrowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_offline_eyebrow = /** @type {((inputs?: Shell_Offline_EyebrowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Offline_EyebrowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_offline_eyebrow(inputs)
	if (locale === "de") return de_shell_offline_eyebrow(inputs)
	if (locale === "fr") return fr_shell_offline_eyebrow(inputs)
	if (locale === "it") return it_shell_offline_eyebrow(inputs)
	if (locale === "nl") return nl_shell_offline_eyebrow(inputs)
	if (locale === "pl") return pl_shell_offline_eyebrow(inputs)
	if (locale === "pt") return pt_shell_offline_eyebrow(inputs)
	if (locale === "ru") return ru_shell_offline_eyebrow(inputs)
	if (locale === "sv") return sv_shell_offline_eyebrow(inputs)
	if (locale === "tr") return tr_shell_offline_eyebrow(inputs)
	if (locale === "zh") return zh_shell_offline_eyebrow(inputs)
	if (locale === "ja") return ja_shell_offline_eyebrow(inputs)
	return en_shell_offline_eyebrow(inputs)
});
