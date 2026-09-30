/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_LoadingInputs */

const en_settings_loading = /** @type {(inputs: Settings_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading…`)
};

const es_settings_loading = /** @type {(inputs: Settings_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando…`)
};

const de_settings_loading = /** @type {(inputs: Settings_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird geladen…`)
};

const fr_settings_loading = /** @type {(inputs: Settings_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement…`)
};

const it_settings_loading = /** @type {(inputs: Settings_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento…`)
};

const nl_settings_loading = /** @type {(inputs: Settings_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laden…`)
};

const pl_settings_loading = /** @type {(inputs: Settings_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytywanie…`)
};

const pt_settings_loading = /** @type {(inputs: Settings_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando…`)
};

const ru_settings_loading = /** @type {(inputs: Settings_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка…`)
};

const sv_settings_loading = /** @type {(inputs: Settings_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laddar…`)
};

const tr_settings_loading = /** @type {(inputs: Settings_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleniyor…`)
};

const zh_settings_loading = /** @type {(inputs: Settings_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载…`)
};

const ja_settings_loading = /** @type {(inputs: Settings_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み込み中…`)
};

/**
* | output |
* | --- |
* | "Loading…" |
*
* @param {Settings_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_loading = /** @type {((inputs?: Settings_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_loading(inputs)
	if (locale === "de") return de_settings_loading(inputs)
	if (locale === "fr") return fr_settings_loading(inputs)
	if (locale === "it") return it_settings_loading(inputs)
	if (locale === "nl") return nl_settings_loading(inputs)
	if (locale === "pl") return pl_settings_loading(inputs)
	if (locale === "pt") return pt_settings_loading(inputs)
	if (locale === "ru") return ru_settings_loading(inputs)
	if (locale === "sv") return sv_settings_loading(inputs)
	if (locale === "tr") return tr_settings_loading(inputs)
	if (locale === "zh") return zh_settings_loading(inputs)
	if (locale === "ja") return ja_settings_loading(inputs)
	return en_settings_loading(inputs)
});
