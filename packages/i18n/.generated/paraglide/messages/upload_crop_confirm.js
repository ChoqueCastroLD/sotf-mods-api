/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Crop_ConfirmInputs */

const en_upload_crop_confirm = /** @type {(inputs: Upload_Crop_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use this crop`)
};

const es_upload_crop_confirm = /** @type {(inputs: Upload_Crop_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usar este recorte`)
};

const de_upload_crop_confirm = /** @type {(inputs: Upload_Crop_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diesen Zuschnitt verwenden`)
};

const fr_upload_crop_confirm = /** @type {(inputs: Upload_Crop_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utiliser ce recadrage`)
};

const it_upload_crop_confirm = /** @type {(inputs: Upload_Crop_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa questo ritaglio`)
};

const nl_upload_crop_confirm = /** @type {(inputs: Upload_Crop_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze uitsnede gebruiken`)
};

const pl_upload_crop_confirm = /** @type {(inputs: Upload_Crop_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj tego kadru`)
};

const pt_upload_crop_confirm = /** @type {(inputs: Upload_Crop_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usar este recorte`)
};

const ru_upload_crop_confirm = /** @type {(inputs: Upload_Crop_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Использовать этот кадр`)
};

const sv_upload_crop_confirm = /** @type {(inputs: Upload_Crop_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd den här beskärningen`)
};

const tr_upload_crop_confirm = /** @type {(inputs: Upload_Crop_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kırpmayı kullan`)
};

const zh_upload_crop_confirm = /** @type {(inputs: Upload_Crop_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用此裁剪`)
};

const ja_upload_crop_confirm = /** @type {(inputs: Upload_Crop_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この範囲を使う`)
};

/**
* | output |
* | --- |
* | "Use this crop" |
*
* @param {Upload_Crop_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_crop_confirm = /** @type {((inputs?: Upload_Crop_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Crop_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_crop_confirm(inputs)
	if (locale === "de") return de_upload_crop_confirm(inputs)
	if (locale === "fr") return fr_upload_crop_confirm(inputs)
	if (locale === "it") return it_upload_crop_confirm(inputs)
	if (locale === "nl") return nl_upload_crop_confirm(inputs)
	if (locale === "pl") return pl_upload_crop_confirm(inputs)
	if (locale === "pt") return pt_upload_crop_confirm(inputs)
	if (locale === "ru") return ru_upload_crop_confirm(inputs)
	if (locale === "sv") return sv_upload_crop_confirm(inputs)
	if (locale === "tr") return tr_upload_crop_confirm(inputs)
	if (locale === "zh") return zh_upload_crop_confirm(inputs)
	if (locale === "ja") return ja_upload_crop_confirm(inputs)
	return en_upload_crop_confirm(inputs)
});
