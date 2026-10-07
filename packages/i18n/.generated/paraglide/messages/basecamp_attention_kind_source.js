/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Kind_SourceInputs */

const en_basecamp_attention_kind_source = /** @type {(inputs: Basecamp_Attention_Kind_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Source link`)
};

const es_basecamp_attention_kind_source = /** @type {(inputs: Basecamp_Attention_Kind_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlace al código`)
};

const de_basecamp_attention_kind_source = /** @type {(inputs: Basecamp_Attention_Kind_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelltext-Link`)
};

const fr_basecamp_attention_kind_source = /** @type {(inputs: Basecamp_Attention_Kind_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lien du code source`)
};

const it_basecamp_attention_kind_source = /** @type {(inputs: Basecamp_Attention_Kind_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link al codice`)
};

const nl_basecamp_attention_kind_source = /** @type {(inputs: Basecamp_Attention_Kind_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link naar de broncode`)
};

const pl_basecamp_attention_kind_source = /** @type {(inputs: Basecamp_Attention_Kind_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link do kodu źródłowego`)
};

const pt_basecamp_attention_kind_source = /** @type {(inputs: Basecamp_Attention_Kind_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link do código-fonte`)
};

const ru_basecamp_attention_kind_source = /** @type {(inputs: Basecamp_Attention_Kind_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылка на исходники`)
};

const sv_basecamp_attention_kind_source = /** @type {(inputs: Basecamp_Attention_Kind_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länk till källkod`)
};

const tr_basecamp_attention_kind_source = /** @type {(inputs: Basecamp_Attention_Kind_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaynak bağlantısı`)
};

const zh_basecamp_attention_kind_source = /** @type {(inputs: Basecamp_Attention_Kind_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`源码链接`)
};

const ja_basecamp_attention_kind_source = /** @type {(inputs: Basecamp_Attention_Kind_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ソースリンク`)
};

/**
* | output |
* | --- |
* | "Source link" |
*
* @param {Basecamp_Attention_Kind_SourceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_kind_source = /** @type {((inputs?: Basecamp_Attention_Kind_SourceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Kind_SourceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_kind_source(inputs)
	if (locale === "de") return de_basecamp_attention_kind_source(inputs)
	if (locale === "fr") return fr_basecamp_attention_kind_source(inputs)
	if (locale === "it") return it_basecamp_attention_kind_source(inputs)
	if (locale === "nl") return nl_basecamp_attention_kind_source(inputs)
	if (locale === "pl") return pl_basecamp_attention_kind_source(inputs)
	if (locale === "pt") return pt_basecamp_attention_kind_source(inputs)
	if (locale === "ru") return ru_basecamp_attention_kind_source(inputs)
	if (locale === "sv") return sv_basecamp_attention_kind_source(inputs)
	if (locale === "tr") return tr_basecamp_attention_kind_source(inputs)
	if (locale === "zh") return zh_basecamp_attention_kind_source(inputs)
	if (locale === "ja") return ja_basecamp_attention_kind_source(inputs)
	return en_basecamp_attention_kind_source(inputs)
});
