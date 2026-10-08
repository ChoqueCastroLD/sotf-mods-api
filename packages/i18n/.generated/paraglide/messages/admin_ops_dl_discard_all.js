/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_Discard_AllInputs */

const en_admin_ops_dl_discard_all = /** @type {(inputs: Admin_Ops_Dl_Discard_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discard all`)
};

const es_admin_ops_dl_discard_all = /** @type {(inputs: Admin_Ops_Dl_Discard_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar todas`)
};

const de_admin_ops_dl_discard_all = /** @type {(inputs: Admin_Ops_Dl_Discard_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle verwerfen`)
};

const fr_admin_ops_dl_discard_all = /** @type {(inputs: Admin_Ops_Dl_Discard_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout abandonner`)
};

const it_admin_ops_dl_discard_all = /** @type {(inputs: Admin_Ops_Dl_Discard_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarta tutti`)
};

const nl_admin_ops_dl_discard_all = /** @type {(inputs: Admin_Ops_Dl_Discard_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles verwijderen`)
};

const pl_admin_ops_dl_discard_all = /** @type {(inputs: Admin_Ops_Dl_Discard_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzuć wszystkie`)
};

const pt_admin_ops_dl_discard_all = /** @type {(inputs: Admin_Ops_Dl_Discard_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar todas`)
};

const ru_admin_ops_dl_discard_all = /** @type {(inputs: Admin_Ops_Dl_Discard_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить все`)
};

const sv_admin_ops_dl_discard_all = /** @type {(inputs: Admin_Ops_Dl_Discard_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släng alla`)
};

const tr_admin_ops_dl_discard_all = /** @type {(inputs: Admin_Ops_Dl_Discard_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümünü at`)
};

const zh_admin_ops_dl_discard_all = /** @type {(inputs: Admin_Ops_Dl_Discard_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部丢弃`)
};

const ja_admin_ops_dl_discard_all = /** @type {(inputs: Admin_Ops_Dl_Discard_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて破棄`)
};

/**
* | output |
* | --- |
* | "Discard all" |
*
* @param {Admin_Ops_Dl_Discard_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_discard_all = /** @type {((inputs?: Admin_Ops_Dl_Discard_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Discard_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_discard_all(inputs)
	if (locale === "de") return de_admin_ops_dl_discard_all(inputs)
	if (locale === "fr") return fr_admin_ops_dl_discard_all(inputs)
	if (locale === "it") return it_admin_ops_dl_discard_all(inputs)
	if (locale === "nl") return nl_admin_ops_dl_discard_all(inputs)
	if (locale === "pl") return pl_admin_ops_dl_discard_all(inputs)
	if (locale === "pt") return pt_admin_ops_dl_discard_all(inputs)
	if (locale === "ru") return ru_admin_ops_dl_discard_all(inputs)
	if (locale === "sv") return sv_admin_ops_dl_discard_all(inputs)
	if (locale === "tr") return tr_admin_ops_dl_discard_all(inputs)
	if (locale === "zh") return zh_admin_ops_dl_discard_all(inputs)
	if (locale === "ja") return ja_admin_ops_dl_discard_all(inputs)
	return en_admin_ops_dl_discard_all(inputs)
});
