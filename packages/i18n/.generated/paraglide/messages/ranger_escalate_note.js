/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Escalate_NoteInputs */

const en_ranger_escalate_note = /** @type {(inputs: Ranger_Escalate_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note for the admins`)
};

const es_ranger_escalate_note = /** @type {(inputs: Ranger_Escalate_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota para los administradores`)
};

const de_ranger_escalate_note = /** @type {(inputs: Ranger_Escalate_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notiz für die Admins`)
};

const fr_ranger_escalate_note = /** @type {(inputs: Ranger_Escalate_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note pour les admins`)
};

const it_ranger_escalate_note = /** @type {(inputs: Ranger_Escalate_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota per gli amministratori`)
};

const nl_ranger_escalate_note = /** @type {(inputs: Ranger_Escalate_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notitie voor de beheerders`)
};

const pl_ranger_escalate_note = /** @type {(inputs: Ranger_Escalate_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notatka dla administratorów`)
};

const pt_ranger_escalate_note = /** @type {(inputs: Ranger_Escalate_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota para os administradores`)
};

const ru_ranger_escalate_note = /** @type {(inputs: Ranger_Escalate_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заметка для администраторов`)
};

const sv_ranger_escalate_note = /** @type {(inputs: Ranger_Escalate_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteckning till administratörerna`)
};

const tr_ranger_escalate_note = /** @type {(inputs: Ranger_Escalate_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yöneticiler için not`)
};

const zh_ranger_escalate_note = /** @type {(inputs: Ranger_Escalate_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`给管理员的备注`)
};

const ja_ranger_escalate_note = /** @type {(inputs: Ranger_Escalate_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理者へのメモ`)
};

/**
* | output |
* | --- |
* | "Note for the admins" |
*
* @param {Ranger_Escalate_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_escalate_note = /** @type {((inputs?: Ranger_Escalate_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Escalate_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_escalate_note(inputs)
	if (locale === "de") return de_ranger_escalate_note(inputs)
	if (locale === "fr") return fr_ranger_escalate_note(inputs)
	if (locale === "it") return it_ranger_escalate_note(inputs)
	if (locale === "nl") return nl_ranger_escalate_note(inputs)
	if (locale === "pl") return pl_ranger_escalate_note(inputs)
	if (locale === "pt") return pt_ranger_escalate_note(inputs)
	if (locale === "ru") return ru_ranger_escalate_note(inputs)
	if (locale === "sv") return sv_ranger_escalate_note(inputs)
	if (locale === "tr") return tr_ranger_escalate_note(inputs)
	if (locale === "zh") return zh_ranger_escalate_note(inputs)
	if (locale === "ja") return ja_ranger_escalate_note(inputs)
	return en_ranger_escalate_note(inputs)
});
