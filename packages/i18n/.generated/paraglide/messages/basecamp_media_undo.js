/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Media_UndoInputs */

const en_basecamp_media_undo = /** @type {(inputs: Basecamp_Media_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Undo`)
};

const es_basecamp_media_undo = /** @type {(inputs: Basecamp_Media_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deshacer`)
};

const de_basecamp_media_undo = /** @type {(inputs: Basecamp_Media_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rückgängig`)
};

const fr_basecamp_media_undo = /** @type {(inputs: Basecamp_Media_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_basecamp_media_undo = /** @type {(inputs: Basecamp_Media_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_basecamp_media_undo = /** @type {(inputs: Basecamp_Media_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ongedaan maken`)
};

const pl_basecamp_media_undo = /** @type {(inputs: Basecamp_Media_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cofnij`)
};

const pt_basecamp_media_undo = /** @type {(inputs: Basecamp_Media_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desfazer`)
};

const ru_basecamp_media_undo = /** @type {(inputs: Basecamp_Media_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отменить`)
};

const sv_basecamp_media_undo = /** @type {(inputs: Basecamp_Media_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ångra`)
};

const tr_basecamp_media_undo = /** @type {(inputs: Basecamp_Media_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri al`)
};

const zh_basecamp_media_undo = /** @type {(inputs: Basecamp_Media_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤销`)
};

const ja_basecamp_media_undo = /** @type {(inputs: Basecamp_Media_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`元に戻す`)
};

/**
* | output |
* | --- |
* | "Undo" |
*
* @param {Basecamp_Media_UndoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_undo = /** @type {((inputs?: Basecamp_Media_UndoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_UndoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_undo(inputs)
	if (locale === "de") return de_basecamp_media_undo(inputs)
	if (locale === "fr") return fr_basecamp_media_undo(inputs)
	if (locale === "it") return it_basecamp_media_undo(inputs)
	if (locale === "nl") return nl_basecamp_media_undo(inputs)
	if (locale === "pl") return pl_basecamp_media_undo(inputs)
	if (locale === "pt") return pt_basecamp_media_undo(inputs)
	if (locale === "ru") return ru_basecamp_media_undo(inputs)
	if (locale === "sv") return sv_basecamp_media_undo(inputs)
	if (locale === "tr") return tr_basecamp_media_undo(inputs)
	if (locale === "zh") return zh_basecamp_media_undo(inputs)
	if (locale === "ja") return ja_basecamp_media_undo(inputs)
	return en_basecamp_media_undo(inputs)
});
