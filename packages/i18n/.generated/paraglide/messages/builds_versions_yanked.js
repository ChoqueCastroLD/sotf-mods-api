/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Versions_YankedInputs */

const en_builds_versions_yanked = /** @type {(inputs: Builds_Versions_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Withdrawn`)
};

const es_builds_versions_yanked = /** @type {(inputs: Builds_Versions_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirada`)
};

const de_builds_versions_yanked = /** @type {(inputs: Builds_Versions_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurückgezogen`)
};

const fr_builds_versions_yanked = /** @type {(inputs: Builds_Versions_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirée`)
};

const it_builds_versions_yanked = /** @type {(inputs: Builds_Versions_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritirata`)
};

const nl_builds_versions_yanked = /** @type {(inputs: Builds_Versions_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingetrokken`)
};

const pl_builds_versions_yanked = /** @type {(inputs: Builds_Versions_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wycofana`)
};

const pt_builds_versions_yanked = /** @type {(inputs: Builds_Versions_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirada`)
};

const ru_builds_versions_yanked = /** @type {(inputs: Builds_Versions_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отозвана`)
};

const sv_builds_versions_yanked = /** @type {(inputs: Builds_Versions_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indragen`)
};

const tr_builds_versions_yanked = /** @type {(inputs: Builds_Versions_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri çekildi`)
};

const zh_builds_versions_yanked = /** @type {(inputs: Builds_Versions_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已撤回`)
};

const ja_builds_versions_yanked = /** @type {(inputs: Builds_Versions_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取り下げ`)
};

/**
* | output |
* | --- |
* | "Withdrawn" |
*
* @param {Builds_Versions_YankedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_versions_yanked = /** @type {((inputs?: Builds_Versions_YankedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Versions_YankedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_versions_yanked(inputs)
	if (locale === "de") return de_builds_versions_yanked(inputs)
	if (locale === "fr") return fr_builds_versions_yanked(inputs)
	if (locale === "it") return it_builds_versions_yanked(inputs)
	if (locale === "nl") return nl_builds_versions_yanked(inputs)
	if (locale === "pl") return pl_builds_versions_yanked(inputs)
	if (locale === "pt") return pt_builds_versions_yanked(inputs)
	if (locale === "ru") return ru_builds_versions_yanked(inputs)
	if (locale === "sv") return sv_builds_versions_yanked(inputs)
	if (locale === "tr") return tr_builds_versions_yanked(inputs)
	if (locale === "zh") return zh_builds_versions_yanked(inputs)
	if (locale === "ja") return ja_builds_versions_yanked(inputs)
	return en_builds_versions_yanked(inputs)
});
