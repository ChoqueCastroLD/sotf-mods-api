/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Target_KitInputs */

const en_ranger_target_kit = /** @type {(inputs: Ranger_Target_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const es_ranger_target_kit = /** @type {(inputs: Ranger_Target_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const de_ranger_target_kit = /** @type {(inputs: Ranger_Target_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const fr_ranger_target_kit = /** @type {(inputs: Ranger_Target_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const it_ranger_target_kit = /** @type {(inputs: Ranger_Target_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const nl_ranger_target_kit = /** @type {(inputs: Ranger_Target_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const pl_ranger_target_kit = /** @type {(inputs: Ranger_Target_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const pt_ranger_target_kit = /** @type {(inputs: Ranger_Target_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const ru_ranger_target_kit = /** @type {(inputs: Ranger_Target_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кит`)
};

const sv_ranger_target_kit = /** @type {(inputs: Ranger_Target_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const tr_ranger_target_kit = /** @type {(inputs: Ranger_Target_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const zh_ranger_target_kit = /** @type {(inputs: Ranger_Target_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`合集`)
};

const ja_ranger_target_kit = /** @type {(inputs: Ranger_Target_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キット`)
};

/**
* | output |
* | --- |
* | "Kit" |
*
* @param {Ranger_Target_KitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_target_kit = /** @type {((inputs?: Ranger_Target_KitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Target_KitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_target_kit(inputs)
	if (locale === "de") return de_ranger_target_kit(inputs)
	if (locale === "fr") return fr_ranger_target_kit(inputs)
	if (locale === "it") return it_ranger_target_kit(inputs)
	if (locale === "nl") return nl_ranger_target_kit(inputs)
	if (locale === "pl") return pl_ranger_target_kit(inputs)
	if (locale === "pt") return pt_ranger_target_kit(inputs)
	if (locale === "ru") return ru_ranger_target_kit(inputs)
	if (locale === "sv") return sv_ranger_target_kit(inputs)
	if (locale === "tr") return tr_ranger_target_kit(inputs)
	if (locale === "zh") return zh_ranger_target_kit(inputs)
	if (locale === "ja") return ja_ranger_target_kit(inputs)
	return en_ranger_target_kit(inputs)
});
