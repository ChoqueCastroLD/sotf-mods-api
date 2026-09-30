/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Banners_LabelInputs */

const en_mod_banners_label = /** @type {(inputs: Mod_Banners_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod status`)
};

const es_mod_banners_label = /** @type {(inputs: Mod_Banners_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado del mod`)
};

const de_mod_banners_label = /** @type {(inputs: Mod_Banners_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status des Mods`)
};

const fr_mod_banners_label = /** @type {(inputs: Mod_Banners_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`État du mod`)
};

const it_mod_banners_label = /** @type {(inputs: Mod_Banners_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stato della mod`)
};

const nl_mod_banners_label = /** @type {(inputs: Mod_Banners_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status van de mod`)
};

const pl_mod_banners_label = /** @type {(inputs: Mod_Banners_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stan moda`)
};

const pt_mod_banners_label = /** @type {(inputs: Mod_Banners_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status do mod`)
};

const ru_mod_banners_label = /** @type {(inputs: Mod_Banners_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статус мода`)
};

const sv_mod_banners_label = /** @type {(inputs: Mod_Banners_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modens status`)
};

const tr_mod_banners_label = /** @type {(inputs: Mod_Banners_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod durumu`)
};

const zh_mod_banners_label = /** @type {(inputs: Mod_Banners_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组状态`)
};

const ja_mod_banners_label = /** @type {(inputs: Mod_Banners_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD の状態`)
};

/**
* | output |
* | --- |
* | "Mod status" |
*
* @param {Mod_Banners_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_banners_label = /** @type {((inputs?: Mod_Banners_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banners_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_banners_label(inputs)
	if (locale === "de") return de_mod_banners_label(inputs)
	if (locale === "fr") return fr_mod_banners_label(inputs)
	if (locale === "it") return it_mod_banners_label(inputs)
	if (locale === "nl") return nl_mod_banners_label(inputs)
	if (locale === "pl") return pl_mod_banners_label(inputs)
	if (locale === "pt") return pt_mod_banners_label(inputs)
	if (locale === "ru") return ru_mod_banners_label(inputs)
	if (locale === "sv") return sv_mod_banners_label(inputs)
	if (locale === "tr") return tr_mod_banners_label(inputs)
	if (locale === "zh") return zh_mod_banners_label(inputs)
	if (locale === "ja") return ja_mod_banners_label(inputs)
	return en_mod_banners_label(inputs)
});
