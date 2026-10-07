/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_SyncInputs */

const en_admin_builds_sync = /** @type {(inputs: Admin_Builds_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sync from Steam now`)
};

const es_admin_builds_sync = /** @type {(inputs: Admin_Builds_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sincronizar con Steam ahora`)
};

const de_admin_builds_sync = /** @type {(inputs: Admin_Builds_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jetzt mit Steam abgleichen`)
};

const fr_admin_builds_sync = /** @type {(inputs: Admin_Builds_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synchroniser avec Steam maintenant`)
};

const it_admin_builds_sync = /** @type {(inputs: Admin_Builds_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sincronizza con Steam ora`)
};

const nl_admin_builds_sync = /** @type {(inputs: Admin_Builds_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nu synchroniseren met Steam`)
};

const pl_admin_builds_sync = /** @type {(inputs: Admin_Builds_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synchronizuj ze Steamem teraz`)
};

const pt_admin_builds_sync = /** @type {(inputs: Admin_Builds_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sincronizar com a Steam agora`)
};

const ru_admin_builds_sync = /** @type {(inputs: Admin_Builds_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Синхронизировать со Steam сейчас`)
};

const sv_admin_builds_sync = /** @type {(inputs: Admin_Builds_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synka med Steam nu`)
};

const tr_admin_builds_sync = /** @type {(inputs: Admin_Builds_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şimdi Steam ile eşitle`)
};

const zh_admin_builds_sync = /** @type {(inputs: Admin_Builds_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`立即从 Steam 同步`)
};

const ja_admin_builds_sync = /** @type {(inputs: Admin_Builds_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今すぐ Steam と同期`)
};

/**
* | output |
* | --- |
* | "Sync from Steam now" |
*
* @param {Admin_Builds_SyncInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_sync = /** @type {((inputs?: Admin_Builds_SyncInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_SyncInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_sync(inputs)
	if (locale === "de") return de_admin_builds_sync(inputs)
	if (locale === "fr") return fr_admin_builds_sync(inputs)
	if (locale === "it") return it_admin_builds_sync(inputs)
	if (locale === "nl") return nl_admin_builds_sync(inputs)
	if (locale === "pl") return pl_admin_builds_sync(inputs)
	if (locale === "pt") return pt_admin_builds_sync(inputs)
	if (locale === "ru") return ru_admin_builds_sync(inputs)
	if (locale === "sv") return sv_admin_builds_sync(inputs)
	if (locale === "tr") return tr_admin_builds_sync(inputs)
	if (locale === "zh") return zh_admin_builds_sync(inputs)
	if (locale === "ja") return ja_admin_builds_sync(inputs)
	return en_admin_builds_sync(inputs)
});
