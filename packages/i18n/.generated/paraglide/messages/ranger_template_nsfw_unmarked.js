/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Template_Nsfw_UnmarkedInputs */

const en_ranger_template_nsfw_unmarked = /** @type {(inputs: Ranger_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The mod contains adult content: please mark it as NSFW.`)
};

const es_ranger_template_nsfw_unmarked = /** @type {(inputs: Ranger_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El mod tiene contenido para adultos: márcalo como NSFW.`)
};

const de_ranger_template_nsfw_unmarked = /** @type {(inputs: Ranger_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Mod enthält Inhalte für Erwachsene: Markiere ihn bitte als NSFW.`)
};

const fr_ranger_template_nsfw_unmarked = /** @type {(inputs: Ranger_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mod contient du contenu pour adultes : marquez-le comme NSFW.`)
};

const it_ranger_template_nsfw_unmarked = /** @type {(inputs: Ranger_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La mod contiene contenuti per adulti: segnalala come NSFW.`)
};

const nl_ranger_template_nsfw_unmarked = /** @type {(inputs: Ranger_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mod bevat inhoud voor volwassenen: markeer hem als NSFW.`)
};

const pl_ranger_template_nsfw_unmarked = /** @type {(inputs: Ranger_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod zawiera treści dla dorosłych: oznacz go jako NSFW.`)
};

const pt_ranger_template_nsfw_unmarked = /** @type {(inputs: Ranger_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O mod tem conteúdo adulto: marque-o como NSFW.`)
};

const ru_ranger_template_nsfw_unmarked = /** @type {(inputs: Ranger_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод содержит контент для взрослых: отметьте его как NSFW.`)
};

const sv_ranger_template_nsfw_unmarked = /** @type {(inputs: Ranger_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modden innehåller vuxeninnehåll: markera den som NSFW.`)
};

const tr_ranger_template_nsfw_unmarked = /** @type {(inputs: Ranger_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod yetişkin içeriği barındırıyor: lütfen NSFW olarak işaretleyin.`)
};

const zh_ranger_template_nsfw_unmarked = /** @type {(inputs: Ranger_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该模组含有成人内容：请标记为 NSFW。`)
};

const ja_ranger_template_nsfw_unmarked = /** @type {(inputs: Ranger_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このMODには成人向けコンテンツが含まれます。NSFW として設定してください。`)
};

/**
* | output |
* | --- |
* | "The mod contains adult content: please mark it as NSFW." |
*
* @param {Ranger_Template_Nsfw_UnmarkedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_template_nsfw_unmarked = /** @type {((inputs?: Ranger_Template_Nsfw_UnmarkedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Nsfw_UnmarkedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_template_nsfw_unmarked(inputs)
	if (locale === "de") return de_ranger_template_nsfw_unmarked(inputs)
	if (locale === "fr") return fr_ranger_template_nsfw_unmarked(inputs)
	if (locale === "it") return it_ranger_template_nsfw_unmarked(inputs)
	if (locale === "nl") return nl_ranger_template_nsfw_unmarked(inputs)
	if (locale === "pl") return pl_ranger_template_nsfw_unmarked(inputs)
	if (locale === "pt") return pt_ranger_template_nsfw_unmarked(inputs)
	if (locale === "ru") return ru_ranger_template_nsfw_unmarked(inputs)
	if (locale === "sv") return sv_ranger_template_nsfw_unmarked(inputs)
	if (locale === "tr") return tr_ranger_template_nsfw_unmarked(inputs)
	if (locale === "zh") return zh_ranger_template_nsfw_unmarked(inputs)
	if (locale === "ja") return ja_ranger_template_nsfw_unmarked(inputs)
	return en_ranger_template_nsfw_unmarked(inputs)
});
