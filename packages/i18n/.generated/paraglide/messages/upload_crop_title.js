/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Crop_TitleInputs */

const en_upload_crop_title = /** @type {(inputs: Upload_Crop_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crop the cover`)
};

const es_upload_crop_title = /** @type {(inputs: Upload_Crop_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recortar la portada`)
};

const de_upload_crop_title = /** @type {(inputs: Upload_Crop_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titelbild zuschneiden`)
};

const fr_upload_crop_title = /** @type {(inputs: Upload_Crop_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recadrer la couverture`)
};

const it_upload_crop_title = /** @type {(inputs: Upload_Crop_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritaglia la copertina`)
};

const nl_upload_crop_title = /** @type {(inputs: Upload_Crop_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag bijsnijden`)
};

const pl_upload_crop_title = /** @type {(inputs: Upload_Crop_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przytnij okładkę`)
};

const pt_upload_crop_title = /** @type {(inputs: Upload_Crop_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recortar a capa`)
};

const ru_upload_crop_title = /** @type {(inputs: Upload_Crop_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кадрирование обложки`)
};

const sv_upload_crop_title = /** @type {(inputs: Upload_Crop_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskär omslaget`)
};

const tr_upload_crop_title = /** @type {(inputs: Upload_Crop_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapağı kırp`)
};

const zh_upload_crop_title = /** @type {(inputs: Upload_Crop_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`裁剪封面`)
};

const ja_upload_crop_title = /** @type {(inputs: Upload_Crop_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバーを切り抜く`)
};

/**
* | output |
* | --- |
* | "Crop the cover" |
*
* @param {Upload_Crop_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_crop_title = /** @type {((inputs?: Upload_Crop_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Crop_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_crop_title(inputs)
	if (locale === "de") return de_upload_crop_title(inputs)
	if (locale === "fr") return fr_upload_crop_title(inputs)
	if (locale === "it") return it_upload_crop_title(inputs)
	if (locale === "nl") return nl_upload_crop_title(inputs)
	if (locale === "pl") return pl_upload_crop_title(inputs)
	if (locale === "pt") return pt_upload_crop_title(inputs)
	if (locale === "ru") return ru_upload_crop_title(inputs)
	if (locale === "sv") return sv_upload_crop_title(inputs)
	if (locale === "tr") return tr_upload_crop_title(inputs)
	if (locale === "zh") return zh_upload_crop_title(inputs)
	if (locale === "ja") return ja_upload_crop_title(inputs)
	return en_upload_crop_title(inputs)
});
