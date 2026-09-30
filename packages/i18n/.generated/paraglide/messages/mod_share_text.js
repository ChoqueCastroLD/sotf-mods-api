/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Share_TextInputs */

const en_mod_share_text = /** @type {(inputs: Mod_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} for Sons of the Forest`)
};

const es_mod_share_text = /** @type {(inputs: Mod_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} para Sons of the Forest`)
};

const de_mod_share_text = /** @type {(inputs: Mod_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} für Sons of the Forest`)
};

const fr_mod_share_text = /** @type {(inputs: Mod_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} pour Sons of the Forest`)
};

const it_mod_share_text = /** @type {(inputs: Mod_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} per Sons of the Forest`)
};

const nl_mod_share_text = /** @type {(inputs: Mod_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} voor Sons of the Forest`)
};

const pl_mod_share_text = /** @type {(inputs: Mod_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} do Sons of the Forest`)
};

const pt_mod_share_text = /** @type {(inputs: Mod_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} para Sons of the Forest`)
};

const ru_mod_share_text = /** @type {(inputs: Mod_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} для Sons of the Forest`)
};

const sv_mod_share_text = /** @type {(inputs: Mod_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} till Sons of the Forest`)
};

const tr_mod_share_text = /** @type {(inputs: Mod_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sons of the Forest için ${i?.name}`)
};

const zh_mod_share_text = /** @type {(inputs: Mod_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sons of the Forest 模组：${i?.name}`)
};

const ja_mod_share_text = /** @type {(inputs: Mod_Share_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sons of the Forest 用 MOD：${i?.name}`)
};

/**
* | output |
* | --- |
* | "{name} for Sons of the Forest" |
*
* @param {Mod_Share_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_share_text = /** @type {((inputs: Mod_Share_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Share_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_share_text(inputs)
	if (locale === "de") return de_mod_share_text(inputs)
	if (locale === "fr") return fr_mod_share_text(inputs)
	if (locale === "it") return it_mod_share_text(inputs)
	if (locale === "nl") return nl_mod_share_text(inputs)
	if (locale === "pl") return pl_mod_share_text(inputs)
	if (locale === "pt") return pt_mod_share_text(inputs)
	if (locale === "ru") return ru_mod_share_text(inputs)
	if (locale === "sv") return sv_mod_share_text(inputs)
	if (locale === "tr") return tr_mod_share_text(inputs)
	if (locale === "zh") return zh_mod_share_text(inputs)
	if (locale === "ja") return ja_mod_share_text(inputs)
	return en_mod_share_text(inputs)
});
