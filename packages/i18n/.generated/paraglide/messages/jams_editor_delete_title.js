/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Jams_Editor_Delete_TitleInputs */

const en_jams_editor_delete_title = /** @type {(inputs: Jams_Editor_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete "${i?.title}"?`)
};

const es_jams_editor_delete_title = /** @type {(inputs: Jams_Editor_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Eliminar «${i?.title}»?`)
};

const de_jams_editor_delete_title = /** @type {(inputs: Jams_Editor_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.title}“ löschen?`)
};

const fr_jams_editor_delete_title = /** @type {(inputs: Jams_Editor_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Supprimer « ${i?.title} » ?`)
};

const it_jams_editor_delete_title = /** @type {(inputs: Jams_Editor_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Eliminare «${i?.title}»?`)
};

const nl_jams_editor_delete_title = /** @type {(inputs: Jams_Editor_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.title}" verwijderen?`)
};

const pl_jams_editor_delete_title = /** @type {(inputs: Jams_Editor_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usunąć „${i?.title}”?`)
};

const pt_jams_editor_delete_title = /** @type {(inputs: Jams_Editor_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Excluir "${i?.title}"?`)
};

const ru_jams_editor_delete_title = /** @type {(inputs: Jams_Editor_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Удалить «${i?.title}»?`)
};

const sv_jams_editor_delete_title = /** @type {(inputs: Jams_Editor_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort "${i?.title}"?`)
};

const tr_jams_editor_delete_title = /** @type {(inputs: Jams_Editor_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.title}" silinsin mi?`)
};

const zh_jams_editor_delete_title = /** @type {(inputs: Jams_Editor_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`删除「${i?.title}」？`)
};

const ja_jams_editor_delete_title = /** @type {(inputs: Jams_Editor_Delete_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.title}」を削除しますか？`)
};

/**
* | output |
* | --- |
* | "Delete \"{title}\"?" |
*
* @param {Jams_Editor_Delete_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_delete_title = /** @type {((inputs: Jams_Editor_Delete_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Delete_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_delete_title(inputs)
	if (locale === "de") return de_jams_editor_delete_title(inputs)
	if (locale === "fr") return fr_jams_editor_delete_title(inputs)
	if (locale === "it") return it_jams_editor_delete_title(inputs)
	if (locale === "nl") return nl_jams_editor_delete_title(inputs)
	if (locale === "pl") return pl_jams_editor_delete_title(inputs)
	if (locale === "pt") return pt_jams_editor_delete_title(inputs)
	if (locale === "ru") return ru_jams_editor_delete_title(inputs)
	if (locale === "sv") return sv_jams_editor_delete_title(inputs)
	if (locale === "tr") return tr_jams_editor_delete_title(inputs)
	if (locale === "zh") return zh_jams_editor_delete_title(inputs)
	if (locale === "ja") return ja_jams_editor_delete_title(inputs)
	return en_jams_editor_delete_title(inputs)
});
