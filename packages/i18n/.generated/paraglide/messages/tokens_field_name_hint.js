/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Field_Name_HintInputs */

const en_tokens_field_name_hint = /** @type {(inputs: Tokens_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For example, the tool that will use it.`)
};

const es_tokens_field_name_hint = /** @type {(inputs: Tokens_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por ejemplo, la herramienta que lo usará.`)
};

const de_tokens_field_name_hint = /** @type {(inputs: Tokens_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Beispiel das Tool, das ihn verwendet.`)
};

const fr_tokens_field_name_hint = /** @type {(inputs: Tokens_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Par exemple, l’outil qui l’utilisera.`)
};

const it_tokens_field_name_hint = /** @type {(inputs: Tokens_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad esempio, lo strumento che lo userà.`)
};

const nl_tokens_field_name_hint = /** @type {(inputs: Tokens_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bijvoorbeeld de tool die het gaat gebruiken.`)
};

const pl_tokens_field_name_hint = /** @type {(inputs: Tokens_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na przykład narzędzie, które będzie go używać.`)
};

const pt_tokens_field_name_hint = /** @type {(inputs: Tokens_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por exemplo, a ferramenta que vai usá-lo.`)
};

const ru_tokens_field_name_hint = /** @type {(inputs: Tokens_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Например, инструмент, который будет его использовать.`)
};

const sv_tokens_field_name_hint = /** @type {(inputs: Tokens_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Till exempel verktyget som ska använda den.`)
};

const tr_tokens_field_name_hint = /** @type {(inputs: Tokens_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Örneğin, onu kullanacak araç.`)
};

const zh_tokens_field_name_hint = /** @type {(inputs: Tokens_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如使用该令牌的工具。`)
};

const ja_tokens_field_name_hint = /** @type {(inputs: Tokens_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例：このトークンを使うツール名。`)
};

/**
* | output |
* | --- |
* | "For example, the tool that will use it." |
*
* @param {Tokens_Field_Name_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_field_name_hint = /** @type {((inputs?: Tokens_Field_Name_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Field_Name_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_field_name_hint(inputs)
	if (locale === "de") return de_tokens_field_name_hint(inputs)
	if (locale === "fr") return fr_tokens_field_name_hint(inputs)
	if (locale === "it") return it_tokens_field_name_hint(inputs)
	if (locale === "nl") return nl_tokens_field_name_hint(inputs)
	if (locale === "pl") return pl_tokens_field_name_hint(inputs)
	if (locale === "pt") return pt_tokens_field_name_hint(inputs)
	if (locale === "ru") return ru_tokens_field_name_hint(inputs)
	if (locale === "sv") return sv_tokens_field_name_hint(inputs)
	if (locale === "tr") return tr_tokens_field_name_hint(inputs)
	if (locale === "zh") return zh_tokens_field_name_hint(inputs)
	if (locale === "ja") return ja_tokens_field_name_hint(inputs)
	return en_tokens_field_name_hint(inputs)
});
