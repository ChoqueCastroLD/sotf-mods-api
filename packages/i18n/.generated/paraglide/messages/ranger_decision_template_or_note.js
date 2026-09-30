/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Decision_Template_Or_NoteInputs */

const en_ranger_decision_template_or_note = /** @type {(inputs: Ranger_Decision_Template_Or_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pick a template or write a note.`)
};

const es_ranger_decision_template_or_note = /** @type {(inputs: Ranger_Decision_Template_Or_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige una plantilla o escribe una nota.`)
};

const de_ranger_decision_template_or_note = /** @type {(inputs: Ranger_Decision_Template_Or_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle eine Vorlage oder schreibe eine Notiz.`)
};

const fr_ranger_decision_template_or_note = /** @type {(inputs: Ranger_Decision_Template_Or_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez un modèle ou écrivez une note.`)
};

const it_ranger_decision_template_or_note = /** @type {(inputs: Ranger_Decision_Template_Or_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli un modello o scrivi una nota.`)
};

const nl_ranger_decision_template_or_note = /** @type {(inputs: Ranger_Decision_Template_Or_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een sjabloon of schrijf een notitie.`)
};

const pl_ranger_decision_template_or_note = /** @type {(inputs: Ranger_Decision_Template_Or_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz szablon albo napisz notatkę.`)
};

const pt_ranger_decision_template_or_note = /** @type {(inputs: Ranger_Decision_Template_Or_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha um modelo ou escreva uma nota.`)
};

const ru_ranger_decision_template_or_note = /** @type {(inputs: Ranger_Decision_Template_Or_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите шаблон или напишите заметку.`)
};

const sv_ranger_decision_template_or_note = /** @type {(inputs: Ranger_Decision_Template_Or_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj en mall eller skriv en anteckning.`)
};

const tr_ranger_decision_template_or_note = /** @type {(inputs: Ranger_Decision_Template_Or_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir şablon seçin veya not yazın.`)
};

const zh_ranger_decision_template_or_note = /** @type {(inputs: Ranger_Decision_Template_Or_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择模板或填写备注。`)
};

const ja_ranger_decision_template_or_note = /** @type {(inputs: Ranger_Decision_Template_Or_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テンプレートを選ぶか、メモを書いてください。`)
};

/**
* | output |
* | --- |
* | "Pick a template or write a note." |
*
* @param {Ranger_Decision_Template_Or_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_decision_template_or_note = /** @type {((inputs?: Ranger_Decision_Template_Or_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decision_Template_Or_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_decision_template_or_note(inputs)
	if (locale === "de") return de_ranger_decision_template_or_note(inputs)
	if (locale === "fr") return fr_ranger_decision_template_or_note(inputs)
	if (locale === "it") return it_ranger_decision_template_or_note(inputs)
	if (locale === "nl") return nl_ranger_decision_template_or_note(inputs)
	if (locale === "pl") return pl_ranger_decision_template_or_note(inputs)
	if (locale === "pt") return pt_ranger_decision_template_or_note(inputs)
	if (locale === "ru") return ru_ranger_decision_template_or_note(inputs)
	if (locale === "sv") return sv_ranger_decision_template_or_note(inputs)
	if (locale === "tr") return tr_ranger_decision_template_or_note(inputs)
	if (locale === "zh") return zh_ranger_decision_template_or_note(inputs)
	if (locale === "ja") return ja_ranger_decision_template_or_note(inputs)
	return en_ranger_decision_template_or_note(inputs)
});
