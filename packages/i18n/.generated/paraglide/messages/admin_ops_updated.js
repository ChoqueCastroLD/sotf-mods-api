/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ time: NonNullable<unknown> }} Admin_Ops_UpdatedInputs */

const en_admin_ops_updated = /** @type {(inputs: Admin_Ops_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Updated ${i?.time}`)
};

const es_admin_ops_updated = /** @type {(inputs: Admin_Ops_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actualizado: ${i?.time}`)
};

const de_admin_ops_updated = /** @type {(inputs: Admin_Ops_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aktualisiert: ${i?.time}`)
};

const fr_admin_ops_updated = /** @type {(inputs: Admin_Ops_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mis à jour : ${i?.time}`)
};

const it_admin_ops_updated = /** @type {(inputs: Admin_Ops_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiornato: ${i?.time}`)
};

const nl_admin_ops_updated = /** @type {(inputs: Admin_Ops_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bijgewerkt: ${i?.time}`)
};

const pl_admin_ops_updated = /** @type {(inputs: Admin_Ops_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zaktualizowano: ${i?.time}`)
};

const pt_admin_ops_updated = /** @type {(inputs: Admin_Ops_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Atualizado: ${i?.time}`)
};

const ru_admin_ops_updated = /** @type {(inputs: Admin_Ops_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Обновлено: ${i?.time}`)
};

const sv_admin_ops_updated = /** @type {(inputs: Admin_Ops_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uppdaterad: ${i?.time}`)
};

const tr_admin_ops_updated = /** @type {(inputs: Admin_Ops_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Güncellendi: ${i?.time}`)
};

const zh_admin_ops_updated = /** @type {(inputs: Admin_Ops_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`更新于 ${i?.time}`)
};

const ja_admin_ops_updated = /** @type {(inputs: Admin_Ops_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`更新: ${i?.time}`)
};

/**
* | output |
* | --- |
* | "Updated {time}" |
*
* @param {Admin_Ops_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_updated = /** @type {((inputs: Admin_Ops_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_updated(inputs)
	if (locale === "de") return de_admin_ops_updated(inputs)
	if (locale === "fr") return fr_admin_ops_updated(inputs)
	if (locale === "it") return it_admin_ops_updated(inputs)
	if (locale === "nl") return nl_admin_ops_updated(inputs)
	if (locale === "pl") return pl_admin_ops_updated(inputs)
	if (locale === "pt") return pt_admin_ops_updated(inputs)
	if (locale === "ru") return ru_admin_ops_updated(inputs)
	if (locale === "sv") return sv_admin_ops_updated(inputs)
	if (locale === "tr") return tr_admin_ops_updated(inputs)
	if (locale === "zh") return zh_admin_ops_updated(inputs)
	if (locale === "ja") return ja_admin_ops_updated(inputs)
	return en_admin_ops_updated(inputs)
});
