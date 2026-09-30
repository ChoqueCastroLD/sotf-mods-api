/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Md_Alert_NoteInputs */

const en_mod_md_alert_note = /** @type {(inputs: Mod_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note`)
};

const es_mod_md_alert_note = /** @type {(inputs: Mod_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota`)
};

const de_mod_md_alert_note = /** @type {(inputs: Mod_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hinweis`)
};

const fr_mod_md_alert_note = /** @type {(inputs: Mod_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remarque`)
};

const it_mod_md_alert_note = /** @type {(inputs: Mod_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota`)
};

const nl_mod_md_alert_note = /** @type {(inputs: Mod_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opmerking`)
};

const pl_mod_md_alert_note = /** @type {(inputs: Mod_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uwaga`)
};

const pt_mod_md_alert_note = /** @type {(inputs: Mod_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota`)
};

const ru_mod_md_alert_note = /** @type {(inputs: Mod_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Примечание`)
};

const sv_mod_md_alert_note = /** @type {(inputs: Mod_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obs`)
};

const tr_mod_md_alert_note = /** @type {(inputs: Mod_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not`)
};

const zh_mod_md_alert_note = /** @type {(inputs: Mod_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注意`)
};

const ja_mod_md_alert_note = /** @type {(inputs: Mod_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモ`)
};

/**
* | output |
* | --- |
* | "Note" |
*
* @param {Mod_Md_Alert_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_md_alert_note = /** @type {((inputs?: Mod_Md_Alert_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Md_Alert_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_md_alert_note(inputs)
	if (locale === "de") return de_mod_md_alert_note(inputs)
	if (locale === "fr") return fr_mod_md_alert_note(inputs)
	if (locale === "it") return it_mod_md_alert_note(inputs)
	if (locale === "nl") return nl_mod_md_alert_note(inputs)
	if (locale === "pl") return pl_mod_md_alert_note(inputs)
	if (locale === "pt") return pt_mod_md_alert_note(inputs)
	if (locale === "ru") return ru_mod_md_alert_note(inputs)
	if (locale === "sv") return sv_mod_md_alert_note(inputs)
	if (locale === "tr") return tr_mod_md_alert_note(inputs)
	if (locale === "zh") return zh_mod_md_alert_note(inputs)
	if (locale === "ja") return ja_mod_md_alert_note(inputs)
	return en_mod_md_alert_note(inputs)
});
