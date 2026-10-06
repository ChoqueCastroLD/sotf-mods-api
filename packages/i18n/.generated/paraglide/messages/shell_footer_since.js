/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Footer_SinceInputs */

const en_shell_footer_since = /** @type {(inputs: Shell_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Providing quality mods since March 2023`)
};

const es_shell_footer_since = /** @type {(inputs: Shell_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Proveyendo mods de calidad desde marzo de 2023`)
};

const de_shell_footer_since = /** @type {(inputs: Shell_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hochwertige Mods seit März 2023`)
};

const fr_shell_footer_since = /** @type {(inputs: Shell_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des mods de qualité depuis mars 2023`)
};

const it_shell_footer_since = /** @type {(inputs: Shell_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod di qualità da marzo 2023`)
};

const nl_shell_footer_since = /** @type {(inputs: Shell_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kwaliteitsmods sinds maart 2023`)
};

const pl_shell_footer_since = /** @type {(inputs: Shell_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najlepsze mody od marca 2023`)
};

const pt_shell_footer_since = /** @type {(inputs: Shell_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de qualidade desde março de 2023`)
};

const ru_shell_footer_since = /** @type {(inputs: Shell_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Качественные моды с марта 2023 года`)
};

const sv_shell_footer_since = /** @type {(inputs: Shell_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods av hög kvalitet sedan mars 2023`)
};

const tr_shell_footer_since = /** @type {(inputs: Shell_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mart 2023'ten beri kaliteli modlar`)
};

const zh_shell_footer_since = /** @type {(inputs: Shell_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自 2023 年 3 月起提供优质模组`)
};

const ja_shell_footer_since = /** @type {(inputs: Shell_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2023年3月から高品質なMODを提供`)
};

/**
* | output |
* | --- |
* | "Providing quality mods since March 2023" |
*
* @param {Shell_Footer_SinceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_footer_since = /** @type {((inputs?: Shell_Footer_SinceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Footer_SinceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_footer_since(inputs)
	if (locale === "de") return de_shell_footer_since(inputs)
	if (locale === "fr") return fr_shell_footer_since(inputs)
	if (locale === "it") return it_shell_footer_since(inputs)
	if (locale === "nl") return nl_shell_footer_since(inputs)
	if (locale === "pl") return pl_shell_footer_since(inputs)
	if (locale === "pt") return pt_shell_footer_since(inputs)
	if (locale === "ru") return ru_shell_footer_since(inputs)
	if (locale === "sv") return sv_shell_footer_since(inputs)
	if (locale === "tr") return tr_shell_footer_since(inputs)
	if (locale === "zh") return zh_shell_footer_since(inputs)
	if (locale === "ja") return ja_shell_footer_since(inputs)
	return en_shell_footer_since(inputs)
});
