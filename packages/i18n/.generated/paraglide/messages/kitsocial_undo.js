/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_UndoInputs */

const en_kitsocial_undo = /** @type {(inputs: Kitsocial_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Undo`)
};

const es_kitsocial_undo = /** @type {(inputs: Kitsocial_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deshacer`)
};

const de_kitsocial_undo = /** @type {(inputs: Kitsocial_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rückgängig`)
};

const fr_kitsocial_undo = /** @type {(inputs: Kitsocial_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_kitsocial_undo = /** @type {(inputs: Kitsocial_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_kitsocial_undo = /** @type {(inputs: Kitsocial_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ongedaan maken`)
};

const pl_kitsocial_undo = /** @type {(inputs: Kitsocial_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cofnij`)
};

const pt_kitsocial_undo = /** @type {(inputs: Kitsocial_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desfazer`)
};

const ru_kitsocial_undo = /** @type {(inputs: Kitsocial_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отменить`)
};

const sv_kitsocial_undo = /** @type {(inputs: Kitsocial_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ångra`)
};

const tr_kitsocial_undo = /** @type {(inputs: Kitsocial_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri al`)
};

const zh_kitsocial_undo = /** @type {(inputs: Kitsocial_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤销`)
};

const ja_kitsocial_undo = /** @type {(inputs: Kitsocial_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`元に戻す`)
};

/**
* | output |
* | --- |
* | "Undo" |
*
* @param {Kitsocial_UndoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_undo = /** @type {((inputs?: Kitsocial_UndoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_UndoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_undo(inputs)
	if (locale === "de") return de_kitsocial_undo(inputs)
	if (locale === "fr") return fr_kitsocial_undo(inputs)
	if (locale === "it") return it_kitsocial_undo(inputs)
	if (locale === "nl") return nl_kitsocial_undo(inputs)
	if (locale === "pl") return pl_kitsocial_undo(inputs)
	if (locale === "pt") return pt_kitsocial_undo(inputs)
	if (locale === "ru") return ru_kitsocial_undo(inputs)
	if (locale === "sv") return sv_kitsocial_undo(inputs)
	if (locale === "tr") return tr_kitsocial_undo(inputs)
	if (locale === "zh") return zh_kitsocial_undo(inputs)
	if (locale === "ja") return ja_kitsocial_undo(inputs)
	return en_kitsocial_undo(inputs)
});
