/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Basecamp_Editor_Tab_VersionsInputs */

const en_basecamp_editor_tab_versions = /** @type {(inputs: Basecamp_Editor_Tab_VersionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versions (${i?.count})`)
};

const es_basecamp_editor_tab_versions = /** @type {(inputs: Basecamp_Editor_Tab_VersionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versiones (${i?.count})`)
};

const de_basecamp_editor_tab_versions = /** @type {(inputs: Basecamp_Editor_Tab_VersionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versionen (${i?.count})`)
};

const fr_basecamp_editor_tab_versions = /** @type {(inputs: Basecamp_Editor_Tab_VersionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versions (${i?.count})`)
};

const it_basecamp_editor_tab_versions = /** @type {(inputs: Basecamp_Editor_Tab_VersionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versioni (${i?.count})`)
};

const nl_basecamp_editor_tab_versions = /** @type {(inputs: Basecamp_Editor_Tab_VersionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versies (${i?.count})`)
};

const pl_basecamp_editor_tab_versions = /** @type {(inputs: Basecamp_Editor_Tab_VersionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wersje (${i?.count})`)
};

const pt_basecamp_editor_tab_versions = /** @type {(inputs: Basecamp_Editor_Tab_VersionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versões (${i?.count})`)
};

const ru_basecamp_editor_tab_versions = /** @type {(inputs: Basecamp_Editor_Tab_VersionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Версии (${i?.count})`)
};

const sv_basecamp_editor_tab_versions = /** @type {(inputs: Basecamp_Editor_Tab_VersionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versioner (${i?.count})`)
};

const tr_basecamp_editor_tab_versions = /** @type {(inputs: Basecamp_Editor_Tab_VersionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sürümler (${i?.count})`)
};

const zh_basecamp_editor_tab_versions = /** @type {(inputs: Basecamp_Editor_Tab_VersionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`版本（${i?.count}）`)
};

const ja_basecamp_editor_tab_versions = /** @type {(inputs: Basecamp_Editor_Tab_VersionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`バージョン（${i?.count}）`)
};

/**
* | output |
* | --- |
* | "Versions ({count})" |
*
* @param {Basecamp_Editor_Tab_VersionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_tab_versions = /** @type {((inputs: Basecamp_Editor_Tab_VersionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_Tab_VersionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_tab_versions(inputs)
	if (locale === "de") return de_basecamp_editor_tab_versions(inputs)
	if (locale === "fr") return fr_basecamp_editor_tab_versions(inputs)
	if (locale === "it") return it_basecamp_editor_tab_versions(inputs)
	if (locale === "nl") return nl_basecamp_editor_tab_versions(inputs)
	if (locale === "pl") return pl_basecamp_editor_tab_versions(inputs)
	if (locale === "pt") return pt_basecamp_editor_tab_versions(inputs)
	if (locale === "ru") return ru_basecamp_editor_tab_versions(inputs)
	if (locale === "sv") return sv_basecamp_editor_tab_versions(inputs)
	if (locale === "tr") return tr_basecamp_editor_tab_versions(inputs)
	if (locale === "zh") return zh_basecamp_editor_tab_versions(inputs)
	if (locale === "ja") return ja_basecamp_editor_tab_versions(inputs)
	return en_basecamp_editor_tab_versions(inputs)
});
