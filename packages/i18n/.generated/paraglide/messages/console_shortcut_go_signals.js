/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Shortcut_Go_SignalsInputs */

const en_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go to Signals`)
};

const es_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir a Señales`)
};

const de_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu den Signalen`)
};

const fr_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aller aux signaux`)
};

const it_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vai ai segnali`)
};

const nl_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naar Signalen`)
};

const pl_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdź do sygnałów`)
};

const pt_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir para Sinais`)
};

const ru_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перейти к сигналам`)
};

const sv_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gå till Signaler`)
};

const tr_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinyallere git`)
};

const zh_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前往信号`)
};

const ja_console_shortcut_go_signals = /** @type {(inputs: Console_Shortcut_Go_SignalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シグナルへ移動`)
};

/**
* | output |
* | --- |
* | "Go to Signals" |
*
* @param {Console_Shortcut_Go_SignalsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_shortcut_go_signals = /** @type {((inputs?: Console_Shortcut_Go_SignalsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Shortcut_Go_SignalsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_shortcut_go_signals(inputs)
	if (locale === "de") return de_console_shortcut_go_signals(inputs)
	if (locale === "fr") return fr_console_shortcut_go_signals(inputs)
	if (locale === "it") return it_console_shortcut_go_signals(inputs)
	if (locale === "nl") return nl_console_shortcut_go_signals(inputs)
	if (locale === "pl") return pl_console_shortcut_go_signals(inputs)
	if (locale === "pt") return pt_console_shortcut_go_signals(inputs)
	if (locale === "ru") return ru_console_shortcut_go_signals(inputs)
	if (locale === "sv") return sv_console_shortcut_go_signals(inputs)
	if (locale === "tr") return tr_console_shortcut_go_signals(inputs)
	if (locale === "zh") return zh_console_shortcut_go_signals(inputs)
	if (locale === "ja") return ja_console_shortcut_go_signals(inputs)
	return en_console_shortcut_go_signals(inputs)
});
