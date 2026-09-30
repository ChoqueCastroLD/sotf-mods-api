/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Version_LatestInputs */

const en_mod_version_latest = /** @type {(inputs: Mod_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Latest`)
};

const es_mod_version_latest = /** @type {(inputs: Mod_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Última`)
};

const de_mod_version_latest = /** @type {(inputs: Mod_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste`)
};

const fr_mod_version_latest = /** @type {(inputs: Mod_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dernière`)
};

const it_mod_version_latest = /** @type {(inputs: Mod_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultima`)
};

const nl_mod_version_latest = /** @type {(inputs: Mod_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste`)
};

const pl_mod_version_latest = /** @type {(inputs: Mod_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsza`)
};

const pt_mod_version_latest = /** @type {(inputs: Mod_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais recente`)
};

const ru_mod_version_latest = /** @type {(inputs: Mod_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последняя`)
};

const sv_mod_version_latest = /** @type {(inputs: Mod_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste`)
};

const tr_mod_version_latest = /** @type {(inputs: Mod_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yeni`)
};

const zh_mod_version_latest = /** @type {(inputs: Mod_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新`)
};

const ja_mod_version_latest = /** @type {(inputs: Mod_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新`)
};

/**
* | output |
* | --- |
* | "Latest" |
*
* @param {Mod_Version_LatestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_version_latest = /** @type {((inputs?: Mod_Version_LatestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Version_LatestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_version_latest(inputs)
	if (locale === "de") return de_mod_version_latest(inputs)
	if (locale === "fr") return fr_mod_version_latest(inputs)
	if (locale === "it") return it_mod_version_latest(inputs)
	if (locale === "nl") return nl_mod_version_latest(inputs)
	if (locale === "pl") return pl_mod_version_latest(inputs)
	if (locale === "pt") return pt_mod_version_latest(inputs)
	if (locale === "ru") return ru_mod_version_latest(inputs)
	if (locale === "sv") return sv_mod_version_latest(inputs)
	if (locale === "tr") return tr_mod_version_latest(inputs)
	if (locale === "zh") return zh_mod_version_latest(inputs)
	if (locale === "ja") return ja_mod_version_latest(inputs)
	return en_mod_version_latest(inputs)
});
