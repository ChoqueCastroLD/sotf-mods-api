/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Mod_Capsule_Loader_ShortInputs */

const en_mod_capsule_loader_short = /** @type {(inputs: Mod_Capsule_Loader_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`RedLoader ${i?.version}+`)
};

const es_mod_capsule_loader_short = /** @type {(inputs: Mod_Capsule_Loader_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`RedLoader ${i?.version}+`)
};

const de_mod_capsule_loader_short = /** @type {(inputs: Mod_Capsule_Loader_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`RedLoader ${i?.version}+`)
};

const fr_mod_capsule_loader_short = /** @type {(inputs: Mod_Capsule_Loader_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`RedLoader ${i?.version}+`)
};

const it_mod_capsule_loader_short = /** @type {(inputs: Mod_Capsule_Loader_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`RedLoader ${i?.version}+`)
};

const nl_mod_capsule_loader_short = /** @type {(inputs: Mod_Capsule_Loader_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`RedLoader ${i?.version}+`)
};

const pl_mod_capsule_loader_short = /** @type {(inputs: Mod_Capsule_Loader_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`RedLoader ${i?.version}+`)
};

const pt_mod_capsule_loader_short = /** @type {(inputs: Mod_Capsule_Loader_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`RedLoader ${i?.version}+`)
};

const ru_mod_capsule_loader_short = /** @type {(inputs: Mod_Capsule_Loader_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`RedLoader ${i?.version}+`)
};

const sv_mod_capsule_loader_short = /** @type {(inputs: Mod_Capsule_Loader_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`RedLoader ${i?.version}+`)
};

const tr_mod_capsule_loader_short = /** @type {(inputs: Mod_Capsule_Loader_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`RedLoader ${i?.version}+`)
};

const zh_mod_capsule_loader_short = /** @type {(inputs: Mod_Capsule_Loader_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`RedLoader ${i?.version}+`)
};

const ja_mod_capsule_loader_short = /** @type {(inputs: Mod_Capsule_Loader_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`RedLoader ${i?.version}+`)
};

/**
* | output |
* | --- |
* | "RedLoader {version}+" |
*
* @param {Mod_Capsule_Loader_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_capsule_loader_short = /** @type {((inputs: Mod_Capsule_Loader_ShortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Capsule_Loader_ShortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_capsule_loader_short(inputs)
	if (locale === "de") return de_mod_capsule_loader_short(inputs)
	if (locale === "fr") return fr_mod_capsule_loader_short(inputs)
	if (locale === "it") return it_mod_capsule_loader_short(inputs)
	if (locale === "nl") return nl_mod_capsule_loader_short(inputs)
	if (locale === "pl") return pl_mod_capsule_loader_short(inputs)
	if (locale === "pt") return pt_mod_capsule_loader_short(inputs)
	if (locale === "ru") return ru_mod_capsule_loader_short(inputs)
	if (locale === "sv") return sv_mod_capsule_loader_short(inputs)
	if (locale === "tr") return tr_mod_capsule_loader_short(inputs)
	if (locale === "zh") return zh_mod_capsule_loader_short(inputs)
	if (locale === "ja") return ja_mod_capsule_loader_short(inputs)
	return en_mod_capsule_loader_short(inputs)
});
