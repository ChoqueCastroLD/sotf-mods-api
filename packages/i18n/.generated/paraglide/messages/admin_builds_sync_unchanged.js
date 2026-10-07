/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ buildId: NonNullable<unknown> }} Admin_Builds_Sync_UnchangedInputs */

const en_admin_builds_sync_unchanged = /** @type {(inputs: Admin_Builds_Sync_UnchangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No new build. Steam is still on build ${i?.buildId}.`)
};

const es_admin_builds_sync_unchanged = /** @type {(inputs: Admin_Builds_Sync_UnchangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No hay builds nuevas. Steam sigue en la build ${i?.buildId}.`)
};

const de_admin_builds_sync_unchanged = /** @type {(inputs: Admin_Builds_Sync_UnchangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kein neuer Build. Steam ist weiterhin bei Build ${i?.buildId}.`)
};

const fr_admin_builds_sync_unchanged = /** @type {(inputs: Admin_Builds_Sync_UnchangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aucun nouveau build. Steam est toujours sur le build ${i?.buildId}.`)
};

const it_admin_builds_sync_unchanged = /** @type {(inputs: Admin_Builds_Sync_UnchangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nessuna nuova build. Steam è ancora alla build ${i?.buildId}.`)
};

const nl_admin_builds_sync_unchanged = /** @type {(inputs: Admin_Builds_Sync_UnchangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geen nieuwe build. Steam zit nog op build ${i?.buildId}.`)
};

const pl_admin_builds_sync_unchanged = /** @type {(inputs: Admin_Builds_Sync_UnchangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Brak nowego buildu. Steam nadal ma build ${i?.buildId}.`)
};

const pt_admin_builds_sync_unchanged = /** @type {(inputs: Admin_Builds_Sync_UnchangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nenhum build novo. A Steam continua no build ${i?.buildId}.`)
};

const ru_admin_builds_sync_unchanged = /** @type {(inputs: Admin_Builds_Sync_UnchangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Новых сборок нет. В Steam по-прежнему сборка ${i?.buildId}.`)
};

const sv_admin_builds_sync_unchanged = /** @type {(inputs: Admin_Builds_Sync_UnchangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inget nytt bygge. Steam ligger kvar på bygge ${i?.buildId}.`)
};

const tr_admin_builds_sync_unchanged = /** @type {(inputs: Admin_Builds_Sync_UnchangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yeni sürüm yok. Steam hâlâ ${i?.buildId} sürümünde.`)
};

const zh_admin_builds_sync_unchanged = /** @type {(inputs: Admin_Builds_Sync_UnchangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`没有新版本。Steam 仍是版本 ${i?.buildId}。`)
};

const ja_admin_builds_sync_unchanged = /** @type {(inputs: Admin_Builds_Sync_UnchangedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`新しいビルドはありません。Steam は引き続きビルド ${i?.buildId} です。`)
};

/**
* | output |
* | --- |
* | "No new build. Steam is still on build {buildId}." |
*
* @param {Admin_Builds_Sync_UnchangedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_sync_unchanged = /** @type {((inputs: Admin_Builds_Sync_UnchangedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sync_UnchangedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_sync_unchanged(inputs)
	if (locale === "de") return de_admin_builds_sync_unchanged(inputs)
	if (locale === "fr") return fr_admin_builds_sync_unchanged(inputs)
	if (locale === "it") return it_admin_builds_sync_unchanged(inputs)
	if (locale === "nl") return nl_admin_builds_sync_unchanged(inputs)
	if (locale === "pl") return pl_admin_builds_sync_unchanged(inputs)
	if (locale === "pt") return pt_admin_builds_sync_unchanged(inputs)
	if (locale === "ru") return ru_admin_builds_sync_unchanged(inputs)
	if (locale === "sv") return sv_admin_builds_sync_unchanged(inputs)
	if (locale === "tr") return tr_admin_builds_sync_unchanged(inputs)
	if (locale === "zh") return zh_admin_builds_sync_unchanged(inputs)
	if (locale === "ja") return ja_admin_builds_sync_unchanged(inputs)
	return en_admin_builds_sync_unchanged(inputs)
});
