/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Admin_Builds_Sync_CreatedInputs */

const en_admin_builds_sync_created = /** @type {(inputs: Admin_Builds_Sync_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`New build registered: ${i?.label}`)
};

const es_admin_builds_sync_created = /** @type {(inputs: Admin_Builds_Sync_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build nueva registrada: ${i?.label}`)
};

const de_admin_builds_sync_created = /** @type {(inputs: Admin_Builds_Sync_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Neuer Build registriert: ${i?.label}`)
};

const fr_admin_builds_sync_created = /** @type {(inputs: Admin_Builds_Sync_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nouveau build enregistré : ${i?.label}`)
};

const it_admin_builds_sync_created = /** @type {(inputs: Admin_Builds_Sync_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nuova build registrata: ${i?.label}`)
};

const nl_admin_builds_sync_created = /** @type {(inputs: Admin_Builds_Sync_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nieuwe build geregistreerd: ${i?.label}`)
};

const pl_admin_builds_sync_created = /** @type {(inputs: Admin_Builds_Sync_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zarejestrowano nowy build: ${i?.label}`)
};

const pt_admin_builds_sync_created = /** @type {(inputs: Admin_Builds_Sync_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Novo build registrado: ${i?.label}`)
};

const ru_admin_builds_sync_created = /** @type {(inputs: Admin_Builds_Sync_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Добавлена новая сборка: ${i?.label}`)
};

const sv_admin_builds_sync_created = /** @type {(inputs: Admin_Builds_Sync_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nytt bygge registrerat: ${i?.label}`)
};

const tr_admin_builds_sync_created = /** @type {(inputs: Admin_Builds_Sync_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yeni sürüm kaydedildi: ${i?.label}`)
};

const zh_admin_builds_sync_created = /** @type {(inputs: Admin_Builds_Sync_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已登记新版本：${i?.label}`)
};

const ja_admin_builds_sync_created = /** @type {(inputs: Admin_Builds_Sync_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`新しいビルドを登録しました: ${i?.label}`)
};

/**
* | output |
* | --- |
* | "New build registered: {label}" |
*
* @param {Admin_Builds_Sync_CreatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_sync_created = /** @type {((inputs: Admin_Builds_Sync_CreatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sync_CreatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_sync_created(inputs)
	if (locale === "de") return de_admin_builds_sync_created(inputs)
	if (locale === "fr") return fr_admin_builds_sync_created(inputs)
	if (locale === "it") return it_admin_builds_sync_created(inputs)
	if (locale === "nl") return nl_admin_builds_sync_created(inputs)
	if (locale === "pl") return pl_admin_builds_sync_created(inputs)
	if (locale === "pt") return pt_admin_builds_sync_created(inputs)
	if (locale === "ru") return ru_admin_builds_sync_created(inputs)
	if (locale === "sv") return sv_admin_builds_sync_created(inputs)
	if (locale === "tr") return tr_admin_builds_sync_created(inputs)
	if (locale === "zh") return zh_admin_builds_sync_created(inputs)
	if (locale === "ja") return ja_admin_builds_sync_created(inputs)
	return en_admin_builds_sync_created(inputs)
});
