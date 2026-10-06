/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Meta_Default_DescriptionInputs */

const en_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest mods and builds for RedLoader. Free, direct downloads.`)
};

const es_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods y builds de Sons of the Forest para RedLoader. Descargas gratis y directas.`)
};

const de_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods und Builds für Sons of the Forest mit RedLoader. Kostenlose, direkte Downloads.`)
};

const fr_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods et builds pour Sons of the Forest avec RedLoader. Téléchargements gratuits et directs.`)
};

const it_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod e build per Sons of the Forest con RedLoader. Download gratuiti e diretti.`)
};

const nl_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods en builds voor Sons of the Forest met RedLoader. Gratis, directe downloads.`)
};

const pl_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody i buildy do Sons of the Forest dla RedLoadera. Darmowe, bezpośrednie pobieranie.`)
};

const pt_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods e builds de Sons of the Forest para o RedLoader. Downloads grátis e diretos.`)
};

const ru_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды и сборки для Sons of the Forest на RedLoader. Бесплатные прямые загрузки.`)
};

const sv_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar och builds till Sons of the Forest för RedLoader. Gratis, direkta nedladdningar.`)
};

const tr_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader için Sons of the Forest modları ve build’leri. Ücretsiz, doğrudan indirme.`)
};

const zh_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`适用于 RedLoader 的《森林之子》模组与构建。免费直接下载。`)
};

const ja_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader 向けの Sons of the Forest の MOD とビルド。無料で直接ダウンロードできます。`)
};

/**
* | output |
* | --- |
* | "Sons of the Forest mods and builds for RedLoader. Free, direct downloads." |
*
* @param {Meta_Default_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const meta_default_description = /** @type {((inputs?: Meta_Default_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Default_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_meta_default_description(inputs)
	if (locale === "de") return de_meta_default_description(inputs)
	if (locale === "fr") return fr_meta_default_description(inputs)
	if (locale === "it") return it_meta_default_description(inputs)
	if (locale === "nl") return nl_meta_default_description(inputs)
	if (locale === "pl") return pl_meta_default_description(inputs)
	if (locale === "pt") return pt_meta_default_description(inputs)
	if (locale === "ru") return ru_meta_default_description(inputs)
	if (locale === "sv") return sv_meta_default_description(inputs)
	if (locale === "tr") return tr_meta_default_description(inputs)
	if (locale === "zh") return zh_meta_default_description(inputs)
	if (locale === "ja") return ja_meta_default_description(inputs)
	return en_meta_default_description(inputs)
});
