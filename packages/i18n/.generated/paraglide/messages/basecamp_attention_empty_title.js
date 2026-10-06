/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Empty_TitleInputs */

const en_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing needs attention`)
};

const es_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada requiere atención`)
};

const de_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nichts erfordert Aufmerksamkeit`)
};

const fr_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien à signaler`)
};

const it_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niente richiede attenzione`)
};

const nl_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niets vraagt aandacht`)
};

const pl_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nic nie wymaga uwagi`)
};

const pt_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada precisa de atenção`)
};

const ru_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ничего не требует внимания`)
};

const sv_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget kräver uppmärksamhet`)
};

const tr_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlgilenilecek bir şey yok`)
};

const zh_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有需要处理的事项`)
};

const ja_basecamp_attention_empty_title = /** @type {(inputs: Basecamp_Attention_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`対応が必要なものはありません`)
};

/**
* | output |
* | --- |
* | "Nothing needs attention" |
*
* @param {Basecamp_Attention_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_empty_title = /** @type {((inputs?: Basecamp_Attention_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_empty_title(inputs)
	if (locale === "de") return de_basecamp_attention_empty_title(inputs)
	if (locale === "fr") return fr_basecamp_attention_empty_title(inputs)
	if (locale === "it") return it_basecamp_attention_empty_title(inputs)
	if (locale === "nl") return nl_basecamp_attention_empty_title(inputs)
	if (locale === "pl") return pl_basecamp_attention_empty_title(inputs)
	if (locale === "pt") return pt_basecamp_attention_empty_title(inputs)
	if (locale === "ru") return ru_basecamp_attention_empty_title(inputs)
	if (locale === "sv") return sv_basecamp_attention_empty_title(inputs)
	if (locale === "tr") return tr_basecamp_attention_empty_title(inputs)
	if (locale === "zh") return zh_basecamp_attention_empty_title(inputs)
	if (locale === "ja") return ja_basecamp_attention_empty_title(inputs)
	return en_basecamp_attention_empty_title(inputs)
});
