/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Image_No_PreviewInputs */

const en_upload_image_no_preview = /** @type {(inputs: Upload_Image_No_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploaded (preview on the page once processed)`)
};

const es_upload_image_no_preview = /** @type {(inputs: Upload_Image_No_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subida (vista previa en la página cuando se procese)`)
};

const de_upload_image_no_preview = /** @type {(inputs: Upload_Image_No_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hochgeladen (Vorschau auf der Seite nach der Verarbeitung)`)
};

const fr_upload_image_no_preview = /** @type {(inputs: Upload_Image_No_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyée (aperçu sur la page une fois traitée)`)
};

const it_upload_image_no_preview = /** @type {(inputs: Upload_Image_No_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricata (anteprima sulla pagina dopo l’elaborazione)`)
};

const nl_upload_image_no_preview = /** @type {(inputs: Upload_Image_No_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geüpload (voorbeeld op de pagina na verwerking)`)
};

const pl_upload_image_no_preview = /** @type {(inputs: Upload_Image_No_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wysłano (podgląd na stronie po przetworzeniu)`)
};

const pt_upload_image_no_preview = /** @type {(inputs: Upload_Image_No_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviada (prévia na página depois do processamento)`)
};

const ru_upload_image_no_preview = /** @type {(inputs: Upload_Image_No_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загружено (превью появится на странице после обработки)`)
};

const sv_upload_image_no_preview = /** @type {(inputs: Upload_Image_No_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppladdad (förhandsvisning på sidan efter bearbetning)`)
};

const tr_upload_image_no_preview = /** @type {(inputs: Upload_Image_No_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yüklendi (işlendikten sonra sayfada önizlenir)`)
};

const zh_upload_image_no_preview = /** @type {(inputs: Upload_Image_No_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已上传（处理完成后在页面上预览）`)
};

const ja_upload_image_no_preview = /** @type {(inputs: Upload_Image_No_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップロード済み（処理後にページでプレビューできます）`)
};

/**
* | output |
* | --- |
* | "Uploaded (preview on the page once processed)" |
*
* @param {Upload_Image_No_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_image_no_preview = /** @type {((inputs?: Upload_Image_No_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Image_No_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_image_no_preview(inputs)
	if (locale === "de") return de_upload_image_no_preview(inputs)
	if (locale === "fr") return fr_upload_image_no_preview(inputs)
	if (locale === "it") return it_upload_image_no_preview(inputs)
	if (locale === "nl") return nl_upload_image_no_preview(inputs)
	if (locale === "pl") return pl_upload_image_no_preview(inputs)
	if (locale === "pt") return pt_upload_image_no_preview(inputs)
	if (locale === "ru") return ru_upload_image_no_preview(inputs)
	if (locale === "sv") return sv_upload_image_no_preview(inputs)
	if (locale === "tr") return tr_upload_image_no_preview(inputs)
	if (locale === "zh") return zh_upload_image_no_preview(inputs)
	if (locale === "ja") return ja_upload_image_no_preview(inputs)
	return en_upload_image_no_preview(inputs)
});
