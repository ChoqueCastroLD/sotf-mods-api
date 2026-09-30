/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Mod_Knowledge_Diff_ChangedInputs */

const en_mod_knowledge_diff_changed = /** @type {(inputs: Mod_Knowledge_Diff_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Changed files (${i?.count})`)
};

const es_mod_knowledge_diff_changed = /** @type {(inputs: Mod_Knowledge_Diff_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Archivos modificados (${i?.count})`)
};

const de_mod_knowledge_diff_changed = /** @type {(inputs: Mod_Knowledge_Diff_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geänderte Dateien (${i?.count})`)
};

const fr_mod_knowledge_diff_changed = /** @type {(inputs: Mod_Knowledge_Diff_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fichiers modifiés (${i?.count})`)
};

const it_mod_knowledge_diff_changed = /** @type {(inputs: Mod_Knowledge_Diff_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`File modificati (${i?.count})`)
};

const nl_mod_knowledge_diff_changed = /** @type {(inputs: Mod_Knowledge_Diff_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gewijzigde bestanden (${i?.count})`)
};

const pl_mod_knowledge_diff_changed = /** @type {(inputs: Mod_Knowledge_Diff_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zmienione pliki (${i?.count})`)
};

const pt_mod_knowledge_diff_changed = /** @type {(inputs: Mod_Knowledge_Diff_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Arquivos alterados (${i?.count})`)
};

const ru_mod_knowledge_diff_changed = /** @type {(inputs: Mod_Knowledge_Diff_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Изменённые файлы (${i?.count})`)
};

const sv_mod_knowledge_diff_changed = /** @type {(inputs: Mod_Knowledge_Diff_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ändrade filer (${i?.count})`)
};

const tr_mod_knowledge_diff_changed = /** @type {(inputs: Mod_Knowledge_Diff_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Değişen dosyalar (${i?.count})`)
};

const zh_mod_knowledge_diff_changed = /** @type {(inputs: Mod_Knowledge_Diff_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`修改的文件（${i?.count}）`)
};

const ja_mod_knowledge_diff_changed = /** @type {(inputs: Mod_Knowledge_Diff_ChangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`変更されたファイル（${i?.count}）`)
};

/**
* | output |
* | --- |
* | "Changed files ({count})" |
*
* @param {Mod_Knowledge_Diff_ChangedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_diff_changed = /** @type {((inputs: Mod_Knowledge_Diff_ChangedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_ChangedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_diff_changed(inputs)
	if (locale === "de") return de_mod_knowledge_diff_changed(inputs)
	if (locale === "fr") return fr_mod_knowledge_diff_changed(inputs)
	if (locale === "it") return it_mod_knowledge_diff_changed(inputs)
	if (locale === "nl") return nl_mod_knowledge_diff_changed(inputs)
	if (locale === "pl") return pl_mod_knowledge_diff_changed(inputs)
	if (locale === "pt") return pt_mod_knowledge_diff_changed(inputs)
	if (locale === "ru") return ru_mod_knowledge_diff_changed(inputs)
	if (locale === "sv") return sv_mod_knowledge_diff_changed(inputs)
	if (locale === "tr") return tr_mod_knowledge_diff_changed(inputs)
	if (locale === "zh") return zh_mod_knowledge_diff_changed(inputs)
	if (locale === "ja") return ja_mod_knowledge_diff_changed(inputs)
	return en_mod_knowledge_diff_changed(inputs)
});
