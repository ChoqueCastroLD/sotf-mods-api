/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_LoadingInputs */

const en_cmdk_loading = /** @type {(inputs: Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unfolding the map…`)
};

const es_cmdk_loading = /** @type {(inputs: Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desplegando el mapa…`)
};

const de_cmdk_loading = /** @type {(inputs: Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karte wird ausgebreitet…`)
};

const fr_cmdk_loading = /** @type {(inputs: Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dépliage de la carte…`)
};

const it_cmdk_loading = /** @type {(inputs: Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stiamo aprendo la mappa…`)
};

const nl_cmdk_loading = /** @type {(inputs: Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De kaart wordt uitgevouwen…`)
};

const pl_cmdk_loading = /** @type {(inputs: Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozkładamy mapę…`)
};

const pt_cmdk_loading = /** @type {(inputs: Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrindo o mapa…`)
};

const ru_cmdk_loading = /** @type {(inputs: Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разворачиваем карту…`)
};

const sv_cmdk_loading = /** @type {(inputs: Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vecklar ut kartan…`)
};

const tr_cmdk_loading = /** @type {(inputs: Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Harita açılıyor…`)
};

const zh_cmdk_loading = /** @type {(inputs: Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在展开地图…`)
};

const ja_cmdk_loading = /** @type {(inputs: Cmdk_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地図を広げています…`)
};

/**
* | output |
* | --- |
* | "Unfolding the map…" |
*
* @param {Cmdk_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_loading = /** @type {((inputs?: Cmdk_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_loading(inputs)
	if (locale === "de") return de_cmdk_loading(inputs)
	if (locale === "fr") return fr_cmdk_loading(inputs)
	if (locale === "it") return it_cmdk_loading(inputs)
	if (locale === "nl") return nl_cmdk_loading(inputs)
	if (locale === "pl") return pl_cmdk_loading(inputs)
	if (locale === "pt") return pt_cmdk_loading(inputs)
	if (locale === "ru") return ru_cmdk_loading(inputs)
	if (locale === "sv") return sv_cmdk_loading(inputs)
	if (locale === "tr") return tr_cmdk_loading(inputs)
	if (locale === "zh") return zh_cmdk_loading(inputs)
	if (locale === "ja") return ja_cmdk_loading(inputs)
	return en_cmdk_loading(inputs)
});
