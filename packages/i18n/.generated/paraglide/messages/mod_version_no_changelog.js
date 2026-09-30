/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Version_No_ChangelogInputs */

const en_mod_version_no_changelog = /** @type {(inputs: Mod_Version_No_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No changelog for this version.`)
};

const es_mod_version_no_changelog = /** @type {(inputs: Mod_Version_No_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta versión no tiene notas de cambios.`)
};

const de_mod_version_no_changelog = /** @type {(inputs: Mod_Version_No_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Changelog für diese Version.`)
};

const fr_mod_version_no_changelog = /** @type {(inputs: Mod_Version_No_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas de journal des modifications pour cette version.`)
};

const it_mod_version_no_changelog = /** @type {(inputs: Mod_Version_No_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun changelog per questa versione.`)
};

const nl_mod_version_no_changelog = /** @type {(inputs: Mod_Version_No_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen changelog voor deze versie.`)
};

const pl_mod_version_no_changelog = /** @type {(inputs: Mod_Version_No_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak listy zmian dla tej wersji.`)
};

const pt_mod_version_no_changelog = /** @type {(inputs: Mod_Version_No_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta versão não tem changelog.`)
};

const ru_mod_version_no_changelog = /** @type {(inputs: Mod_Version_No_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У этой версии нет списка изменений.`)
};

const sv_mod_version_no_changelog = /** @type {(inputs: Mod_Version_No_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen ändringslogg för den här versionen.`)
};

const tr_mod_version_no_changelog = /** @type {(inputs: Mod_Version_No_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sürüm için değişiklik günlüğü yok.`)
};

const zh_mod_version_no_changelog = /** @type {(inputs: Mod_Version_No_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此版本没有更新日志。`)
};

const ja_mod_version_no_changelog = /** @type {(inputs: Mod_Version_No_ChangelogInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このバージョンには更新履歴がありません。`)
};

/**
* | output |
* | --- |
* | "No changelog for this version." |
*
* @param {Mod_Version_No_ChangelogInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_version_no_changelog = /** @type {((inputs?: Mod_Version_No_ChangelogInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Version_No_ChangelogInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_version_no_changelog(inputs)
	if (locale === "de") return de_mod_version_no_changelog(inputs)
	if (locale === "fr") return fr_mod_version_no_changelog(inputs)
	if (locale === "it") return it_mod_version_no_changelog(inputs)
	if (locale === "nl") return nl_mod_version_no_changelog(inputs)
	if (locale === "pl") return pl_mod_version_no_changelog(inputs)
	if (locale === "pt") return pt_mod_version_no_changelog(inputs)
	if (locale === "ru") return ru_mod_version_no_changelog(inputs)
	if (locale === "sv") return sv_mod_version_no_changelog(inputs)
	if (locale === "tr") return tr_mod_version_no_changelog(inputs)
	if (locale === "zh") return zh_mod_version_no_changelog(inputs)
	if (locale === "ja") return ja_mod_version_no_changelog(inputs)
	return en_mod_version_no_changelog(inputs)
});
