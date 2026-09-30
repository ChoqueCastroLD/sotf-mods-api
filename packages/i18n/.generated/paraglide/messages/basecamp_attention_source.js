/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Attention_SourceInputs */

const en_basecamp_attention_source = /** @type {(inputs: Basecamp_Attention_SourceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: no link to the source code`)
};

const es_basecamp_attention_source = /** @type {(inputs: Basecamp_Attention_SourceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: falta el enlace al código fuente`)
};

const de_basecamp_attention_source = /** @type {(inputs: Basecamp_Attention_SourceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: kein Link zum Quellcode`)
};

const fr_basecamp_attention_source = /** @type {(inputs: Basecamp_Attention_SourceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} : aucun lien vers le code source`)
};

const it_basecamp_attention_source = /** @type {(inputs: Basecamp_Attention_SourceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: manca il link al codice sorgente`)
};

const nl_basecamp_attention_source = /** @type {(inputs: Basecamp_Attention_SourceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: geen link naar de broncode`)
};

const pl_basecamp_attention_source = /** @type {(inputs: Basecamp_Attention_SourceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: brak linku do kodu źródłowego`)
};

const pt_basecamp_attention_source = /** @type {(inputs: Basecamp_Attention_SourceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: sem link para o código-fonte`)
};

const ru_basecamp_attention_source = /** @type {(inputs: Basecamp_Attention_SourceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: нет ссылки на исходный код`)
};

const sv_basecamp_attention_source = /** @type {(inputs: Basecamp_Attention_SourceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: ingen länk till källkoden`)
};

const tr_basecamp_attention_source = /** @type {(inputs: Basecamp_Attention_SourceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}: kaynak koda bağlantı yok`)
};

const zh_basecamp_attention_source = /** @type {(inputs: Basecamp_Attention_SourceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}：缺少源代码链接`)
};

const ja_basecamp_attention_source = /** @type {(inputs: Basecamp_Attention_SourceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}：ソースコードへのリンクがありません`)
};

/**
* | output |
* | --- |
* | "{name}: no link to the source code" |
*
* @param {Basecamp_Attention_SourceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_source = /** @type {((inputs: Basecamp_Attention_SourceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_SourceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_source(inputs)
	if (locale === "de") return de_basecamp_attention_source(inputs)
	if (locale === "fr") return fr_basecamp_attention_source(inputs)
	if (locale === "it") return it_basecamp_attention_source(inputs)
	if (locale === "nl") return nl_basecamp_attention_source(inputs)
	if (locale === "pl") return pl_basecamp_attention_source(inputs)
	if (locale === "pt") return pt_basecamp_attention_source(inputs)
	if (locale === "ru") return ru_basecamp_attention_source(inputs)
	if (locale === "sv") return sv_basecamp_attention_source(inputs)
	if (locale === "tr") return tr_basecamp_attention_source(inputs)
	if (locale === "zh") return zh_basecamp_attention_source(inputs)
	if (locale === "ja") return ja_basecamp_attention_source(inputs)
	return en_basecamp_attention_source(inputs)
});
