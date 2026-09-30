/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ added: NonNullable<unknown>, updated: NonNullable<unknown> }} Admin_Recat_Csv_DoneInputs */

const en_admin_recat_csv_done = /** @type {(inputs: Admin_Recat_Csv_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV imported: ${i?.added} new rows, ${i?.updated} updated`)
};

const es_admin_recat_csv_done = /** @type {(inputs: Admin_Recat_Csv_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV importado: ${i?.added} filas nuevas, ${i?.updated} actualizadas`)
};

const de_admin_recat_csv_done = /** @type {(inputs: Admin_Recat_Csv_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV importiert: ${i?.added} neue Zeilen, ${i?.updated} aktualisiert`)
};

const fr_admin_recat_csv_done = /** @type {(inputs: Admin_Recat_Csv_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV importé : ${i?.added} nouvelles lignes, ${i?.updated} mises à jour`)
};

const it_admin_recat_csv_done = /** @type {(inputs: Admin_Recat_Csv_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV importato: ${i?.added} righe nuove, ${i?.updated} aggiornate`)
};

const nl_admin_recat_csv_done = /** @type {(inputs: Admin_Recat_Csv_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV geïmporteerd: ${i?.added} nieuwe rijen, ${i?.updated} bijgewerkt`)
};

const pl_admin_recat_csv_done = /** @type {(inputs: Admin_Recat_Csv_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zaimportowano CSV: nowe wiersze: ${i?.added}, zaktualizowane: ${i?.updated}`)
};

const pt_admin_recat_csv_done = /** @type {(inputs: Admin_Recat_Csv_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV importado: ${i?.added} linhas novas, ${i?.updated} atualizadas`)
};

const ru_admin_recat_csv_done = /** @type {(inputs: Admin_Recat_Csv_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV импортирован: новых строк — ${i?.added}, обновлено — ${i?.updated}`)
};

const sv_admin_recat_csv_done = /** @type {(inputs: Admin_Recat_Csv_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV importerad: ${i?.added} nya rader, ${i?.updated} uppdaterade`)
};

const tr_admin_recat_csv_done = /** @type {(inputs: Admin_Recat_Csv_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV içe aktarıldı: ${i?.added} yeni satır, ${i?.updated} güncellendi`)
};

const zh_admin_recat_csv_done = /** @type {(inputs: Admin_Recat_Csv_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV 已导入：新增 ${i?.added} 行，更新 ${i?.updated} 行`)
};

const ja_admin_recat_csv_done = /** @type {(inputs: Admin_Recat_Csv_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV をインポートしました：新規 ${i?.added} 行、更新 ${i?.updated} 行`)
};

/**
* | output |
* | --- |
* | "CSV imported: {added} new rows, {updated} updated" |
*
* @param {Admin_Recat_Csv_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_csv_done = /** @type {((inputs: Admin_Recat_Csv_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_csv_done(inputs)
	if (locale === "de") return de_admin_recat_csv_done(inputs)
	if (locale === "fr") return fr_admin_recat_csv_done(inputs)
	if (locale === "it") return it_admin_recat_csv_done(inputs)
	if (locale === "nl") return nl_admin_recat_csv_done(inputs)
	if (locale === "pl") return pl_admin_recat_csv_done(inputs)
	if (locale === "pt") return pt_admin_recat_csv_done(inputs)
	if (locale === "ru") return ru_admin_recat_csv_done(inputs)
	if (locale === "sv") return sv_admin_recat_csv_done(inputs)
	if (locale === "tr") return tr_admin_recat_csv_done(inputs)
	if (locale === "zh") return zh_admin_recat_csv_done(inputs)
	if (locale === "ja") return ja_admin_recat_csv_done(inputs)
	return en_admin_recat_csv_done(inputs)
});
