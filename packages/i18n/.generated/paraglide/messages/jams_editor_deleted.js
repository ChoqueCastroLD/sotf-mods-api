/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_DeletedInputs */

const en_jams_editor_deleted = /** @type {(inputs: Jams_Editor_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Draft deleted.`)
};

const es_jams_editor_deleted = /** @type {(inputs: Jams_Editor_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrador eliminado.`)
};

const de_jams_editor_deleted = /** @type {(inputs: Jams_Editor_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwurf gelöscht.`)
};

const fr_jams_editor_deleted = /** @type {(inputs: Jams_Editor_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brouillon supprimé.`)
};

const it_jams_editor_deleted = /** @type {(inputs: Jams_Editor_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozza eliminata.`)
};

const nl_jams_editor_deleted = /** @type {(inputs: Jams_Editor_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concept verwijderd.`)
};

const pl_jams_editor_deleted = /** @type {(inputs: Jams_Editor_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szkic usunięty.`)
};

const pt_jams_editor_deleted = /** @type {(inputs: Jams_Editor_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rascunho excluído.`)
};

const ru_jams_editor_deleted = /** @type {(inputs: Jams_Editor_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Черновик удалён.`)
};

const sv_jams_editor_deleted = /** @type {(inputs: Jams_Editor_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utkastet har tagits bort.`)
};

const tr_jams_editor_deleted = /** @type {(inputs: Jams_Editor_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taslak silindi.`)
};

const zh_jams_editor_deleted = /** @type {(inputs: Jams_Editor_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`草稿已删除。`)
};

const ja_jams_editor_deleted = /** @type {(inputs: Jams_Editor_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書きを削除しました。`)
};

/**
* | output |
* | --- |
* | "Draft deleted." |
*
* @param {Jams_Editor_DeletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_deleted = /** @type {((inputs?: Jams_Editor_DeletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_DeletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_deleted(inputs)
	if (locale === "de") return de_jams_editor_deleted(inputs)
	if (locale === "fr") return fr_jams_editor_deleted(inputs)
	if (locale === "it") return it_jams_editor_deleted(inputs)
	if (locale === "nl") return nl_jams_editor_deleted(inputs)
	if (locale === "pl") return pl_jams_editor_deleted(inputs)
	if (locale === "pt") return pt_jams_editor_deleted(inputs)
	if (locale === "ru") return ru_jams_editor_deleted(inputs)
	if (locale === "sv") return sv_jams_editor_deleted(inputs)
	if (locale === "tr") return tr_jams_editor_deleted(inputs)
	if (locale === "zh") return zh_jams_editor_deleted(inputs)
	if (locale === "ja") return ja_jams_editor_deleted(inputs)
	return en_jams_editor_deleted(inputs)
});
