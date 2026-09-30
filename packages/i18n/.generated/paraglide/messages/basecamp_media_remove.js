/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ n: NonNullable<unknown> }} Basecamp_Media_RemoveInputs */

const en_basecamp_media_remove = /** @type {(inputs: Basecamp_Media_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove image ${i?.n}`)
};

const es_basecamp_media_remove = /** @type {(inputs: Basecamp_Media_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Quitar la imagen ${i?.n}`)
};

const de_basecamp_media_remove = /** @type {(inputs: Basecamp_Media_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bild ${i?.n} entfernen`)
};

const fr_basecamp_media_remove = /** @type {(inputs: Basecamp_Media_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer l’image ${i?.n}`)
};

const it_basecamp_media_remove = /** @type {(inputs: Basecamp_Media_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rimuovi l’immagine ${i?.n}`)
};

const nl_basecamp_media_remove = /** @type {(inputs: Basecamp_Media_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afbeelding ${i?.n} verwijderen`)
};

const pl_basecamp_media_remove = /** @type {(inputs: Basecamp_Media_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usuń obraz ${i?.n}`)
};

const pt_basecamp_media_remove = /** @type {(inputs: Basecamp_Media_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remover a imagem ${i?.n}`)
};

const ru_basecamp_media_remove = /** @type {(inputs: Basecamp_Media_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Удалить изображение ${i?.n}`)
};

const sv_basecamp_media_remove = /** @type {(inputs: Basecamp_Media_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort bild ${i?.n}`)
};

const tr_basecamp_media_remove = /** @type {(inputs: Basecamp_Media_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.n}. görseli kaldır`)
};

const zh_basecamp_media_remove = /** @type {(inputs: Basecamp_Media_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`移除图片 ${i?.n}`)
};

const ja_basecamp_media_remove = /** @type {(inputs: Basecamp_Media_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`画像 ${i?.n} を削除`)
};

/**
* | output |
* | --- |
* | "Remove image {n}" |
*
* @param {Basecamp_Media_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_remove = /** @type {((inputs: Basecamp_Media_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_remove(inputs)
	if (locale === "de") return de_basecamp_media_remove(inputs)
	if (locale === "fr") return fr_basecamp_media_remove(inputs)
	if (locale === "it") return it_basecamp_media_remove(inputs)
	if (locale === "nl") return nl_basecamp_media_remove(inputs)
	if (locale === "pl") return pl_basecamp_media_remove(inputs)
	if (locale === "pt") return pt_basecamp_media_remove(inputs)
	if (locale === "ru") return ru_basecamp_media_remove(inputs)
	if (locale === "sv") return sv_basecamp_media_remove(inputs)
	if (locale === "tr") return tr_basecamp_media_remove(inputs)
	if (locale === "zh") return zh_basecamp_media_remove(inputs)
	if (locale === "ja") return ja_basecamp_media_remove(inputs)
	return en_basecamp_media_remove(inputs)
});
