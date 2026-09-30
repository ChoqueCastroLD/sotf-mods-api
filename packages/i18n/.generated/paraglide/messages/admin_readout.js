/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_ReadoutInputs */

const en_admin_readout = /** @type {(inputs: Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin · Ranger Station`)
};

const es_admin_readout = /** @type {(inputs: Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin · Puesto de guardabosques`)
};

const de_admin_readout = /** @type {(inputs: Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin · Rangerstation`)
};

const fr_admin_readout = /** @type {(inputs: Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin · Poste des rangers`)
};

const it_admin_readout = /** @type {(inputs: Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin · Stazione dei ranger`)
};

const nl_admin_readout = /** @type {(inputs: Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin · Rangerpost`)
};

const pl_admin_readout = /** @type {(inputs: Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin · Posterunek strażników`)
};

const pt_admin_readout = /** @type {(inputs: Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin · Posto dos guardas`)
};

const ru_admin_readout = /** @type {(inputs: Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Админ · Пост рейнджеров`)
};

const sv_admin_readout = /** @type {(inputs: Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admin · Rangerstation`)
};

const tr_admin_readout = /** @type {(inputs: Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yönetim · Korucu İstasyonu`)
};

const zh_admin_readout = /** @type {(inputs: Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理 · 护林站`)
};

const ja_admin_readout = /** @type {(inputs: Admin_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理 · レンジャーステーション`)
};

/**
* | output |
* | --- |
* | "Admin · Ranger Station" |
*
* @param {Admin_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_readout = /** @type {((inputs?: Admin_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_readout(inputs)
	if (locale === "de") return de_admin_readout(inputs)
	if (locale === "fr") return fr_admin_readout(inputs)
	if (locale === "it") return it_admin_readout(inputs)
	if (locale === "nl") return nl_admin_readout(inputs)
	if (locale === "pl") return pl_admin_readout(inputs)
	if (locale === "pt") return pt_admin_readout(inputs)
	if (locale === "ru") return ru_admin_readout(inputs)
	if (locale === "sv") return sv_admin_readout(inputs)
	if (locale === "tr") return tr_admin_readout(inputs)
	if (locale === "zh") return zh_admin_readout(inputs)
	if (locale === "ja") return ja_admin_readout(inputs)
	return en_admin_readout(inputs)
});
