/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Other_VersionsInputs */

const en_basecamp_analytics_other_versions = /** @type {(inputs: Basecamp_Analytics_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other versions`)
};

const es_basecamp_analytics_other_versions = /** @type {(inputs: Basecamp_Analytics_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otras versiones`)
};

const de_basecamp_analytics_other_versions = /** @type {(inputs: Basecamp_Analytics_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere Versionen`)
};

const fr_basecamp_analytics_other_versions = /** @type {(inputs: Basecamp_Analytics_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autres versions`)
};

const it_basecamp_analytics_other_versions = /** @type {(inputs: Basecamp_Analytics_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altre versioni`)
};

const nl_basecamp_analytics_other_versions = /** @type {(inputs: Basecamp_Analytics_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere versies`)
};

const pl_basecamp_analytics_other_versions = /** @type {(inputs: Basecamp_Analytics_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inne wersje`)
};

const pt_basecamp_analytics_other_versions = /** @type {(inputs: Basecamp_Analytics_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outras versões`)
};

const ru_basecamp_analytics_other_versions = /** @type {(inputs: Basecamp_Analytics_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другие версии`)
};

const sv_basecamp_analytics_other_versions = /** @type {(inputs: Basecamp_Analytics_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andra versioner`)
};

const tr_basecamp_analytics_other_versions = /** @type {(inputs: Basecamp_Analytics_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer sürümler`)
};

const zh_basecamp_analytics_other_versions = /** @type {(inputs: Basecamp_Analytics_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他版本`)
};

const ja_basecamp_analytics_other_versions = /** @type {(inputs: Basecamp_Analytics_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他のバージョン`)
};

/**
* | output |
* | --- |
* | "Other versions" |
*
* @param {Basecamp_Analytics_Other_VersionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_other_versions = /** @type {((inputs?: Basecamp_Analytics_Other_VersionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Other_VersionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_other_versions(inputs)
	if (locale === "de") return de_basecamp_analytics_other_versions(inputs)
	if (locale === "fr") return fr_basecamp_analytics_other_versions(inputs)
	if (locale === "it") return it_basecamp_analytics_other_versions(inputs)
	if (locale === "nl") return nl_basecamp_analytics_other_versions(inputs)
	if (locale === "pl") return pl_basecamp_analytics_other_versions(inputs)
	if (locale === "pt") return pt_basecamp_analytics_other_versions(inputs)
	if (locale === "ru") return ru_basecamp_analytics_other_versions(inputs)
	if (locale === "sv") return sv_basecamp_analytics_other_versions(inputs)
	if (locale === "tr") return tr_basecamp_analytics_other_versions(inputs)
	if (locale === "zh") return zh_basecamp_analytics_other_versions(inputs)
	if (locale === "ja") return ja_basecamp_analytics_other_versions(inputs)
	return en_basecamp_analytics_other_versions(inputs)
});
