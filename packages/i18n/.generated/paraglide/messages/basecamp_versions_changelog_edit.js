/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_Changelog_EditInputs */

const en_basecamp_versions_changelog_edit = /** @type {(inputs: Basecamp_Versions_Changelog_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit changelog`)
};

const es_basecamp_versions_changelog_edit = /** @type {(inputs: Basecamp_Versions_Changelog_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar novedades`)
};

const de_basecamp_versions_changelog_edit = /** @type {(inputs: Basecamp_Versions_Changelog_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen bearbeiten`)
};

const fr_basecamp_versions_changelog_edit = /** @type {(inputs: Basecamp_Versions_Changelog_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier le journal des changements`)
};

const it_basecamp_versions_changelog_edit = /** @type {(inputs: Basecamp_Versions_Changelog_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica le novità`)
};

const nl_basecamp_versions_changelog_edit = /** @type {(inputs: Basecamp_Versions_Changelog_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen bewerken`)
};

const pl_basecamp_versions_changelog_edit = /** @type {(inputs: Basecamp_Versions_Changelog_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj listę zmian`)
};

const pt_basecamp_versions_changelog_edit = /** @type {(inputs: Basecamp_Versions_Changelog_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar novidades`)
};

const ru_basecamp_versions_changelog_edit = /** @type {(inputs: Basecamp_Versions_Changelog_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить список изменений`)
};

const sv_basecamp_versions_changelog_edit = /** @type {(inputs: Basecamp_Versions_Changelog_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera ändringslogg`)
};

const tr_basecamp_versions_changelog_edit = /** @type {(inputs: Basecamp_Versions_Changelog_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklik günlüğünü düzenle`)
};

const zh_basecamp_versions_changelog_edit = /** @type {(inputs: Basecamp_Versions_Changelog_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑更新日志`)
};

const ja_basecamp_versions_changelog_edit = /** @type {(inputs: Basecamp_Versions_Changelog_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新履歴を編集`)
};

/**
* | output |
* | --- |
* | "Edit changelog" |
*
* @param {Basecamp_Versions_Changelog_EditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_changelog_edit = /** @type {((inputs?: Basecamp_Versions_Changelog_EditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Changelog_EditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_changelog_edit(inputs)
	if (locale === "de") return de_basecamp_versions_changelog_edit(inputs)
	if (locale === "fr") return fr_basecamp_versions_changelog_edit(inputs)
	if (locale === "it") return it_basecamp_versions_changelog_edit(inputs)
	if (locale === "nl") return nl_basecamp_versions_changelog_edit(inputs)
	if (locale === "pl") return pl_basecamp_versions_changelog_edit(inputs)
	if (locale === "pt") return pt_basecamp_versions_changelog_edit(inputs)
	if (locale === "ru") return ru_basecamp_versions_changelog_edit(inputs)
	if (locale === "sv") return sv_basecamp_versions_changelog_edit(inputs)
	if (locale === "tr") return tr_basecamp_versions_changelog_edit(inputs)
	if (locale === "zh") return zh_basecamp_versions_changelog_edit(inputs)
	if (locale === "ja") return ja_basecamp_versions_changelog_edit(inputs)
	return en_basecamp_versions_changelog_edit(inputs)
});
