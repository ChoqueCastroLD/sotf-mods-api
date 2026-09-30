/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Basecamp_Versions_YankedInputs */

const en_basecamp_versions_yanked = /** @type {(inputs: Basecamp_Versions_YankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} yanked`)
};

const es_basecamp_versions_yanked = /** @type {(inputs: Basecamp_Versions_YankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} retirada`)
};

const de_basecamp_versions_yanked = /** @type {(inputs: Basecamp_Versions_YankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} zurückgezogen`)
};

const fr_basecamp_versions_yanked = /** @type {(inputs: Basecamp_Versions_YankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} retirée`)
};

const it_basecamp_versions_yanked = /** @type {(inputs: Basecamp_Versions_YankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} ritirata`)
};

const nl_basecamp_versions_yanked = /** @type {(inputs: Basecamp_Versions_YankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} ingetrokken`)
};

const pl_basecamp_versions_yanked = /** @type {(inputs: Basecamp_Versions_YankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wycofano v${i?.version}`)
};

const pt_basecamp_versions_yanked = /** @type {(inputs: Basecamp_Versions_YankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} retirada`)
};

const ru_basecamp_versions_yanked = /** @type {(inputs: Basecamp_Versions_YankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} отозвана`)
};

const sv_basecamp_versions_yanked = /** @type {(inputs: Basecamp_Versions_YankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} tillbakadragen`)
};

const tr_basecamp_versions_yanked = /** @type {(inputs: Basecamp_Versions_YankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} geri çekildi`)
};

const zh_basecamp_versions_yanked = /** @type {(inputs: Basecamp_Versions_YankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} 已撤回`)
};

const ja_basecamp_versions_yanked = /** @type {(inputs: Basecamp_Versions_YankedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} を取り下げました`)
};

/**
* | output |
* | --- |
* | "v{version} yanked" |
*
* @param {Basecamp_Versions_YankedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_yanked = /** @type {((inputs: Basecamp_Versions_YankedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_YankedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_yanked(inputs)
	if (locale === "de") return de_basecamp_versions_yanked(inputs)
	if (locale === "fr") return fr_basecamp_versions_yanked(inputs)
	if (locale === "it") return it_basecamp_versions_yanked(inputs)
	if (locale === "nl") return nl_basecamp_versions_yanked(inputs)
	if (locale === "pl") return pl_basecamp_versions_yanked(inputs)
	if (locale === "pt") return pt_basecamp_versions_yanked(inputs)
	if (locale === "ru") return ru_basecamp_versions_yanked(inputs)
	if (locale === "sv") return sv_basecamp_versions_yanked(inputs)
	if (locale === "tr") return tr_basecamp_versions_yanked(inputs)
	if (locale === "zh") return zh_basecamp_versions_yanked(inputs)
	if (locale === "ja") return ja_basecamp_versions_yanked(inputs)
	return en_basecamp_versions_yanked(inputs)
});
