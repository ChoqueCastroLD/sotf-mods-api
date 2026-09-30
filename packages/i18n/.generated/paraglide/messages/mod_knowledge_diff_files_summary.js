/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ added: NonNullable<unknown>, removed: NonNullable<unknown>, changed: NonNullable<unknown>, unchanged: NonNullable<unknown> }} Mod_Knowledge_Diff_Files_SummaryInputs */

const en_mod_knowledge_diff_files_summary = /** @type {(inputs: Mod_Knowledge_Diff_Files_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.added} added, ${i?.removed} removed, ${i?.changed} changed, ${i?.unchanged} unchanged.`)
};

const es_mod_knowledge_diff_files_summary = /** @type {(inputs: Mod_Knowledge_Diff_Files_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.added} añadidos, ${i?.removed} eliminados, ${i?.changed} modificados, ${i?.unchanged} sin cambios.`)
};

const de_mod_knowledge_diff_files_summary = /** @type {(inputs: Mod_Knowledge_Diff_Files_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.added} hinzugefügt, ${i?.removed} entfernt, ${i?.changed} geändert, ${i?.unchanged} unverändert.`)
};

const fr_mod_knowledge_diff_files_summary = /** @type {(inputs: Mod_Knowledge_Diff_Files_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.added} ajoutés, ${i?.removed} supprimés, ${i?.changed} modifiés, ${i?.unchanged} inchangés.`)
};

const it_mod_knowledge_diff_files_summary = /** @type {(inputs: Mod_Knowledge_Diff_Files_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.added} aggiunti, ${i?.removed} rimossi, ${i?.changed} modificati, ${i?.unchanged} invariati.`)
};

const nl_mod_knowledge_diff_files_summary = /** @type {(inputs: Mod_Knowledge_Diff_Files_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.added} toegevoegd, ${i?.removed} verwijderd, ${i?.changed} gewijzigd, ${i?.unchanged} ongewijzigd.`)
};

const pl_mod_knowledge_diff_files_summary = /** @type {(inputs: Mod_Knowledge_Diff_Files_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dodane: ${i?.added}, usunięte: ${i?.removed}, zmienione: ${i?.changed}, bez zmian: ${i?.unchanged}.`)
};

const pt_mod_knowledge_diff_files_summary = /** @type {(inputs: Mod_Knowledge_Diff_Files_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.added} adicionados, ${i?.removed} removidos, ${i?.changed} alterados, ${i?.unchanged} sem alteração.`)
};

const ru_mod_knowledge_diff_files_summary = /** @type {(inputs: Mod_Knowledge_Diff_Files_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Добавлено: ${i?.added}, удалено: ${i?.removed}, изменено: ${i?.changed}, без изменений: ${i?.unchanged}.`)
};

const sv_mod_knowledge_diff_files_summary = /** @type {(inputs: Mod_Knowledge_Diff_Files_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.added} tillagda, ${i?.removed} borttagna, ${i?.changed} ändrade, ${i?.unchanged} oförändrade.`)
};

const tr_mod_knowledge_diff_files_summary = /** @type {(inputs: Mod_Knowledge_Diff_Files_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.added} eklendi, ${i?.removed} kaldırıldı, ${i?.changed} değişti, ${i?.unchanged} değişmedi.`)
};

const zh_mod_knowledge_diff_files_summary = /** @type {(inputs: Mod_Knowledge_Diff_Files_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`新增 ${i?.added} 个，删除 ${i?.removed} 个，修改 ${i?.changed} 个，未变 ${i?.unchanged} 个。`)
};

const ja_mod_knowledge_diff_files_summary = /** @type {(inputs: Mod_Knowledge_Diff_Files_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`追加 ${i?.added}、削除 ${i?.removed}、変更 ${i?.changed}、変更なし ${i?.unchanged}。`)
};

/**
* | output |
* | --- |
* | "{added} added, {removed} removed, {changed} changed, {unchanged} unchanged." |
*
* @param {Mod_Knowledge_Diff_Files_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_diff_files_summary = /** @type {((inputs: Mod_Knowledge_Diff_Files_SummaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_Files_SummaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_diff_files_summary(inputs)
	if (locale === "de") return de_mod_knowledge_diff_files_summary(inputs)
	if (locale === "fr") return fr_mod_knowledge_diff_files_summary(inputs)
	if (locale === "it") return it_mod_knowledge_diff_files_summary(inputs)
	if (locale === "nl") return nl_mod_knowledge_diff_files_summary(inputs)
	if (locale === "pl") return pl_mod_knowledge_diff_files_summary(inputs)
	if (locale === "pt") return pt_mod_knowledge_diff_files_summary(inputs)
	if (locale === "ru") return ru_mod_knowledge_diff_files_summary(inputs)
	if (locale === "sv") return sv_mod_knowledge_diff_files_summary(inputs)
	if (locale === "tr") return tr_mod_knowledge_diff_files_summary(inputs)
	if (locale === "zh") return zh_mod_knowledge_diff_files_summary(inputs)
	if (locale === "ja") return ja_mod_knowledge_diff_files_summary(inputs)
	return en_mod_knowledge_diff_files_summary(inputs)
});
