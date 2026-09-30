/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Live_ConnectingInputs */

const en_basecamp_live_connecting = /** @type {(inputs: Basecamp_Live_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connecting…`)
};

const es_basecamp_live_connecting = /** @type {(inputs: Basecamp_Live_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conectando…`)
};

const de_basecamp_live_connecting = /** @type {(inputs: Basecamp_Live_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbinde…`)
};

const fr_basecamp_live_connecting = /** @type {(inputs: Basecamp_Live_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connexion…`)
};

const it_basecamp_live_connecting = /** @type {(inputs: Basecamp_Live_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connessione…`)
};

const nl_basecamp_live_connecting = /** @type {(inputs: Basecamp_Live_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbinden…`)
};

const pl_basecamp_live_connecting = /** @type {(inputs: Basecamp_Live_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Łączenie…`)
};

const pt_basecamp_live_connecting = /** @type {(inputs: Basecamp_Live_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conectando…`)
};

const ru_basecamp_live_connecting = /** @type {(inputs: Basecamp_Live_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подключение…`)
};

const sv_basecamp_live_connecting = /** @type {(inputs: Basecamp_Live_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ansluter…`)
};

const tr_basecamp_live_connecting = /** @type {(inputs: Basecamp_Live_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlanıyor…`)
};

const zh_basecamp_live_connecting = /** @type {(inputs: Basecamp_Live_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在连接…`)
};

const ja_basecamp_live_connecting = /** @type {(inputs: Basecamp_Live_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接続中…`)
};

/**
* | output |
* | --- |
* | "Connecting…" |
*
* @param {Basecamp_Live_ConnectingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_live_connecting = /** @type {((inputs?: Basecamp_Live_ConnectingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Live_ConnectingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_live_connecting(inputs)
	if (locale === "de") return de_basecamp_live_connecting(inputs)
	if (locale === "fr") return fr_basecamp_live_connecting(inputs)
	if (locale === "it") return it_basecamp_live_connecting(inputs)
	if (locale === "nl") return nl_basecamp_live_connecting(inputs)
	if (locale === "pl") return pl_basecamp_live_connecting(inputs)
	if (locale === "pt") return pt_basecamp_live_connecting(inputs)
	if (locale === "ru") return ru_basecamp_live_connecting(inputs)
	if (locale === "sv") return sv_basecamp_live_connecting(inputs)
	if (locale === "tr") return tr_basecamp_live_connecting(inputs)
	if (locale === "zh") return zh_basecamp_live_connecting(inputs)
	if (locale === "ja") return ja_basecamp_live_connecting(inputs)
	return en_basecamp_live_connecting(inputs)
});
