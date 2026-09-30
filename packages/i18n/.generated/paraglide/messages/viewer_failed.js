/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Viewer_FailedInputs */

const en_viewer_failed = /** @type {(inputs: Viewer_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The 3D view could not be loaded.`)
};

const es_viewer_failed = /** @type {(inputs: Viewer_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo cargar la vista 3D.`)
};

const de_viewer_failed = /** @type {(inputs: Viewer_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die 3D-Ansicht konnte nicht geladen werden.`)
};

const fr_viewer_failed = /** @type {(inputs: Viewer_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La vue 3D n'a pas pu être chargée.`)
};

const it_viewer_failed = /** @type {(inputs: Viewer_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare la vista 3D.`)
};

const nl_viewer_failed = /** @type {(inputs: Viewer_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De 3D-weergave kon niet worden geladen.`)
};

const pl_viewer_failed = /** @type {(inputs: Viewer_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać widoku 3D.`)
};

const pt_viewer_failed = /** @type {(inputs: Viewer_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar a vista 3D.`)
};

const ru_viewer_failed = /** @type {(inputs: Viewer_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить 3D-вид.`)
};

const sv_viewer_failed = /** @type {(inputs: Viewer_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3D-vyn kunde inte laddas.`)
};

const tr_viewer_failed = /** @type {(inputs: Viewer_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3B görünüm yüklenemedi.`)
};

const zh_viewer_failed = /** @type {(inputs: Viewer_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载 3D 视图。`)
};

const ja_viewer_failed = /** @type {(inputs: Viewer_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3D ビューを読み込めませんでした。`)
};

/**
* | output |
* | --- |
* | "The 3D view could not be loaded." |
*
* @param {Viewer_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const viewer_failed = /** @type {((inputs?: Viewer_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_viewer_failed(inputs)
	if (locale === "de") return de_viewer_failed(inputs)
	if (locale === "fr") return fr_viewer_failed(inputs)
	if (locale === "it") return it_viewer_failed(inputs)
	if (locale === "nl") return nl_viewer_failed(inputs)
	if (locale === "pl") return pl_viewer_failed(inputs)
	if (locale === "pt") return pt_viewer_failed(inputs)
	if (locale === "ru") return ru_viewer_failed(inputs)
	if (locale === "sv") return sv_viewer_failed(inputs)
	if (locale === "tr") return tr_viewer_failed(inputs)
	if (locale === "zh") return zh_viewer_failed(inputs)
	if (locale === "ja") return ja_viewer_failed(inputs)
	return en_viewer_failed(inputs)
});
