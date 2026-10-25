/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, game: NonNullable<unknown>, kind: NonNullable<unknown> }} Mod_Meta_Title_ShortInputs */

const en_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: ${i?.game} library`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${i?.game} mod`)
	
};

const es_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: librería de ${i?.game}`);
	return /** @type {LocalizedString} */ (`${i?.name}: mod de ${i?.game}`)
	
};

const de_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: Bibliothek für ${i?.game}`);
	return /** @type {LocalizedString} */ (`${i?.name}: Mod für ${i?.game}`)
	
};

const fr_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} : bibliothèque ${i?.game}`);
	return /** @type {LocalizedString} */ (`${i?.name} : mod ${i?.game}`)
	
};

const it_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: libreria di ${i?.game}`);
	return /** @type {LocalizedString} */ (`${i?.name}: mod di ${i?.game}`)
	
};

const nl_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: ${i?.game}-bibliotheek`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${i?.game}-mod`)
	
};

const pl_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: biblioteka do ${i?.game}`);
	return /** @type {LocalizedString} */ (`${i?.name}: mod do ${i?.game}`)
	
};

const pt_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: biblioteca de ${i?.game}`);
	return /** @type {LocalizedString} */ (`${i?.name}: mod de ${i?.game}`)
	
};

const ru_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: библиотека для ${i?.game}`);
	return /** @type {LocalizedString} */ (`${i?.name}: мод для ${i?.game}`)
	
};

const sv_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: bibliotek till ${i?.game}`);
	return /** @type {LocalizedString} */ (`${i?.name}: mod till ${i?.game}`)
	
};

const tr_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: ${i?.game} kütüphanesi`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${i?.game} modu`)
	
};

const zh_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}：${i?.game} 前置库`);
	return /** @type {LocalizedString} */ (`${i?.name}：${i?.game} 模组`)
	
};

const ja_mod_meta_title_short = /** @type {(inputs: Mod_Meta_Title_ShortInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}：${i?.game} ライブラリ`);
	return /** @type {LocalizedString} */ (`${i?.name}：${i?.game} MOD`)
	
};

/**
* | kind | output |
* | --- | --- |
* | "library" | "{name}: {game} library" |
* | * | "{name}: {game} mod" |
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
