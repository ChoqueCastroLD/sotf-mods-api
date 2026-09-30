/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_LoadingInputs */

const en_jams_loading = /** @type {(inputs: Jams_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading…`)
};

const es_jams_loading = /** @type {(inputs: Jams_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando…`)
};

const de_jams_loading = /** @type {(inputs: Jams_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird geladen …`)
};

const fr_jams_loading = /** @type {(inputs: Jams_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement…`)
};

const it_jams_loading = /** @type {(inputs: Jams_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento…`)
};

const nl_jams_loading = /** @type {(inputs: Jams_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laden…`)
};

const pl_jams_loading = /** @type {(inputs: Jams_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ładowanie…`)
};

const pt_jams_loading = /** @type {(inputs: Jams_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando…`)
};

const ru_jams_loading = /** @type {(inputs: Jams_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка…`)
};

const sv_jams_loading = /** @type {(inputs: Jams_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laddar …`)
};

const tr_jams_loading = /** @type {(inputs: Jams_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleniyor…`)
};

const zh_jams_loading = /** @type {(inputs: Jams_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载中…`)
};

const ja_jams_loading = /** @type {(inputs: Jams_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み込み中…`)
};

/**
* | output |
* | --- |
* | "Loading…" |
*
* @param {Jams_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_loading = /** @type {((inputs?: Jams_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_loading(inputs)
	if (locale === "de") return de_jams_loading(inputs)
	if (locale === "fr") return fr_jams_loading(inputs)
	if (locale === "it") return it_jams_loading(inputs)
	if (locale === "nl") return nl_jams_loading(inputs)
	if (locale === "pl") return pl_jams_loading(inputs)
	if (locale === "pt") return pt_jams_loading(inputs)
	if (locale === "ru") return ru_jams_loading(inputs)
	if (locale === "sv") return sv_jams_loading(inputs)
	if (locale === "tr") return tr_jams_loading(inputs)
	if (locale === "zh") return zh_jams_loading(inputs)
	if (locale === "ja") return ja_jams_loading(inputs)
	return en_jams_loading(inputs)
});
