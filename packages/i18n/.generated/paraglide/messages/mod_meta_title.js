/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, kind: NonNullable<unknown>, author: NonNullable<unknown> }} Mod_Meta_TitleInputs */

const en_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} — Sons of the Forest library by ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name} — Sons of the Forest mod by ${i?.author}`)
	
};

const es_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} — librería de Sons of the Forest por ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name} — mod de Sons of the Forest por ${i?.author}`)
	
};

const de_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} — Sons-of-the-Forest-Bibliothek von ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name} — Sons-of-the-Forest-Mod von ${i?.author}`)
	
};

const fr_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} — bibliothèque Sons of the Forest par ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name} — mod Sons of the Forest par ${i?.author}`)
	
};

const it_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} — libreria di Sons of the Forest di ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name} — mod di Sons of the Forest di ${i?.author}`)
	
};

const nl_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} — Sons of the Forest-bibliotheek van ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name} — Sons of the Forest-mod van ${i?.author}`)
	
};

const pl_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} — biblioteka do Sons of the Forest od ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name} — mod do Sons of the Forest od ${i?.author}`)
	
};

const pt_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} — biblioteca de Sons of the Forest por ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name} — mod de Sons of the Forest por ${i?.author}`)
	
};

const ru_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} — библиотека для Sons of the Forest от ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name} — мод для Sons of the Forest от ${i?.author}`)
	
};

const sv_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} — bibliotek till Sons of the Forest av ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name} — mod till Sons of the Forest av ${i?.author}`)
	
};

const tr_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} — ${i?.author} tarafından Sons of the Forest kütüphanesi`);
	return /** @type {LocalizedString} */ (`${i?.name} — ${i?.author} tarafından Sons of the Forest modu`)
	
};

const zh_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} — ${i?.author} 制作的 Sons of the Forest 前置库`);
	return /** @type {LocalizedString} */ (`${i?.name} — ${i?.author} 制作的 Sons of the Forest 模组`)
	
};

const ja_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} — ${i?.author} による Sons of the Forest ライブラリ`);
	return /** @type {LocalizedString} */ (`${i?.name} — ${i?.author} による Sons of the Forest MOD`)
	
};

/**
* | kind | output |
* | --- | --- |
* | "library" | "{name} — Sons of the Forest library by {author}" |
* | * | "{name} — Sons of the Forest mod by {author}" |
*
* @param {Mod_Meta_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_meta_title = /** @type {((inputs: Mod_Meta_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Meta_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_meta_title(inputs)
	if (locale === "de") return de_mod_meta_title(inputs)
	if (locale === "fr") return fr_mod_meta_title(inputs)
	if (locale === "it") return it_mod_meta_title(inputs)
	if (locale === "nl") return nl_mod_meta_title(inputs)
	if (locale === "pl") return pl_mod_meta_title(inputs)
	if (locale === "pt") return pt_mod_meta_title(inputs)
	if (locale === "ru") return ru_mod_meta_title(inputs)
	if (locale === "sv") return sv_mod_meta_title(inputs)
	if (locale === "tr") return tr_mod_meta_title(inputs)
	if (locale === "zh") return zh_mod_meta_title(inputs)
	if (locale === "ja") return ja_mod_meta_title(inputs)
	return en_mod_meta_title(inputs)
});
