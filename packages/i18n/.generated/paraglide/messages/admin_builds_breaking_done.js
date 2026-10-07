/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Admin_Builds_Breaking_DoneInputs */

const en_admin_builds_breaking_done = /** @type {(inputs: Admin_Builds_Breaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} marked as breaking`)
};

const es_admin_builds_breaking_done = /** @type {(inputs: Admin_Builds_Breaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} marcada como que rompe mods`)
};

const de_admin_builds_breaking_done = /** @type {(inputs: Admin_Builds_Breaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} als inkompatibel markiert`)
};

const fr_admin_builds_breaking_done = /** @type {(inputs: Admin_Builds_Breaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} marqué comme cassant les mods`)
};

const it_admin_builds_breaking_done = /** @type {(inputs: Admin_Builds_Breaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} segnata come build che rompe le mod`)
};

const nl_admin_builds_breaking_done = /** @type {(inputs: Admin_Builds_Breaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} gemarkeerd als breekt mods`)
};

const pl_admin_builds_breaking_done = /** @type {(inputs: Admin_Builds_Breaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} oznaczono jako psujący mody`)
};

const pt_admin_builds_breaking_done = /** @type {(inputs: Admin_Builds_Breaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} marcado como quebra mods`)
};

const ru_admin_builds_breaking_done = /** @type {(inputs: Admin_Builds_Breaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} помечена как ломающая моды`)
};

const sv_admin_builds_breaking_done = /** @type {(inputs: Admin_Builds_Breaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} markerades som bryter moddar`)
};

const tr_admin_builds_breaking_done = /** @type {(inputs: Admin_Builds_Breaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} modları bozuyor olarak işaretlendi`)
};

const zh_admin_builds_breaking_done = /** @type {(inputs: Admin_Builds_Breaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已将 ${i?.label} 标记为破坏性`)
};

const ja_admin_builds_breaking_done = /** @type {(inputs: Admin_Builds_Breaking_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} を破壊的としてマークしました`)
};

/**
* | output |
* | --- |
* | "{label} marked as breaking" |
*
* @param {Admin_Builds_Breaking_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_breaking_done = /** @type {((inputs: Admin_Builds_Breaking_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Breaking_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_breaking_done(inputs)
	if (locale === "de") return de_admin_builds_breaking_done(inputs)
	if (locale === "fr") return fr_admin_builds_breaking_done(inputs)
	if (locale === "it") return it_admin_builds_breaking_done(inputs)
	if (locale === "nl") return nl_admin_builds_breaking_done(inputs)
	if (locale === "pl") return pl_admin_builds_breaking_done(inputs)
	if (locale === "pt") return pt_admin_builds_breaking_done(inputs)
	if (locale === "ru") return ru_admin_builds_breaking_done(inputs)
	if (locale === "sv") return sv_admin_builds_breaking_done(inputs)
	if (locale === "tr") return tr_admin_builds_breaking_done(inputs)
	if (locale === "zh") return zh_admin_builds_breaking_done(inputs)
	if (locale === "ja") return ja_admin_builds_breaking_done(inputs)
	return en_admin_builds_breaking_done(inputs)
});
