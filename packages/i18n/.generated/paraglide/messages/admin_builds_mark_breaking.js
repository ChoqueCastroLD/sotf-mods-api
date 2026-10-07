/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Mark_BreakingInputs */

const en_admin_builds_mark_breaking = /** @type {(inputs: Admin_Builds_Mark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark as breaking`)
};

const es_admin_builds_mark_breaking = /** @type {(inputs: Admin_Builds_Mark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como que rompe mods`)
};

const de_admin_builds_mark_breaking = /** @type {(inputs: Admin_Builds_Mark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als inkompatibel markieren`)
};

const fr_admin_builds_mark_breaking = /** @type {(inputs: Admin_Builds_Mark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marquer comme cassant les mods`)
};

const it_admin_builds_mark_breaking = /** @type {(inputs: Admin_Builds_Mark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segna come build che rompe le mod`)
};

const nl_admin_builds_mark_breaking = /** @type {(inputs: Admin_Builds_Mark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markeren als breekt mods`)
};

const pl_admin_builds_mark_breaking = /** @type {(inputs: Admin_Builds_Mark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznacz jako psujący mody`)
};

const pt_admin_builds_mark_breaking = /** @type {(inputs: Admin_Builds_Mark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como quebra mods`)
};

const ru_admin_builds_mark_breaking = /** @type {(inputs: Admin_Builds_Mark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пометить как ломающую моды`)
};

const sv_admin_builds_mark_breaking = /** @type {(inputs: Admin_Builds_Mark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markera som bryter moddar`)
};

const tr_admin_builds_mark_breaking = /** @type {(inputs: Admin_Builds_Mark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları bozuyor olarak işaretle`)
};

const zh_admin_builds_mark_breaking = /** @type {(inputs: Admin_Builds_Mark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标记为破坏性`)
};

const ja_admin_builds_mark_breaking = /** @type {(inputs: Admin_Builds_Mark_BreakingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`破壊的としてマーク`)
};

/**
* | output |
* | --- |
* | "Mark as breaking" |
*
* @param {Admin_Builds_Mark_BreakingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_mark_breaking = /** @type {((inputs?: Admin_Builds_Mark_BreakingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Mark_BreakingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_mark_breaking(inputs)
	if (locale === "de") return de_admin_builds_mark_breaking(inputs)
	if (locale === "fr") return fr_admin_builds_mark_breaking(inputs)
	if (locale === "it") return it_admin_builds_mark_breaking(inputs)
	if (locale === "nl") return nl_admin_builds_mark_breaking(inputs)
	if (locale === "pl") return pl_admin_builds_mark_breaking(inputs)
	if (locale === "pt") return pt_admin_builds_mark_breaking(inputs)
	if (locale === "ru") return ru_admin_builds_mark_breaking(inputs)
	if (locale === "sv") return sv_admin_builds_mark_breaking(inputs)
	if (locale === "tr") return tr_admin_builds_mark_breaking(inputs)
	if (locale === "zh") return zh_admin_builds_mark_breaking(inputs)
	if (locale === "ja") return ja_admin_builds_mark_breaking(inputs)
	return en_admin_builds_mark_breaking(inputs)
});
