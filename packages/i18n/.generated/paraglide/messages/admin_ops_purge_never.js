/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Purge_NeverInputs */

const en_admin_ops_purge_never = /** @type {(inputs: Admin_Ops_Purge_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Never`)
};

const es_admin_ops_purge_never = /** @type {(inputs: Admin_Ops_Purge_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nunca`)
};

const de_admin_ops_purge_never = /** @type {(inputs: Admin_Ops_Purge_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie`)
};

const fr_admin_ops_purge_never = /** @type {(inputs: Admin_Ops_Purge_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jamais`)
};

const it_admin_ops_purge_never = /** @type {(inputs: Admin_Ops_Purge_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mai`)
};

const nl_admin_ops_purge_never = /** @type {(inputs: Admin_Ops_Purge_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nooit`)
};

const pl_admin_ops_purge_never = /** @type {(inputs: Admin_Ops_Purge_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nigdy`)
};

const pt_admin_ops_purge_never = /** @type {(inputs: Admin_Ops_Purge_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nunca`)
};

const ru_admin_ops_purge_never = /** @type {(inputs: Admin_Ops_Purge_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Никогда`)
};

const sv_admin_ops_purge_never = /** @type {(inputs: Admin_Ops_Purge_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aldrig`)
};

const tr_admin_ops_purge_never = /** @type {(inputs: Admin_Ops_Purge_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hiç`)
};

const zh_admin_ops_purge_never = /** @type {(inputs: Admin_Ops_Purge_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从未`)
};

const ja_admin_ops_purge_never = /** @type {(inputs: Admin_Ops_Purge_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`なし`)
};

/**
* | output |
* | --- |
* | "Never" |
*
* @param {Admin_Ops_Purge_NeverInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_purge_never = /** @type {((inputs?: Admin_Ops_Purge_NeverInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Purge_NeverInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_purge_never(inputs)
	if (locale === "de") return de_admin_ops_purge_never(inputs)
	if (locale === "fr") return fr_admin_ops_purge_never(inputs)
	if (locale === "it") return it_admin_ops_purge_never(inputs)
	if (locale === "nl") return nl_admin_ops_purge_never(inputs)
	if (locale === "pl") return pl_admin_ops_purge_never(inputs)
	if (locale === "pt") return pt_admin_ops_purge_never(inputs)
	if (locale === "ru") return ru_admin_ops_purge_never(inputs)
	if (locale === "sv") return sv_admin_ops_purge_never(inputs)
	if (locale === "tr") return tr_admin_ops_purge_never(inputs)
	if (locale === "zh") return zh_admin_ops_purge_never(inputs)
	if (locale === "ja") return ja_admin_ops_purge_never(inputs)
	return en_admin_ops_purge_never(inputs)
});
