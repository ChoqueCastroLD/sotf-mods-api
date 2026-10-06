/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_TrustedInputs */

const en_explore_catalog_trusted = /** @type {(inputs: Explore_Catalog_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trusted`)
};

const es_explore_catalog_trusted = /** @type {(inputs: Explore_Catalog_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De confianza`)
};

const de_explore_catalog_trusted = /** @type {(inputs: Explore_Catalog_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrauenswürdig`)
};

const fr_explore_catalog_trusted = /** @type {(inputs: Explore_Catalog_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De confiance`)
};

const it_explore_catalog_trusted = /** @type {(inputs: Explore_Catalog_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Affidabile`)
};

const nl_explore_catalog_trusted = /** @type {(inputs: Explore_Catalog_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrouwd`)
};

const pl_explore_catalog_trusted = /** @type {(inputs: Explore_Catalog_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaufany`)
};

const pt_explore_catalog_trusted = /** @type {(inputs: Explore_Catalog_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confiável`)
};

const ru_explore_catalog_trusted = /** @type {(inputs: Explore_Catalog_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверенный`)
};

const sv_explore_catalog_trusted = /** @type {(inputs: Explore_Catalog_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betrodd`)
};

const tr_explore_catalog_trusted = /** @type {(inputs: Explore_Catalog_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenilir`)
};

const zh_explore_catalog_trusted = /** @type {(inputs: Explore_Catalog_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`受信任`)
};

const ja_explore_catalog_trusted = /** @type {(inputs: Explore_Catalog_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信頼済み`)
};

/**
* | output |
* | --- |
* | "Trusted" |
*
* @param {Explore_Catalog_TrustedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_trusted = /** @type {((inputs?: Explore_Catalog_TrustedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_TrustedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_trusted(inputs)
	if (locale === "de") return de_explore_catalog_trusted(inputs)
	if (locale === "fr") return fr_explore_catalog_trusted(inputs)
	if (locale === "it") return it_explore_catalog_trusted(inputs)
	if (locale === "nl") return nl_explore_catalog_trusted(inputs)
	if (locale === "pl") return pl_explore_catalog_trusted(inputs)
	if (locale === "pt") return pt_explore_catalog_trusted(inputs)
	if (locale === "ru") return ru_explore_catalog_trusted(inputs)
	if (locale === "sv") return sv_explore_catalog_trusted(inputs)
	if (locale === "tr") return tr_explore_catalog_trusted(inputs)
	if (locale === "zh") return zh_explore_catalog_trusted(inputs)
	if (locale === "ja") return ja_explore_catalog_trusted(inputs)
	return en_explore_catalog_trusted(inputs)
});
