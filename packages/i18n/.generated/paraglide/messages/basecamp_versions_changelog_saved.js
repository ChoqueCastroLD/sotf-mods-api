/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Basecamp_Versions_Changelog_SavedInputs */

const en_basecamp_versions_changelog_saved = /** @type {(inputs: Basecamp_Versions_Changelog_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Changelog of v${i?.version} saved.`)
};

const es_basecamp_versions_changelog_saved = /** @type {(inputs: Basecamp_Versions_Changelog_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Novedades de la v${i?.version} guardadas.`)
};

const de_basecamp_versions_changelog_saved = /** @type {(inputs: Basecamp_Versions_Changelog_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Änderungen von v${i?.version} gespeichert.`)
};

const fr_basecamp_versions_changelog_saved = /** @type {(inputs: Basecamp_Versions_Changelog_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Changements de la v${i?.version} enregistrés.`)
};

const it_basecamp_versions_changelog_saved = /** @type {(inputs: Basecamp_Versions_Changelog_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Novità della v${i?.version} salvate.`)
};

const nl_basecamp_versions_changelog_saved = /** @type {(inputs: Basecamp_Versions_Changelog_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wijzigingen van v${i?.version} opgeslagen.`)
};

const pl_basecamp_versions_changelog_saved = /** @type {(inputs: Basecamp_Versions_Changelog_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zapisano listę zmian v${i?.version}.`)
};

const pt_basecamp_versions_changelog_saved = /** @type {(inputs: Basecamp_Versions_Changelog_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Novidades da v${i?.version} salvas.`)
};

const ru_basecamp_versions_changelog_saved = /** @type {(inputs: Basecamp_Versions_Changelog_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Изменения в v${i?.version} сохранены.`)
};

const sv_basecamp_versions_changelog_saved = /** @type {(inputs: Basecamp_Versions_Changelog_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ändringsloggen för v${i?.version} sparades.`)
};

const tr_basecamp_versions_changelog_saved = /** @type {(inputs: Basecamp_Versions_Changelog_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} değişiklik günlüğü kaydedildi.`)
};

const zh_basecamp_versions_changelog_saved = /** @type {(inputs: Basecamp_Versions_Changelog_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已保存 v${i?.version} 更新日志。`)
};

const ja_basecamp_versions_changelog_saved = /** @type {(inputs: Basecamp_Versions_Changelog_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} の更新履歴を保存しました。`)
};

/**
* | output |
* | --- |
* | "Changelog of v{version} saved." |
*
* @param {Basecamp_Versions_Changelog_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_changelog_saved = /** @type {((inputs: Basecamp_Versions_Changelog_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Changelog_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_changelog_saved(inputs)
	if (locale === "de") return de_basecamp_versions_changelog_saved(inputs)
	if (locale === "fr") return fr_basecamp_versions_changelog_saved(inputs)
	if (locale === "it") return it_basecamp_versions_changelog_saved(inputs)
	if (locale === "nl") return nl_basecamp_versions_changelog_saved(inputs)
	if (locale === "pl") return pl_basecamp_versions_changelog_saved(inputs)
	if (locale === "pt") return pt_basecamp_versions_changelog_saved(inputs)
	if (locale === "ru") return ru_basecamp_versions_changelog_saved(inputs)
	if (locale === "sv") return sv_basecamp_versions_changelog_saved(inputs)
	if (locale === "tr") return tr_basecamp_versions_changelog_saved(inputs)
	if (locale === "zh") return zh_basecamp_versions_changelog_saved(inputs)
	if (locale === "ja") return ja_basecamp_versions_changelog_saved(inputs)
	return en_basecamp_versions_changelog_saved(inputs)
});
