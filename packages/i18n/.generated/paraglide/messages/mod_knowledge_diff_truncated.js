/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Mod_Knowledge_Diff_TruncatedInputs */

const en_mod_knowledge_diff_truncated = /** @type {(inputs: Mod_Knowledge_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The lists show the first ${i?.max} files of each group.`)
};

const es_mod_knowledge_diff_truncated = /** @type {(inputs: Mod_Knowledge_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Las listas muestran los primeros ${i?.max} archivos de cada grupo.`)
};

const de_mod_knowledge_diff_truncated = /** @type {(inputs: Mod_Knowledge_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die Listen zeigen die ersten ${i?.max} Dateien jeder Gruppe.`)
};

const fr_mod_knowledge_diff_truncated = /** @type {(inputs: Mod_Knowledge_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Les listes affichent les ${i?.max} premiers fichiers de chaque groupe.`)
};

const it_mod_knowledge_diff_truncated = /** @type {(inputs: Mod_Knowledge_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gli elenchi mostrano i primi ${i?.max} file di ogni gruppo.`)
};

const nl_mod_knowledge_diff_truncated = /** @type {(inputs: Mod_Knowledge_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De lijsten tonen de eerste ${i?.max} bestanden van elke groep.`)
};

const pl_mod_knowledge_diff_truncated = /** @type {(inputs: Mod_Knowledge_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Listy pokazują pierwsze ${i?.max} plików z każdej grupy.`)
};

const pt_mod_knowledge_diff_truncated = /** @type {(inputs: Mod_Knowledge_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`As listas mostram os primeiros ${i?.max} arquivos de cada grupo.`)
};

const ru_mod_knowledge_diff_truncated = /** @type {(inputs: Mod_Knowledge_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`В списках показаны первые ${i?.max} файлов каждой группы.`)
};

const sv_mod_knowledge_diff_truncated = /** @type {(inputs: Mod_Knowledge_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Listorna visar de första ${i?.max} filerna i varje grupp.`)
};

const tr_mod_knowledge_diff_truncated = /** @type {(inputs: Mod_Knowledge_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Listeler her grubun ilk ${i?.max} dosyasını gösterir.`)
};

const zh_mod_knowledge_diff_truncated = /** @type {(inputs: Mod_Knowledge_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`每组列表仅显示前 ${i?.max} 个文件。`)
};

const ja_mod_knowledge_diff_truncated = /** @type {(inputs: Mod_Knowledge_Diff_TruncatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`各リストには先頭の ${i?.max} 件のみ表示しています。`)
};

/**
* | output |
* | --- |
* | "The lists show the first {max} files of each group." |
*
* @param {Mod_Knowledge_Diff_TruncatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_diff_truncated = /** @type {((inputs: Mod_Knowledge_Diff_TruncatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_TruncatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_diff_truncated(inputs)
	if (locale === "de") return de_mod_knowledge_diff_truncated(inputs)
	if (locale === "fr") return fr_mod_knowledge_diff_truncated(inputs)
	if (locale === "it") return it_mod_knowledge_diff_truncated(inputs)
	if (locale === "nl") return nl_mod_knowledge_diff_truncated(inputs)
	if (locale === "pl") return pl_mod_knowledge_diff_truncated(inputs)
	if (locale === "pt") return pt_mod_knowledge_diff_truncated(inputs)
	if (locale === "ru") return ru_mod_knowledge_diff_truncated(inputs)
	if (locale === "sv") return sv_mod_knowledge_diff_truncated(inputs)
	if (locale === "tr") return tr_mod_knowledge_diff_truncated(inputs)
	if (locale === "zh") return zh_mod_knowledge_diff_truncated(inputs)
	if (locale === "ja") return ja_mod_knowledge_diff_truncated(inputs)
	return en_mod_knowledge_diff_truncated(inputs)
});
