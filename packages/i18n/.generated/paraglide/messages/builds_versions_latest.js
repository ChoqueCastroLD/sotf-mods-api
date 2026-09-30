/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Versions_LatestInputs */

const en_builds_versions_latest = /** @type {(inputs: Builds_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Latest`)
};

const es_builds_versions_latest = /** @type {(inputs: Builds_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Última`)
};

const de_builds_versions_latest = /** @type {(inputs: Builds_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste`)
};

const fr_builds_versions_latest = /** @type {(inputs: Builds_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dernière`)
};

const it_builds_versions_latest = /** @type {(inputs: Builds_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultima`)
};

const nl_builds_versions_latest = /** @type {(inputs: Builds_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste`)
};

const pl_builds_versions_latest = /** @type {(inputs: Builds_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsza`)
};

const pt_builds_versions_latest = /** @type {(inputs: Builds_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais recente`)
};

const ru_builds_versions_latest = /** @type {(inputs: Builds_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последняя`)
};

const sv_builds_versions_latest = /** @type {(inputs: Builds_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste`)
};

const tr_builds_versions_latest = /** @type {(inputs: Builds_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yeni`)
};

const zh_builds_versions_latest = /** @type {(inputs: Builds_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新`)
};

const ja_builds_versions_latest = /** @type {(inputs: Builds_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新`)
};

/**
* | output |
* | --- |
* | "Latest" |
*
* @param {Builds_Versions_LatestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_versions_latest = /** @type {((inputs?: Builds_Versions_LatestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Versions_LatestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_versions_latest(inputs)
	if (locale === "de") return de_builds_versions_latest(inputs)
	if (locale === "fr") return fr_builds_versions_latest(inputs)
	if (locale === "it") return it_builds_versions_latest(inputs)
	if (locale === "nl") return nl_builds_versions_latest(inputs)
	if (locale === "pl") return pl_builds_versions_latest(inputs)
	if (locale === "pt") return pt_builds_versions_latest(inputs)
	if (locale === "ru") return ru_builds_versions_latest(inputs)
	if (locale === "sv") return sv_builds_versions_latest(inputs)
	if (locale === "tr") return tr_builds_versions_latest(inputs)
	if (locale === "zh") return zh_builds_versions_latest(inputs)
	if (locale === "ja") return ja_builds_versions_latest(inputs)
	return en_builds_versions_latest(inputs)
});
