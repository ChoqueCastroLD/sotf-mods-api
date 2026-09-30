/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Viewer_LoadingInputs */

const en_viewer_loading = /** @type {(inputs: Viewer_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading the 3D view…`)
};

const es_viewer_loading = /** @type {(inputs: Viewer_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando la vista 3D…`)
};

const de_viewer_loading = /** @type {(inputs: Viewer_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3D-Ansicht wird geladen …`)
};

const fr_viewer_loading = /** @type {(inputs: Viewer_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement de la vue 3D…`)
};

const it_viewer_loading = /** @type {(inputs: Viewer_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento della vista 3D…`)
};

const nl_viewer_loading = /** @type {(inputs: Viewer_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3D-weergave laden…`)
};

const pl_viewer_loading = /** @type {(inputs: Viewer_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytywanie widoku 3D…`)
};

const pt_viewer_loading = /** @type {(inputs: Viewer_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A carregar a vista 3D…`)
};

const ru_viewer_loading = /** @type {(inputs: Viewer_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка 3D-вида…`)
};

const sv_viewer_loading = /** @type {(inputs: Viewer_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laddar 3D-vyn …`)
};

const tr_viewer_loading = /** @type {(inputs: Viewer_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3B görünüm yükleniyor…`)
};

const zh_viewer_loading = /** @type {(inputs: Viewer_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载 3D 视图…`)
};

const ja_viewer_loading = /** @type {(inputs: Viewer_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3D ビューを読み込み中…`)
};

/**
* | output |
* | --- |
* | "Loading the 3D view…" |
*
* @param {Viewer_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const viewer_loading = /** @type {((inputs?: Viewer_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_viewer_loading(inputs)
	if (locale === "de") return de_viewer_loading(inputs)
	if (locale === "fr") return fr_viewer_loading(inputs)
	if (locale === "it") return it_viewer_loading(inputs)
	if (locale === "nl") return nl_viewer_loading(inputs)
	if (locale === "pl") return pl_viewer_loading(inputs)
	if (locale === "pt") return pt_viewer_loading(inputs)
	if (locale === "ru") return ru_viewer_loading(inputs)
	if (locale === "sv") return sv_viewer_loading(inputs)
	if (locale === "tr") return tr_viewer_loading(inputs)
	if (locale === "zh") return zh_viewer_loading(inputs)
	if (locale === "ja") return ja_viewer_loading(inputs)
	return en_viewer_loading(inputs)
});
