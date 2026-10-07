/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ checked: NonNullable<unknown>, buildId: NonNullable<unknown>, updated: NonNullable<unknown> }} Admin_Builds_Sync_StatusInputs */

const en_admin_builds_sync_status = /** @type {(inputs: Admin_Builds_Sync_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Last checked ${i?.checked}. Steam is on build ${i?.buildId}, updated ${i?.updated}.`)
};

const es_admin_builds_sync_status = /** @type {(inputs: Admin_Builds_Sync_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Última consulta: ${i?.checked}. Steam está en la build ${i?.buildId}, actualizada el ${i?.updated}.`)
};

const de_admin_builds_sync_status = /** @type {(inputs: Admin_Builds_Sync_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zuletzt geprüft: ${i?.checked}. Steam ist bei Build ${i?.buildId}, aktualisiert am ${i?.updated}.`)
};

const fr_admin_builds_sync_status = /** @type {(inputs: Admin_Builds_Sync_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dernière vérification : ${i?.checked}. Steam est sur le build ${i?.buildId}, mis à jour le ${i?.updated}.`)
};

const it_admin_builds_sync_status = /** @type {(inputs: Admin_Builds_Sync_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ultimo controllo: ${i?.checked}. Steam è alla build ${i?.buildId}, aggiornata il ${i?.updated}.`)
};

const nl_admin_builds_sync_status = /** @type {(inputs: Admin_Builds_Sync_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Laatst gecontroleerd: ${i?.checked}. Steam zit op build ${i?.buildId}, bijgewerkt op ${i?.updated}.`)
};

const pl_admin_builds_sync_status = /** @type {(inputs: Admin_Builds_Sync_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ostatnie sprawdzenie: ${i?.checked}. Steam ma build ${i?.buildId}, zaktualizowany ${i?.updated}.`)
};

const pt_admin_builds_sync_status = /** @type {(inputs: Admin_Builds_Sync_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Última verificação: ${i?.checked}. A Steam está no build ${i?.buildId}, atualizado em ${i?.updated}.`)
};

const ru_admin_builds_sync_status = /** @type {(inputs: Admin_Builds_Sync_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Последняя проверка: ${i?.checked}. В Steam сборка ${i?.buildId}, обновлена ${i?.updated}.`)
};

const sv_admin_builds_sync_status = /** @type {(inputs: Admin_Builds_Sync_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Senast kontrollerad: ${i?.checked}. Steam ligger på bygge ${i?.buildId}, uppdaterat ${i?.updated}.`)
};

const tr_admin_builds_sync_status = /** @type {(inputs: Admin_Builds_Sync_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Son kontrol: ${i?.checked}. Steam ${i?.buildId} sürümünde, güncelleme: ${i?.updated}.`)
};

const zh_admin_builds_sync_status = /** @type {(inputs: Admin_Builds_Sync_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`上次检查：${i?.checked}。Steam 当前为版本 ${i?.buildId}，更新于 ${i?.updated}。`)
};

const ja_admin_builds_sync_status = /** @type {(inputs: Admin_Builds_Sync_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最終確認: ${i?.checked}。Steam はビルド ${i?.buildId}、更新日時 ${i?.updated}。`)
};

/**
* | output |
* | --- |
* | "Last checked {checked}. Steam is on build {buildId}, updated {updated}." |
*
* @param {Admin_Builds_Sync_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_sync_status = /** @type {((inputs: Admin_Builds_Sync_StatusInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sync_StatusInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_sync_status(inputs)
	if (locale === "de") return de_admin_builds_sync_status(inputs)
	if (locale === "fr") return fr_admin_builds_sync_status(inputs)
	if (locale === "it") return it_admin_builds_sync_status(inputs)
	if (locale === "nl") return nl_admin_builds_sync_status(inputs)
	if (locale === "pl") return pl_admin_builds_sync_status(inputs)
	if (locale === "pt") return pt_admin_builds_sync_status(inputs)
	if (locale === "ru") return ru_admin_builds_sync_status(inputs)
	if (locale === "sv") return sv_admin_builds_sync_status(inputs)
	if (locale === "tr") return tr_admin_builds_sync_status(inputs)
	if (locale === "zh") return zh_admin_builds_sync_status(inputs)
	if (locale === "ja") return ja_admin_builds_sync_status(inputs)
	return en_admin_builds_sync_status(inputs)
});
