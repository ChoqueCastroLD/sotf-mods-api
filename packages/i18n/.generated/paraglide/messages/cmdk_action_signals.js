/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Action_SignalsInputs */

const en_cmdk_action_signals = /** @type {(inputs: Cmdk_Action_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open Signals`)
};

const es_cmdk_action_signals = /** @type {(inputs: Cmdk_Action_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir Señales`)
};

const de_cmdk_action_signals = /** @type {(inputs: Cmdk_Action_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signale öffnen`)
};

const fr_cmdk_action_signals = /** @type {(inputs: Cmdk_Action_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir les Signaux`)
};

const it_cmdk_action_signals = /** @type {(inputs: Cmdk_Action_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri i Segnali`)
};

const nl_cmdk_action_signals = /** @type {(inputs: Cmdk_Action_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalen openen`)
};

const pl_cmdk_action_signals = /** @type {(inputs: Cmdk_Action_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz Sygnały`)
};

const pt_cmdk_action_signals = /** @type {(inputs: Cmdk_Action_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir Sinais`)
};

const ru_cmdk_action_signals = /** @type {(inputs: Cmdk_Action_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть Сигналы`)
};

const sv_cmdk_action_signals = /** @type {(inputs: Cmdk_Action_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna Signaler`)
};

const tr_cmdk_action_signals = /** @type {(inputs: Cmdk_Action_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinyalleri aç`)
};

const zh_cmdk_action_signals = /** @type {(inputs: Cmdk_Action_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开信号`)
};

const ja_cmdk_action_signals = /** @type {(inputs: Cmdk_Action_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シグナルを開く`)
};

/**
* | output |
* | --- |
* | "Open Signals" |
*
* @param {Cmdk_Action_SignalsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_action_signals = /** @type {((inputs?: Cmdk_Action_SignalsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Action_SignalsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_action_signals(inputs)
	if (locale === "de") return de_cmdk_action_signals(inputs)
	if (locale === "fr") return fr_cmdk_action_signals(inputs)
	if (locale === "it") return it_cmdk_action_signals(inputs)
	if (locale === "nl") return nl_cmdk_action_signals(inputs)
	if (locale === "pl") return pl_cmdk_action_signals(inputs)
	if (locale === "pt") return pt_cmdk_action_signals(inputs)
	if (locale === "ru") return ru_cmdk_action_signals(inputs)
	if (locale === "sv") return sv_cmdk_action_signals(inputs)
	if (locale === "tr") return tr_cmdk_action_signals(inputs)
	if (locale === "zh") return zh_cmdk_action_signals(inputs)
	if (locale === "ja") return ja_cmdk_action_signals(inputs)
	return en_cmdk_action_signals(inputs)
});
