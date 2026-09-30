/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Delete_FailedInputs */

const en_jams_editor_delete_failed = /** @type {(inputs: Jams_Editor_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't delete the draft`)
};

const es_jams_editor_delete_failed = /** @type {(inputs: Jams_Editor_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo eliminar el borrador`)
};

const de_jams_editor_delete_failed = /** @type {(inputs: Jams_Editor_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwurf konnte nicht gelöscht werden`)
};

const fr_jams_editor_delete_failed = /** @type {(inputs: Jams_Editor_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de supprimer le brouillon`)
};

const it_jams_editor_delete_failed = /** @type {(inputs: Jams_Editor_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile eliminare la bozza`)
};

const nl_jams_editor_delete_failed = /** @type {(inputs: Jams_Editor_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het concept kon niet worden verwijderd`)
};

const pl_jams_editor_delete_failed = /** @type {(inputs: Jams_Editor_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się usunąć szkicu`)
};

const pt_jams_editor_delete_failed = /** @type {(inputs: Jams_Editor_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível excluir o rascunho`)
};

const ru_jams_editor_delete_failed = /** @type {(inputs: Jams_Editor_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось удалить черновик`)
};

const sv_jams_editor_delete_failed = /** @type {(inputs: Jams_Editor_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte ta bort utkastet`)
};

const tr_jams_editor_delete_failed = /** @type {(inputs: Jams_Editor_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taslak silinemedi`)
};

const zh_jams_editor_delete_failed = /** @type {(inputs: Jams_Editor_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法删除草稿`)
};

const ja_jams_editor_delete_failed = /** @type {(inputs: Jams_Editor_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書きを削除できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn't delete the draft" |
*
* @param {Jams_Editor_Delete_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_delete_failed = /** @type {((inputs?: Jams_Editor_Delete_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Delete_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_delete_failed(inputs)
	if (locale === "de") return de_jams_editor_delete_failed(inputs)
	if (locale === "fr") return fr_jams_editor_delete_failed(inputs)
	if (locale === "it") return it_jams_editor_delete_failed(inputs)
	if (locale === "nl") return nl_jams_editor_delete_failed(inputs)
	if (locale === "pl") return pl_jams_editor_delete_failed(inputs)
	if (locale === "pt") return pt_jams_editor_delete_failed(inputs)
	if (locale === "ru") return ru_jams_editor_delete_failed(inputs)
	if (locale === "sv") return sv_jams_editor_delete_failed(inputs)
	if (locale === "tr") return tr_jams_editor_delete_failed(inputs)
	if (locale === "zh") return zh_jams_editor_delete_failed(inputs)
	if (locale === "ja") return ja_jams_editor_delete_failed(inputs)
	return en_jams_editor_delete_failed(inputs)
});
