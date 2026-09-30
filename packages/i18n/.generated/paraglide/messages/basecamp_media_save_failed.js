/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_Save_FailedInputs */

const en_basecamp_media_save_failed = /** @type {(inputs: Basecamp_Media_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The media could not be saved`)
};

const es_basecamp_media_save_failed = /** @type {(inputs: Basecamp_Media_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron guardar los medios`)
};

const de_basecamp_media_save_failed = /** @type {(inputs: Basecamp_Media_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Medien konnten nicht gespeichert werden`)
};

const fr_basecamp_media_save_failed = /** @type {(inputs: Basecamp_Media_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les médias n’ont pas pu être enregistrés`)
};

const it_basecamp_media_save_failed = /** @type {(inputs: Basecamp_Media_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile salvare i media`)
};

const nl_basecamp_media_save_failed = /** @type {(inputs: Basecamp_Media_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De media konden niet worden opgeslagen`)
};

const pl_basecamp_media_save_failed = /** @type {(inputs: Basecamp_Media_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zapisać mediów`)
};

const pt_basecamp_media_save_failed = /** @type {(inputs: Basecamp_Media_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível salvar a mídia`)
};

const ru_basecamp_media_save_failed = /** @type {(inputs: Basecamp_Media_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сохранить медиа`)
};

const sv_basecamp_media_save_failed = /** @type {(inputs: Basecamp_Media_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media kunde inte sparas`)
};

const tr_basecamp_media_save_failed = /** @type {(inputs: Basecamp_Media_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medya kaydedilemedi`)
};

const zh_basecamp_media_save_failed = /** @type {(inputs: Basecamp_Media_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法保存媒体`)
};

const ja_basecamp_media_save_failed = /** @type {(inputs: Basecamp_Media_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メディアを保存できませんでした`)
};

/**
* | output |
* | --- |
* | "The media could not be saved" |
*
* @param {Basecamp_Media_Save_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_save_failed = /** @type {((inputs?: Basecamp_Media_Save_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Save_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_save_failed(inputs)
	if (locale === "de") return de_basecamp_media_save_failed(inputs)
	if (locale === "fr") return fr_basecamp_media_save_failed(inputs)
	if (locale === "it") return it_basecamp_media_save_failed(inputs)
	if (locale === "nl") return nl_basecamp_media_save_failed(inputs)
	if (locale === "pl") return pl_basecamp_media_save_failed(inputs)
	if (locale === "pt") return pt_basecamp_media_save_failed(inputs)
	if (locale === "ru") return ru_basecamp_media_save_failed(inputs)
	if (locale === "sv") return sv_basecamp_media_save_failed(inputs)
	if (locale === "tr") return tr_basecamp_media_save_failed(inputs)
	if (locale === "zh") return zh_basecamp_media_save_failed(inputs)
	if (locale === "ja") return ja_basecamp_media_save_failed(inputs)
	return en_basecamp_media_save_failed(inputs)
});
