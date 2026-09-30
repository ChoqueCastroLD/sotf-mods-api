/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Live_ReconnectingInputs */

const en_console_live_reconnecting = /** @type {(inputs: Console_Live_ReconnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reconnecting…`)
};

const es_console_live_reconnecting = /** @type {(inputs: Console_Live_ReconnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reconectando…`)
};

const de_console_live_reconnecting = /** @type {(inputs: Console_Live_ReconnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbinde neu…`)
};

const fr_console_live_reconnecting = /** @type {(inputs: Console_Live_ReconnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reconnexion…`)
};

const it_console_live_reconnecting = /** @type {(inputs: Console_Live_ReconnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riconnessione…`)
};

const nl_console_live_reconnecting = /** @type {(inputs: Console_Live_ReconnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw verbinden…`)
};

const pl_console_live_reconnecting = /** @type {(inputs: Console_Live_ReconnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ponowne łączenie…`)
};

const pt_console_live_reconnecting = /** @type {(inputs: Console_Live_ReconnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reconectando…`)
};

const ru_console_live_reconnecting = /** @type {(inputs: Console_Live_ReconnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Переподключение…`)
};

const sv_console_live_reconnecting = /** @type {(inputs: Console_Live_ReconnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återansluter…`)
};

const tr_console_live_reconnecting = /** @type {(inputs: Console_Live_ReconnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeniden bağlanıyor…`)
};

const zh_console_live_reconnecting = /** @type {(inputs: Console_Live_ReconnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在重新连接…`)
};

const ja_console_live_reconnecting = /** @type {(inputs: Console_Live_ReconnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再接続中…`)
};

/**
* | output |
* | --- |
* | "Reconnecting…" |
*
* @param {Console_Live_ReconnectingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_live_reconnecting = /** @type {((inputs?: Console_Live_ReconnectingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Live_ReconnectingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_live_reconnecting(inputs)
	if (locale === "de") return de_console_live_reconnecting(inputs)
	if (locale === "fr") return fr_console_live_reconnecting(inputs)
	if (locale === "it") return it_console_live_reconnecting(inputs)
	if (locale === "nl") return nl_console_live_reconnecting(inputs)
	if (locale === "pl") return pl_console_live_reconnecting(inputs)
	if (locale === "pt") return pt_console_live_reconnecting(inputs)
	if (locale === "ru") return ru_console_live_reconnecting(inputs)
	if (locale === "sv") return sv_console_live_reconnecting(inputs)
	if (locale === "tr") return tr_console_live_reconnecting(inputs)
	if (locale === "zh") return zh_console_live_reconnecting(inputs)
	if (locale === "ja") return ja_console_live_reconnecting(inputs)
	return en_console_live_reconnecting(inputs)
});
