/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ x: NonNullable<unknown>, y: NonNullable<unknown> }} Upload_Crop_PositionInputs */

const en_upload_crop_position = /** @type {(inputs: Upload_Crop_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Left ${i?.x} px, top ${i?.y} px`)
};

const es_upload_crop_position = /** @type {(inputs: Upload_Crop_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Izquierda ${i?.x} px, arriba ${i?.y} px`)
};

const de_upload_crop_position = /** @type {(inputs: Upload_Crop_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Links ${i?.x} px, oben ${i?.y} px`)
};

const fr_upload_crop_position = /** @type {(inputs: Upload_Crop_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gauche ${i?.x} px, haut ${i?.y} px`)
};

const it_upload_crop_position = /** @type {(inputs: Upload_Crop_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sinistra ${i?.x} px, alto ${i?.y} px`)
};

const nl_upload_crop_position = /** @type {(inputs: Upload_Crop_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Links ${i?.x} px, boven ${i?.y} px`)
};

const pl_upload_crop_position = /** @type {(inputs: Upload_Crop_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Od lewej ${i?.x} px, od góry ${i?.y} px`)
};

const pt_upload_crop_position = /** @type {(inputs: Upload_Crop_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Esquerda ${i?.x} px, topo ${i?.y} px`)
};

const ru_upload_crop_position = /** @type {(inputs: Upload_Crop_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Слева ${i?.x} px, сверху ${i?.y} px`)
};

const sv_upload_crop_position = /** @type {(inputs: Upload_Crop_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vänster ${i?.x} px, överkant ${i?.y} px`)
};

const tr_upload_crop_position = /** @type {(inputs: Upload_Crop_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sol ${i?.x} px, üst ${i?.y} px`)
};

const zh_upload_crop_position = /** @type {(inputs: Upload_Crop_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`左 ${i?.x} px，上 ${i?.y} px`)
};

const ja_upload_crop_position = /** @type {(inputs: Upload_Crop_PositionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`左 ${i?.x} px、上 ${i?.y} px`)
};

/**
* | output |
* | --- |
* | "Left {x} px, top {y} px" |
*
* @param {Upload_Crop_PositionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_crop_position = /** @type {((inputs: Upload_Crop_PositionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Crop_PositionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_crop_position(inputs)
	if (locale === "de") return de_upload_crop_position(inputs)
	if (locale === "fr") return fr_upload_crop_position(inputs)
	if (locale === "it") return it_upload_crop_position(inputs)
	if (locale === "nl") return nl_upload_crop_position(inputs)
	if (locale === "pl") return pl_upload_crop_position(inputs)
	if (locale === "pt") return pt_upload_crop_position(inputs)
	if (locale === "ru") return ru_upload_crop_position(inputs)
	if (locale === "sv") return sv_upload_crop_position(inputs)
	if (locale === "tr") return tr_upload_crop_position(inputs)
	if (locale === "zh") return zh_upload_crop_position(inputs)
	if (locale === "ja") return ja_upload_crop_position(inputs)
	return en_upload_crop_position(inputs)
});
