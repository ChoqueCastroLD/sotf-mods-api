/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Admin_Awards_DeletedInputs */

const en_admin_awards_deleted = /** @type {(inputs: Admin_Awards_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Award withdrawn from ${i?.name}`)
};

const es_admin_awards_deleted = /** @type {(inputs: Admin_Awards_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Premio retirado a ${i?.name}`)
};

const de_admin_awards_deleted = /** @type {(inputs: Admin_Awards_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Auszeichnung von ${i?.name} zurückgezogen`)
};

const fr_admin_awards_deleted = /** @type {(inputs: Admin_Awards_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Récompense retirée à ${i?.name}`)
};

const it_admin_awards_deleted = /** @type {(inputs: Admin_Awards_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Premio revocato a ${i?.name}`)
};

const nl_admin_awards_deleted = /** @type {(inputs: Admin_Awards_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Prijs van ${i?.name} ingetrokken`)
};

const pl_admin_awards_deleted = /** @type {(inputs: Admin_Awards_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odebrano wyróżnienie: ${i?.name}`)
};

const pt_admin_awards_deleted = /** @type {(inputs: Admin_Awards_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Prêmio retirado de ${i?.name}`)
};

const ru_admin_awards_deleted = /** @type {(inputs: Admin_Awards_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Награда у ${i?.name} отозвана`)
};

const sv_admin_awards_deleted = /** @type {(inputs: Admin_Awards_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Utmärkelsen drogs tillbaka från ${i?.name}`)
};

const tr_admin_awards_deleted = /** @type {(inputs: Admin_Awards_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} modundan ödül geri alındı`)
};

const zh_admin_awards_deleted = /** @type {(inputs: Admin_Awards_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已撤销 ${i?.name} 的奖项`)
};

const ja_admin_awards_deleted = /** @type {(inputs: Admin_Awards_DeletedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} のアワードを取り消しました`)
};

/**
* | output |
* | --- |
* | "Award withdrawn from {name}" |
*
* @param {Admin_Awards_DeletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_deleted = /** @type {((inputs: Admin_Awards_DeletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_DeletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_deleted(inputs)
	if (locale === "de") return de_admin_awards_deleted(inputs)
	if (locale === "fr") return fr_admin_awards_deleted(inputs)
	if (locale === "it") return it_admin_awards_deleted(inputs)
	if (locale === "nl") return nl_admin_awards_deleted(inputs)
	if (locale === "pl") return pl_admin_awards_deleted(inputs)
	if (locale === "pt") return pt_admin_awards_deleted(inputs)
	if (locale === "ru") return ru_admin_awards_deleted(inputs)
	if (locale === "sv") return sv_admin_awards_deleted(inputs)
	if (locale === "tr") return tr_admin_awards_deleted(inputs)
	if (locale === "zh") return zh_admin_awards_deleted(inputs)
	if (locale === "ja") return ja_admin_awards_deleted(inputs)
	return en_admin_awards_deleted(inputs)
});
