/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Mod_Knowledge_Diff_AddedInputs */

const en_mod_knowledge_diff_added = /** @type {(inputs: Mod_Knowledge_Diff_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Added files (${i?.count})`)
};

const es_mod_knowledge_diff_added = /** @type {(inputs: Mod_Knowledge_Diff_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Archivos añadidos (${i?.count})`)
};

const de_mod_knowledge_diff_added = /** @type {(inputs: Mod_Knowledge_Diff_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hinzugefügte Dateien (${i?.count})`)
};

const fr_mod_knowledge_diff_added = /** @type {(inputs: Mod_Knowledge_Diff_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fichiers ajoutés (${i?.count})`)
};

const it_mod_knowledge_diff_added = /** @type {(inputs: Mod_Knowledge_Diff_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`File aggiunti (${i?.count})`)
};

const nl_mod_knowledge_diff_added = /** @type {(inputs: Mod_Knowledge_Diff_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Toegevoegde bestanden (${i?.count})`)
};

const pl_mod_knowledge_diff_added = /** @type {(inputs: Mod_Knowledge_Diff_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dodane pliki (${i?.count})`)
};

const pt_mod_knowledge_diff_added = /** @type {(inputs: Mod_Knowledge_Diff_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Arquivos adicionados (${i?.count})`)
};

const ru_mod_knowledge_diff_added = /** @type {(inputs: Mod_Knowledge_Diff_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Добавленные файлы (${i?.count})`)
};

const sv_mod_knowledge_diff_added = /** @type {(inputs: Mod_Knowledge_Diff_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tillagda filer (${i?.count})`)
};

const tr_mod_knowledge_diff_added = /** @type {(inputs: Mod_Knowledge_Diff_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Eklenen dosyalar (${i?.count})`)
};

const zh_mod_knowledge_diff_added = /** @type {(inputs: Mod_Knowledge_Diff_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`新增文件（${i?.count}）`)
};

const ja_mod_knowledge_diff_added = /** @type {(inputs: Mod_Knowledge_Diff_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`追加されたファイル（${i?.count}）`)
};

/**
* | output |
* | --- |
* | "Added files ({count})" |
*
* @param {Mod_Knowledge_Diff_AddedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_diff_added = /** @type {((inputs: Mod_Knowledge_Diff_AddedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_AddedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_diff_added(inputs)
	if (locale === "de") return de_mod_knowledge_diff_added(inputs)
	if (locale === "fr") return fr_mod_knowledge_diff_added(inputs)
	if (locale === "it") return it_mod_knowledge_diff_added(inputs)
	if (locale === "nl") return nl_mod_knowledge_diff_added(inputs)
	if (locale === "pl") return pl_mod_knowledge_diff_added(inputs)
	if (locale === "pt") return pt_mod_knowledge_diff_added(inputs)
	if (locale === "ru") return ru_mod_knowledge_diff_added(inputs)
	if (locale === "sv") return sv_mod_knowledge_diff_added(inputs)
	if (locale === "tr") return tr_mod_knowledge_diff_added(inputs)
	if (locale === "zh") return zh_mod_knowledge_diff_added(inputs)
	if (locale === "ja") return ja_mod_knowledge_diff_added(inputs)
	return en_mod_knowledge_diff_added(inputs)
});
