/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Meta_Default_DescriptionInputs */

const en_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The home of Sons of the Forest modding: mods, builds and kits for RedLoader, tested on every patch. Free, direct downloads.`)
};

const es_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El hogar del modding de Sons of the Forest: mods, builds y kits para RedLoader, probados en cada parche. Descargas gratis y directas.`)
};

const de_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Zuhause des Sons-of-the-Forest-Moddings: Mods, Builds und Kits für RedLoader, mit jedem Patch getestet. Kostenlose, direkte Downloads.`)
};

const fr_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La maison du modding de Sons of the Forest : mods, builds et kits pour RedLoader, testés à chaque patch. Téléchargements gratuits et directs.`)
};

const it_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La casa del modding di Sons of the Forest: mod, build e kit per RedLoader, testati a ogni patch. Download gratuiti e diretti.`)
};

const nl_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het thuis van Sons of the Forest-modding: mods, builds en kits voor RedLoader, getest op elke patch. Gratis, directe downloads.`)
};

const pl_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dom moddingu Sons of the Forest: mody, buildy i zestawy dla RedLoadera, testowane przy każdym patchu. Darmowe, bezpośrednie pobieranie.`)
};

const pt_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A casa do modding de Sons of the Forest: mods, builds e kits para o RedLoader, testados a cada patch. Downloads grátis e diretos.`)
};

const ru_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дом моддинга Sons of the Forest: моды, постройки и наборы для RedLoader, проверенные на каждом патче. Бесплатные прямые загрузки.`)
};

const sv_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hemmet för modding av Sons of the Forest: moddar, byggen och kit för RedLoader, testade på varje patch. Gratis, direkta nedladdningar.`)
};

const tr_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest modlamanın evi: RedLoader için her yamada test edilen modlar, yapılar ve kitler. Ücretsiz, doğrudan indirme.`)
};

const zh_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`《森林之子》模组之家：适用于 RedLoader 的模组、建筑与套装，每个补丁都经过测试。免费直接下载。`)
};

const ja_meta_default_description = /** @type {(inputs: Meta_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest の MOD の拠点。RedLoader 向けの MOD・建築・キットをパッチごとにテスト。無料で直接ダウンロードできます。`)
};

/**
* | output |
* | --- |
* | "The home of Sons of the Forest modding: mods, builds and kits for RedLoader, tested on every patch. Free, direct downloads." |
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
