/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_LoadingInputs */

const en_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading the wizard…`)
};

const es_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando el asistente…`)
};

const de_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assistent wird geladen…`)
};

const fr_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement de l’assistant…`)
};

const it_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento della procedura…`)
};

const nl_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wizard laden…`)
};

const pl_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytywanie kreatora…`)
};

const pt_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando o assistente…`)
};

const ru_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загружаем мастер…`)
};

const sv_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läser in guiden…`)
};

const tr_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sihirbaz yükleniyor…`)
};

const zh_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载向导…`)
};

const ja_upload_loading = /** @type {(inputs: Upload_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ウィザードを読み込み中…`)
};

/**
* | output |
* | --- |
* | "Loading the wizard…" |
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
