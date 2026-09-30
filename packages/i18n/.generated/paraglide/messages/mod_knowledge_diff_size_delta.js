/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ delta: NonNullable<unknown> }} Mod_Knowledge_Diff_Size_DeltaInputs */

const en_mod_knowledge_diff_size_delta = /** @type {(inputs: Mod_Knowledge_Diff_Size_DeltaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download size change: ${i?.delta}`)
};

const es_mod_knowledge_diff_size_delta = /** @type {(inputs: Mod_Knowledge_Diff_Size_DeltaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cambio en el tamaño de descarga: ${i?.delta}`)
};

const de_mod_knowledge_diff_size_delta = /** @type {(inputs: Mod_Knowledge_Diff_Size_DeltaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Änderung der Downloadgröße: ${i?.delta}`)
};

const fr_mod_knowledge_diff_size_delta = /** @type {(inputs: Mod_Knowledge_Diff_Size_DeltaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Variation de la taille du téléchargement : ${i?.delta}`)
};

const it_mod_knowledge_diff_size_delta = /** @type {(inputs: Mod_Knowledge_Diff_Size_DeltaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Variazione della dimensione del download: ${i?.delta}`)
};

const nl_mod_knowledge_diff_size_delta = /** @type {(inputs: Mod_Knowledge_Diff_Size_DeltaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wijziging in downloadgrootte: ${i?.delta}`)
};

const pl_mod_knowledge_diff_size_delta = /** @type {(inputs: Mod_Knowledge_Diff_Size_DeltaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zmiana rozmiaru pobierania: ${i?.delta}`)
};

const pt_mod_knowledge_diff_size_delta = /** @type {(inputs: Mod_Knowledge_Diff_Size_DeltaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mudança no tamanho do download: ${i?.delta}`)
};

const ru_mod_knowledge_diff_size_delta = /** @type {(inputs: Mod_Knowledge_Diff_Size_DeltaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Изменение размера загрузки: ${i?.delta}`)
};

const sv_mod_knowledge_diff_size_delta = /** @type {(inputs: Mod_Knowledge_Diff_Size_DeltaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ändring av nedladdningsstorlek: ${i?.delta}`)
};

const tr_mod_knowledge_diff_size_delta = /** @type {(inputs: Mod_Knowledge_Diff_Size_DeltaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`İndirme boyutu değişimi: ${i?.delta}`)
};

const zh_mod_knowledge_diff_size_delta = /** @type {(inputs: Mod_Knowledge_Diff_Size_DeltaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`下载大小变化：${i?.delta}`)
};

const ja_mod_knowledge_diff_size_delta = /** @type {(inputs: Mod_Knowledge_Diff_Size_DeltaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ダウンロードサイズの変化：${i?.delta}`)
};

/**
* | output |
* | --- |
* | "Download size change: {delta}" |
*
* @param {Mod_Knowledge_Diff_Size_DeltaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_diff_size_delta = /** @type {((inputs: Mod_Knowledge_Diff_Size_DeltaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_Size_DeltaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_diff_size_delta(inputs)
	if (locale === "de") return de_mod_knowledge_diff_size_delta(inputs)
	if (locale === "fr") return fr_mod_knowledge_diff_size_delta(inputs)
	if (locale === "it") return it_mod_knowledge_diff_size_delta(inputs)
	if (locale === "nl") return nl_mod_knowledge_diff_size_delta(inputs)
	if (locale === "pl") return pl_mod_knowledge_diff_size_delta(inputs)
	if (locale === "pt") return pt_mod_knowledge_diff_size_delta(inputs)
	if (locale === "ru") return ru_mod_knowledge_diff_size_delta(inputs)
	if (locale === "sv") return sv_mod_knowledge_diff_size_delta(inputs)
	if (locale === "tr") return tr_mod_knowledge_diff_size_delta(inputs)
	if (locale === "zh") return zh_mod_knowledge_diff_size_delta(inputs)
	if (locale === "ja") return ja_mod_knowledge_diff_size_delta(inputs)
	return en_mod_knowledge_diff_size_delta(inputs)
});
