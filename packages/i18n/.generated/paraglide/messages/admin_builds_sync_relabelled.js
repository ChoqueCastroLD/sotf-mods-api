/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Admin_Builds_Sync_RelabelledInputs */

const en_admin_builds_sync_relabelled = /** @type {(inputs: Admin_Builds_Sync_RelabelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build renamed to ${i?.label}`)
};

const es_admin_builds_sync_relabelled = /** @type {(inputs: Admin_Builds_Sync_RelabelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build renombrada a ${i?.label}`)
};

const de_admin_builds_sync_relabelled = /** @type {(inputs: Admin_Builds_Sync_RelabelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build umbenannt in ${i?.label}`)
};

const fr_admin_builds_sync_relabelled = /** @type {(inputs: Admin_Builds_Sync_RelabelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build renommé en ${i?.label}`)
};

const it_admin_builds_sync_relabelled = /** @type {(inputs: Admin_Builds_Sync_RelabelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build rinominata in ${i?.label}`)
};

const nl_admin_builds_sync_relabelled = /** @type {(inputs: Admin_Builds_Sync_RelabelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build hernoemd naar ${i?.label}`)
};

const pl_admin_builds_sync_relabelled = /** @type {(inputs: Admin_Builds_Sync_RelabelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build zmienił nazwę na ${i?.label}`)
};

const pt_admin_builds_sync_relabelled = /** @type {(inputs: Admin_Builds_Sync_RelabelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build renomeado para ${i?.label}`)
};

const ru_admin_builds_sync_relabelled = /** @type {(inputs: Admin_Builds_Sync_RelabelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Сборка переименована в ${i?.label}`)
};

const sv_admin_builds_sync_relabelled = /** @type {(inputs: Admin_Builds_Sync_RelabelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bygget har bytt namn till ${i?.label}`)
};

const tr_admin_builds_sync_relabelled = /** @type {(inputs: Admin_Builds_Sync_RelabelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sürümün adı ${i?.label} olarak değişti`)
};

const zh_admin_builds_sync_relabelled = /** @type {(inputs: Admin_Builds_Sync_RelabelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`版本已改名为 ${i?.label}`)
};

const ja_admin_builds_sync_relabelled = /** @type {(inputs: Admin_Builds_Sync_RelabelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ビルド名を ${i?.label} に変更しました`)
};

/**
* | output |
* | --- |
* | "Build renamed to {label}" |
*
* @param {Admin_Builds_Sync_RelabelledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_sync_relabelled = /** @type {((inputs: Admin_Builds_Sync_RelabelledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sync_RelabelledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_sync_relabelled(inputs)
	if (locale === "de") return de_admin_builds_sync_relabelled(inputs)
	if (locale === "fr") return fr_admin_builds_sync_relabelled(inputs)
	if (locale === "it") return it_admin_builds_sync_relabelled(inputs)
	if (locale === "nl") return nl_admin_builds_sync_relabelled(inputs)
	if (locale === "pl") return pl_admin_builds_sync_relabelled(inputs)
	if (locale === "pt") return pt_admin_builds_sync_relabelled(inputs)
	if (locale === "ru") return ru_admin_builds_sync_relabelled(inputs)
	if (locale === "sv") return sv_admin_builds_sync_relabelled(inputs)
	if (locale === "tr") return tr_admin_builds_sync_relabelled(inputs)
	if (locale === "zh") return zh_admin_builds_sync_relabelled(inputs)
	if (locale === "ja") return ja_admin_builds_sync_relabelled(inputs)
	return en_admin_builds_sync_relabelled(inputs)
});
