/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Meta_Og_Default_AltInputs */

const en_meta_og_default_alt = /** @type {(inputs: Meta_Og_Default_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: Sons of the Forest mods and builds`)
};

const es_meta_og_default_alt = /** @type {(inputs: Meta_Og_Default_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: mods y builds de Sons of the Forest`)
};

const de_meta_og_default_alt = /** @type {(inputs: Meta_Og_Default_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: Mods und Builds für Sons of the Forest`)
};

const fr_meta_og_default_alt = /** @type {(inputs: Meta_Og_Default_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods : mods et builds pour Sons of the Forest`)
};

const it_meta_og_default_alt = /** @type {(inputs: Meta_Og_Default_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: mod e build per Sons of the Forest`)
};

const nl_meta_og_default_alt = /** @type {(inputs: Meta_Og_Default_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: mods en builds voor Sons of the Forest`)
};

const pl_meta_og_default_alt = /** @type {(inputs: Meta_Og_Default_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: mody i buildy do Sons of the Forest`)
};

const pt_meta_og_default_alt = /** @type {(inputs: Meta_Og_Default_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: mods e builds de Sons of the Forest`)
};

const ru_meta_og_default_alt = /** @type {(inputs: Meta_Og_Default_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: моды и сборки для Sons of the Forest`)
};

const sv_meta_og_default_alt = /** @type {(inputs: Meta_Og_Default_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: moddar och builds till Sons of the Forest`)
};

const tr_meta_og_default_alt = /** @type {(inputs: Meta_Og_Default_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods: Sons of the Forest modları ve build’leri`)
};

const zh_meta_og_default_alt = /** @type {(inputs: Meta_Og_Default_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods：《森林之子》模组与构建`)
};

const ja_meta_og_default_alt = /** @type {(inputs: Meta_Og_Default_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods：Sons of the Forest の MOD とビルド`)
};

/**
* | output |
* | --- |
* | "SOTF Mods: Sons of the Forest mods and builds" |
*
* @param {Meta_Og_Default_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const meta_og_default_alt = /** @type {((inputs?: Meta_Og_Default_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Og_Default_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_meta_og_default_alt(inputs)
	if (locale === "de") return de_meta_og_default_alt(inputs)
	if (locale === "fr") return fr_meta_og_default_alt(inputs)
	if (locale === "it") return it_meta_og_default_alt(inputs)
	if (locale === "nl") return nl_meta_og_default_alt(inputs)
	if (locale === "pl") return pl_meta_og_default_alt(inputs)
	if (locale === "pt") return pt_meta_og_default_alt(inputs)
	if (locale === "ru") return ru_meta_og_default_alt(inputs)
	if (locale === "sv") return sv_meta_og_default_alt(inputs)
	if (locale === "tr") return tr_meta_og_default_alt(inputs)
	if (locale === "zh") return zh_meta_og_default_alt(inputs)
	if (locale === "ja") return ja_meta_og_default_alt(inputs)
	return en_meta_og_default_alt(inputs)
});
