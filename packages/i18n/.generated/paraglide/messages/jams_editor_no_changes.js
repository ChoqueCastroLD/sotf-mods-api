/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_No_ChangesInputs */

const en_jams_editor_no_changes = /** @type {(inputs: Jams_Editor_No_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No unsaved changes`)
};

const es_jams_editor_no_changes = /** @type {(inputs: Jams_Editor_No_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay cambios sin guardar`)
};

const de_jams_editor_no_changes = /** @type {(inputs: Jams_Editor_No_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine ungespeicherten Änderungen`)
};

const fr_jams_editor_no_changes = /** @type {(inputs: Jams_Editor_No_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune modification non enregistrée`)
};

const it_jams_editor_no_changes = /** @type {(inputs: Jams_Editor_No_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna modifica non salvata`)
};

const nl_jams_editor_no_changes = /** @type {(inputs: Jams_Editor_No_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen niet-opgeslagen wijzigingen`)
};

const pl_jams_editor_no_changes = /** @type {(inputs: Jams_Editor_No_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak niezapisanych zmian`)
};

const pt_jams_editor_no_changes = /** @type {(inputs: Jams_Editor_No_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma alteração não salva`)
};

const ru_jams_editor_no_changes = /** @type {(inputs: Jams_Editor_No_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Несохранённых изменений нет`)
};

const sv_jams_editor_no_changes = /** @type {(inputs: Jams_Editor_No_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga osparade ändringar`)
};

const tr_jams_editor_no_changes = /** @type {(inputs: Jams_Editor_No_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydedilmemiş değişiklik yok`)
};

const zh_jams_editor_no_changes = /** @type {(inputs: Jams_Editor_No_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有未保存的更改`)
};

const ja_jams_editor_no_changes = /** @type {(inputs: Jams_Editor_No_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未保存の変更はありません`)
};

/**
* | output |
* | --- |
* | "No unsaved changes" |
*
* @param {Jams_Editor_No_ChangesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_no_changes = /** @type {((inputs?: Jams_Editor_No_ChangesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_No_ChangesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_no_changes(inputs)
	if (locale === "de") return de_jams_editor_no_changes(inputs)
	if (locale === "fr") return fr_jams_editor_no_changes(inputs)
	if (locale === "it") return it_jams_editor_no_changes(inputs)
	if (locale === "nl") return nl_jams_editor_no_changes(inputs)
	if (locale === "pl") return pl_jams_editor_no_changes(inputs)
	if (locale === "pt") return pt_jams_editor_no_changes(inputs)
	if (locale === "ru") return ru_jams_editor_no_changes(inputs)
	if (locale === "sv") return sv_jams_editor_no_changes(inputs)
	if (locale === "tr") return tr_jams_editor_no_changes(inputs)
	if (locale === "zh") return zh_jams_editor_no_changes(inputs)
	if (locale === "ja") return ja_jams_editor_no_changes(inputs)
	return en_jams_editor_no_changes(inputs)
});
