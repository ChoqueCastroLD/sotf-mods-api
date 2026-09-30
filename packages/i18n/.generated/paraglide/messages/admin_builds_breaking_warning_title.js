/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Breaking_Warning_TitleInputs */

const en_admin_builds_breaking_warning_title = /** @type {(inputs: Admin_Builds_Breaking_Warning_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This alerts the whole site`)
};

const es_admin_builds_breaking_warning_title = /** @type {(inputs: Admin_Builds_Breaking_Warning_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esto avisa a todo el sitio`)
};

const de_admin_builds_breaking_warning_title = /** @type {(inputs: Admin_Builds_Breaking_Warning_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das betrifft die ganze Website`)
};

const fr_admin_builds_breaking_warning_title = /** @type {(inputs: Admin_Builds_Breaking_Warning_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cela alerte tout le site`)
};

const it_admin_builds_breaking_warning_title = /** @type {(inputs: Admin_Builds_Breaking_Warning_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo avvisa tutto il sito`)
};

const nl_admin_builds_breaking_warning_title = /** @type {(inputs: Admin_Builds_Breaking_Warning_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit waarschuwt de hele site`)
};

const pl_admin_builds_breaking_warning_title = /** @type {(inputs: Admin_Builds_Breaking_Warning_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To ostrzega całą stronę`)
};

const pt_admin_builds_breaking_warning_title = /** @type {(inputs: Admin_Builds_Breaking_Warning_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isso alerta o site inteiro`)
};

const ru_admin_builds_breaking_warning_title = /** @type {(inputs: Admin_Builds_Breaking_Warning_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это увидит весь сайт`)
};

const sv_admin_builds_breaking_warning_title = /** @type {(inputs: Admin_Builds_Breaking_Warning_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här varnar hela sajten`)
};

const tr_admin_builds_breaking_warning_title = /** @type {(inputs: Admin_Builds_Breaking_Warning_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu tüm siteyi uyarır`)
};

const zh_admin_builds_breaking_warning_title = /** @type {(inputs: Admin_Builds_Breaking_Warning_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这会通知整个网站`)
};

const ja_admin_builds_breaking_warning_title = /** @type {(inputs: Admin_Builds_Breaking_Warning_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイト全体に通知されます`)
};

/**
* | output |
* | --- |
* | "This alerts the whole site" |
*
* @param {Admin_Builds_Breaking_Warning_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_breaking_warning_title = /** @type {((inputs?: Admin_Builds_Breaking_Warning_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Breaking_Warning_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_breaking_warning_title(inputs)
	if (locale === "de") return de_admin_builds_breaking_warning_title(inputs)
	if (locale === "fr") return fr_admin_builds_breaking_warning_title(inputs)
	if (locale === "it") return it_admin_builds_breaking_warning_title(inputs)
	if (locale === "nl") return nl_admin_builds_breaking_warning_title(inputs)
	if (locale === "pl") return pl_admin_builds_breaking_warning_title(inputs)
	if (locale === "pt") return pt_admin_builds_breaking_warning_title(inputs)
	if (locale === "ru") return ru_admin_builds_breaking_warning_title(inputs)
	if (locale === "sv") return sv_admin_builds_breaking_warning_title(inputs)
	if (locale === "tr") return tr_admin_builds_breaking_warning_title(inputs)
	if (locale === "zh") return zh_admin_builds_breaking_warning_title(inputs)
	if (locale === "ja") return ja_admin_builds_breaking_warning_title(inputs)
	return en_admin_builds_breaking_warning_title(inputs)
});
