/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_LoadingInputs */

const en_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading…`)
};

const es_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando…`)
};

const de_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird geladen …`)
};

const fr_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement…`)
};

const it_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento…`)
};

const nl_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laden…`)
};

const pl_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytywanie…`)
};

const pt_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando…`)
};

const ru_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка…`)
};

const sv_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laddar…`)
};

const tr_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleniyor…`)
};

const zh_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载中…`)
};

const ja_ui_loading = /** @type {(inputs: Ui_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み込み中…`)
};

/**
* | output |
* | --- |
* | "Loading…" |
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
