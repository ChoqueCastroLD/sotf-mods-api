/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Versions_Section_TitleInputs */

const en_mod_versions_section_title = /** @type {(inputs: Mod_Versions_Section_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions and changelog`)
};

const es_mod_versions_section_title = /** @type {(inputs: Mod_Versions_Section_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versiones y registro de cambios`)
};

const de_mod_versions_section_title = /** @type {(inputs: Mod_Versions_Section_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen und Änderungsprotokoll`)
};

const fr_mod_versions_section_title = /** @type {(inputs: Mod_Versions_Section_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions et journal des modifications`)
};

const it_mod_versions_section_title = /** @type {(inputs: Mod_Versions_Section_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioni e registro delle modifiche`)
};

const nl_mod_versions_section_title = /** @type {(inputs: Mod_Versions_Section_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versies en wijzigingslog`)
};

const pl_mod_versions_section_title = /** @type {(inputs: Mod_Versions_Section_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersje i lista zmian`)
};

const pt_mod_versions_section_title = /** @type {(inputs: Mod_Versions_Section_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versões e registro de alterações`)
};

const ru_mod_versions_section_title = /** @type {(inputs: Mod_Versions_Section_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версии и список изменений`)
};

const sv_mod_versions_section_title = /** @type {(inputs: Mod_Versions_Section_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioner och ändringslogg`)
};

const tr_mod_versions_section_title = /** @type {(inputs: Mod_Versions_Section_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürümler ve değişiklik günlüğü`)
};

const zh_mod_versions_section_title = /** @type {(inputs: Mod_Versions_Section_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本与更新日志`)
};

const ja_mod_versions_section_title = /** @type {(inputs: Mod_Versions_Section_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンと更新履歴`)
};

/**
* | output |
* | --- |
* | "Versions and changelog" |
*
* @param {Mod_Versions_Section_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_versions_section_title = /** @type {((inputs?: Mod_Versions_Section_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Versions_Section_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_versions_section_title(inputs)
	if (locale === "de") return de_mod_versions_section_title(inputs)
	if (locale === "fr") return fr_mod_versions_section_title(inputs)
	if (locale === "it") return it_mod_versions_section_title(inputs)
	if (locale === "nl") return nl_mod_versions_section_title(inputs)
	if (locale === "pl") return pl_mod_versions_section_title(inputs)
	if (locale === "pt") return pt_mod_versions_section_title(inputs)
	if (locale === "ru") return ru_mod_versions_section_title(inputs)
	if (locale === "sv") return sv_mod_versions_section_title(inputs)
	if (locale === "tr") return tr_mod_versions_section_title(inputs)
	if (locale === "zh") return zh_mod_versions_section_title(inputs)
	if (locale === "ja") return ja_mod_versions_section_title(inputs)
	return en_mod_versions_section_title(inputs)
});
