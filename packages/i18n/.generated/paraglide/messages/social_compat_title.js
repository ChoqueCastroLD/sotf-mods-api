/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_TitleInputs */

const en_social_compat_title = /** @type {(inputs: Social_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field report`)
};

const es_social_compat_title = /** @type {(inputs: Social_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reporte de campo`)
};

const de_social_compat_title = /** @type {(inputs: Social_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldbericht`)
};

const fr_social_compat_title = /** @type {(inputs: Social_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapport de terrain`)
};

const it_social_compat_title = /** @type {(inputs: Social_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporto sul campo`)
};

const nl_social_compat_title = /** @type {(inputs: Social_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldrapport`)
};

const pl_social_compat_title = /** @type {(inputs: Social_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raport z terenu`)
};

const pt_social_compat_title = /** @type {(inputs: Social_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relato de campo`)
};

const ru_social_compat_title = /** @type {(inputs: Social_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевой отчёт`)
};

const sv_social_compat_title = /** @type {(inputs: Social_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältrapport`)
};

const tr_social_compat_title = /** @type {(inputs: Social_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha raporu`)
};

const zh_social_compat_title = /** @type {(inputs: Social_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实测报告`)
};

const ja_social_compat_title = /** @type {(inputs: Social_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドレポート`)
};

/**
* | output |
* | --- |
* | "Field report" |
*
* @param {Social_Compat_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_title = /** @type {((inputs?: Social_Compat_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_title(inputs)
	if (locale === "de") return de_social_compat_title(inputs)
	if (locale === "fr") return fr_social_compat_title(inputs)
	if (locale === "it") return it_social_compat_title(inputs)
	if (locale === "nl") return nl_social_compat_title(inputs)
	if (locale === "pl") return pl_social_compat_title(inputs)
	if (locale === "pt") return pt_social_compat_title(inputs)
	if (locale === "ru") return ru_social_compat_title(inputs)
	if (locale === "sv") return sv_social_compat_title(inputs)
	if (locale === "tr") return tr_social_compat_title(inputs)
	if (locale === "zh") return zh_social_compat_title(inputs)
	if (locale === "ja") return ja_social_compat_title(inputs)
	return en_social_compat_title(inputs)
});
