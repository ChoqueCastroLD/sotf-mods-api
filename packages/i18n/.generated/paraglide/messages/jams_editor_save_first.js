/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Save_FirstInputs */

const en_jams_editor_save_first = /** @type {(inputs: Jams_Editor_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save your changes first.`)
};

const es_jams_editor_save_first = /** @type {(inputs: Jams_Editor_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guarda primero los cambios.`)
};

const de_jams_editor_save_first = /** @type {(inputs: Jams_Editor_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Speichere zuerst deine Änderungen.`)
};

const fr_jams_editor_save_first = /** @type {(inputs: Jams_Editor_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrez d’abord vos modifications.`)
};

const it_jams_editor_save_first = /** @type {(inputs: Jams_Editor_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva prima le modifiche.`)
};

const nl_jams_editor_save_first = /** @type {(inputs: Jams_Editor_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sla eerst je wijzigingen op.`)
};

const pl_jams_editor_save_first = /** @type {(inputs: Jams_Editor_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najpierw zapisz zmiany.`)
};

const pt_jams_editor_save_first = /** @type {(inputs: Jams_Editor_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salve as alterações primeiro.`)
};

const ru_jams_editor_save_first = /** @type {(inputs: Jams_Editor_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала сохраните изменения.`)
};

const sv_jams_editor_save_first = /** @type {(inputs: Jams_Editor_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara ändringarna först.`)
};

const tr_jams_editor_save_first = /** @type {(inputs: Jams_Editor_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce değişiklikleri kaydedin.`)
};

const zh_jams_editor_save_first = /** @type {(inputs: Jams_Editor_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先保存更改。`)
};

const ja_jams_editor_save_first = /** @type {(inputs: Jams_Editor_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`先に変更を保存してください。`)
};

/**
* | output |
* | --- |
* | "Save your changes first." |
*
* @param {Jams_Editor_Save_FirstInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_save_first = /** @type {((inputs?: Jams_Editor_Save_FirstInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Save_FirstInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_save_first(inputs)
	if (locale === "de") return de_jams_editor_save_first(inputs)
	if (locale === "fr") return fr_jams_editor_save_first(inputs)
	if (locale === "it") return it_jams_editor_save_first(inputs)
	if (locale === "nl") return nl_jams_editor_save_first(inputs)
	if (locale === "pl") return pl_jams_editor_save_first(inputs)
	if (locale === "pt") return pt_jams_editor_save_first(inputs)
	if (locale === "ru") return ru_jams_editor_save_first(inputs)
	if (locale === "sv") return sv_jams_editor_save_first(inputs)
	if (locale === "tr") return tr_jams_editor_save_first(inputs)
	if (locale === "zh") return zh_jams_editor_save_first(inputs)
	if (locale === "ja") return ja_jams_editor_save_first(inputs)
	return en_jams_editor_save_first(inputs)
});
