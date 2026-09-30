/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_UndoInputs */

const en_me_undo = /** @type {(inputs: Me_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Undo`)
};

const es_me_undo = /** @type {(inputs: Me_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deshacer`)
};

const de_me_undo = /** @type {(inputs: Me_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rückgängig`)
};

const fr_me_undo = /** @type {(inputs: Me_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_me_undo = /** @type {(inputs: Me_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_me_undo = /** @type {(inputs: Me_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ongedaan maken`)
};

const pl_me_undo = /** @type {(inputs: Me_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cofnij`)
};

const pt_me_undo = /** @type {(inputs: Me_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desfazer`)
};

const ru_me_undo = /** @type {(inputs: Me_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отменить`)
};

const sv_me_undo = /** @type {(inputs: Me_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ångra`)
};

const tr_me_undo = /** @type {(inputs: Me_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri al`)
};

const zh_me_undo = /** @type {(inputs: Me_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤销`)
};

const ja_me_undo = /** @type {(inputs: Me_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`元に戻す`)
};

/**
* | output |
* | --- |
* | "Undo" |
*
* @param {Me_UndoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_undo = /** @type {((inputs?: Me_UndoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_UndoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_undo(inputs)
	if (locale === "de") return de_me_undo(inputs)
	if (locale === "fr") return fr_me_undo(inputs)
	if (locale === "it") return it_me_undo(inputs)
	if (locale === "nl") return nl_me_undo(inputs)
	if (locale === "pl") return pl_me_undo(inputs)
	if (locale === "pt") return pt_me_undo(inputs)
	if (locale === "ru") return ru_me_undo(inputs)
	if (locale === "sv") return sv_me_undo(inputs)
	if (locale === "tr") return tr_me_undo(inputs)
	if (locale === "zh") return zh_me_undo(inputs)
	if (locale === "ja") return ja_me_undo(inputs)
	return en_me_undo(inputs)
});
