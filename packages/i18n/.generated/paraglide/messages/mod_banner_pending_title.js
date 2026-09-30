/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Banner_Pending_TitleInputs */

const en_mod_banner_pending_title = /** @type {(inputs: Mod_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In review.`)
};

const es_mod_banner_pending_title = /** @type {(inputs: Mod_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En revisión.`)
};

const de_mod_banner_pending_title = /** @type {(inputs: Mod_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In Prüfung.`)
};

const fr_mod_banner_pending_title = /** @type {(inputs: Mod_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En cours d’examen.`)
};

const it_mod_banner_pending_title = /** @type {(inputs: Mod_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In revisione.`)
};

const nl_mod_banner_pending_title = /** @type {(inputs: Mod_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In beoordeling.`)
};

const pl_mod_banner_pending_title = /** @type {(inputs: Mod_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W weryfikacji.`)
};

const pt_mod_banner_pending_title = /** @type {(inputs: Mod_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em análise.`)
};

const ru_mod_banner_pending_title = /** @type {(inputs: Mod_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На проверке.`)
};

const sv_mod_banner_pending_title = /** @type {(inputs: Mod_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Granskas.`)
};

const tr_mod_banner_pending_title = /** @type {(inputs: Mod_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemede.`)
};

const zh_mod_banner_pending_title = /** @type {(inputs: Mod_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审核中。`)
};

const ja_mod_banner_pending_title = /** @type {(inputs: Mod_Banner_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`審査中。`)
};

/**
* | output |
* | --- |
* | "In review." |
*
* @param {Mod_Banner_Pending_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_banner_pending_title = /** @type {((inputs?: Mod_Banner_Pending_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Pending_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_banner_pending_title(inputs)
	if (locale === "de") return de_mod_banner_pending_title(inputs)
	if (locale === "fr") return fr_mod_banner_pending_title(inputs)
	if (locale === "it") return it_mod_banner_pending_title(inputs)
	if (locale === "nl") return nl_mod_banner_pending_title(inputs)
	if (locale === "pl") return pl_mod_banner_pending_title(inputs)
	if (locale === "pt") return pt_mod_banner_pending_title(inputs)
	if (locale === "ru") return ru_mod_banner_pending_title(inputs)
	if (locale === "sv") return sv_mod_banner_pending_title(inputs)
	if (locale === "tr") return tr_mod_banner_pending_title(inputs)
	if (locale === "zh") return zh_mod_banner_pending_title(inputs)
	if (locale === "ja") return ja_mod_banner_pending_title(inputs)
	return en_mod_banner_pending_title(inputs)
});
