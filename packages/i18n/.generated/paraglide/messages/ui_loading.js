/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_LoadingInputs */

const en_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checking the map…`)
};

const es_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisando el mapa…`)
};

const de_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karte wird geprüft…`)
};

const fr_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`On consulte la carte…`)
};

const it_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controllo la mappa…`)
};

const nl_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De kaart wordt gecontroleerd…`)
};

const pl_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdzam mapę…`)
};

const pt_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificando o mapa…`)
};

const ru_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сверяемся с картой…`)
};

const sv_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kollar kartan…`)
};

const tr_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Harita kontrol ediliyor…`)
};

const zh_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在查看地图…`)
};

const ja_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地図を確認中…`)
};

/**
* | output |
* | --- |
* | "Checking the map…" |
*
* @param {Ui_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_loading = /** @type {((inputs?: Ui_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_loading(inputs)
	if (locale === "de") return de_ui_loading(inputs)
	if (locale === "fr") return fr_ui_loading(inputs)
	if (locale === "it") return it_ui_loading(inputs)
	if (locale === "nl") return nl_ui_loading(inputs)
	if (locale === "pl") return pl_ui_loading(inputs)
	if (locale === "pt") return pt_ui_loading(inputs)
	if (locale === "ru") return ru_ui_loading(inputs)
	if (locale === "sv") return sv_ui_loading(inputs)
	if (locale === "tr") return tr_ui_loading(inputs)
	if (locale === "zh") return zh_ui_loading(inputs)
	if (locale === "ja") return ja_ui_loading(inputs)
	return en_ui_loading(inputs)
});
