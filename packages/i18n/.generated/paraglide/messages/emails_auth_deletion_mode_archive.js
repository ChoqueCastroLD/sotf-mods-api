/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Deletion_Mode_ArchiveInputs */

const en_emails_auth_deletion_mode_archive = /** @type {(inputs: Emails_Auth_Deletion_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your mods will be archived.`)
};

const es_emails_auth_deletion_mode_archive = /** @type {(inputs: Emails_Auth_Deletion_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus mods se archivarán.`)
};

const de_emails_auth_deletion_mode_archive = /** @type {(inputs: Emails_Auth_Deletion_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Mods werden archiviert.`)
};

const fr_emails_auth_deletion_mode_archive = /** @type {(inputs: Emails_Auth_Deletion_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos mods seront archivés.`)
};

const it_emails_auth_deletion_mode_archive = /** @type {(inputs: Emails_Auth_Deletion_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le tue mod verranno archiviate.`)
};

const nl_emails_auth_deletion_mode_archive = /** @type {(inputs: Emails_Auth_Deletion_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je mods worden gearchiveerd.`)
};

const pl_emails_auth_deletion_mode_archive = /** @type {(inputs: Emails_Auth_Deletion_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje mody zostaną zarchiwizowane.`)
};

const pt_emails_auth_deletion_mode_archive = /** @type {(inputs: Emails_Auth_Deletion_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus mods serão arquivados.`)
};

const ru_emails_auth_deletion_mode_archive = /** @type {(inputs: Emails_Auth_Deletion_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши моды будут архивированы.`)
};

const sv_emails_auth_deletion_mode_archive = /** @type {(inputs: Emails_Auth_Deletion_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina moddar arkiveras.`)
};

const tr_emails_auth_deletion_mode_archive = /** @type {(inputs: Emails_Auth_Deletion_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modların arşivlenecek.`)
};

const zh_emails_auth_deletion_mode_archive = /** @type {(inputs: Emails_Auth_Deletion_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组将被归档。`)
};

const ja_emails_auth_deletion_mode_archive = /** @type {(inputs: Emails_Auth_Deletion_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの MOD はアーカイブされます。`)
};

/**
* | output |
* | --- |
* | "Your mods will be archived." |
*
* @param {Emails_Auth_Deletion_Mode_ArchiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_deletion_mode_archive = /** @type {((inputs?: Emails_Auth_Deletion_Mode_ArchiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deletion_Mode_ArchiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_deletion_mode_archive(inputs)
	if (locale === "de") return de_emails_auth_deletion_mode_archive(inputs)
	if (locale === "fr") return fr_emails_auth_deletion_mode_archive(inputs)
	if (locale === "it") return it_emails_auth_deletion_mode_archive(inputs)
	if (locale === "nl") return nl_emails_auth_deletion_mode_archive(inputs)
	if (locale === "pl") return pl_emails_auth_deletion_mode_archive(inputs)
	if (locale === "pt") return pt_emails_auth_deletion_mode_archive(inputs)
	if (locale === "ru") return ru_emails_auth_deletion_mode_archive(inputs)
	if (locale === "sv") return sv_emails_auth_deletion_mode_archive(inputs)
	if (locale === "tr") return tr_emails_auth_deletion_mode_archive(inputs)
	if (locale === "zh") return zh_emails_auth_deletion_mode_archive(inputs)
	if (locale === "ja") return ja_emails_auth_deletion_mode_archive(inputs)
	return en_emails_auth_deletion_mode_archive(inputs)
});
