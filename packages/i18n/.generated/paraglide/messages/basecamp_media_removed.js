/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_RemovedInputs */

const en_basecamp_media_removed = /** @type {(inputs: Basecamp_Media_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image removed`)
};

const es_basecamp_media_removed = /** @type {(inputs: Basecamp_Media_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagen quitada`)
};

const de_basecamp_media_removed = /** @type {(inputs: Basecamp_Media_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bild entfernt`)
};

const fr_basecamp_media_removed = /** @type {(inputs: Basecamp_Media_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image retirée`)
};

const it_basecamp_media_removed = /** @type {(inputs: Basecamp_Media_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Immagine rimossa`)
};

const nl_basecamp_media_removed = /** @type {(inputs: Basecamp_Media_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeelding verwijderd`)
};

const pl_basecamp_media_removed = /** @type {(inputs: Basecamp_Media_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obraz usunięty`)
};

const pt_basecamp_media_removed = /** @type {(inputs: Basecamp_Media_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagem removida`)
};

const ru_basecamp_media_removed = /** @type {(inputs: Basecamp_Media_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изображение удалено`)
};

const sv_basecamp_media_removed = /** @type {(inputs: Basecamp_Media_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilden borttagen`)
};

const tr_basecamp_media_removed = /** @type {(inputs: Basecamp_Media_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görsel kaldırıldı`)
};

const zh_basecamp_media_removed = /** @type {(inputs: Basecamp_Media_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片已移除`)
};

const ja_basecamp_media_removed = /** @type {(inputs: Basecamp_Media_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像を削除しました`)
};

/**
* | output |
* | --- |
* | "Image removed" |
*
* @param {Basecamp_Media_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_removed = /** @type {((inputs?: Basecamp_Media_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_removed(inputs)
	if (locale === "de") return de_basecamp_media_removed(inputs)
	if (locale === "fr") return fr_basecamp_media_removed(inputs)
	if (locale === "it") return it_basecamp_media_removed(inputs)
	if (locale === "nl") return nl_basecamp_media_removed(inputs)
	if (locale === "pl") return pl_basecamp_media_removed(inputs)
	if (locale === "pt") return pt_basecamp_media_removed(inputs)
	if (locale === "ru") return ru_basecamp_media_removed(inputs)
	if (locale === "sv") return sv_basecamp_media_removed(inputs)
	if (locale === "tr") return tr_basecamp_media_removed(inputs)
	if (locale === "zh") return zh_basecamp_media_removed(inputs)
	if (locale === "ja") return ja_basecamp_media_removed(inputs)
	return en_basecamp_media_removed(inputs)
});
