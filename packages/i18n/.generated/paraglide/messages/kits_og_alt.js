/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kits_Og_AltInputs */

const en_kits_og_alt = /** @type {(inputs: Kits_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, a Sons of the Forest mod kit on SOTF Mods`)
};

const es_kits_og_alt = /** @type {(inputs: Kits_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, un kit de mods de Sons of the Forest en SOTF Mods`)
};

const de_kits_og_alt = /** @type {(inputs: Kits_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, ein Mod-Kit für Sons of the Forest auf SOTF Mods`)
};

const fr_kits_og_alt = /** @type {(inputs: Kits_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, un kit de mods pour Sons of the Forest sur SOTF Mods`)
};

const it_kits_og_alt = /** @type {(inputs: Kits_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, un kit di mod per Sons of the Forest su SOTF Mods`)
};

const nl_kits_og_alt = /** @type {(inputs: Kits_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, een modkit voor Sons of the Forest op SOTF Mods`)
};

const pl_kits_og_alt = /** @type {(inputs: Kits_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} – zestaw modów do Sons of the Forest na SOTF Mods`)
};

const pt_kits_og_alt = /** @type {(inputs: Kits_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, um kit de mods de Sons of the Forest no SOTF Mods`)
};

const ru_kits_og_alt = /** @type {(inputs: Kits_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — набор модов для Sons of the Forest на SOTF Mods`)
};

const sv_kits_og_alt = /** @type {(inputs: Kits_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, ett moddkit för Sons of the Forest på SOTF Mods`)
};

const tr_kits_og_alt = /** @type {(inputs: Kits_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, SOTF Mods’ta bir Sons of the Forest mod kiti`)
};

const zh_kits_og_alt = /** @type {(inputs: Kits_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}：SOTF Mods 上的 Sons of the Forest 模组套装`)
};

const ja_kits_og_alt = /** @type {(inputs: Kits_Og_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}：SOTF Mods の Sons of the Forest MOD キット`)
};

/**
* | output |
* | --- |
* | "{name}, a Sons of the Forest mod kit on SOTF Mods" |
*
* @param {Kits_Og_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_og_alt = /** @type {((inputs: Kits_Og_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Og_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_og_alt(inputs)
	if (locale === "de") return de_kits_og_alt(inputs)
	if (locale === "fr") return fr_kits_og_alt(inputs)
	if (locale === "it") return it_kits_og_alt(inputs)
	if (locale === "nl") return nl_kits_og_alt(inputs)
	if (locale === "pl") return pl_kits_og_alt(inputs)
	if (locale === "pt") return pt_kits_og_alt(inputs)
	if (locale === "ru") return ru_kits_og_alt(inputs)
	if (locale === "sv") return sv_kits_og_alt(inputs)
	if (locale === "tr") return tr_kits_og_alt(inputs)
	if (locale === "zh") return zh_kits_og_alt(inputs)
	if (locale === "ja") return ja_kits_og_alt(inputs)
	return en_kits_og_alt(inputs)
});
