/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_Pick_KitInputs */

const en_bundles_pick_kit = /** @type {(inputs: Bundles_Pick_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const es_bundles_pick_kit = /** @type {(inputs: Bundles_Pick_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const de_bundles_pick_kit = /** @type {(inputs: Bundles_Pick_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const fr_bundles_pick_kit = /** @type {(inputs: Bundles_Pick_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const it_bundles_pick_kit = /** @type {(inputs: Bundles_Pick_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const nl_bundles_pick_kit = /** @type {(inputs: Bundles_Pick_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const pl_bundles_pick_kit = /** @type {(inputs: Bundles_Pick_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zestaw`)
};

const pt_bundles_pick_kit = /** @type {(inputs: Bundles_Pick_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const ru_bundles_pick_kit = /** @type {(inputs: Bundles_Pick_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Набор`)
};

const sv_bundles_pick_kit = /** @type {(inputs: Bundles_Pick_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const tr_bundles_pick_kit = /** @type {(inputs: Bundles_Pick_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const zh_bundles_pick_kit = /** @type {(inputs: Bundles_Pick_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`合集`)
};

const ja_bundles_pick_kit = /** @type {(inputs: Bundles_Pick_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キット`)
};

/**
* | output |
* | --- |
* | "Kit" |
*
* @param {Bundles_Pick_KitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_pick_kit = /** @type {((inputs?: Bundles_Pick_KitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_Pick_KitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_pick_kit(inputs)
	if (locale === "de") return de_bundles_pick_kit(inputs)
	if (locale === "fr") return fr_bundles_pick_kit(inputs)
	if (locale === "it") return it_bundles_pick_kit(inputs)
	if (locale === "nl") return nl_bundles_pick_kit(inputs)
	if (locale === "pl") return pl_bundles_pick_kit(inputs)
	if (locale === "pt") return pt_bundles_pick_kit(inputs)
	if (locale === "ru") return ru_bundles_pick_kit(inputs)
	if (locale === "sv") return sv_bundles_pick_kit(inputs)
	if (locale === "tr") return tr_bundles_pick_kit(inputs)
	if (locale === "zh") return zh_bundles_pick_kit(inputs)
	if (locale === "ja") return ja_bundles_pick_kit(inputs)
	return en_bundles_pick_kit(inputs)
});
