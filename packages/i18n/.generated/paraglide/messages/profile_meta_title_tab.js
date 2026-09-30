/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ tab: NonNullable<unknown>, name: NonNullable<unknown>, handle: NonNullable<unknown> }} Profile_Meta_Title_TabInputs */

const en_profile_meta_title_tab = /** @type {(inputs: Profile_Meta_Title_TabInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tab} · ${i?.name} (@${i?.handle})`)
};

const es_profile_meta_title_tab = /** @type {(inputs: Profile_Meta_Title_TabInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tab} · ${i?.name} (@${i?.handle})`)
};

const de_profile_meta_title_tab = /** @type {(inputs: Profile_Meta_Title_TabInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tab} · ${i?.name} (@${i?.handle})`)
};

const fr_profile_meta_title_tab = /** @type {(inputs: Profile_Meta_Title_TabInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tab} · ${i?.name} (@${i?.handle})`)
};

const it_profile_meta_title_tab = /** @type {(inputs: Profile_Meta_Title_TabInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tab} · ${i?.name} (@${i?.handle})`)
};

const nl_profile_meta_title_tab = /** @type {(inputs: Profile_Meta_Title_TabInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tab} · ${i?.name} (@${i?.handle})`)
};

const pl_profile_meta_title_tab = /** @type {(inputs: Profile_Meta_Title_TabInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tab} · ${i?.name} (@${i?.handle})`)
};

const pt_profile_meta_title_tab = /** @type {(inputs: Profile_Meta_Title_TabInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tab} · ${i?.name} (@${i?.handle})`)
};

const ru_profile_meta_title_tab = /** @type {(inputs: Profile_Meta_Title_TabInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tab} · ${i?.name} (@${i?.handle})`)
};

const sv_profile_meta_title_tab = /** @type {(inputs: Profile_Meta_Title_TabInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tab} · ${i?.name} (@${i?.handle})`)
};

const tr_profile_meta_title_tab = /** @type {(inputs: Profile_Meta_Title_TabInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tab} · ${i?.name} (@${i?.handle})`)
};

const zh_profile_meta_title_tab = /** @type {(inputs: Profile_Meta_Title_TabInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tab} · ${i?.name}（@${i?.handle}）`)
};

const ja_profile_meta_title_tab = /** @type {(inputs: Profile_Meta_Title_TabInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tab} · ${i?.name}（@${i?.handle}）`)
};

/**
* | output |
* | --- |
* | "{tab} · {name} (@{handle})" |
*
* @param {Profile_Meta_Title_TabInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_meta_title_tab = /** @type {((inputs: Profile_Meta_Title_TabInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Meta_Title_TabInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_meta_title_tab(inputs)
	if (locale === "de") return de_profile_meta_title_tab(inputs)
	if (locale === "fr") return fr_profile_meta_title_tab(inputs)
	if (locale === "it") return it_profile_meta_title_tab(inputs)
	if (locale === "nl") return nl_profile_meta_title_tab(inputs)
	if (locale === "pl") return pl_profile_meta_title_tab(inputs)
	if (locale === "pt") return pt_profile_meta_title_tab(inputs)
	if (locale === "ru") return ru_profile_meta_title_tab(inputs)
	if (locale === "sv") return sv_profile_meta_title_tab(inputs)
	if (locale === "tr") return tr_profile_meta_title_tab(inputs)
	if (locale === "zh") return zh_profile_meta_title_tab(inputs)
	if (locale === "ja") return ja_profile_meta_title_tab(inputs)
	return en_profile_meta_title_tab(inputs)
});
