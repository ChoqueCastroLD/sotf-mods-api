/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Filter_Breaking_YesInputs */

const en_admin_builds_filter_breaking_yes = /** @type {(inputs: Admin_Builds_Filter_Breaking_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Breaking only`)
};

const es_admin_builds_filter_breaking_yes = /** @type {(inputs: Admin_Builds_Filter_Breaking_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo las que rompen mods`)
};

const de_admin_builds_filter_breaking_yes = /** @type {(inputs: Admin_Builds_Filter_Breaking_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur inkompatible`)
};

const fr_admin_builds_filter_breaking_yes = /** @type {(inputs: Admin_Builds_Filter_Breaking_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qui cassent les mods`)
};

const it_admin_builds_filter_breaking_yes = /** @type {(inputs: Admin_Builds_Filter_Breaking_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo quelle che rompono le mod`)
};

const nl_admin_builds_filter_breaking_yes = /** @type {(inputs: Admin_Builds_Filter_Breaking_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen builds die mods breken`)
};

const pl_admin_builds_filter_breaking_yes = /** @type {(inputs: Admin_Builds_Filter_Breaking_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko psujące mody`)
};

const pt_admin_builds_filter_breaking_yes = /** @type {(inputs: Admin_Builds_Filter_Breaking_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só os que quebram mods`)
};

const ru_admin_builds_filter_breaking_yes = /** @type {(inputs: Admin_Builds_Filter_Breaking_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только ломающие моды`)
};

const sv_admin_builds_filter_breaking_yes = /** @type {(inputs: Admin_Builds_Filter_Breaking_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara de som bryter moddar`)
};

const tr_admin_builds_filter_breaking_yes = /** @type {(inputs: Admin_Builds_Filter_Breaking_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca modları bozanlar`)
};

const zh_admin_builds_filter_breaking_yes = /** @type {(inputs: Admin_Builds_Filter_Breaking_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅破坏性`)
};

const ja_admin_builds_filter_breaking_yes = /** @type {(inputs: Admin_Builds_Filter_Breaking_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`破壊的のみ`)
};

/**
* | output |
* | --- |
* | "Breaking only" |
*
* @param {Admin_Builds_Filter_Breaking_YesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_filter_breaking_yes = /** @type {((inputs?: Admin_Builds_Filter_Breaking_YesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Filter_Breaking_YesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_filter_breaking_yes(inputs)
	if (locale === "de") return de_admin_builds_filter_breaking_yes(inputs)
	if (locale === "fr") return fr_admin_builds_filter_breaking_yes(inputs)
	if (locale === "it") return it_admin_builds_filter_breaking_yes(inputs)
	if (locale === "nl") return nl_admin_builds_filter_breaking_yes(inputs)
	if (locale === "pl") return pl_admin_builds_filter_breaking_yes(inputs)
	if (locale === "pt") return pt_admin_builds_filter_breaking_yes(inputs)
	if (locale === "ru") return ru_admin_builds_filter_breaking_yes(inputs)
	if (locale === "sv") return sv_admin_builds_filter_breaking_yes(inputs)
	if (locale === "tr") return tr_admin_builds_filter_breaking_yes(inputs)
	if (locale === "zh") return zh_admin_builds_filter_breaking_yes(inputs)
	if (locale === "ja") return ja_admin_builds_filter_breaking_yes(inputs)
	return en_admin_builds_filter_breaking_yes(inputs)
});
