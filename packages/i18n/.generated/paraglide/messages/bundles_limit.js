/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Bundles_LimitInputs */

const en_bundles_limit = /** @type {(inputs: Bundles_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Up to ${i?.max} bundles per mod.`)
};

const es_bundles_limit = /** @type {(inputs: Bundles_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hasta ${i?.max} paquetes por mod.`)
};

const de_bundles_limit = /** @type {(inputs: Bundles_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bis zu ${i?.max} Pakete pro Mod.`)
};

const fr_bundles_limit = /** @type {(inputs: Bundles_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jusqu'à ${i?.max} packs par mod.`)
};

const it_bundles_limit = /** @type {(inputs: Bundles_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fino a ${i?.max} pacchetti per mod.`)
};

const nl_bundles_limit = /** @type {(inputs: Bundles_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Maximaal ${i?.max} pakketten per mod.`)
};

const pl_bundles_limit = /** @type {(inputs: Bundles_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Do ${i?.max} pakietów na mod.`)
};

const pt_bundles_limit = /** @type {(inputs: Bundles_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Até ${i?.max} pacotes por mod.`)
};

const ru_bundles_limit = /** @type {(inputs: Bundles_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`До ${i?.max} наборов на мод.`)
};

const sv_bundles_limit = /** @type {(inputs: Bundles_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Upp till ${i?.max} paket per modd.`)
};

const tr_bundles_limit = /** @type {(inputs: Bundles_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod başına en fazla ${i?.max} paket.`)
};

const zh_bundles_limit = /** @type {(inputs: Bundles_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`每个模组最多 ${i?.max} 个整合包。`)
};

const ja_bundles_limit = /** @type {(inputs: Bundles_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`MOD ごとに最大 ${i?.max} 個のバンドル。`)
};

/**
* | output |
* | --- |
* | "Up to {max} bundles per mod." |
*
* @param {Bundles_LimitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_limit = /** @type {((inputs: Bundles_LimitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_LimitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_limit(inputs)
	if (locale === "de") return de_bundles_limit(inputs)
	if (locale === "fr") return fr_bundles_limit(inputs)
	if (locale === "it") return it_bundles_limit(inputs)
	if (locale === "nl") return nl_bundles_limit(inputs)
	if (locale === "pl") return pl_bundles_limit(inputs)
	if (locale === "pt") return pt_bundles_limit(inputs)
	if (locale === "ru") return ru_bundles_limit(inputs)
	if (locale === "sv") return sv_bundles_limit(inputs)
	if (locale === "tr") return tr_bundles_limit(inputs)
	if (locale === "zh") return zh_bundles_limit(inputs)
	if (locale === "ja") return ja_bundles_limit(inputs)
	return en_bundles_limit(inputs)
});
