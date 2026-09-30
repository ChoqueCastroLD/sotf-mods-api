/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Sort_AttentionInputs */

const en_basecamp_mods_sort_attention = /** @type {(inputs: Basecamp_Mods_Sort_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Needs attention`)
};

const es_basecamp_mods_sort_attention = /** @type {(inputs: Basecamp_Mods_Sort_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Necesita atención`)
};

const de_basecamp_mods_sort_attention = /** @type {(inputs: Basecamp_Mods_Sort_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Braucht Aufmerksamkeit`)
};

const fr_basecamp_mods_sort_attention = /** @type {(inputs: Basecamp_Mods_Sort_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À surveiller`)
};

const it_basecamp_mods_sort_attention = /** @type {(inputs: Basecamp_Mods_Sort_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richiede attenzione`)
};

const nl_basecamp_mods_sort_attention = /** @type {(inputs: Basecamp_Mods_Sort_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vraagt aandacht`)
};

const pl_basecamp_mods_sort_attention = /** @type {(inputs: Basecamp_Mods_Sort_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wymaga uwagi`)
};

const pt_basecamp_mods_sort_attention = /** @type {(inputs: Basecamp_Mods_Sort_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Precisa de atenção`)
};

const ru_basecamp_mods_sort_attention = /** @type {(inputs: Basecamp_Mods_Sort_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Требующим внимания`)
};

const sv_basecamp_mods_sort_attention = /** @type {(inputs: Basecamp_Mods_Sort_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Behöver uppmärksamhet`)
};

const tr_basecamp_mods_sort_attention = /** @type {(inputs: Basecamp_Mods_Sort_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlgi bekleyenler`)
};

const zh_basecamp_mods_sort_attention = /** @type {(inputs: Basecamp_Mods_Sort_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`需要处理`)
};

const ja_basecamp_mods_sort_attention = /** @type {(inputs: Basecamp_Mods_Sort_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`対応が必要`)
};

/**
* | output |
* | --- |
* | "Needs attention" |
*
* @param {Basecamp_Mods_Sort_AttentionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_sort_attention = /** @type {((inputs?: Basecamp_Mods_Sort_AttentionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Sort_AttentionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_sort_attention(inputs)
	if (locale === "de") return de_basecamp_mods_sort_attention(inputs)
	if (locale === "fr") return fr_basecamp_mods_sort_attention(inputs)
	if (locale === "it") return it_basecamp_mods_sort_attention(inputs)
	if (locale === "nl") return nl_basecamp_mods_sort_attention(inputs)
	if (locale === "pl") return pl_basecamp_mods_sort_attention(inputs)
	if (locale === "pt") return pt_basecamp_mods_sort_attention(inputs)
	if (locale === "ru") return ru_basecamp_mods_sort_attention(inputs)
	if (locale === "sv") return sv_basecamp_mods_sort_attention(inputs)
	if (locale === "tr") return tr_basecamp_mods_sort_attention(inputs)
	if (locale === "zh") return zh_basecamp_mods_sort_attention(inputs)
	if (locale === "ja") return ja_basecamp_mods_sort_attention(inputs)
	return en_basecamp_mods_sort_attention(inputs)
});
