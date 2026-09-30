/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Category_Intro_MiscInputs */

const en_explore_category_intro_misc = /** @type {(inputs: Explore_Category_Intro_MiscInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods that don’t fit anywhere else: experiments, utilities and one-off ideas.`)
};

const es_explore_category_intro_misc = /** @type {(inputs: Explore_Category_Intro_MiscInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods que no encajan en ninguna otra parte: experimentos, utilidades e ideas sueltas.`)
};

const de_explore_category_intro_misc = /** @type {(inputs: Explore_Category_Intro_MiscInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods, die nirgendwo sonst hineinpassen: Experimente, Hilfsmittel und Einzelideen.`)
};

const fr_explore_category_intro_misc = /** @type {(inputs: Explore_Category_Intro_MiscInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les mods qui ne rentrent nulle part ailleurs : expériences, utilitaires et idées isolées.`)
};

const it_explore_category_intro_misc = /** @type {(inputs: Explore_Category_Intro_MiscInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod che non rientrano altrove: esperimenti, utilità e idee singole.`)
};

const nl_explore_category_intro_misc = /** @type {(inputs: Explore_Category_Intro_MiscInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods die nergens anders passen: experimenten, hulpmiddelen en losse ideeën.`)
};

const pl_explore_category_intro_misc = /** @type {(inputs: Explore_Category_Intro_MiscInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody, które nie pasują nigdzie indziej: eksperymenty, narzędzia i pojedyncze pomysły.`)
};

const pt_explore_category_intro_misc = /** @type {(inputs: Explore_Category_Intro_MiscInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods que não se encaixam em outro lugar: experimentos, utilitários e ideias avulsas.`)
};

const ru_explore_category_intro_misc = /** @type {(inputs: Explore_Category_Intro_MiscInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды, которые не подходят ни в одну категорию: эксперименты, утилиты и отдельные идеи.`)
};

const sv_explore_category_intro_misc = /** @type {(inputs: Explore_Category_Intro_MiscInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar som inte passar någon annanstans: experiment, verktyg och enstaka idéer.`)
};

const tr_explore_category_intro_misc = /** @type {(inputs: Explore_Category_Intro_MiscInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başka hiçbir yere uymayan modlar: deneyler, araçlar ve tekil fikirler.`)
};

const zh_explore_category_intro_misc = /** @type {(inputs: Explore_Category_Intro_MiscInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法归入其他分类的模组：实验性作品、实用工具和零散创意。`)
};

const ja_explore_category_intro_misc = /** @type {(inputs: Explore_Category_Intro_MiscInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほかのどこにも当てはまらない MOD。実験作、ユーティリティ、単発のアイデア。`)
};

/**
* | output |
* | --- |
* | "Mods that don’t fit anywhere else: experiments, utilities and one-off ideas." |
*
* @param {Explore_Category_Intro_MiscInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_category_intro_misc = /** @type {((inputs?: Explore_Category_Intro_MiscInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_MiscInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_category_intro_misc(inputs)
	if (locale === "de") return de_explore_category_intro_misc(inputs)
	if (locale === "fr") return fr_explore_category_intro_misc(inputs)
	if (locale === "it") return it_explore_category_intro_misc(inputs)
	if (locale === "nl") return nl_explore_category_intro_misc(inputs)
	if (locale === "pl") return pl_explore_category_intro_misc(inputs)
	if (locale === "pt") return pt_explore_category_intro_misc(inputs)
	if (locale === "ru") return ru_explore_category_intro_misc(inputs)
	if (locale === "sv") return sv_explore_category_intro_misc(inputs)
	if (locale === "tr") return tr_explore_category_intro_misc(inputs)
	if (locale === "zh") return zh_explore_category_intro_misc(inputs)
	if (locale === "ja") return ja_explore_category_intro_misc(inputs)
	return en_explore_category_intro_misc(inputs)
});
