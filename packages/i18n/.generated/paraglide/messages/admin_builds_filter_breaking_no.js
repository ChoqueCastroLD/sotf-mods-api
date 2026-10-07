/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Filter_Breaking_NoInputs */

const en_admin_builds_filter_breaking_no = /** @type {(inputs: Admin_Builds_Filter_Breaking_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not breaking`)
};

const es_admin_builds_filter_breaking_no = /** @type {(inputs: Admin_Builds_Filter_Breaking_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las que no rompen mods`)
};

const de_admin_builds_filter_breaking_no = /** @type {(inputs: Admin_Builds_Filter_Breaking_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht inkompatibel`)
};

const fr_admin_builds_filter_breaking_no = /** @type {(inputs: Admin_Builds_Filter_Breaking_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qui ne cassent pas les mods`)
};

const it_admin_builds_filter_breaking_no = /** @type {(inputs: Admin_Builds_Filter_Breaking_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Che non rompono le mod`)
};

const nl_admin_builds_filter_breaking_no = /** @type {(inputs: Admin_Builds_Filter_Breaking_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Breekt geen mods`)
};

const pl_admin_builds_filter_breaking_no = /** @type {(inputs: Admin_Builds_Filter_Breaking_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niepsujące modów`)
};

const pt_admin_builds_filter_breaking_no = /** @type {(inputs: Admin_Builds_Filter_Breaking_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Que não quebram mods`)
};

const ru_admin_builds_filter_breaking_no = /** @type {(inputs: Admin_Builds_Filter_Breaking_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не ломающие моды`)
};

const sv_admin_builds_filter_breaking_no = /** @type {(inputs: Admin_Builds_Filter_Breaking_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bryter inte moddar`)
};

const tr_admin_builds_filter_breaking_no = /** @type {(inputs: Admin_Builds_Filter_Breaking_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları bozmayanlar`)
};

const zh_admin_builds_filter_breaking_no = /** @type {(inputs: Admin_Builds_Filter_Breaking_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非破坏性`)
};

const ja_admin_builds_filter_breaking_no = /** @type {(inputs: Admin_Builds_Filter_Breaking_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`破壊的でない`)
};

/**
* | output |
* | --- |
* | "Not breaking" |
*
* @param {Admin_Builds_Filter_Breaking_NoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_filter_breaking_no = /** @type {((inputs?: Admin_Builds_Filter_Breaking_NoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Filter_Breaking_NoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_filter_breaking_no(inputs)
	if (locale === "de") return de_admin_builds_filter_breaking_no(inputs)
	if (locale === "fr") return fr_admin_builds_filter_breaking_no(inputs)
	if (locale === "it") return it_admin_builds_filter_breaking_no(inputs)
	if (locale === "nl") return nl_admin_builds_filter_breaking_no(inputs)
	if (locale === "pl") return pl_admin_builds_filter_breaking_no(inputs)
	if (locale === "pt") return pt_admin_builds_filter_breaking_no(inputs)
	if (locale === "ru") return ru_admin_builds_filter_breaking_no(inputs)
	if (locale === "sv") return sv_admin_builds_filter_breaking_no(inputs)
	if (locale === "tr") return tr_admin_builds_filter_breaking_no(inputs)
	if (locale === "zh") return zh_admin_builds_filter_breaking_no(inputs)
	if (locale === "ja") return ja_admin_builds_filter_breaking_no(inputs)
	return en_admin_builds_filter_breaking_no(inputs)
});
