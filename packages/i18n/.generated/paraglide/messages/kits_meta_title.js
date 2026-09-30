/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, curator: NonNullable<unknown> }} Kits_Meta_TitleInputs */

const en_kits_meta_title = /** @type {(inputs: Kits_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — mod kit by ${i?.curator}`)
};

const es_kits_meta_title = /** @type {(inputs: Kits_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — kit de mods de ${i?.curator}`)
};

const de_kits_meta_title = /** @type {(inputs: Kits_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — Mod-Kit von ${i?.curator}`)
};

const fr_kits_meta_title = /** @type {(inputs: Kits_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — kit de mods de ${i?.curator}`)
};

const it_kits_meta_title = /** @type {(inputs: Kits_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — kit di mod di ${i?.curator}`)
};

const nl_kits_meta_title = /** @type {(inputs: Kits_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — modkit van ${i?.curator}`)
};

const pl_kits_meta_title = /** @type {(inputs: Kits_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — zestaw modów od ${i?.curator}`)
};

const pt_kits_meta_title = /** @type {(inputs: Kits_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — kit de mods de ${i?.curator}`)
};

const ru_kits_meta_title = /** @type {(inputs: Kits_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — набор модов от ${i?.curator}`)
};

const sv_kits_meta_title = /** @type {(inputs: Kits_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — moddkit av ${i?.curator}`)
};

const tr_kits_meta_title = /** @type {(inputs: Kits_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — ${i?.curator} mod kiti`)
};

const zh_kits_meta_title = /** @type {(inputs: Kits_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — ${i?.curator} 的模组套装`)
};

const ja_kits_meta_title = /** @type {(inputs: Kits_Meta_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — ${i?.curator} さんの MOD キット`)
};

/**
* | output |
* | --- |
* | "{name} — mod kit by {curator}" |
*
* @param {Kits_Meta_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_meta_title = /** @type {((inputs: Kits_Meta_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Meta_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_meta_title(inputs)
	if (locale === "de") return de_kits_meta_title(inputs)
	if (locale === "fr") return fr_kits_meta_title(inputs)
	if (locale === "it") return it_kits_meta_title(inputs)
	if (locale === "nl") return nl_kits_meta_title(inputs)
	if (locale === "pl") return pl_kits_meta_title(inputs)
	if (locale === "pt") return pt_kits_meta_title(inputs)
	if (locale === "ru") return ru_kits_meta_title(inputs)
	if (locale === "sv") return sv_kits_meta_title(inputs)
	if (locale === "tr") return tr_kits_meta_title(inputs)
	if (locale === "zh") return zh_kits_meta_title(inputs)
	if (locale === "ja") return ja_kits_meta_title(inputs)
	return en_kits_meta_title(inputs)
});
