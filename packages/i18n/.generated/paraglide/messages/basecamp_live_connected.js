/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Live_ConnectedInputs */

const en_basecamp_live_connected = /** @type {(inputs: Basecamp_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const es_basecamp_live_connected = /** @type {(inputs: Basecamp_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En vivo`)
};

const de_basecamp_live_connected = /** @type {(inputs: Basecamp_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const fr_basecamp_live_connected = /** @type {(inputs: Basecamp_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En direct`)
};

const it_basecamp_live_connected = /** @type {(inputs: Basecamp_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In diretta`)
};

const nl_basecamp_live_connected = /** @type {(inputs: Basecamp_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const pl_basecamp_live_connected = /** @type {(inputs: Basecamp_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na żywo`)
};

const pt_basecamp_live_connected = /** @type {(inputs: Basecamp_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ao vivo`)
};

const ru_basecamp_live_connected = /** @type {(inputs: Basecamp_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В эфире`)
};

const sv_basecamp_live_connected = /** @type {(inputs: Basecamp_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const tr_basecamp_live_connected = /** @type {(inputs: Basecamp_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canlı`)
};

const zh_basecamp_live_connected = /** @type {(inputs: Basecamp_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实时`)
};

const ja_basecamp_live_connected = /** @type {(inputs: Basecamp_Live_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライブ`)
};

/**
* | output |
* | --- |
* | "Live" |
*
* @param {Basecamp_Live_ConnectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_live_connected = /** @type {((inputs?: Basecamp_Live_ConnectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Live_ConnectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_live_connected(inputs)
	if (locale === "de") return de_basecamp_live_connected(inputs)
	if (locale === "fr") return fr_basecamp_live_connected(inputs)
	if (locale === "it") return it_basecamp_live_connected(inputs)
	if (locale === "nl") return nl_basecamp_live_connected(inputs)
	if (locale === "pl") return pl_basecamp_live_connected(inputs)
	if (locale === "pt") return pt_basecamp_live_connected(inputs)
	if (locale === "ru") return ru_basecamp_live_connected(inputs)
	if (locale === "sv") return sv_basecamp_live_connected(inputs)
	if (locale === "tr") return tr_basecamp_live_connected(inputs)
	if (locale === "zh") return zh_basecamp_live_connected(inputs)
	if (locale === "ja") return ja_basecamp_live_connected(inputs)
	return en_basecamp_live_connected(inputs)
});
