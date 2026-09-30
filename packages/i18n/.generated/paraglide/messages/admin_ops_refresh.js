/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_RefreshInputs */

const en_admin_ops_refresh = /** @type {(inputs: Admin_Ops_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refresh`)
};

const es_admin_ops_refresh = /** @type {(inputs: Admin_Ops_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizar`)
};

const de_admin_ops_refresh = /** @type {(inputs: Admin_Ops_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualisieren`)
};

const fr_admin_ops_refresh = /** @type {(inputs: Admin_Ops_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualiser`)
};

const it_admin_ops_refresh = /** @type {(inputs: Admin_Ops_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiorna`)
};

const nl_admin_ops_refresh = /** @type {(inputs: Admin_Ops_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vernieuwen`)
};

const pl_admin_ops_refresh = /** @type {(inputs: Admin_Ops_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odśwież`)
};

const pt_admin_ops_refresh = /** @type {(inputs: Admin_Ops_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizar`)
};

const ru_admin_ops_refresh = /** @type {(inputs: Admin_Ops_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновить`)
};

const sv_admin_ops_refresh = /** @type {(inputs: Admin_Ops_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdatera`)
};

const tr_admin_ops_refresh = /** @type {(inputs: Admin_Ops_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yenile`)
};

const zh_admin_ops_refresh = /** @type {(inputs: Admin_Ops_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`刷新`)
};

const ja_admin_ops_refresh = /** @type {(inputs: Admin_Ops_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新`)
};

/**
* | output |
* | --- |
* | "Refresh" |
*
* @param {Admin_Ops_RefreshInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_refresh = /** @type {((inputs?: Admin_Ops_RefreshInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_RefreshInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_refresh(inputs)
	if (locale === "de") return de_admin_ops_refresh(inputs)
	if (locale === "fr") return fr_admin_ops_refresh(inputs)
	if (locale === "it") return it_admin_ops_refresh(inputs)
	if (locale === "nl") return nl_admin_ops_refresh(inputs)
	if (locale === "pl") return pl_admin_ops_refresh(inputs)
	if (locale === "pt") return pt_admin_ops_refresh(inputs)
	if (locale === "ru") return ru_admin_ops_refresh(inputs)
	if (locale === "sv") return sv_admin_ops_refresh(inputs)
	if (locale === "tr") return tr_admin_ops_refresh(inputs)
	if (locale === "zh") return zh_admin_ops_refresh(inputs)
	if (locale === "ja") return ja_admin_ops_refresh(inputs)
	return en_admin_ops_refresh(inputs)
});
