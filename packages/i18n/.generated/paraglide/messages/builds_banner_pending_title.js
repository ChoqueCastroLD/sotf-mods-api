/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Banner_Pending_TitleInputs */

const en_builds_banner_pending_title = /** @type {(inputs: Builds_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Under review`)
};

const es_builds_banner_pending_title = /** @type {(inputs: Builds_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En revisión`)
};

const de_builds_banner_pending_title = /** @type {(inputs: Builds_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In Prüfung`)
};

const fr_builds_banner_pending_title = /** @type {(inputs: Builds_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En cours d’examen`)
};

const it_builds_banner_pending_title = /** @type {(inputs: Builds_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In revisione`)
};

const nl_builds_banner_pending_title = /** @type {(inputs: Builds_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wordt beoordeeld`)
};

const pl_builds_banner_pending_title = /** @type {(inputs: Builds_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W weryfikacji`)
};

const pt_builds_banner_pending_title = /** @type {(inputs: Builds_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em análise`)
};

const ru_builds_banner_pending_title = /** @type {(inputs: Builds_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На проверке`)
};

const sv_builds_banner_pending_title = /** @type {(inputs: Builds_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Granskas`)
};

const tr_builds_banner_pending_title = /** @type {(inputs: Builds_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemede`)
};

const zh_builds_banner_pending_title = /** @type {(inputs: Builds_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审核中`)
};

const ja_builds_banner_pending_title = /** @type {(inputs: Builds_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`審査中`)
};

/**
* | output |
* | --- |
* | "Under review" |
*
* @param {Builds_Banner_Pending_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_banner_pending_title = /** @type {((inputs?: Builds_Banner_Pending_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Banner_Pending_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_banner_pending_title(inputs)
	if (locale === "de") return de_builds_banner_pending_title(inputs)
	if (locale === "fr") return fr_builds_banner_pending_title(inputs)
	if (locale === "it") return it_builds_banner_pending_title(inputs)
	if (locale === "nl") return nl_builds_banner_pending_title(inputs)
	if (locale === "pl") return pl_builds_banner_pending_title(inputs)
	if (locale === "pt") return pt_builds_banner_pending_title(inputs)
	if (locale === "ru") return ru_builds_banner_pending_title(inputs)
	if (locale === "sv") return sv_builds_banner_pending_title(inputs)
	if (locale === "tr") return tr_builds_banner_pending_title(inputs)
	if (locale === "zh") return zh_builds_banner_pending_title(inputs)
	if (locale === "ja") return ja_builds_banner_pending_title(inputs)
	return en_builds_banner_pending_title(inputs)
});
