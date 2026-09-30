/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Versions_TitleInputs */

const en_builds_versions_title = /** @type {(inputs: Builds_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions`)
};

const es_builds_versions_title = /** @type {(inputs: Builds_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versiones`)
};

const de_builds_versions_title = /** @type {(inputs: Builds_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen`)
};

const fr_builds_versions_title = /** @type {(inputs: Builds_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions`)
};

const it_builds_versions_title = /** @type {(inputs: Builds_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioni`)
};

const nl_builds_versions_title = /** @type {(inputs: Builds_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versies`)
};

const pl_builds_versions_title = /** @type {(inputs: Builds_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersje`)
};

const pt_builds_versions_title = /** @type {(inputs: Builds_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versões`)
};

const ru_builds_versions_title = /** @type {(inputs: Builds_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версии`)
};

const sv_builds_versions_title = /** @type {(inputs: Builds_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioner`)
};

const tr_builds_versions_title = /** @type {(inputs: Builds_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürümler`)
};

const zh_builds_versions_title = /** @type {(inputs: Builds_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本`)
};

const ja_builds_versions_title = /** @type {(inputs: Builds_Versions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン`)
};

/**
* | output |
* | --- |
* | "Versions" |
*
* @param {Builds_Versions_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_versions_title = /** @type {((inputs?: Builds_Versions_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Versions_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_versions_title(inputs)
	if (locale === "de") return de_builds_versions_title(inputs)
	if (locale === "fr") return fr_builds_versions_title(inputs)
	if (locale === "it") return it_builds_versions_title(inputs)
	if (locale === "nl") return nl_builds_versions_title(inputs)
	if (locale === "pl") return pl_builds_versions_title(inputs)
	if (locale === "pt") return pt_builds_versions_title(inputs)
	if (locale === "ru") return ru_builds_versions_title(inputs)
	if (locale === "sv") return sv_builds_versions_title(inputs)
	if (locale === "tr") return tr_builds_versions_title(inputs)
	if (locale === "zh") return zh_builds_versions_title(inputs)
	if (locale === "ja") return ja_builds_versions_title(inputs)
	return en_builds_versions_title(inputs)
});
