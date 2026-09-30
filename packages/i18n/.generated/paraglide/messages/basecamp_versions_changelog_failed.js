/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_Changelog_FailedInputs */

const en_basecamp_versions_changelog_failed = /** @type {(inputs: Basecamp_Versions_Changelog_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t save the changelog`)
};

const es_basecamp_versions_changelog_failed = /** @type {(inputs: Basecamp_Versions_Changelog_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron guardar las novedades`)
};

const de_basecamp_versions_changelog_failed = /** @type {(inputs: Basecamp_Versions_Changelog_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen konnten nicht gespeichert werden`)
};

const fr_basecamp_versions_changelog_failed = /** @type {(inputs: Basecamp_Versions_Changelog_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’enregistrer les changements`)
};

const it_basecamp_versions_changelog_failed = /** @type {(inputs: Basecamp_Versions_Changelog_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile salvare le novità`)
};

const nl_basecamp_versions_changelog_failed = /** @type {(inputs: Basecamp_Versions_Changelog_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen konden niet worden opgeslagen`)
};

const pl_basecamp_versions_changelog_failed = /** @type {(inputs: Basecamp_Versions_Changelog_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zapisać listy zmian`)
};

const pt_basecamp_versions_changelog_failed = /** @type {(inputs: Basecamp_Versions_Changelog_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível salvar as novidades`)
};

const ru_basecamp_versions_changelog_failed = /** @type {(inputs: Basecamp_Versions_Changelog_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сохранить изменения`)
};

const sv_basecamp_versions_changelog_failed = /** @type {(inputs: Basecamp_Versions_Changelog_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte spara ändringsloggen`)
};

const tr_basecamp_versions_changelog_failed = /** @type {(inputs: Basecamp_Versions_Changelog_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklik günlüğü kaydedilemedi`)
};

const zh_basecamp_versions_changelog_failed = /** @type {(inputs: Basecamp_Versions_Changelog_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法保存更新日志`)
};

const ja_basecamp_versions_changelog_failed = /** @type {(inputs: Basecamp_Versions_Changelog_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新履歴を保存できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t save the changelog" |
*
* @param {Basecamp_Versions_Changelog_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_changelog_failed = /** @type {((inputs?: Basecamp_Versions_Changelog_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Changelog_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_changelog_failed(inputs)
	if (locale === "de") return de_basecamp_versions_changelog_failed(inputs)
	if (locale === "fr") return fr_basecamp_versions_changelog_failed(inputs)
	if (locale === "it") return it_basecamp_versions_changelog_failed(inputs)
	if (locale === "nl") return nl_basecamp_versions_changelog_failed(inputs)
	if (locale === "pl") return pl_basecamp_versions_changelog_failed(inputs)
	if (locale === "pt") return pt_basecamp_versions_changelog_failed(inputs)
	if (locale === "ru") return ru_basecamp_versions_changelog_failed(inputs)
	if (locale === "sv") return sv_basecamp_versions_changelog_failed(inputs)
	if (locale === "tr") return tr_basecamp_versions_changelog_failed(inputs)
	if (locale === "zh") return zh_basecamp_versions_changelog_failed(inputs)
	if (locale === "ja") return ja_basecamp_versions_changelog_failed(inputs)
	return en_basecamp_versions_changelog_failed(inputs)
});
