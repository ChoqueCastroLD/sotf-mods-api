/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Sync_WaitingInputs */

const en_admin_builds_sync_waiting = /** @type {(inputs: Admin_Builds_Sync_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A check is already in progress`)
};

const es_admin_builds_sync_waiting = /** @type {(inputs: Admin_Builds_Sync_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya hay una consulta en curso`)
};

const de_admin_builds_sync_waiting = /** @type {(inputs: Admin_Builds_Sync_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine Prüfung läuft bereits`)
};

const fr_admin_builds_sync_waiting = /** @type {(inputs: Admin_Builds_Sync_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une vérification est déjà en cours`)
};

const it_admin_builds_sync_waiting = /** @type {(inputs: Admin_Builds_Sync_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un controllo è già in corso`)
};

const nl_admin_builds_sync_waiting = /** @type {(inputs: Admin_Builds_Sync_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is al een controle bezig`)
};

const pl_admin_builds_sync_waiting = /** @type {(inputs: Admin_Builds_Sync_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdzanie już trwa`)
};

const pt_admin_builds_sync_waiting = /** @type {(inputs: Admin_Builds_Sync_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Já há uma verificação em andamento`)
};

const ru_admin_builds_sync_waiting = /** @type {(inputs: Admin_Builds_Sync_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверка уже идёт`)
};

const sv_admin_builds_sync_waiting = /** @type {(inputs: Admin_Builds_Sync_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En kontroll pågår redan`)
};

const tr_admin_builds_sync_waiting = /** @type {(inputs: Admin_Builds_Sync_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir kontrol zaten sürüyor`)
};

const zh_admin_builds_sync_waiting = /** @type {(inputs: Admin_Builds_Sync_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已有一次检查正在进行`)
};

const ja_admin_builds_sync_waiting = /** @type {(inputs: Admin_Builds_Sync_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認はすでに進行中です`)
};

/**
* | output |
* | --- |
* | "A check is already in progress" |
*
* @param {Admin_Builds_Sync_WaitingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_sync_waiting = /** @type {((inputs?: Admin_Builds_Sync_WaitingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sync_WaitingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_sync_waiting(inputs)
	if (locale === "de") return de_admin_builds_sync_waiting(inputs)
	if (locale === "fr") return fr_admin_builds_sync_waiting(inputs)
	if (locale === "it") return it_admin_builds_sync_waiting(inputs)
	if (locale === "nl") return nl_admin_builds_sync_waiting(inputs)
	if (locale === "pl") return pl_admin_builds_sync_waiting(inputs)
	if (locale === "pt") return pt_admin_builds_sync_waiting(inputs)
	if (locale === "ru") return ru_admin_builds_sync_waiting(inputs)
	if (locale === "sv") return sv_admin_builds_sync_waiting(inputs)
	if (locale === "tr") return tr_admin_builds_sync_waiting(inputs)
	if (locale === "zh") return zh_admin_builds_sync_waiting(inputs)
	if (locale === "ja") return ja_admin_builds_sync_waiting(inputs)
	return en_admin_builds_sync_waiting(inputs)
});
