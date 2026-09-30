/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kits_Share_TextInputs */

const en_kits_share_text = /** @type {(inputs: Kits_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — a Sons of the Forest mod kit`)
};

const es_kits_share_text = /** @type {(inputs: Kits_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — un kit de mods de Sons of the Forest`)
};

const de_kits_share_text = /** @type {(inputs: Kits_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — ein Mod-Kit für Sons of the Forest`)
};

const fr_kits_share_text = /** @type {(inputs: Kits_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — un kit de mods pour Sons of the Forest`)
};

const it_kits_share_text = /** @type {(inputs: Kits_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — un kit di mod per Sons of the Forest`)
};

const nl_kits_share_text = /** @type {(inputs: Kits_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — een modkit voor Sons of the Forest`)
};

const pl_kits_share_text = /** @type {(inputs: Kits_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — zestaw modów do Sons of the Forest`)
};

const pt_kits_share_text = /** @type {(inputs: Kits_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — um kit de mods de Sons of the Forest`)
};

const ru_kits_share_text = /** @type {(inputs: Kits_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — набор модов для Sons of the Forest`)
};

const sv_kits_share_text = /** @type {(inputs: Kits_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — ett moddkit för Sons of the Forest`)
};

const tr_kits_share_text = /** @type {(inputs: Kits_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — bir Sons of the Forest mod kiti`)
};

const zh_kits_share_text = /** @type {(inputs: Kits_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — Sons of the Forest 模组套装`)
};

const ja_kits_share_text = /** @type {(inputs: Kits_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} — Sons of the Forest の MOD キット`)
};

/**
* | output |
* | --- |
* | "{name} — a Sons of the Forest mod kit" |
*
* @param {Kits_Share_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_share_text = /** @type {((inputs: Kits_Share_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Share_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_share_text(inputs)
	if (locale === "de") return de_kits_share_text(inputs)
	if (locale === "fr") return fr_kits_share_text(inputs)
	if (locale === "it") return it_kits_share_text(inputs)
	if (locale === "nl") return nl_kits_share_text(inputs)
	if (locale === "pl") return pl_kits_share_text(inputs)
	if (locale === "pt") return pt_kits_share_text(inputs)
	if (locale === "ru") return ru_kits_share_text(inputs)
	if (locale === "sv") return sv_kits_share_text(inputs)
	if (locale === "tr") return tr_kits_share_text(inputs)
	if (locale === "zh") return zh_kits_share_text(inputs)
	if (locale === "ja") return ja_kits_share_text(inputs)
	return en_kits_share_text(inputs)
});
