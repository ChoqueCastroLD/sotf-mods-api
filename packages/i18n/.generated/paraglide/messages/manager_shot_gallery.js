/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Shot_GalleryInputs */

const en_manager_shot_gallery = /** @type {(inputs: Manager_Shot_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod details with pictures`)
};

const es_manager_shot_gallery = /** @type {(inputs: Manager_Shot_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalles de un mod con imágenes`)
};

const de_manager_shot_gallery = /** @type {(inputs: Manager_Shot_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Details mit Bildern`)
};

const fr_manager_shot_gallery = /** @type {(inputs: Manager_Shot_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Détails d’un mod avec images`)
};

const it_manager_shot_gallery = /** @type {(inputs: Manager_Shot_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dettagli di una mod con immagini`)
};

const nl_manager_shot_gallery = /** @type {(inputs: Manager_Shot_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddetails met afbeeldingen`)
};

const pl_manager_shot_gallery = /** @type {(inputs: Manager_Shot_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szczegóły moda z obrazkami`)
};

const pt_manager_shot_gallery = /** @type {(inputs: Manager_Shot_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalhes de um mod com imagens`)
};

const ru_manager_shot_gallery = /** @type {(inputs: Manager_Shot_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подробности мода с картинками`)
};

const sv_manager_shot_gallery = /** @type {(inputs: Manager_Shot_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddinformation med bilder`)
};

const tr_manager_shot_gallery = /** @type {(inputs: Manager_Shot_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resimli mod ayrıntıları`)
};

const zh_manager_shot_gallery = /** @type {(inputs: Manager_Shot_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`带图片的模组详情`)
};

const ja_manager_shot_gallery = /** @type {(inputs: Manager_Shot_GalleryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像付きの Mod 詳細`)
};

/**
* | output |
* | --- |
* | "Mod details with pictures" |
*
* @param {Manager_Shot_GalleryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_shot_gallery = /** @type {((inputs?: Manager_Shot_GalleryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Shot_GalleryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_shot_gallery(inputs)
	if (locale === "de") return de_manager_shot_gallery(inputs)
	if (locale === "fr") return fr_manager_shot_gallery(inputs)
	if (locale === "it") return it_manager_shot_gallery(inputs)
	if (locale === "nl") return nl_manager_shot_gallery(inputs)
	if (locale === "pl") return pl_manager_shot_gallery(inputs)
	if (locale === "pt") return pt_manager_shot_gallery(inputs)
	if (locale === "ru") return ru_manager_shot_gallery(inputs)
	if (locale === "sv") return sv_manager_shot_gallery(inputs)
	if (locale === "tr") return tr_manager_shot_gallery(inputs)
	if (locale === "zh") return zh_manager_shot_gallery(inputs)
	if (locale === "ja") return ja_manager_shot_gallery(inputs)
	return en_manager_shot_gallery(inputs)
});
