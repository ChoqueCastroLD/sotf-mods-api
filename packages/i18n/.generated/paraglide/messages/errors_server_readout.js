/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Server_ReadoutInputs */

const en_errors_server_readout = /** @type {(inputs: Errors_Server_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Campfire out · Error 500`)
};

const es_errors_server_readout = /** @type {(inputs: Errors_Server_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoguera apagada · Error 500`)
};

const de_errors_server_readout = /** @type {(inputs: Errors_Server_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lagerfeuer aus · Fehler 500`)
};

const fr_errors_server_readout = /** @type {(inputs: Errors_Server_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feu de camp éteint · Erreur 500`)
};

const it_errors_server_readout = /** @type {(inputs: Errors_Server_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fuoco spento · Errore 500`)
};

const nl_errors_server_readout = /** @type {(inputs: Errors_Server_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kampvuur uit · Fout 500`)
};

const pl_errors_server_readout = /** @type {(inputs: Errors_Server_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ognisko zgasło · Błąd 500`)
};

const pt_errors_server_readout = /** @type {(inputs: Errors_Server_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fogueira apagada · Erro 500`)
};

const ru_errors_server_readout = /** @type {(inputs: Errors_Server_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Костёр погас · Ошибка 500`)
};

const sv_errors_server_readout = /** @type {(inputs: Errors_Server_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägerelden slocknad · Fel 500`)
};

const tr_errors_server_readout = /** @type {(inputs: Errors_Server_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kamp ateşi söndü · Hata 500`)
};

const zh_errors_server_readout = /** @type {(inputs: Errors_Server_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`篝火熄灭 · 错误 500`)
};

const ja_errors_server_readout = /** @type {(inputs: Errors_Server_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`焚き火が消えた · エラー 500`)
};

/**
* | output |
* | --- |
* | "Campfire out · Error 500" |
*
* @param {Errors_Server_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_server_readout = /** @type {((inputs?: Errors_Server_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Server_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_server_readout(inputs)
	if (locale === "de") return de_errors_server_readout(inputs)
	if (locale === "fr") return fr_errors_server_readout(inputs)
	if (locale === "it") return it_errors_server_readout(inputs)
	if (locale === "nl") return nl_errors_server_readout(inputs)
	if (locale === "pl") return pl_errors_server_readout(inputs)
	if (locale === "pt") return pt_errors_server_readout(inputs)
	if (locale === "ru") return ru_errors_server_readout(inputs)
	if (locale === "sv") return sv_errors_server_readout(inputs)
	if (locale === "tr") return tr_errors_server_readout(inputs)
	if (locale === "zh") return zh_errors_server_readout(inputs)
	if (locale === "ja") return ja_errors_server_readout(inputs)
	return en_errors_server_readout(inputs)
});
