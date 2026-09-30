/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Banner_Unlisted_TitleInputs */

const en_mod_banner_unlisted_title = /** @type {(inputs: Mod_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlisted.`)
};

const es_mod_banner_unlisted_title = /** @type {(inputs: Mod_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oculto.`)
};

const de_mod_banner_unlisted_title = /** @type {(inputs: Mod_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht gelistet.`)
};

const fr_mod_banner_unlisted_title = /** @type {(inputs: Mod_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non listé.`)
};

const it_mod_banner_unlisted_title = /** @type {(inputs: Mod_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non in elenco.`)
};

const nl_mod_banner_unlisted_title = /** @type {(inputs: Mod_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet vermeld.`)
};

const pl_mod_banner_unlisted_title = /** @type {(inputs: Mod_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niepubliczny.`)
};

const pt_mod_banner_unlisted_title = /** @type {(inputs: Mod_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não listado.`)
};

const ru_mod_banner_unlisted_title = /** @type {(inputs: Mod_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыт из списков.`)
};

const sv_mod_banner_unlisted_title = /** @type {(inputs: Mod_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Olistad.`)
};

const tr_mod_banner_unlisted_title = /** @type {(inputs: Mod_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listelenmemiş.`)
};

const zh_mod_banner_unlisted_title = /** @type {(inputs: Mod_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未公开列出。`)
};

const ja_mod_banner_unlisted_title = /** @type {(inputs: Mod_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非公開リスト。`)
};

/**
* | output |
* | --- |
* | "Unlisted." |
*
* @param {Mod_Banner_Unlisted_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_banner_unlisted_title = /** @type {((inputs?: Mod_Banner_Unlisted_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Unlisted_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_banner_unlisted_title(inputs)
	if (locale === "de") return de_mod_banner_unlisted_title(inputs)
	if (locale === "fr") return fr_mod_banner_unlisted_title(inputs)
	if (locale === "it") return it_mod_banner_unlisted_title(inputs)
	if (locale === "nl") return nl_mod_banner_unlisted_title(inputs)
	if (locale === "pl") return pl_mod_banner_unlisted_title(inputs)
	if (locale === "pt") return pt_mod_banner_unlisted_title(inputs)
	if (locale === "ru") return ru_mod_banner_unlisted_title(inputs)
	if (locale === "sv") return sv_mod_banner_unlisted_title(inputs)
	if (locale === "tr") return tr_mod_banner_unlisted_title(inputs)
	if (locale === "zh") return zh_mod_banner_unlisted_title(inputs)
	if (locale === "ja") return ja_mod_banner_unlisted_title(inputs)
	return en_mod_banner_unlisted_title(inputs)
});
