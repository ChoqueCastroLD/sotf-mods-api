/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ page: NonNullable<unknown>, name: NonNullable<unknown> }} Mod_Meta_Subpage_TitleInputs */

const en_mod_meta_subpage_title = /** @type {(inputs: Mod_Meta_Subpage_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.page} · ${i?.name}`)
};

const es_mod_meta_subpage_title = /** @type {(inputs: Mod_Meta_Subpage_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.page} · ${i?.name}`)
};

const de_mod_meta_subpage_title = /** @type {(inputs: Mod_Meta_Subpage_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.page} · ${i?.name}`)
};

const fr_mod_meta_subpage_title = /** @type {(inputs: Mod_Meta_Subpage_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.page} · ${i?.name}`)
};

const it_mod_meta_subpage_title = /** @type {(inputs: Mod_Meta_Subpage_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.page} · ${i?.name}`)
};

const nl_mod_meta_subpage_title = /** @type {(inputs: Mod_Meta_Subpage_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.page} · ${i?.name}`)
};

const pl_mod_meta_subpage_title = /** @type {(inputs: Mod_Meta_Subpage_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.page} · ${i?.name}`)
};

const pt_mod_meta_subpage_title = /** @type {(inputs: Mod_Meta_Subpage_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.page} · ${i?.name}`)
};

const ru_mod_meta_subpage_title = /** @type {(inputs: Mod_Meta_Subpage_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.page} · ${i?.name}`)
};

const sv_mod_meta_subpage_title = /** @type {(inputs: Mod_Meta_Subpage_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.page} · ${i?.name}`)
};

const tr_mod_meta_subpage_title = /** @type {(inputs: Mod_Meta_Subpage_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.page} · ${i?.name}`)
};

const zh_mod_meta_subpage_title = /** @type {(inputs: Mod_Meta_Subpage_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.page} · ${i?.name}`)
};

const ja_mod_meta_subpage_title = /** @type {(inputs: Mod_Meta_Subpage_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.page} · ${i?.name}`)
};

/**
* | output |
* | --- |
* | "{page} · {name}" |
*
* @param {Mod_Meta_Subpage_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_meta_subpage_title = /** @type {((inputs: Mod_Meta_Subpage_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Meta_Subpage_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_meta_subpage_title(inputs)
	if (locale === "de") return de_mod_meta_subpage_title(inputs)
	if (locale === "fr") return fr_mod_meta_subpage_title(inputs)
	if (locale === "it") return it_mod_meta_subpage_title(inputs)
	if (locale === "nl") return nl_mod_meta_subpage_title(inputs)
	if (locale === "pl") return pl_mod_meta_subpage_title(inputs)
	if (locale === "pt") return pt_mod_meta_subpage_title(inputs)
	if (locale === "ru") return ru_mod_meta_subpage_title(inputs)
	if (locale === "sv") return sv_mod_meta_subpage_title(inputs)
	if (locale === "tr") return tr_mod_meta_subpage_title(inputs)
	if (locale === "zh") return zh_mod_meta_subpage_title(inputs)
	if (locale === "ja") return ja_mod_meta_subpage_title(inputs)
	return en_mod_meta_subpage_title(inputs)
});
