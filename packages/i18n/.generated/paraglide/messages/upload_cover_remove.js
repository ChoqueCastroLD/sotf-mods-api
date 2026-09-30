/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Cover_RemoveInputs */

const en_upload_cover_remove = /** @type {(inputs: Upload_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove cover`)
};

const es_upload_cover_remove = /** @type {(inputs: Upload_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar portada`)
};

const de_upload_cover_remove = /** @type {(inputs: Upload_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titelbild entfernen`)
};

const fr_upload_cover_remove = /** @type {(inputs: Upload_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer la couverture`)
};

const it_upload_cover_remove = /** @type {(inputs: Upload_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi copertina`)
};

const nl_upload_cover_remove = /** @type {(inputs: Upload_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag verwijderen`)
};

const pl_upload_cover_remove = /** @type {(inputs: Upload_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń okładkę`)
};

const pt_upload_cover_remove = /** @type {(inputs: Upload_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover capa`)
};

const ru_upload_cover_remove = /** @type {(inputs: Upload_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Убрать обложку`)
};

const sv_upload_cover_remove = /** @type {(inputs: Upload_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort omslag`)
};

const tr_upload_cover_remove = /** @type {(inputs: Upload_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapağı kaldır`)
};

const zh_upload_cover_remove = /** @type {(inputs: Upload_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除封面`)
};

const ja_upload_cover_remove = /** @type {(inputs: Upload_Cover_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバーを削除`)
};

/**
* | output |
* | --- |
* | "Remove cover" |
*
* @param {Upload_Cover_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_cover_remove = /** @type {((inputs?: Upload_Cover_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Cover_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_cover_remove(inputs)
	if (locale === "de") return de_upload_cover_remove(inputs)
	if (locale === "fr") return fr_upload_cover_remove(inputs)
	if (locale === "it") return it_upload_cover_remove(inputs)
	if (locale === "nl") return nl_upload_cover_remove(inputs)
	if (locale === "pl") return pl_upload_cover_remove(inputs)
	if (locale === "pt") return pt_upload_cover_remove(inputs)
	if (locale === "ru") return ru_upload_cover_remove(inputs)
	if (locale === "sv") return sv_upload_cover_remove(inputs)
	if (locale === "tr") return tr_upload_cover_remove(inputs)
	if (locale === "zh") return zh_upload_cover_remove(inputs)
	if (locale === "ja") return ja_upload_cover_remove(inputs)
	return en_upload_cover_remove(inputs)
});
