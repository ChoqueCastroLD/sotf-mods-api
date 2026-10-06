/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_LoadingInputs */

const en_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading…`)
};

const es_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando…`)
};

const de_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird geladen…`)
};

const fr_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement…`)
};

const it_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento…`)
};

const nl_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laden…`)
};

const pl_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytywanie…`)
};

const pt_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando…`)
};

const ru_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка…`)
};

const sv_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läser in…`)
};

const tr_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükleniyor…`)
};

const zh_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载…`)
};

const ja_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み込み中…`)
};

/**
* | output |
* | --- |
* | "Loading…" |
*
* @param {Upload_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_loading = /** @type {((inputs?: Upload_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_loading(inputs)
	if (locale === "de") return de_upload_loading(inputs)
	if (locale === "fr") return fr_upload_loading(inputs)
	if (locale === "it") return it_upload_loading(inputs)
	if (locale === "nl") return nl_upload_loading(inputs)
	if (locale === "pl") return pl_upload_loading(inputs)
	if (locale === "pt") return pt_upload_loading(inputs)
	if (locale === "ru") return ru_upload_loading(inputs)
	if (locale === "sv") return sv_upload_loading(inputs)
	if (locale === "tr") return tr_upload_loading(inputs)
	if (locale === "zh") return zh_upload_loading(inputs)
	if (locale === "ja") return ja_upload_loading(inputs)
	return en_upload_loading(inputs)
});
