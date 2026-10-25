/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, game: NonNullable<unknown>, kind: NonNullable<unknown>, author: NonNullable<unknown> }} Mod_Meta_TitleInputs */

const en_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: ${i?.game} library by ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${i?.game} mod by ${i?.author}`)
	
};

const es_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: librería de ${i?.game} por ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name}: mod de ${i?.game} por ${i?.author}`)
	
};

const de_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: Bibliothek für ${i?.game} von ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name}: Mod für ${i?.game} von ${i?.author}`)
	
};

const fr_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} : bibliothèque ${i?.game} par ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name} : mod ${i?.game} par ${i?.author}`)
	
};

const it_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: libreria di ${i?.game} di ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name}: mod di ${i?.game} di ${i?.author}`)
	
};

const nl_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: ${i?.game}-bibliotheek van ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${i?.game}-mod van ${i?.author}`)
	
};

const pl_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: biblioteka do ${i?.game} od ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name}: mod do ${i?.game} od ${i?.author}`)
	
};

const pt_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: biblioteca de ${i?.game} por ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name}: mod de ${i?.game} por ${i?.author}`)
	
};

const ru_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: библиотека для ${i?.game} от ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name}: мод для ${i?.game} от ${i?.author}`)
	
};

const sv_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: bibliotek till ${i?.game} av ${i?.author}`);
	return /** @type {LocalizedString} */ (`${i?.name}: mod till ${i?.game} av ${i?.author}`)
	
};

const tr_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}: ${i?.author} tarafından ${i?.game} kütüphanesi`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${i?.author} tarafından ${i?.game} modu`)
	
};

const zh_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}：${i?.author} 制作的 ${i?.game} 前置库`);
	return /** @type {LocalizedString} */ (`${i?.name}：${i?.author} 制作的 ${i?.game} 模组`)
	
};

const ja_mod_meta_title = /** @type {(inputs: Mod_Meta_TitleInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}：${i?.author} による ${i?.game} ライブラリ`);
	return /** @type {LocalizedString} */ (`${i?.name}：${i?.author} による ${i?.game} MOD`)
	
};

/**
* | kind | output |
* | --- | --- |
* | "library" | "{name}: {game} library by {author}" |
* | * | "{name}: {game} mod by {author}" |
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
