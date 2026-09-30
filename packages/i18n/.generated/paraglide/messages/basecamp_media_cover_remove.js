/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_Cover_RemoveInputs */

const en_basecamp_media_cover_remove = /** @type {(inputs: Basecamp_Media_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove cover`)
};

const es_basecamp_media_cover_remove = /** @type {(inputs: Basecamp_Media_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar la portada`)
};

const de_basecamp_media_cover_remove = /** @type {(inputs: Basecamp_Media_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titelbild entfernen`)
};

const fr_basecamp_media_cover_remove = /** @type {(inputs: Basecamp_Media_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer la couverture`)
};

const it_basecamp_media_cover_remove = /** @type {(inputs: Basecamp_Media_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi la copertina`)
};

const nl_basecamp_media_cover_remove = /** @type {(inputs: Basecamp_Media_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag verwijderen`)
};

const pl_basecamp_media_cover_remove = /** @type {(inputs: Basecamp_Media_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń okładkę`)
};

const pt_basecamp_media_cover_remove = /** @type {(inputs: Basecamp_Media_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover a capa`)
};

const ru_basecamp_media_cover_remove = /** @type {(inputs: Basecamp_Media_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Убрать обложку`)
};

const sv_basecamp_media_cover_remove = /** @type {(inputs: Basecamp_Media_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort omslaget`)
};

const tr_basecamp_media_cover_remove = /** @type {(inputs: Basecamp_Media_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapağı kaldır`)
};

const zh_basecamp_media_cover_remove = /** @type {(inputs: Basecamp_Media_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除封面`)
};

const ja_basecamp_media_cover_remove = /** @type {(inputs: Basecamp_Media_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバーを外す`)
};

/**
* | output |
* | --- |
* | "Remove cover" |
*
* @param {Basecamp_Media_Cover_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_cover_remove = /** @type {((inputs?: Basecamp_Media_Cover_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Cover_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_cover_remove(inputs)
	if (locale === "de") return de_basecamp_media_cover_remove(inputs)
	if (locale === "fr") return fr_basecamp_media_cover_remove(inputs)
	if (locale === "it") return it_basecamp_media_cover_remove(inputs)
	if (locale === "nl") return nl_basecamp_media_cover_remove(inputs)
	if (locale === "pl") return pl_basecamp_media_cover_remove(inputs)
	if (locale === "pt") return pt_basecamp_media_cover_remove(inputs)
	if (locale === "ru") return ru_basecamp_media_cover_remove(inputs)
	if (locale === "sv") return sv_basecamp_media_cover_remove(inputs)
	if (locale === "tr") return tr_basecamp_media_cover_remove(inputs)
	if (locale === "zh") return zh_basecamp_media_cover_remove(inputs)
	if (locale === "ja") return ja_basecamp_media_cover_remove(inputs)
	return en_basecamp_media_cover_remove(inputs)
});
