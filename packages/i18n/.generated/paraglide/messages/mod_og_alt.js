/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Og_AltInputs */

const en_mod_og_alt = /** @type {(inputs: Mod_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} on SOTF Mods`)
};

const es_mod_og_alt = /** @type {(inputs: Mod_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} en SOTF Mods`)
};

const de_mod_og_alt = /** @type {(inputs: Mod_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} auf SOTF Mods`)
};

const fr_mod_og_alt = /** @type {(inputs: Mod_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} sur SOTF Mods`)
};

const it_mod_og_alt = /** @type {(inputs: Mod_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} su SOTF Mods`)
};

const nl_mod_og_alt = /** @type {(inputs: Mod_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} op SOTF Mods`)
};

const pl_mod_og_alt = /** @type {(inputs: Mod_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} w SOTF Mods`)
};

const pt_mod_og_alt = /** @type {(inputs: Mod_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} no SOTF Mods`)
};

const ru_mod_og_alt = /** @type {(inputs: Mod_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} на SOTF Mods`)
};

const sv_mod_og_alt = /** @type {(inputs: Mod_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} på SOTF Mods`)
};

const tr_mod_og_alt = /** @type {(inputs: Mod_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SOTF Mods’ta ${i?.name}`)
};

const zh_mod_og_alt = /** @type {(inputs: Mod_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SOTF Mods 上的 ${i?.name}`)
};

const ja_mod_og_alt = /** @type {(inputs: Mod_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`SOTF Mods の ${i?.name}`)
};

/**
* | output |
* | --- |
* | "{name} on SOTF Mods" |
*
* @param {Mod_Og_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_og_alt = /** @type {((inputs: Mod_Og_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Og_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_og_alt(inputs)
	if (locale === "de") return de_mod_og_alt(inputs)
	if (locale === "fr") return fr_mod_og_alt(inputs)
	if (locale === "it") return it_mod_og_alt(inputs)
	if (locale === "nl") return nl_mod_og_alt(inputs)
	if (locale === "pl") return pl_mod_og_alt(inputs)
	if (locale === "pt") return pt_mod_og_alt(inputs)
	if (locale === "ru") return ru_mod_og_alt(inputs)
	if (locale === "sv") return sv_mod_og_alt(inputs)
	if (locale === "tr") return tr_mod_og_alt(inputs)
	if (locale === "zh") return zh_mod_og_alt(inputs)
	if (locale === "ja") return ja_mod_og_alt(inputs)
	return en_mod_og_alt(inputs)
});
