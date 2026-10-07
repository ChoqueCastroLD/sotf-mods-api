/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Sync_FailedInputs */

const en_admin_builds_sync_failed = /** @type {(inputs: Admin_Builds_Sync_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Steam check failed`)
};

const es_admin_builds_sync_failed = /** @type {(inputs: Admin_Builds_Sync_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo consultar Steam`)
};

const de_admin_builds_sync_failed = /** @type {(inputs: Admin_Builds_Sync_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Steam-Prüfung ist fehlgeschlagen`)
};

const fr_admin_builds_sync_failed = /** @type {(inputs: Admin_Builds_Sync_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La vérification de Steam a échoué`)
};

const it_admin_builds_sync_failed = /** @type {(inputs: Admin_Builds_Sync_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il controllo di Steam non è riuscito`)
};

const nl_admin_builds_sync_failed = /** @type {(inputs: Admin_Builds_Sync_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De Steam-controle is mislukt`)
};

const pl_admin_builds_sync_failed = /** @type {(inputs: Admin_Builds_Sync_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdzenie Steama nie powiodło się`)
};

const pt_admin_builds_sync_failed = /** @type {(inputs: Admin_Builds_Sync_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A verificação da Steam falhou`)
};

const ru_admin_builds_sync_failed = /** @type {(inputs: Admin_Builds_Sync_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось проверить Steam`)
};

const sv_admin_builds_sync_failed = /** @type {(inputs: Admin_Builds_Sync_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam-kontrollen misslyckades`)
};

const tr_admin_builds_sync_failed = /** @type {(inputs: Admin_Builds_Sync_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam kontrolü başarısız oldu`)
};

const zh_admin_builds_sync_failed = /** @type {(inputs: Admin_Builds_Sync_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查 Steam 失败`)
};

const ja_admin_builds_sync_failed = /** @type {(inputs: Admin_Builds_Sync_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam の確認に失敗しました`)
};

/**
* | output |
* | --- |
* | "The Steam check failed" |
*
* @param {Admin_Builds_Sync_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_sync_failed = /** @type {((inputs?: Admin_Builds_Sync_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sync_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_sync_failed(inputs)
	if (locale === "de") return de_admin_builds_sync_failed(inputs)
	if (locale === "fr") return fr_admin_builds_sync_failed(inputs)
	if (locale === "it") return it_admin_builds_sync_failed(inputs)
	if (locale === "nl") return nl_admin_builds_sync_failed(inputs)
	if (locale === "pl") return pl_admin_builds_sync_failed(inputs)
	if (locale === "pt") return pt_admin_builds_sync_failed(inputs)
	if (locale === "ru") return ru_admin_builds_sync_failed(inputs)
	if (locale === "sv") return sv_admin_builds_sync_failed(inputs)
	if (locale === "tr") return tr_admin_builds_sync_failed(inputs)
	if (locale === "zh") return zh_admin_builds_sync_failed(inputs)
	if (locale === "ja") return ja_admin_builds_sync_failed(inputs)
	return en_admin_builds_sync_failed(inputs)
});
