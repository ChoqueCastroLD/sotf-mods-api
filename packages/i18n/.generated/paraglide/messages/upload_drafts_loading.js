/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Drafts_LoadingInputs */

const en_upload_drafts_loading = /** @type {(inputs: Upload_Drafts_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading drafts`)
};

const es_upload_drafts_loading = /** @type {(inputs: Upload_Drafts_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando borradores`)
};

const de_upload_drafts_loading = /** @type {(inputs: Upload_Drafts_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwürfe werden geladen`)
};

const fr_upload_drafts_loading = /** @type {(inputs: Upload_Drafts_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement des brouillons`)
};

const it_upload_drafts_loading = /** @type {(inputs: Upload_Drafts_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento delle bozze`)
};

const nl_upload_drafts_loading = /** @type {(inputs: Upload_Drafts_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concepten laden`)
};

const pl_upload_drafts_loading = /** @type {(inputs: Upload_Drafts_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytywanie szkiców`)
};

const pt_upload_drafts_loading = /** @type {(inputs: Upload_Drafts_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando rascunhos`)
};

const ru_upload_drafts_loading = /** @type {(inputs: Upload_Drafts_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загружаем черновики`)
};

const sv_upload_drafts_loading = /** @type {(inputs: Upload_Drafts_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läser in utkast`)
};

const tr_upload_drafts_loading = /** @type {(inputs: Upload_Drafts_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taslaklar yükleniyor`)
};

const zh_upload_drafts_loading = /** @type {(inputs: Upload_Drafts_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载草稿`)
};

const ja_upload_drafts_loading = /** @type {(inputs: Upload_Drafts_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書きを読み込み中`)
};

/**
* | output |
* | --- |
* | "Loading drafts" |
*
* @param {Upload_Drafts_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_loading = /** @type {((inputs?: Upload_Drafts_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_loading(inputs)
	if (locale === "de") return de_upload_drafts_loading(inputs)
	if (locale === "fr") return fr_upload_drafts_loading(inputs)
	if (locale === "it") return it_upload_drafts_loading(inputs)
	if (locale === "nl") return nl_upload_drafts_loading(inputs)
	if (locale === "pl") return pl_upload_drafts_loading(inputs)
	if (locale === "pt") return pt_upload_drafts_loading(inputs)
	if (locale === "ru") return ru_upload_drafts_loading(inputs)
	if (locale === "sv") return sv_upload_drafts_loading(inputs)
	if (locale === "tr") return tr_upload_drafts_loading(inputs)
	if (locale === "zh") return zh_upload_drafts_loading(inputs)
	if (locale === "ja") return ja_upload_drafts_loading(inputs)
	return en_upload_drafts_loading(inputs)
});
