/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Network_TitleInputs */

const en_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No connection`)
};

const es_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin conexión`)
};

const de_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Verbindung`)
};

const fr_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas de connexion`)
};

const it_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna connessione`)
};

const nl_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen verbinding`)
};

const pl_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak połączenia`)
};

const pt_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem conexão`)
};

const ru_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет соединения`)
};

const sv_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen anslutning`)
};

const tr_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantı yok`)
};

const zh_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无网络连接`)
};

const ja_errors_network_title = /** @type {(inputs: Errors_Network_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接続できません`)
};

/**
* | output |
* | --- |
* | "No connection" |
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
