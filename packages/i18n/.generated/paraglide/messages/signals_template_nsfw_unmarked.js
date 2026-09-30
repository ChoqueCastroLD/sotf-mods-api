/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Template_Nsfw_UnmarkedInputs */

const en_signals_template_nsfw_unmarked = /** @type {(inputs: Signals_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The mod contains adult content: please mark it as NSFW.`)
};

const es_signals_template_nsfw_unmarked = /** @type {(inputs: Signals_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El mod tiene contenido para adultos: márcalo como NSFW.`)
};

const de_signals_template_nsfw_unmarked = /** @type {(inputs: Signals_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Mod enthält Inhalte für Erwachsene: Markiere ihn bitte als NSFW.`)
};

const fr_signals_template_nsfw_unmarked = /** @type {(inputs: Signals_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mod contient du contenu pour adultes : marquez-le comme NSFW.`)
};

const it_signals_template_nsfw_unmarked = /** @type {(inputs: Signals_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La mod contiene contenuti per adulti: segnalala come NSFW.`)
};

const nl_signals_template_nsfw_unmarked = /** @type {(inputs: Signals_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mod bevat inhoud voor volwassenen: markeer hem als NSFW.`)
};

const pl_signals_template_nsfw_unmarked = /** @type {(inputs: Signals_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod zawiera treści dla dorosłych: oznacz go jako NSFW.`)
};

const pt_signals_template_nsfw_unmarked = /** @type {(inputs: Signals_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O mod tem conteúdo adulto: marque-o como NSFW.`)
};

const ru_signals_template_nsfw_unmarked = /** @type {(inputs: Signals_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод содержит контент для взрослых: отметьте его как NSFW.`)
};

const sv_signals_template_nsfw_unmarked = /** @type {(inputs: Signals_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modden innehåller vuxeninnehåll: markera den som NSFW.`)
};

const tr_signals_template_nsfw_unmarked = /** @type {(inputs: Signals_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod yetişkin içeriği barındırıyor: lütfen NSFW olarak işaretleyin.`)
};

const zh_signals_template_nsfw_unmarked = /** @type {(inputs: Signals_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该模组含有成人内容：请标记为 NSFW。`)
};

const ja_signals_template_nsfw_unmarked = /** @type {(inputs: Signals_Template_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このMODには成人向けコンテンツが含まれます。NSFW として設定してください。`)
};

/**
* | output |
* | --- |
* | "The mod contains adult content: please mark it as NSFW." |
*
* @param {Signals_Template_Nsfw_UnmarkedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_template_nsfw_unmarked = /** @type {((inputs?: Signals_Template_Nsfw_UnmarkedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Template_Nsfw_UnmarkedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_template_nsfw_unmarked(inputs)
	if (locale === "de") return de_signals_template_nsfw_unmarked(inputs)
	if (locale === "fr") return fr_signals_template_nsfw_unmarked(inputs)
	if (locale === "it") return it_signals_template_nsfw_unmarked(inputs)
	if (locale === "nl") return nl_signals_template_nsfw_unmarked(inputs)
	if (locale === "pl") return pl_signals_template_nsfw_unmarked(inputs)
	if (locale === "pt") return pt_signals_template_nsfw_unmarked(inputs)
	if (locale === "ru") return ru_signals_template_nsfw_unmarked(inputs)
	if (locale === "sv") return sv_signals_template_nsfw_unmarked(inputs)
	if (locale === "tr") return tr_signals_template_nsfw_unmarked(inputs)
	if (locale === "zh") return zh_signals_template_nsfw_unmarked(inputs)
	if (locale === "ja") return ja_signals_template_nsfw_unmarked(inputs)
	return en_signals_template_nsfw_unmarked(inputs)
});
