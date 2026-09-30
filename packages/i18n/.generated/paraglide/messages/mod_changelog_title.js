/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Changelog_TitleInputs */

const en_mod_changelog_title = /** @type {(inputs: Mod_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changelog`)
};

const es_mod_changelog_title = /** @type {(inputs: Mod_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notas de cambios`)
};

const de_mod_changelog_title = /** @type {(inputs: Mod_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changelog`)
};

const fr_mod_changelog_title = /** @type {(inputs: Mod_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Journal des modifications`)
};

const it_mod_changelog_title = /** @type {(inputs: Mod_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changelog`)
};

const nl_mod_changelog_title = /** @type {(inputs: Mod_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changelog`)
};

const pl_mod_changelog_title = /** @type {(inputs: Mod_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista zmian`)
};

const pt_mod_changelog_title = /** @type {(inputs: Mod_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changelog`)
};

const ru_mod_changelog_title = /** @type {(inputs: Mod_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Список изменений`)
};

const sv_mod_changelog_title = /** @type {(inputs: Mod_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändringslogg`)
};

const tr_mod_changelog_title = /** @type {(inputs: Mod_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklik günlüğü`)
};

const zh_mod_changelog_title = /** @type {(inputs: Mod_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新日志`)
};

const ja_mod_changelog_title = /** @type {(inputs: Mod_Changelog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新履歴`)
};

/**
* | output |
* | --- |
* | "Changelog" |
*
* @param {Mod_Changelog_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_changelog_title = /** @type {((inputs?: Mod_Changelog_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Changelog_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_changelog_title(inputs)
	if (locale === "de") return de_mod_changelog_title(inputs)
	if (locale === "fr") return fr_mod_changelog_title(inputs)
	if (locale === "it") return it_mod_changelog_title(inputs)
	if (locale === "nl") return nl_mod_changelog_title(inputs)
	if (locale === "pl") return pl_mod_changelog_title(inputs)
	if (locale === "pt") return pt_mod_changelog_title(inputs)
	if (locale === "ru") return ru_mod_changelog_title(inputs)
	if (locale === "sv") return sv_mod_changelog_title(inputs)
	if (locale === "tr") return tr_mod_changelog_title(inputs)
	if (locale === "zh") return zh_mod_changelog_title(inputs)
	if (locale === "ja") return ja_mod_changelog_title(inputs)
	return en_mod_changelog_title(inputs)
});
