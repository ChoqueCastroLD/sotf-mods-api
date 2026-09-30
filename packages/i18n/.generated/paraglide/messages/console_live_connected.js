/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Live_ConnectedInputs */

const en_console_live_connected = /** @type {(inputs: Console_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const es_console_live_connected = /** @type {(inputs: Console_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En vivo`)
};

const de_console_live_connected = /** @type {(inputs: Console_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const fr_console_live_connected = /** @type {(inputs: Console_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En direct`)
};

const it_console_live_connected = /** @type {(inputs: Console_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In diretta`)
};

const nl_console_live_connected = /** @type {(inputs: Console_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const pl_console_live_connected = /** @type {(inputs: Console_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na żywo`)
};

const pt_console_live_connected = /** @type {(inputs: Console_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ao vivo`)
};

const ru_console_live_connected = /** @type {(inputs: Console_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В эфире`)
};

const sv_console_live_connected = /** @type {(inputs: Console_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const tr_console_live_connected = /** @type {(inputs: Console_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canlı`)
};

const zh_console_live_connected = /** @type {(inputs: Console_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实时`)
};

const ja_console_live_connected = /** @type {(inputs: Console_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライブ`)
};

/**
* | output |
* | --- |
* | "Live" |
*
* @param {Console_Live_ConnectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_live_connected = /** @type {((inputs?: Console_Live_ConnectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Live_ConnectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_live_connected(inputs)
	if (locale === "de") return de_console_live_connected(inputs)
	if (locale === "fr") return fr_console_live_connected(inputs)
	if (locale === "it") return it_console_live_connected(inputs)
	if (locale === "nl") return nl_console_live_connected(inputs)
	if (locale === "pl") return pl_console_live_connected(inputs)
	if (locale === "pt") return pt_console_live_connected(inputs)
	if (locale === "ru") return ru_console_live_connected(inputs)
	if (locale === "sv") return sv_console_live_connected(inputs)
	if (locale === "tr") return tr_console_live_connected(inputs)
	if (locale === "zh") return zh_console_live_connected(inputs)
	if (locale === "ja") return ja_console_live_connected(inputs)
	return en_console_live_connected(inputs)
});
