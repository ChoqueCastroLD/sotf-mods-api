/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ queued: NonNullable<unknown>, failed: NonNullable<unknown> }} Admin_Ops_Purge_DetailInputs */

const en_admin_ops_purge_detail = /** @type {(inputs: Admin_Ops_Purge_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CDN purges waiting: ${i?.queued} · failed in the last 24 h: ${i?.failed}`)
};

const es_admin_ops_purge_detail = /** @type {(inputs: Admin_Ops_Purge_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Purgas en espera: ${i?.queued} · fallidas en las últimas 24 h: ${i?.failed}`)
};

const de_admin_ops_purge_detail = /** @type {(inputs: Admin_Ops_Purge_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wartende CDN-Purges: ${i?.queued} · fehlgeschlagen in den letzten 24 h: ${i?.failed}`)
};

const fr_admin_ops_purge_detail = /** @type {(inputs: Admin_Ops_Purge_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Purges en attente : ${i?.queued} · en échec ces dernières 24 h : ${i?.failed}`)
};

const it_admin_ops_purge_detail = /** @type {(inputs: Admin_Ops_Purge_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Purge in attesa: ${i?.queued} · fallite nelle ultime 24 h: ${i?.failed}`)
};

const nl_admin_ops_purge_detail = /** @type {(inputs: Admin_Ops_Purge_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wachtende purges: ${i?.queued} · mislukt in de afgelopen 24 u: ${i?.failed}`)
};

const pl_admin_ops_purge_detail = /** @type {(inputs: Admin_Ops_Purge_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Czyszczenia w kolejce: ${i?.queued} · nieudane w ostatnich 24 h: ${i?.failed}`)
};

const pt_admin_ops_purge_detail = /** @type {(inputs: Admin_Ops_Purge_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Purgas na fila: ${i?.queued} · com falha nas últimas 24 h: ${i?.failed}`)
};

const ru_admin_ops_purge_detail = /** @type {(inputs: Admin_Ops_Purge_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Очисток в очереди: ${i?.queued} · с ошибкой за 24 ч: ${i?.failed}`)
};

const sv_admin_ops_purge_detail = /** @type {(inputs: Admin_Ops_Purge_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rensningar i kö: ${i?.queued} · misslyckade senaste 24 h: ${i?.failed}`)
};

const tr_admin_ops_purge_detail = /** @type {(inputs: Admin_Ops_Purge_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bekleyen temizlemeler: ${i?.queued} · son 24 saatte başarısız: ${i?.failed}`)
};

const zh_admin_ops_purge_detail = /** @type {(inputs: Admin_Ops_Purge_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`等待中的清除:${i?.queued} · 最近 24 小时失败:${i?.failed}`)
};

const ja_admin_ops_purge_detail = /** @type {(inputs: Admin_Ops_Purge_DetailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`待機中のパージ: ${i?.queued} · 直近 24 時間の失敗: ${i?.failed}`)
};

/**
* | output |
* | --- |
* | "CDN purges waiting: {queued} · failed in the last 24 h: {failed}" |
*
* @param {Admin_Ops_Purge_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_purge_detail = /** @type {((inputs: Admin_Ops_Purge_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Purge_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_purge_detail(inputs)
	if (locale === "de") return de_admin_ops_purge_detail(inputs)
	if (locale === "fr") return fr_admin_ops_purge_detail(inputs)
	if (locale === "it") return it_admin_ops_purge_detail(inputs)
	if (locale === "nl") return nl_admin_ops_purge_detail(inputs)
	if (locale === "pl") return pl_admin_ops_purge_detail(inputs)
	if (locale === "pt") return pt_admin_ops_purge_detail(inputs)
	if (locale === "ru") return ru_admin_ops_purge_detail(inputs)
	if (locale === "sv") return sv_admin_ops_purge_detail(inputs)
	if (locale === "tr") return tr_admin_ops_purge_detail(inputs)
	if (locale === "zh") return zh_admin_ops_purge_detail(inputs)
	if (locale === "ja") return ja_admin_ops_purge_detail(inputs)
	return en_admin_ops_purge_detail(inputs)
});
