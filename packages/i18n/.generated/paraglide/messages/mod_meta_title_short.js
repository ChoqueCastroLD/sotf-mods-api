/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, kind: NonNullable<unknown> }} Mod_Meta_Title_ShortInputs */

const en_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: Sons of the Forest library`);
	return /** @type {LocalizedString} */ (`${i?.name}: Sons of the Forest mod`)
	
};

const es_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: librería de Sons of the Forest`);
	return /** @type {LocalizedString} */ (`${i?.name}: mod de Sons of the Forest`)
	
};

const de_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: Sons-of-the-Forest-Bibliothek`);
	return /** @type {LocalizedString} */ (`${i?.name}: Sons-of-the-Forest-Mod`)
	
};

const fr_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} : bibliothèque Sons of the Forest`);
	return /** @type {LocalizedString} */ (`${i?.name} : mod Sons of the Forest`)
	
};

const it_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: libreria di Sons of the Forest`);
	return /** @type {LocalizedString} */ (`${i?.name}: mod di Sons of the Forest`)
	
};

const nl_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: Sons of the Forest-bibliotheek`);
	return /** @type {LocalizedString} */ (`${i?.name}: Sons of the Forest-mod`)
	
};

const pl_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: biblioteka do Sons of the Forest`);
	return /** @type {LocalizedString} */ (`${i?.name}: mod do Sons of the Forest`)
	
};

const pt_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: biblioteca de Sons of the Forest`);
	return /** @type {LocalizedString} */ (`${i?.name}: mod de Sons of the Forest`)
	
};

const ru_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: библиотека для Sons of the Forest`);
	return /** @type {LocalizedString} */ (`${i?.name}: мод для Sons of the Forest`)
	
};

const sv_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: bibliotek till Sons of the Forest`);
	return /** @type {LocalizedString} */ (`${i?.name}: mod till Sons of the Forest`)
	
};

const tr_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: Sons of the Forest kütüphanesi`);
	return /** @type {LocalizedString} */ (`${i?.name}: Sons of the Forest modu`)
	
};

const zh_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}：Sons of the Forest 前置库`);
	return /** @type {LocalizedString} */ (`${i?.name}：Sons of the Forest 模组`)
	
};

const ja_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}：Sons of the Forest ライブラリ`);
	return /** @type {LocalizedString} */ (`${i?.name}：Sons of the Forest MOD`)
	
};

/**
* | kind | output |
* | --- | --- |
* | "library" | "{name}: Sons of the Forest library" |
* | * | "{name}: Sons of the Forest mod" |
*
* @param {Mod_Meta_Title_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_meta_title_short = /** @type {((inputs: Mod_Meta_Title_ShortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Meta_Title_ShortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_meta_title_short(inputs)
	if (locale === "de") return de_mod_meta_title_short(inputs)
	if (locale === "fr") return fr_mod_meta_title_short(inputs)
	if (locale === "it") return it_mod_meta_title_short(inputs)
	if (locale === "nl") return nl_mod_meta_title_short(inputs)
	if (locale === "pl") return pl_mod_meta_title_short(inputs)
	if (locale === "pt") return pt_mod_meta_title_short(inputs)
	if (locale === "ru") return ru_mod_meta_title_short(inputs)
	if (locale === "sv") return sv_mod_meta_title_short(inputs)
	if (locale === "tr") return tr_mod_meta_title_short(inputs)
	if (locale === "zh") return zh_mod_meta_title_short(inputs)
	if (locale === "ja") return ja_mod_meta_title_short(inputs)
	return en_mod_meta_title_short(inputs)
});
