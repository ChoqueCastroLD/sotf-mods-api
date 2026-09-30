/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Pin_LoadingInputs */

const en_kits_pin_loading = /** @type {(inputs: Kits_Pin_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading versions…`)
};

const es_kits_pin_loading = /** @type {(inputs: Kits_Pin_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando versiones…`)
};

const de_kits_pin_loading = /** @type {(inputs: Kits_Pin_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen werden geladen …`)
};

const fr_kits_pin_loading = /** @type {(inputs: Kits_Pin_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement des versions…`)
};

const it_kits_pin_loading = /** @type {(inputs: Kits_Pin_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento delle versioni…`)
};

const nl_kits_pin_loading = /** @type {(inputs: Kits_Pin_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versies laden…`)
};

const pl_kits_pin_loading = /** @type {(inputs: Kits_Pin_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytywanie wersji…`)
};

const pt_kits_pin_loading = /** @type {(inputs: Kits_Pin_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando versões…`)
};

const ru_kits_pin_loading = /** @type {(inputs: Kits_Pin_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка версий…`)
};

const sv_kits_pin_loading = /** @type {(inputs: Kits_Pin_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laddar versioner …`)
};

const tr_kits_pin_loading = /** @type {(inputs: Kits_Pin_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürümler yükleniyor…`)
};

const zh_kits_pin_loading = /** @type {(inputs: Kits_Pin_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载版本…`)
};

const ja_kits_pin_loading = /** @type {(inputs: Kits_Pin_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンを読み込み中…`)
};

/**
* | output |
* | --- |
* | "Loading versions…" |
*
* @param {Kits_Pin_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_pin_loading = /** @type {((inputs?: Kits_Pin_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Pin_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_pin_loading(inputs)
	if (locale === "de") return de_kits_pin_loading(inputs)
	if (locale === "fr") return fr_kits_pin_loading(inputs)
	if (locale === "it") return it_kits_pin_loading(inputs)
	if (locale === "nl") return nl_kits_pin_loading(inputs)
	if (locale === "pl") return pl_kits_pin_loading(inputs)
	if (locale === "pt") return pt_kits_pin_loading(inputs)
	if (locale === "ru") return ru_kits_pin_loading(inputs)
	if (locale === "sv") return sv_kits_pin_loading(inputs)
	if (locale === "tr") return tr_kits_pin_loading(inputs)
	if (locale === "zh") return zh_kits_pin_loading(inputs)
	if (locale === "ja") return ja_kits_pin_loading(inputs)
	return en_kits_pin_loading(inputs)
});
