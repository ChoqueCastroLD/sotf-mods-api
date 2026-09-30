/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ width: NonNullable<unknown>, height: NonNullable<unknown> }} Upload_Crop_OutputInputs */

const en_upload_crop_output = /** @type {(inputs: Upload_Crop_OutputInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Output ${i?.width} × ${i?.height}`)
};

const es_upload_crop_output = /** @type {(inputs: Upload_Crop_OutputInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Salida ${i?.width} × ${i?.height}`)
};

const de_upload_crop_output = /** @type {(inputs: Upload_Crop_OutputInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ausgabe ${i?.width} × ${i?.height}`)
};

const fr_upload_crop_output = /** @type {(inputs: Upload_Crop_OutputInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sortie ${i?.width} × ${i?.height}`)
};

const it_upload_crop_output = /** @type {(inputs: Upload_Crop_OutputInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Risultato ${i?.width} × ${i?.height}`)
};

const nl_upload_crop_output = /** @type {(inputs: Upload_Crop_OutputInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resultaat ${i?.width} × ${i?.height}`)
};

const pl_upload_crop_output = /** @type {(inputs: Upload_Crop_OutputInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wynik ${i?.width} × ${i?.height}`)
};

const pt_upload_crop_output = /** @type {(inputs: Upload_Crop_OutputInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resultado ${i?.width} × ${i?.height}`)
};

const ru_upload_crop_output = /** @type {(inputs: Upload_Crop_OutputInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Итог ${i?.width} × ${i?.height}`)
};

const sv_upload_crop_output = /** @type {(inputs: Upload_Crop_OutputInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resultat ${i?.width} × ${i?.height}`)
};

const tr_upload_crop_output = /** @type {(inputs: Upload_Crop_OutputInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Çıktı ${i?.width} × ${i?.height}`)
};

const zh_upload_crop_output = /** @type {(inputs: Upload_Crop_OutputInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`输出 ${i?.width} × ${i?.height}`)
};

const ja_upload_crop_output = /** @type {(inputs: Upload_Crop_OutputInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`出力 ${i?.width} × ${i?.height}`)
};

/**
* | output |
* | --- |
* | "Output {width} × {height}" |
*
* @param {Upload_Crop_OutputInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_crop_output = /** @type {((inputs: Upload_Crop_OutputInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Crop_OutputInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_crop_output(inputs)
	if (locale === "de") return de_upload_crop_output(inputs)
	if (locale === "fr") return fr_upload_crop_output(inputs)
	if (locale === "it") return it_upload_crop_output(inputs)
	if (locale === "nl") return nl_upload_crop_output(inputs)
	if (locale === "pl") return pl_upload_crop_output(inputs)
	if (locale === "pt") return pt_upload_crop_output(inputs)
	if (locale === "ru") return ru_upload_crop_output(inputs)
	if (locale === "sv") return sv_upload_crop_output(inputs)
	if (locale === "tr") return tr_upload_crop_output(inputs)
	if (locale === "zh") return zh_upload_crop_output(inputs)
	if (locale === "ja") return ja_upload_crop_output(inputs)
	return en_upload_crop_output(inputs)
});
