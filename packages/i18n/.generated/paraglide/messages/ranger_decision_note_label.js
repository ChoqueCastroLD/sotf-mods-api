/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Decision_Note_LabelInputs */

const en_ranger_decision_note_label = /** @type {(inputs: Ranger_Decision_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note to the author`)
};

const es_ranger_decision_note_label = /** @type {(inputs: Ranger_Decision_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota para el autor`)
};

const de_ranger_decision_note_label = /** @type {(inputs: Ranger_Decision_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notiz an den Autor`)
};

const fr_ranger_decision_note_label = /** @type {(inputs: Ranger_Decision_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note à l’auteur`)
};

const it_ranger_decision_note_label = /** @type {(inputs: Ranger_Decision_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota per l’autore`)
};

const nl_ranger_decision_note_label = /** @type {(inputs: Ranger_Decision_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notitie voor de maker`)
};

const pl_ranger_decision_note_label = /** @type {(inputs: Ranger_Decision_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notatka dla autora`)
};

const pt_ranger_decision_note_label = /** @type {(inputs: Ranger_Decision_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota para o autor`)
};

const ru_ranger_decision_note_label = /** @type {(inputs: Ranger_Decision_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заметка для автора`)
};

const sv_ranger_decision_note_label = /** @type {(inputs: Ranger_Decision_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteckning till skaparen`)
};

const tr_ranger_decision_note_label = /** @type {(inputs: Ranger_Decision_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yazara not`)
};

const zh_ranger_decision_note_label = /** @type {(inputs: Ranger_Decision_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`给作者的备注`)
};

const ja_ranger_decision_note_label = /** @type {(inputs: Ranger_Decision_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者へのメモ`)
};

/**
* | output |
* | --- |
* | "Note to the author" |
*
* @param {Ranger_Decision_Note_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_decision_note_label = /** @type {((inputs?: Ranger_Decision_Note_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decision_Note_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_decision_note_label(inputs)
	if (locale === "de") return de_ranger_decision_note_label(inputs)
	if (locale === "fr") return fr_ranger_decision_note_label(inputs)
	if (locale === "it") return it_ranger_decision_note_label(inputs)
	if (locale === "nl") return nl_ranger_decision_note_label(inputs)
	if (locale === "pl") return pl_ranger_decision_note_label(inputs)
	if (locale === "pt") return pt_ranger_decision_note_label(inputs)
	if (locale === "ru") return ru_ranger_decision_note_label(inputs)
	if (locale === "sv") return sv_ranger_decision_note_label(inputs)
	if (locale === "tr") return tr_ranger_decision_note_label(inputs)
	if (locale === "zh") return zh_ranger_decision_note_label(inputs)
	if (locale === "ja") return ja_ranger_decision_note_label(inputs)
	return en_ranger_decision_note_label(inputs)
});
