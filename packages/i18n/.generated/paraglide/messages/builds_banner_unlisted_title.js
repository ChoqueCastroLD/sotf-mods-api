/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Banner_Unlisted_TitleInputs */

const en_builds_banner_unlisted_title = /** @type {(inputs: Builds_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlisted`)
};

const es_builds_banner_unlisted_title = /** @type {(inputs: Builds_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No listada`)
};

const de_builds_banner_unlisted_title = /** @type {(inputs: Builds_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht gelistet`)
};

const fr_builds_banner_unlisted_title = /** @type {(inputs: Builds_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non listée`)
};

const it_builds_banner_unlisted_title = /** @type {(inputs: Builds_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non in elenco`)
};

const nl_builds_banner_unlisted_title = /** @type {(inputs: Builds_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet vermeld`)
};

const pl_builds_banner_unlisted_title = /** @type {(inputs: Builds_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niepubliczny`)
};

const pt_builds_banner_unlisted_title = /** @type {(inputs: Builds_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não listada`)
};

const ru_builds_banner_unlisted_title = /** @type {(inputs: Builds_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыта из списков`)
};

const sv_builds_banner_unlisted_title = /** @type {(inputs: Builds_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Olistat`)
};

const tr_builds_banner_unlisted_title = /** @type {(inputs: Builds_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listelenmemiş`)
};

const zh_builds_banner_unlisted_title = /** @type {(inputs: Builds_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未公开列出`)
};

const ja_builds_banner_unlisted_title = /** @type {(inputs: Builds_Banner_Unlisted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非公開リスト`)
};

/**
* | output |
* | --- |
* | "Unlisted" |
*
* @param {Builds_Banner_Unlisted_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_banner_unlisted_title = /** @type {((inputs?: Builds_Banner_Unlisted_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Banner_Unlisted_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_banner_unlisted_title(inputs)
	if (locale === "de") return de_builds_banner_unlisted_title(inputs)
	if (locale === "fr") return fr_builds_banner_unlisted_title(inputs)
	if (locale === "it") return it_builds_banner_unlisted_title(inputs)
	if (locale === "nl") return nl_builds_banner_unlisted_title(inputs)
	if (locale === "pl") return pl_builds_banner_unlisted_title(inputs)
	if (locale === "pt") return pt_builds_banner_unlisted_title(inputs)
	if (locale === "ru") return ru_builds_banner_unlisted_title(inputs)
	if (locale === "sv") return sv_builds_banner_unlisted_title(inputs)
	if (locale === "tr") return tr_builds_banner_unlisted_title(inputs)
	if (locale === "zh") return zh_builds_banner_unlisted_title(inputs)
	if (locale === "ja") return ja_builds_banner_unlisted_title(inputs)
	return en_builds_banner_unlisted_title(inputs)
});
