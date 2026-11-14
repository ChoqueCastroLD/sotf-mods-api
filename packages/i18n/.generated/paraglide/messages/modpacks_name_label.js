/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Name_LabelInputs */

const en_modpacks_name_label = /** @type {(inputs: Modpacks_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
};

const es_modpacks_name_label = /** @type {(inputs: Modpacks_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre`)
};

const de_modpacks_name_label = /** @type {(inputs: Modpacks_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
};

const fr_modpacks_name_label = /** @type {(inputs: Modpacks_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom`)
};

const it_modpacks_name_label = /** @type {(inputs: Modpacks_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome`)
};

const nl_modpacks_name_label = /** @type {(inputs: Modpacks_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naam`)
};

const pl_modpacks_name_label = /** @type {(inputs: Modpacks_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa`)
};

const pt_modpacks_name_label = /** @type {(inputs: Modpacks_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome`)
};

const ru_modpacks_name_label = /** @type {(inputs: Modpacks_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название`)
};

const sv_modpacks_name_label = /** @type {(inputs: Modpacks_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namn`)
};

const tr_modpacks_name_label = /** @type {(inputs: Modpacks_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad`)
};

const zh_modpacks_name_label = /** @type {(inputs: Modpacks_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称`)
};

const ja_modpacks_name_label = /** @type {(inputs: Modpacks_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前`)
};

/**
* | output |
* | --- |
* | "Name" |
*
* @param {Modpacks_Name_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_name_label = /** @type {((inputs?: Modpacks_Name_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Name_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_name_label(inputs)
	if (locale === "de") return de_modpacks_name_label(inputs)
	if (locale === "fr") return fr_modpacks_name_label(inputs)
	if (locale === "it") return it_modpacks_name_label(inputs)
	if (locale === "nl") return nl_modpacks_name_label(inputs)
	if (locale === "pl") return pl_modpacks_name_label(inputs)
	if (locale === "pt") return pt_modpacks_name_label(inputs)
	if (locale === "ru") return ru_modpacks_name_label(inputs)
	if (locale === "sv") return sv_modpacks_name_label(inputs)
	if (locale === "tr") return tr_modpacks_name_label(inputs)
	if (locale === "zh") return zh_modpacks_name_label(inputs)
	if (locale === "ja") return ja_modpacks_name_label(inputs)
	return en_modpacks_name_label(inputs)
});
