/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Kind_ServerInputs */

const en_logs_kind_server = /** @type {(inputs: Logs_Kind_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedicated server`)
};

const es_logs_kind_server = /** @type {(inputs: Logs_Kind_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor dedicado`)
};

const de_logs_kind_server = /** @type {(inputs: Logs_Kind_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedizierter Server`)
};

const fr_logs_kind_server = /** @type {(inputs: Logs_Kind_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serveur dédié`)
};

const it_logs_kind_server = /** @type {(inputs: Logs_Kind_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server dedicato`)
};

const nl_logs_kind_server = /** @type {(inputs: Logs_Kind_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedicated server`)
};

const pl_logs_kind_server = /** @type {(inputs: Logs_Kind_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serwer dedykowany`)
};

const pt_logs_kind_server = /** @type {(inputs: Logs_Kind_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor dedicado`)
};

const ru_logs_kind_server = /** @type {(inputs: Logs_Kind_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выделенный сервер`)
};

const sv_logs_kind_server = /** @type {(inputs: Logs_Kind_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedikerad server`)
};

const tr_logs_kind_server = /** @type {(inputs: Logs_Kind_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özel sunucu`)
};

const zh_logs_kind_server = /** @type {(inputs: Logs_Kind_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`专用服务器`)
};

const ja_logs_kind_server = /** @type {(inputs: Logs_Kind_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`専用サーバー`)
};

/**
* | output |
* | --- |
* | "Dedicated server" |
*
* @param {Logs_Kind_ServerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_kind_server = /** @type {((inputs?: Logs_Kind_ServerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Kind_ServerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_kind_server(inputs)
	if (locale === "de") return de_logs_kind_server(inputs)
	if (locale === "fr") return fr_logs_kind_server(inputs)
	if (locale === "it") return it_logs_kind_server(inputs)
	if (locale === "nl") return nl_logs_kind_server(inputs)
	if (locale === "pl") return pl_logs_kind_server(inputs)
	if (locale === "pt") return pt_logs_kind_server(inputs)
	if (locale === "ru") return ru_logs_kind_server(inputs)
	if (locale === "sv") return sv_logs_kind_server(inputs)
	if (locale === "tr") return tr_logs_kind_server(inputs)
	if (locale === "zh") return zh_logs_kind_server(inputs)
	if (locale === "ja") return ja_logs_kind_server(inputs)
	return en_logs_kind_server(inputs)
});
