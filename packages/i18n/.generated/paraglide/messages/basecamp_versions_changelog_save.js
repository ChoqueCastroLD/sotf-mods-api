/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_Changelog_SaveInputs */

const en_basecamp_versions_changelog_save = /** @type {(inputs: Basecamp_Versions_Changelog_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save changelog`)
};

const es_basecamp_versions_changelog_save = /** @type {(inputs: Basecamp_Versions_Changelog_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar novedades`)
};

const de_basecamp_versions_changelog_save = /** @type {(inputs: Basecamp_Versions_Changelog_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen speichern`)
};

const fr_basecamp_versions_changelog_save = /** @type {(inputs: Basecamp_Versions_Changelog_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer`)
};

const it_basecamp_versions_changelog_save = /** @type {(inputs: Basecamp_Versions_Changelog_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva novità`)
};

const nl_basecamp_versions_changelog_save = /** @type {(inputs: Basecamp_Versions_Changelog_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen opslaan`)
};

const pl_basecamp_versions_changelog_save = /** @type {(inputs: Basecamp_Versions_Changelog_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisz listę zmian`)
};

const pt_basecamp_versions_changelog_save = /** @type {(inputs: Basecamp_Versions_Changelog_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar novidades`)
};

const ru_basecamp_versions_changelog_save = /** @type {(inputs: Basecamp_Versions_Changelog_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранить изменения`)
};

const sv_basecamp_versions_changelog_save = /** @type {(inputs: Basecamp_Versions_Changelog_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara ändringslogg`)
};

const tr_basecamp_versions_changelog_save = /** @type {(inputs: Basecamp_Versions_Changelog_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Günlüğü kaydet`)
};

const zh_basecamp_versions_changelog_save = /** @type {(inputs: Basecamp_Versions_Changelog_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存更新日志`)
};

const ja_basecamp_versions_changelog_save = /** @type {(inputs: Basecamp_Versions_Changelog_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新履歴を保存`)
};

/**
* | output |
* | --- |
* | "Save changelog" |
*
* @param {Basecamp_Versions_Changelog_SaveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_changelog_save = /** @type {((inputs?: Basecamp_Versions_Changelog_SaveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Changelog_SaveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_changelog_save(inputs)
	if (locale === "de") return de_basecamp_versions_changelog_save(inputs)
	if (locale === "fr") return fr_basecamp_versions_changelog_save(inputs)
	if (locale === "it") return it_basecamp_versions_changelog_save(inputs)
	if (locale === "nl") return nl_basecamp_versions_changelog_save(inputs)
	if (locale === "pl") return pl_basecamp_versions_changelog_save(inputs)
	if (locale === "pt") return pt_basecamp_versions_changelog_save(inputs)
	if (locale === "ru") return ru_basecamp_versions_changelog_save(inputs)
	if (locale === "sv") return sv_basecamp_versions_changelog_save(inputs)
	if (locale === "tr") return tr_basecamp_versions_changelog_save(inputs)
	if (locale === "zh") return zh_basecamp_versions_changelog_save(inputs)
	if (locale === "ja") return ja_basecamp_versions_changelog_save(inputs)
	return en_basecamp_versions_changelog_save(inputs)
});
