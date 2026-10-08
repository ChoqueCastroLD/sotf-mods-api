/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_DiscardInputs */

const en_admin_ops_dl_discard = /** @type {(inputs: Admin_Ops_Dl_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discard`)
};

const es_admin_ops_dl_discard = /** @type {(inputs: Admin_Ops_Dl_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar`)
};

const de_admin_ops_dl_discard = /** @type {(inputs: Admin_Ops_Dl_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwerfen`)
};

const fr_admin_ops_dl_discard = /** @type {(inputs: Admin_Ops_Dl_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abandonner`)
};

const it_admin_ops_dl_discard = /** @type {(inputs: Admin_Ops_Dl_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarta`)
};

const nl_admin_ops_dl_discard = /** @type {(inputs: Admin_Ops_Dl_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen`)
};

const pl_admin_ops_dl_discard = /** @type {(inputs: Admin_Ops_Dl_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzuć`)
};

const pt_admin_ops_dl_discard = /** @type {(inputs: Admin_Ops_Dl_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar`)
};

const ru_admin_ops_dl_discard = /** @type {(inputs: Admin_Ops_Dl_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить`)
};

const sv_admin_ops_dl_discard = /** @type {(inputs: Admin_Ops_Dl_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släng`)
};

const tr_admin_ops_dl_discard = /** @type {(inputs: Admin_Ops_Dl_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`At`)
};

const zh_admin_ops_dl_discard = /** @type {(inputs: Admin_Ops_Dl_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`丢弃`)
};

const ja_admin_ops_dl_discard = /** @type {(inputs: Admin_Ops_Dl_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`破棄`)
};

/**
* | output |
* | --- |
* | "Discard" |
*
* @param {Admin_Ops_Dl_DiscardInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_discard = /** @type {((inputs?: Admin_Ops_Dl_DiscardInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_DiscardInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_discard(inputs)
	if (locale === "de") return de_admin_ops_dl_discard(inputs)
	if (locale === "fr") return fr_admin_ops_dl_discard(inputs)
	if (locale === "it") return it_admin_ops_dl_discard(inputs)
	if (locale === "nl") return nl_admin_ops_dl_discard(inputs)
	if (locale === "pl") return pl_admin_ops_dl_discard(inputs)
	if (locale === "pt") return pt_admin_ops_dl_discard(inputs)
	if (locale === "ru") return ru_admin_ops_dl_discard(inputs)
	if (locale === "sv") return sv_admin_ops_dl_discard(inputs)
	if (locale === "tr") return tr_admin_ops_dl_discard(inputs)
	if (locale === "zh") return zh_admin_ops_dl_discard(inputs)
	if (locale === "ja") return ja_admin_ops_dl_discard(inputs)
	return en_admin_ops_dl_discard(inputs)
});
