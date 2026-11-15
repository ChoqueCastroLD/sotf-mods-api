/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_UndoInputs */

const en_modpacks_undo = /** @type {(inputs: Modpacks_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Undo`)
};

const es_modpacks_undo = /** @type {(inputs: Modpacks_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deshacer`)
};

const de_modpacks_undo = /** @type {(inputs: Modpacks_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rückgängig`)
};

const fr_modpacks_undo = /** @type {(inputs: Modpacks_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_modpacks_undo = /** @type {(inputs: Modpacks_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_modpacks_undo = /** @type {(inputs: Modpacks_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ongedaan maken`)
};

const pl_modpacks_undo = /** @type {(inputs: Modpacks_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cofnij`)
};

const pt_modpacks_undo = /** @type {(inputs: Modpacks_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desfazer`)
};

const ru_modpacks_undo = /** @type {(inputs: Modpacks_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отменить`)
};

const sv_modpacks_undo = /** @type {(inputs: Modpacks_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ångra`)
};

const tr_modpacks_undo = /** @type {(inputs: Modpacks_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri al`)
};

const zh_modpacks_undo = /** @type {(inputs: Modpacks_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤销`)
};

const ja_modpacks_undo = /** @type {(inputs: Modpacks_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`元に戻す`)
};

/**
* | output |
* | --- |
* | "Undo" |
*
* @param {Modpacks_UndoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_undo = /** @type {((inputs?: Modpacks_UndoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_UndoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_undo(inputs)
	if (locale === "de") return de_modpacks_undo(inputs)
	if (locale === "fr") return fr_modpacks_undo(inputs)
	if (locale === "it") return it_modpacks_undo(inputs)
	if (locale === "nl") return nl_modpacks_undo(inputs)
	if (locale === "pl") return pl_modpacks_undo(inputs)
	if (locale === "pt") return pt_modpacks_undo(inputs)
	if (locale === "ru") return ru_modpacks_undo(inputs)
	if (locale === "sv") return sv_modpacks_undo(inputs)
	if (locale === "tr") return tr_modpacks_undo(inputs)
	if (locale === "zh") return zh_modpacks_undo(inputs)
	if (locale === "ja") return ja_modpacks_undo(inputs)
	return en_modpacks_undo(inputs)
});
