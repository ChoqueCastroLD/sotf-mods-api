/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_IntroInputs */

const en_bundles_intro = /** @type {(inputs: Bundles_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything this mod needs, in one zip.`)
};

const es_bundles_intro = /** @type {(inputs: Bundles_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo lo que necesita este mod, en un solo zip.`)
};

const de_bundles_intro = /** @type {(inputs: Bundles_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles, was dieser Mod braucht, in einer Zip-Datei.`)
};

const fr_bundles_intro = /** @type {(inputs: Bundles_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout ce dont ce mod a besoin, dans un seul zip.`)
};

const it_bundles_intro = /** @type {(inputs: Bundles_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto ciò che serve a questa mod, in un unico zip.`)
};

const nl_bundles_intro = /** @type {(inputs: Bundles_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles wat deze mod nodig heeft, in één zip.`)
};

const pl_bundles_intro = /** @type {(inputs: Bundles_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko, czego potrzebuje ten mod, w jednym pliku zip.`)
};

const pt_bundles_intro = /** @type {(inputs: Bundles_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo o que este mod precisa, num só zip.`)
};

const ru_bundles_intro = /** @type {(inputs: Bundles_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё, что нужно этому моду, в одном zip.`)
};

const sv_bundles_intro = /** @type {(inputs: Bundles_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt som den här modden behöver, i en zip.`)
};

const tr_bundles_intro = /** @type {(inputs: Bundles_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu modun ihtiyaç duyduğu her şey tek bir zip içinde.`)
};

const zh_bundles_intro = /** @type {(inputs: Bundles_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此模组所需的一切，打包在一个 zip 中。`)
};

const ja_bundles_intro = /** @type {(inputs: Bundles_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この MOD に必要なものをすべて 1 つの zip にまとめました。`)
};

/**
* | output |
* | --- |
* | "Everything this mod needs, in one zip." |
*
* @param {Bundles_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_intro = /** @type {((inputs?: Bundles_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_intro(inputs)
	if (locale === "de") return de_bundles_intro(inputs)
	if (locale === "fr") return fr_bundles_intro(inputs)
	if (locale === "it") return it_bundles_intro(inputs)
	if (locale === "nl") return nl_bundles_intro(inputs)
	if (locale === "pl") return pl_bundles_intro(inputs)
	if (locale === "pt") return pt_bundles_intro(inputs)
	if (locale === "ru") return ru_bundles_intro(inputs)
	if (locale === "sv") return sv_bundles_intro(inputs)
	if (locale === "tr") return tr_bundles_intro(inputs)
	if (locale === "zh") return zh_bundles_intro(inputs)
	if (locale === "ja") return ja_bundles_intro(inputs)
	return en_bundles_intro(inputs)
});
