/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_ChangelogInputs */

const en_basecamp_versions_changelog = /** @type {(inputs: Basecamp_Versions_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changelog`)
};

const es_basecamp_versions_changelog = /** @type {(inputs: Basecamp_Versions_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambios`)
};

const de_basecamp_versions_changelog = /** @type {(inputs: Basecamp_Versions_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen`)
};

const fr_basecamp_versions_changelog = /** @type {(inputs: Basecamp_Versions_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notes de version`)
};

const it_basecamp_versions_changelog = /** @type {(inputs: Basecamp_Versions_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novità`)
};

const nl_basecamp_versions_changelog = /** @type {(inputs: Basecamp_Versions_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen`)
};

const pl_basecamp_versions_changelog = /** @type {(inputs: Basecamp_Versions_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista zmian`)
};

const pt_basecamp_versions_changelog = /** @type {(inputs: Basecamp_Versions_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novidades`)
};

const ru_basecamp_versions_changelog = /** @type {(inputs: Basecamp_Versions_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Список изменений`)
};

const sv_basecamp_versions_changelog = /** @type {(inputs: Basecamp_Versions_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändringslogg`)
};

const tr_basecamp_versions_changelog = /** @type {(inputs: Basecamp_Versions_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklik günlüğü`)
};

const zh_basecamp_versions_changelog = /** @type {(inputs: Basecamp_Versions_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新日志`)
};

const ja_basecamp_versions_changelog = /** @type {(inputs: Basecamp_Versions_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更履歴`)
};

/**
* | output |
* | --- |
* | "Changelog" |
*
* @param {Basecamp_Versions_ChangelogInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_changelog = /** @type {((inputs?: Basecamp_Versions_ChangelogInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_ChangelogInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_changelog(inputs)
	if (locale === "de") return de_basecamp_versions_changelog(inputs)
	if (locale === "fr") return fr_basecamp_versions_changelog(inputs)
	if (locale === "it") return it_basecamp_versions_changelog(inputs)
	if (locale === "nl") return nl_basecamp_versions_changelog(inputs)
	if (locale === "pl") return pl_basecamp_versions_changelog(inputs)
	if (locale === "pt") return pt_basecamp_versions_changelog(inputs)
	if (locale === "ru") return ru_basecamp_versions_changelog(inputs)
	if (locale === "sv") return sv_basecamp_versions_changelog(inputs)
	if (locale === "tr") return tr_basecamp_versions_changelog(inputs)
	if (locale === "zh") return zh_basecamp_versions_changelog(inputs)
	if (locale === "ja") return ja_basecamp_versions_changelog(inputs)
	return en_basecamp_versions_changelog(inputs)
});
