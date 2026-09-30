/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_CuratorInputs */

const en_kitsocial_curator = /** @type {(inputs: Kitsocial_CuratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Curator`)
};

const es_kitsocial_curator = /** @type {(inputs: Kitsocial_CuratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Curador`)
};

const de_kitsocial_curator = /** @type {(inputs: Kitsocial_CuratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurator`)
};

const fr_kitsocial_curator = /** @type {(inputs: Kitsocial_CuratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Curateur`)
};

const it_kitsocial_curator = /** @type {(inputs: Kitsocial_CuratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Curatore`)
};

const nl_kitsocial_curator = /** @type {(inputs: Kitsocial_CuratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Curator`)
};

const pl_kitsocial_curator = /** @type {(inputs: Kitsocial_CuratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor zestawu`)
};

const pt_kitsocial_curator = /** @type {(inputs: Kitsocial_CuratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Curador`)
};

const ru_kitsocial_curator = /** @type {(inputs: Kitsocial_CuratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор набора`)
};

const sv_kitsocial_curator = /** @type {(inputs: Kitsocial_CuratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurator`)
};

const tr_kitsocial_curator = /** @type {(inputs: Kitsocial_CuratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Küratör`)
};

const zh_kitsocial_curator = /** @type {(inputs: Kitsocial_CuratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`策展人`)
};

const ja_kitsocial_curator = /** @type {(inputs: Kitsocial_CuratorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キュレーター`)
};

/**
* | output |
* | --- |
* | "Curator" |
*
* @param {Kitsocial_CuratorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_curator = /** @type {((inputs?: Kitsocial_CuratorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_CuratorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_curator(inputs)
	if (locale === "de") return de_kitsocial_curator(inputs)
	if (locale === "fr") return fr_kitsocial_curator(inputs)
	if (locale === "it") return it_kitsocial_curator(inputs)
	if (locale === "nl") return nl_kitsocial_curator(inputs)
	if (locale === "pl") return pl_kitsocial_curator(inputs)
	if (locale === "pt") return pt_kitsocial_curator(inputs)
	if (locale === "ru") return ru_kitsocial_curator(inputs)
	if (locale === "sv") return sv_kitsocial_curator(inputs)
	if (locale === "tr") return tr_kitsocial_curator(inputs)
	if (locale === "zh") return zh_kitsocial_curator(inputs)
	if (locale === "ja") return ja_kitsocial_curator(inputs)
	return en_kitsocial_curator(inputs)
});
