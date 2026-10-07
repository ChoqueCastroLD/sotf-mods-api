/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_None_HereInputs */

const en_basecamp_attention_none_here = /** @type {(inputs: Basecamp_Attention_None_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing in this group.`)
};

const es_basecamp_attention_none_here = /** @type {(inputs: Basecamp_Attention_None_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay nada en este grupo.`)
};

const de_basecamp_attention_none_here = /** @type {(inputs: Basecamp_Attention_None_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nichts in dieser Gruppe.`)
};

const fr_basecamp_attention_none_here = /** @type {(inputs: Basecamp_Attention_None_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien dans ce groupe.`)
};

const it_basecamp_attention_none_here = /** @type {(inputs: Basecamp_Attention_None_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niente in questo gruppo.`)
};

const nl_basecamp_attention_none_here = /** @type {(inputs: Basecamp_Attention_None_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niets in deze groep.`)
};

const pl_basecamp_attention_none_here = /** @type {(inputs: Basecamp_Attention_None_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nic w tej grupie.`)
};

const pt_basecamp_attention_none_here = /** @type {(inputs: Basecamp_Attention_None_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada neste grupo.`)
};

const ru_basecamp_attention_none_here = /** @type {(inputs: Basecamp_Attention_None_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В этой группе ничего нет.`)
};

const sv_basecamp_attention_none_here = /** @type {(inputs: Basecamp_Attention_None_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget i den här gruppen.`)
};

const tr_basecamp_attention_none_here = /** @type {(inputs: Basecamp_Attention_None_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu grupta bir şey yok.`)
};

const zh_basecamp_attention_none_here = /** @type {(inputs: Basecamp_Attention_None_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此分组中没有内容。`)
};

const ja_basecamp_attention_none_here = /** @type {(inputs: Basecamp_Attention_None_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このグループには何もありません。`)
};

/**
* | output |
* | --- |
* | "Nothing in this group." |
*
* @param {Basecamp_Attention_None_HereInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_none_here = /** @type {((inputs?: Basecamp_Attention_None_HereInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_None_HereInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_none_here(inputs)
	if (locale === "de") return de_basecamp_attention_none_here(inputs)
	if (locale === "fr") return fr_basecamp_attention_none_here(inputs)
	if (locale === "it") return it_basecamp_attention_none_here(inputs)
	if (locale === "nl") return nl_basecamp_attention_none_here(inputs)
	if (locale === "pl") return pl_basecamp_attention_none_here(inputs)
	if (locale === "pt") return pt_basecamp_attention_none_here(inputs)
	if (locale === "ru") return ru_basecamp_attention_none_here(inputs)
	if (locale === "sv") return sv_basecamp_attention_none_here(inputs)
	if (locale === "tr") return tr_basecamp_attention_none_here(inputs)
	if (locale === "zh") return zh_basecamp_attention_none_here(inputs)
	if (locale === "ja") return ja_basecamp_attention_none_here(inputs)
	return en_basecamp_attention_none_here(inputs)
});
