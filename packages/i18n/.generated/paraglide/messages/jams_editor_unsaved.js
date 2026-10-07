/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_UnsavedInputs */

const en_jams_editor_unsaved = /** @type {(inputs: Jams_Editor_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have unsaved changes`)
};

const es_jams_editor_unsaved = /** @type {(inputs: Jams_Editor_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tienes cambios sin guardar`)
};

const de_jams_editor_unsaved = /** @type {(inputs: Jams_Editor_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast ungespeicherte Änderungen`)
};

const fr_jams_editor_unsaved = /** @type {(inputs: Jams_Editor_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez des modifications non enregistrées`)
};

const it_jams_editor_unsaved = /** @type {(inputs: Jams_Editor_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai modifiche non salvate`)
};

const nl_jams_editor_unsaved = /** @type {(inputs: Jams_Editor_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt niet-opgeslagen wijzigingen`)
};

const pl_jams_editor_unsaved = /** @type {(inputs: Jams_Editor_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masz niezapisane zmiany`)
};

const pt_jams_editor_unsaved = /** @type {(inputs: Jams_Editor_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você tem alterações não salvas`)
};

const ru_jams_editor_unsaved = /** @type {(inputs: Jams_Editor_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Есть несохранённые изменения`)
};

const sv_jams_editor_unsaved = /** @type {(inputs: Jams_Editor_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har osparade ändringar`)
};

const tr_jams_editor_unsaved = /** @type {(inputs: Jams_Editor_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydedilmemiş değişiklikleriniz var`)
};

const zh_jams_editor_unsaved = /** @type {(inputs: Jams_Editor_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有未保存的更改`)
};

const ja_jams_editor_unsaved = /** @type {(inputs: Jams_Editor_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未保存の変更があります`)
};

/**
* | output |
* | --- |
* | "You have unsaved changes" |
*
* @param {Jams_Editor_UnsavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_unsaved = /** @type {((inputs?: Jams_Editor_UnsavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_UnsavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_unsaved(inputs)
	if (locale === "de") return de_jams_editor_unsaved(inputs)
	if (locale === "fr") return fr_jams_editor_unsaved(inputs)
	if (locale === "it") return it_jams_editor_unsaved(inputs)
	if (locale === "nl") return nl_jams_editor_unsaved(inputs)
	if (locale === "pl") return pl_jams_editor_unsaved(inputs)
	if (locale === "pt") return pt_jams_editor_unsaved(inputs)
	if (locale === "ru") return ru_jams_editor_unsaved(inputs)
	if (locale === "sv") return sv_jams_editor_unsaved(inputs)
	if (locale === "tr") return tr_jams_editor_unsaved(inputs)
	if (locale === "zh") return zh_jams_editor_unsaved(inputs)
	if (locale === "ja") return ja_jams_editor_unsaved(inputs)
	return en_jams_editor_unsaved(inputs)
});
