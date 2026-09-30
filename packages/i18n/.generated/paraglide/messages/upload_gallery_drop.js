/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Gallery_DropInputs */

const en_upload_gallery_drop = /** @type {(inputs: Upload_Gallery_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drop screenshots here`)
};

const es_upload_gallery_drop = /** @type {(inputs: Upload_Gallery_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suelta aquí las capturas`)
};

const de_upload_gallery_drop = /** @type {(inputs: Upload_Gallery_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zieh Screenshots hierher`)
};

const fr_upload_gallery_drop = /** @type {(inputs: Upload_Gallery_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déposez des captures ici`)
};

const it_upload_gallery_drop = /** @type {(inputs: Upload_Gallery_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascina qui gli screenshot`)
};

const nl_upload_gallery_drop = /** @type {(inputs: Upload_Gallery_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleep screenshots hierheen`)
};

const pl_upload_gallery_drop = /** @type {(inputs: Upload_Gallery_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upuść tutaj zrzuty ekranu`)
};

const pt_upload_gallery_drop = /** @type {(inputs: Upload_Gallery_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solte as capturas aqui`)
};

const ru_upload_gallery_drop = /** @type {(inputs: Upload_Gallery_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перетащите сюда скриншоты`)
};

const sv_upload_gallery_drop = /** @type {(inputs: Upload_Gallery_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släpp skärmbilder här`)
};

const tr_upload_gallery_drop = /** @type {(inputs: Upload_Gallery_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekran görüntülerini buraya bırak`)
};

const zh_upload_gallery_drop = /** @type {(inputs: Upload_Gallery_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把截图拖到这里`)
};

const ja_upload_gallery_drop = /** @type {(inputs: Upload_Gallery_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ここにスクリーンショットをドロップ`)
};

/**
* | output |
* | --- |
* | "Drop screenshots here" |
*
* @param {Upload_Gallery_DropInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_drop = /** @type {((inputs?: Upload_Gallery_DropInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_DropInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_drop(inputs)
	if (locale === "de") return de_upload_gallery_drop(inputs)
	if (locale === "fr") return fr_upload_gallery_drop(inputs)
	if (locale === "it") return it_upload_gallery_drop(inputs)
	if (locale === "nl") return nl_upload_gallery_drop(inputs)
	if (locale === "pl") return pl_upload_gallery_drop(inputs)
	if (locale === "pt") return pt_upload_gallery_drop(inputs)
	if (locale === "ru") return ru_upload_gallery_drop(inputs)
	if (locale === "sv") return sv_upload_gallery_drop(inputs)
	if (locale === "tr") return tr_upload_gallery_drop(inputs)
	if (locale === "zh") return zh_upload_gallery_drop(inputs)
	if (locale === "ja") return ja_upload_gallery_drop(inputs)
	return en_upload_gallery_drop(inputs)
});
