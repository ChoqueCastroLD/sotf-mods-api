/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Saved_ToastInputs */

const en_upload_saved_toast = /** @type {(inputs: Upload_Saved_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Draft saved`)
};

const es_upload_saved_toast = /** @type {(inputs: Upload_Saved_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrador guardado`)
};

const de_upload_saved_toast = /** @type {(inputs: Upload_Saved_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwurf gespeichert`)
};

const fr_upload_saved_toast = /** @type {(inputs: Upload_Saved_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brouillon enregistré`)
};

const it_upload_saved_toast = /** @type {(inputs: Upload_Saved_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozza salvata`)
};

const nl_upload_saved_toast = /** @type {(inputs: Upload_Saved_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concept opgeslagen`)
};

const pl_upload_saved_toast = /** @type {(inputs: Upload_Saved_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szkic zapisany`)
};

const pt_upload_saved_toast = /** @type {(inputs: Upload_Saved_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rascunho salvo`)
};

const ru_upload_saved_toast = /** @type {(inputs: Upload_Saved_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Черновик сохранён`)
};

const sv_upload_saved_toast = /** @type {(inputs: Upload_Saved_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utkastet sparat`)
};

const tr_upload_saved_toast = /** @type {(inputs: Upload_Saved_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taslak kaydedildi`)
};

const zh_upload_saved_toast = /** @type {(inputs: Upload_Saved_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`草稿已保存`)
};

const ja_upload_saved_toast = /** @type {(inputs: Upload_Saved_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書きを保存しました`)
};

/**
* | output |
* | --- |
* | "Draft saved" |
*
* @param {Upload_Saved_ToastInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_saved_toast = /** @type {((inputs?: Upload_Saved_ToastInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Saved_ToastInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_saved_toast(inputs)
	if (locale === "de") return de_upload_saved_toast(inputs)
	if (locale === "fr") return fr_upload_saved_toast(inputs)
	if (locale === "it") return it_upload_saved_toast(inputs)
	if (locale === "nl") return nl_upload_saved_toast(inputs)
	if (locale === "pl") return pl_upload_saved_toast(inputs)
	if (locale === "pt") return pt_upload_saved_toast(inputs)
	if (locale === "ru") return ru_upload_saved_toast(inputs)
	if (locale === "sv") return sv_upload_saved_toast(inputs)
	if (locale === "tr") return tr_upload_saved_toast(inputs)
	if (locale === "zh") return zh_upload_saved_toast(inputs)
	if (locale === "ja") return ja_upload_saved_toast(inputs)
	return en_upload_saved_toast(inputs)
});
