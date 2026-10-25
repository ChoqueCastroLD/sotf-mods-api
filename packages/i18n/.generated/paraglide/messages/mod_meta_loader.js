/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Meta_LoaderInputs */

const en_mod_meta_loader = /** @type {(inputs: Mod_Meta_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod loader`)
};

const es_mod_meta_loader = /** @type {(inputs: Mod_Meta_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargador de mods`)
};

const de_mod_meta_loader = /** @type {(inputs: Mod_Meta_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Loader`)
};

const fr_mod_meta_loader = /** @type {(inputs: Mod_Meta_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargeur de mods`)
};

const it_mod_meta_loader = /** @type {(inputs: Mod_Meta_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod loader`)
};

const nl_mod_meta_loader = /** @type {(inputs: Mod_Meta_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modloader`)
};

const pl_mod_meta_loader = /** @type {(inputs: Mod_Meta_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loader modów`)
};

const pt_mod_meta_loader = /** @type {(inputs: Mod_Meta_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregador de mods`)
};

const ru_mod_meta_loader = /** @type {(inputs: Mod_Meta_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузчик модов`)
};

const sv_mod_meta_loader = /** @type {(inputs: Mod_Meta_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modladdare`)
};

const tr_mod_meta_loader = /** @type {(inputs: Mod_Meta_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod yükleyici`)
};

const zh_mod_meta_loader = /** @type {(inputs: Mod_Meta_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组加载器`)
};

const ja_mod_meta_loader = /** @type {(inputs: Mod_Meta_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODローダー`)
};

/**
* | output |
* | --- |
* | "Mod loader" |
*
* @param {Mod_Meta_LoaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_meta_loader = /** @type {((inputs?: Mod_Meta_LoaderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Meta_LoaderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_meta_loader(inputs)
	if (locale === "de") return de_mod_meta_loader(inputs)
	if (locale === "fr") return fr_mod_meta_loader(inputs)
	if (locale === "it") return it_mod_meta_loader(inputs)
	if (locale === "nl") return nl_mod_meta_loader(inputs)
	if (locale === "pl") return pl_mod_meta_loader(inputs)
	if (locale === "pt") return pt_mod_meta_loader(inputs)
	if (locale === "ru") return ru_mod_meta_loader(inputs)
	if (locale === "sv") return sv_mod_meta_loader(inputs)
	if (locale === "tr") return tr_mod_meta_loader(inputs)
	if (locale === "zh") return zh_mod_meta_loader(inputs)
	if (locale === "ja") return ja_mod_meta_loader(inputs)
	return en_mod_meta_loader(inputs)
});
