/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_LatestInputs */

const en_basecamp_versions_latest = /** @type {(inputs: Basecamp_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Latest`)
};

const es_basecamp_versions_latest = /** @type {(inputs: Basecamp_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Última`)
};

const de_basecamp_versions_latest = /** @type {(inputs: Basecamp_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste`)
};

const fr_basecamp_versions_latest = /** @type {(inputs: Basecamp_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dernière`)
};

const it_basecamp_versions_latest = /** @type {(inputs: Basecamp_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultima`)
};

const nl_basecamp_versions_latest = /** @type {(inputs: Basecamp_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste`)
};

const pl_basecamp_versions_latest = /** @type {(inputs: Basecamp_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsza`)
};

const pt_basecamp_versions_latest = /** @type {(inputs: Basecamp_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais recente`)
};

const ru_basecamp_versions_latest = /** @type {(inputs: Basecamp_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последняя`)
};

const sv_basecamp_versions_latest = /** @type {(inputs: Basecamp_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste`)
};

const tr_basecamp_versions_latest = /** @type {(inputs: Basecamp_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yeni`)
};

const zh_basecamp_versions_latest = /** @type {(inputs: Basecamp_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新`)
};

const ja_basecamp_versions_latest = /** @type {(inputs: Basecamp_Versions_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新`)
};

/**
* | output |
* | --- |
* | "Latest" |
*
* @param {Basecamp_Versions_LatestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_latest = /** @type {((inputs?: Basecamp_Versions_LatestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_LatestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_latest(inputs)
	if (locale === "de") return de_basecamp_versions_latest(inputs)
	if (locale === "fr") return fr_basecamp_versions_latest(inputs)
	if (locale === "it") return it_basecamp_versions_latest(inputs)
	if (locale === "nl") return nl_basecamp_versions_latest(inputs)
	if (locale === "pl") return pl_basecamp_versions_latest(inputs)
	if (locale === "pt") return pt_basecamp_versions_latest(inputs)
	if (locale === "ru") return ru_basecamp_versions_latest(inputs)
	if (locale === "sv") return sv_basecamp_versions_latest(inputs)
	if (locale === "tr") return tr_basecamp_versions_latest(inputs)
	if (locale === "zh") return zh_basecamp_versions_latest(inputs)
	if (locale === "ja") return ja_basecamp_versions_latest(inputs)
	return en_basecamp_versions_latest(inputs)
});
