/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Footer_DevelopersInputs */

const en_shell_footer_developers = /** @type {(inputs: Shell_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Developers and API`)
};

const es_shell_footer_developers = /** @type {(inputs: Shell_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desarrolladores y API`)
};

const de_shell_footer_developers = /** @type {(inputs: Shell_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwickler und API`)
};

const fr_shell_footer_developers = /** @type {(inputs: Shell_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Développeurs et API`)
};

const it_shell_footer_developers = /** @type {(inputs: Shell_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sviluppatori e API`)
};

const nl_shell_footer_developers = /** @type {(inputs: Shell_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ontwikkelaars en API`)
};

const pl_shell_footer_developers = /** @type {(inputs: Shell_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deweloperzy i API`)
};

const pt_shell_footer_developers = /** @type {(inputs: Shell_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desenvolvedores e API`)
};

const ru_shell_footer_developers = /** @type {(inputs: Shell_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разработчикам и API`)
};

const sv_shell_footer_developers = /** @type {(inputs: Shell_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utvecklare och API`)
};

const tr_shell_footer_developers = /** @type {(inputs: Shell_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geliştiriciler ve API`)
};

const zh_shell_footer_developers = /** @type {(inputs: Shell_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开发者与 API`)
};

const ja_shell_footer_developers = /** @type {(inputs: Shell_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開発者とAPI`)
};

/**
* | output |
* | --- |
* | "Developers and API" |
*
* @param {Shell_Footer_DevelopersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_footer_developers = /** @type {((inputs?: Shell_Footer_DevelopersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Footer_DevelopersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_footer_developers(inputs)
	if (locale === "de") return de_shell_footer_developers(inputs)
	if (locale === "fr") return fr_shell_footer_developers(inputs)
	if (locale === "it") return it_shell_footer_developers(inputs)
	if (locale === "nl") return nl_shell_footer_developers(inputs)
	if (locale === "pl") return pl_shell_footer_developers(inputs)
	if (locale === "pt") return pt_shell_footer_developers(inputs)
	if (locale === "ru") return ru_shell_footer_developers(inputs)
	if (locale === "sv") return sv_shell_footer_developers(inputs)
	if (locale === "tr") return tr_shell_footer_developers(inputs)
	if (locale === "zh") return zh_shell_footer_developers(inputs)
	if (locale === "ja") return ja_shell_footer_developers(inputs)
	return en_shell_footer_developers(inputs)
});
