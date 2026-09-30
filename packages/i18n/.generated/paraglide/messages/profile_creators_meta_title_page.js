/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ page: NonNullable<unknown> }} Profile_Creators_Meta_Title_PageInputs */

const en_profile_creators_meta_title_page = /** @type {(inputs: Profile_Creators_Meta_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sons of the Forest mod creators — page ${i?.page}`)
};

const es_profile_creators_meta_title_page = /** @type {(inputs: Profile_Creators_Meta_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Creadores de mods de Sons of the Forest — página ${i?.page}`)
};

const de_profile_creators_meta_title_page = /** @type {(inputs: Profile_Creators_Meta_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod-Ersteller für Sons of the Forest — Seite ${i?.page}`)
};

const fr_profile_creators_meta_title_page = /** @type {(inputs: Profile_Creators_Meta_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Créateurs de mods Sons of the Forest — page ${i?.page}`)
};

const it_profile_creators_meta_title_page = /** @type {(inputs: Profile_Creators_Meta_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Creatori di mod per Sons of the Forest — pagina ${i?.page}`)
};

const nl_profile_creators_meta_title_page = /** @type {(inputs: Profile_Creators_Meta_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Makers van Sons of the Forest-mods — pagina ${i?.page}`)
};

const pl_profile_creators_meta_title_page = /** @type {(inputs: Profile_Creators_Meta_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Twórcy modów do Sons of the Forest — strona ${i?.page}`)
};

const pt_profile_creators_meta_title_page = /** @type {(inputs: Profile_Creators_Meta_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Criadores de mods de Sons of the Forest — página ${i?.page}`)
};

const ru_profile_creators_meta_title_page = /** @type {(inputs: Profile_Creators_Meta_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Авторы модов для Sons of the Forest — страница ${i?.page}`)
};

const sv_profile_creators_meta_title_page = /** @type {(inputs: Profile_Creators_Meta_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modskapare för Sons of the Forest — sida ${i?.page}`)
};

const tr_profile_creators_meta_title_page = /** @type {(inputs: Profile_Creators_Meta_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sons of the Forest mod üreticileri — sayfa ${i?.page}`)
};

const zh_profile_creators_meta_title_page = /** @type {(inputs: Profile_Creators_Meta_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sons of the Forest 模组创作者 — 第 ${i?.page} 页`)
};

const ja_profile_creators_meta_title_page = /** @type {(inputs: Profile_Creators_Meta_Title_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sons of the Forest の MOD クリエイター — ${i?.page} ページ目`)
};

/**
* | output |
* | --- |
* | "Sons of the Forest mod creators — page {page}" |
*
* @param {Profile_Creators_Meta_Title_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_creators_meta_title_page = /** @type {((inputs: Profile_Creators_Meta_Title_PageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Creators_Meta_Title_PageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_creators_meta_title_page(inputs)
	if (locale === "de") return de_profile_creators_meta_title_page(inputs)
	if (locale === "fr") return fr_profile_creators_meta_title_page(inputs)
	if (locale === "it") return it_profile_creators_meta_title_page(inputs)
	if (locale === "nl") return nl_profile_creators_meta_title_page(inputs)
	if (locale === "pl") return pl_profile_creators_meta_title_page(inputs)
	if (locale === "pt") return pt_profile_creators_meta_title_page(inputs)
	if (locale === "ru") return ru_profile_creators_meta_title_page(inputs)
	if (locale === "sv") return sv_profile_creators_meta_title_page(inputs)
	if (locale === "tr") return tr_profile_creators_meta_title_page(inputs)
	if (locale === "zh") return zh_profile_creators_meta_title_page(inputs)
	if (locale === "ja") return ja_profile_creators_meta_title_page(inputs)
	return en_profile_creators_meta_title_page(inputs)
});
