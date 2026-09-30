/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Not_Found_ReadoutInputs */

const en_errors_not_found_readout = /** @type {(inputs: Errors_Not_Found_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No signal · Off the map`)
};

const es_errors_not_found_readout = /** @type {(inputs: Errors_Not_Found_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin señal · Fuera del mapa`)
};

const de_errors_not_found_readout = /** @type {(inputs: Errors_Not_Found_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Signal · Nicht auf der Karte`)
};

const fr_errors_not_found_readout = /** @type {(inputs: Errors_Not_Found_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas de signal · Hors de la carte`)
};

const it_errors_not_found_readout = /** @type {(inputs: Errors_Not_Found_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun segnale · Fuori mappa`)
};

const nl_errors_not_found_readout = /** @type {(inputs: Errors_Not_Found_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen signaal · Buiten de kaart`)
};

const pl_errors_not_found_readout = /** @type {(inputs: Errors_Not_Found_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak sygnału · Poza mapą`)
};

const pt_errors_not_found_readout = /** @type {(inputs: Errors_Not_Found_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem sinal · Fora do mapa`)
};

const ru_errors_not_found_readout = /** @type {(inputs: Errors_Not_Found_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет сигнала · За пределами карты`)
};

const sv_errors_not_found_readout = /** @type {(inputs: Errors_Not_Found_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen signal · Utanför kartan`)
};

const tr_errors_not_found_readout = /** @type {(inputs: Errors_Not_Found_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinyal yok · Harita dışı`)
};

const zh_errors_not_found_readout = /** @type {(inputs: Errors_Not_Found_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无信号 · 地图之外`)
};

const ja_errors_not_found_readout = /** @type {(inputs: Errors_Not_Found_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`圏外 · 地図の外`)
};

/**
* | output |
* | --- |
* | "No signal · Off the map" |
*
* @param {Errors_Not_Found_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_not_found_readout = /** @type {((inputs?: Errors_Not_Found_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Not_Found_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_not_found_readout(inputs)
	if (locale === "de") return de_errors_not_found_readout(inputs)
	if (locale === "fr") return fr_errors_not_found_readout(inputs)
	if (locale === "it") return it_errors_not_found_readout(inputs)
	if (locale === "nl") return nl_errors_not_found_readout(inputs)
	if (locale === "pl") return pl_errors_not_found_readout(inputs)
	if (locale === "pt") return pt_errors_not_found_readout(inputs)
	if (locale === "ru") return ru_errors_not_found_readout(inputs)
	if (locale === "sv") return sv_errors_not_found_readout(inputs)
	if (locale === "tr") return tr_errors_not_found_readout(inputs)
	if (locale === "zh") return zh_errors_not_found_readout(inputs)
	if (locale === "ja") return ja_errors_not_found_readout(inputs)
	return en_errors_not_found_readout(inputs)
});
