/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Fallback_BindingInputs */

const en_content_fallback_binding = /** @type {(inputs: Content_Fallback_BindingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For legal texts, the English version is the one that applies.`)
};

const es_content_fallback_binding = /** @type {(inputs: Content_Fallback_BindingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En los textos legales, la versión en inglés es la que se aplica.`)
};

const de_content_fallback_binding = /** @type {(inputs: Content_Fallback_BindingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bei rechtlichen Texten gilt die englische Fassung.`)
};

const fr_content_fallback_binding = /** @type {(inputs: Content_Fallback_BindingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pour les textes juridiques, c’est la version anglaise qui s’applique.`)
};

const it_content_fallback_binding = /** @type {(inputs: Content_Fallback_BindingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per i testi legali vale la versione inglese.`)
};

const nl_content_fallback_binding = /** @type {(inputs: Content_Fallback_BindingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor juridische teksten geldt de Engelse versie.`)
};

const pl_content_fallback_binding = /** @type {(inputs: Content_Fallback_BindingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W przypadku tekstów prawnych obowiązuje wersja angielska.`)
};

const pt_content_fallback_binding = /** @type {(inputs: Content_Fallback_BindingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nos textos jurídicos, vale a versão em inglês.`)
};

const ru_content_fallback_binding = /** @type {(inputs: Content_Fallback_BindingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для юридических текстов действует английская версия.`)
};

const sv_content_fallback_binding = /** @type {(inputs: Content_Fallback_BindingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För juridiska texter gäller den engelska versionen.`)
};

const tr_content_fallback_binding = /** @type {(inputs: Content_Fallback_BindingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hukuki metinlerde İngilizce sürüm geçerlidir.`)
};

const zh_content_fallback_binding = /** @type {(inputs: Content_Fallback_BindingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`法律文本以英文版为准。`)
};

const ja_content_fallback_binding = /** @type {(inputs: Content_Fallback_BindingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`法的文書は英語版が優先されます。`)
};

/**
* | output |
* | --- |
* | "For legal texts, the English version is the one that applies." |
*
* @param {Content_Fallback_BindingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_fallback_binding = /** @type {((inputs?: Content_Fallback_BindingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Fallback_BindingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_fallback_binding(inputs)
	if (locale === "de") return de_content_fallback_binding(inputs)
	if (locale === "fr") return fr_content_fallback_binding(inputs)
	if (locale === "it") return it_content_fallback_binding(inputs)
	if (locale === "nl") return nl_content_fallback_binding(inputs)
	if (locale === "pl") return pl_content_fallback_binding(inputs)
	if (locale === "pt") return pt_content_fallback_binding(inputs)
	if (locale === "ru") return ru_content_fallback_binding(inputs)
	if (locale === "sv") return sv_content_fallback_binding(inputs)
	if (locale === "tr") return tr_content_fallback_binding(inputs)
	if (locale === "zh") return zh_content_fallback_binding(inputs)
	if (locale === "ja") return ja_content_fallback_binding(inputs)
	return en_content_fallback_binding(inputs)
});
