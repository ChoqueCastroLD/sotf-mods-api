/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Not_ConnectedInputs */

const en_oauth_not_connected = /** @type {(inputs: Oauth_Not_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not connected`)
};

const es_oauth_not_connected = /** @type {(inputs: Oauth_Not_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin conectar`)
};

const de_oauth_not_connected = /** @type {(inputs: Oauth_Not_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht verbunden`)
};

const fr_oauth_not_connected = /** @type {(inputs: Oauth_Not_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non connecté`)
};

const it_oauth_not_connected = /** @type {(inputs: Oauth_Not_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non collegato`)
};

const nl_oauth_not_connected = /** @type {(inputs: Oauth_Not_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet gekoppeld`)
};

const pl_oauth_not_connected = /** @type {(inputs: Oauth_Not_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niepołączono`)
};

const pt_oauth_not_connected = /** @type {(inputs: Oauth_Not_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não conectado`)
};

const ru_oauth_not_connected = /** @type {(inputs: Oauth_Not_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не подключён`)
};

const sv_oauth_not_connected = /** @type {(inputs: Oauth_Not_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte ansluten`)
};

const tr_oauth_not_connected = /** @type {(inputs: Oauth_Not_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlı değil`)
};

const zh_oauth_not_connected = /** @type {(inputs: Oauth_Not_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未关联`)
};

const ja_oauth_not_connected = /** @type {(inputs: Oauth_Not_ConnectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未連携`)
};

/**
* | output |
* | --- |
* | "Not connected" |
*
* @param {Oauth_Not_ConnectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_not_connected = /** @type {((inputs?: Oauth_Not_ConnectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Not_ConnectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_not_connected(inputs)
	if (locale === "de") return de_oauth_not_connected(inputs)
	if (locale === "fr") return fr_oauth_not_connected(inputs)
	if (locale === "it") return it_oauth_not_connected(inputs)
	if (locale === "nl") return nl_oauth_not_connected(inputs)
	if (locale === "pl") return pl_oauth_not_connected(inputs)
	if (locale === "pt") return pt_oauth_not_connected(inputs)
	if (locale === "ru") return ru_oauth_not_connected(inputs)
	if (locale === "sv") return sv_oauth_not_connected(inputs)
	if (locale === "tr") return tr_oauth_not_connected(inputs)
	if (locale === "zh") return zh_oauth_not_connected(inputs)
	if (locale === "ja") return ja_oauth_not_connected(inputs)
	return en_oauth_not_connected(inputs)
});
