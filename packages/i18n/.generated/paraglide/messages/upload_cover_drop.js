/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Cover_DropInputs */

const en_upload_cover_drop = /** @type {(inputs: Upload_Cover_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drop a cover image here`)
};

const es_upload_cover_drop = /** @type {(inputs: Upload_Cover_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suelta aquí una imagen de portada`)
};

const de_upload_cover_drop = /** @type {(inputs: Upload_Cover_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zieh ein Titelbild hierher`)
};

const fr_upload_cover_drop = /** @type {(inputs: Upload_Cover_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déposez une image de couverture ici`)
};

const it_upload_cover_drop = /** @type {(inputs: Upload_Cover_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascina qui un’immagine di copertina`)
};

const nl_upload_cover_drop = /** @type {(inputs: Upload_Cover_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleep een omslagafbeelding hierheen`)
};

const pl_upload_cover_drop = /** @type {(inputs: Upload_Cover_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upuść tutaj obraz okładki`)
};

const pt_upload_cover_drop = /** @type {(inputs: Upload_Cover_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solte aqui uma imagem de capa`)
};

const ru_upload_cover_drop = /** @type {(inputs: Upload_Cover_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перетащите сюда картинку для обложки`)
};

const sv_upload_cover_drop = /** @type {(inputs: Upload_Cover_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släpp en omslagsbild här`)
};

const tr_upload_cover_drop = /** @type {(inputs: Upload_Cover_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapak görselini buraya bırak`)
};

const zh_upload_cover_drop = /** @type {(inputs: Upload_Cover_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把封面图片拖到这里`)
};

const ja_upload_cover_drop = /** @type {(inputs: Upload_Cover_DropInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ここにカバー画像をドロップ`)
};

/**
* | output |
* | --- |
* | "Drop a cover image here" |
*
* @param {Upload_Cover_DropInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_cover_drop = /** @type {((inputs?: Upload_Cover_DropInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Cover_DropInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_cover_drop(inputs)
	if (locale === "de") return de_upload_cover_drop(inputs)
	if (locale === "fr") return fr_upload_cover_drop(inputs)
	if (locale === "it") return it_upload_cover_drop(inputs)
	if (locale === "nl") return nl_upload_cover_drop(inputs)
	if (locale === "pl") return pl_upload_cover_drop(inputs)
	if (locale === "pt") return pt_upload_cover_drop(inputs)
	if (locale === "ru") return ru_upload_cover_drop(inputs)
	if (locale === "sv") return sv_upload_cover_drop(inputs)
	if (locale === "tr") return tr_upload_cover_drop(inputs)
	if (locale === "zh") return zh_upload_cover_drop(inputs)
	if (locale === "ja") return ja_upload_cover_drop(inputs)
	return en_upload_cover_drop(inputs)
});
