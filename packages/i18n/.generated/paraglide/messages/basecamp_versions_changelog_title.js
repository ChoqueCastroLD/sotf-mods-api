/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Basecamp_Versions_Changelog_TitleInputs */

const en_basecamp_versions_changelog_title = /** @type {(inputs: Basecamp_Versions_Changelog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Changelog of v${i?.version}`)
};

const es_basecamp_versions_changelog_title = /** @type {(inputs: Basecamp_Versions_Changelog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Novedades de la v${i?.version}`)
};

const de_basecamp_versions_changelog_title = /** @type {(inputs: Basecamp_Versions_Changelog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Änderungen von v${i?.version}`)
};

const fr_basecamp_versions_changelog_title = /** @type {(inputs: Basecamp_Versions_Changelog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Changements de la v${i?.version}`)
};

const it_basecamp_versions_changelog_title = /** @type {(inputs: Basecamp_Versions_Changelog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Novità della v${i?.version}`)
};

const nl_basecamp_versions_changelog_title = /** @type {(inputs: Basecamp_Versions_Changelog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wijzigingen van v${i?.version}`)
};

const pl_basecamp_versions_changelog_title = /** @type {(inputs: Basecamp_Versions_Changelog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lista zmian v${i?.version}`)
};

const pt_basecamp_versions_changelog_title = /** @type {(inputs: Basecamp_Versions_Changelog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Novidades da v${i?.version}`)
};

const ru_basecamp_versions_changelog_title = /** @type {(inputs: Basecamp_Versions_Changelog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Изменения в v${i?.version}`)
};

const sv_basecamp_versions_changelog_title = /** @type {(inputs: Basecamp_Versions_Changelog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ändringslogg för v${i?.version}`)
};

const tr_basecamp_versions_changelog_title = /** @type {(inputs: Basecamp_Versions_Changelog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} değişiklik günlüğü`)
};

const zh_basecamp_versions_changelog_title = /** @type {(inputs: Basecamp_Versions_Changelog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} 更新日志`)
};

const ja_basecamp_versions_changelog_title = /** @type {(inputs: Basecamp_Versions_Changelog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} の更新履歴`)
};

/**
* | output |
* | --- |
* | "Changelog of v{version}" |
*
* @param {Basecamp_Versions_Changelog_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_changelog_title = /** @type {((inputs: Basecamp_Versions_Changelog_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Changelog_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_changelog_title(inputs)
	if (locale === "de") return de_basecamp_versions_changelog_title(inputs)
	if (locale === "fr") return fr_basecamp_versions_changelog_title(inputs)
	if (locale === "it") return it_basecamp_versions_changelog_title(inputs)
	if (locale === "nl") return nl_basecamp_versions_changelog_title(inputs)
	if (locale === "pl") return pl_basecamp_versions_changelog_title(inputs)
	if (locale === "pt") return pt_basecamp_versions_changelog_title(inputs)
	if (locale === "ru") return ru_basecamp_versions_changelog_title(inputs)
	if (locale === "sv") return sv_basecamp_versions_changelog_title(inputs)
	if (locale === "tr") return tr_basecamp_versions_changelog_title(inputs)
	if (locale === "zh") return zh_basecamp_versions_changelog_title(inputs)
	if (locale === "ja") return ja_basecamp_versions_changelog_title(inputs)
	return en_basecamp_versions_changelog_title(inputs)
});
