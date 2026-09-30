/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Crop_SizeInputs */

const en_upload_crop_size = /** @type {(inputs: Upload_Crop_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frame size`)
};

const es_upload_crop_size = /** @type {(inputs: Upload_Crop_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamaño del marco`)
};

const de_upload_crop_size = /** @type {(inputs: Upload_Crop_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rahmengröße`)
};

const fr_upload_crop_size = /** @type {(inputs: Upload_Crop_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taille du cadre`)
};

const it_upload_crop_size = /** @type {(inputs: Upload_Crop_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dimensione della cornice`)
};

const nl_upload_crop_size = /** @type {(inputs: Upload_Crop_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grootte van het kader`)
};

const pl_upload_crop_size = /** @type {(inputs: Upload_Crop_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozmiar ramki`)
};

const pt_upload_crop_size = /** @type {(inputs: Upload_Crop_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamanho do quadro`)
};

const ru_upload_crop_size = /** @type {(inputs: Upload_Crop_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Размер рамки`)
};

const sv_upload_crop_size = /** @type {(inputs: Upload_Crop_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ramens storlek`)
};

const tr_upload_crop_size = /** @type {(inputs: Upload_Crop_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çerçeve boyutu`)
};

const zh_upload_crop_size = /** @type {(inputs: Upload_Crop_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`裁剪框大小`)
};

const ja_upload_crop_size = /** @type {(inputs: Upload_Crop_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`枠のサイズ`)
};

/**
* | output |
* | --- |
* | "Frame size" |
*
* @param {Upload_Crop_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_crop_size = /** @type {((inputs?: Upload_Crop_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Crop_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_crop_size(inputs)
	if (locale === "de") return de_upload_crop_size(inputs)
	if (locale === "fr") return fr_upload_crop_size(inputs)
	if (locale === "it") return it_upload_crop_size(inputs)
	if (locale === "nl") return nl_upload_crop_size(inputs)
	if (locale === "pl") return pl_upload_crop_size(inputs)
	if (locale === "pt") return pt_upload_crop_size(inputs)
	if (locale === "ru") return ru_upload_crop_size(inputs)
	if (locale === "sv") return sv_upload_crop_size(inputs)
	if (locale === "tr") return tr_upload_crop_size(inputs)
	if (locale === "zh") return zh_upload_crop_size(inputs)
	if (locale === "ja") return ja_upload_crop_size(inputs)
	return en_upload_crop_size(inputs)
});
