/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Source_ActionInputs */

const en_basecamp_attention_source_action = /** @type {(inputs: Basecamp_Attention_Source_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add the link`)
};

const es_basecamp_attention_source_action = /** @type {(inputs: Basecamp_Attention_Source_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir el enlace`)
};

const de_basecamp_attention_source_action = /** @type {(inputs: Basecamp_Attention_Source_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link hinzufügen`)
};

const fr_basecamp_attention_source_action = /** @type {(inputs: Basecamp_Attention_Source_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter le lien`)
};

const it_basecamp_attention_source_action = /** @type {(inputs: Basecamp_Attention_Source_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi il link`)
};

const nl_basecamp_attention_source_action = /** @type {(inputs: Basecamp_Attention_Source_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link toevoegen`)
};

const pl_basecamp_attention_source_action = /** @type {(inputs: Basecamp_Attention_Source_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj link`)
};

const pt_basecamp_attention_source_action = /** @type {(inputs: Basecamp_Attention_Source_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar o link`)
};

const ru_basecamp_attention_source_action = /** @type {(inputs: Basecamp_Attention_Source_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить ссылку`)
};

const sv_basecamp_attention_source_action = /** @type {(inputs: Basecamp_Attention_Source_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till länken`)
};

const tr_basecamp_attention_source_action = /** @type {(inputs: Basecamp_Attention_Source_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantıyı ekle`)
};

const zh_basecamp_attention_source_action = /** @type {(inputs: Basecamp_Attention_Source_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加链接`)
};

const ja_basecamp_attention_source_action = /** @type {(inputs: Basecamp_Attention_Source_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクを追加`)
};

/**
* | output |
* | --- |
* | "Add the link" |
*
* @param {Basecamp_Attention_Source_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_source_action = /** @type {((inputs?: Basecamp_Attention_Source_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Source_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_source_action(inputs)
	if (locale === "de") return de_basecamp_attention_source_action(inputs)
	if (locale === "fr") return fr_basecamp_attention_source_action(inputs)
	if (locale === "it") return it_basecamp_attention_source_action(inputs)
	if (locale === "nl") return nl_basecamp_attention_source_action(inputs)
	if (locale === "pl") return pl_basecamp_attention_source_action(inputs)
	if (locale === "pt") return pt_basecamp_attention_source_action(inputs)
	if (locale === "ru") return ru_basecamp_attention_source_action(inputs)
	if (locale === "sv") return sv_basecamp_attention_source_action(inputs)
	if (locale === "tr") return tr_basecamp_attention_source_action(inputs)
	if (locale === "zh") return zh_basecamp_attention_source_action(inputs)
	if (locale === "ja") return ja_basecamp_attention_source_action(inputs)
	return en_basecamp_attention_source_action(inputs)
});
