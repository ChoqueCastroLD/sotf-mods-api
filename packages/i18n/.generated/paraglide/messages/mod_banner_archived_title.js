/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Banner_Archived_TitleInputs */

const en_mod_banner_archived_title = /** @type {(inputs: Mod_Banner_Archived_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archived.`)
};

const es_mod_banner_archived_title = /** @type {(inputs: Mod_Banner_Archived_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivado.`)
};

const de_mod_banner_archived_title = /** @type {(inputs: Mod_Banner_Archived_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiviert.`)
};

const fr_mod_banner_archived_title = /** @type {(inputs: Mod_Banner_Archived_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivé.`)
};

const it_mod_banner_archived_title = /** @type {(inputs: Mod_Banner_Archived_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiviata.`)
};

const nl_mod_banner_archived_title = /** @type {(inputs: Mod_Banner_Archived_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gearchiveerd.`)
};

const pl_mod_banner_archived_title = /** @type {(inputs: Mod_Banner_Archived_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zarchiwizowany.`)
};

const pt_mod_banner_archived_title = /** @type {(inputs: Mod_Banner_Archived_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivado.`)
};

const ru_mod_banner_archived_title = /** @type {(inputs: Mod_Banner_Archived_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В архиве.`)
};

const sv_mod_banner_archived_title = /** @type {(inputs: Mod_Banner_Archived_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arkiverad.`)
};

const tr_mod_banner_archived_title = /** @type {(inputs: Mod_Banner_Archived_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arşivlendi.`)
};

const zh_mod_banner_archived_title = /** @type {(inputs: Mod_Banner_Archived_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已归档。`)
};

const ja_mod_banner_archived_title = /** @type {(inputs: Mod_Banner_Archived_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アーカイブ済み。`)
};

/**
* | output |
* | --- |
* | "Archived." |
*
* @param {Mod_Banner_Archived_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_banner_archived_title = /** @type {((inputs?: Mod_Banner_Archived_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Archived_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_banner_archived_title(inputs)
	if (locale === "de") return de_mod_banner_archived_title(inputs)
	if (locale === "fr") return fr_mod_banner_archived_title(inputs)
	if (locale === "it") return it_mod_banner_archived_title(inputs)
	if (locale === "nl") return nl_mod_banner_archived_title(inputs)
	if (locale === "pl") return pl_mod_banner_archived_title(inputs)
	if (locale === "pt") return pt_mod_banner_archived_title(inputs)
	if (locale === "ru") return ru_mod_banner_archived_title(inputs)
	if (locale === "sv") return sv_mod_banner_archived_title(inputs)
	if (locale === "tr") return tr_mod_banner_archived_title(inputs)
	if (locale === "zh") return zh_mod_banner_archived_title(inputs)
	if (locale === "ja") return ja_mod_banner_archived_title(inputs)
	return en_mod_banner_archived_title(inputs)
});
