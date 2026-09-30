/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_TitleInputs */

const en_basecamp_attention_title = /** @type {(inputs: Basecamp_Attention_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Needs attention`)
};

const es_basecamp_attention_title = /** @type {(inputs: Basecamp_Attention_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Necesita atención`)
};

const de_basecamp_attention_title = /** @type {(inputs: Basecamp_Attention_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Braucht Aufmerksamkeit`)
};

const fr_basecamp_attention_title = /** @type {(inputs: Basecamp_Attention_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À surveiller`)
};

const it_basecamp_attention_title = /** @type {(inputs: Basecamp_Attention_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richiede attenzione`)
};

const nl_basecamp_attention_title = /** @type {(inputs: Basecamp_Attention_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vraagt aandacht`)
};

const pl_basecamp_attention_title = /** @type {(inputs: Basecamp_Attention_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wymaga uwagi`)
};

const pt_basecamp_attention_title = /** @type {(inputs: Basecamp_Attention_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Precisa de atenção`)
};

const ru_basecamp_attention_title = /** @type {(inputs: Basecamp_Attention_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Требует внимания`)
};

const sv_basecamp_attention_title = /** @type {(inputs: Basecamp_Attention_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Behöver uppmärksamhet`)
};

const tr_basecamp_attention_title = /** @type {(inputs: Basecamp_Attention_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlgi bekliyor`)
};

const zh_basecamp_attention_title = /** @type {(inputs: Basecamp_Attention_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`需要处理`)
};

const ja_basecamp_attention_title = /** @type {(inputs: Basecamp_Attention_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`対応が必要`)
};

/**
* | output |
* | --- |
* | "Needs attention" |
*
* @param {Basecamp_Attention_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_title = /** @type {((inputs?: Basecamp_Attention_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_title(inputs)
	if (locale === "de") return de_basecamp_attention_title(inputs)
	if (locale === "fr") return fr_basecamp_attention_title(inputs)
	if (locale === "it") return it_basecamp_attention_title(inputs)
	if (locale === "nl") return nl_basecamp_attention_title(inputs)
	if (locale === "pl") return pl_basecamp_attention_title(inputs)
	if (locale === "pt") return pt_basecamp_attention_title(inputs)
	if (locale === "ru") return ru_basecamp_attention_title(inputs)
	if (locale === "sv") return sv_basecamp_attention_title(inputs)
	if (locale === "tr") return tr_basecamp_attention_title(inputs)
	if (locale === "zh") return zh_basecamp_attention_title(inputs)
	if (locale === "ja") return ja_basecamp_attention_title(inputs)
	return en_basecamp_attention_title(inputs)
});
