/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Unsaved_LeaveInputs */

const en_basecamp_unsaved_leave = /** @type {(inputs: Basecamp_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leave without saving`)
};

const es_basecamp_unsaved_leave = /** @type {(inputs: Basecamp_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salir sin guardar`)
};

const de_basecamp_unsaved_leave = /** @type {(inputs: Basecamp_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ohne Speichern verlassen`)
};

const fr_basecamp_unsaved_leave = /** @type {(inputs: Basecamp_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitter sans enregistrer`)
};

const it_basecamp_unsaved_leave = /** @type {(inputs: Basecamp_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esci senza salvare`)
};

const nl_basecamp_unsaved_leave = /** @type {(inputs: Basecamp_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verlaten zonder opslaan`)
};

const pl_basecamp_unsaved_leave = /** @type {(inputs: Basecamp_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyjdź bez zapisywania`)
};

const pt_basecamp_unsaved_leave = /** @type {(inputs: Basecamp_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sair sem salvar`)
};

const ru_basecamp_unsaved_leave = /** @type {(inputs: Basecamp_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выйти без сохранения`)
};

const sv_basecamp_unsaved_leave = /** @type {(inputs: Basecamp_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lämna utan att spara`)
};

const tr_basecamp_unsaved_leave = /** @type {(inputs: Basecamp_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydetmeden çık`)
};

const zh_basecamp_unsaved_leave = /** @type {(inputs: Basecamp_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不保存离开`)
};

const ja_basecamp_unsaved_leave = /** @type {(inputs: Basecamp_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存せずに移動`)
};

/**
* | output |
* | --- |
* | "Leave without saving" |
*
* @param {Basecamp_Unsaved_LeaveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_unsaved_leave = /** @type {((inputs?: Basecamp_Unsaved_LeaveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Unsaved_LeaveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_unsaved_leave(inputs)
	if (locale === "de") return de_basecamp_unsaved_leave(inputs)
	if (locale === "fr") return fr_basecamp_unsaved_leave(inputs)
	if (locale === "it") return it_basecamp_unsaved_leave(inputs)
	if (locale === "nl") return nl_basecamp_unsaved_leave(inputs)
	if (locale === "pl") return pl_basecamp_unsaved_leave(inputs)
	if (locale === "pt") return pt_basecamp_unsaved_leave(inputs)
	if (locale === "ru") return ru_basecamp_unsaved_leave(inputs)
	if (locale === "sv") return sv_basecamp_unsaved_leave(inputs)
	if (locale === "tr") return tr_basecamp_unsaved_leave(inputs)
	if (locale === "zh") return zh_basecamp_unsaved_leave(inputs)
	if (locale === "ja") return ja_basecamp_unsaved_leave(inputs)
	return en_basecamp_unsaved_leave(inputs)
});
