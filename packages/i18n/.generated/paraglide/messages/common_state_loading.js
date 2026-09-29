/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_State_LoadingInputs */

const en_common_state_loading = /** @type {(inputs: Common_State_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checking the map…`)
};

const es_common_state_loading = /** @type {(inputs: Common_State_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisando el mapa…`)
};

const de_common_state_loading = /** @type {(inputs: Common_State_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karte wird geprüft …`)
};

const fr_common_state_loading = /** @type {(inputs: Common_State_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consultation de la carte…`)
};

const it_common_state_loading = /** @type {(inputs: Common_State_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consulto la mappa…`)
};

const nl_common_state_loading = /** @type {(inputs: Common_State_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De kaart bekijken…`)
};

const pl_common_state_loading = /** @type {(inputs: Common_State_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdzam mapę…`)
};

const pt_common_state_loading = /** @type {(inputs: Common_State_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conferindo o mapa…`)
};

const ru_common_state_loading = /** @type {(inputs: Common_State_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сверяемся с картой…`)
};

const sv_common_state_loading = /** @type {(inputs: Common_State_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kollar kartan…`)
};

const tr_common_state_loading = /** @type {(inputs: Common_State_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Harita kontrol ediliyor…`)
};

const zh_common_state_loading = /** @type {(inputs: Common_State_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在查看地图…`)
};

const ja_common_state_loading = /** @type {(inputs: Common_State_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地図を確認しています…`)
};

/**
* | output |
* | --- |
* | "Checking the map…" |
*
* @param {Common_State_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_state_loading = /** @type {((inputs?: Common_State_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_State_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_state_loading(inputs)
	if (locale === "de") return de_common_state_loading(inputs)
	if (locale === "fr") return fr_common_state_loading(inputs)
	if (locale === "it") return it_common_state_loading(inputs)
	if (locale === "nl") return nl_common_state_loading(inputs)
	if (locale === "pl") return pl_common_state_loading(inputs)
	if (locale === "pt") return pt_common_state_loading(inputs)
	if (locale === "ru") return ru_common_state_loading(inputs)
	if (locale === "sv") return sv_common_state_loading(inputs)
	if (locale === "tr") return tr_common_state_loading(inputs)
	if (locale === "zh") return zh_common_state_loading(inputs)
	if (locale === "ja") return ja_common_state_loading(inputs)
	return en_common_state_loading(inputs)
});
