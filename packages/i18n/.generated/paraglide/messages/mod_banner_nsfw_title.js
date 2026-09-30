/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Banner_Nsfw_TitleInputs */

const en_mod_banner_nsfw_title = /** @type {(inputs: Mod_Banner_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+.`)
};

const es_mod_banner_nsfw_title = /** @type {(inputs: Mod_Banner_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+18.`)
};

const de_mod_banner_nsfw_title = /** @type {(inputs: Mod_Banner_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ab 18.`)
};

const fr_mod_banner_nsfw_title = /** @type {(inputs: Mod_Banner_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+.`)
};

const it_mod_banner_nsfw_title = /** @type {(inputs: Mod_Banner_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+.`)
};

const nl_mod_banner_nsfw_title = /** @type {(inputs: Mod_Banner_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+.`)
};

const pl_mod_banner_nsfw_title = /** @type {(inputs: Mod_Banner_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+.`)
};

const pt_mod_banner_nsfw_title = /** @type {(inputs: Mod_Banner_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+.`)
};

const ru_mod_banner_nsfw_title = /** @type {(inputs: Mod_Banner_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+.`)
};

const sv_mod_banner_nsfw_title = /** @type {(inputs: Mod_Banner_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+.`)
};

const tr_mod_banner_nsfw_title = /** @type {(inputs: Mod_Banner_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+.`)
};

const zh_mod_banner_nsfw_title = /** @type {(inputs: Mod_Banner_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+。`)
};

const ja_mod_banner_nsfw_title = /** @type {(inputs: Mod_Banner_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18 歳以上。`)
};

/**
* | output |
* | --- |
* | "18+." |
*
* @param {Mod_Banner_Nsfw_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_banner_nsfw_title = /** @type {((inputs?: Mod_Banner_Nsfw_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Nsfw_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_banner_nsfw_title(inputs)
	if (locale === "de") return de_mod_banner_nsfw_title(inputs)
	if (locale === "fr") return fr_mod_banner_nsfw_title(inputs)
	if (locale === "it") return it_mod_banner_nsfw_title(inputs)
	if (locale === "nl") return nl_mod_banner_nsfw_title(inputs)
	if (locale === "pl") return pl_mod_banner_nsfw_title(inputs)
	if (locale === "pt") return pt_mod_banner_nsfw_title(inputs)
	if (locale === "ru") return ru_mod_banner_nsfw_title(inputs)
	if (locale === "sv") return sv_mod_banner_nsfw_title(inputs)
	if (locale === "tr") return tr_mod_banner_nsfw_title(inputs)
	if (locale === "zh") return zh_mod_banner_nsfw_title(inputs)
	if (locale === "ja") return ja_mod_banner_nsfw_title(inputs)
	return en_mod_banner_nsfw_title(inputs)
});
