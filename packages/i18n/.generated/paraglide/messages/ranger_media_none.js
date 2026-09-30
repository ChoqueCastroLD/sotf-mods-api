/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Media_NoneInputs */

const en_ranger_media_none = /** @type {(inputs: Ranger_Media_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No images.`)
};

const es_ranger_media_none = /** @type {(inputs: Ranger_Media_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay imágenes.`)
};

const de_ranger_media_none = /** @type {(inputs: Ranger_Media_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Bilder.`)
};

const fr_ranger_media_none = /** @type {(inputs: Ranger_Media_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune image.`)
};

const it_ranger_media_none = /** @type {(inputs: Ranger_Media_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna immagine.`)
};

const nl_ranger_media_none = /** @type {(inputs: Ranger_Media_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen afbeeldingen.`)
};

const pl_ranger_media_none = /** @type {(inputs: Ranger_Media_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak obrazów.`)
};

const pt_ranger_media_none = /** @type {(inputs: Ranger_Media_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma imagem.`)
};

const ru_ranger_media_none = /** @type {(inputs: Ranger_Media_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет изображений.`)
};

const sv_ranger_media_none = /** @type {(inputs: Ranger_Media_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga bilder.`)
};

const tr_ranger_media_none = /** @type {(inputs: Ranger_Media_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsel yok.`)
};

const zh_ranger_media_none = /** @type {(inputs: Ranger_Media_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有图片。`)
};

const ja_ranger_media_none = /** @type {(inputs: Ranger_Media_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像はありません。`)
};

/**
* | output |
* | --- |
* | "No images." |
*
* @param {Ranger_Media_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_media_none = /** @type {((inputs?: Ranger_Media_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Media_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_media_none(inputs)
	if (locale === "de") return de_ranger_media_none(inputs)
	if (locale === "fr") return fr_ranger_media_none(inputs)
	if (locale === "it") return it_ranger_media_none(inputs)
	if (locale === "nl") return nl_ranger_media_none(inputs)
	if (locale === "pl") return pl_ranger_media_none(inputs)
	if (locale === "pt") return pt_ranger_media_none(inputs)
	if (locale === "ru") return ru_ranger_media_none(inputs)
	if (locale === "sv") return sv_ranger_media_none(inputs)
	if (locale === "tr") return tr_ranger_media_none(inputs)
	if (locale === "zh") return zh_ranger_media_none(inputs)
	if (locale === "ja") return ja_ranger_media_none(inputs)
	return en_ranger_media_none(inputs)
});
